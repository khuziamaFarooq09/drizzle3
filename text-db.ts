import { db } from './db/client'
import { userProfiles } from './db/schema'

async function testConnection() {
  try {
    const result = await db.select().from(userProfiles).limit(1)
    console.log('Connection successful:', result)
  } catch (error) {
    console.error('Connection failed:', error)
  }
}

testConnection()