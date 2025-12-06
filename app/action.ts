'use server'

import { auth } from '@clerk/nextjs/server'
import { db } from '@/db/client'
import { userProfiles } from '@/db/schema'
import { eq } from 'drizzle-orm'

type ClerkSessionClaims = {
  email?: string
  email_addresses?: { email_address: string }[]
}

export async function saveUserProfile(formData: FormData) {
  const { userId, sessionClaims } = await auth()
  if (!userId) throw new Error('User not authenticated')

  const claims = sessionClaims as unknown as ClerkSessionClaims

  const email =
    claims.email ||
    claims.email_addresses?.[0]?.email_address ||
    ''

  const name = formData.get('name') as string
  const preferences = formData.get('preferences') as string

  try {
    const existingProfile = await db
      .select()
      .from(userProfiles)
      .where(eq(userProfiles.clerkId, userId))
      .limit(1)

    if (existingProfile.length > 0) {
      await db
        .update(userProfiles)
        .set({ name, preferences })
        .where(eq(userProfiles.clerkId, userId))
    } else {
      await db.insert(userProfiles).values({
        clerkId: userId,
        name,
        email,
        preferences,
      } as any)
    }

    return { success: true, message: 'Profile saved successfully' }
  } catch (error) {
    console.error('Error saving profile:', error)
    return { success: false, message: 'Failed to save profile' }
  }
}

export async function getUserProfile() {
  const { userId } = await auth()
  if (!userId) return null

  try {
    const profile = await db
      .select()
      .from(userProfiles)
      .where(eq(userProfiles.clerkId, userId))
      .limit(1)

    return profile[0] || null
  } catch (error) {
    console.error('Error fetching profile:', error)
    return null
  }
}
