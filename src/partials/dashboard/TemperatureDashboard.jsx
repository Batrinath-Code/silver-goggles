import React from "react";
import TemperatureChart from "../../charts/TemperatureChart";

function TemperatureDashboard() {
    const initialTemperatureData = [
        { timestamp: Date.now() - 600000, temperature: 36.5 }, // 10 min ago
        { timestamp: Date.now() - 540000, temperature: 36.7 }, // 9 min ago
        { timestamp: Date.now() - 480000, temperature: 36.8 }, // 8 min ago
        { timestamp: Date.now() - 420000, temperature: 37.0 }, // 7 min ago
        { timestamp: Date.now() - 360000, temperature: 37.2 }, // 6 min ago
        { timestamp: Date.now() - 300000, temperature: 37.5 }, // 5 min ago
        { timestamp: Date.now() - 240000, temperature: 37.8 }, // 4 min ago
        { timestamp: Date.now() - 180000, temperature: 38.0 }, // 3 min ago
        { timestamp: Date.now() - 120000, temperature: 38.2 }, // 2 min ago
        { timestamp: Date.now() - 60000, temperature: 38.5 } // 1 min ago
      ];
      

  return (
    <div className="col-span-12 w-full mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Temperature Monitor
        </h1>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm text-gray-500 mb-1">Average </h3>
            <p className="text-xl font-semibold">{37.5}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm text-gray-500 mb-1">Min </h3>
            <p className="text-xl font-semibold">{36.5}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm text-gray-500 mb-1">Max </h3>
            <p className="text-xl font-semibold">{38.5}</p>
          </div>
        </div>
      </div>

      <TemperatureChart
        width={800}
        height={400}
        initialData={initialTemperatureData}
      />
    </div>
  );
}

export default TemperatureDashboard;
