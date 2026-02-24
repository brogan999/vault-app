# AGENTS.md

## Cursor Cloud specific instructions

### Overview

**Anima** is a Next.js 16 (App Router) monolith — a privacy-centric AI companion with psychometric tests, AI chat (RAG), document vault, and a store. It relies on external SaaS services (Supabase, Clerk, OpenAI, Stripe) rather than self-hosted infrastructure. No Docker, no microservices.

### Key commands

See `package.json` for all scripts. The important ones:

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Lint | `npm run lint` |
| Format check | `npm run format:check` |
| Prisma generate | `npm run db:generate` |

### Environment variables

Copy `.env.local.example` to `.env.local`. See `README.md` for the full table of variables.

**Critical gotcha — Clerk publishable key format**: The `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` must be a base64-encoded string in the form `pk_test_<base64>`, where the base64 decodes to `https://<instance>.clerk.accounts.dev$`. A plain placeholder like `pk_test_foo` will cause a middleware crash on every request. Use a properly formatted placeholder:
```
pk_test_aHR0cHM6Ly9wbGFjZWhvbGRlci5jbGVyay5hY2NvdW50cy5kZXYk
```

### Running locally without external services

Public pages (landing, pricing, FAQ, Our Framework, terms, privacy, contact, knowledge-base) render fully with placeholder env vars. Auth-protected routes (mirror, vault, chat, store, settings) require real Clerk + Supabase credentials.

### Lint status

The codebase has pre-existing ESLint errors (43 errors, 20 warnings as of initial setup). These are mostly React Hooks rule violations and `@typescript-eslint` issues in the existing code. `npm run lint` exits with code 1 due to these.

### No test framework

There is no test runner configured (no Jest, Vitest, Playwright, or Cypress). There are no automated tests to run.

### Prisma

Prisma 7.x uses `prisma.config.ts` which reads `DATABASE_URL` from `.env.local`. Running `npx prisma generate` only needs the env var set (no live database connection required). The actual database is PostgreSQL with pgvector on Supabase.

### Clerk dev mode sign-up

In Clerk development mode, email verification uses the code `424242`. New user sign-up redirects to `/mirror` (the dashboard). A consent modal ("Before you begin") appears on first visit for new users.

### Running the dev server

`npm run dev` starts on port 3000. The app uses `proxy.ts` as Next.js 16 middleware (Clerk auth + next-intl i18n). All routes except public ones (landing, pricing, FAQ, our-framework, terms, privacy, contact, knowledge-base, sign-in, sign-up, test) require Clerk authentication. The middleware redirects unauthenticated users to `/sign-in`.
