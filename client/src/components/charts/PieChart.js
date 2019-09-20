import React from 'react';
import propTypes from 'prop-types';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

const renderPieChart = (props) => {
  const obj = Object.keys(props.data[0]);

  return (
    <PieChart width={props.width} height={props.height} margin={props.margin}>
      <Pie data={props.data} dataKey={obj[2]} nameKey={obj[1]} cx="50%" cy="50%" outerRadius={props.size} legendType={props.legendType} Legend label={props.label}>
        {
          props.data.map((val, index) => <Cell key={`cell-${obj[0]}`} fill={props.pieColor[index]}/> )
        }
      </Pie>

      {props.isLegend ? <Legend /> : null}
      {props.isTooltip ? <Tooltip /> : null}
    </PieChart>
  )
}

renderPieChart.defaultProps = {
  width: 300,
  height: 300,
  margin: { top: 0, right: 0, left: 0, bottom: 0 },
  isTooltip: true,
  isLegend: false,
  size: null,
  label: true,
  legendType: 'line'
}

renderPieChart.propTypes = {
  data: propTypes.array.isRequired,
  pieColor: propTypes.array.isRequired,
}

export default renderPieChart;