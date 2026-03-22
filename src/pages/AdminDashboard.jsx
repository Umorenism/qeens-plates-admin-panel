// import React from "react";
// import { ShoppingCart, Clock, CheckCircle, DollarSign } from "lucide-react";
// import { CiDeliveryTruck } from "react-icons/ci";
// import { TbCurrencyNaira } from "react-icons/tb";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";
// export const AdminDashboard = () => {
//   const stats = [
//     {
//       title: "Total Orders",
//       value: "156",
//       change: "+12% vs yesterday",
//       icon: ShoppingCart,
//       color: "text-green-600",
//     },
//     {
//       title: "Pending Orders",
//       value: "18",
//       change: "+3 new",
//       icon: Clock,
//       color: "text-orange-600",
//     },
//     {
//       title: "Completed",
//       value: "134",
//       change: "+8% up",
//       icon: CheckCircle,
//       color: "text-green-600",
//     },
//     {
//       title: "Revenue",
//       value: "₦141,000",
//       change: "+15% up",
//       icon: TbCurrencyNaira,
//       color: "text-green-600",
//     },
//     {
//       title: "Avg Delivery",
//       value: "28 min",
//       change: "+2 min faster",
//       icon: CiDeliveryTruck,
//       color: "text-green-600",
//     },
//   ];

//   const orders = [
//     {
//       id: "#ORD-7732",
//       initials: "CA",
//       name: "Chukwuma Adeyemi",
//       total: "12,500",
//       status: "Order Received",
//       date: "Oct 24, 2023",
//     },
//     {
//       id: "#ORD-7731",
//       initials: "AN",
//       name: "Amara Nwosu",
//       total: "8,200",
//       status: "Preparing Food",
//       date: "Oct 24, 2023",
//     },
//     {
//       id: "#ORD-7730",
//       initials: "CO",
//       name: "Chinelo Okoro",
//       total: "15,000",
//       status: "Ready for Pickup",
//       date: "Oct 23, 2023",
//     },
//     {
//       id: "#ORD-7729",
//       initials: "CA",
//       name: "Chukwuma Adeyemi",
//       total: "12,500",
//       status: "Order Received",
//       date: "Oct 24, 2023",
//     },
//   ];

//   const chartData = [
//     { day: "Mon", orders: 40 },
//     { day: "Tue", orders: 55 },
//     { day: "Wed", orders: 55 },
//     { day: "Thu", orders: 70 },
//     { day: "Fri", orders: 40 },
//     { day: "Sat", orders: 65 },
//     { day: "Sun", orders: 85 },
//   ];
//   const bars = [40, 55, 55, 70, 40, 65, 85];

//   const statusDistribution = {
//     completed: 68,
//     pending: 18,
//     cancelled: 4,
//   };

//   const totalOrdersStatus = 68 + 18 + 4;

//   return (
//     <div className="bg-[#F4EBDD] min-h-screen p-6 md:p-8">
//       <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">
//         {/* Header / Title */}
//         <div className="mb-6 mt-8 md:mt-10">
//           <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
//             DashBoard Over View
//           </h1>
//           <p className="text-sm md:text-base text-gray-500 mt-1.5">
//             Welcome back! Here's today's snap shot
//           </p>
//         </div>

//         {/* Stats Cards – icons on the right */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
//           {stats.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start justify-between gap-4 hover:shadow transition-shadow"
//             >
//               <div className="space-y-1.5 flex-1">
//                 <p className="text-xs md:text-sm text-gray-500 font-medium tracking-wide">
//                   {item.title}
//                 </p>
//                 <h2 className="text-xl md:text-2xl font-bold text-gray-900">
//                   {item.value}
//                 </h2>
//                 <p className={`text-xs md:text-sm font-medium ${item.color}`}>
//                   {item.change}
//                 </p>
//               </div>

//               {/* Icon container – light orange bg with subtle effect */}
//               <div className="p-2.5 rounded-full bg-orange-50 border border-orange-100/70 flex-shrink-0">
//                 <item.icon
//                   size={15}
//                   className="text-orange-600"
//                   strokeWidth={2.2}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Charts Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
//           {/* Weekly Orders Chart */}
//           <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100">
//             <h3 className="text-[20px] font-bold text-gray-800 mb-6">
//               Weekly Orders
//             </h3>

//             <ResponsiveContainer width="100%" height={360}>
//               <BarChart
//                 data={chartData}
//                 margin={{ top: 10, right: 10, left: -10, bottom: 10 }}
//               >
//                 {/* Grid Lines */}
//                 <CartesianGrid
//                   stroke="#f5f6f8"
//                   horizontal={true} // lines across Y axis
//                   vertical={true} // lines down X axis
//                 />

//                 {/* Y Axis */}
//                 <YAxis
//                   axisLine={false}
//                   tickLine={false}
//                   ticks={[0, 20, 40, 60, 80]}
//                   tick={{ fill: "#6B7280", fontSize: 12 }}
//                 />

//                 {/* X Axis */}
//                 <XAxis
//                   dataKey="day"
//                   axisLine={false}
//                   tickLine={false}
//                   tick={{ fill: "#6B7280", fontSize: 12 }}
//                 />

//                 <Tooltip
//                   cursor={{ fill: "transparent" }}
//                   content={({ active, payload, label }) => {
//                     if (active && payload && payload.length) {
//                       return (
//                         <div className="bg-[#A61E30] text-white text-sm font-semibold px-4 py-2  rounded-xl shadow-lg relative">
//                           <h1>
//                             <span> {label} </span>
//                           </h1>
//                           <span>{payload[0].value} Orders</span>

//                           {/* Sharp pointer - same as your badge */}
//                           <div
//                             className="absolute bottom-[-6px] left-1 -translate-x-0 w-0 h-0
//               border-t-[10px] border-t-[#A61E30]
//               border-l-[6px] border-l-transparent
//               border-r-[10px] border-r-transparent"
//                           />
//                         </div>
//                       );
//                     }
//                     return null;
//                   }}
//                 />

//                 {/* Bars */}
//                 <Bar
//                   dataKey="orders"
//                   fill="#EBDAA3"
//                   radius={[6, 6, 0, 0]}
//                   barSize={40}
//                 />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100 flex flex-col">
//             <h3 className="text-lg font-semibold text-gray-800 mb-6">
//               Order Status
//             </h3>

//             <div className="flex items-center justify-center my-4 relative">
//               {/* Pending Badge */}
//               <div className="absolute top-2 right-6 z-20 bg-[#A61E30] text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-lg">
//                 Pending: {statusDistribution.pending}
//                 {/* Pointer */}
//                 <div
//                   className="absolute left-0 bottom-[-6px] w-0 h-0
//         absolute left-4 bottom-[-8px] w-0 h-0
//       border-t-[10px] border-t-[#A61E30]
//       border-l-[6px]  border-l-transparent
//       border-r-[10px] border-r-transparent"
//                 ></div>
//               </div>

//               {/* Donut */}
//               <div className="relative w-44 h-44 md:w-48 md:h-48 z-10">
//                 <div
//                   className="w-full h-full rounded-full"
//                   style={{
//                     background: `conic-gradient(
//             #22c55e 0% ${(statusDistribution.completed / totalOrdersStatus) * 100}%,
//             #f59e0b ${(statusDistribution.completed / totalOrdersStatus) * 100}% ${((statusDistribution.completed + statusDistribution.pending) / totalOrdersStatus) * 100}%,
//             #ef4444 ${((statusDistribution.completed + statusDistribution.pending) / totalOrdersStatus) * 100}% 100%
//           )`,
//                   }}
//                 />

//                 {/* Inner hole */}
//                 <div className="absolute inset-6 bg-white rounded-full shadow-inner"></div>
//               </div>
//             </div>

//             {/* Legend */}
//             <div className="space-y-3 text-sm mt-2">
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center gap-2.5">
//                   <div className="w-3.5 h-3.5 bg-green-500 rounded-full" />
//                   <span className="text-gray-700">Completed</span>
//                 </div>
//                 <span className="font-medium">
//                   {statusDistribution.completed}
//                 </span>
//               </div>

//               <div className="flex justify-between items-center">
//                 <div className="flex items-center gap-2.5">
//                   <div className="w-3.5 h-3.5 bg-yellow-500 rounded-full" />
//                   <span className="text-gray-700">Pending</span>
//                 </div>
//                 <span className="font-medium">
//                   {statusDistribution.pending}
//                 </span>
//               </div>

//               <div className="flex justify-between items-center">
//                 <div className="flex items-center gap-2.5">
//                   <div className="w-3.5 h-3.5 bg-red-500 rounded-full" />
//                   <span className="text-gray-700">Cancelled</span>
//                 </div>
//                 <span className="font-medium">
//                   {statusDistribution.cancelled}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Recent Orders Table */}
//         <div className=" rounded-2xl shadow-sm   overflow-hidden">
//           <div className="flex items-center justify-end px-6 py-2">
//             <button className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center gap-1.5">
//               View All →
//             </button>
//           </div>

//           <div className="overflow-x-auto bg-white p-2 rounded-[10px]">
//             <table className="w-full text-sm min-w-[700px]">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="text-left px-6 py-4 font-medium text-gray-600">
//                     ORDER ID
//                   </th>
//                   <th className="text-left px-6 py-4 font-medium text-gray-600">
//                     CUSTOMER
//                   </th>
//                   <th className="text-left px-6 py-4 font-medium text-gray-600">
//                     TOTAL
//                   </th>
//                   <th className="text-left px-6 py-4 font-medium text-gray-600">
//                     STATUS
//                   </th>
//                   <th className="text-left px-6 py-4 font-medium text-gray-600">
//                     DATE
//                   </th>
//                   <th className="w-12"></th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {orders.map((order, index) => (
//                   <tr
//                     key={index}
//                     className="hover:bg-gray-50/60 transition-colors"
//                   >
//                     <td className="px-6 py-4 font-medium text-gray-800">
//                       {order.id}
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="flex items-center gap-3">
//                         <div className="w-9 h-9 rounded-full bg-red-50 text-red-700 font-semibold flex items-center justify-center text-sm">
//                           {order.initials}
//                         </div>
//                         <span className="font-medium text-gray-800">
//                           {order.name}
//                         </span>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 font-medium text-gray-800">
//                       ₦{order.total}
//                     </td>
//                     <td className="px-6 py-4">
//                       <span
//                         className={`px-3 py-1 rounded-full text-xs font-medium ${
//                           order.status === "Order Received"
//                             ? "bg-blue-100 text-blue-700"
//                             : order.status === "Preparing Food"
//                               ? "bg-yellow-100 text-yellow-700"
//                               : "bg-green-100 text-green-700"
//                         }`}
//                       >
//                         {order.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-gray-600">{order.date}</td>
//                     <td className="px-6 py-4 text-gray-500 text-2xl font-light">
//                       …
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };




import React, { useState } from "react";
import { ShoppingCart, Clock, CheckCircle } from "lucide-react";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbCurrencyNaira } from "react-icons/tb";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { IoIosArrowBack,IoIosArrowForward  } from "react-icons/io";
import { FaArrowUpLong } from "react-icons/fa6";

export const AdminDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // ──────────────────────────────────────────────
  // Data – must be defined before using it
  // ──────────────────────────────────────────────

  const stats = [
    {
      title: "Total Orders",
      value: "156",
      change: "↑12% vs yesterday",
      icon: ShoppingCart,
      color: "text-green-600",
    },
    {
      title: "Pending Orders",
      value: "18",
      change: "↓3 new",
      icon: Clock,
      color: "text-orange-600",
    },
    {
      title: "Completed",
      value: "134",
      change: "↑8% up",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      title: "Revenue",
      value: "₦141,000",
      change: "↑15% up",
      icon: TbCurrencyNaira,
      color: "text-green-600",
    },
    {
      title: "Avg Delivery",
      value: "28 min",
      change: "↑2 min faster",
      icon: CiDeliveryTruck,
      color: "text-green-600",
    },
  ];

  const orders = [
    {
      id: "#ORD-7732",
      initials: "CA",
      name: "Chukwuma Adeyemi",
      total: "12,500",
      status: "Order Received",
      date: "Oct 24, 2023",
    },
    {
      id: "#ORD-7731",
      initials: "AN",
      name: "Amara Nwosu",
      total: "8,200",
      status: "Preparing Food",
      date: "Oct 24, 2023",
    },
    {
      id: "#ORD-7730",
      initials: "CO",
      name: "Chinelo Okoro",
      total: "15,000",
      status: "Ready for Pickup",
      date: "Oct 23, 2023",
    },
    {
      id: "#ORD-7729",
      initials: "CA",
      name: "Chukwuma Adeyemi",
      total: "12,500",
      status: "Order Received",
      date: "Oct 24, 2023",
    },
  ];

  // Now we can safely calculate pagination values
  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = orders.slice(startIndex, startIndex + itemsPerPage);

  const chartData = [
    { day: "Mon", orders: 40 },
    { day: "Tue", orders: 55 },
    { day: "Wed", orders: 55 },
    { day: "Thu", orders: 70 },
    { day: "Fri", orders: 40 },
    { day: "Sat", orders: 65 },
    { day: "Sun", orders: 85 },
  ];

  const statusDistribution = {
    completed: 68,
    pending: 18,
    cancelled: 4,
  };

  const totalOrdersStatus = 68 + 18 + 4;

  return (
    <div className="bg-[#F4EBDD] min-h-screen p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">
        {/* Header / Title */}
        <div className="mb-6 mt-8 md:mt-10">
          <h1 className="text-2xl md:text-3xl font-semibold font-roboto text-gray-800">
            DashBoard Over View
          </h1>
          <p className="text-sm md:text-base text-gray-500 font-dm mt-1.5">
            Welcome back! Here's today's snap shot
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start justify-between gap-4 hover:shadow transition-shadow"
            >
              <div className="space-y-1.5 flex-1">
                <p className="text-xs md:text-sm text-gray-500 font-medium tracking-wide">
                  {item.title}
                </p>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  {item.value}
                </h2>
                <p className={`text-xs md:text-sm font-medium ${item.color}`}>
                  {item.change}
                </p>
              </div>
              <div className="p-2.5 rounded-full bg-orange-50 border border-orange-100/70 flex-shrink-0">
                <item.icon size={15} className="text-orange-600" strokeWidth={2.2} />
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Weekly Orders Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100">
            <h3 className="text-[20px] font-bold text-gray-800 mb-6 font-roboto">Weekly Orders</h3>

            <ResponsiveContainer width="100%" height={360}>
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 10 }}>
                <CartesianGrid stroke="#f5f6f8" horizontal vertical />
                <CartesianGrid stroke="#f0f0f0" vertical={false} />
                                <XAxis dataKey="day" />
                                <YAxis />
               
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-[#A61E30] text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-lg relative">
                          <span>{label}</span>
                          <br />
                          <span>{payload[0].value} Orders</span>

                          {/* Sharp pointer */}
                          <div
                            className="absolute bottom-[-6px] left-1 w-0 h-1
                              border-t-[10px] border-t-[#A61E30]
                              border-l-[0px] border-l-transparent
                              border-r-[10px] border-r-transparent"
                          />
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="orders" fill="#EBDAA3" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Order Status */}
          <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Order Status</h3>

            <div className="flex items-center justify-center my-4 relative">
              <div className="absolute top-2 right-6 z-20 bg-[#A61E30] text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-lg">
                Pending: {statusDistribution.pending}
                <div
                  className="absolute left-1 bottom-[-4px] w-0 h-0
                    border-t-[10px] border-t-[#A61E30]
                    border-l-[6px] border-l-transparent
                    border-r-[10px] border-r-transparent"
                />
              </div>

              <div className="relative w-44 h-44 md:w-48 md:h-48 z-10">
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    background: `conic-gradient(
                      #22c55e 0% ${(statusDistribution.completed / totalOrdersStatus) * 100}%,
                      #f59e0b ${(statusDistribution.completed / totalOrdersStatus) * 100}% ${((statusDistribution.completed + statusDistribution.pending) / totalOrdersStatus) * 100}%,
                      #ef4444 ${((statusDistribution.completed + statusDistribution.pending) / totalOrdersStatus) * 100}% 100%
                    )`,
                  }}
                />
                <div className="absolute inset-6 bg-white rounded-full shadow-inner" />
              </div>
            </div>

            <div className="space-y-3 text-sm mt-2">
              {[
                { color: "bg-green-500", label: "Completed", value: statusDistribution.completed },
                { color: "bg-yellow-500", label: "Pending", value: statusDistribution.pending },
                { color: "bg-red-500", label: "Cancelled", value: statusDistribution.cancelled },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-3.5 h-3.5 rounded-full ${item.color}`} />
                    <span className="text-gray-700">{item.label}</span>
                  </div>
                  <span className="font-medium font-roboto font-dm text-gray-800">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Orders Table with Pagination */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
            <button className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center gap-1.5">
              View All →
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[700px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-4 font-medium text-gray-600">ORDER ID</th>
                  <th className="text-left px-6 py-4 font-medium text-gray-600">CUSTOMER</th>
                  <th className="text-left px-6 py-4 font-medium text-gray-600">TOTAL</th>
                  <th className="text-left px-6 py-4 font-medium text-gray-600">STATUS</th>
                  <th className="text-left px-6 py-4 font-medium text-gray-600">DATE</th>
                  <th className="w-12"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedOrders.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-50/60 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-800">{order.id}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-red-50 text-red-700 font-semibold flex items-center justify-center text-sm">
                          {order.initials}
                        </div>
                        <span className="font-medium text-gray-800">{order.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-800">₦{order.total}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === "Order Received"
                            ? "bg-blue-100 text-blue-700"
                            : order.status === "Preparing Food"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{order.date}</td>
                    <td className="px-6 py-4 text-gray-500 text-2xl font-light">…</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          
        </div>
        <div className="flex items-center justify-end px-6 py-4  ">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <button
                className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              >
                <span><IoIosArrowBack /></span>
               
              </button>

              <span className="font-medium">
                Page {currentPage} of {totalPages}
              </span>

              <button
                className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              >
                
                <span><IoIosArrowForward /></span>
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};