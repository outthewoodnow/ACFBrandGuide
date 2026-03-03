# Athlete Connections Foundation Brand Guide (GitHub Ready)

This folder is ready to publish directly with GitHub Pages.

## Contents
- `index.html` - single-file brand guide (HTML + CSS + JS)
- `assets/acf-logo-primary.png` - primary logo image
- `assets/acf-logo-secondary.png` - secondary logo image
- `.nojekyll` - ensures GitHub Pages serves files as-is

## 1) Add logos
Place your two logo files in `assets/` using exactly these names:
- `acf-logo-primary.png`
- `acf-logo-secondary.png`

## 2) Publish with GitHub Pages
1. Create a GitHub repository.
2. Upload everything inside this folder to the repo root.
3. Open `Settings` -> `Pages`.
4. Under `Build and deployment`:
   - Source: `Deploy from a branch`
   - Branch: `main` (or `master`), folder: `/ (root)`
5. Save and wait for deployment.

## 3) Optional config updates
In `index.html`, edit the config block near the bottom if needed:

```js
const LETTERMARK_SRC = "./assets/acf-logo-primary.png";
const WORDMARK_SRC = "./assets/acf-logo-secondary.png";
const FAVICON_SRC = "./assets/acf-logo-secondary.png";
const BRAND = {
  name: "Athlete Connections Foundation",
  tagline: "Empowering Youth Through Sports, Life Skills & Education."
};
```
