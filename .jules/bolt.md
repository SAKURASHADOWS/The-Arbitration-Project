## 2024-10-25 - [Tailwind CDN Constraint]
**Learning:** The Tailwind CSS CDN script must remain in the `<head>` to prevent Flash of Unstyled Content (FOUC). Even though it is render-blocking, moving it to the footer breaks the visual experience immediately on load because it parses the DOM to generate styles.
**Action:** Always keep `cdn.tailwindcss.com` script in `<head>`. Optimize FCP by moving other libraries (like Chart.js) or using `preconnect`.
