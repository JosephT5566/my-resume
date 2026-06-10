# My Resume

React resume site built with Vite and deployed to Cloudflare Workers static assets.

## Requirements

- Node.js 22.12 or newer
- npm 10 or newer

## Development

```bash
npm ci
npm run dev
```

Vite serves the site at `http://localhost:5173`.

## Production Build

```bash
npm run build
npm run preview
```

The production files are written to `dist/`.

## Deployment

Wrangler deploys `dist/` using the static-assets configuration in
`wrangler.toml`.

```bash
npm run deploy
```

GitHub Actions deploys tags matching `main-v*`. The repository must provide a
`CF_API_TOKEN` secret with permission to deploy the configured Worker and
routes.
