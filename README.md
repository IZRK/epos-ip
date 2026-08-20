# EPOS Slovenia

## Development

Requirements: Node.js 22 and npm.

```sh
npm ci
npm run dev
```

The development server is available at `http://localhost:8080`.

## Build

```sh
npm run build
```

The generated website is written to `_site/`.

Run the complete build and validation suite with:

```sh
npm test
```

## GitHub Pages

The workflow in `.github/workflows/pages.yml` publishes the site after pushes to `main` and can also be run manually. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

Both project Pages URLs and custom domains are supported. The workflow uses the Pages base path automatically, so the same source works at `username.github.io/repository/` and at the root of a custom domain. Configure the domain under **Settings → Pages → Custom domain**.
