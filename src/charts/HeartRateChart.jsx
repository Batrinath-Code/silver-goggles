import React, { useRef, useEffect, useState } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, TimeScale, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-moment';

// Register required Chart.js components
Chart.register(LineController, LineElement, PointElement, LinearScale, TimeScale, Tooltip, Legend);

function HeartRateChart({ width, height, initialData = [] }) {
  const [chart, setChart] = useState(null);
  const canvas = useRef(null);
  const heartRateRef = useRef(null);

  const [hrData, setHrData] = useState({
    labels: initialData.map(reading => new Date(reading.timestamp)),
    datasets: [
      {
        label: 'Heart Rate',
        data: initialData.map(reading => reading.heartRate),
        borderColor: '#ef4444', // Red for heart rate
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.2
      }
    ]
  });

  // Function to add new heart rate reading
  const addReading = (heartRate, timestamp = new Date()) => {
    setHrData(prevData => {
      const newLabels = [...prevData.labels, timestamp];
      const newValues = [...prevData.datasets[0].data, heartRate];

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
      data: hrData,
      options: {
        scales: {
          y: {
            suggestedMin: 40,
            suggestedMax: 180,
            grid: { color: 'rgba(0, 0, 0, 0.1)' },
            ticks: { callback: value => `${value} BPM` }
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
            callbacks: { label: context => `Heart Rate: ${context.parsed.y} BPM` }
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
      chart.data = hrData;
      chart.update('none');
    }
  }, [hrData, chart]);

  // Update displayed heart rate
  useEffect(() => {
    if (heartRateRef.current) {
      const lastHeartRate = hrData.datasets[0].data[hrData.datasets[0].data.length - 1] || '--';
      heartRateRef.current.textContent = lastHeartRate;

      // Set color based on heart rate range
      const updateColor = (value) => {
        if (value >= 120 || value <= 50) {
          heartRateRef.current.className = 'text-2xl font-bold text-red-600';
        } else if (value >= 100) {
          heartRateRef.current.className = 'text-2xl font-bold text-yellow-600';
        } else {
          heartRateRef.current.className = 'text-2xl font-bold text-green-600';
        }
      };

      updateColor(lastHeartRate);
    }
  }, [hrData]);

  return (
    <div className="flex flex-col w-full bg-white rounded-xl shadow-lg">
      <div className="px-5 py-3 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold text-gray-800">Heart Rate Monitor</h2>
        <div>
          <span className="text-sm text-gray-500">Current BPM</span>
          <div ref={heartRateRef} className="text-2xl font-bold text-green-600">--</div>
        </div>
      </div>
      <div className="p-4">
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
    </div>
  );
}

export default HeartRateChart;
