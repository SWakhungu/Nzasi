# 🌐 Nzasi Ventures Website

**Nzasi Ventures Limited** is a Nairobi-based company building **AfyaNumeriq**, a Governance, Risk, and Compliance (GRC) platform designed primarily for healthcare organizations.

This repository contains the source code for the official **Nzasi Ventures website**, built using **Next.js 15** and **Tailwind CSS**.

---

## 🚀 Live Deployment

- 🌍 **Primary domain:** https://nzasi.com
- 🔁 **Vercel alias:** https://nzasi.vercel.app
- 🧾 **Deployment checklist:** [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)

The site is live, stable, and serving as the public-facing entry point for **AfyaNumeriq GRC**.

---

## ✨ Key Features

- Fully responsive marketing website
- Clear product positioning for AfyaNumeriq
- Legal pages (Privacy Policy, Terms of Use)
- **Server-side demo request flow**
  - Secure API route
  - Email delivery via Resend
  - Thank-you confirmation modal
  - No client email dependency

---

## 📂 Project Structure (Relevant)

.
├── docs
│   └── SPEC.md
├── netlify.toml
├── README.md
├── site
│   ├── app
│   ├── DEPLOYMENT_CHECKLIST.md
│   ├── eslint.config.mjs
│   ├── jsconfig.json
│   ├── next.config.mjs
│   ├── node_modules
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.mjs
│   ├── public
│   └── README.md
└── vercel.json


---

## 🛠 Tech Stack

- ⚛️ **Next.js 15 (App Router)**
- 🎨 **Tailwind CSS**
- ☁️ **Vercel** (CI/CD + Serverless)
- 📧 **Resend** (transactional email delivery)

---

## 🔐 Environment Variables

Managed via **Vercel Project Settings** (not committed to git):

- `RESEND_API_KEY`
- `DEMO_FROM_EMAIL`

These are required for the demo request API to function in production.

---

## 🧪 Verified Production API

```bash
POST /api/demo-request
Accepts JSON demo requests

Performs server-side validation

Sends email to info@nzasi.com

Returns { "ok": true } on success

📌 Roadmap / Next Steps

Persist demo requests in a database

Auto-reply confirmation emails to users

Add analytics and SEO enhancements

Integrate AfyaNumeriq login portal

Multi-language support (EN / FR)

📬 Contact

✉️ Email: info@nzasi.com

☎️ Phone: +254 781 704 966

🌐 Partner: https://www.egis.africa

🧭 Maintainer Notes

Monorepo root: ~/Development/code/Nzasi

App root: site/

Branch: main

Node: >=18

Local dev: npm run dev

Deployment: automatic on push to main

Last updated: January 2026
Maintainer: Steve Wakhungu