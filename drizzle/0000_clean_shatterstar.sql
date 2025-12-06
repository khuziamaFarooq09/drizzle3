CREATE TABLE "user_profiles" (
	"id" text PRIMARY KEY NOT NULL,
	"clerk_id" text NOT NULL,
	"name" text,
	"email" text NOT NULL,
	"preferences" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "user_profiles_clerk_id_unique" UNIQUE("clerk_id"),
	CONSTRAINT "user_profiles_email_unique" UNIQUE("email")
);
