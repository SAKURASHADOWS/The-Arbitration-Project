## 2024-05-22 - Move Render-Blocking Scripts
**Learning:** Moving heavy third-party libraries (like Chart.js) from `<head>` to the end of `<body>` unblocks the HTML parser, significantly improving First Contentful Paint (FCP).
**Action:** When optimizing static sites, prioritize moving non-critical scripts to the footer, ensuring dependent inline scripts follow immediately after to maintain execution order.
