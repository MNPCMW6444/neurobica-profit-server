import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Line,
  Label,
} from "recharts";

export default function Lchart(props) {
  let data = props.data;

  return (
    <div className={"chartdiv" + (props.isShown ? "show" : "")}>
      <span className="chart">
        <LineChart width={720} height={250} data={data}>
          <CartesianGrid horizontal={true} vertical={true} />
          <XAxis dataKey="orderNo" padding={{ right: 20, left: 20 }} />
          <YAxis
            type="number"
            domain={[0, 100]}
            padding={{ bottom: 15, top: 20 }}
            height={50}
            minTickGap={1}
            allowDecimals={false}
          >
            <Label value="%" angle={-90} position="insideBottom" offset={80} />
          </YAxis>
          <Legend verticalAlign="bottom" height={26} />
          <Line
            name="שולי רווח בשיקלול הוצאות חד פעמיות"
            type="linear"
            dataKey="profitMargin"
            stroke="#5e2b01"
            dot={{ stroke: "#5e2b01", strokeWidth: 2 }}
          />
          <Line
            name="שולי רווח אסימפטוטיים (פר מוצר)"
            type="linear"
            dataKey="Asimptot"
            stroke="#0000ff"
            dot={false}
          />
          <Line
            strokeWidth={2}
            name="קו 50%"
            type="linear"
            dataKey="l50"
            stroke="#00ff00"
            dot={false}
          />
          <Line
            strokeWidth={2}
            name="קו 30%"
            type="linear"
            dataKey="l30"
            stroke="#afaf1a"
            dot={false}
          />
          <Line
            strokeWidth={2}
            name="קו 15%"
            type="linear"
            dataKey="l15"
            stroke="#ffae00"
            dot={false}
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
