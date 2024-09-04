import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunnySharp } from "react-icons/io5";
import { useTheme } from "../context/ThemeContext";

const DayNightToggle = () => {
    const { theme, changeTheme } = useTheme();

    return (
        <div
            className={`w-28 h-14 rounded-full p-1 shadow-lg flex items-center transition duration-300 ease-out
            ${theme
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-200"
                    : "bg-gradient-to-r from-gray-900 to-black"
                }`}
        >
            <button
                onClick={changeTheme}
                className={` w-12 h-12 text-2xl flex justify-center items-center rounded-full transition-all duration-300 ease-out transform
                    ${theme
                        ? "translate-x-0 bg-yellow-400 text-gray-900"
                        : "translate-x-14 bg-gray-900 text-yellow-400"
                    }`}
            >
                {theme ? (
                    <IoSunnySharp className="text-3xl animate-spin-slow " />
                ) : (
                    <BsFillMoonStarsFill className="text-3xl animate-rotate-slow" />
                )}
            </button>
        </div>
    );
};

export default DayNightToggle;
