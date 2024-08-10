import React from "react";

const ProfileSection = () => {
  return (
    <div className="w-1/3 p-10 mx-auto">
      <h2 className="text-lg font-semibold text-blue-800 text-center">
        My Profile
      </h2>
      <div className="flex justify-center mt-5">
        <img
          src="https://randomuser.me/api/portraits/men/34.jpg"
          alt="Profile"
          className="w-36 h-36 rounded-full border-8 border-gray-600"
        />
      </div>

      <div className="mt-5 text-center">
        <h2 className="text-lg font-semibold">Karim ABC</h2>
        <p className="text-sm text-gray-600">haram@abhrem.com</p>
      </div>
    </div>
  );
};

export default ProfileSection;
