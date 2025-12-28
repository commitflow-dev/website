# CommitFlow Website

A beautiful, responsive website for CommitFlow CLI tool built with Astro, MDX, Tailwind CSS, and ShadcnUI.

## 🚀 Features

- **Interactive Terminal Demo**: See CommitFlow commands in action with typing animation
- **Responsive Design**: Mobile-first approach with beautiful layouts
- **Dark Mode**: Complete dark/light theme support
- **Modern Tech Stack**: Astro + React + Tailwind CSS 4 + ShadcnUI
- **Performance Optimized**: Fast loading and smooth animations
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **UI Components**: [ShadcnUI](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Netlify (configurable)

## 📦 Development

### Prerequisites

- Node.js 18+
- npm or pnpm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development URLs

- **Local**: http://localhost:4321/
- **Network**: Available on local network with `--host` flag

## 🎨 Design System

### Colors

The website uses a GitHub-inspired color scheme with CommitFlow branding:

- **Primary**: Blue accent links
- **Terminal**: GitHub dark theme colors
- **Background**: Light/dark adaptive
- **Semantic**: Success, warning, error states

### Components

- **Terminal**: Interactive demo with typing animation
- **Navigation**: Sticky header with theme toggle
- **Feature Cards**: Glass morphism effects
- **CTA Buttons**: Consistent interaction states

### Typography

- **Headings**: Inter font family
- **Code**: Jetbrains Mono, SF Mono
- **System**: System font stack for performance

## 🎬 Terminal Demo

The terminal demo is the centerpiece of the website, showing:

1. **Installation**: `npm install -g @commitflow/cli`
2. **Stats Generation**: `commitflow --since "90 days ago" > stats.json`
3. **AI Configuration**: `export OPENAI_API_KEY=sk-xxx`
4. **Changelog**: `commitflow changelog`
5. **UI Launch**: `commitflow ui`

### Features

- **Typing Animation**: Character-by-character command rendering
- **Playback Controls**: Play/pause/restart functionality
- **Keyboard Shortcuts**: Space (play/pause), Enter (restart), Escape (pause)
- **Responsive**: Adapts to mobile screens
- **Accessibility**: ARIA labels and keyboard navigation

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on git push

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Static Hosting

The site builds to static files in `dist/` directory and can be hosted on any static hosting service.

## 📱 Responsive Design

- **Mobile**: Single column, simplified terminal
- **Tablet**: Two-column layouts, full terminal
- **Desktop**: Multi-column layouts, full features

## ♿ Accessibility

- **Semantic HTML**: Proper heading hierarchy, landmarks
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full functionality without mouse
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant

## 🎯 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Bundle Size**: < 100KB gzipped
- **Core Web Vitals**: Optimized for UX
- **Image Optimization**: Modern formats, lazy loading
- **CSS Purging**: Unused styles removed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🔗 Links

- **Live Site**: https://commitflow.dev
- **Documentation**: https://docs.commitflow.dev
- **GitHub Repository**: https://github.com/commitflow/commitflow
- **npm Package**: https://www.npmjs.com/package/@commitflow/cli

---

Built with ❤️ for the CommitFlow community.