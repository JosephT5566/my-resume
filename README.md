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

GitHub Actions deploys every commit pushed to `master`. Configure these values
under **Settings > Secrets and variables > Actions**:

- Secret `CF_API_TOKEN`: Create an Account API token using Cloudflare's
  **Edit Cloudflare Workers** permission policy. Restrict it to the account and
  `josephtseng-tw.com` zone used by this project.
- Variable `CF_ACCOUNT_ID`: `1f7783c7c3c593ab98bad669c80ae933`

Do not use a Global API Key or copy the token ID/name. The secret must contain
the token value displayed when the API token is created.
