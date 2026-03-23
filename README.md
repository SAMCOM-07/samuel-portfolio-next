# Samuel Shonde - Portfolio Website

A modern, full-featured portfolio website showcasing professional work, skills, and expertise. Built with cutting-edge web technologies to deliver an exceptional user experience with smooth animations, dark mode support, and interactive features.

**Live Demo:** [samuelshonde.vercel.app](https://samuelshonde.vercel.app/)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Installation](#-installation)
- [Development](#-development)
- [Building & Deployment](#-building--deployment)
- [Configuration](#-configuration)
- [Key Features Details](#-key-features-details)
- [Performance Optimizations](#-performance-optimizations)
- [Contributing](#-contributing)

---

## ✨ Features

- **Responsive Design** - Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Dark Mode Support** - Seamless theme switching with system preference detection using `next-themes`
- **Interactive Animations** - Smooth page transitions and component animations powered by Framer Motion
- **Project Showcase** - Display of featured projects with GitHub and live demo links
- **Technology Stack** - Visual representation of skills and technologies
- **AI-Powered Chatbot** - Integrated OpenAI chatbot for interactive communication
- **Dark/Light Theme Images** - Projects display different images based on the current theme
- **FAQ Section** - Frequently asked questions with accordion-style layout
- **Contact Form** - Professional contact page for inquiries
- **SEO Optimized** - Server-side rendering with automatic sitemap generation
- **Performance First** - Next.js optimizations including image optimization, font optimization, and code splitting
- **Type Safe** - 100% TypeScript codebase for reliability and maintainability

---

## 🛠 Tech Stack

### Core Framework
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router and Server Components
- **[React 19](https://react.dev/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Static typing for JavaScript

### Styling & UI
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[React Icons](https://react-icons.github.io/react-icons/)** - Additional icon pack

### Animation & Interactivity
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

### Content & Communication
- **[OpenAI](https://openai.com/)** - AI-powered chatbot integration
- **[React Markdown](https://github.com/remarkjs/react-markdown)** - Markdown rendering

### Build & Optimization
- **[next-sitemap](https://www.npmjs.com/package/next-sitemap)** - Automatic sitemap generation for SEO
- **[ESLint](https://eslint.org/)** - Code quality and consistency

---

## 📁 Project Structure

```
samuel-portfolio-next/
├── src/
│   ├── app/
│   │   ├── (pages)/              # Route groups
│   │   │   ├── about/page.tsx
│   │   │   ├── contact/page.tsx
│   │   │   └── projects/page.tsx
│   │   ├── api/
│   │   │   └── chatbot/route.ts  # AI chatbot endpoint
│   │   ├── layout.tsx            # Root layout with theme support
│   │   ├── page.tsx              # Home page
│   │   └── globals.css           # Global styles
│   ├── components/               # Reusable React components
│   │   ├── About.tsx
│   │   ├── Card.tsx
│   │   ├── Chatbot.tsx          # AI chatbot component
│   │   ├── Connect.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Faq.tsx
│   │   ├── Footer.tsx
│   │   ├── HamburgerMenu.tsx
│   │   ├── Home.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   ├── ShowMoreButton.tsx
│   │   ├── Technologies.tsx
│   │   └── ThemeToggle.tsx       # Dark/Light mode toggle
│   ├── context/
│   │   └── AppContext.tsx        # Global app state
│   └── lib/
│       └── data/
│           └── data.ts           # Projects and tech stack data
├── public/
│   ├── images/                   # General images
│   ├── projects-images/          # Project showcase images
│   └── stack-images/             # Technology stack logos
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **pnpm** (recommended) or npm/yarn/bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SAMCOM-07/samuel-portfolio-next.git
   cd samuel-portfolio-next
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # OpenAI API (for chatbot feature)
   NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open in browser**
   
   Visit [http://localhost:3000](http://localhost:3000) to see the portfolio running locally.

---

## 💻 Development

### Available Scripts

```bash
# Start development server with hot reload
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run ESLint for code quality
pnpm lint
```

### Hot Reload

The development server supports hot module replacement (HMR). Changes to component files are reflected instantly in the browser without requiring a full page refresh.

### Adding New Projects

Edit `src/lib/data/data.ts` to add new projects:

```typescript
{
  id: number,
  name: "Project Name",
  description: "Project description",
  img: ["/path/to/light-mode-image.jpg", "/path/to/dark-mode-image.jpg"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://your-project.vercel.app/",
  status: "Completed ✅" or "In Progress 📍",
  stacks: [...]
}
```

### Adding Technologies

Update the `stackData` array in `src/lib/data/data.ts`:

```typescript
{
  name: "Technology Name",
  img: "/stack-images/logo.png",
  category: "frontend|backend|tools",
  documentation: "https://docs-link.com"
}
```

---

## 📦 Building & Deployment

### Production Build

```bash
pnpm build
```

This creates an optimized build in the `.next` directory and automatically generates the sitemap.

### Deploy to Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Vercel automatically deploys on every push to main branch

### Manual Deployment

After running `pnpm build`, you can deploy the `.next` directory to any Node.js server:

```bash
pnpm start
```

---

## ⚙️ Configuration

### Next.js Configuration

Edit `next.config.ts` to modify Next.js behavior:

```typescript
const nextConfig: NextConfig = {
  // Config options here
};
```

### Tailwind CSS

Customize styling in `tailwind.config.ts`:

```typescript
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        // Custom colors
      },
    },
  },
};
```

### Theme Configuration

Theme preferences are managed via `next-themes` in `src/app/layout.tsx`:

```typescript
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {/* App content */}
</ThemeProvider>
```

---

## 🎯 Key Features Details

### Dark Mode Implementation

- **System Detection** - Automatically detects user's system color scheme preference
- **Persistent Storage** - Theme preference saved to localStorage
- **Smooth Transitions** - CSS transitions for flawless theme switching
- **Zero Flash** - Inline script prevents flash of wrong theme on page load

### AI Chatbot

The integrated chatbot uses OpenAI's API. Messages are sent to the `/api/chatbot` endpoint for intelligent responses.

### SEO Optimization

- **Server-Side Rendering** - All pages rendered on the server for better SEO
- **Automatic Sitemap** - `next-sitemap` generates sitemap.xml automatically
- **Meta Tags** - Configured in `layout.tsx` with Open Graph and Twitter card support
- **Canonical URLs** - Prevent duplicate content issues

### Responsive Design

Mobile-first approach using Tailwind's responsive utilities:
- Mobile (default)
- Tablet (md:)
- Desktop (lg:)
- Wide screens (xl:, 2xl:)

---

## ⚡ Performance Optimizations

1. **Image Optimization** - Next.js automatic image optimization with multiple sizes
2. **Font Optimization** - Geist fonts loaded with `next/font` for better performance
3. **Code Splitting** - Automatic code splitting per route
4. **Static Generation** - Pages pre-rendered at build time
5. **CSS Optimization** - Unused CSS stripped in production
6. **Hydration Optimization** - Proper handling of client/server component boundaries

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow the existing code structure and patterns
- Use TypeScript for type safety
- Keep components small and focused
- Add comments for complex logic

---

## 📄 License

This project is open source and available under the MIT License. Feel free to use, modify, and distribute as needed.

---

## 📞 Contact & Links

- **Portfolio Website** - [samuelshonde.vercel.app](https://samuelshonde.vercel.app/)
- **GitHub** - [SAMCOM-07](https://github.com/SAMCOM-07)
- **Twitter** - [@sammyshowed](https://twitter.com/sammyshowed)
- **Email** - Contact via the portfolio website

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [shadcn/ui](https://shadcn.com/) - UI components
- [Vercel](https://vercel.com/) - Hosting and deployment platform

---

**Made with ❤️ by Samuel Shonde**
