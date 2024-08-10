import React from "react";
import Subscriber from "./Subscriber";

const SubscriberList = () => {
  const subscribers = [
    {
      pic_path: "/images/example.jpg",
      name: "Ali Kareem",
      email: "example1@example.com",
      number_of_participants: 1000,
    },
    {
      pic_path: "/images/example2.jpg",
      name: "Rafi Moshe",
      email: "example2@example.com",
      number_of_participants: 1500,
    },
    {
      pic_path: "/images/example3.jpg",
      name: "Name Subscriber 3",
      email: "example3@example.com",
      number_of_participants: 800,
    },
  ];

  return (
    <div>
      {subscribers.map((subscriber, index) => (
        <Subscriber
          key={index}
          pic_path={subscriber.pic_path}
          name={subscriber.name}
          email={subscriber.email}
          number_of_participants={subscriber.number_of_participants}
        />
      ))}
    </div>
  );
};

export default SubscriberList;
