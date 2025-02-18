import React, { useRef, useEffect, useState } from 'react';
import { Chart, LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-moment';

// Register required Chart.js components
Chart.register(LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip, Legend);

function BloodPressureChart({
  width,
  height,
  initialData = [], // Array of {timestamp, systolic, diastolic}
  onNewReading // Optional callback for new readings
}) {
  // State for managing chart instance and blood pressure values
  const [chart, setChart] = useState(null);
  const canvas = useRef(null);
  const systolicRef = useRef(null);
  const diastolicRef = useRef(null);

  // Initialize data structure with any provided initial data
  const [bpData, setBpData] = useState({
    labels: initialData.map(reading => new Date(reading.timestamp)),
    datasets: [
      {
        label: 'Systolic',
        data: initialData.map(reading => reading.systolic),
        borderColor: '#e11d48', // Red for systolic
        backgroundColor: 'rgba(225, 29, 72, 0.1)',
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.2
      },
      {
        label: 'Diastolic',
        data: initialData.map(reading => reading.diastolic),
        borderColor: '#06b6d4', // Cyan for diastolic
        backgroundColor: 'rgba(6, 182, 212, 0.1)',
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.2
      }
    ]
  });

  // Function to add new blood pressure reading
  const addReading = (systolic, diastolic, timestamp = new Date()) => {
    setBpData(prevData => {
      const newLabels = [...prevData.labels, timestamp];
      const newSystolic = [...prevData.datasets[0].data, systolic];
      const newDiastolic = [...prevData.datasets[1].data, diastolic];

      // Keep only last 10 readings
      if (newLabels.length > 10) {
        newLabels.shift();
        newSystolic.shift();
        newDiastolic.shift();
      }

      return {
        labels: newLabels,
        datasets: [
          {
            ...prevData.datasets[0],
            data: newSystolic
          },
          {
            ...prevData.datasets[1],
            data: newDiastolic
          }
        ]
      };
    });
  };

  // Initialize chart
  useEffect(() => {
    const ctx = canvas.current;
    const newChart = new Chart(ctx, {
      type: 'line',
      data: bpData,
      options: {
        scales: {
          y: {
            suggestedMin: 40,
            suggestedMax: 200,
            grid: {
              color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
              callback: value => `${value} mmHg`
            }
          },
          x: {
            type: 'time',
            time: {
              unit: 'minute',
              displayFormats: {
                minute: 'HH:mm'
              }
            },
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top'
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: {
              label: (context) => {
                return `${context.dataset.label}: ${context.parsed.y} mmHg`;
              }
            }
          }
        },
        interaction: {
          intersect: false,
          mode: 'nearest'
        },
        maintainAspectRatio: false,
        animation: {
          duration: 750
        }
      }
    });

    setChart(newChart);
    return () => newChart.destroy();
  }, []);

  // Update chart when data changes
  useEffect(() => {
    if (chart) {
      chart.data = bpData;
      chart.update('none');
    }
  }, [bpData, chart]);

  // Update display values
  useEffect(() => {
    if (systolicRef.current && diastolicRef.current) {
      const lastSystolic = bpData.datasets[0].data[bpData.datasets[0].data.length - 1];
      const lastDiastolic = bpData.datasets[1].data[bpData.datasets[1].data.length - 1];
      
      systolicRef.current.textContent = lastSystolic || '--';
      diastolicRef.current.textContent = lastDiastolic || '--';

      // Update text colors based on blood pressure ranges
      const updateValueStyle = (value, element) => {
        if (value >= 180 || value <= 60) {
          element.className = 'text-2xl font-bold text-red-600';
        } else if (value >= 140 || value <= 80) {
          element.className = 'text-2xl font-bold text-yellow-600';
        } else {
          element.className = 'text-2xl font-bold text-green-600';
        }
      };

      updateValueStyle(lastSystolic, systolicRef.current);
      updateValueStyle(lastDiastolic, diastolicRef.current);
    }
  }, [bpData]);

  return (
    <div className="flex flex-col w-full bg-white rounded-xl shadow-lg">
      <div className="px-5 py-3 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold text-gray-800">Blood Pressure Monitor</h2>
        <div className="flex space-x-6">
          <div>
            <span className="text-sm text-gray-500">Systolic</span>
            <div ref={systolicRef} className="text-2xl font-bold text-green-600">
              --
            </div>
          </div>
          <div>
            <span className="text-sm text-gray-500">Diastolic</span>
            <div ref={diastolicRef} className="text-2xl font-bold text-green-600">
              --
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
    </div>
  );
}

export default BloodPressureChart;