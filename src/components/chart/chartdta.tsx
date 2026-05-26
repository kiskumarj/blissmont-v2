export const donutData = {
  canvasId: "donutChart",
  title: "Sales Breakdown",
  labels: ["Revenue", "Expenses", "Profit", "Target"],
  data: [42, 19, 23, 51],
  colors: ["#3b82f6", "#f59e0b", "#8b5cf6", "#10b981"],
};

export const barData = {
  canvasId: "barChart",
  title: "Monthly Sales vs Expenses",
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Sales",
      data: [65, 80, 50, 90, 70, 85, 60, 95, 75, 88, 55, 72],
      backgroundColor: "rgba(59, 130, 246, 0.7)",
      borderColor: "#3b82f6",
    },
    {
      label: "Expenses",
      data: [40, 55, 35, 60, 45, 50, 40, 65, 50, 58, 35, 48],
      backgroundColor: "rgba(245, 158, 11, 0.7)",
      borderColor: "#f59e0b",
    },
  ],
};