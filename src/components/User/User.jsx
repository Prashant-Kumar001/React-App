import React from "react";
import { useParams } from "react-router-dom";

export const User = () => {
  const { userId } = useParams();
  const userName = userId ? `User ${userId}` : "Guest";

  return (
    <div className="h-[40vh] flex items-center justify-center">
      <div className="w-full max-w-[90vw] md:max-w-full bg-violet-400 rounded-lg shadow-lg p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            User: <span className="text-2xl">{userName}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};
