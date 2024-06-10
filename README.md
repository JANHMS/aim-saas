# AIM
https://aim-saas.vercel.app/en

**AIM: Reach your Sales targets with AI
Webscrape your target person and priotorize your leads with AI**

-> 1$ spend on Aim. leads to 5$ revenue for you <-  


Get Started


### Installation

1. Use the `bun create` command(🌟Strongly recommend🌟):

2. Manually clone the repository:

```bash
git clone https://github.com/JANHMS/aim-saas/
cd aim-saas
bun install
```

### Setup

Follow these steps to set up your project:

1. Set up the environment variables:

```bash
cp .env.example .env.local
// (you must have a database prepared before running this command)
bun db:push
```

2. Run the development server:

```bash
bun run dev:web
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

4. (Optional alpha)`bun run tailwind-config-viewer` Open [http://localhost:3333](http://localhost:3333) in your browser to see your Tailwind CSS configuration

### 🐭 Frameworks

- **[Next.js](https://nextjs.org/)** - The React Framework for the Web (with **App Directory**)
- **[NextAuth.js](https://next-auth.js.org/)** - Authentication for Next.js
- **[Kysely](https://kysely.dev/)** - The type-safe SQL query builder for TypeScript
- **[Prisma](https://www.prisma.io/)** - Next-generation ORM for Node.js and TypeScript, used as a schema management tool
- **[React-email](https://react.email/)** - A React renderer for creating beautiful emails using React components

### 🐮 Platforms

- **[Vercel](https://vercel.com/)** – Deploy your Next.js app with ease
- **[Stripe](https://stripe.com/)** – Payment processing for internet businesses
- **[Resend](https://resend.com/)** – Email marketing platform for developers

### 🐯 Enterprise Features

- **[i18n](https://nextjs.org/docs/app/building-your-application/routing/internationalization)** - Support for internationalization
- **[SEO](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)** - Search engine optimization
- **[MonoRepo](https://turbo.build/)** - Monorepo for better code management
- **[T3 Env](https://env.t3.gg/)** - Manage your environment variables with ease

### 🐰 Data Fetching

- **[trpc](https://trpc.io/)** – End-to-end typesafe APIs made easy
- **[tanstack/react-query](https://react-query.tanstack.com/)** – Hooks for fetching, caching and updating asynchronous data in React

### 🐲 Global State Management

- **[Zustand](https://zustand.surge.sh/)** – Small, fast and scalable state management for React

### 🐒 UI

- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework for rapid UI development
- **[Shadcn/ui](https://ui.shadcn.com/)** – Re-usable components built using Radix UI and Tailwind CSS
- **[Framer Motion](https://framer.com/motion)** – Motion library for React to animate components with ease
- **[Lucide](https://lucide.dev/)** – Beautifully simple, pixel-perfect icons
- **[next/font](https://nextjs.org/docs/basic-features/font-optimization)** – Optimize custom fonts and remove external network requests for improved performance

### 🐴 Code Quality

- **[TypeScript](https://www.typescriptlang.org/)** – Static type checker for end-to-end type safety
- **[Prettier](https://prettier.io/)** – Opinionated code formatter for consistent code style
- **[ESLint](https://eslint.org/)** – Pluggable linter for Next.js and TypeScript
- **[Husky](https://typicode.github.io/husky)** – Git hooks made easy

### 🐑 Performance

- **[Vercel Analytics](https://vercel.com/analytics)** – Real-time performance metrics for your Next.js app
- **[bun.sh](https://bun.sh/)** – npm alternative for faster and more reliable package management

### 🐘 Database

- **[PostgreSQL](https://www.postgresql.org/)** – The world's most advanced open source database

## 📦 Apps and Packages

- `web`: The main Next.js application
- `ui`: Shared UI components
- `db`: Database schema and utilities
- `auth`: Authentication utilities
- `email`: Email templates and utilities
