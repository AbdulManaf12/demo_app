import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Subscriber 1", participants: 100 },
  { name: "Subscriber 2", participants: 150 },
  { name: "Subscriber 3", participants: 200 },
  { name: "Subscriber 4", participants: 80 },
  { name: "Subscriber 5", participants: 70 },
  { name: "Subscriber 6", participants: 110 },
];

function Graph() {
  return (
    <div className="my-6">
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="participants" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default Graph;
