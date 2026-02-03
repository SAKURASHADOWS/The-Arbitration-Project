## 2024-05-21 - [Static Site Script Loading]
**Learning:** In this single-file HTML architecture, heavy libraries like Chart.js in `<head>` block FCP. Moving them to the end of `<body>` works safely because initialization logic is inline at the bottom.
**Action:** Always verify inline script dependencies before moving CDN links.
