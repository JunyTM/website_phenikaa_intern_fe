import React from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from "recharts";

const data = [
  { subject: "a", key: 120, fullMark: 150 },
  { subject: "a", key: 100, secondKey: 50, fullMark: 150 },
  { subject: "a", key: 100, secondKey: 50, fullMark: 150 },
  { subject: "a", key: 100, secondKey: 50, fullMark: 150 },];


const DoughnutChart: React.FC<any> = () => {
  
  return (
    <div className="w-64 h-64">
      <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="Lily"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </div>
  );
};

export default DoughnutChart;
