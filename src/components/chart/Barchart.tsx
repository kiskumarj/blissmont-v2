import { component$, useVisibleTask$ } from "@builder.io/qwik";

interface BarDataset {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
}

interface BarChartProps {
  canvasId: string;
  labels: string[];
  datasets: BarDataset[];
  title: string;
}

export default component$<BarChartProps>(({ canvasId, labels, datasets, title }) => {

  useVisibleTask$(async () => {
    const { default: Chart } = await import("chart.js/auto");

    const ctx = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!ctx) return;

    new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: datasets.map((ds) => ({
          ...ds,
          borderWidth: 1,
          borderRadius: 4,
          borderSkipped: false,
        })),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            labels: {
              font: { size: 10 },
              padding: 10,
              usePointStyle: true,
              pointStyleWidth: 8,
            },
          },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ₹${ctx.parsed.y}L`,
            },
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { font: { size: 10 }, color: "#9ca3af" },
          },
          y: {
            grid: { color: "#f3f4f6" },
            ticks: {
              font: { size: 10 },
              color: "#9ca3af",
              callback: (val) => `₹${val}L`,
            },
            beginAtZero: true,
          },
        },
      },
    });
  });

  return (
    <div class="flex-1 bg-white border border-gray-200 flex flex-col">
      <div class="px-3 py-2 border-b border-gray-100 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <i class="bi bi-bar-chart-line text-blue-500 text-sm"></i>
          <h2 class="text-[12px] font-semibold text-gray-600">{title}</h2>
        </div>
        <div class="flex gap-2">
          <span class="text-[10px] text-blue-500 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">2026</span>
          <span class="text-[10px] text-gray-400 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded">Monthly</span>
        </div>
      </div>
      <div class="flex-1 p-3">
        <canvas id={canvasId}></canvas>
      </div>
    </div>
  );
});