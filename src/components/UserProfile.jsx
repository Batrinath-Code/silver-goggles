import React from "react";
import { Link } from "react-router-dom";
import { patientData } from "../data/patientdb";

function UserProfile({ id }) {
  const patient = patientData.find((patient)=> patient.id === parseInt(id));
  console.log(patient);
  
  return (
    <>
      <section className="pt-16 bg-blueGray-50">
        <div className="w-full lg:w-10/12 px-4 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
            <div className="px-6 pt-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 flex justify-center">
                  <div className="relative">
                    <img
                      alt="welcome"
                      src="https://placehold.co/300"
                      className=" shadow-xl rounded-full w-1/2 h-auto mx-auto border-2 border-black"
                    />
                  </div>
                </div>

                <div className="w-full px-4 text-center mt-5">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        {patient.age}
                      </span>
                      <span className="text-sm text-blueGray-400">Age</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        {patient.blood}
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Blood Group
                      </span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        {patient.gender}
                      </span>
                      <span className="text-sm text-blueGray-400">Gender</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-5">
                <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 ">
                  {patient.name}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                 {patient.location}
                </div>
                {/* <div className="mb-2 text-blueGray-600 mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                  Solution Manager - Creative Tim Officer
                </div>
                <div className="mb-2 text-blueGray-600">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  University of Computer Science
                </div> */}
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                {/* <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </p>
                    <a
                      href="javascript:void(0);"
                      className="font-normal text-pink-500"
                    >
                      Show more
                    </a>
                  </div>
                </div> */}
                <div className="flex flex-wrap justify-center items-center gap-2">
                  <Link
                    to="/viewprogress"
                    className=" flex w-[25%] py-2  text-white bg-purple-500 rounded-xl dark:bg-gray-800 shadow-xs justify-center items-center"
                  >
                    View Progress
                  </Link>
                  <Link
                    to="/viewschedule"
                    className=" flex w-[25%] py-2  text-white bg-red-500 rounded-xl dark:bg-gray-800 shadow-xs justify-center items-center"
                  >
                    View Schedule
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserProfile;
