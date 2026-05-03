import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: "https://coursify-rakib.vercel.app/",
});

export const { signIn, signUp, useSession } = createAuthClient();
