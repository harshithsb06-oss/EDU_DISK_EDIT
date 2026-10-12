# EduDisk marketing site

Public landing page for **EduDisk** — school and college ERP built in Davanagere.

## Tech stack

- React 19
- Vite 7
- Tailwind CSS 4
- Framer Motion

## Getting started

```bash
npm install
npm run dev      # http://localhost:5174
npm run build    # → dist/
npm run preview
```

## Deploy note

Production `edudisk.in` builds from this folder:

```bash
cd static_ui
npm run build
# rsync dist/ → /var/www/edudisk on the VPS
```
