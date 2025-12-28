# CommitFlow Website
website for https://commitflow.dev
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
