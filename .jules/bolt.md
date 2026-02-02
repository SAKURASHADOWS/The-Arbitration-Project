## 2025-02-18 - Tailwind CDN Constraint
**Learning:** The project uses Tailwind via CDN (JIT mode) in the <head>. Moving it causes FOUC. However, other heavy libraries like Chart.js can and should be moved to the footer to improve FCP.
**Action:** Always keep Tailwind CDN in head, but defer or move all other scripts to footer.
