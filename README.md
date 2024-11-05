## Getting started with Next.js

This branch uses Typescript, Tailwind and the Next.js App Router

This is a [Next.js](https://nextjs.org/) template project that's preconfigured to work with Replicate's API.

## Noteworthy files

- [src/app/page.tsx](src/app/page.tsx) - The React frontend that renders the home page in the browser
- [src/app/api/products/route.ts](src/app/api/products/route.ts) - The backend API endpoint that calls dummy's API to get the products result

## Usage

Get a copy of this repo:
```console
npx create-next-app --example https://github.com/replicate/getting-started-nextjs-typescript your-project-name
cd your-project-name
```

Install dependencies:

```console
npm install
```

Run the development server:

```console
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

Prerequisite:
You must have node version > 18
