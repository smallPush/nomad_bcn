---
name: nextjs
description: Development with Next.js 16+, focusing on App Router, React Server Components, and API routes. Use when creating or modifying pages, layouts, and data-fetching logic in a Next.js environment.
---

# Next.js 16+ Development

## Core Principles

- **App Router First**: All new routes should be created within the `src/app/` directory.
- **Server Components by Default**: Favor Server Components for data fetching and minimal interactivity. Use `'use client'` only when necessary (event listeners, state, effects).
- **File-based Routing**: Use `page.tsx` for UI, `layout.tsx` for shared UI, `loading.tsx` for loading states, and `error.tsx` for error boundaries.

## Common Patterns

### Creating a New Page
```tsx
// src/app/new-page/page.tsx
export default async function NewPage() {
  // Server-side logic/data fetching here
  return (
    <main>
      <h1>New Page</h1>
    </main>
  );
}
```

### Client Components
```tsx
'use client';

import { useState } from 'react';

export default function InteractiveComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### API Routes (Route Handlers)
```ts
// src/app/api/hello/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello' });
}
```

## Data Fetching

Use `fetch` directly in Server Components. It is automatically memoized and can be configured for caching.

```tsx
async function getData() {
  const res = await fetch('https://api.example.com/...');
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

## Metadata

Use the Metadata API for SEO.

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page Description',
};
```
