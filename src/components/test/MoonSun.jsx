import React from "react";
import { useTheme } from "../../contaxt/ThemeContext";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunnySharp } from "react-icons/io5";

const MoonSun = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`w-[6rem] h-[32px] rounded-full shadow-lg flex items-center justify-between p-1 transition duration-300 ease-out`}
      style={{
        backgroundColor: theme ? "#162b53" : "#73C0FC",
      }}
    >
      {theme ? (
        <span style={
            {
                transform: 'translateX(35px)'
  
            }
        }>
          <BsFillMoonStarsFill
            aria-label="Moon Icon"
            className={`text-3xl text-[#73C0FC]  animate-rotate-slow  `}
          />
        </span>
      ) : (
        <IoSunnySharp
          aria-label="Sun Icon"
          className="text-4xl text-yellow-400 animate-spin-slow  "
        />
      )}
      <div
        className={`w-[28px] h-[28px] bg-white rounded-full transition-transform duration-300 ease-out transform ${
          theme ? "-translate-x-11" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default MoonSun;
