// src/components/NotFound.js

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-2xl mb-6">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="text-lg text-orange-600 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
