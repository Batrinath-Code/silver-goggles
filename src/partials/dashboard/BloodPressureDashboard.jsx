import React, { useState, useEffect } from 'react';
import BloodPressureChart from '../../charts/BloodPressureChart';

// Generate sample historical data for the last hour
const generateHistoricalData = () => {
  const data = [];
  const now = new Date();
  
  for (let i = 0; i < 10; i++) {
    // Generate readings 6 minutes apart
    const timestamp = new Date(now - (10 - i) * 6 * 60 * 1000);
    
    // Generate realistic blood pressure values
    // Systolic: normally between 90-140
    // Diastolic: normally between 60-90
    const systolic = Math.floor(Math.random() * (140 - 90) + 90);
    const diastolic = Math.floor(Math.random() * (90 - 60) + 60);
    
    data.push({ timestamp, systolic, diastolic });
  }
  
  return data;
};

function BloodPressureDashboard() {
  const [readings, setReadings] = useState(generateHistoricalData());
  
  // Simulate new readings every 6 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      const systolic = Math.floor(Math.random() * (140 - 90) + 90);
      const diastolic = Math.floor(Math.random() * (90 - 60) + 60);
      const timestamp = new Date();
      
      const newReading = { timestamp, systolic, diastolic };
      setReadings(prev => [...prev.slice(1), newReading]);
    }, 6000); // Shortened to 6 seconds for demo purposes
    
    return () => clearInterval(interval);
  }, []);

  // Calculate statistics
  const getStats = () => {
    const systolicValues = readings.map(r => r.systolic);
    const diastolicValues = readings.map(r => r.diastolic);
    
    return {
      avgSystolic: Math.round(systolicValues.reduce((a, b) => a + b) / systolicValues.length),
      avgDiastolic: Math.round(diastolicValues.reduce((a, b) => a + b) / diastolicValues.length),
      maxSystolic: Math.max(...systolicValues),
      maxDiastolic: Math.max(...diastolicValues),
      minSystolic: Math.min(...systolicValues),
      minDiastolic: Math.min(...diastolicValues)
    };
  };

  const stats = getStats();

  return (
    <div className="col-span-12 w-full mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Blood Pressure Monitor</h1>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm text-gray-500 mb-1">Average BP</h3>
            <p className="text-xl font-semibold">{stats.avgSystolic}/{stats.avgDiastolic}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm text-gray-500 mb-1">Highest BP</h3>
            <p className="text-xl font-semibold">{stats.maxSystolic}/{stats.maxDiastolic}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm text-gray-500 mb-1">Lowest BP</h3>
            <p className="text-xl font-semibold">{stats.minSystolic}/{stats.minDiastolic}</p>
          </div>
        </div>
      </div>
      
      <BloodPressureChart
        width={800}
        height={400}
        initialData={readings}
        onNewReading={reading => {
          console.log('New reading:', reading);
        }}
      />
    </div>
  );
}

export default BloodPressureDashboard;