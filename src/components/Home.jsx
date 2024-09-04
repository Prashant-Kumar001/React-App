import React from "react";
import { MdDownloading } from "react-icons/md";

const home = () => {
  return (
    <div className="max-w-screen md:w-11/12 m-auto md:mt-20">
      <div className="md:flex justify-between items-center">
        <div className="sm:my-20 sm:pt-1 pt-12 h-full">
          <img
            className="w-4/5 m-auto md:w-96 up-down"
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt="Remote Work Illustration"
          />
        </div>
        <div>
          <div className="items-center flex flex-col md:items-end gap-2">
            <h1 className="text-4xl text-center mb-5 mt-10 md:mt-0 md:text-5xl md:text-right font-extrabold">
              Download Now
            </h1>
            <p className="hidden md:block md:text-5xl font-bold md:mb-10 md:text-right">
              Prashant
            </p>
            <button className="mb-10 md:mb-0 flex gap-5 items-center justify-center px-8 py-3 border-2 border-gray-600 text-2xl rounded-md shadow-md bg-orange-500 text-yellow-50">
              <MdDownloading className="text-4xl animate-spin-slow " />
              Download
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center sm:mt-20 mb-10">
        <img
          className="w-4/5 sm:w-96 md:w-96 up-down"
          src="https://i.ibb.co/2M7rtLk/Remote1.png"
          alt="Remote Work Illustration 2"
        />
      </div>
    </div>
  );
};

export default home;
