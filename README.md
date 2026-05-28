# ashokm-portfolio

Ashok Modhave's personal portfolio site — built with Next.js 16, Tailwind CSS v4, and an AI-powered résumé chat.

## Features

- **Portfolio pages** — Home, About, Work, Blog, Stack, Now, Contact, Resume
- **MDX blog** — posts in `content/blog/` with front matter and reading-time
- **AI résumé chat** (`/ask`) — streaming chat powered by Google Gemini 2.0 Flash via the Vercel AI SDK

## Tech stack

| Layer      | Technology                                             |
| ---------- | ------------------------------------------------------ |
| Framework  | Next.js 16 (App Router)                                |
| Styling    | Tailwind CSS v4                                        |
| AI         | Vercel AI SDK v6 + `@ai-sdk/google` (Gemini 2.0 Flash) |
| MDX        | `next-mdx-remote` + `gray-matter`                      |
| Animations | Framer Motion                                          |
| Theming    | `next-themes`                                          |

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Add your Google Generative AI API key (free at [aistudio.google.com](https://aistudio.google.com/app/apikey)):

```env
GOOGLE_GENERATIVE_AI_API_KEY=your_key_here

# Optional: override the default model
# CHAT_MODEL=gemini-2.0-flash
```

On Vercel, set `GOOGLE_GENERATIVE_AI_API_KEY` in **Project Settings → Environment Variables**.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/          # Next.js App Router pages & API routes
  components/   # Shared UI components
  lib/          # Data, utilities, and résumé context builder
content/
  blog/         # MDX blog posts
public/         # Static assets
```

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
