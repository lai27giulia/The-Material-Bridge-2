# 🚀 Deployment Guide: The Material Bridge

Questa guida ti accompagnerà passo-passo nel deployment del sito su Vercel con auto-deploy da GitHub.

---

## ✅ Pre-requisiti

- ✓ Account GitHub (gratuito su github.com)
- ✓ Account Vercel (gratuito su vercel.com, collega con GitHub)
- ✓ Repository locale con il codice
- ✓ Node.js 18+ installato localmente

---

## 📋 Step 1: Preparazione Repository Locale

### 1.1 Inizializza Git nel progetto

```bash
cd /home/claude/the-material-bridge

# Se non già fatto
git init
git add .
git commit -m "Initial commit: The Material Bridge portfolio v1.0"
```

### 1.2 Crea repository su GitHub

1. Vai su https://github.com/new
2. **Repository name**: `the-material-bridge`
3. **Description**: "Personal Portfolio: Materials Engineer & Industrial UX Researcher"
4. **Visibility**: Public (per il deploy automatico su Vercel)
5. ❌ NON inizializzare con README, .gitignore, o license (li abbiamo già)
6. Clicca **Create repository**

### 1.3 Push locale a GitHub

```bash
# Connetti il repository remoto
git remote add origin https://github.com/your-username/the-material-bridge.git

# Rinomina il branch se necessario
git branch -M main

# Push il codice
git push -u origin main
```

**Output atteso:**
```
Enumerating objects: 45, done.
Counting objects: 100% (45/45), done.
...
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

## 🔗 Step 2: Connessione Vercel

### 2.1 Login/Signup su Vercel

1. Vai su https://vercel.com
2. Clicca **Sign Up** e seleziona **Continue with GitHub**
3. Autorizza l'accesso a GitHub
4. Completa il setup iniziale

### 2.2 Importa il Progetto

1. In Vercel Dashboard, clicca **New Project**
2. **Import Git Repository**
3. Cerca `the-material-bridge`
4. Clicca **Import**

### 2.3 Configure Project Settings

**Framework Preset**: Dovrebbe auto-riconoscere Next.js ✓

**Build Command** (default è corretto):
```
npm run build
```

**Output Directory** (default):
```
.next
```

**Environment Variables**:

Aggiungi queste variabili:

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_LINKEDIN_URL` | `https://linkedin.com/in/your-profile` |

**Clicca → Deploy**

---

## ⏳ Step 3: Wait for Initial Deploy

Vercel inizierà automaticamente il build. Dovresti vedere:

1. **Building**: Installa dipendenze, build Next.js
2. **Optimizing**: Ottimizza codice e assets
3. **Finalizing**: Upload a CDN
4. **✓ Ready**: Deploy completato in ~2-3 minuti

Se il build fallisce, controlla i **Build Logs** in Vercel per gli errori.

---

## 🎉 Step 4: Verifica il Sito

### 4.1 URL Vercel

Dopo il deploy, ricevi un URL come:
```
https://the-material-bridge-abc123.vercel.app
```

Apri in browser e verifica che:
- ✓ Page carica correttamente
- ✓ Language toggle funziona (ES/EN)
- ✓ Nessun errore in console (F12 → Console)
- ✓ Layout responsivo su mobile

### 4.2 Test Rapidi

```
1. Language Toggle
   - Clicca EN/ES → testo cambia
   
2. Navigazione
   - Scorri pagina → non ci sono errori
   
3. Mobile (F12 → Toggle Device Toolbar)
   - Testo leggibile
   - Layout non rotto
```

---

## 🔄 Step 5: Setup Auto-Deploy

### 5.1 Verifica il Webhook GitHub

Vercel ha automaticamente creato un webhook su GitHub che:
- Ascolta i push a `main`
- Innesca un build automatico

Per verificare:
1. Vai su GitHub → Settings → Webhooks
2. Dovresti vedere un webhook di Vercel
3. Status dovrebbe essere ✓ Active

### 5.2 Test dell'Auto-Deploy

Fai una modifica minore per testare:

```bash
# Modifica un file qualsiasi
echo "# Updated $(date)" >> README.md

# Commit e push
git add .
git commit -m "Test auto-deploy"
git push origin main
```

Vai su Vercel Dashboard e dovresti vedere:
- Nuovo deployment in "Building"
- Dopo ~2-3 minuti, stato "Ready"
- URL aggiornato con nuovi cambiamenti

---

## 🌐 Step 6: Custom Domain (Opzionale)

Se possiedi un dominio personalizzato:

### 6.1 In Vercel Dashboard

1. **Project Settings** → **Domains**
2. Clicca **Add Domain**
3. Inserisci il tuo dominio (es: `giulia-portfolio.com`)
4. Segui le istruzioni per aggiornare i DNS record

### 6.2 Aggiorna i DNS

Il tuo registrar (GoDaddy, Namecheap, etc.) ti dirà come aggiungere i record DNS. Tipicamente:

```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

Dopo 24-48 ore, il dominio punterà al tuo sito Vercel ✓

---

## 🔧 Step 7: Environment Variables di Produzione

### 7.1 LinkedIn URL Personalizzato

Se cambi il profilo LinkedIn:

1. Vercel Dashboard → Project Settings → Environment Variables
2. Clicca su `NEXT_PUBLIC_LINKEDIN_URL`
3. Aggiorna il valore
4. **Save** (auto-trigger un nuovo deploy)

---

## 📊 Step 8: Monitoring & Logs

### 8.1 Vercel Analytics

Vercel ha analytics incorporati:
- **Dashboard**: Performance metrics
- **Edge Functions**: Se usi serverless functions
- **Deployments**: Storico di ogni deploy

### 8.2 Controllare i Logs di Build

Se un deploy fallisce:
1. Vercel Dashboard → Deployments
2. Clicca sul deployment fallito
3. Vedi i **Build Logs**

Errori comuni:
- `Module not found`: dipendenza mancante
- `TypeScript error`: errore nel codice
- `Build timeout`: progetto troppo complesso

---

## 🛡️ Step 9: Security Checklist

✓ **Repository Settings**
- [ ] Main branch protetto (Settings → Branch protection rules)
- [ ] Require PR reviews prima di merge
- [ ] Status checks obbligatori (GitHub Actions)

✓ **Vercel Settings**
- [ ] Auto-deploy solo da `main`
- [ ] Preview deploy per PR (già abilitato di default)
- [ ] Nessun secret in variabili pubbliche

✓ **Environment Variables**
- [ ] `NEXT_PUBLIC_*` solo per dati pubblici
- [ ] Secrets sensibili in Vercel, NON in `.env.local`

---

## 📝 Step 10: Workflow di Sviluppo Futuro

Una volta tutto configurato, il workflow è semplice:

```bash
# 1. Fai modifiche locali
# 2. Testa localmente
npm run dev

# 3. Commit e push
git add .
git commit -m "Feature: Add X component"
git push origin main

# 4. Vercel auto-deploy (in ~2 minuti)
# 5. Sito live su https://the-material-bridge.vercel.app
```

---

## 🆘 Troubleshooting

### "Deploy fails with TypeScript errors"

```bash
# Verifica localmente
npm run build

# Correggi errori, poi push
git add .
git commit -m "Fix TypeScript errors"
git push origin main
```

### "Webhook non risponde"

GitHub a volte non innesca il webhook. Workaround:
1. Vercel Dashboard → Deployments
2. Clicca il pulsante "Redeploy"

### "Environment variables non caricati"

1. Vercel Dashboard → Settings → Environment Variables
2. Verifica che la variabile esista
3. **Redeploy** il sito

### "Build succeeds ma il sito è vecchio"

Cancella la cache:
1. Vercel Dashboard → Settings → Git
2. Clicca **Clear Build Cache**
3. **Redeploy**

---

## ✅ Checklist Finale

- [ ] GitHub repository creato e pushato
- [ ] Vercel project importato
- [ ] Environment variables impostate
- [ ] Build iniziale completato con successo
- [ ] Sito accessibile su URL Vercel
- [ ] Language toggle funziona
- [ ] Auto-deploy testato (webhook attivo)
- [ ] Custom domain configurato (opzionale)
- [ ] Branch protection rules attivate
- [ ] README aggiornato con nuovo URL

---

## 🎉 You're Done!

Il tuo sito è ora:
✓ Pubblicato e accessibile online
✓ Auto-deploy su ogni push a GitHub
✓ Ottimizzato con Vercel Edge Network
✓ Zero-cookie privacy-first

**Prossimo passo**: Continua lo sviluppo seguendo il Blueprint, componente per componente!

---

**Questions?** Consulta:
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [GitHub Docs](https://docs.github.com)
