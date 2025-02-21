import React, { useRef, useEffect } from "react";
import {
  Chart,
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
} from "chart.js";
import "chartjs-adapter-moment";

Chart.register(
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend
);

const vitalSignsConfig = {
  heartRate: {
    label: "Heart Rate",
    unit: "BPM",
    color: "#ef4444",
    ranges: {
      low: 60,
      high: 100,
      critical_low: 50,
      critical_high: 120,
    },
  },
  temperature: {
    label: "Temperature",
    unit: "°F",
    color: "#f97316",
    ranges: {
      low: 97,
      high: 99,
      critical_low: 95,
      critical_high: 103,
    },
  },
  respiratoryRate: {
    label: "Respiratory Rate",
    unit: "breaths/min",
    color: "#3b82f6",
    ranges: {
      low: 12,
      high: 20,
      critical_low: 8,
      critical_high: 24,
    },
  },
  recovery: {
    label: "Temperature Recovery",
    unit: "°F",
    color: "#3b82f6",
    ranges: {
      low: 97,
      high: 99,
      critical_low: 95,
      critical_high: 103,
    },
  }
};

function VitalSignsChart({ type, width, height, data }) {
  const canvas = useRef(null);
  const valueRef = useRef(null);
  const config = vitalSignsConfig[type];
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!canvas.current) return;

    const ctx = canvas.current.getContext("2d");

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        tooltip: {
          mode: "index",
          intersect: false,
          callbacks: {
            label: (context) => `${context.dataset.label}: ${context.parsed.y} ${config.unit}`,
          },
        },
      },
      interaction: {
        intersect: false,
        mode: "nearest",
      },
      animation: {
        duration: 750,
      },
    };

    // Special configuration for recovery chart
    if (type === "recovery") {
      chartOptions.scales = {
        y: {
          suggestedMin: 97,
          suggestedMax: 104,
          grid: {
            color: "rgba(0, 0, 0, 0.1)",
          },
          ticks: {
            callback: (value) => `${value} ${config.unit}`,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      };
    } else {
      chartOptions.scales = {
        y: {
          suggestedMin: config.ranges.critical_low - 10,
          suggestedMax: config.ranges.critical_high + 10,
          grid: {
            color: "rgba(0, 0, 0, 0.1)",
          },
          ticks: {
            callback: (value) => `${value} ${config.unit}`,
          },
        },
        x: {
          type: "time",
          time: {
            unit: "minute",
            displayFormats: {
              minute: "HH:mm",
            },
          },
          grid: {
            display: false,
          },
        },
      };
    }

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: data,
      options: chartOptions,
    });
  }, [data, config, type]);

  useEffect(() => {
    if (valueRef.current) {
      const lastValue = data.datasets[0].data[data.datasets[0].data.length - 1];
      valueRef.current.textContent = lastValue ? `${lastValue} ${config.unit}` : "--";

      const status = getValueStatus(lastValue);
      valueRef.current.className = `text-2xl font-bold ${
        status === "critical"
          ? "text-red-600"
          : status === "warning"
          ? "text-yellow-600"
          : "text-green-600"
      }`;
    }
  }, [data, config]);

  const getValueStatus = (value) => {
    if (value <= config.ranges.critical_low || value >= config.ranges.critical_high) {
      return "critical";
    } else if (value <= config.ranges.low || value >= config.ranges.high) {
      return "warning";
    }
    return "normal";
  };

  return (
    <div className="flex flex-col w-full bg-white rounded-xl shadow-lg">
      <div className="px-5 py-3 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold text-gray-800">{config.label}</h2>
        <div>
          <span className="text-sm text-gray-500">Current Value</span>
          <div ref={valueRef} className="text-2xl font-bold text-green-600">
            --
          </div>
        </div>
      </div>
      <div className="p-4">
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
    </div>
  );
}

export default VitalSignsChart;