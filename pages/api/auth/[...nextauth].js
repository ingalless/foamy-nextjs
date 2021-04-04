import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const { GITHUB_ID, GITHUB_SECRET, GITHUB_USER } = process.env;

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      return user.name === GITHUB_USER;
    },
  },
});
