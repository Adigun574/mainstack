import "./RevenueChart.css"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { date: "Apr 1, 2022", value: 4000 },
    { date: "Apr 10, 2022", value: 7000 },
    { date: "Apr 20, 2022", value: 5000 },
    { date: "Apr 30, 2022", value: 8000 },
    { date: "May 1, 2022", value: 0 },
];

const RevenueChart = () => (
    <div className="revenue-chart-container">
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <XAxis dataKey="date" tickLine={false} axisLine={false} />
                <YAxis hide />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#ff6600" strokeWidth={1} dot={false} />
            </LineChart>
        </ResponsiveContainer>
    </div>
);

export default RevenueChart;