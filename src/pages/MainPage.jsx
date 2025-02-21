import React from "react";
import hero from "../images/hero.png";
import logo from "../images/android-icon-72x72.png";
import dummy from "../images/icon-01.svg";
function MainPage() {
    
 const descNums = [
    
   
    {
      num: '24/7',
      text: 'Emergency Service',
    }
  ];
  return (
    <div className="m-auto max-w-[1250px] px-5 md:px-16">
      <div className="flex items-center justify-between py-5">
        <img src={logo} alt="logo" />
        <h4 className="font-bold text-2xl">MEZOI</h4>
        <div><img src={dummy} alt="logo" /></div>
      </div>
      <div className="flex flex-col-reverse  md:flex-row items-center justify-between gap-10 text-center md:text-left">
        <div className=" tracking-wider md:tracking-normal max-w-xs lg:max-w-xl ">
          <h1 className="lg:text-7xl text-4xl font-bold">
            Welcome to Hospital Room Assistant
          </h1>
          <p className="text-lg md:text-base lg:text-xl my-10">
            Your smart companion for seamless patient care.
          </p>
        </div>
        <div className="max-w-xs md:max-w-none">
          <img src={hero} alt="hero" />
        </div>
      </div>
      <div className="flex px-10 xs:px-16 sm:px-5 md:px-0 gap-5 flex-wrap items-center md:flex-nowrap text-center justify-center md:justify-around mt-10">
      {descNums.map((descNum, index) => (
        <div
          className="rounded-3xl shadow-xl p-6 md:px-2 lg:w-1/5 w-xl bg-[#ffffffd1]"
          key={index}
        >
          <h3 className="lg:text-4xl text-2xl font-bold mb-2">{descNum.num}</h3>
          <p className="lg:text-base text-sm">{descNum.text}</p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default MainPage;
