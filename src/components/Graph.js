import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
} from "recharts";

const data = [
  { name: "Subscriber 1", participants: 1000 },
  { name: "Subscriber 2", participants: 800 },
  { name: "Subscriber 3", participants: 1200 },
  { name: "Subscriber 4", participants: 600 },
  { name: "Subscriber 5", participants: 1800 },
  { name: "Subscriber 6", participants: 900 },
  { name: "Subscriber 7", participants: 1300 },
  { name: "Subscriber 8", participants: 400 },
];

function Graph() {
  return (
    <div className="relative my-6 bg-gray-100 p-10 rounded-lg">
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name">
          <Label value="My Subscribers" offset={-5} position="insideBottom" />
        </XAxis>
        <YAxis>
          <Label value="No. Participants" angle={-90} position="insideLeft" />
        </YAxis>
        <Tooltip />
        <Bar dataKey="participants" fill="#000080" barSize={30} />
      </BarChart>
      <div className="absolute top-0 right-0 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-blue-900 text-center">20</h2>
        <p className="text-blue-900">My Subscribers</p>
      </div>
    </div>
  );
}

export default Graph;
