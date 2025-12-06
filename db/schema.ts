import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'
export const userProfiles = pgTable('user_profiles', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  clerkId: text('clerk_id').unique().notNull(),
  name: text('name'),
  email: text('email').unique().notNull(),
  preferences: text('preferences'), // e.g., JSON string for fabric preferences
  createdAt: timestamp('created_at').defaultNow().notNull(),
})