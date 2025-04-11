import React, { useState } from "react";
import { Navbar } from "./navbar";

const Header = () => {
 

  return (
    <header className="relative bg-gray-400 bg-blend-multiply h-[700px] bg-cover bg-center text-white " style={{ backgroundImage: `url('/background/home.png')` }}>
      <Navbar/>
      <div className="flex flex-col items-center gap-8 px-8 text-center mt-44">
        <h2 className="text-[32px] lg:leading-snug font-bold lg:text-5xl">
          The World's <span className="text-orange-400">First AI-Powered</span><br />
          Target Scoring System for <span className="text-orange-400">Sport Shooting</span>
        </h2>
        <p className="text-gray-300 text-[17px] text-center">
          Revolutionizing training with unprecedented accuracy and real-time feedback to revolutionize the shooting industry
        </p>
        <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded">
          <div className="flex items-center gap-2 text-sm">
            Learn More <i className="bi bi-arrow-right text-xl"></i>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
