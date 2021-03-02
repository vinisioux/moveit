import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default (req, res) =>
  NextAuth(req, res, {
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      Providers.Discord({
        clientId: process.env.DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET,
      }),
    ],
    debug: process.env.NODE_ENV === 'development',
    jwt: {
      secret: process.env.JWT_SECRET,
    },
    adapter: Adapters.Prisma.Adapter({ prisma }),

    // A database is optional, but required to persist accounts in a database
    // database: process.env.DATABASE_URL,
  });
