import React from "react";
import RespiratoryRateChart from "../../charts/RespiratoryRateChart";

function RespiratoryDashboard() {
    const initialRespiratoryRateData = [
        { timestamp: Date.now() - 600000, respiratoryRate: 14 }, // 10 min ago
        { timestamp: Date.now() - 540000, respiratoryRate: 15 }, // 9 min ago
        { timestamp: Date.now() - 480000, respiratoryRate: 16 }, // 8 min ago
        { timestamp: Date.now() - 420000, respiratoryRate: 15 }, // 7 min ago
        { timestamp: Date.now() - 360000, respiratoryRate: 17 }, // 6 min ago
        { timestamp: Date.now() - 300000, respiratoryRate: 18 }, // 5 min ago
        { timestamp: Date.now() - 240000, respiratoryRate: 19 }, // 4 min ago
        { timestamp: Date.now() - 180000, respiratoryRate: 20 }, // 3 min ago
        { timestamp: Date.now() - 120000, respiratoryRate: 21 }, // 2 min ago
        { timestamp: Date.now() - 60000, respiratoryRate: 22 } // 1 min ago
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
            <p className="text-xl font-semibold">{16}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm text-gray-500 mb-1">Min </h3>
            <p className="text-xl font-semibold">{14}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm text-gray-500 mb-1">Max </h3>
            <p className="text-xl font-semibold">{22}</p>
          </div>
        </div>
      </div>

      <RespiratoryRateChart
        width={800}
        height={400}
        initialData={initialRespiratoryRateData}
      />
    </div>
  );
}

export default RespiratoryDashboard;
