// DoughnutWithConnectors.jsx
import React from "react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// Custom plugin: gambar connector lines & labels di luar doughnut
const connectorPlugin = {
    id: "connectorPlugin",
    afterDraw: (chart) => {
        const width = window.innerWidth;
        let fontSize, labelFontSize, lineLen, offset;

        if (width < 640) { // mobile (sm)
            fontSize = 17;
            labelFontSize = 12;
            lineLen = 0;
            offset = 10;
        } else if (width < 1024) { // tablet (md)
            fontSize = 20;
            labelFontSize = 13;
            lineLen = 18;
            offset = 35;
        } else { // desktop
            fontSize = 25;
            labelFontSize = 15;
            lineLen = 24;
            offset = 40;
        }

        const { ctx, chartArea: area } = chart;
        if (!chart._metasets && !chart.getDatasetMeta) return;
        const meta = chart.getDatasetMeta(0);
        const dataset = chart.data.datasets[0];
        if (!meta || !meta.data) return;

        ctx.save();
        ctx.font = "12px Arial";
        ctx.textBaseline = "middle";
        ctx.strokeStyle = "#666";
        ctx.fillStyle = "#222";
        ctx.lineWidth = 1;

        const centerX = (area.left + area.right) / 2;
        const centerY = (area.top + area.bottom) / 2;

        meta.data.forEach((arc, i) => {
            const model = arc; // element
            const startAngle = model.startAngle;
            const endAngle = model.endAngle;
            const angle = (startAngle + endAngle) / 2;
            const outerRadius = model.outerRadius;
            const innerRadius = model.innerRadius;

            // titik di pinggir arc
            const sx = centerX + Math.cos(angle) * (outerRadius);
            const sy = centerY + Math.sin(angle) * (outerRadius);

            // titik break (sedikit menjauh)
            const breakDist = 18;
            const bx = centerX + Math.cos(angle) * (outerRadius + breakDist);
            const by = centerY + Math.sin(angle) * (outerRadius + breakDist);

            const isRight = Math.cos(angle) >= 0;
            const labelPadding = 8;

            const hx = isRight ? offset + bx + lineLen : bx - offset - lineLen;
            const hy = by;

            // gambar connector (arc edge -> break -> horizontal)
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(bx, by);
            ctx.lineTo(hx, hy);
            ctx.stroke();

            const value = dataset.data[i];
            const total = dataset.data.reduce((a, b) => a + b, 0);
            const percent = ((value / total) * 100).toFixed(0) + "%";


            // label text (nama + value) -- adjust posisi sesuai sisi
            const label = `${chart.data.labels[i]}`;
            const percentColor = dataset.backgroundColor[i];
            const textX = isRight ? hx + labelPadding : hx - labelPadding;
            const align = isRight ? "left" : "right";
            ctx.textAlign = align;

            ctx.font = `bold ${fontSize}px Inter`;
            ctx.fillStyle = percentColor;
            ctx.fillText(percent, textX, hy - 10);

            ctx.font = `${labelFontSize}px Inter`;
            ctx.fillStyle = "#000000"
            ctx.fillText(label, textX, hy + 10);
        });

        ctx.restore();
    },
};

export default function BankChart({ colors }) {
    const data = {
        labels: ["BRI", "Arta Graha", "BTN", "Mandiri", "KEB Hana Bank"],
        datasets: [
            {
                data: [30, 25, 20, 15, 10],
                backgroundColor: colors || [
                    "#4A3764",
                    "#1FFFE1",
                    "#51C4E9",
                    "#146C94",
                    "#6150C1",
                ],
                hoverOffset: 8,
                borderWidth: 4,
                borderColor: "#fff",
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
            },
        },
        cutout: "60%",
        layout: {
            padding: {
                top: 45,
                bottom: 20
            }
        }
    };

    return (
        <div className="w-full h-[220px] sm:h-[280px] md:h-[360px] relative">
            <Doughnut data={data} options={options} plugins={[connectorPlugin]} />
        </div>
    );
}
