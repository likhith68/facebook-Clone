import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXT_PUBLIC_SECRET,

    callbacks: {
        async session({ session, token, user }) {
            session.user.username = session.user.name
            session.user.uid = token.sub;
            return session;
        },
    },
})