# 📦 Components Directory

Questa cartella contiene tutti i componenti React per "The Material Bridge".

---

## 📁 Struttura

```
src/components/
├── Hero.tsx                # Main headline section
├── LanguageToggle.tsx      # EN/ES switcher
├── CaseStudy.tsx           # Interactive hotspot showcase
├── TechnicalVault.tsx      # Password-protected section
├── AudioEngine.tsx         # Audio control panel
├── BrutalCTAWidget.tsx     # Fixed corner CTA
├── Footer.tsx              # Footer with privacy & links
└── TickerBar.tsx           # Scrolling text animation
```

---

## 🎯 Ogni Componente

### Hero.tsx
La sezione hero che cattura l'attenzione. **Senza dipendenze custom**, solo context.

```typescript
<Hero /> // Automaticamente bilingue
```

### LanguageToggle.tsx
Switch between languages. Usa `useLanguage()` + `useAudio()`.

```typescript
<LanguageToggle /> // Play audio feedback on click
```

### CaseStudy.tsx
Interactive case study with 3 clickable hotspots. **Stateful** (activeId).

```typescript
<CaseStudy /> // Hotspots rivelano problema/soluzione
```

### TechnicalVault.tsx
Password-protected technical deep-dive. **Stateful** (isUnlocked).

```typescript
<TechnicalVault /> // Password: "STAINLESS"
```

### AudioEngine.tsx
Master audio control. Usa `useAudio()`.

```typescript
<AudioEngine /> // Toggle mute, adjust volume
```

### BrutalCTAWidget.tsx
Fixed corner button. Reindirizza a LinkedIn.

```typescript
<BrutalCTAWidget /> // Position: fixed, z-50
```

### Footer.tsx
Bottom section con privacy, social links, colophon.

```typescript
<Footer /> // Non stateful, puro content
```

### TickerBar.tsx
Scrolling text animation. CSS-based animation.

```typescript
<TickerBar /> // animate-ticker (40s linear infinite)
```

---

## 🎨 Pattern Comuni

Tutti i componenti seguono questo pattern:

```typescript
"use client"; // Client component (interactive)

import { useLanguage } from "@/context/LanguageContext";
import { useAudio } from "@/context/AudioContext";
import { CONTENT } from "@/lib/content";
import type { BilingualString } from "@/types";

export default function MyComponent() {
  const { t } = useLanguage(); // Translation
  const { playSound } = useAudio(); // Audio feedback
  const data = CONTENT.section; // Data from single source of truth

  // Logic here...

  return (
    <section className="w-full border-4 border-black bg-brutalist-dirty">
      {/* JSX here */}
    </section>
  );
}
```

---

## 🔄 Data Flow

```
CONTENT (content.ts)
    ↓
useLanguage() → t(BilingualString)
    ↓
Component renders → User sees ES or EN
```

**Update content**: Modifica `src/lib/content.ts` → Componenti aggiornati automaticamente.

---

## 🎭 State Management

| Component | State | Type | Purpose |
|-----------|-------|------|---------|
| CaseStudy | activeId, hoveredId | string \| null | Track active hotspot |
| TechnicalVault | isUnlocked, passwordInput, showError, attemptCount | object | Password protection |
| AudioEngine | (Global Context) | useAudio() | Master audio control |
| LanguageToggle | (Global Context) | useLanguage() | Language preference |

---

## 🔊 Audio Hooks

```typescript
import { useAudio } from "@/context/AudioContext";

const { isMuted, volume, toggleMute, setVolume, playSound } = useAudio();

// Example: Play sound on click
onClick={() => playSound("/assets/sounds/click-metallic.mp3")}
```

**Available sounds**:
- `/assets/sounds/click-metallic.mp3` - Button clicks
- `/assets/sounds/hydraulic-soft.mp3` - Hover effects
- `/assets/sounds/industrial-ambient.mp3` - Background (on demand)

---

## 🌐 Language Hooks

```typescript
import { useLanguage } from "@/context/LanguageContext";

const { language, setLanguage, t } = useLanguage();

// Example: Translate content
<h1>{t(CONTENT.hero.title)}</h1> // ES or EN automaticamente
```

---

## 🎨 Styling Classes

Tutti i componenti usano Tailwind + custom brutalist utilities.

**Custom classes** (definiti in `tailwind.config.js`):
```
border-brutal    → 4px border-black
shadow-brutal    → 4px 4px 0px offset shadow
shadow-brutal-lg → 8px 8px 0px offset shadow
bg-brutalist-*   → colori custom (steel, black, dirty, safety)
text-brutalist-* → colori testo custom
animate-blink    → opacity pulse animation
animate-ticker   → horizontal scroll animation
```

**Standard Tailwind**:
```
border-4 border-black        → Hard borders
font-black, font-bold        → Heavy typography
p-6 md:p-8 lg:p-12          → Responsive padding
gap-4, gap-6, gap-8         → Spacing
```

---

## ♿ Accessibility

Ogni componente include:

```typescript
// Semantic HTML
<section aria-label="...">
<nav role="navigation">
<footer role="contentinfo">

// ARIA attributes
aria-pressed={isActive}
aria-expanded={isOpen}
aria-live="polite"
aria-label="Button description"

// Keyboard support
onKeyPress={(e) => e.key === "Enter" && handleClick()}

// Focus styles
focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black

// Screen reader only
<div className="sr-only">Hidden text for accessibility</div>
```

---

## 📱 Responsive Design

Pattern per tutti i componenti:

```typescript
// Mobile-first (default = mobile)
className={`
  p-4 text-sm                    // Mobile
  md:p-6 md:text-base           // Tablet
  lg:p-8 lg:text-lg             // Desktop
`}
```

**Breakpoints** (definiti in `tailwind.config.js`):
- Mobile: 0-640px (default)
- md: 641px-1024px
- lg: 1025px+

---

## 🧪 Testing Components Locally

```bash
# Start dev server
npm run dev

# Open http://localhost:3000

# Test checklist:
# 1. Hero section renders
# 2. Language toggle works (click ES/EN)
# 3. Case study hotspots clickable
# 4. Technical vault password works ("STAINLESS")
# 5. Audio engine toggle works (F12 Console)
# 6. CTA widget visible bottom-right
# 7. Footer loads with links
# 8. Ticker scrolls continuously
# 9. Mobile responsive (F12 toggle device)
# 10. No console errors
```

---

## 🔧 Adding New Component

Se devi aggiungere un nuovo componente:

1. **Crea il file** in `src/components/YourComponent.tsx`

2. **Usa il template**:
```typescript
"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CONTENT } from "@/lib/content";

export default function YourComponent() {
  const { t } = useLanguage();
  
  return (
    <section className="w-full border-4 border-black">
      {/* Your JSX */}
    </section>
  );
}
```

3. **Aggiungi dati** in `src/lib/content.ts`:
```typescript
CONTENT.yourSection = {
  title: { es: "...", en: "..." },
  // ... more data
}
```

4. **Importa** in `src/app/page.tsx`:
```typescript
import YourComponent from "@/components/YourComponent";

// In render:
<YourComponent />
```

5. **Testa** con `npm run dev`

---

## 🎯 Component Hierarchy

```
page.tsx (Main)
├── Hero
├── LanguageToggle (sticky, z-40)
├── CaseStudy
├── TechnicalVault
├── AudioEngine
├── Footer
├── TickerBar
└── BrutalCTAWidget (fixed, z-50)
```

---

## 📊 Component Stats

| Component | Lines | State | Hooks | Icons |
|-----------|-------|-------|-------|-------|
| Hero | ~80 | None | 2 | 0 |
| LanguageToggle | ~60 | None | 2 | 0 |
| CaseStudy | ~250 | Yes | 2 | 0 |
| TechnicalVault | ~280 | Yes | 2 | 2 |
| AudioEngine | ~220 | None | 2 | 2 |
| BrutalCTAWidget | ~80 | None | 2 | 1 |
| Footer | ~200 | None | 1 | 5 |
| TickerBar | ~80 | None | 1 | 0 |
| **TOTAL** | **~1,250** | **2** | **16** | **10** |

---

## 🚀 Performance Notes

- Tutti i componenti sono "use client" (interattivi)
- Zero layout shift: border e padding fissi
- Animazioni CSS (non JS): animate-blink, animate-ticker
- Immagini: placeholder (pronte per vere immagini)
- Audio: lazy-loaded on demand, not preloaded

---

## 🔗 Useful Links

- **Design System**: `src/lib/constants.ts`
- **Data Source**: `src/lib/content.ts`
- **Types**: `src/types/index.ts`
- **Contexts**: `src/context/`
- **Tailwind Config**: `tailwind.config.js`

---

**Last Updated**: May 9, 2026
**Status**: ✅ Task 2 Complete
