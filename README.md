# elysia-cf-starter

A modern, type-safe starter template for building APIs with [Elysia.js](https://elysiajs.com) on [Cloudflare Workers](https://workers.cloudflare.com/), featuring [Drizzle ORM](https://orm.drizzle.team/) with LibSQL/Turso and [Better Auth](https://www.better-auth.com/) for authentication.

## ✨ Features

- ⚡ **Elysia.js** - Fast, type-safe web framework
- 🌐 **Cloudflare Workers** - Edge-first serverless deployment
- 🗃️ **Drizzle ORM** - Type-safe SQL with LibSQL/Turso
- 🔐 **Better Auth** - Modern authentication with email/password
- 📖 **OpenAPI** - Auto-generated API documentation
- 🔒 **CORS** - Pre-configured cross-origin support

## 📋 Prerequisites

- [Bun](https://bun.sh) (v1.0+)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- A [Turso](https://turso.tech/) database (or any LibSQL-compatible database)

## 🚀 Getting Started

### 1. Install dependencies

```bash
bun install
```

### 2. Configure environment variables

Copy the example environment file and fill in your values:

```bash
cp .dev.examples .dev.vars
```

Edit `.dev.vars` with your credentials:

```env
DATABASE_URL=libsql://your-database.turso.io
DATABASE_AUTH_TOKEN=your-turso-auth-token
BETTER_AUTH_SECRET=your-secure-secret-key
```

### 3. Generate Cloudflare types

```bash
bun run cf-types
```

### 4. Set up the database

Generate and run migrations:

```bash
bun run db:generate
bun run db:migrate
```

### 5. Start development server

```bash
bun run dev
```

Your API will be available at `http://localhost:8787`

## 📜 Available Scripts

| Script                | Description                      |
| --------------------- | -------------------------------- |
| `bun run dev`         | Start local development server   |
| `bun run deploy`      | Deploy to Cloudflare Workers     |
| `bun run db:generate` | Generate Drizzle migrations      |
| `bun run db:migrate`  | Apply database migrations        |
| `bun run db:studio`   | Open Drizzle Studio GUI          |
| `bun run cf-types`    | Generate Cloudflare Worker types |

## 📁 Project Structure

```
├── src/
│   ├── index.ts          # Main application entry
│   ├── ctx/
│   │   ├── better-auth.ts # Auth plugin & middleware
│   │   └── database.ts    # Database context
│   ├── db/
│   │   ├── index.ts       # Drizzle client setup
│   │   └── schema.ts      # Database schema
│   └── lib/
│       └── auth.ts        # Better Auth configuration
├── public/                # Static assets
├── drizzle/
│   └── migrations/        # Database migrations
├── drizzle.config.ts      # Drizzle Kit configuration
├── wrangler.toml          # Cloudflare Workers config
└── worker-configuration.d.ts # Generated CF types
```

## 🔐 Authentication

This starter includes Better Auth with email/password authentication. Available endpoints:

- `POST /auth/sign-up` - Register a new user
- `POST /auth/sign-in` - Sign in with credentials
- `POST /auth/sign-out` - Sign out
- `GET /auth/session` - Get current session

### Protected Routes

Use the `auth` macro to protect routes:

```typescript
app.get(
  "/protected",
  ({ user }) => {
    return `Hello, ${user.name}!`;
  },
  {
    auth: true,
  }
);
```

## 📖 API Documentation

OpenAPI documentation is automatically generated and available at `/openapi.json`.

## 🚢 Deployment

Deploy to Cloudflare Workers:

```bash
bun run deploy
```

> **Note:** Make sure to set your environment variables in the Cloudflare dashboard or using `wrangler secret put`.

## 📄 License

MIT
