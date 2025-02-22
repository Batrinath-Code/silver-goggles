import React, { useRef, useEffect, useState } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, TimeScale, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-moment';

Chart.register(LineController, LineElement, PointElement, LinearScale, TimeScale, Tooltip, Legend);

function PatientRecoveryChart({ width, height, initialData = [] }) {
  const canvas = useRef(null);
  const tempRef = useRef(null);
  const plateletsRef = useRef(null);
  const hydrationRef = useRef(null);
  const [chart, setChart] = useState(null);

  const [recoveryData, setRecoveryData] = useState({
    labels: initialData.map(reading => new Date(reading.timestamp)),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: initialData.map(reading => reading.temperature),
        borderColor: '#e11d48', // Red for fever
        backgroundColor: 'rgba(225, 29, 72, 0.1)',
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.2
      },
      {
        label: 'Platelet Count (x1000/mm³)',
        data: initialData.map(reading => reading.platelets),
        borderColor: '#facc15', // Yellow for platelets
        backgroundColor: 'rgba(250, 204, 21, 0.1)',
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.2
      },
      {
        label: 'Hydration Level (%)',
        data: initialData.map(reading => reading.hydration),
        borderColor: '#22c55e', // Green for hydration
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.2
      }
    ]
  });

  useEffect(() => {
    const ctx = canvas.current;
    const newChart = new Chart(ctx, {
      type: 'line',
      data: recoveryData,
      options: {
        scales: {
          y: {
            suggestedMin: 30,
            suggestedMax: 105,
            grid: { color: 'rgba(0, 0, 0, 0.1)' },
            ticks: { callback: value => `${value}` }
          },
          x: {
            type: 'time',
            time: { unit: 'day', displayFormats: { day: 'MMM DD' } },
            grid: { display: false }
          }
        },
        plugins: {
          legend: { display: true, position: 'top' },
          tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: {
              label: context => `${context.dataset.label}: ${context.parsed.y}`
            }
          }
        },
        interaction: { intersect: false, mode: 'nearest' },
        maintainAspectRatio: false,
        animation: { duration: 750 }
      }
    });

    setChart(newChart);
    return () => newChart.destroy();
  }, []);

  useEffect(() => {
    if (chart) {
      chart.data = recoveryData;
      chart.update('none');
    }
  }, [recoveryData, chart]);

  useEffect(() => {
    if (tempRef.current && plateletsRef.current && hydrationRef.current) {
      const lastReading = recoveryData.datasets[0].data.length - 1;
      const lastTemp = recoveryData.datasets[0].data[lastReading] || '--';
      const lastPlatelets = recoveryData.datasets[1].data[lastReading] || '--';
      const lastHydration = recoveryData.datasets[2].data[lastReading] || '--';

      tempRef.current.textContent = `${lastTemp}°C`;
      plateletsRef.current.textContent = `${lastPlatelets}K`;
      hydrationRef.current.textContent = `${lastHydration}%`;

      const updateStatus = (value, element, low, high) => {
        if (value < low || value > high) {
          element.className = 'text-2xl font-bold text-red-600';
        } else if (value < high - 2 && value > low + 2) {
          element.className = 'text-2xl font-bold text-green-600';
        } else {
          element.className = 'text-2xl font-bold text-yellow-600';
        }
      };

      updateStatus(lastTemp, tempRef.current, 36.5, 37.5);
      updateStatus(lastPlatelets, plateletsRef.current, 150, 400);
      updateStatus(lastHydration, hydrationRef.current, 50, 100);
    }
  }, [recoveryData]);

  return (
    <div className="flex flex-col w-full bg-white rounded-xl shadow-lg">
      <div className="px-5 py-3 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold text-gray-800">Dengue Fever Recovery</h2>
        <div className="flex space-x-6">
          <div>
            <span className="text-sm text-gray-500">Temperature</span>
            <div ref={tempRef} className="text-2xl font-bold text-green-600">--</div>
          </div>
          <div>
            <span className="text-sm text-gray-500">Platelets</span>
            <div ref={plateletsRef} className="text-2xl font-bold text-green-600">--</div>
          </div>
          <div>
            <span className="text-sm text-gray-500">Hydration</span>
            <div ref={hydrationRef} className="text-2xl font-bold text-green-600">--</div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
    </div>
  );
}

export default PatientRecoveryChart;
