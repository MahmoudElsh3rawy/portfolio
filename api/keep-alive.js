// Weekly ping (vercel.json "crons") so MongoDB Atlas doesn't auto-pause the
// free cluster for inactivity, which silently broke the contact form.
import { getDb, resetDbOnError } from './_lib/db.js'

export default async function handler(req, res) {
  // Vercel sends CRON_SECRET as a bearer token when the variable is set
  const secret = process.env.CRON_SECRET
  if (secret && req.headers.authorization !== `Bearer ${secret}`) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  if (!process.env.MONGODB_URI) {
    console.error('Keep-alive: MONGODB_URI is not set')
    return res.status(500).json({ ok: false })
  }

  try {
    const db = await getDb()
    await db.command({ ping: 1 })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Keep-alive failed:', err)
    resetDbOnError(err)
    return res.status(500).json({ ok: false })
  }
}
