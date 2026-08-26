Performance checklist — initial steps

1. Code-splitting & lazy loading
   - Use dynamic import() for heavy sections (e.g., GitHub contributions, Skills animations, Hero image processing).
   - Configure Rollup `manualChunks` to group large vendor libraries (done in `vite.config.js`).

2. Images & assets
   - Serve appropriately sized images and convert large JPG/PNG to WebP.
   - Use responsive `srcset` and `picture` where applicable.
   - Compress resume PDF where possible.

3. Dependency audit
   - Remove unused large libraries.
   - Replace heavy UI libs with lighter alternatives if possible.

4. Caching & headers
   - Ensure long-term caching for static assets in production.

5. Lighthouse checks
   - Run Lighthouse on target pages (mobile/desktop) and address top 5 issues.

6. Runtime optimizations
   - Avoid expensive operations during render; memoize where needed.
   - Defer analytics and non-critical scripts.

7. Monitoring
   - Add bundle size monitoring (e.g., source-map-explorer, webpack-bundle-analyzer equivalent) in CI.
