import { Button } from "antd";
import React from "react";
import Graph from "./Graph";
import { UserAddOutlined } from "@ant-design/icons";
import SubscriberList from "./SubscriberList";

const MainContent = () => {
  return (
    <div className="flex flex-grow p-4">
      <div className="w-full bg-gray-200 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-bold text-blue-900">
              Al-Haram Funeral Hall
            </h2>
            <h5 className="text-blue-900">April 20, 2024</h5>
          </div>
          <Button
            type="primary"
            icon={<UserAddOutlined />}
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-full"
          >
            Invite Subscriber
          </Button>
        </div>

        <div className="flex bg-blue-900 text-white mt-4 rounded-lg overflow-hidden">
          <img
            src="images/ad_pic.PNG"
            alt="Funeral Edition"
            className="w-1/3 object-cover"
          />
          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold">
              Hello, Welcome Storied Life Funeral Edition
            </h2>
            <p className="mt-2 text-lg">
              Let's give some meaning to the life, where we celebrate
              achievements together.
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
