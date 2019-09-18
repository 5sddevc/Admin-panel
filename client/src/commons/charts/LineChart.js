import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import XAxisWrapper from './chartComponents/xAxis/index';

const renderLineChart = (props) => {
  const obj = Object.keys(props.data[0])

  return (
    <div>
      <LineChart width={props.width} height={props.height} data={props.data} margin={props.margin}>
        <Line type="monotone" dataKey={obj[1]} stroke={props.lineColor1} />
        <Line type="monotone" dataKey={obj[2]} stroke={props.lineColor2} />
        {props.isCartReq ? <CartesianGrid stroke="#f0f0f0" strokeDasharray="5" /> : null}
        <XAxis dataKey={obj[0]} />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  )
}

export default renderLineChart;