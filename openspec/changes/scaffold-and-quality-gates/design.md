# Design: scaffold-and-quality-gates

## Decisions
- **Astro over Vue/Vite SPA.** Static HTML with zero JS by default gives better SEO, performance and accessibility for a content site. Trade-off: less showcase of Vue; acceptable because the goal is evaluation speed, not a framework demo.
- **Plain CSS over Tailwind.** Small surface, no build dependency, demonstrates CSS fundamentals. Trade-off: no utility classes; mitigated by custom properties and BEM naming.
- **GitHub Pages over Cloudflare/Vercel.** Zero extra accounts and free. Trade-off: no preview deploys per PR; acceptable for v1.
- **Lighthouse CI with fixed budgets.** Makes quality claims verifiable. Trade-off: flaky scores on CI runners; mitigated by running 3 times and using the median.
- **Repo name `GustavoHerpich.github.io`.** Serves at the root so no `base` path handling is needed.

## Dependencies introduced
astro, typescript, eslint (+ astro plugin), prettier (+ astro plugin), vitest, @playwright/test, @axe-core/playwright, @lhci/cli.
