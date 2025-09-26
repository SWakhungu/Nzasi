# 🚀 Nzasi Ventures MVP Deployment Checklist

This document tracks the deployment readiness of the Nzasi Ventures website MVP.

---

## 1. Project Setup

- [x] Repo initialized on GitHub (`Nzasi`).
- [x] Branching strategy followed (`spec/* → feature/* → main`).
- [x] Next.js 15 + Tailwind CSS installed and working.
- [x] Code runs locally with `npm run dev`.

---

## 2. Website Sections

- [x] Navbar (with logo).
- [x] Hero Section (background image + overlay).
- [x] About Us.
- [x] Solution.
- [x] Partnership.
- [x] Resources.
- [x] Contact.

---

## 3. Assets

- [x] `logo.png` placed in `/public`.
- [x] `hero-bg.jpg` placed in `/public`.
- [x] Favicon converted (`favicon.ico` + `favicon.png`).
- [x] Both favicons placed in `/public`.

---

## 4. Metadata & Favicon

- [x] `app/layout.js` updated with title, description, favicon icons.
- [x] Verified favicon loads locally (`http://localhost:3000`).
- [x] Verified favicon loads on production (Vercel).

---

## 5. Git Workflow

- [x] Commit changes with `git add . && git commit -m "..."`.
- [x] Push to `main`: `git push origin main`.
- [x] GitHub → Vercel auto-deployment configured.

---

## 6. Vercel Deployment

- [x] Latest deployment passes build checks.
- [x] Site live at: **[https://nzasi.vercel.app](https://nzasi.vercel.app)**

---

## 7. Post-Deployment Testing

- [x] Favicon visible in browser tab (test incognito + mobile).
- [x] All sections render correctly.
- [x] Navigation links scroll to correct sections.

---

## 8. Future Enhancements

- [ ] Add footer (Privacy Policy, Terms of Use, Login).
- [ ] Set up analytics (Google Analytics, Plausible, etc.).
- [ ] Add contact form (email API or serverless function).
- [ ] Optimize images (WebP).
- [ ] Configure custom domain (`nzasi.co.ke`).

---

✅ **MVP is now production-ready.**
