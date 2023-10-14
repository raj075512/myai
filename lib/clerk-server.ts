import { Clerk } from "@clerk/backend";

export const clerk = Clerk({
    // get the auth for secret key //
  apiKey: process.env.CLERK_SECRET_KEY,
});