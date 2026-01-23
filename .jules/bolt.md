# Bolt's Journal

## 2024-05-22 - Static CDN Architecture
**Learning:** The project uses direct CDN links without a `package.json` build system.
**Action:** Optimizations must focus on HTML structure and script loading order rather than bundling or tree-shaking.

## 2024-05-22 - Render-Blocking Scripts
**Learning:** Moving heavy libraries (Chart.js) to the end of `<body>` improves FCP without breaking inline logic, provided they remain before dependent scripts.
**Action:** Always audit `<head>` for non-critical scripts.
