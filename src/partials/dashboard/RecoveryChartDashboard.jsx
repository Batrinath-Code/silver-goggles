import React from "react";
import PatientRecoveryChart from "../../charts/PatientRecoveryChart";

function RecoveryChartDashboard() {
    const initialRecoveryData = [
        { timestamp: Date.now() - 864000000, temperature: 40, platelets: 80, hydration: 50 },  // Day 1 (Critical)
        { timestamp: Date.now() - 777600000, temperature: 39.5, platelets: 85, hydration: 55 }, // Day 2
        { timestamp: Date.now() - 691200000, temperature: 39, platelets: 90, hydration: 60 },   // Day 3
        { timestamp: Date.now() - 604800000, temperature: 38.5, platelets: 100, hydration: 65 }, // Day 4
        { timestamp: Date.now() - 518400000, temperature: 38, platelets: 120, hydration: 70 },  // Day 5
        { timestamp: Date.now() - 432000000, temperature: 37.8, platelets: 140, hydration: 75 }, // Day 6
        { timestamp: Date.now() - 345600000, temperature: 37.5, platelets: 160, hydration: 80 }, // Day 7
        { timestamp: Date.now() - 259200000, temperature: 37.2, platelets: 180, hydration: 85 }, // Day 8
        { timestamp: Date.now() - 172800000, temperature: 37, platelets: 200, hydration: 90 },  // Day 9
        { timestamp: Date.now() - 86400000, temperature: 36.8, platelets: 220, hydration: 95 }  // Day 10 (Stable)
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

      <PatientRecoveryChart
        width={800}
        height={400}
        initialData={initialRecoveryData}
      />
    </div>
  );
}

export default RecoveryChartDashboard;
