# ✅ TASK 3 FINAL: PRE-DEPLOYMENT CHECKLIST

## 🚀 Before Pushing to GitHub & Vercel

This is the **FINAL VALIDATION** before deployment. Complete all items below.

---

## 📋 SECTION 1: CODE QUALITY

### TypeScript & Linting
```bash
npm run lint
```

**Expected**: No errors, no warnings

- [ ] `npm run lint` passes (exit code 0)
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] All imports resolved
- [ ] No unused variables

### Build Verification
```bash
npm run build
```

**Expected**: Successful build with no errors

- [ ] Build completes without errors
- [ ] No warnings during build
- [ ] `.next` directory created
- [ ] All routes compiled
- [ ] Static files generated

### Runtime Check
```bash
npm start
# Open http://localhost:3000
```

**Expected**: App runs without errors

- [ ] Page loads at localhost:3000
- [ ] F12 Console: No errors (red)
- [ ] F12 Console: No warnings (yellow) - except Next.js internals
- [ ] All routes accessible
- [ ] No broken links

---

## 🎨 SECTION 2: VISUAL RENDERING

### Browser Compatibility
Test on multiple browsers:

#### Chrome/Chromium
- [ ] All components render
- [ ] Colors correct (brutalist palette)
- [ ] Typography correct (bold, sizes)
- [ ] Borders visible (4px black)
- [ ] Shadows correct (4px offset)
- [ ] Animations smooth (no jank)

#### Firefox
- [ ] Same as Chrome
- [ ] No layout shift
- [ ] Performance acceptable

#### Safari (macOS/iOS)
- [ ] Same as Chrome
- [ ] Border-radius effects correct
- [ ] Touch interactions work (iOS)

#### Edge
- [ ] Same as Chrome
- [ ] No compatibility issues

### Component Rendering

#### Hero Section
- [ ] Headline visible (large text)
- [ ] Subline visible
- [ ] UVP hammer visible
- [ ] Scroll hint visible
- [ ] All 4 rows with black borders

#### Language Toggle (Sticky)
- [ ] ES button visible
- [ ] EN button visible
- [ ] ES is orange (active by default)
- [ ] Stays sticky while scrolling
- [ ] Both buttons clickable

#### Case Study
- [ ] Image area visible
- [ ] 3 hotspots visible (orange squares, pulsing)
- [ ] Right panel with list visible
- [ ] Hotspots clickable
- [ ] Solution card appears on click
- [ ] Type badges display correctly

#### Technical Vault
- [ ] Locked state visible (Lock icon)
- [ ] Password input functional
- [ ] "DESBLOQUEAR" button visible
- [ ] "STAINLESS" unlocks vault
- [ ] 2 dataset cards appear when unlocked

#### Audio Engine
- [ ] Status badge visible
- [ ] Toggle button visible
- [ ] Volume slider appears when active
- [ ] Volume indicator (5 bars)
- [ ] Info box with sound descriptions

#### Footer
- [ ] Privacy statement visible
- [ ] 3 privacy attributes displayed
- [ ] Social links visible (LinkedIn, GitHub, Email, Privacy)
- [ ] Colophon with tech credits
- [ ] Copyright shows correct year
- [ ] Ticker scrolls

#### CTA Widget
- [ ] Fixed in bottom-right corner
- [ ] Icon visible (chat bubble)
- [ ] Text visible ("¿Hablamos en LinkedIn?")
- [ ] Blinking animation works
- [ ] Stops blinking on hover
- [ ] Clickable

#### 404 Page
- [ ] Accessible at `/invalid-path`
- [ ] Large "404" displays
- [ ] Error message visible
- [ ] Buttons present (Portfolio, Contact)
- [ ] Buttons are clickable

#### Privacy Page
- [ ] Accessible at `/privacy`
- [ ] All sections visible
- [ ] Bilingual content
- [ ] Links in footer work
- [ ] Can navigate back to portfolio

---

## 🎯 SECTION 3: INTERACTIVITY

### Language Switching
```
1. Load page → ES selected (orange)
2. Click EN → Everything changes to English
   ✓ Hero title: "Future Materials Engineer"
   ✓ All sections: English text
   ✓ localStorage: preferred-language = "en"
3. Click ES → Back to Spanish
4. Refresh page → Language persists
```

- [ ] Language switches on click
- [ ] All content updates instantly
- [ ] Preference persists (localStorage)
- [ ] No page reload needed
- [ ] Bilingual content working

### Case Study Interactions
```
1. Hover hotspot → Scale up + audio
2. Click hotspot → Reveal solution
   ✓ Problem section displays
   ✓ Solution section displays
   ✓ Type badge shows
3. Click same hotspot → Collapses
4. Click different hotspot → Shows new solution
```

- [ ] All 3 hotspots clickable
- [ ] Problem/solution reveals correctly
- [ ] Type badges show correct type
- [ ] Only one active at time
- [ ] Click toggles open/closed

### Technical Vault
```
1. See "BÓVEDA TÉCNICA BLOQUEADA" state
2. Type wrong password → Error shown
3. Try 3 times → Hint appears
4. Type "STAINLESS" → Unlocks
5. 2 dataset cards visible
6. Click "CERRAR BÓVEDA" → Relocks
```

- [ ] Locked state shows
- [ ] Password input works
- [ ] Wrong password error displays
- [ ] Hint shows after 3 attempts
- [ ] "STAINLESS" unlocks (case-sensitive)
- [ ] Datasets visible when unlocked
- [ ] Lock button relocks
- [ ] Error message is bilingual

### Audio System
```
1. See "MUTED" status
2. Click "ACTIVAR AUDIO"
   ✓ Status changes to "ACTIVE"
   ✓ Volume slider appears
3. Adjust volume slider (0-100%)
   ✓ Percentage updates
   ✓ Bar indicator updates
4. Click button somewhere
   ✓ Sound plays (if files exist)
5. Click "DESACTIVAR AUDIO"
   ✓ Status back to "MUTED"
   ✓ Volume slider disappears
```

- [ ] Toggle button works
- [ ] Status updates correctly
- [ ] Volume slider appears/hides
- [ ] Volume controls functional
- [ ] Muted/Active states correct
- [ ] Preference persists (localStorage)

### CTA Widget
```
1. Scroll down → Widget stays visible
2. Hover → Blink animation stops, shadow enlarges
3. Click → Scroll to top smooth, LinkedIn opens in new tab
```

- [ ] Always visible while scrolling
- [ ] Animation works (blinks)
- [ ] Click opens LinkedIn
- [ ] Opens in new tab (not current)
- [ ] No console errors on click

### Link Clicking
```
1. Footer Links
   ✓ LinkedIn → Opens LinkedIn (new tab)
   ✓ GitHub → Opens GitHub (new tab)
   ✓ Email → Opens mail client
   ✓ Privacy → Opens /privacy page
2. 404 Page Buttons
   ✓ Back to Portfolio → Navigates to /
   ✓ Contact → Opens LinkedIn (new tab)
```

- [ ] LinkedIn link works
- [ ] GitHub link works
- [ ] Email link works
- [ ] Privacy link works
- [ ] All open in new tabs (external)
- [ ] No console errors

---

## 📱 SECTION 4: RESPONSIVE DESIGN

### Mobile (375px - iPhone SE)
Open DevTools, toggle device mode, select iPhone SE

- [ ] Text readable (not too small)
- [ ] Buttons touchable (≥44x44px)
- [ ] No horizontal scroll
- [ ] Images responsive
- [ ] Hero text reduced appropriately
- [ ] Case Study stacked vertically
- [ ] Hotspots still interactive
- [ ] CTA widget repositioned (right-6)
- [ ] Footer readable
- [ ] Ticker visible

### Tablet (768px - iPad)
- [ ] 2-column layouts appear
- [ ] Medium text sizes
- [ ] Comfortable spacing
- [ ] All interactions work
- [ ] Images scale appropriately

### Desktop (1280px)
- [ ] Full layouts
- [ ] Large text
- [ ] Optimal spacing
- [ ] All features visible
- [ ] No wasted whitespace

### Touch Testing (if on mobile device)
- [ ] Tap language toggle → Switches
- [ ] Tap case study hotspot → Reveals
- [ ] Tap audio toggle → Enables/disables
- [ ] Tap CTA widget → Opens LinkedIn
- [ ] Scroll smooth, no jank

---

## ♿ SECTION 5: ACCESSIBILITY

### Keyboard Navigation
```bash
F12 (open DevTools first)

1. Press TAB repeatedly
   ✓ Focus cycles through all interactive elements
   ✓ Focus ring visible (black 2px outline)
   ✓ Logical tab order (left-to-right, top-to-bottom)

2. When focused on button, press ENTER
   ✓ Button activates (same as mouse click)

3. Shift+TAB
   ✓ Reverse order navigation
```

- [ ] TAB navigates all focusable elements
- [ ] Focus ring visible at all times
- [ ] ENTER activates buttons
- [ ] Shift+TAB works (reverse)
- [ ] Logical tab order
- [ ] No focus trap (infinite loop)
- [ ] Skip-to-content available if needed

### Screen Reader (macOS VoiceOver)
```bash
Cmd+F5 → Enables VoiceOver

Expected:
- Hero "Heading level 1: Futura Ingeniera de Materiales"
- Language toggle "Button group, ES pressed, EN unpressed"
- Case Study "Section: Interactive case study"
- Hotspots "Button: Technical Point, toggle"
- Solution "Region, live: Solution for Technical Point"
- Footer "Contentinfo: Privacy by Design..."
```

- [ ] All headings announced correctly
- [ ] Buttons have descriptive labels
- [ ] ARIA attributes announced
- [ ] Live regions for dynamic content
- [ ] No repetitive content

### Color Contrast
Use Chrome DevTools or extension:

```
All text should meet WCAG AA:
- Standard text: ≥ 4.5:1 ratio ✓
- Large text: ≥ 3:1 ratio ✓
- UI components: ≥ 3:1 ratio ✓

Verify:
- Black on dirty white: ✓ PASS
- White on black: ✓ PASS
- Orange on black: ✓ PASS
- Steel on dirty: ✓ PASS
```

- [ ] All contrast ratios ≥ 4.5:1 (AA)
- [ ] No low-contrast text
- [ ] Colors not sole identifier

---

## 🔒 SECTION 6: PRIVACY & SECURITY

### Cookies Test
```bash
F12 → Application → Cookies → [Your Domain]
Expected: Should be EMPTY
```

- [ ] Zero cookies
- [ ] No tracking cookies
- [ ] No session cookies
- [ ] localStorage only (preferences)

### localStorage Check
```bash
F12 → Application → Local Storage → [Your Domain]
Expected keys:
- preferred-language (es or en)
- audio-muted (true/false)
- audio-volume (0-1)
```

- [ ] Only 3 keys present
- [ ] No tracking data
- [ ] No personal info
- [ ] Values reasonable

### Network Tab
```bash
F12 → Network
Load page, check requests

Should NOT see:
❌ google-analytics
❌ hotjar.com
❌ facebook.com
❌ Any .tracking domains
❌ Any ad networks

Should see:
✓ Next.js assets (.js, .css)
✓ Images (.png, .webp, .jpg)
✓ Fonts (if any)
❌ No external scripts
```

- [ ] Zero third-party trackers
- [ ] Only essential resources
- [ ] No ad networks
- [ ] No analytics scripts

### Security Headers
```bash
F12 → Network → Any request → Response Headers
Should include:
✓ X-Content-Type-Options: nosniff
✓ X-Frame-Options: DENY
✓ X-XSS-Protection: 1; mode=block
✓ Referrer-Policy: strict-origin-when-cross-origin
✓ Permissions-Policy: geolocation=(), microphone=(), camera=()
✓ Content-Security-Policy: ...
✓ Cache-Control: public, max-age=3600
```

- [ ] Security headers present
- [ ] CSP policy enforced
- [ ] Referrer policy set
- [ ] Permissions restricted

### Privacy Policy
- [ ] /privacy page accessible
- [ ] GDPR-compliant content
- [ ] Zero-data collection statement
- [ ] Bilingual (ES/EN)
- [ ] Contact information present

---

## ⚡ SECTION 7: PERFORMANCE

### Lighthouse Audit
```bash
1. npm run build
2. npm start
3. F12 → Lighthouse → Generate report
4. Wait 60-90 seconds
```

**Targets**:
- [ ] Performance: ≥ 85
- [ ] Accessibility: ≥ 95
- [ ] Best Practices: ≥ 90
- [ ] SEO: ≥ 90

### Core Web Vitals
```
From Lighthouse report:
- [ ] LCP (Largest Contentful Paint): < 2.5s
- [ ] FID (First Input Delay): < 100ms
- [ ] CLS (Cumulative Layout Shift): < 0.1
```

### Bundle Size
```bash
npm run build

Expected in .next/static/:
- [ ] CSS files: < 30 KB (gzipped)
- [ ] JS bundles: < 100 KB (gzipped)
- [ ] Total: < 150 KB (gzipped)
```

### No Console Warnings
```bash
F12 → Console
```

- [ ] No red errors
- [ ] No yellow warnings (except Next.js debug)
- [ ] No Failed requests

---

## 📁 SECTION 8: FILE STRUCTURE

### Project Files
```
the-material-bridge/
├── src/
│   ├── app/
│   │   ├── layout.tsx           ✓
│   │   ├── page.tsx             ✓
│   │   ├── globals.css          ✓
│   │   ├── not-found.tsx        ✓
│   │   ├── privacy/page.tsx     ✓
│   │   └── connect/page.tsx     ✓
│   ├── components/              ✓ (8 components)
│   ├── context/                 ✓ (Language, Audio)
│   ├── lib/                     ✓ (content, constants, redirect)
│   └── types/                   ✓
├── public/
│   ├── robots.txt               ✓
│   ├── sitemap.xml              ✓
│   └── assets/                  ✓ (directories)
├── .github/
│   └── workflows/deploy.yml     ✓
├── package.json                 ✓
├── tsconfig.json                ✓
├── tailwind.config.js           ✓
├── next.config.js               ✓
├── README.md                    ✓
├── DEPLOYMENT_GUIDE.md          ✓
└── .gitignore                   ✓
```

- [ ] All required files present
- [ ] No unnecessary files
- [ ] node_modules excluded from git
- [ ] .next excluded from git

### Documentation Files
- [ ] README.md current
- [ ] DEPLOYMENT_GUIDE.md complete
- [ ] TASK_1_SUMMARY.md present
- [ ] TASK_2_SUMMARY.md present
- [ ] TASK_2_TESTING.md present
- [ ] TASK_3_TESTING_CHECKLIST.md present
- [ ] TASK_3_SECURITY_POLISH.md present
- [ ] TASK_3_PERFORMANCE.md present

---

## 🔗 SECTION 9: ENVIRONMENT SETUP

### .env.local Configuration
```bash
cat .env.local
# Should have:
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/your-profile
```

- [ ] .env.local exists
- [ ] NEXT_PUBLIC_LINKEDIN_URL set
- [ ] URL is correct (real LinkedIn profile)
- [ ] File not tracked by git (.gitignore)

### .env.example Template
- [ ] .env.example exists
- [ ] Has all required variables
- [ ] Clear descriptions
- [ ] Ready for user copy

---

## 📤 SECTION 10: GIT PREPARATION

### Git Repository
```bash
git status
# Should show clean state (no uncommitted changes)
```

- [ ] git init done
- [ ] .gitignore configured
- [ ] node_modules excluded
- [ ] .env.local excluded
- [ ] .next excluded
- [ ] All code committed
- [ ] No pending changes

### Commit History
```bash
git log --oneline
```

- [ ] Clear, descriptive commit messages
- [ ] Logical commit history
- [ ] All features committed

### GitHub Readiness
- [ ] GitHub account ready
- [ ] Repository name planned (e.g., "the-material-bridge")
- [ ] README prepared for GitHub
- [ ] Licenses (if needed) added

---

## 🚀 SECTION 11: VERCEL DEPLOYMENT PREP

### Vercel Requirements
- [ ] Vercel account created
- [ ] GitHub account connected to Vercel
- [ ] No API keys in code (use .env)
- [ ] Environment variables documented

### Deployment Variables
```
Environment Variables for Vercel:
- NEXT_PUBLIC_LINKEDIN_URL = https://linkedin.com/in/your-profile
```

- [ ] NEXT_PUBLIC_LINKEDIN_URL configured
- [ ] No secrets in public variables
- [ ] Correct values for production

### Build Settings
- [ ] Build Command: `npm run build` ✓
- [ ] Output Directory: `.next` ✓
- [ ] Install Command: `npm install` ✓
- [ ] Development Command: `npm run dev` ✓

---

## ✅ FINAL CHECKLIST

### Before Pushing to GitHub
- [ ] All code tests pass (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] No console errors or warnings
- [ ] Local server runs (`npm start`)
- [ ] All tests from TASK_3_TESTING_CHECKLIST.md completed
- [ ] Lighthouse scores ≥ 85-90 all metrics
- [ ] Privacy policy page complete
- [ ] Security headers configured
- [ ] robots.txt and sitemap.xml created
- [ ] Custom 404 page tested
- [ ] Git repository clean (no pending changes)
- [ ] .env.local properly configured
- [ ] Ready for `git push origin main`

### After Pushing to GitHub
- [ ] Repository visible on GitHub
- [ ] All files uploaded
- [ ] GitHub Actions workflow ready (if using)
- [ ] Ready to connect to Vercel

### During Vercel Setup
- [ ] Import from GitHub successful
- [ ] Environment variables set
- [ ] Preview build generated
- [ ] Production build ready
- [ ] Domain configured (if custom domain)
- [ ] SSL certificate active (Vercel handles)
- [ ] Auto-deploy on push enabled

### Go Live! 🚀
- [ ] Site accessible at Vercel URL
- [ ] All features working
- [ ] Performance tested
- [ ] Privacy verified
- [ ] Security headers present
- [ ] Celebrate! 🎉

---

## 🎯 SIGN-OFF

When all items above are checked ✓:

```
PROJECT STATUS: PRODUCTION READY

Date: [Today's Date]
Tester: [Your Name]
Final Check: ✅ ALL PASSED

Ready for:
✅ GitHub Deployment
✅ Vercel Publishing
✅ Public Access

Next Step: Push to GitHub & Deploy to Vercel
```

---

**Status**: ✅ TASK 3 COMPLETE - READY FOR DEPLOYMENT
**Next**: Task 4 (Deployment) or Go Live!

