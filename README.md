# Remember This — Privacy Policy (web app)

A minimal single-page React + Vite app that renders the Privacy Policy for
the **Remember This** app. Built to be hosted at a public URL (e.g.
`rememberthis.app/privacy`) so it can be submitted as the App Store
Connect "Privacy Policy URL."

## Develop

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Outputs static files to `dist/` — deploy that folder to any static host
(Vercel, Netlify, GitHub Pages, Cloudflare Pages, S3, etc.).

## Editing the policy text

All copy lives in `src/App.jsx`. Colors and layout are in `src/index.css`,
matching the app's mint-to-pink gradient / magenta accent theme.

Update `EFFECTIVE_DATE` and `SUPPORT_EMAIL` at the top of `App.jsx` if
either changes.
