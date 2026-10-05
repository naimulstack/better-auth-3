import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { Resend } from "resend";

const client = new MongoClient(process.env.BETTER_AUTH_MONGODB_URL);
const db = client.db("better-auth-practice-3");

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,

  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },

  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, request) => {
      await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: [user.email],
        subject: "Verify your email address",
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 40px 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; padding: 40px; text-align: center;">
              
              <h1 style="margin: 0 0 10px; color: #111827;">
                Verify Your Email
              </h1>

              <p style="color: #6b7280; font-size: 16px; line-height: 1.6;">
                Hi ${user.name || "there"},
              </p>

              <p style="color: #6b7280; font-size: 16px; line-height: 1.6;">
                Thanks for creating an account with us.
                Please verify your email address to activate your account.
              </p>

              <a
                href="${url}"
                style="
                  display: inline-block;
                  margin-top: 20px;
                  padding: 14px 28px;
                  background-color: #dc2626;
                  color: #ffffff;
                  text-decoration: none;
                  border-radius: 8px;
                  font-weight: 600;
                  font-size: 16px;
                "
              >
                Verify My Email
              </a>

              <p style="margin-top: 30px; color: #9ca3af; font-size: 13px; line-height: 1.5;">
                If you didn't create an account, you can safely ignore this email.
              </p>

              <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">
                Best regards,<br />
                <strong>JihanDev</strong>
              </p>

            </div>
          </div>
        `,
      });
    },

    sendOnSignUp: true,
    autoSignInAfterVerification:true,
    expiresIn: 60 * 3,
  },

  socialProviders: {
    google: {
      clientId: process.env.BETTER_AUTH_CLIENT_ID,
      clientSecret: process.env.BETTER_AUTH_CLIENT_SECRET,
    },
  },
});