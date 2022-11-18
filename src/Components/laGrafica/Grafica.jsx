import "./grafica.scss";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sep",
    uv: 4500,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Oct",
    uv: 3490,
    pv: 2800,
    amt: 2100,
  },
  {
    name: "Nov",
    uv: 2578,
    pv: 3500,
    amt: 2100,
  },
  {
    name: "Dic",
    uv: 6000,
    pv: 6000,
    amt: 2100,
  },
];

const Grafica = () => {
  return (
    <div className="grafica">
      <h1 className="title">User Data</h1>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#FF0000"/>
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Tooltip/>
          <CartesianGrid stroke=""/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Grafica;
