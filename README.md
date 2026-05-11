# The Material Bridge - Personal Portfolio

**Futura Ingeniera de Materiales & Industrial UX Researcher**

Sito portfolio personale di Giulia, costruito con Next.js, Tailwind CSS, Framer Motion e progettato con estetica Brutalist industriale.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (con npm o yarn)
- Git (per il version control)
- Account Vercel (per il deployment automatico)

### Setup Locale

```bash
# 1. Clone il repository
git clone https://github.com/your-username/the-material-bridge.git
cd the-material-bridge

# 2. Installa le dipendenze
npm install

# 3. Crea il file .env.local
cp .env.example .env.local
# Modifica .env.local con il tuo profilo LinkedIn:
# NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/your-profile

# 4. Avvia il server di sviluppo
npm run dev

# 5. Apri http://localhost:3000 nel browser
```

---

## 📁 Struttura del Progetto

```
the-material-bridge/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout + providers
│   │   ├── page.tsx             # Main portfolio page
│   │   ├── connect/page.tsx     # Redirect a LinkedIn
│   │   └── globals.css          # Global styles
│   ├── components/              # Componenti React
│   ├── context/                 # Provider (Language, Audio)
│   ├── hooks/                   # Custom hooks
│   ├── lib/
│   │   ├── content.ts           # Data Schema & Seed Data
│   │   └── constants.ts         # Costanti globali
│   └── types/                   # TypeScript interfaces
├── public/
│   ├── assets/
│   │   ├── images/              # Immagini case study
│   │   ├── sounds/              # Audio feedback
│   │   └── fonts/               # Font personalizzati (opzionale)
│   └── documents/               # PDF downloadabili
├── tailwind.config.js           # Tema Brutalist
├── next.config.js               # Configurazione Next.js
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🎨 Design System

### Colori Brutalist
- **Steel**: `#71717A` - Grigio industriale
- **Black**: `#000000` - Nero puro
- **Dirty**: `#F4F4F5` - Bianco sporco (background)
- **Safety**: `#F97316` - Arancione sicurezza (accenti)

### Tipografia
- **Headings**: Bold sans-serif (sistema, 900 weight)
- **Body**: Sistema di font del sistema, 400-500 weight
- **Monospace**: Courier New (per dati tecnici)

### Bordi & Ombre
- Bordi: **4px solid black**
- Ombre: `4px 4px 0px rgba(0,0,0,0.25)` (brutal style)
- Zero spigoli arrotondati (estetica brutalist)

---

## 🔧 Sviluppo

### Aggiungere un Nuovo Componente

1. Crea il file in `src/components/MyComponent.tsx`
2. Usa il `useLanguage()` hook per bilingualismo
3. Usa il `useAudio()` hook per feedback sonori
4. Importa i dati da `@/lib/content.ts`

```typescript
"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useAudio } from "@/context/AudioContext";
import { CONTENT } from "@/lib/content";

export default function MyComponent() {
  const { language, t } = useLanguage();
  const { playSound } = useAudio();

  return (
    <div className="border-4 border-black p-6">
      <h2 className="text-2xl font-bold">{t(CONTENT.hero.title)}</h2>
      <button onClick={() => playSound("/assets/sounds/click-metallic.mp3")}>
        Click me
      </button>
    </div>
  );
}
```

### Comandi Utili

```bash
# Build per produzione
npm run build

# Start server produzione locale
npm start

# Lint con ESLint
npm run lint
```

---

## 🔐 Privacy & Security

✅ **Privacy by Design**
- Zero cookies
- Nessun tracking (Google Analytics, etc.)
- Nessun script di terze parti
- Storage locale esclusivamente (localStorage)
- GDPR compliant

---

## 📤 Deployment su Vercel

### 1. Setup GitHub Repository

```bash
# Inizializza il repository Git
git init
git add .
git commit -m "Initial commit: The Material Bridge portfolio"

# Crea repository su GitHub e fai il push
git remote add origin https://github.com/your-username/the-material-bridge.git
git branch -M main
git push -u origin main
```

### 2. Connect a Vercel

1. Vai su [vercel.com](https://vercel.com)
2. Clicca **New Project**
3. Importa il repository GitHub
4. **Framework Preset**: Next.js (auto-detected)
5. **Environment Variables**:
   - `NEXT_PUBLIC_LINKEDIN_URL` = `https://linkedin.com/in/your-profile`
6. Clicca **Deploy**

### 3. Auto-Deployment

Ogni volta che fai un `git push` su `main`, Vercel automaticamente:
- Rileva i cambiamenti
- Build il progetto
- Deploy la nuova versione
- Genera preview URL

```bash
# Workflow tipico di sviluppo
git add .
git commit -m "Add Hero component"
git push origin main
# Vercel deploy in ~2 minuti ✓
```

### 4. Custom Domain (Opzionale)

1. In Vercel Dashboard → Project Settings → Domains
2. Aggiungi il tuo dominio personalizzato
3. Aggiorna i DNS record (come indicato da Vercel)
4. Done!

---

## 📊 Performance

### Metrics Target
- **Lighthouse Score**: 90+
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1

### Optimization
- Image optimization via Next.js
- CSS minification
- Code splitting automatico
- Zero-JS fallback per funzionalità base

---

## 🐛 Troubleshooting

### "Module not found" error
```bash
# Cancella node_modules e reinstalla
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use
```bash
# Usa una porta diversa
npm run dev -- -p 3001
```

### Build fails su Vercel
- Verifica le environment variables
- Controlla i log di build in Vercel Dashboard
- Assicurati che `npm run build` funziona localmente

---

## 📝 Content Management

Tutti i dati del sito vengono da `src/lib/content.ts`. Per aggiornare contenuto:

1. Modifica `CONTENT` object in `content.ts`
2. Il sito si aggiorna automaticamente (grazie al data-driven approach)
3. Push a Git e deploy automatico su Vercel

---

## 🎯 Feature Checklist

- [ ] Hero Section animata
- [ ] Interactive Case Study con hotspot cliccabili
- [ ] Technical Vault (password-protected)
- [ ] Audio Engine con toggle e feedback metallici
- [ ] Language Toggle (EN/ES)
- [ ] Brutal CTA Widget (fixed, animated)
- [ ] Footer + Ticker Bar
- [ ] CV Downloader con watermark
- [ ] Redirect strategico LinkedIn
- [ ] Mobile-responsive brutalist grid
- [ ] Zero-cookie privacy statement

---

## 📞 Support & Questions

Per domande sulla struttura o il deployment:
1. Leggi il **Blueprint** allegato (Product Spec, Feature List, etc.)
2. Controlla la documentazione di [Next.js](https://nextjs.org)
3. Leggi gli errori della console con attenzione

---

## 📄 License

Questo progetto è personale e non è sotto licenza pubblica.

---

**Built with ❤️ and 💪 Industrial Brutalism**
