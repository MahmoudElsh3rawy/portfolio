// Vercel serverless function for the contact form: stores the message in
// MongoDB and emails it via Resend. Needs MONGODB_URI and RESEND_API_KEY.
import { MongoClient } from 'mongodb'
import { Resend } from 'resend'

const TO_EMAIL = 'mahmoudelsharawy92@gmail.com'
const LIMITS = { name: 100, email: 254, message: 5000 }
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Reused across warm invocations so each request doesn't open a new connection
let clientPromise

function getDb() {
  clientPromise ??= new MongoClient(process.env.MONGODB_URI).connect()
  return clientPromise.then((client) => client.db())
}

const escapeHtml = (value) =>
  value.replace(
    /[&<>"']/g,
    (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]
  )

export function validate(body) {
  const data = {}
  for (const field of Object.keys(LIMITS)) {
    const value = typeof body?.[field] === 'string' ? body[field].trim() : ''
    if (!value) return { error: `Missing ${field}` }
    if (value.length > LIMITS[field]) return { error: `${field} is too long` }
    data[field] = value
  }
  if (!EMAIL_PATTERN.test(data.email)) return { error: 'Invalid email' }
  return { data }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { data, error } = validate(req.body)
  if (error) return res.status(400).json({ message: error })

  if (!process.env.MONGODB_URI || !process.env.RESEND_API_KEY) {
    console.error('Contact form: MONGODB_URI or RESEND_API_KEY is not set')
    return res.status(500).json({ message: 'Something went wrong' })
  }

  try {
    const db = await getDb()
    const now = new Date()
    // Same "contacts" collection and fields the old Express/Mongoose backend used
    await db.collection('contacts').insertOne({ ...data, createdAt: now, updatedAt: now })

    const name = escapeHtml(data.name)
    const { error: sendError } = await new Resend(process.env.RESEND_API_KEY).emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: TO_EMAIL,
      replyTo: data.email,
      subject: `New message from ${data.name.replace(/\s+/g, ' ')}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
      `,
    })
    if (sendError) throw new Error(`Resend: ${sendError.message}`)

    return res.status(201).json({ message: 'Message sent successfully!' })
  } catch (err) {
    console.error('Contact form failed:', err)
    // Drop a failed connection so the next request reconnects
    if (err?.name?.startsWith('Mongo')) clientPromise = undefined
    return res.status(500).json({ message: 'Something went wrong' })
  }
}
