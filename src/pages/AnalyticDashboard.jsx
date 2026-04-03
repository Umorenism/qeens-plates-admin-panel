

// import React from "react";
// import { ShoppingCart, TrendingUp } from "lucide-react";
// import { CiDeliveryTruck } from "react-icons/ci";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
//   LineChart,
//   Line,
// } from "recharts";
// import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";

// /* ✅ CUSTOM TOOLTIP (LEFT CHAT BUBBLE) */
// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="relative">
//         {/* Bubble */}
//         <div className="bg-[#A61E30] text-white text-[11px] px-4 py-1 rounded-[11px] shadow-md">
//           <p className="font-semibold">{label}</p>
//           <p>{payload[0].value} Orders</p>
//         </div>

//         {/* LEFT POINTER */}
//         <div
//           className="absolute bottom-[-6px] left-1 w-0 h-1
//                               border-t-[10px] border-t-[#A61E30]
//                               border-l-[0px] border-l-transparent
//                               border-r-[10px] border-r-transparent"
//         ></div>
//       </div>
//     );
//   }
//   return null;
// };

// export default function AnalyticsPage() {
//   const stats = [
//     {
//       title: "Daily Orders",
//       value: "156",
//       change: "↑ 12%",
//       changeColor: "text-green-600",
//       icon: ShoppingCart,
//       trend: "up",
//     },
//     {
//       title: "Daily Revenue",
//       value: "₦141,000",
//       change: "↑ 5.5%",
//       changeColor: "text-green-600",
//       icon: TrendingUp,
//       trend: "up",
//     },
//     {
//       title: "Avg Delivery",
//       value: "28 min",
//       change: "↑ 2 min faster",
//       changeColor: "text-green-600",
//       icon: CiDeliveryTruck,
//       trend: "up",
//     },
//   ];

//   const dailyOrdersData = [
//     { day: "Mon", orders: 40 },
//     { day: "Tue", orders: 55 },
//     { day: "Wed", orders: 55 },
//     { day: "Thu", orders: 70 },
//     { day: "Fri", orders: 40 },
//     { day: "Sat", orders: 65 },
//     { day: "Sun", orders: 85 },
//   ];

//   const revenueTrendData = [
//     { time: "Mar 7", revenue: 80 },
//     { time: "Mar 8", revenue: 120 },
//     { time: "Mar 9", revenue: 90 },
//     { time: "Mar 10", revenue: 140 },
//     { time: "Mar 11", revenue: 110 },
//     { time: "Mar 12", revenue: 160 },
//     { time: "Mar 13", revenue: 175 },
//   ];

//   const deliveryPerfData = [
//     { hour: "8am", minutes: 32 },
//     { hour: "9am", minutes: 30 },
//     { hour: "10am", minutes: 29 },
//     { hour: "11am", minutes: 31 },
//     { hour: "12pm", minutes: 28 },
//     { hour: "1pm", minutes: 27 },
//     { hour: "2pm", minutes: 30 },
//     { hour: "3pm", minutes: 34 },
//     { hour: "4pm", minutes: 37 },
//     { hour: "5pm", minutes: 38 },
//     { hour: "6pm", minutes: 39 },
//     { hour: "7pm", minutes: 38 },
//     { hour: "8pm", minutes: 40 },
//   ];

//   return (
//     <div className="bg-[#F8F1E6] min-h-screen p-5 sm:p-6 md:p-8 pb-12">
//       <div className="max-w-7xl mx-auto space-y-8">
//         {/* HEADER */}
//         <div>
//           <h1 className="text-2xl mt-10 md:text-3xl font-bold text-gray-800">
//             Analytics
//           </h1>
//           <p className="text-sm text-gray-500 mt-1">
//             Welcome back! Here's today's snap shot
//           </p>
//         </div>

//         {/* STATS */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {stats.map((stat, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-xl p-5 shadow border flex justify-between items-center"
//             >
//               <div>
//                 <p className="text-xs text-gray-500 uppercase">{stat.title}</p>
//                 <h2 className="text-2xl text-black font-bold">{stat.value}</h2>

//                 <div
//                   className={`flex items-center gap-1 text-sm ${stat.changeColor}`}
//                 >
//                   {stat.trend === "up" ? (
//                     <FaArrowUpLong size={12} />
//                   ) : (
//                     <FaArrowDownLong size={12} />
//                   )}
//                   {stat.change}
//                 </div>
//               </div>

//               <div className="bg-orange-50 p-3 rounded-full">
//                 <stat.icon size={22} className="text-orange-600" />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CHARTS */}
//         <div className="grid lg:grid-cols-2 gap-6">
//           {/* DAILY ORDERS */}
//           <div className="bg-white p-5 rounded-2xl shadow">
//             <h3 className="font-bold text-[#1F2937] text-lg mb-4">
//               Daily Orders
//             </h3>

//             <ResponsiveContainer width="100%" height={260}>
//               <BarChart data={dailyOrdersData}>
//                 <CartesianGrid stroke="#f0f0f0" vertical={false} />
//                 <XAxis dataKey="day" />
//                 <YAxis />

//                 {/* ✅ CUSTOM TOOLTIP HERE */}
//                 <Tooltip content={<CustomTooltip />} />

//                 <Bar
//                   dataKey="orders"
//                   fill="#EBDAA3"
//                   radius={[8, 8, 0, 0]}
//                   barSize={30}
//                 />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           {/* REVENUE TREND */}
//           <div className="bg-white p-5 rounded-2xl shadow">
//             <h3 className="font-bold text-lg mb-4 text-[#1F2937]">
//               Revenue Trend
//             </h3>

//             <ResponsiveContainer width="100%" height={260}>
//               <LineChart data={revenueTrendData}>
//                 <CartesianGrid stroke="#f0f0f0" vertical={false} />
//                 <XAxis dataKey="time" />
//                 <YAxis />

//                 {/* <Tooltip /> */}
//                 <Tooltip
//                   cursor={{ fill: "transparent" }}
//                   content={({ active, payload, label }) => {
//                     if (active && payload && payload.length) {
//                       return (
//                         <div className="bg-[#A61E30] text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-lg relative">
//                           <span>{label}</span>
//                           <br />
//                           <span>{payload[0].value} Orders</span>

//                           {/* Sharp pointer */}
//                           <div
//                             className="absolute bottom-[-6px] left-1 w-0 h-1
//                                               border-t-[10px] border-t-[#A61E30]
//                                               border-l-[0px] border-l-transparent
//                                               border-r-[10px] border-r-transparent"
//                           />
//                         </div>
//                       );
//                     }
//                     return null;
//                   }}
//                 />

//                 <Line
//                   type="monotone"
//                   dataKey="revenue"
//                   stroke="#A61E30"
//                   strokeWidth={2.5}
//                   dot={false}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* DELIVERY PERFORMANCE */}
//         <div className="bg-white p-5 rounded-2xl shadow">
//           <h3 className="font-bold text-gray-800 text-lg mb-4">
//             Delivery Performance (Avg Minutes)
//           </h3>

//           <ResponsiveContainer width="100%" height={280}>
//             <LineChart data={deliveryPerfData}>
//               <CartesianGrid stroke="#f0f0f0" vertical={false} />
//               <XAxis dataKey="hour" />
//               <YAxis domain={[20, 45]} />

//               {/* <Tooltip /> */}
//               <Tooltip
//                 cursor={{ fill: "transparent" }}
//                 content={({ active, payload, label }) => {
//                   if (active && payload && payload.length) {
//                     return (
//                       <div className="bg-[#A61E30] text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-lg relative">
//                         <span>{label}</span>
//                         <br />
//                         <span>{payload[0].value} Orders</span>

//                         {/* Sharp pointer */}
//                         <div
//                           className="absolute bottom-[-6px] left-1 w-0 h-1
//                                             border-t-[10px] border-t-[#A61E30]
//                                             border-l-[0px] border-l-transparent
//                                             border-r-[10px] border-r-transparent"  />
//                       </div>
//                     );
//                   }
//                   return null;
//                 }}
//               />

//               <Line
//                 type="monotone"
//                 dataKey="minutes"
//                 stroke="#F4A261"
//                 strokeWidth={2.5}
//                 dot={false}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }








import React, { useState, useEffect } from "react";
import { ShoppingCart, TrendingUp } from "lucide-react";
import { CiDeliveryTruck } from "react-icons/ci";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";

import { getDashboardStats } from "../api/apiServices";

/* ✅ CUSTOM TOOLTIP (LEFT CHAT BUBBLE) */
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="relative">
        <div className="bg-[#A61E30] text-white text-[11px] px-4 py-1 rounded-[11px] shadow-md">
          <p className="font-semibold">{label}</p>
          <p>{payload[0].value} Orders</p>
        </div>
        <div
          className="absolute bottom-[-6px] left-1 w-0 h-1
                      border-t-[10px] border-t-[#A61E30]
                      border-l-[0px] border-l-transparent
                      border-r-[10px] border-r-transparent"
        ></div>
      </div>
    );
  }
  return null;
};

export default function AnalyticsPage() {
  const [stats, setStats] = useState([]);
  const [dailyOrdersData, setDailyOrdersData] = useState([]);
  const [revenueTrendData, setRevenueTrendData] = useState([]);
  const [deliveryPerfData, setDeliveryPerfData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      const response = await getDashboardStats();

      if (response.success) {
        const { stats: apiStats, weekly_chart } = response.data;

        // 1. Stats Cards
        const formattedStats = [
          {
            title: "Daily Orders",
            value: apiStats.total_orders.toLocaleString(),
            change: "↑ 12%",
            changeColor: "text-green-600",
            icon: ShoppingCart,
            trend: "up",
          },
          {
            title: "Daily Revenue",
            value: `₦${Number(apiStats.revenue || 0).toLocaleString()}`,
            change: "↑ 5.5%",
            changeColor: "text-green-600",
            icon: TrendingUp,
            trend: "up",
          },
          {
            title: "Avg Delivery",
            value: `${apiStats.avg_delivery} min`,
            change: "↑ 2 min faster",
            changeColor: "text-green-600",
            icon: CiDeliveryTruck,
            trend: "up",
          },
        ];

        setStats(formattedStats);

        // 2. Daily Orders Chart (from weekly_chart)
        const ordersChart = weekly_chart.length > 0
          ? weekly_chart.map((item) => ({
              day: item.day || item.date?.slice(0, 3) || "Day",
              orders: item.orders || item.count || 0,
            }))
          : [
              { day: "Mon", orders: 0 }, { day: "Tue", orders: 0 },
              { day: "Wed", orders: 0 }, { day: "Thu", orders: 0 },
              { day: "Fri", orders: 0 }, { day: "Sat", orders: 0 },
              { day: "Sun", orders: 0 },
            ];

        setDailyOrdersData(ordersChart);

        // 3. Revenue Trend (placeholder - using same weekly data for now)
        const revenueChart = ordersChart.map((item, index) => ({
          time: item.day,
          revenue: item.orders * (80 + index * 10), // Simple simulation based on orders
        }));
        setRevenueTrendData(revenueChart);

        // 4. Delivery Performance (placeholder - static for now, can be enhanced later)
        setDeliveryPerfData([
          { hour: "8am", minutes: 32 }, { hour: "9am", minutes: 30 },
          { hour: "10am", minutes: 29 }, { hour: "11am", minutes: 31 },
          { hour: "12pm", minutes: 28 }, { hour: "1pm", minutes: 27 },
          { hour: "2pm", minutes: 30 }, { hour: "3pm", minutes: 34 },
          { hour: "4pm", minutes: 37 }, { hour: "5pm", minutes: 38 },
          { hour: "6pm", minutes: 39 }, { hour: "7pm", minutes: 38 },
          { hour: "8pm", minutes: 40 },
        ]);
      }
    } catch (err) {
      console.error("Failed to fetch analytics:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  return (
    <div className="bg-[#F8F1E6] min-h-screen p-5 sm:p-6 md:p-8 pb-12">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* HEADER */}
        <div>
          <h1 className="text-2xl mt-10 md:text-3xl font-bold text-gray-800">
            Analytics
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Welcome back! Here's today's snap shot
          </p>
        </div>

        {/* STATS - Live Data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading
            ? Array(3).fill(0).map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow h-32 animate-pulse" />
              ))
            : stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 shadow border flex justify-between items-center"
                >
                  <div>
                    <p className="text-xs text-gray-500 uppercase">{stat.title}</p>
                    <h2 className="text-2xl text-black font-bold">{stat.value}</h2>

                    <div className={`flex items-center gap-1 text-sm ${stat.changeColor}`}>
                      {stat.trend === "up" ? (
                        <FaArrowUpLong size={12} />
                      ) : (
                        <FaArrowDownLong size={12} />
                      )}
                      {stat.change}
                    </div>
                  </div>

                  <div className="bg-orange-50 p-3 rounded-full">
                    <stat.icon size={22} className="text-orange-600" />
                  </div>
                </div>
              ))}
        </div>

        {/* CHARTS */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* DAILY ORDERS - Live */}
          <div className="bg-white p-5 rounded-2xl shadow">
            <h3 className="font-bold text-[#1F2937] text-lg mb-4">Daily Orders</h3>

            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={dailyOrdersData}>
                <CartesianGrid stroke="#f0f0f0" vertical={false} />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="orders" fill="#EBDAA3" radius={[8, 8, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* REVENUE TREND - Live (simulated from orders) */}
          <div className="bg-white p-5 rounded-2xl shadow">
            <h3 className="font-bold text-lg mb-4 text-[#1F2937]">Revenue Trend</h3>

            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={revenueTrendData}>
                <CartesianGrid stroke="#f0f0f0" vertical={false} />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-[#A61E30] text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-lg relative">
                          <span>{label}</span>
                          <br />
                          <span>₦{payload[0].value.toLocaleString()}</span>
                          <div className="absolute bottom-[-6px] left-1 w-0 h-1 border-t-[10px] border-t-[#A61E30] border-l-transparent border-r-[10px] border-r-transparent" />
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Line type="monotone" dataKey="revenue" stroke="#A61E30" strokeWidth={2.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* DELIVERY PERFORMANCE */}
        <div className="bg-white p-5 rounded-2xl shadow">
          <h3 className="font-bold text-gray-800 text-lg mb-4">
            Delivery Performance (Avg Minutes)
          </h3>

          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={deliveryPerfData}>
              <CartesianGrid stroke="#f0f0f0" vertical={false} />
              <XAxis dataKey="hour" />
              <YAxis domain={[20, 45]} />
              <Tooltip
                cursor={{ fill: "transparent" }}
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-[#A61E30] text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-lg relative">
                        <span>{label}</span>
                        <br />
                        <span>{payload[0].value} min</span>
                        <div className="absolute bottom-[-6px] left-1 w-0 h-1 border-t-[10px] border-t-[#A61E30] border-l-transparent border-r-[10px] border-r-transparent" />
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line type="monotone" dataKey="minutes" stroke="#F4A261" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}