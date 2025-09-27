"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  valveCount: number;
  safetyValveCount: number;
  doCount: number;
  phCount: number;
};

const COLORS = ["#3B82F6", "#10B981", "#8B5CF6", "#0EA5E9"]; // Valve, Safety, DO

const PieChartCard = ({ valveCount, safetyValveCount, doCount, phCount }: Props) => {
  const chartData = [
    { name: "Valve", value: valveCount },
    { name: "Safety Valve", value: safetyValveCount },
    { name: "DO Sensor", value: doCount },
    { name: "pH Sensor", value: phCount },
    //more
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">สรุปประเภทอุปกรณ์</h2>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
            style={{ fontSize: '15px' }}
            labelLine={false} // Ensure labelLine is always false
            label={({ name, percent }) => (percent !== undefined ? `${name} ${(percent * 100).toFixed(0)}%` : name)}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartCard;
