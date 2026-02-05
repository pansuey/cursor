# Tanstack Start Project

A modern full-stack React application built with TanStack Start and TanStack Router.

## Features

- ⚡️ **TanStack Start** - Full-stack React framework
- 🚦 **TanStack Router** - Type-safe routing with code-splitting
- 🎨 **Tailwind CSS** - Utility-first CSS framework (via CDN)
- 📝 **TypeScript** - Full type safety
- 🔧 **Vinxi** - Build tool and dev server
- 🔍 **ESLint & Prettier** - Code linting and formatting
- 🛠️ **Dev Tools** - TanStack Router DevTools included

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
├── app/                    # Application source
│   ├── routes/            # File-based routing
│   │   ├── __root.tsx     # Root layout
│   │   ├── index.tsx      # Home page
│   │   └── about.tsx      # About page
│   ├── client.tsx         # Client entry point
│   ├── server.tsx         # Server entry point
│   ├── router.tsx         # Router configuration
│   └── routeTree.gen.ts   # Generated route tree
├── public/                # Static assets
├── vinxi.config.ts        # Vinxi configuration
├── tsconfig.json          # TypeScript configuration
├── tsr.config.json        # TanStack Router configuration
└── package.json           # Dependencies and scripts
```

## Routes

The project includes a file-based routing system:

- `/` - Home page
- `/about` - About page

Add new routes by creating files in the `app/routes/` directory.

## Development

### Adding New Routes

1. Create a new `.tsx` file in `app/routes/`
2. Export a Route created with `createFileRoute()`
3. The route tree will be automatically regenerated

Example:

```tsx
// app/routes/contact.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <div className="p-2">
      <h3>Contact Us</h3>
      <p>Get in touch!</p>
    </div>
  )
}
```

### Styling

This project uses Tailwind CSS via CDN for styling. You can:

1. Install Tailwind locally for better performance
2. Use CSS modules or styled-components
3. Add your own CSS files

## Learn More

- [TanStack Start Documentation](https://tanstack.com/start)
- [TanStack Router Documentation](https://tanstack.com/router)
- [Vinxi Documentation](https://vinxi.vercel.app)

## License

MIT