import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { useTheme } from "../Context/ThemeContext";

const Footer = () => {
    const { theme } = useTheme();

    return (
        <section
            className={`${theme ? "bg-white text-black" : "bg-[#121212] text-white"
                } py-16 px-8`}
        >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h4 className="text-3xl font-normal mb-5">Info</h4>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <a href="#" className="hover:text-c-blue tracking-wide">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-c-blue tracking-wide">
                                Customers
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-c-blue tracking-wide">
                                Service
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-3xl font-normal mb-5">Explore</h4>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <a href="#" className="hover:text-c-blue tracking-wide">
                                Free Designs
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-c-blue tracking-wide">
                                Latest Designs
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-c-blue tracking-wide ">
                                Themes
                            </a>
                        </li>
                    </ul>
                    <div className="mt-8 ">
                        <h2 className="text-3xl font-bold tracking-wide">
                            Your
                            <span className="text-c-red ml-2 relative text-4xl underline ">
                                Logo
                            </span>
                        </h2>
                    </div>
                </div>

                <div>
                    <h4 className="text-3xl font-normal mb-5">Legal</h4>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <a href="#" className="hover:text-c-blue tracking-wide">
                                Customer Agreement
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-c-blue tracking-wide">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-c-blue tracking-wide">
                                Security
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-3xl font-normal mb-5">Newsletter</h4>
                    <p className="mb-5 text-[1.4rem]">
                        Subscribe to our newsletter for a weekly dose of news, updates,
                        helpful tips, and exclusive offers.
                    </p>
                    <form className="flex flex-col gap-3 text-[1.4rem]">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="p-2 rounded border border-blue-500 bg-transparent placeholder-gray-500"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                        >
                            SUBSCRIBE
                        </button>
                    </form>
                    <div className="flex gap-6 mt-5">
                        <a href="#">
                            <FaFacebookF className="text-3xl text-blue-700" />
                        </a>
                        <a href="#">
                            <FaTwitter className="text-3xl text-blue-300" />
                        </a>
                        <a href="#">
                            <FaLinkedin className="text-3xl text-blue-900" />
                        </a>
                        <a href="#">
                            <FaGithub className="text-3xl text-slate-700" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
