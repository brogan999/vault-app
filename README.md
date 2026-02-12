# Anima

A privacy-centric AI companion that integrates psychological data using Retrieval-Augmented Generation (RAG).

## Tech Stack

- **Frontend**: Next.js 14+ (App Router), TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Next.js Server Actions, Supabase (PostgreSQL + pgvector), Clerk Auth
- **State Management**: Zustand (client), TanStack Query (server), React Hook Form + Zod
- **AI/LLM**: Vercel AI SDK, OpenAI/Anthropic, LangChain
- **Payments**: Stripe (Checkout Sessions + Webhooks)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Clerk account
- OpenAI API key
- Stripe account (for payments)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   Fill in all required environment variables. **When to do each integration:** see [INTEGRATIONS.md](INTEGRATIONS.md).

4. Set up Supabase:
   - Create a Supabase project
   - Enable the pgvector extension
   - Run the Prisma migrations:
     ```bash
     npm run db:push
     ```
   - Run the SQL functions from `prisma/supabase_functions.sql`
   - Create a storage bucket named "documents"

5. Set up Clerk:
   - Create a Clerk application
   - Configure webhook endpoint: `/api/webhooks/clerk`
   - Add webhook secret to `.env.local`

6. Run the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
/app
  /(public)          # Public routes (landing, pricing)
  /(protected)       # Protected routes (mirror, vault, chat, store, settings)
  /api               # API routes (webhooks, etc.)
  /actions           # Server actions
/components
  /ui                # Shadcn components
  /layout            # Layout components
  /features          # Feature-specific components
/lib
  /supabase          # Supabase client & utilities
  /clerk             # Clerk utilities
  /ai                # AI/RAG utilities
  /stripe            # Stripe utilities
/prisma              # Database schema and migrations
/store               # Zustand stores
```

## Key Features

- **Anima**: Upload and manage psychological data (PDFs, audio, text)
- **The Mirror**: Dashboard with widgets showing personality insights
- **Chat**: AI-powered chat with RAG for personalized responses
- **Voice Journaling**: Record and transcribe voice journals
- **Privacy Shield**: Toggle to prevent logging sensitive conversations
- **Theme System**: Multiple color palettes (Neutral, Muddy, Neon, Jewel, Pastel)

## When to do integrations

**Going through setup with the AI?** Use **[STEP-BY-STEP.md](STEP-BY-STEP.md)**—the AI will tell you **“You do this now”** at each step where you need to act. Reference: **[INTEGRATIONS.md](INTEGRATIONS.md)**. Summary:

- **Before first run:** Supabase + Clerk (env in `.env.local`).
- **Right after first Vercel deploy:** Add env vars in Vercel, then **Clerk webhook** (Dashboard → Webhooks → add endpoint, copy signing secret → Vercel `WEBHOOK_SECRET`, redeploy).
- **When you use Chat or RAG:** Add `OPENAI_API_KEY` (local and/or Vercel).
- **When you use Pricing/Store:** Add Stripe keys and Price IDs; add Stripe webhook in Stripe Dashboard and `STRIPE_WEBHOOK_SECRET` in Vercel for production.

## Deployment

### Vercel

1. Push your code to GitHub.
2. Import the project in Vercel. Set the **root directory** to `vault-app` (or deploy from that directory).
3. In **Settings → Environment Variables**, add every variable you use in production (see Environment Variables below). Include Clerk, Supabase, and optionally OpenAI, Stripe, and `NEXT_PUBLIC_APP_URL` (your production URL).
4. Deploy.
5. **Clerk webhook (after first deploy):** In Clerk Dashboard → Webhooks, add endpoint `https://<your-vercel-domain>/api/webhooks/clerk`. Subscribe to `user.created`, `user.updated`, `user.deleted`. Copy the signing secret into Vercel as `WEBHOOK_SECRET` and redeploy if needed.
6. **Stripe (when you want payments):** Create products/prices in Stripe. In Vercel, set `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRO_PRICE_ID`, `STRIPE_FREE_PRICE_ID`, and optionally `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `NEXT_PUBLIC_STRIPE_DEEP_VEDIC_PRICE_ID`, `NEXT_PUBLIC_STRIPE_SCHEMA_PRICE_ID`. In Stripe Dashboard → Developers → Webhooks, add `https://<your-vercel-domain>/api/webhooks/stripe`, subscribe to `checkout.session.completed`, and set the signing secret as `STRIPE_WEBHOOK_SECRET`.

### Environment Variables

Copy `.env.local.example` to `.env.local` and fill in values. Do not commit real secrets.

| Variable | Required | Description |
| -------- | -------- | -------- |
| **Supabase** | | |
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | Supabase anon/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Supabase service role key (server-only) |
| `DATABASE_URL` | Yes (Prisma) | PostgreSQL connection string |
| **Clerk** | | |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Yes | Clerk publishable key |
| `CLERK_SECRET_KEY` | Yes | Clerk secret key |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | Yes | e.g. `/sign-in` |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | Yes | e.g. `/sign-up` |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` | Yes | e.g. `/mirror` |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` | Yes | e.g. `/mirror` |
| `WEBHOOK_SECRET` | Production | Clerk webhook signing secret (after adding endpoint in Clerk Dashboard) |
| **OpenAI** | | |
| `OPENAI_API_KEY` | For Chat/RAG | Required for Chat and document embeddings |
| `ANTHROPIC_API_KEY` | Optional | For Anthropic models if used |
| **Stripe** | | |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | For payments | Stripe publishable key |
| `STRIPE_SECRET_KEY` | For payments | Stripe secret key |
| `STRIPE_WEBHOOK_SECRET` | For payments | Stripe webhook signing secret |
| `STRIPE_PRO_PRICE_ID` | For subscriptions | Stripe Price ID for Pro tier |
| `STRIPE_FREE_PRICE_ID` | For subscriptions | Stripe Price ID for Free tier |
| `NEXT_PUBLIC_STRIPE_DEEP_VEDIC_PRICE_ID` | Optional | One-off product for Store page |
| `NEXT_PUBLIC_STRIPE_SCHEMA_PRICE_ID` | Optional | One-off product for Store page |
| **App** | | |
| `NEXT_PUBLIC_APP_URL` | Optional | Production URL; defaults to `http://localhost:3000` for redirects |
| `VERCEL_URL` | Optional | Set by Vercel at build time |

## License

Private - All rights reserved
