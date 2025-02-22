import React, { useRef, useEffect, useState } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, TimeScale, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-moment';

// Register Chart.js components
Chart.register(LineController, LineElement, PointElement, LinearScale, TimeScale, Tooltip, Legend);

function TemperatureChart({ width, height, initialData = [] }) {
  const [chart, setChart] = useState(null);
  const canvas = useRef(null);
  const temperatureRef = useRef(null);

  const [tempData, setTempData] = useState({
    labels: initialData.map(reading => new Date(reading.timestamp)),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: initialData.map(reading => reading.temperature),
        borderColor: '#f97316', // Orange for temperature
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.2
      }
    ]
  });

  // Function to add new temperature reading
  const addReading = (temperature, timestamp = new Date()) => {
    setTempData(prevData => {
      const newLabels = [...prevData.labels, timestamp];
      const newValues = [...prevData.datasets[0].data, temperature];

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
      data: tempData,
      options: {
        scales: {
          y: {
            suggestedMin: 30,
            suggestedMax: 45,
            grid: { color: 'rgba(0, 0, 0, 0.1)' },
            ticks: { callback: value => `${value} °C` }
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
            callbacks: { label: context => `Temperature: ${context.parsed.y} °C` }
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
      chart.data = tempData;
      chart.update('none');
    }
  }, [tempData, chart]);

  // Update displayed temperature
  useEffect(() => {
    if (temperatureRef.current) {
      const lastTemp = tempData.datasets[0].data[tempData.datasets[0].data.length - 1] || '--';
      temperatureRef.current.textContent = lastTemp;

      // Set color based on temperature range
      const updateColor = (value) => {
        if (value < 35) {
          temperatureRef.current.className = 'text-2xl font-bold text-blue-600';
        } else if (value > 38) {
          temperatureRef.current.className = 'text-2xl font-bold text-red-600';
        } else {
          temperatureRef.current.className = 'text-2xl font-bold text-green-600';
        }
      };

      updateColor(lastTemp);
    }
  }, [tempData]);

  return (
    <div className="flex flex-col w-full bg-white rounded-xl shadow-lg">
      <div className="px-5 py-3 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold text-gray-800">Temperature Monitor</h2>
        <div>
          <span className="text-sm text-gray-500">Current Temperature</span>
          <div ref={temperatureRef} className="text-2xl font-bold text-green-600">--</div>
        </div>
      </div>
      <div className="p-4">
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
    </div>
  );
}

export default TemperatureChart;
