// Shared MongoDB connection for the API functions. Files under api/_lib are
// not deployed as endpoints.
import { MongoClient } from 'mongodb'

// Reused across warm invocations so each request doesn't open a new connection
let clientPromise

export function getDb() {
  clientPromise ??= new MongoClient(process.env.MONGODB_URI).connect()
  return clientPromise.then((client) => client.db())
}

// Drop a failed connection so the next request reconnects
export function resetDbOnError(err) {
  if (err?.name?.startsWith('Mongo')) clientPromise = undefined
}
