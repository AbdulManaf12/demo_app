import { Button } from "antd";
import React from "react";
import Graph from "./Graph";
import SubscriberList from "./SubscriberList";

const MainContent = () => {
  return (
    <div className="flex flex-grow p-4 bg-blue-800">
      <div className="w-full bg-gray-300 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-bold text-blue-900">
              Al-Haram Funeral Hall
            </h2>
            <h5 className="text-blue-900">April 20, 2024</h5>
          </div>
          <Button className="bg-blue-800 text-white py-2 px-4 rounded">
            Invite Subscriber
          </Button>
        </div>

        <div className="flex bg-blue-900 text-white mt-4 rounded-lg">
          <img src="logo512.png" alt="Funeral Edition" className="w-1/2 p-5" />
          <div className="mt-10 mb-10 p-4">
            <h2 className="text-lg font-bold">
              <span className="text-blue-200">Hello,</span> Welcome Storied Life
              Funeral Edition
            </h2>
            <p className="mt-4">
              Let's give some meaning to the life, where we celebrate achievements together.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Graph />
        </div>
        <div className="mt-6">
          <SubscriberList />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
