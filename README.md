# aap-example-vite-react

A minimal **Vite + React single-page app** app, kept as a deploy example for [AI Admin Panel](https://aiadminpanel.com).

AI Admin Panel deploys it from this repository with **Git Deploy** (and **AI Deploy**) and checks
the result regularly: the page at `/` must contain the marker `aap-example:vite-react`. Use it to see how
your own Vite + React single-page app project is built, or as a starting point.

Shaped like what Lovable or Bolt export: `npm run build` writes static files to `dist/`, and there is no server of its own. The marker sits in `index.html`, so it is visible without running JavaScript.

- The app listens on `$PORT` (default 8080).
- No secrets in this repository.
- License: MIT.
