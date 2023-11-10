import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";

const data = [
  {
    type: "Đang thực tập",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    type: "Đang ứng tuyển",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    type: "Đã hoàn thành",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    type: "Thực tập lại",
    A: 99,
    B: 100,
    fullMark: 150,
  },
];

const DoughnutChart: React.FC<any> = () => {
  return (
    <RadarChart outerRadius={90} width={530} height={300} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="type" />
      <PolarRadiusAxis angle={45} domain={[0, 150]} />
      <Radar
        name="Khoa CNTT"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Radar
        name="Khoa Dược"
        dataKey="B"
        stroke="#82ca9d"
        fill="#82ca9d"
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  );
};

export default DoughnutChart;
