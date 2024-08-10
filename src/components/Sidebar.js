import React from "react";


const Sidebar = () => {
  return (
    <div className="w-1/4 bg-white-1000 p-10 text-white">
      <h2 className="text-lg font-semibold"> <img src="images/logo.png" /> </h2>

      <ul className="mt-4">
        <li className="py-2">
          <button className="mt-4 bg-blue-800 text-white py-2 px-12 rounded">
            Dashboard
          </button>
        </li>
        <li className="py-2">
          <button className="mt-4 bg-blue-800 text-white py-2 px-11 rounded">
            Subscribers
          </button>
        </li>
        <li className="py-2">
          <button className="mt-4 bg-blue-800 text-white py-2 px-14 rounded">
            Settings
          </button>
        </li>
      </ul>

      {/* logout button at bottom  */}
      <button className="mt-40 bg-blue-800 text-white py-2 px-14 rounded">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
