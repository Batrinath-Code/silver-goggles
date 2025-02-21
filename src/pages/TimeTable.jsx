import React from "react";
import DateSelect from "../components/Datepicker";
function TimeTable() {
    
  return (
    <section class="container mx-auto p-6 font-mono">
       
      <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">

        <div class="w-full overflow-x-auto">
        <DateSelect />
          <table class="w-full">
            <thead>
              <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th class="px-4 py-3">Time</th>
                <th class="px-4 py-3"> Activity</th>
                <th class="px-4 py-3">Status</th>
                <th class="px-4 py-3">Details</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr class="text-gray-700">
                <td class="px-4 py-3 font-semibold text-black border">
                  7:00 AM - 7:30 AM
                </td>
                <td class="px-4 py-3 text-ms font-semibold border">
                  Breakfast
                </td>
                <td class="px-4 py-3 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                    Completed
                  </span>
                </td>
                <td class="px-4 py-3 text-sm border">
                  Nutritious meal provided
                </td>
              </tr>
              <tr class="text-gray-700">
                <td class="px-4 py-3 font-semibold text-black border">
                  7:30 AM - 8:00 AM
                </td>
                <td class="px-4 py-3 text-ms font-semibold border">
                  Morning Medication
                </td>
                <td class="px-4 py-3 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                    Completed
                  </span>
                </td>
                <td class="px-4 py-3 text-sm border">Administered by nurse</td>
              </tr>
              <tr class="text-gray-700">
                <td class="px-4 py-3 font-semibold text-black border">
                  8:00 AM - 8:30 AM
                </td>
                <td class="px-4 py-3 text-ms font-semibold border">
                  Injection
                </td>
                <td class="px-4 py-3 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                    Completed
                  </span>
                </td>
                <td class="px-4 py-3 text-sm border">
                  Scheduled injection if required
                </td>
              </tr>
              <tr class="text-gray-700">
                <td class="px-4 py-3 font-semibold text-black border">
                  8:30 AM - 9:30 AM
                </td>
                <td class="px-4 py-3 text-ms font-semibold border">Lab Test</td>
                <td class="px-4 py-3 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                    Completed
                  </span>
                </td>
                <td class="px-4 py-3 text-sm border">
                  Blood test / Urine test
                </td>
              </tr>
              <tr class="text-gray-700">
                <td class="px-4 py-3 font-semibold text-black border">
                  9:30 AM - 10:00 AM
                </td>
                <td class="px-4 py-3 text-ms font-semibold border">Rest</td>
                <td class="px-4 py-3 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                    Completed
                  </span>
                </td>
                <td class="px-4 py-3 text-sm border">Relaxation time</td>
              </tr>
              <tr class="text-gray-700">
                <td class="px-4 py-3 font-semibold text-black border">
                  10:00 AM - 11:00 AM
                </td>
                <td class="px-4 py-3 text-ms font-semibold border">MRI Scan</td>
                <td class="px-4 py-3 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                    Completed
                  </span>
                </td>
                <td class="px-4 py-3 text-sm border">As per doctor's orders</td>
              </tr>
              <tr class="text-gray-700">
                <td class="px-4 py-3 font-semibold text-black border">
                  11:00 AM - 11:30 AM
                </td>
                <td class="px-4 py-3 text-ms font-semibold border">Snack</td>
                <td class="px-4 py-3 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                    Completed
                  </span>
                </td>
                <td class="px-4 py-3 text-sm border">Light snack provided</td>
              </tr>
              <tr class="text-gray-700">
                <td class="px-4 py-3 font-semibold text-black border">
                  11:30 AM - 12:30 PM
                </td>
                <td class="px-4 py-3 text-ms font-semibold border">
                  Physical Therapy
                </td>
                <td class="px-4 py-3 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                    Completed
                  </span>
                </td>
                <td class="px-4 py-3 text-sm border">Exercises or walking</td>
              </tr>
              <tr class="text-gray-700">
                <td class="px-4 py-3 font-semibold text-black border">
                  12:30 PM - 1:00 PM
                </td>
                <td class="px-4 py-3 text-ms font-semibold border">Lunch</td>
                <td class="px-4 py-3 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-sm">
                    Progress
                  </span>
                </td>
                <td class="px-4 py-3 text-sm border">Balanced meal</td>
              </tr>
              <tr class="text-gray-700">
                <td class="px-4 py-3 font-semibold text-black border">
                  1:00 PM - 2:00 PM
                </td>
                <td class="px-4 py-3 text-ms font-semibold border">Rest</td>
                <td class="px-4 py-3 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                    Upcomming
                  </span>
                </td>
                <td class="px-4 py-3 text-sm border">Nap or quiet time</td>
              </tr>
              <tr class="text-gray-700">
                <td class="px-4 py-3 font-semibold text-black border">
                  2:00 PM - 3:00 PM
                </td>
                <td class="px-4 py-3 text-ms font-semibold border">
                  Doctor Consultation
                </td>
                <td class="px-4 py-3 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                    Upcomming
                  </span>
                </td>
                <td class="px-4 py-3 text-sm border">Follow-up or check-up</td>
              </tr>
              <tr class="text-gray-700">
                <td class="px-4 py-3 font-semibold text-black border">
                  3:00 PM - 4:00 PM
                </td>
                <td class="px-4 py-3 text-ms font-semibold border">
                  Afternoon Medication
                </td>
                <td class="px-4 py-3 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                    Upcomming
                  </span>
                </td>
                <td class="px-4 py-3 text-xs border">Administered by nurse</td>
              </tr>

              <tr class="text-gray-700">
                <td class="px-4 py-3 font-semibold text-black border">
                  4:00 PM - 4:30 PM
                </td>
                <td class="px-4 py-3 text-ms font-semibold border">
                  Activity Time
                </td>
                <td class="px-4 py-3 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                    Upcomming
                  </span>
                </td>
                <td class="px-4 py-3 text-xs border">
                  Reading, puzzles, or socializing
                </td>
              </tr>

              <tr class="text-gray-700">
                <td class="px-4 py-3 font-semibold text-black border">
                  4:30 PM - 5:00 PM
                </td>
                <td class="px-4 py-3 text-ms font-semibold border">
                  Evening Snack
                </td>
                <td class="px-4 py-3 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                    Upcomming
                  </span>
                </td>
                <td class="px-4 py-3 text-xs border">Healthy snack</td>
              </tr>

              <tr class="text-gray-700">
                <td class="px-4 py-3 font-semibold text-black border">
                  5:00 PM - 5:30 PM
                </td>
                <td class="px-4 py-3 text-ms font-semibold border">
                  Evening Medication
                </td>
                <td class="px-4 py-3 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                    Upcomming
                  </span>
                </td>
                <td class="px-4 py-3 text-xs border">Administered by nurse</td>
              </tr>

              <tr class="text-gray-700">
                <td class="px-4 py-3 font-semibold text-black border">
                  5:30 PM - 6:00 PM
                </td>
                <td class="px-4 py-3 text-ms font-semibold border">Rest</td>

                <td class="px-4 py-3 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                    Upcomming
                  </span>
                </td>

                <td class="px-4 py-3 text-xs border">Relaxation time</td>
              </tr>

              <tr class="text-gray-700">
                <td class="px-4 py-3 font-semibold text-black border">
                  6:00 PM - 6:30 PM
                </td>
                <td class="px-4 py-3 text-ms font-semibold border">Dinner</td>

                <td class="px-4 py-3 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                    Upcomming
                  </span>
                </td>

                <td class="px-4 py-3 text-xs border">
                  Nutritious meal provided
                </td>
              </tr>

              <tr class="text-gray-700">
                <td class="px-4 py-3 font-semibold text-black border">
                  6:30 PM - 7:00 PM
                </td>
                <td class="px-4 py-3 text-ms font-semibold border">
                  Evening Injection
                </td>

                <td class="px-4 py-3 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                    Upcomming
                  </span>
                </td>

                <td class="px-4 py-3 text-xs border">
                  Scheduled injection if required
                </td>
              </tr>

              <tr class="text-gray-700">
                <td class="px-4 py-3 font-semibold text-black border">
                  7:00 PM - 8:00 PM
                </td>
                <td class="px-4 py-3 text-ms font-semibold border">
                  Light Activity / TV Time
                </td>

                <td class="px-4 py-3 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                    Upcomming
                  </span>
                </td>

                <td class="px-4 py-3 text-xs border">
                  Watching TV or light exercise
                </td>
              </tr>

              <tr class="text-gray-700">
                <td class="px-4 py-3 font-semibold text-black border">
                  8:00 PM - 9:00 PM
                </td>
                <td class="px-4 py-3 text-ms font-semibold border">
                  Night Medication
                </td>

                <td class="px-4 py-3 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                    Upcomming
                  </span>
                </td>

                <td class="px-4 py-3 text-xs border">Administered by nurse</td>
              </tr>

              <tr class="text-gray-700">
                <td class="px-4 py-3 font-semibold text-black border">
                  9:00 PM - 10:00 PM
                </td>
                <td class="px-4 py-3 text-ms font-semibold border">Bedtime</td>

                <td class="px-4 py-3 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm">
                    Upcomming
                  </span>
                </td>

                <td class="px-4 py-3 text-xs border">
                  Wind down and sleep preparation
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default TimeTable;
