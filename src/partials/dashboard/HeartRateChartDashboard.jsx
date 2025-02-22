import React from "react";
import HeartRateChart from "../../charts/HeartRateChart";

function HeartRateChartDashboard() {
  const initialHeartRateData = [
    { timestamp: Date.now() - 600000, heartRate: 72 }, // 10 min ago
    { timestamp: Date.now() - 540000, heartRate: 75 }, // 9 min ago
    { timestamp: Date.now() - 480000, heartRate: 78 }, // 8 min ago
    { timestamp: Date.now() - 420000, heartRate: 80 }, // 7 min ago
    { timestamp: Date.now() - 360000, heartRate: 85 }, // 6 min ago
    { timestamp: Date.now() - 300000, heartRate: 88 }, // 5 min ago
    { timestamp: Date.now() - 240000, heartRate: 90 }, // 4 min ago
    { timestamp: Date.now() - 180000, heartRate: 95 }, // 3 min ago
    { timestamp: Date.now() - 120000, heartRate: 100 }, // 2 min ago
    { timestamp: Date.now() - 60000, heartRate: 105 }, // 1 min ago
  ];

  return (
    <div className="col-span-12 w-full mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Heart Rate Monitor
        </h1>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm text-gray-500 mb-1">Average </h3>
            <p className="text-xl font-semibold">{80}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm text-gray-500 mb-1">Min </h3>
            <p className="text-xl font-semibold">{70}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm text-gray-500 mb-1">Max </h3>
            <p className="text-xl font-semibold">{105}</p>
          </div>
        </div>
      </div>

      <HeartRateChart
        width={800}
        height={400}
        initialData={initialHeartRateData}
      />
    </div>
  );
}

export default HeartRateChartDashboard;
