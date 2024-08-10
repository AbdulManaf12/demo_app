import React from "react";

const Subscriber = ({ pic_path, name, email, number_of_participants }) => {
  return (
    <div className="flex items-center p-4 border-b border-gray-200 bg-blue-100 rounded-lg my-2">
      <img
        src={pic_path}
        alt={name}
        className="w-12 h-12 rounded-full mr-4 bg-gray-300"
      />
      <div className="flex-grow">
        <h4 className="font-semibold text-blue-900">{name}</h4>
        <p className="text-blue-900 text-sm">{email}</p>
      </div>
      <div className="text-right">
        <p className="font-bold text-blue-900 text-center">{number_of_participants}</p>
        <p className="text-sm text-blue-900">Participants</p>
      </div>
    </div>
  );
};

export default Subscriber;
