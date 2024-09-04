import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import LoadingIcons from "react-loading-icons";

const Github = ({}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const data = useLoaderData();

  useEffect(() => {
    fetch("https://api.github.com/users/PrashantKumar0010") // GitHub API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  
  if (loading)
    return (
  <div className=" text-black h-[40vh] flex items-center justify-center ">
        <div className="max-w-md ">
          <span className="text-black">
            {/* <AiOutlineLoading3Quarters className="c-rotate text-5xl " /> */}
            <LoadingIcons.Bars className="text-black" />
          </span>
        </div>
      </div>
    );
    if (error)
      return (
    <div className="text-center text-red-500 text-6xl mt-40 mb-40">
        Error: {error.message}
      </div>
    );

  return (
    <div className="h-[52vh] flex items-center justify-center">
      <div className="md:max-w-full w-full max-w-[90vw] py-6 rounded-lg shadow-md px-2 bg-gray-500 radius-L">
        <div className="flex flex-col items-center gap-1 justify-center">
        <span className="text-4xl text-white">id: {data ? data.id : 'not available'}</span>
          <div className="flex gap-3 items-center text-white ">
            <img
              src={data ? data.avatar_url : 'not available'}
              alt={data ? data.login : 'not available'}
              className="w-24 h-24 rounded-full border-2 border-white"
            />
            <span className="text-4xl text-white">{data ? data.login : 'not available'}</span>
          </div>
          <h4 className="text-3xl">
            <a target="_blank" href={`${data ? data.repos_url : 'not available'}`}>
              repo_url
            </a>
          </h4>
          <h4 className="text-3xl">followers:{data ? data.followers : 'not available'}</h4>
        </div>
      </div>
    </div>
  );
};

export default Github;
