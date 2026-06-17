# Akshat Shah — Cinematic Portfolio 🚀

A dark, cinematic developer portfolio inspired by modern award-winning designs.
Built with **Angular 19** (standalone components), animated particle canvas, and a sleek sidebar nav.

---

## ✨ Design Highlights

- **Animated particle canvas** — floating dots with mouse-interaction and connecting lines
- **Left sidebar navigation** — fixed vertical nav with active-section indicator & tooltips
- **Full-screen hero** — huge name, typewriter roles, rotating ring around photo, floating badges
- **Tabbed skills panel** — categorized skill bars with animated fills
- **Timeline experience** — color-coded with achievement metrics
- **Project grid** — featured 2-up + 3-column smaller cards
- **Terminal card** in contact — hacker-aesthetic availability display
- **Dark palette** — `#0a0a0a` base, `#00ff88` accent, `#00d4ff` secondary

---

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── particles/     ← Canvas particle animation (fixed background)
│   │   ├── navbar/        ← Left sidebar nav with tooltips + mobile hamburger
│   │   ├── hero/          ← Full-screen hero, typewriter, rotating rings, floating badges
│   │   ├── about/         ← Photo, bio, colorized tech stack, stat cards
│   │   ├── skills/        ← Tabbed skill bars with animated progress
│   │   ├── experience/    ← Color-coded timeline with metrics + education
│   │   ├── projects/      ← Featured 2-up + 3-col grid with hover glow
│   │   └── contact/       ← Info cards, terminal card, contact form
│   ├── app.component.*
│   └── app.config.ts
├── assets/
│   └── images/
│       └── profile.png    ← ⚠️ Replace with your actual photo
└── styles.scss            ← CSS variables, global utilities, animations
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Run Locally

```bash
# Install dependencies
npm install

# Start dev server
ng serve

# Open in browser
http://localhost:4200
```

### Build for Production

```bash
ng build --configuration production
# Output: dist/akshat-portfolio2/browser/
```

---

## 🎨 Customization Guide

### 1. Replace Your Photo
Put your headshot at: `src/assets/images/profile.png`
- Recommended: square crop, 400×400px minimum, PNG format

### 2. Add Your Resume for Download
Put your PDF at: `src/assets/resume.pdf`
The "Resume" button in the hero will auto-download it.

### 3. Update GitHub & LinkedIn Links
In `navbar.component.ts` → `socials` array
In `contact.component.ts` → `socials` array

### 4. Change Accent Color
In `src/styles.scss`:
```scss
:root {
  --accent: #00ff88;   /* Green — change to any color */
  --accent2: #00d4ff;  /* Cyan  — secondary accent */
}
```

### 5. Add Projects
In `projects.component.ts` → `projects` array, add objects with:
`emoji, title, desc, tags[], metrics[], color, featured`

### 6. Update Skills
In `skills.component.ts` → `categories` array

---

## 🌐 Deployment

### Vercel (Easiest)
```bash
npm i -g vercel
ng build
vercel dist/akshat-portfolio2/browser
```

### Netlify
```bash
ng build
# Drop dist/akshat-portfolio2/browser onto netlify.com/drop
```

### GitHub Pages
```bash
ng add angular-cli-ghpages
ng deploy --base-href=/REPO_NAME/
```

---

## 📦 Stack
- **Angular 19** (Standalone Components, no NgModules)
- **SCSS** with CSS Custom Properties
- **Canvas API** for particle animation
- **TypeScript 5**
- **Google Fonts** — Poppins + Fira Code
- Zero external UI libraries

## 📄 License
MIT — free to use and customize.
