import React from "react";
import hero from "../images/hero.png";
import logo from "../images/android-icon-72x72.png";
import widezolog from "../images/widezolog.svg";
function MainPage() {
  const descNums = [
    {
      num: "24/7",
      text: "Emergency Service",
    },
  ];
  return (
    <div className="min-h-screen bg-[#F5F8FF] p-4">
      {/* Header Logo */}
      <div className="mb-8 flex items-center gap-2">
        <img
          src={logo}
          alt="Mezoi Logo"
          width={40}
          height={40}
          className="h-10 w-10"
        />
        <span className="text-2xl font-bold text-[#1A2B6B]">Mezoi</span>
      </div>

      {/* Main Card */}
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-lg">
        {/* Center Logo */}
        <div className="mb-6 flex justify-center">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Mezoi Logo"
              width={64}
              height={64}
              className="h-16 w-16"
            />
            <span className="text-4xl font-bold text-[#1A2B6B]">Mezoi</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="mb-8 text-center text-3xl font-bold text-[#1A2B6B]">
          Smart Companion for Seamless Patient Care
        </h1>

        {/* Welcome Section */}
        <div className="mb-6 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#1A2B6B]">
            Welcome To <span className="text-[#0066FF]">Marry</span>
          </h2>
          <div className="inline-block rounded-full bg-[#0066FF] px-6 py-2 text-white">
            <span className="text-xl">Smart Room </span>
            <span className="text-xl font-bold">101</span>
          </div>
        </div>

        {/* Profile Section */}
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-4 h-32 w-32 overflow-hidden rounded-full">
            <img
              src="https://images.unsplash.com/photo-1468488718849-422a2a5efc03?q=80&w=1624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              width={128}
              height={128}
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-[#1A2B6B]">Marry Queen</h3>
          <p className="text-gray-600">00012522100626</p>
        </div>

        {/* Patient Details */}
        <div className="mb-8 space-y-4">
          <div className="flex justify-center gap-2 ">
            <span className="text-lg font-semibold text-[#1A2B6B]">
              Diagnoses :
            </span>
            <span className="text-lg text-[#0066FF]">
              High Fever
            </span>
          </div>
          <div className="flex justify-center gap-2">
            <span className="text-lg font-semibold text-[#1A2B6B]">
              Date Of Admitted :
            </span>
            <span className="text-lg text-[#0066FF]">22/02/2025</span>
          </div>
        </div>

    
      </div>
          {/* Footer */}
          <div className="flex items-center justify-between w-11/12 mx-auto mt-8">
          <div className="flex flex-col items-center gap-2">
            <span className="text-lg">A product from</span>
           <img src={widezolog} alt="widezo logo" />
          </div>

          {/* Emergency Contact Card */}
          <div className="rounded-xl bg-white p-4 shadow-md">
            <h4 className="mb-2 font-semibold text-[#1A2B6B]">
              Emergency Contact
            </h4>
            <p className="text-gray-600 font-semibold">Ph : 0987654321</p>
            <p className="text-gray-600 font-semibold">Email : admin@apollo.com</p>
          </div>
        </div>
    </div>
  );
}

export default MainPage;
