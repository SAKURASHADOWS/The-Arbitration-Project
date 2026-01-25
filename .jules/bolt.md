## 2024-05-22 - [Script Loading]
**Learning:** Moving render-blocking scripts (like Chart.js) to the end of the `<body>` is a verified strategy to improve First Contentful Paint (FCP) in this project.
**Action:** Always check for heavy scripts in `<head>` that can be moved to `<body>` end.
