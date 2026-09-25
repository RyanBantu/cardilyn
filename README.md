# Heart Anatomy — Interactive Reference

An interactive cardiac anatomy reference built with Vite + React. Covers chambers, valves, coronary arteries, veins, and the cardiac cycle — with animated blood-flow diagrams and a systole/diastole toggle.

**Disclaimer:** Content is based on self-directed research and is for education only. It is not medical advice. Always consult a qualified cardiologist. Do not use as a primary reference for self-treatment.

## Features

- Animated blood-flow hero diagram and cardiac cycle visualization
- Systole / diastole toggle with auto-play
- Scroll-spy table of contents
- Contribution form — visitors can send additions or corrections to **bantu.ryan@gmail.com**

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Deploy

Works on any static host (Vercel, Netlify, GitHub Pages, etc.):

```bash
npm run build
# deploy the `dist/` folder
```

### Vercel (one command)

```bash
npx vercel --prod
```

## Privacy policy

React route for Play Store / App Store listing:

- Component: `src/pages/PrivacyPolicy.jsx` (routed at `/privacy/` via `react-router-dom`)
- Live URL: [https://www.cardilyn.com/privacy/](https://www.cardilyn.com/privacy/)

Paste that URL into Google Play Console → App content → Privacy policy.

## Delete account

Play Console Data safety → Delete account URL:

- Component: `src/pages/DeleteAccount.jsx` (routed at `/delete-account/`)
- Live URL: [https://www.cardilyn.com/delete-account/](https://www.cardilyn.com/delete-account/)

> **Note:** The contribution form uses [FormSubmit](https://formsubmit.co). On the first submission, FormSubmit sends an activation email to **bantu.ryan@gmail.com** — click the link to start receiving contributions. The "Open in email app" button works immediately as a fallback.
