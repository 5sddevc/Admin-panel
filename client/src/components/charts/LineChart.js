import React from "react";
import propTypes from 'prop-types';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import XAxisWrapper from './chartComponents/xAxis/index';

const renderLineChart = (props) => {
  console.log(props);
  const obj = Object.keys(props.data[0]);
  return (
    <div>
      <LineChart width={props.width} height={props.height} data={props.data} margin={props.margin}>
        {obj.map((value, index) => {
          return (
            <Line key={index.toString()} type={props.lineType} dataKey={obj[index + 2]} stroke={props.lineColor[index]} />
          )
        })}
        {props.isCartReq ? <CartesianGrid stroke={props.cartStroke} strokeDasharray={props.cartDash} /> : null}
        <XAxis dataKey={obj[1]} />
        <YAxis />
        {props.isTooltip ? <Tooltip />: null}
      </LineChart>
    </div>
  )
}

renderLineChart.defaultProps = {
  width: '100%',
  height: 300,
  margin: { top: 0, right: 0, left: 0, bottom: 0 },
  lineType: 'monotone',
  isCartReq: false,
  cartStroke: '#f0f0f0',
  cartDash: 5,
  isTooltip: true,
}

renderLineChart.propTypes = {
  data: propTypes.array.isRequired,
  lineColor: propTypes.array.isRequired,
}
export default renderLineChart;