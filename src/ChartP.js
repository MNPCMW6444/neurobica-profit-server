import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Line,
  Label,
  Tooltip,
} from "recharts";

export default function ChartP(props) {
  let data = props.data;

  return (
    <div className={"chartdiv" + (props.isShown ? "show" : "")}>
      <span className="chart">
        <LineChart width={400} height={350} data={data}>
          <Tooltip
            cursor={{
              stroke: "#444444",
              strokeWidth: 2,
            }}
            formatter={(value, name, props) => [
              name === "קו הפסד" ? "" : value,
              name === "קו הפסד" ? "" : name,
            ]}
          />
          <CartesianGrid horizontal={true} vertical={true} />
          <XAxis dataKey="orderNo" padding={{ right: 20, left: 20 }} />
          <YAxis
            type="number"
            padding={{ bottom: 15, top: 20 }}
            height={50}
            minTickGap={1}
            allowDecimals={false}
          >
            <Label value="$" angle={-90} position="insideBottom" offset={80} />
          </YAxis>
          <Legend verticalAlign="bottom" height={26} />
          <Line
            name="רווח"
            type="linear"
            dataKey="profit"
            stroke="#5e2b01"
            dot={{ stroke: "#5e2b01", strokeWidth: 2 }}
            strokeWidth={2}
          />

          <Line
            strokeWidth={2}
            name="קו הפסד"
            type="linear"
            dataKey="l0"
            stroke="#ff0000"
            dot={false}
          />
        </LineChart>
      </span>
    </div>
  );
}
