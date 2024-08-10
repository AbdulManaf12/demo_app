import { Button } from "antd";
import React from "react";
import Graph from "./Graph";

const MainContent = () => {
  return (
    <div className="flex flex-grow p-4 bg-blue-800">
      <div className="w-4/4 bg-gray-300 p-4">
        <div className="flex flex-grow">
          <div>
            <h2 className="text-lg font-bold text-blue-900">
              Al-Haram Funeral Hall
            </h2>
            <h5>April 20, 2024</h5>
          </div>

          <div>
            <button className="ml-20 bg-blue-800 text-white py-2 px-12 rounded">
              Invite Subscriber
            </button>
          </div>
        </div>

        <div className="flex flex-grow bg-blue-900 text-white mt-4 rounded">
          <img src="logo512.png" className="w-1/2 p-5" />

          <div className="mt-20 mb-10">
            <h2 className="text-lg font-bold">
              <span className="text-blue-200">Hello,</span> Welcome Storied Life
              Funeral Edition
            </h2>

            <p className="mt-4">Lets give some meaning to the life, where we celebrate achieve together</p>
          </div>

        </div>
          <Graph />
      </div>
    </div>
  );
};

export default MainContent;
