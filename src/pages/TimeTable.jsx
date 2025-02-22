import React, { useEffect, useState } from "react";
import DatePickerWithRange from "../components/Datepicker";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { schedule } from "../data/patientdb";

function updateScheduleStatus(item) {
  const currentTime = new Date(); // Get current time
  const currentDateTime =
    currentTime.getHours() * 60 + currentTime.getMinutes(); // Current time in minutes

  // Parse the start and end time from the "time" field
  const [startTime, endTime] = item.time.split(" - ");
  const [startHour, startMinute] = startTime.split(":");
  const [endHour, endMinute] = endTime.split(":");

  // Convert time to 24-hour format and minutes
  const startTimeInMinutes =
    ((parseInt(startHour) % 12) + (startTime.includes("PM") ? 12 : 0)) * 60 +
    parseInt(startMinute);
  const endTimeInMinutes =
    ((parseInt(endHour) % 12) + (endTime.includes("PM") ? 12 : 0)) * 60 +
    parseInt(endMinute);

  // Check the time and update the status
  if (currentDateTime < startTimeInMinutes) {
    item.status = "Upcoming";
  } else if (
    currentDateTime >= startTimeInMinutes &&
    currentDateTime <= endTimeInMinutes
  ) {
    item.status = "Progress";
  } else {
    item.status = "Completed";
  }

  return item;
}

function TimeTable() {
  const { id } = useParams();
  const numberofID = [17, 19, 20, 18];
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const updatedSchedule = schedule.map((item) => updateScheduleStatus(item));
  useEffect(() => {
    if (!numberofID.includes(parseInt(id))) {
      navigate("/404"); // Redirect to the 404 page if ID is less than 7
    }
  }, [id, navigate]);

  return (
    <div className="flex h-screen  overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-0 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="flex justify-between items-center mb-4   w-full">
                <h3 className="text-2xl  text-gray-800 dark:text-gray-100 font-bold">
                  Smart Room 101 - Marry Queen Schedule
                </h3>
                <h3 className="text-2xl  text-gray-800 dark:text-gray-100 font-bold">
                  Diagnoses : Dengu Fever
                  <br />
                  Date Of Admitted : 22/02/2025
                </h3>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6 ">
              <div className="col-span-12  flex justify-between p-1 sm:p-0 gap-1 sm:gap-x-0  text-xs text-center sm:text-xs lg:text-xl ">
                <div className="w-full overflow-x-auto">
                  <div className="border-b border-green-400 w-fit">
                    <span className="text-sm md:text-xl text-red-500">
                      Select Date :
                    </span>{" "}
                    <div className=" inline-block">
                      <DatePickerWithRange />
                    </div>
                  </div>
                  <table className="w-full bg-white">
                    <thead>
                      <tr className="text-sm md:text-md font-semibold tracking-wide text-center text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                        <th className="px-4 py-3">Time</th>
                        <th className="px-4 py-3"> Activity</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!updatedSchedule ? (
                        <tr>
                          <td colSpan="4" className="text-center">
                            No schedule available
                          </td>
                        </tr>
                      ) : (
                        updatedSchedule.map((item, i) => (
                          <tr key={i * 2} className="text-gray-700">
                            <td className="px-4 py-3 sm:font-normal sm:text-xs md:font-semibold text-black border">
                              {item.time}
                            </td>
                            <td className="px-4 py-3 text-ms font-semibold border">
                              {item.activity}
                            </td>
                            <td className="px-4 py-3 text-xs border">
                              <span
                                className={`px-2 py-1 font-semibold leading-tight ${
                                  item.status === "Progress"
                                    ? "text-yellow-700 bg-yellow-100"
                                    : item.status === "Upcoming"
                                    ? "text-red-700 bg-red-100"
                                    : "text-green-700 bg-green-100"
                                } rounded-sm`}
                              >
                                {item.status}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm border">
                              {item.description}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* <Banner /> */}
      </div>
    </div>
  );
}

export default TimeTable;
