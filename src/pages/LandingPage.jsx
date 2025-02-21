import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../partials/Header";
import Sidebar from "../partials/Sidebar";
import { patientData } from "../data/patientdb";

function LandingPage() {
  const { id } = useParams();
  const numberofID = [15, 20, 16, 18];
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [patientID, setPaientID] = useState(id);
  useEffect(() => {
    if (!numberofID.includes(parseInt(id))) {
      setPaientID(0);
      navigate("/404"); // Redirect to the 404 page if ID is less than 7
    }
  }, [id, navigate]);

  const patient = patientData.find((patient) => patient.id === parseInt(id));
  return (
    <div className="flex h-screen  overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                  Patient Profile
                </h1>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6 ">
              <div className="col-span-8  flex justify-between p-1 gap-1 text-xs text-center sm:text-xs lg:text-xl ">
                <div className="w-[25%] ">
                  <img
                    alt="welcome"
                    src="https://placehold.co/200"
                    className=" shadow-xl rounded-full w-1/2 h-auto mx-auto border-2 border-black"
                  />
                </div>
                <div className=" flex w-[25%] flex-col justify-center items-baseline ">
                  <p>Name: {patient.name}</p>
                  <p>Id: {patient.id}</p>
                  <p>Room Id: {201}</p>
                </div>
              </div>
              <div className="col-span-8  flex justify-around p-1 gap-1 text-xs text-center sm:text-xs lg:text-xl outline">
                <div className="flex w-[25%] flex-col justify-center items-baseline gap-y-3">
                  <p>Doctor:</p>
                  <p>Diagnosis:</p>
                  <p>Weight:</p>
                  <p>Height:</p>
                </div>
                <div className=" flex w-[25%] flex-col justify-center items-baseline gap-y-3">
                  <p> {"Albert"}</p>
                  <p> {"Fever"}</p>
                  <p> {90}</p>
                  <p> {180}</p>
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

export default LandingPage;
