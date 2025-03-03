import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

import { se } from "date-fns/locale";
import BloodPressureDashboard from "../partials/dashboard/BloodPressureDashboard";
import { patientData } from "../data/patientdb";
import HeartRateChartDashboard from "../partials/dashboard/HeartRateChartDashboard";
import TemperatureDashboard from "../partials/dashboard/TemperatureDashboard";
import RespiratoryDashboard from "../partials/dashboard/RespiratoryDashboard";
import RecoveryChartDashboard from "../partials/dashboard/RecoveryChartDashboard";


function Dashboard({ curentValue }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const numberofID = [17, 19, 20, 18];

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [selectedChart, setSelectedChart] = useState("bloodPressure");

 

  useEffect(() => {
    if (!numberofID.includes(parseInt(id))) {
      navigate("/404"); // Redirect to the 404 page if ID is less than 7
    }
  }, [id, navigate]);

  const patient = patientData.find((patient) => patient.id === parseInt(id));
  return (
    <div className="flex h-screen  overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        profile={patient}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="flex justify-between items-center mb-4  w-full">
                <h3 className="text-2xl md:text-2xl text-gray-800 dark:text-gray-100 font-bold">
                  Smart Room 101 - Marry Queen Schedule
                </h3>
                <h3 className="text-2xl md:text-2xl text-gray-800 dark:text-gray-100 font-bold">
                  Diagnoses : Dengu Fever
                  <br />
                  Date Of Admitted : 22/02/2025
                </h3>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"></div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6 ">
              <div className=" col-span-12 h-20 flex p-1 gap-1 text-xs text-center sm:text-xs lg:text-xl ">
                <div
                  className=" flex w-[25%]  text-white bg-purple-500 rounded-xl dark:bg-gray-800 shadow-xs justify-center items-center"
                  onClick={() => setSelectedChart("bloodPressure")}
                >
                  Current Blood Pressure
                </div>
                <div
                  className=" flex w-[25%]  text-white bg-red-500 rounded-xl dark:bg-gray-800 shadow-xs justify-center items-center"
                  onClick={() => setSelectedChart("heartRate")}
                >
                  Current HeartRate
                </div>
                <div
                  className=" flex w-[25%]  text-white bg-yellow-500 rounded-xl dark:bg-gray-800 shadow-xs justify-center items-center"
                  onClick={() => setSelectedChart("temperature")}
                >
                  Current Temperature
                </div>
                <div
                  className=" flex w-[25%]  text-white bg-blue-500 rounded-xl dark:bg-gray-800 shadow-xs justify-center items-center"
                  onClick={() => setSelectedChart("respiratoryRate")}
                >
                  Current Respiratory
                </div>
                <div
                  className=" flex w-[25%]  text-white bg-emerald-500 rounded-xl dark:bg-gray-800 shadow-xs justify-center items-center"
                  onClick={() => setSelectedChart("patientrecovery")}
                >
                  Patient Recovery
                </div>
              </div>

              {selectedChart === "bloodPressure" && <BloodPressureDashboard />}
              {selectedChart === "heartRate" && <HeartRateChartDashboard />}
              {selectedChart === "temperature" && <TemperatureDashboard />}
              {selectedChart === "respiratoryRate" && <RespiratoryDashboard />}
              {selectedChart === "patientrecovery" && <RecoveryChartDashboard />}
            </div>
          </div>
        </main>

        {/* <Banner /> */}
      </div>
    </div>
  );
}

export default Dashboard;
