// --- UTILITY: Label Wrapper for Chart.js (Strict 16 char limit) ---
function wrapLabels(labels) {
    return labels.map(label => {
        if (label.length <= 16) return label;
        const words = label.split(' ');
        const lines = [];
        let currentLineWords = [words[0]];
        let currentLength = words[0].length;

        for (let i = 1; i < words.length; i++) {
            const word = words[i];
            // Check if adding the next word exceeds the limit
            // currentLength is the length of words so far
            // +1 for the space that would be added
            // + word.length for the new word
            if (currentLength + 1 + word.length <= 16) {
                currentLineWords.push(word);
                currentLength += 1 + word.length;
            } else {
                lines.push(currentLineWords.join(' '));
                currentLineWords = [word];
                currentLength = word.length;
            }
        }
        lines.push(currentLineWords.join(' '));
        return lines;
    });
}

// --- GLOBAL CHART DEFAULTS ---
Chart.defaults.font.family = "'Segoe UI', 'Helvetica', 'Arial', sans-serif";
Chart.defaults.color = '#4B5563';
Chart.defaults.responsive = true;
Chart.defaults.maintainAspectRatio = false; // Crucial for container fitting

// Common Tooltip Configuration required by prompt
const commonTooltipConfig = {
    callbacks: {
        title: function(tooltipItems) {
            const item = tooltipItems[0];
            let label = item.chart.data.labels[item.dataIndex];
            if (Array.isArray(label)) {
                return label.join(' ');
            } else {
                return label;
            }
        }
    }
};

// --- CHART 1: Comparison (Bar) ---
const ctxComparison = document.getElementById('chartComparison').getContext('2d');
new Chart(ctxComparison, {
    type: 'bar',
    data: {
        // Pre-wrapped labels
        labels: wrapLabels(['Costuri de Start', 'Costuri Mentenanță', 'Risc Financiar', 'Acces Piață (Reach)']),
        datasets: [
            {
                label: 'Afacere Tradițională',
                data: [9, 8, 9, 3], // High cost, high risk, low reach
                backgroundColor: '#9CA3AF', // Gray
                borderRadius: 4
            },
            {
                label: 'Digital Arbitrage',
                data: [2, 1, 2, 10], // Low cost, low risk, high reach
                backgroundColor: '#4F46E5', // Indigo
                borderRadius: 4
            }
        ]
    },
    options: {
        plugins: {
            legend: { position: 'bottom' },
            tooltip: commonTooltipConfig,
            title: { display: true, text: 'Tradițional vs. Digital (Scor Eficiență)' }
        },
        scales: {
            y: { beginAtZero: true, max: 10 }
        }
    }
});

// --- CHART 2: Analysis (Radar) ---
const ctxRadar = document.getElementById('chartRadar').getContext('2d');
new Chart(ctxRadar, {
    type: 'radar',
    data: {
        labels: wrapLabels(['Venit Potențial', 'Competență Tehnică', 'Natură Pasivă', 'Viteză Start']),
        datasets: [
            {
                label: 'AI Agency',
                data: [9, 8, 6, 7],
                borderColor: '#4F46E5', // Indigo
                backgroundColor: 'rgba(79, 70, 229, 0.2)',
            },
            {
                label: 'Etsy Digital',
                data: [7, 4, 9, 8],
                borderColor: '#06B6D4', // Cyan
                backgroundColor: 'rgba(6, 182, 212, 0.2)',
            },
            {
                label: 'Remote Closing',
                data: [8, 3, 2, 9], // High income, low passive
                borderColor: '#F59E0B', // Amber
                backgroundColor: 'rgba(245, 158, 11, 0.2)',
            }
        ]
    },
    options: {
        plugins: {
            legend: { position: 'bottom' },
            tooltip: commonTooltipConfig
        },
        scales: {
            r: {
                angleLines: { color: '#E5E7EB' },
                grid: { color: '#E5E7EB' },
                pointLabels: { font: { size: 12 } },
                suggestedMin: 0,
                suggestedMax: 10
            }
        }
    }
});

// --- CHART 3: Products (Doughnut) ---
const ctxProducts = document.getElementById('chartProducts').getContext('2d');
new Chart(ctxProducts, {
    type: 'doughnut',
    data: {
        labels: wrapLabels(['Template-uri & Organizare', 'E-books & Ghiduri', 'Artă Digitală / Print', 'Cursuri Video']),
        datasets: [{
            data: [45, 25, 20, 10],
            backgroundColor: [
                '#06B6D4', // Cyan
                '#4F46E5', // Indigo
                '#F59E0B', // Amber
                '#10B981'  // Emerald
            ],
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            legend: { position: 'right' },
            tooltip: commonTooltipConfig,
            title: { display: false }
        },
        cutout: '60%'
    }
});

// --- CHART 4: Growth (Line) ---
const ctxGrowth = document.getElementById('chartGrowth').getContext('2d');
new Chart(ctxGrowth, {
    type: 'line',
    data: {
        labels: ['Luna 1', 'Luna 2', 'Luna 3', 'Luna 4', 'Luna 5', 'Luna 6', 'Luna 9', 'Luna 12'],
        datasets: [{
            label: 'Venit Lunar Estimat ($)',
            data: [0, 150, 400, 850, 1500, 2200, 4500, 8000],
            borderColor: '#10B981', // Emerald (Money)
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        plugins: {
            legend: { display: false },
            tooltip: commonTooltipConfig,
            title: { display: true, text: 'Curba de Creștere Exponențială' }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) { return '$' + value; }
                }
            }
        }
    }
});
