## 2024-05-22 - Static HTML Performance Pattern
**Learning:** In a single-file static HTML architecture with inline scripts, moving external library scripts (like Chart.js) to the end of `<body>` is safe and effective for improving FCP, provided they remain above the dependent inline logic.
**Action:** Always audit `<head>` for blocking scripts in static sites and verify execution order when relocating.
