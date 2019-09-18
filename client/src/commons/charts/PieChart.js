import React from 'react';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';

const renderPieChart = (props) => {
  return (
    <PieChart width={props.width} height={props.height} margin={props.margin}>
      <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill={props.lineColor1} label={props.label} />
      <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill={props.lineColor1} label={props.label} />
      <Tooltip />
    </PieChart>
  )
}