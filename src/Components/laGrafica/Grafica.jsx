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
    name: "Enero",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Abril",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Ago",
    uv: 5000,
    pv: 2000,
    amt: 2100,
  },
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
      <ResponsiveContainer width="100%" aspect={4 / 1}>
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
