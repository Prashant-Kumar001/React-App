import React from 'react';
import { useTheme } from "../context/ThemeContext";
import { Link } from 'react-router-dom';

export default function About() {
    const { theme } = useTheme();

    return (
        <section className={`py-20 ${theme ? 'bg-nav-light-gray ' : 'text-nav-light-gray'} mt-20 md:mb-10 radius`}>
            <div className="container mx-auto px-6 text-gray-700 md:px-12 xl:px-20">
                <div className="md:flex md:gap-12 lg:items-center">
                    <div className="md:w-5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="Teamwork Illustration"
                            className="rounded-lg shadow-lg "
                        />
                    </div>
                    <div className="mt-8 md:mt-0 md:w-7/12 lg:w-7/12">
                        <h2 className={`text-4xl font-bold ${theme ? 'text-gray-900' : 'text-nav-light-gray'} md:text-5xl lg:text-6xl`}>
                            React Development by <span className='text-purple-700 text-4xl md:text-5xl'>Passionate</span> Developers
                        </h2>
                        <p className={`text-xl mt-6 leading-relaxed ${theme ? 'text-gray-900' : 'text-nav-light-gray'}`}>
                            Our team of developers is dedicated to creating powerful and scalable React applications. We focus on delivering high-quality code and user-friendly interfaces, ensuring your project meets the highest standards.
                        </p>
                        <p className={`mt-4 text-2xl leading-relaxed ${theme ? 'text-gray-900' : 'text-nav-light-gray'}`}>
                            With years of experience in the industry, we bring expertise and innovation to every project. Our goal is to help you succeed in a rapidly evolving digital landscape.
                        </p>
                        <Link to="/contact" className="text-2xl mt-8 inline-block bg-purple-700 text-white font-semibold px-8 py-3 rounded-md shadow hover:bg-purple-800 transition">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
