import { component$, useVisibleTask$,  } from "@builder.io/qwik";

interface DonutChartProps {
  canvasId: string;
  labels: string[];
  data: number[];
  colors: string[];
  title: string;
}

export default component$<DonutChartProps>(({ canvasId, labels, data, colors, title }) => {

  useVisibleTask$(async () => {
    const { default: Chart } = await import("chart.js/auto");

    const ctx = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!ctx) return;

    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor: colors,
            borderColor: colors.map(() => "#fff"),
            borderWidth: 3,
            hoverOffset: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "70%",
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              font: { size: 10 },
              padding: 10,
              usePointStyle: true,
              pointStyleWidth: 8,
            },
          },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ₹${ctx.parsed}L`,
            },
          },
        },
      },
    });
  });

  return (
    <div class="w-64 flex-shrink-0 bg-white border border-gray-200 flex flex-col">
      <div class="px-3 py-2 border-b border-gray-100 flex items-center gap-2">
        <i class="bi bi-pie-chart text-blue-500 text-sm"></i>
        <h2 class="text-[12px] font-semibold text-gray-600">{title}</h2>
      </div>
      <div class="flex-1 p-2">
        <canvas id={canvasId}></canvas>
      </div>
    </div>
  );
});