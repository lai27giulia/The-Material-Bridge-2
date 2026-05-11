# 🧪 Task 3: Testing Checklist - The Material Bridge

## 📋 Testing Strategy

Task 3 segue questo approccio:
1. **Local Dev Server Testing** - npm run dev
2. **Browser Compatibility** - Chrome, Firefox, Safari, Edge
3. **Mobile & Responsive** - iOS, Android, tablet
4. **Accessibility** - Keyboard nav, screen readers, WCAG
5. **Performance** - Lighthouse audit
6. **Audio & Interactivity** - All interactive elements
7. **Security & Privacy** - GDPR, cookies, data
8. **Cross-browser Images & Assets**
9. **Build & Bundle** - npm run build
10. **Pre-deployment Final Check**

---

## ✅ STEP 1: LOCAL DEVELOPMENT SERVER

### Startup Test
```bash
npm install           # Install dependencies (if not done)
npm run dev          # Start dev server
# Open http://localhost:3000
```

**Expected Output**:
```
> the-material-bridge@1.0.0 dev
> next dev

▲ Next.js 15.0.0
- Local:        http://localhost:3000
```

✓ Server starts without errors
✓ Hot reload works (edit file → auto refresh)
✓ No console errors (F12 → Console tab)

---

## ✅ STEP 2: VISUAL RENDERING TEST

### Hero Section
```
Expected:
┌─────────────────────────────────────────┐
│  FUTURA INGENIERA DE MATERIALES         │  ← Large text
├─────────────────────────────────────────┤
│  UX RESEARCHER INDUSTRIAL               │  ← Subline
├─────────────────────────────────────────┤
│  Reduzco mermas en procesos...          │  ← UVP text
├─────────────────────────────────────────┤
│  ▼ SCROLL PARA DESCUBRIR                │  ← Hint
└─────────────────────────────────────────┘
```

✓ All 4 rows render
✓ Borders are 4px black
✓ Typography is bold and large
✓ Text is centered/left-aligned correctly
✓ Responsive on mobile (reduced size)

### Language Toggle
```
Expected: [ES] [EN]  ← Two buttons
- ES should be orange (active by default)
- EN should be white (inactive)
- Clicca EN → changes to orange, ES to white
- Text changes instantly
```

✓ Both buttons visible
✓ Active button is safety orange (#F97316)
✓ Inactive button is white
✓ Clicking switches language

### Case Study Section
```
Expected:
┌─ LEFT ────────────┬─ RIGHT ─────────────┐
│  Image +          │  List of 3 points   │
│  Hotspots (3)     │  + Solution reveal  │
└───────────────────┴─────────────────────┘
Mobile:
┌──────────────────────────────┐
│  Image + Hotspots            │
├──────────────────────────────┤
│  List + Solution             │
└──────────────────────────────┘
```

✓ Image placeholder shows
✓ 3 hotspot indicators visible (orange squares, pulsing)
✓ Right panel shows list of 3 points
✓ Clicking hotspot reveals solution card
✓ Solution card has problem/solution sections
✓ Type badges show (metallurgical/workflow/ux)

### Technical Vault
```
Expected when locked:
┌──────────────────────────────┐
│  🔒 BÓVEDA TÉCNICA BLOQUEADA │
│  Password: [________]        │
│  DESBLOQUEAR BÓVEDA          │
└──────────────────────────────┘

Expected when unlocked:
┌──────────────────────────────┐
│  🔓 ¡BÓVEDA DESBLOQUEADA!    │
│  [Dataset 1]  [Dataset 2]    │
│  CERRAR BÓVEDA               │
└──────────────────────────────┘
```

✓ Locked state shows correctly
✓ Password input accepts text
✓ "STAINLESS" unlocks vault
✓ Error message on wrong password
✓ Hint appears after 3 attempts
✓ Unlock button works
✓ 2 dataset cards show when unlocked
✓ Lock button re-secures vault

### Audio Engine
```
Expected:
Status: [MUTED / ACTIVE]
[ACTIVAR AUDIO / DESACTIVAR AUDIO]
Volume: [████░] 50%
```

✓ Status shows correctly
✓ Toggle button works (MUTED → ACTIVE)
✓ When ACTIVE: volume slider appears
✓ Volume indicator updates on slider change
✓ Muted state shows MUTED badge
✓ Active state shows ACTIVE badge

### Footer
```
Expected:
Privacy Shield Icon + Privacy Statement
[3 privacy attributes]
[Social links: LinkedIn, GitHub, Email]
[Tech credits grid]
[Ticker scrolling text]
```

✓ All sections visible
✓ Privacy statement in both ES/EN
✓ Social links have correct icons
✓ Ticker scrolls continuously
✓ Copyright shows correct year

### CTA Widget
```
Expected (bottom-right):
┌─────────────────┐
│  💬             │
│  ¿Hablamos en   │
│  LinkedIn?      │
└─────────────────┘
```

✓ Fixed position bottom-right (visible always)
✓ Icon shows correctly
✓ Text is readable
✓ Blinking animation works
✓ On hover: blink stops, shadow enlarges

---

## ✅ STEP 3: INTERACTIVITY TESTING

### Language Toggle
```bash
1. Load page → ES is selected (default)
2. Click EN → Everything changes to English
   - Hero title changes
   - All text changes
   - Page stays ES in localStorage check (F12 → Application)
3. Click ES → Back to Spanish
4. Refresh page → Stays in selected language
```

✓ Language switches instantly
✓ All text changes
✓ Preference persists (localStorage)
✓ No page reload needed

### Case Study Hotspots
```bash
1. See 3 orange pulsing squares on image
2. Click Técnico hotspot
   → Right side shows: Problem + Solution
   → Badge: "metallurgical"
3. Click Proceso hotspot
   → Solution changes
   → Badge: "workflow"
4. Click Humano hotspot
   → Solution changes
   → Badge: "ux"
5. Click same hotspot again → Collapses
```

✓ All 3 hotspots clickable
✓ Correct problem/solution shows
✓ Type badges correct
✓ Click-to-toggle works
✓ Solutions are bilingual

### Technical Vault
```bash
1. See locked state with Lock icon
2. Type wrong password → Error message
3. Wrong again → Hint appears
4. Type "STAINLESS" → Unlocks
5. 2 dataset cards visible
6. Click "CERRAR BÓVEDA" → Relocks
7. All solved correctly with ES/EN
```

✓ Password input works
✓ Error handling correct
✓ Hint system works
✓ "STAINLESS" unlocks (case-sensitive)
✓ Datasets show when unlocked
✓ Lock button works

### Audio System
```bash
1. See "MUTED" status
2. Click "ACTIVAR AUDIO"
   → Status changes to "ACTIVE"
   → Volume slider appears
3. Adjust slider → Volume percentage updates
4. Click button somewhere → Hear sound? ✓
5. Click "DESACTIVAR AUDIO" → Back to MUTED
```

✓ Toggle works
✓ Status updates
✓ Volume slider appears only when active
✓ Slider works (0-100%)
✓ Sounds play (if available, see Audio Testing section)

### CTA Widget
```bash
1. Scroll down → CTA widget stays visible
2. Hover over → Blink animation stops
3. Click → Smooth scroll to top + new tab opens
4. New tab points to LinkedIn profile
```

✓ Position fixed throughout scroll
✓ Animation works
✓ Click redirects to LinkedIn
✓ Opens in new tab (not current tab)

### Footer Links
```bash
1. LinkedIn link → Opens LinkedIn (new tab)
2. GitHub link → Opens GitHub (new tab)
3. Email link → Opens mail client or mailto
```

✓ All links work
✓ Open in new tabs (target="_blank")
✓ No errors in console

---

## ✅ STEP 4: MOBILE & RESPONSIVE TESTING

### F12 Device Toggle
```bash
Press: F12 (Windows/Linux) or Cmd+Option+I (Mac)
Click: Toggle device toolbar (or Ctrl+Shift+M)
Select: Different viewports
```

### Test Breakpoints
```
Mobile (375px - iPhone SE):
- Text is smaller
- Padding is reduced (p-4 not p-8)
- Hotspots still clickable (at least 44px touch target)
- CTA widget repositions
- Case Study stacks vertically

Tablet (768px - iPad):
- 2-column layouts appear
- Text is medium
- Touch targets comfortable

Desktop (1280px):
- Full layouts
- Large text
- Optimal spacing
```

✓ Mobile: All readable, no overflow
✓ Tablet: 2-col layouts work
✓ Desktop: Full experience
✓ No horizontal scroll

### Touch Testing (if on mobile device)
```bash
1. Tap language toggle → Switches
2. Tap case study hotspot → Reveals
3. Tap audio toggle → Works
4. Tap CTA widget → Opens LinkedIn
5. Scroll → Smooth, no jank
```

✓ All taps register
✓ No double-tap zoom needed
✓ Touch targets 44x44px+

---

## ✅ STEP 5: ACCESSIBILITY TESTING

### Keyboard Navigation
```bash
F12 (open DevTools first)

1. Press TAB repeatedly
   → Focus cycles through: Hero → Language → Hotspots → Buttons → Links
   → Focus ring visible (black 2px outline)

2. When focused on button, press ENTER
   → Button activates
   → Same as mouse click

3. Shift+TAB
   → Reverse cycle

4. Escape key
   → Should close any open modals/reveals (if implemented)
```

✓ TAB navigates all focusable elements
✓ Focus ring always visible
✓ ENTER activates buttons
✓ No focus trap
✓ Logical tab order

### Screen Reader (Windows: NVDA, Mac: VoiceOver)

#### macOS VoiceOver
```bash
Cmd+F5 → Enables VoiceOver
Cmd+F5 → Disables

With VoiceOver on:
- Hero section → "Heading level 2: Futura Ingeniera de Materiales"
- Language toggle → "Button: ES, pressed, toggle switch"
- Case study → "Section: Interactive case study"
- Hotspots → "Button: Technical Point, toggle button, not pressed"
- Solution → "Region: Live, Solution for Technical Point"
```

✓ All headings announced
✓ Buttons have labels
✓ ARIA attributes read
✓ Live regions announce changes

### Contrast & Colors
```
Color contrast ratios (WCAG AA):
- Text on background: > 4.5:1 ✓
- Large text: > 3:1 ✓
- UI components: > 3:1 ✓
```

Check with browser extension:
- Install "WCAG Color Contrast Checker"
- Check all text areas
- All should be green (AA+)

---

## ✅ STEP 6: AUDIO TESTING

### Audio Files Check
```bash
1. Check /public/assets/sounds/ exists
2. Files needed:
   - click-metallic.mp3
   - hydraulic-soft.mp3
   - industrial-ambient.mp3 (optional)
```

If files don't exist:
- Create placeholder MP3s or use online generators
- Or disable audio (audio context will handle gracefully)

### Audio Playback
```bash
1. Enable audio ("ACTIVAR AUDIO")
2. Click button → "Metallic click" sound plays
3. Hover hotspot → "Hydraulic soft" sound plays
4. Disable audio ("DESACTIVAR AUDIO")
5. Click button → No sound

Volume slider:
- Change to 50% → Sounds are quieter
- Change to 100% → Sounds are louder
- Change to 0% → Sounds silent (but don't stop)
```

✓ Audio plays when enabled
✓ Volume affects playback
✓ No audio when disabled
✓ No errors if files missing (graceful fallback)

---

## ✅ STEP 7: PRIVACY & SECURITY

### Cookies Test
```bash
F12 → Application → Cookies → [Your Domain]
Expected: Should be EMPTY

No cookies means:
✓ No tracking
✓ No persistent identification
✓ GDPR compliant (no consent needed)
```

### localStorage Test
```bash
F12 → Application → Local Storage → [Your Domain]
Expected keys:
✓ preferred-language (ES or EN)
✓ audio-muted (true or false)
✓ audio-volume (0-1)

No analytics or tracking data
```

### Network Tab
```bash
F12 → Network
Load page, check requests

Should NOT see:
❌ google-analytics
❌ hotjar
❌ facebook.com
❌ Any tracking pixels

Should see:
✓ Next.js assets
✓ CSS files
✓ JavaScript bundles
✓ Image assets
```

✓ Zero third-party trackers
✓ Only essential resources
✓ GDPR compliant

---

## ✅ STEP 8: PERFORMANCE TESTING

### Lighthouse Audit
```bash
F12 → Lighthouse tab → Generate report

Targets:
- Performance: 80+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+
```

If scores are lower:
1. Check for console errors
2. Optimize images (if added)
3. Minimize external scripts
4. Check CSS file size

### Core Web Vitals
```bash
Lighthouse should report:
✓ Largest Contentful Paint (LCP): < 2.5s
✓ First Input Delay (FID): < 100ms
✓ Cumulative Layout Shift (CLS): < 0.1
```

### Bundle Size
```bash
npm run build

Expected:
- HTML: ~10-15 KB
- CSS: ~5-10 KB (Tailwind)
- JS: ~50-100 KB (gzipped)
- Total: ~70-150 KB (excluding assets)
```

---

## ✅ STEP 9: BROWSER COMPATIBILITY

### Desktop Browsers
Test on:
- ✓ Chrome/Chromium (latest)
- ✓ Firefox (latest)
- ✓ Safari (latest)
- ✓ Edge (latest)

Expected:
- All components render
- All interactions work
- No console errors

### Mobile Browsers
Test on:
- ✓ Safari iOS (iPhone)
- ✓ Chrome Android (Android phone)
- ✓ Firefox Android
- ✓ Samsung Internet

Expected:
- Touch interactions work
- Responsive layout correct
- No horizontal scroll

---

## ✅ STEP 10: FINAL PRE-DEPLOYMENT CHECKLIST

Before pushing to GitHub/Vercel:

### Code Quality
- [ ] `npm run lint` passes (no TypeScript errors)
- [ ] `npm run build` passes (build succeeds)
- [ ] No console errors (F12 → Console)
- [ ] No console warnings
- [ ] No broken links

### Functionality
- [ ] Hero renders correctly
- [ ] Language toggle works (ES ↔ EN)
- [ ] Case Study hotspots all work
- [ ] Technical Vault password works ("STAINLESS")
- [ ] Audio toggle enable/disable works
- [ ] CTA widget opens LinkedIn
- [ ] Footer links work

### Responsiveness
- [ ] Mobile (375px) looks good
- [ ] Tablet (768px) looks good
- [ ] Desktop (1280px) looks good
- [ ] No horizontal scroll
- [ ] Touch targets ≥ 44px

### Accessibility
- [ ] Keyboard navigation (TAB) works
- [ ] Focus ring visible
- [ ] Screen reader test passed
- [ ] Color contrast WCAG AA+
- [ ] ARIA labels present

### Performance
- [ ] Lighthouse score ≥ 80
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1

### Privacy & Security
- [ ] Zero cookies
- [ ] No tracking scripts
- [ ] localStorage only for preferences
- [ ] GDPR statement present
- [ ] No personal data stored

### Environment
- [ ] `.env.local` has `NEXT_PUBLIC_LINKEDIN_URL`
- [ ] LinkedIn URL is correct
- [ ] All asset folders exist
- [ ] Git repository ready

### Documentation
- [ ] README.md current
- [ ] DEPLOYMENT_GUIDE.md ready
- [ ] Components documented
- [ ] Testing notes present

---

## 📋 Testing Report Template

```markdown
# Testing Report - The Material Bridge

## Date: [Date]
## Tester: [Name]
## Environment: [Browser/Device]

### Visual Rendering: PASS / FAIL
- [ ] Hero section
- [ ] Language toggle
- [ ] Case Study
- [ ] Technical Vault
- [ ] Audio Engine
- [ ] Footer
- [ ] CTA Widget

### Interactivity: PASS / FAIL
- [ ] Language switching
- [ ] Hotspot clicking
- [ ] Password unlock
- [ ] Audio toggle
- [ ] CTA redirect
- [ ] Link clicking

### Responsive: PASS / FAIL
- [ ] Mobile (375px)
- [ ] Tablet (768px)
- [ ] Desktop (1280px)

### Accessibility: PASS / FAIL
- [ ] Keyboard navigation
- [ ] Screen reader
- [ ] Color contrast

### Performance: PASS / FAIL
- [ ] Lighthouse ≥ 80
- [ ] No console errors

### Privacy: PASS / FAIL
- [ ] Zero cookies
- [ ] No tracking
- [ ] GDPR compliant

### Overall: PASS / FAIL
Notes: [Any issues found]
```

---

## 🎯 Testing Complete When:

✅ All sections above marked PASS
✅ No critical console errors
✅ All user interactions work
✅ Responsive on all breakpoints
✅ Accessibility checks pass
✅ Build succeeds
✅ Ready for deployment

---

**Next Step**: Move to Step 2 of Task 3 - Security Hardening & Asset Optimization
