import React from "react";
import propTypes from 'prop-types';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import XAxisWrapper from './chartComponents/xAxis/index';

const renderLineChart = (props) => {
  //console.log(props);
  var obj;
  if(props.data[0])
    obj = Object.keys(props.data[0]);
  return (
    <div>
      <LineChart width={props.width} height={props.height} data={props.data.length !== 0 ? props.data : [{empty: 0}]} margin={props.margin}>
        {obj && !props.loading ? obj.map((value, index) => {
          //console.log("DETAILS", obj, value, index)
          return (
            <Line key={index.toString()} type={props.lineType} dataKey={obj[index + 2]} stroke={props.lineColor[index]} />
          )
        }) : (
          <Line type={props.lineType}  stroke={"#A9A9A9"} />
        )}
        {props.isCartReq ? <CartesianGrid dataKey={"empty"} stroke={props.cartStroke} strokeDasharray={props.cartDash} /> : null}
        <XAxis 
        dataKey={obj && !props.loading ? obj[1]: null} 
        />
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