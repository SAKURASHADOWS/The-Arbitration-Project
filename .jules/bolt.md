## 2024-05-23 - Render Blocking Scripts in Static HTML
**Learning:** In simple static sites without a build step, large libraries (like Chart.js) in the `<head>` significantly delay FCP because the browser pauses DOM construction to download and execute them.
**Action:** Move non-critical library scripts to the end of the `<body>`, immediately before the application logic that depends on them. This unblocks rendering without requiring complex `defer`/`async` refactoring for inline scripts.
