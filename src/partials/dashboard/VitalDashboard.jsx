import React, { useState, useEffect } from "react";
import VitalSignsChart from "../../charts/VitalSignsChart";

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
};

function VitalDashboard({ chartData, realTimeValue,label }) {
  const [heartRateData, setHeartRateData] = useState(chartData);

  console.log(chartData ,realTimeValue);
  
  
  // Calculate statistics for a given dataset
  const calculateStats = (data) => {
    const values = data.map((d) => d.value);
    return {
      current: values[values.length - 1],
      average:
        Math.round((values.reduce((a, b) => a + b, 0) / values.length) * 10) /
        10,
      max: Math.max(...values),
      min: Math.min(...values),
    };
  };

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newHR = realTimeValue;
      setHeartRateData((prev) => [
        ...prev.slice(1), // Keep only the last 9 entries
        { timestamp: new Date(), value: newHR },
      ]);
    }, 6000); // Update every 6 seconds for demo purposes

    return () => clearInterval(interval);
  }, [realTimeValue]);

  const hrStats = calculateStats(heartRateData);

  // Format data for the chart
  const formattedChartData = {
    labels: heartRateData.map((reading) => new Date(reading.timestamp)),
    datasets: [
      {
        label: label,
        data: heartRateData.map((reading) => reading.value),
        borderColor: vitalSignsConfig.heartRate.color,
        backgroundColor: `${vitalSignsConfig.heartRate.color}20`,
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.2,
        fill: true,
      },
    ],
  };

  return (
    <div className="col-span-12 w-full mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Heart Rate Monitor
        </h1>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm text-gray-500 mb-1">Average </h3>
            <p className="text-xl font-semibold">{hrStats.average}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm text-gray-500 mb-1">Min </h3>
            <p className="text-xl font-semibold">{hrStats.min}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm text-gray-500 mb-1">Max </h3>
            <p className="text-xl font-semibold">{hrStats.max}</p>
          </div>
        </div>
      </div>

      <VitalSignsChart
        type="heartRate"
        width={800}
        height={300}
        data={formattedChartData}
      />
    </div>
  );
}

export default VitalDashboard;