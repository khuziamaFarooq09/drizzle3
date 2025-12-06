'use server'

import { auth, currentUser } from '@clerk/nextjs/server'
import { db } from '@/db/client'
import { userProfiles } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function saveUserProfile(formData: FormData) {
  const { userId } = auth()
  if (!userId) throw new Error('User not authenticated')

  const user = await currentUser()
  if (!user) throw new Error('User not found')

  const name = formData.get('name') as string
  const preferences = formData.get('preferences') as string

  try {
    // Check if profile exists
    const existingProfile = await db.select().from(userProfiles).where(eq(userProfiles.clerkId, userId)).limit(1)
    
    if (existingProfile.length > 0) {
      // Update existing profile
      await db.update(userProfiles)
        .set({ name, preferences })
        .where(eq(userProfiles.clerkId, userId))
    } else {
      // Insert new profile
      await db.insert(userProfiles).values({
        clerkId: userId,
        name,
        email: user.primaryEmailAddress?.emailAddress || '',
        preferences,
      })
    }

    return { success: true, message: 'Profile saved successfully' }
  } catch (error) {
    console.error('Error saving profile:', error)
    return { success: false, message: 'Failed to save profile' }
  }
}

export async function getUserProfile() {
  const { userId } = auth()
  if (!userId) return null

  try {
    const profile = await db.select().from(userProfiles).where(eq(userProfiles.clerkId, userId)).limit(1)
    return profile[0] || null
  } catch (error) {
    console.error('Error fetching profile:', error)
    return null
  }
}