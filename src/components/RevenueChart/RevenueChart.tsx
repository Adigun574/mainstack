import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "Apr 1, 2022", value: 4000 },
  { date: "Apr 10, 2022", value: 7000 },
  { date: "Apr 20, 2022", value: 5000 },
  { date: "Apr 30, 2022", value: 8000 },
  { date: "May 1, 2022", value: 0 },
];

const RevenueChart = () => (
    <div style={{ width: 700, height: 250 }}>
    <ResponsiveContainer>
      <LineChart data={data}>
        <XAxis dataKey="date" tickLine={false} axisLine={false} />
        <YAxis hide />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#ff6600" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default RevenueChart;



// import React from "react";

// const samplePoints = [
//   { x: 0, y: 160 },
//   { x: 160, y: 40 },
//   { x: 320, y: 160 },
//   { x: 480, y: 80 },
//   { x: 640, y: 160 },
// ];

// function buildPath(points: any){
//   if(!points.length) return "";
//   // Use a catmull-rom-like smooth quadratic path approximation
//   let d = `M ${points[0].x} ${points[0].y}`;
//   for(let i=1;i<points.length;i++){
//     const prev = points[i-1];
//     const cur = points[i];
//     const cx = (prev.x + cur.x)/2;
//     d += ` Q ${prev.x} ${prev.y} ${cx} ${(prev.y + cur.y)/2}`;
//   }
//   // final segment to last
//   const last = points[points.length-1];
//   d += ` T ${last.x} ${last.y}`;
//   return d;
// }

// export default function RevenueChart({ width = 640, height = 180 }){
//   const padding = 8;
//   const viewW = width;
//   const viewH = height;
//   const path = buildPath(samplePoints);

//   return (
//     <div style={{ width: "100%", overflow: "hidden" }}>
//       <svg viewBox={`0 0 ${viewW} ${viewH}`} preserveAspectRatio="none" style={{ width:"100%", height:180, display:"block" }}>
//         {/* baseline */}
//         <line x1="0" y1={viewH-24} x2={viewW} y2={viewH-24} stroke="#e6e6e6" strokeWidth="1" />
//         {/* subtle dots */}
//         <g opacity="0.7">
//           <circle cx="0" cy={viewH-24} r="2.5" fill="#D1D5DB" />
//           <circle cx={viewW} cy={viewH-24} r="2.5" fill="#D1D5DB" />
//         </g>

//         {/* smooth orange line */}
//         <path d={path} fill="none" stroke={getComputedStyle(document.documentElement).getPropertyValue('--accent') || '#ff6f2f'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

//       </svg>

//       <div style={{ display:"flex", justifyContent:"space-between", fontSize:12, color:"#9AA0AB", marginTop:6 }}>
//         <div>Apr 1, 2022</div>
//         <div>Apr 30, 2022</div>
//       </div>
//     </div>
//   );
// }
