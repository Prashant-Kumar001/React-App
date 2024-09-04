import React from "react";
import { MdOutlineShareLocation } from "react-icons/md";
import { VscCallIncoming } from "react-icons/vsc";
import { BsMailboxFlag } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const { theme } = useTheme();

  return (
    <div>
      <div className="absolute inset-0 top-[63px]  bg-image"></div>

      <section
        className={`Contact relative flex flex-col items-center justify-center md:h-screen 
      bg-cover bg-center ${
        theme
          ? "text-nav-light-gray md:text-nav-dark-gray"
          : "text-nav-light-gray"
      }`}
      >
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="p-6 mt-10 rounded-lg shadow-lg  bg-opacity-80 custom-class radius">
              <h1 className="md:text-5xl text-3xl font-extrabold mb-4">
                Get in Touch
              </h1>
              <p className="text-2xl mb-6">
                Fill in the form to start a conversation.
              </p>

              <div className="flex items-center mb-4 text-3xl">
                <MdOutlineShareLocation className="text-4xl" />
                <div className="ml-4 text-xl font-semibold">
                  Acme Inc, Street, State, Postal Code
                </div>
              </div>

              <div className="flex items-center mb-4">
                <VscCallIncoming className="text-4xl" />
                <div className="ml-4 text-xl font-semibold">+44 1234567890</div>
              </div>

              <div className="flex items-center">
                <BsMailboxFlag className="text-4xl" />
                <div className="ml-4 text-xl font-semibold">info@acme.org</div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="p-6 rounded-lg mt-10 shadow-lg mb-10 md:mb-0 bg-opacity-80 custom-class ">
              <h2 className="text-5xl font-bold mb-4">Contact Us</h2>
              <div className="flex flex-col mb-4">
                <label htmlFor="name" className="text-2xl font-bold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  className="w-full py-3 px-4 border text-xl md:text-2xl border-gray-300 rounded-lg focus:border-orange-500 focus:ring focus:ring-orange-200"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="text-2xl font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full py-3 px-4 border text-xl md:text-2xl border-gray-300 rounded-lg focus:border-orange-500 focus:ring focus:ring-orange-200"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="tel" className="text-2xl font-bold mb-2">
                  Telephone Number
                </label>
                <input
                  type="tel"
                  id="tel"
                  placeholder="Telephone Number"
                  className="w-full md:text-2xl py-3 px-4 border text-xl border-gray-300 rounded-lg focus:border-orange-500 focus:ring focus:ring-orange-200"
                />
              </div>

              <button
                type="submit"
                className="bg-orange-700 hover:bg-orange-600 text-white uppercase text-2xl font-bold py-3 px-6 rounded-lg w-full transition ease-in-out duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
