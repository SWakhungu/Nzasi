# 🌐 Nzasi Ventures Website

**Nzasi Ventures Limited** is a Nairobi-based company building **AfyaNumeriq**, a Governance, Risk, and Compliance (GRC) platform designed for healthcare organizations.

This repository contains the source code for the official **Nzasi Ventures website**, built using **Next.js 15** and **Tailwind CSS**.

---

## 🚀 Deployment Status

- ✅ **Live MVP:** [https://nzasi.com](https://nzasi.com)
- 🌍 **Vercel alias:** [https://nzasi.vercel.app](https://nzasi.vercel.app)
- 🧾 **Deployment checklist:** [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)

> **Note:** The MVP site is stable and live.  
> The **hero background image (`hero-bg.jpg`) does not render both locally and on production**, even though it exists in `/public`.  
> Debugging this will be the next technical priority.

---

## 📂 Project Structure

app/
├── components/
│ ├── Navbar.jsx
│ └── Footer.jsx
├── (legal)/
│ ├── privacy-policy/page.js
│ ├── terms-of-use/page.js
│ └── cookie-notice/page.js
├── contact/page.js
├── layout.js
└── page.js
public/
├── hero-bg.jpg
├── logo.png
├── favicon.ico
└── favicon.png
README.md
DEPLOYMENT_CHECKLIST.md

---

## 🛠 Tech Stack

- ⚛️ **Next.js 15**
- 🎨 **Tailwind CSS 4**
- ☁️ **Vercel** for continuous deployment
- 📧 **Formspree** (planned) for contact form integration

---

## ✅ Completed Features

- Responsive **navbar** and **footer**
- Fully functional homepage with **mission** and **solution** sections
- Legal pages: **Privacy Policy**, **Terms of Use**, and **Cookie Notice**
- Custom domain connection: **nzasi.com**
- Favicon and logo integrated properly

---

## 🔧 Known Issues / Next Steps

- 🖼 **Hero background image not rendering** (both locally and on production)
- 🧩 Add contact form integration via Formspree
- 📊 Add analytics (Google Analytics or Plausible)
- 🧾 Refine legal page text and add footer links dynamically
- 🔒 Conduct content and compliance review before scale-up

---

## 📌 Future Enhancements

- 🔐 **Login portal** for AfyaNumeriq users
- 📰 **Newsletter subscription** integration
- ⚙️ **SEO optimization** (meta + OG tags)
- 🌍 **Internationalization**:
  - Phase 1: English 🇬🇧 + French 🇫🇷
  - Phase 2: Add Spanish 🇪🇸

---

## 📬 Contact

- ✉️ Email: [info@nzasi.com](mailto:info@nzasi.com)
- ☎️ Phone: +254 781 704 966
- 🌐 Partner: [Egis Management Systems](https://www.egis.africa)

---

## 🧭 Maintainer Notes

- Development path: `~/Development/code/Nzasi/site`
- Deployment: [Vercel CLI + GitHub integration](https://vercel.com)
- Branch: `main`
- Node: `>=18.x`
- Run locally: `npm run dev`
- Auto-deploy: on push to `main`

---

_Last updated: October 2025_  
_Maintainer: Steve Wakhungu_
