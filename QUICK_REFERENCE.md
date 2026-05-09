# 🚀 Quick Reference Card - The Material Bridge

## ⚡ Local Development

```bash
# Setup
npm install
npm run dev

# Build & test
npm run build
npm run lint
npm start
```

**URL**: http://localhost:3000

---

## 📁 File Structure Quick Access

```
src/app/page.tsx           ← Main portfolio page
src/components/            ← React components (Task 2+)
src/lib/content.ts         ← ALL CONTENT (data source)
src/lib/constants.ts       ← Colors, spacing, z-index
src/context/               ← Language & Audio providers
src/types/index.ts         ← TypeScript interfaces
public/assets/             ← Images, sounds, documents
```

---

## 🎯 Important Hooks

### Language (i18n)
```typescript
import { useLanguage } from "@/context/LanguageContext";

const { language, setLanguage, t } = useLanguage();
// language: "en" | "es"
// setLanguage("en")
// t(BilingualString) → translated string
```

### Audio
```typescript
import { useAudio } from "@/context/AudioContext";

const { isMuted, volume, toggleMute, playSound } = useAudio();
// playSound("/assets/sounds/click-metallic.mp3")
```

---

## 🎨 Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Steel | #71717A | Text, borders |
| Black | #000000 | Primary borders, text |
| Dirty | #F4F4F5 | Background |
| Safety | #F97316 | Accents, CTAs |

**Tailwind classes**:
```
text-brutalist-steel, bg-brutalist-safety, border-brutalist-black, etc.
```

---

## 📝 Content Update

All content lives in `src/lib/content.ts`:

```typescript
CONTENT.hero.title         // { es: "...", en: "..." }
CONTENT.caseStudy.hotspots // Array of interactive points
CONTENT.technicalVault     // Password vault data
CONTENT.cta_widget         // LinkedIn CTA
CONTENT.footer.ticker      // Scrolling text
```

**Update = immediate effect** (no component changes needed)

---

## 🔐 Environment Variables

| Variable | Purpose | Where Set |
|----------|---------|-----------|
| `NEXT_PUBLIC_LINKEDIN_URL` | Redirect target | `.env.local` or Vercel |

Public variables (shown in client) start with `NEXT_PUBLIC_`.

---

## 🎬 Responsive Breakpoints

| Breakpoint | Size | Tailwind |
|-----------|------|----------|
| Mobile | 320-640px | (default) |
| Tablet | 641-1024px | `md:` |
| Desktop | 1025px+ | `lg:` |

---

## 📦 Component Template

```typescript
"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CONTENT } from "@/lib/content";

export default function MyComponent() {
  const { t } = useLanguage();

  return (
    <div className="border-4 border-black p-6 bg-white shadow-brutal">
      <h2 className="text-2xl font-bold mb-4">
        {t(CONTENT.hero.title)}
      </h2>
      {/* Component content */}
    </div>
  );
}
```

---

## 🎵 Audio Usage

```typescript
const { playSound } = useAudio();

// Play sound on interaction
onClick={() => playSound("/assets/sounds/click-metallic.mp3")}

// Available paths:
// /assets/sounds/click-metallic.mp3
// /assets/sounds/hydraulic-soft.mp3
// /assets/sounds/industrial-ambient.mp3
```

---

## 🔗 Important Routes

| Route | Purpose |
|-------|---------|
| `/` | Main portfolio page |
| `/connect` | Redirect to LinkedIn |

---

## 📚 Tailwind Utilities

### Brutal Styles
```html
<!-- Border -->
<div class="border-4 border-black"></div>

<!-- Shadow -->
<div class="shadow-brutal lg:shadow-brutal-lg"></div>

<!-- Text -->
<h1 class="text-5xl font-black">Title</h1>

<!-- Buttons -->
<button class="px-6 py-3 font-bold border-4 border-black bg-white hover:bg-brutalist-safety">
  Click
</button>
```

### Animations
```html
<!-- Blink -->
<div class="animate-blink"></div>

<!-- Ticker -->
<div class="animate-ticker"></div>

<!-- Glitch -->
<div class="animate-glitch"></div>
```

---

## 🐛 Common Issues

| Problem | Solution |
|---------|----------|
| Language not changing | Check localStorage (F12 → Application) |
| Audio not playing | Browser autoplay policy - user must interact first |
| Build error | Run `npm run build` locally, check errors |
| Tailwind classes not applied | Check `tailwind.config.js` content paths |

---

## 🚀 Deploy to Vercel

```bash
# 1. Commit & push to GitHub
git add .
git commit -m "Feature: ..."
git push origin main

# 2. Vercel auto-deploys (2-3 minutes)

# 3. Check Vercel Dashboard for logs
```

**No manual deployment needed** ✓

---

## 📞 Quick Help

**"How do I add content?"**
→ Edit `src/lib/content.ts`, site updates automatically

**"How do I change colors?"**
→ Update `src/lib/constants.ts` and `tailwind.config.js`

**"How do I add a new component?"**
→ Create file in `src/components/`, import in `page.tsx`

**"How do I add translations?"**
→ Add `{ es: "...", en: "..." }` to `content.ts`

---

## 📊 Git Workflow

```bash
# Feature branch (recommended)
git checkout -b feature/hero-component
# Make changes
git add .
git commit -m "Add Hero component"
git push origin feature/hero-component
# Create PR on GitHub, merge to main
# Vercel auto-deploys

# Direct commit to main (for small changes)
git commit -m "Update content"
git push origin main
# Auto-deploy in seconds
```

---

## ✅ Pre-Deploy Checklist

- [ ] `npm run build` passes locally
- [ ] `npm run lint` has no errors
- [ ] All images in `public/assets/`
- [ ] Environment variables set on Vercel
- [ ] Mobile-responsive test (F12 toggle device)
- [ ] Language toggle tested
- [ ] All links working

---

## 🎯 Next Steps

1. **Now**: You're here (Task 1 ✅)
2. **Task 2**: Build Hero component
3. **Task 3**: Build interactive components
4. **Task 4**: Assemble & polish
5. **Deploy**: Push to GitHub → Vercel ✓

---

## 📖 Full Docs

- **Setup**: See `README.md`
- **Deployment**: See `DEPLOYMENT_GUIDE.md`
- **Status**: See `TASK_1_SUMMARY.md`
- **All Files**: See `PROJECT_INVENTORY.json`

---

**Made with ❤️ and 💪 Brutalist Philosophy**

Last updated: 2026-05-09
