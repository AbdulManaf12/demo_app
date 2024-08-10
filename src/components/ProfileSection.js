import React from "react";

const ProfileSection = () => {
  return (
    <div className="w-2/4 p-20 ">
      <h2 className="text-lg font-semibold text-blue-800 text-center">
        My Profile
      </h2>
      <div className="text-center ml-5">
        <img
          src="https://randomuser.me/api/portraits/men/34.jpg"
          alt="Profile"
          className="mt-5 w-18 h-18 rounded-full border-8 border-gray-600"
        />
      </div>

      <div className="ml-4 mt-5">
        <h2 className="text-lg font-semibold text-center">Karim ABC</h2>

        <p className="text-sm text-gray-600  text-center">haram@abhrem.com</p>
      </div>
    </div>
  );
};

export default ProfileSection;
