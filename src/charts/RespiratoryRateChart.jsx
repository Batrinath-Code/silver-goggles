import React, { useRef, useEffect, useState } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, TimeScale, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-moment';

// Register Chart.js components
Chart.register(LineController, LineElement, PointElement, LinearScale, TimeScale, Tooltip, Legend);

function RespiratoryRateChart({ width, height, initialData = [] }) {
  const [chart, setChart] = useState(null);
  const canvas = useRef(null);
  const respRateRef = useRef(null);

  const [respData, setRespData] = useState({
    labels: initialData.map(reading => new Date(reading.timestamp)),
    datasets: [
      {
        label: 'Respiratory Rate (bpm)',
        data: initialData.map(reading => reading.respiratoryRate),
        borderColor: '#0ea5e9', // Blue
        backgroundColor: 'rgba(14, 165, 233, 0.1)',
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.2
      }
    ]
  });

  // Function to add new respiratory rate reading
  const addReading = (respiratoryRate, timestamp = new Date()) => {
    setRespData(prevData => {
      const newLabels = [...prevData.labels, timestamp];
      const newValues = [...prevData.datasets[0].data, respiratoryRate];

      if (newLabels.length > 10) {
        newLabels.shift();
        newValues.shift();
      }

      return {
        labels: newLabels,
        datasets: [{ ...prevData.datasets[0], data: newValues }]
      };
    });
  };

  // Initialize chart
  useEffect(() => {
    const ctx = canvas.current;
    const newChart = new Chart(ctx, {
      type: 'line',
      data: respData,
      options: {
        scales: {
          y: {
            suggestedMin: 8,
            suggestedMax: 30,
            grid: { color: 'rgba(0, 0, 0, 0.1)' },
            ticks: { callback: value => `${value} bpm` }
          },
          x: {
            type: 'time',
            time: { unit: 'minute', displayFormats: { minute: 'HH:mm' } },
            grid: { display: false }
          }
        },
        plugins: {
          legend: { display: true, position: 'top' },
          tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: { label: context => `Respiratory Rate: ${context.parsed.y} bpm` }
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

  // Update chart when data changes
  useEffect(() => {
    if (chart) {
      chart.data = respData;
      chart.update('none');
    }
  }, [respData, chart]);

  // Update displayed respiratory rate
  useEffect(() => {
    if (respRateRef.current) {
      const lastRate = respData.datasets[0].data[respData.datasets[0].data.length - 1] || '--';
      respRateRef.current.textContent = lastRate;

      // Set color based on respiratory rate range
      const updateColor = (value) => {
        if (value < 12) {
          respRateRef.current.className = 'text-2xl font-bold text-blue-600';
        } else if (value > 20) {
          respRateRef.current.className = 'text-2xl font-bold text-red-600';
        } else {
          respRateRef.current.className = 'text-2xl font-bold text-green-600';
        }
      };

      updateColor(lastRate);
    }
  }, [respData]);

  return (
    <div className="flex flex-col w-full bg-white rounded-xl shadow-lg">
      <div className="px-5 py-3 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold text-gray-800">Respiratory Rate Monitor</h2>
        <div>
          <span className="text-sm text-gray-500">Current Respiratory Rate</span>
          <div ref={respRateRef} className="text-2xl font-bold text-green-600">--</div>
        </div>
      </div>
      <div className="p-4">
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
    </div>
  );
}

export default RespiratoryRateChart;
