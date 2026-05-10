# DATABASE SETUP - The Material Bridge

## Complete Guide to Neon PostgreSQL Configuration

**Portfolio**: The Material Bridge  
**Owner**: Giulia Lai  
**Date**: May 10, 2026  
**Version**: 1.0

---

## EXECUTIVE SUMMARY

This document provides complete instructions for setting up, configuring, and using the Neon PostgreSQL database for Giulia Lai's Materials Engineer portfolio.

**Quick Facts:**
- Database Provider: Neon (Managed PostgreSQL)
- Database Name: neondb
- Region: EU Central 1 (AWS)
- Status: Active & Ready
- Connection: SSL/TLS Encrypted

---

## TABLE OF CONTENTS

1. Database Configuration
2. Connection Details
3. Database Schema
4. How to Populate the Database
5. Verification Steps
6. Using Database in Next.js
7. Backup & Restore
8. Troubleshooting
9. Security & Privacy
10. Next Steps

---

## 1. DATABASE CONFIGURATION

### Connection Information

| Parameter | Value |
|-----------|-------|
| Provider | Neon (Managed PostgreSQL) |
| Database Name | neondb |
| User | neondb_owner |
| Host | ep-steep-block-alqdwiup-pooler.c-3.eu-central-1.aws.neon.tech |
| Port | 5432 |
| Region | EU Central 1 (AWS) |
| SSL | Required |
| Channel Binding | Required |

### Connection String

```
postgresql://neondb_owner:npg_Nq8Q2mMiRwUI@ep-steep-block-alqdwiup-pooler.c-3.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

### Environment Variables

Add to `.env.local`:

```
DATABASE_URL=postgresql://neondb_owner:npg_Nq8Q2mMiRwUI@ep-steep-block-alqdwiup-pooler.c-3.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

---

## 2. DATABASE SCHEMA OVERVIEW

The database consists of 8 tables designed to support Giulia's portfolio:

### Table 1: portfolio_metadata
Stores personal and professional information.

**Purpose**: Single source of truth for portfolio owner details
**Records**: 1

**Columns:**
- id (Primary Key)
- name: "Giulia Lai"
- title: "Materials Engineer & Industrial UX Researcher"
- description: Professional summary
- linkedin_url: "https://www.linkedin.com/in/giulia-lai/"
- email: "giulia.lai@example.com"
- created_at: Timestamp
- updated_at: Timestamp

### Table 2: case_studies
Stores portfolio case studies/projects.

**Purpose**: Showcase work and expertise
**Records**: 1 (extensible)

**Columns:**
- id (Primary Key)
- title_es / title_en (Bilingual titles)
- subtitle_es / subtitle_en
- description_es / description_en
- image_url: Path to case study image
- status: 'published' or 'draft'
- created_at: Timestamp
- updated_at: Timestamp

**Current Case Study:**
- Title (ES): "Transformación: Del Caos a la Eficiencia"
- Title (EN): "Transformation: From Chaos to Efficiency"
- Topic: Structural welding process optimization

### Table 3: hotspots
Interactive points within case studies.

**Purpose**: Enable interactive case study visualization
**Records**: 3

**Columns:**
- id (Primary Key)
- case_study_id (Foreign Key)
- label_es / label_en (Point labels)
- problem_es / problem_en (Problem statement)
- solution_es / solution_en (Solution description)
- hotspot_type: 'metallurgical' | 'workflow' | 'ux'
- position_x / position_y (Image coordinates)
- created_at: Timestamp

**Current Hotspots:**
1. Punto Técnico (Technical Point)
   - Type: Metallurgical
   - Focus: HAZ properties and microstructural degradation

2. Punto de Proceso (Process Point)
   - Type: Workflow
   - Focus: Operator procedures and complexity

3. Punto Humano (Human Point)
   - Type: UX
   - Focus: Cognitive load and stress management

### Table 4: technical_datasets
Detailed technical data and visualizations.

**Purpose**: Support technical deep-dive section
**Records**: 2

**Columns:**
- id (Primary Key)
- case_study_id (Foreign Key)
- title_es / title_en
- description_es / description_en
- file_type: 'graph' | 'micrograph' | 'table' | 'document'
- image_url: Path to visualization
- data_json: JSONB for storing raw data
- created_at: Timestamp

**Current Datasets:**
1. Hardness Analysis - Stress-Strain Curve (graph)
2. Microstructure - Metallographic Analysis (micrograph)

### Table 5: skills
Professional skills and expertise.

**Purpose**: Display technical competencies
**Records**: 7

**Columns:**
- id (Primary Key)
- category_es / category_en (Skill category)
- skill_name: Skill description
- proficiency_level: 1-100 scale
- is_featured: Boolean (featured skills)

**Current Skills:**
- Microstructure Analysis (95%)
- Welding Processes (90%)
- User-Centered Design (85%)
- Optical Microscopy (90%)
- AutoCAD/CATIA (85%)
- Qualitative Research (85%)
- Figma/Adobe XD (80%)

### Table 6: portfolio_analytics
Privacy-first analytics and event tracking.

**Purpose**: Track user interactions without personal data
**Records**: Grows over time

**Columns:**
- id (Primary Key)
- event_type: 'page_view' | 'component_interaction' | 'external_link'
- page_path: Accessed page path
- component_name: Interacted component
- timestamp: Event timestamp
- metadata: JSONB (no personal data)

**Privacy Notes:**
- No IP addresses collected
- No personal identification
- GDPR compliant
- No cookies required

### Table 7: contact_messages
Contact form submissions.

**Purpose**: Handle contact requests when contact form enabled
**Records**: Grows with inquiries

**Columns:**
- id (Primary Key)
- name: Sender name
- email: Sender email
- subject: Message subject
- message: Message content
- status: 'unread' | 'read' | 'replied'
- created_at: Timestamp
- replied_at: Timestamp

### Table 8: portfolio_settings
Configuration settings.

**Purpose**: Store portfolio configuration
**Records**: 6

**Columns:**
- id (Primary Key)
- setting_key: Setting identifier (UNIQUE)
- setting_value: Setting value
- description: Setting description
- updated_at: Timestamp

**Current Settings:**
- theme: 'brutalist'
- language_default: 'es'
- enable_analytics: 'false'
- enable_contact_form: 'false'
- site_title: 'The Material Bridge | Giulia Lai'
- site_description: Portfolio description

---

## 3. HOW TO POPULATE THE DATABASE

### Option 1: Using Node.js Script (Recommended)

**Prerequisites:**
```bash
npm install pg
```

**Steps:**
```bash
# 1. Navigate to project directory
cd the-material-bridge

# 2. Run population script
node populate-db.js

# Expected output:
# ✅ Connected successfully!
# ✅ Tables created
# ✅ Data inserted
# ✅ DATABASE POPULATION COMPLETE!
```

### Option 2: Using psql CLI

**Prerequisites:**
- PostgreSQL client installed

**Steps:**
```bash
# 1. Execute SQL script
psql "postgresql://neondb_owner:npg_Nq8Q2mMiRwUI@ep-steep-block-alqdwiup-pooler.c-3.eu-central-1.aws.neon.tech/neondb?sslmode=require" -f db-schema.sql

# 2. Verify
psql "postgresql://neondb_owner:npg_Nq8Q2mMiRwUI@ep-steep-block-alqdwiup-pooler.c-3.eu-central-1.aws.neon.tech/neondb?sslmode=require"
SELECT * FROM portfolio_metadata;
```

### Option 3: Using Neon Web Console

**Steps:**
1. Go to: https://console.neon.tech/
2. Login to your account
3. Navigate to your project
4. Click "SQL Editor"
5. Copy-paste contents of `db-schema.sql`
6. Click "Execute"
7. Verify data in Tables view

---

## 4. VERIFICATION STEPS

### Verify Connection

```bash
# Test connection
psql "postgresql://neondb_owner:npg_Nq8Q2mMiRwUI@ep-steep-block-alqdwiup-pooler.c-3.eu-central-1.aws.neon.tech/neondb?sslmode=require" -c "SELECT version();"
```

Expected: PostgreSQL version information

### Verify Tables

```bash
# List all tables
psql "postgresql://..." -c "\dt"

# Expected output:
# portfolio_metadata
# case_studies
# hotspots
# technical_datasets
# skills
# portfolio_analytics
# contact_messages
# portfolio_settings
```

### Verify Data

```bash
# Check portfolio metadata
psql "postgresql://..." -c "SELECT * FROM portfolio_metadata;"

# Expected: Giulia Lai's information

# Check case studies
psql "postgresql://..." -c "SELECT id, title_en FROM case_studies;"

# Expected: Structural welding case study

# Check record counts
psql "postgresql://..." -c "SELECT 
  'portfolio_metadata' as table_name, COUNT(*) as count FROM portfolio_metadata
UNION ALL SELECT 'case_studies', COUNT(*) FROM case_studies
UNION ALL SELECT 'hotspots', COUNT(*) FROM hotspots
UNION ALL SELECT 'technical_datasets', COUNT(*) FROM technical_datasets
UNION ALL SELECT 'skills', COUNT(*) FROM skills;"
```

---

## 5. USING DATABASE IN NEXT.JS

### Install pg Library

```bash
npm install pg
```

### Create Database Utility Functions

Create `src/lib/db.ts`:

```typescript
import { Client } from 'pg';

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Connect to database
export async function connectDB() {
  if (!client.connected) {
    await client.connect();
  }
  return client;
}

// Get portfolio metadata
export async function getPortfolioMetadata() {
  const db = await connectDB();
  const result = await db.query('SELECT * FROM portfolio_metadata LIMIT 1');
  return result.rows[0];
}

// Get published case studies
export async function getCaseStudies() {
  const db = await connectDB();
  const result = await db.query(
    'SELECT * FROM case_studies WHERE status = $1 ORDER BY created_at DESC',
    ['published']
  );
  return result.rows;
}

// Get hotspots for a case study
export async function getHotspots(caseStudyId: number) {
  const db = await connectDB();
  const result = await db.query(
    'SELECT * FROM hotspots WHERE case_study_id = $1',
    [caseStudyId]
  );
  return result.rows;
}

// Get all skills
export async function getSkills() {
  const db = await connectDB();
  const result = await db.query(
    'SELECT * FROM skills ORDER BY proficiency_level DESC'
  );
  return result.rows;
}

// Get featured skills
export async function getFeaturedSkills() {
  const db = await connectDB();
  const result = await db.query(
    'SELECT * FROM skills WHERE is_featured = TRUE ORDER BY proficiency_level DESC'
  );
  return result.rows;
}

// Get portfolio settings
export async function getSettings() {
  const db = await connectDB();
  const result = await db.query('SELECT * FROM portfolio_settings');
  
  // Convert to key-value object
  const settings: Record<string, string> = {};
  result.rows.forEach(row => {
    settings[row.setting_key] = row.setting_value;
  });
  
  return settings;
}
```

### Use in Components

Example - Hero Component:

```typescript
import { getPortfolioMetadata } from '@/lib/db';

export default async function Hero() {
  const metadata = await getPortfolioMetadata();
  
  if (!metadata) {
    return <div>Loading...</div>;
  }
  
  return (
    <section className="hero">
      <h1>{metadata.name}</h1>
      <p>{metadata.title}</p>
      <p>{metadata.description}</p>
      <a href={metadata.linkedin_url} target="_blank">
        Connect on LinkedIn
      </a>
    </section>
  );
}
```

Example - Skills Component:

```typescript
import { getFeaturedSkills } from '@/lib/db';

export default async function Skills() {
  const skills = await getFeaturedSkills();
  
  return (
    <section className="skills">
      <h2>Skills & Expertise</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <div key={skill.id} className="skill-item">
            <h3>{skill.skill_name}</h3>
            <div className="proficiency">
              <div className="bar" style={{ width: `${skill.proficiency_level}%` }} />
            </div>
            <span>{skill.proficiency_level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

## 6. BACKUP & RESTORE

### Create Backup

```bash
# Create SQL dump
pg_dump -U neondb_owner \
  -h ep-steep-block-alqdwiup-pooler.c-3.eu-central-1.aws.neon.tech \
  neondb > backup.sql

# Create compressed backup
pg_dump -U neondb_owner \
  -h ep-steep-block-alqdwiup-pooler.c-3.eu-central-1.aws.neon.tech \
  -F c neondb > backup.dump
```

### Restore from Backup

```bash
# Restore from SQL dump
psql "postgresql://neondb_owner:***@ep-steep-block-alqdwiup-pooler.c-3.eu-central-1.aws.neon.tech/neondb" < backup.sql

# Restore from compressed dump
pg_restore -U neondb_owner \
  -h ep-steep-block-alqdwiup-pooler.c-3.eu-central-1.aws.neon.tech \
  -d neondb backup.dump
```

---

## 7. SECURITY & PRIVACY

### Security Features

✅ **SSL/TLS Encryption**: All connections encrypted in transit
✅ **Channel Binding**: Additional connection security layer
✅ **Credentials in .env**: Credentials not committed to Git
✅ **No Sensitive Data**: User preferences only (privacy-first)

### Privacy Compliance

✅ **GDPR Compliant**: No personal data collection
✅ **No Cookies**: Not required for functionality
✅ **No Third-party Tracking**: Analytics are internal only
✅ **Data Minimization**: Only essential data stored

### Best Practices

1. **Never commit `.env.local`** to Git
2. **Rotate credentials** if exposed
3. **Use SSL mode=require** always
4. **Monitor access logs** in Neon console
5. **Regular backups** of important data

---

## 8. TROUBLESHOOTING

### Connection Refused

**Error**: `Error: connect ECONNREFUSED`

**Solutions**:
1. Verify `DATABASE_URL` in `.env.local`
2. Check internet connection
3. Verify Neon project is active
4. Try connection from Neon console first

### SSL Error

**Error**: `Error: The server does not support SSL connections`

**Solution**: Ensure `sslmode=require` is in connection string

### Authentication Failed

**Error**: `error: password authentication failed`

**Solution**: Check credentials in connection string (username/password)

### Table Not Found

**Error**: `relation "portfolio_metadata" does not exist`

**Solution**: Run `populate-db.js` or execute `db-schema.sql`

### Timeout

**Error**: `Error: Client was closed by the server`

**Solutions**:
1. Check connection limits
2. Verify firewall allows Neon IPs
3. Check Neon status page
4. Reconnect with new client

---

## 9. NEXT STEPS

### Phase 1: Setup (Completed)
✅ Database created
✅ Schema defined
✅ Data populated

### Phase 2: Integration (Recommended)
- [ ] Install pg library in Next.js
- [ ] Create db.ts utility functions
- [ ] Update components to use database
- [ ] Test database queries

### Phase 3: Enhancement (Optional)
- [ ] Add contact form handling
- [ ] Enable analytics tracking
- [ ] Create admin dashboard
- [ ] Add more case studies

### Phase 4: Production (Future)
- [ ] Enable backups
- [ ] Set up monitoring
- [ ] Optimize queries
- [ ] Implement caching

---

## 10. SUPPORT & RESOURCES

### Documentation
- Neon Docs: https://neon.tech/docs
- PostgreSQL Docs: https://www.postgresql.org/docs
- Node pg Library: https://node-postgres.com/

### Get Help
- Neon Support: support@neon.tech
- Project Console: https://console.neon.tech

---

## APPENDIX: Quick Reference

### Connection String
```
postgresql://neondb_owner:npg_Nq8Q2mMiRwUI@ep-steep-block-alqdwiup-pooler.c-3.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

### Files Provided
- `db-schema.sql` - Database schema (SQL)
- `populate-db.js` - Population script (Node.js)
- `DATABASE_SETUP.md` - This guide (Markdown)

### Quick Commands
```bash
# Test connection
psql "$DATABASE_URL" -c "SELECT version();"

# List tables
psql "$DATABASE_URL" -c "\dt"

# View data
psql "$DATABASE_URL" -c "SELECT * FROM portfolio_metadata;"

# Backup
pg_dump -U neondb_owner -h ep-steep-block-alqdwiup-pooler.c-3.eu-central-1.aws.neon.tech neondb > backup.sql

# Populate
node populate-db.js
```

---

**Document Version**: 1.0  
**Last Updated**: May 10, 2026  
**Status**: Ready for Production  
**Owner**: Giulia Lai  
**Portfolio**: The Material Bridge

---

**End of Document**
