




// // // import React, { useState } from "react";
// // // import { ShoppingCart, Clock, CheckCircle } from "lucide-react";
// // // import { CiDeliveryTruck } from "react-icons/ci";
// // // import { TbCurrencyNaira } from "react-icons/tb";
// // // import {
// // //   BarChart,
// // //   Bar,
// // //   XAxis,
// // //   YAxis,
// // //   Tooltip,
// // //   ResponsiveContainer,
// // //   CartesianGrid,
// // // } from "recharts";
// // // import { IoIosArrowBack,IoIosArrowForward  } from "react-icons/io";
// // // import { FaArrowUpLong } from "react-icons/fa6";

// // // export const AdminDashboard = () => {
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const itemsPerPage = 10;

// // //   // ──────────────────────────────────────────────
// // //   // Data – must be defined before using it
// // //   // ──────────────────────────────────────────────

// // //   const stats = [
// // //     {
// // //       title: "Total Orders",
// // //       value: "156",
// // //       change: "↑12% vs yesterday",
// // //       icon: ShoppingCart,
// // //       color: "text-green-600",
// // //     },
// // //     {
// // //       title: "Pending Orders",
// // //       value: "18",
// // //       change: "↓3 new",
// // //       icon: Clock,
// // //       color: "text-orange-600",
// // //     },
// // //     {
// // //       title: "Completed",
// // //       value: "134",
// // //       change: "↑8% up",
// // //       icon: CheckCircle,
// // //       color: "text-green-600",
// // //     },
// // //     {
// // //       title: "Revenue",
// // //       value: "₦141,000",
// // //       change: "↑15% up",
// // //       icon: TbCurrencyNaira,
// // //       color: "text-green-600",
// // //     },
// // //     {
// // //       title: "Avg Delivery",
// // //       value: "28 min",
// // //       change: "↑2 min faster",
// // //       icon: CiDeliveryTruck,
// // //       color: "text-green-600",
// // //     },
// // //   ];

// // //   const orders = [
// // //     {
// // //       id: "#ORD-7732",
// // //       initials: "CA",
// // //       name: "Chukwuma Adeyemi",
// // //       total: "12,500",
// // //       status: "Order Received",
// // //       date: "Oct 24, 2023",
// // //     },
// // //     {
// // //       id: "#ORD-7731",
// // //       initials: "AN",
// // //       name: "Amara Nwosu",
// // //       total: "8,200",
// // //       status: "Preparing Food",
// // //       date: "Oct 24, 2023",
// // //     },
// // //     {
// // //       id: "#ORD-7730",
// // //       initials: "CO",
// // //       name: "Chinelo Okoro",
// // //       total: "15,000",
// // //       status: "Ready for Pickup",
// // //       date: "Oct 23, 2023",
// // //     },
// // //     {
// // //       id: "#ORD-7729",
// // //       initials: "CA",
// // //       name: "Chukwuma Adeyemi",
// // //       total: "12,500",
// // //       status: "Order Received",
// // //       date: "Oct 24, 2023",
// // //     },
// // //   ];

// // //   // Now we can safely calculate pagination values
// // //   const totalPages = Math.ceil(orders.length / itemsPerPage);
// // //   const startIndex = (currentPage - 1) * itemsPerPage;
// // //   const paginatedOrders = orders.slice(startIndex, startIndex + itemsPerPage);

// // //   const chartData = [
// // //     { day: "Mon", orders: 40 },
// // //     { day: "Tue", orders: 55 },
// // //     { day: "Wed", orders: 55 },
// // //     { day: "Thu", orders: 70 },
// // //     { day: "Fri", orders: 40 },
// // //     { day: "Sat", orders: 65 },
// // //     { day: "Sun", orders: 85 },
// // //   ];

// // //   const statusDistribution = {
// // //     completed: 68,
// // //     pending: 18,
// // //     cancelled: 4,
// // //   };

// // //   const totalOrdersStatus = 68 + 18 + 4;

// // //   return (
// // //     <div className="bg-[#F4EBDD] min-h-screen p-6 md:p-8">
// // //       <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">
// // //         {/* Header / Title */}
// // //         <div className="mb-6 mt-8 md:mt-10">
// // //           <h1 className="text-2xl md:text-3xl font-semibold font-roboto text-gray-800">
// // //             DashBoard Over View
// // //           </h1>
// // //           <p className="text-sm md:text-base text-gray-500 font-dm mt-1.5">
// // //             Welcome back! Here's today's snap shot
// // //           </p>
// // //         </div>

// // //         {/* Stats Cards */}
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
// // //           {stats.map((item, index) => (
// // //             <div
// // //               key={index}
// // //               className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start justify-between gap-4 hover:shadow transition-shadow"
// // //             >
// // //               <div className="space-y-1.5 flex-1">
// // //                 <p className="text-xs md:text-sm text-gray-500 font-medium tracking-wide">
// // //                   {item.title}
// // //                 </p>
// // //                 <h2 className="text-xl md:text-2xl font-bold text-gray-900">
// // //                   {item.value}
// // //                 </h2>
// // //                 <p className={`text-xs md:text-sm font-medium ${item.color}`}>
// // //                   {item.change}
// // //                 </p>
// // //               </div>
// // //               <div className="p-2.5 rounded-full bg-orange-50 border border-orange-100/70 flex-shrink-0">
// // //                 <item.icon size={15} className="text-orange-600" strokeWidth={2.2} />
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Charts Section */}
// // //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
// // //           {/* Weekly Orders Chart */}
// // //           <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100">
// // //             <h3 className="text-[20px] font-bold text-gray-800 mb-6 font-roboto">Weekly Orders</h3>

// // //             <ResponsiveContainer width="100%" height={360}>
// // //               <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 10 }}>
// // //                 <CartesianGrid stroke="#f5f6f8" horizontal vertical />
// // //                 <CartesianGrid stroke="#f0f0f0" vertical={false} />
// // //                                 <XAxis dataKey="day" />
// // //                                 <YAxis />
               
// // //                 <Tooltip
// // //                   cursor={{ fill: "transparent" }}
// // //                   content={({ active, payload, label }) => {
// // //                     if (active && payload && payload.length) {
// // //                       return (
// // //                         <div className="bg-[#A61E30] text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-lg relative">
// // //                           <span>{label}</span>
// // //                           <br />
// // //                           <span>{payload[0].value} Orders</span>

// // //                           {/* Sharp pointer */}
// // //                           <div
// // //                             className="absolute bottom-[-6px] left-1 w-0 h-1
// // //                               border-t-[10px] border-t-[#A61E30]
// // //                               border-l-[0px] border-l-transparent
// // //                               border-r-[10px] border-r-transparent"
// // //                           />
// // //                         </div>
// // //                       );
// // //                     }
// // //                     return null;
// // //                   }}
// // //                 />
// // //                 <Bar dataKey="orders" fill="#EBDAA3" radius={[6, 6, 0, 0]} barSize={40} />
// // //               </BarChart>
// // //             </ResponsiveContainer>
// // //           </div>

// // //           {/* Order Status */}
// // //           <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100 flex flex-col">
// // //             <h3 className="text-lg font-semibold text-gray-800 mb-6">Order Status</h3>

// // //             <div className="flex items-center justify-center my-4 relative">
// // //               <div className="absolute top-2 right-6 z-20 bg-[#A61E30] text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-lg">
// // //                 Pending: {statusDistribution.pending}
// // //                 <div
// // //                   className="absolute left-1 bottom-[-4px] w-0 h-0
// // //                     border-t-[10px] border-t-[#A61E30]
// // //                     border-l-[6px] border-l-transparent
// // //                     border-r-[10px] border-r-transparent"
// // //                 />
// // //               </div>

// // //               <div className="relative w-44 h-44 md:w-48 md:h-48 z-10">
// // //                 <div
// // //                   className="w-full h-full rounded-full"
// // //                   style={{
// // //                     background: `conic-gradient(
// // //                       #22c55e 0% ${(statusDistribution.completed / totalOrdersStatus) * 100}%,
// // //                       #f59e0b ${(statusDistribution.completed / totalOrdersStatus) * 100}% ${((statusDistribution.completed + statusDistribution.pending) / totalOrdersStatus) * 100}%,
// // //                       #ef4444 ${((statusDistribution.completed + statusDistribution.pending) / totalOrdersStatus) * 100}% 100%
// // //                     )`,
// // //                   }}
// // //                 />
// // //                 <div className="absolute inset-6 bg-white rounded-full shadow-inner" />
// // //               </div>
// // //             </div>

// // //             <div className="space-y-3 text-sm mt-2">
// // //               {[
// // //                 { color: "bg-green-500", label: "Completed", value: statusDistribution.completed },
// // //                 { color: "bg-yellow-500", label: "Pending", value: statusDistribution.pending },
// // //                 { color: "bg-red-500", label: "Cancelled", value: statusDistribution.cancelled },
// // //               ].map((item) => (
// // //                 <div key={item.label} className="flex justify-between items-center">
// // //                   <div className="flex items-center gap-2.5">
// // //                     <div className={`w-3.5 h-3.5 rounded-full ${item.color}`} />
// // //                     <span className="text-gray-700">{item.label}</span>
// // //                   </div>
// // //                   <span className="font-medium font-roboto font-dm text-gray-800">{item.value}</span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Recent Orders Table with Pagination */}
// // //         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
// // //           <div className="flex items-center justify-between px-6 py-4 border-b">
// // //             <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
// // //             <button className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center gap-1.5">
// // //               View All →
// // //             </button>
// // //           </div>

// // //           <div className="overflow-x-auto">
// // //             <table className="w-full text-sm min-w-[700px]">
// // //               <thead className="bg-gray-50">
// // //                 <tr>
// // //                   <th className="text-left px-6 py-4 font-medium text-gray-600">ORDER ID</th>
// // //                   <th className="text-left px-6 py-4 font-medium text-gray-600">CUSTOMER</th>
// // //                   <th className="text-left px-6 py-4 font-medium text-gray-600">TOTAL</th>
// // //                   <th className="text-left px-6 py-4 font-medium text-gray-600">STATUS</th>
// // //                   <th className="text-left px-6 py-4 font-medium text-gray-600">DATE</th>
// // //                   <th className="w-12"></th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody className="divide-y divide-gray-100">
// // //                 {paginatedOrders.map((order, index) => (
// // //                   <tr key={index} className="hover:bg-gray-50/60 transition-colors">
// // //                     <td className="px-6 py-4 font-medium text-gray-800">{order.id}</td>
// // //                     <td className="px-6 py-4">
// // //                       <div className="flex items-center gap-3">
// // //                         <div className="w-9 h-9 rounded-full bg-red-50 text-red-700 font-semibold flex items-center justify-center text-sm">
// // //                           {order.initials}
// // //                         </div>
// // //                         <span className="font-medium text-gray-800">{order.name}</span>
// // //                       </div>
// // //                     </td>
// // //                     <td className="px-6 py-4 font-medium text-gray-800">₦{order.total}</td>
// // //                     <td className="px-6 py-4">
// // //                       <span
// // //                         className={`px-3 py-1 rounded-full text-xs font-medium ${
// // //                           order.status === "Order Received"
// // //                             ? "bg-blue-100 text-blue-700"
// // //                             : order.status === "Preparing Food"
// // //                             ? "bg-yellow-100 text-yellow-700"
// // //                             : "bg-green-100 text-green-700"
// // //                         }`}
// // //                       >
// // //                         {order.status}
// // //                       </span>
// // //                     </td>
// // //                     <td className="px-6 py-4 text-gray-600">{order.date}</td>
// // //                     <td className="px-6 py-4 text-gray-500 text-2xl font-light">…</td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>

// // //           {/* Pagination */}
          
// // //         </div>
// // //         <div className="flex items-center justify-end px-6 py-4  ">
// // //             <div className="flex items-center gap-4 text-sm text-gray-600">
// // //               <button
// // //                 className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
// // //                 disabled={currentPage === 1}
// // //                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// // //               >
// // //                 <span><IoIosArrowBack /></span>
               
// // //               </button>

// // //               <span className="font-medium">
// // //                 Page {currentPage} of {totalPages}
// // //               </span>

// // //               <button
// // //                 className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
// // //                 disabled={currentPage === totalPages}
// // //                 onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// // //               >
                
// // //                 <span><IoIosArrowForward /></span>
// // //               </button>
// // //             </div>
// // //           </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };










// // // import React, { useState, useEffect } from "react";
// // // import { ShoppingCart, Clock, CheckCircle } from "lucide-react";
// // // import { CiDeliveryTruck } from "react-icons/ci";
// // // import { TbCurrencyNaira } from "react-icons/tb";
// // // import {
// // //   BarChart,
// // //   Bar,
// // //   XAxis,
// // //   YAxis,
// // //   Tooltip,
// // //   ResponsiveContainer,
// // //   CartesianGrid,
// // // } from "recharts";
// // // import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// // // import { getDashboardStats } from "../api/apiServices"; // ← Import this

// // // export const AdminDashboard = () => {
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const itemsPerPage = 10;

// // //   const [statsData, setStatsData] = useState(null);
// // //   const [recentOrders, setRecentOrders] = useState([]);
// // //   const [chartData, setChartData] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   // Fetch Dashboard Stats
// // //   const fetchDashboard = async () => {
// // //     setLoading(true);
// // //     try {
// // //       const response = await getDashboardStats();

// // //       if (response.success) {
// // //         const { stats, weekly_chart, recent_orders } = response.data;

// // //         // Format Stats Cards
// // //         const formattedStats = [
// // //           {
// // //             title: "Total Orders",
// // //             value: stats.total_orders.toLocaleString(),
// // //             change: "↑12% vs yesterday", // You can make this dynamic later
// // //             icon: ShoppingCart,
// // //             color: "text-green-600",
// // //           },
// // //           {
// // //             title: "Pending Orders",
// // //             value: stats.pending_orders.toLocaleString(),
// // //             change: "↓3 new",
// // //             icon: Clock,
// // //             color: "text-orange-600",
// // //           },
// // //           {
// // //             title: "Completed",
// // //             value: stats.completed_orders.toLocaleString(),
// // //             change: "↑8% up",
// // //             icon: CheckCircle,
// // //             color: "text-green-600",
// // //           },
// // //           {
// // //             title: "Revenue",
// // //             value: `₦${Number(stats.revenue).toLocaleString()}`,
// // //             change: "↑15% up",
// // //             icon: TbCurrencyNaira,
// // //             color: "text-green-600",
// // //           },
// // //           {
// // //             title: "Avg Delivery",
// // //             value: `${stats.avg_delivery} min`,
// // //             change: "↑2 min faster",
// // //             icon: CiDeliveryTruck,
// // //             color: "text-green-600",
// // //           },
// // //         ];

// // //         setStatsData(formattedStats);

// // //         // Recent Orders
// // //         const formattedOrders = recent_orders.map((order) => ({
// // //           id: `#ORD-${order.id || order.order_id}`,
// // //           initials: (order.customer_name || order.user?.name || "XX")
// // //             .split(" ")
// // //             .map((n) => n[0])
// // //             .join("")
// // //             .toUpperCase()
// // //             .slice(0, 2),
// // //           name: order.customer_name || order.user?.name || "Unknown Customer",
// // //           total: Number(order.total_amount || 0).toLocaleString(),
// // //           status: order.status 
// // //             ? order.status.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
// // //             : "Order Received",
// // //           date: order.created_at 
// // //             ? new Date(order.created_at).toLocaleDateString("en-US", {
// // //                 month: "short",
// // //                 day: "numeric",
// // //                 year: "numeric",
// // //               })
// // //             : "N/A",
// // //         }));

// // //         setRecentOrders(formattedOrders);

// // //         // Weekly Chart (fallback if empty)
// // //         const formattedChart = weekly_chart.length > 0 
// // //           ? weekly_chart.map((item) => ({
// // //               day: item.day || item.date,
// // //               orders: item.orders || item.count || 0,
// // //             }))
// // //           : [
// // //               { day: "Mon", orders: 0 },
// // //               { day: "Tue", orders: 0 },
// // //               { day: "Wed", orders: 0 },
// // //               { day: "Thu", orders: 0 },
// // //               { day: "Fri", orders: 0 },
// // //               { day: "Sat", orders: 0 },
// // //               { day: "Sun", orders: 0 },
// // //             ];

// // //         setChartData(formattedChart);
// // //       }
// // //     } catch (err) {
// // //       console.error("Failed to load dashboard:", err);
// // //       // Keep empty states
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchDashboard();
// // //   }, []);

// // //   // Pagination
// // //   const totalPages = Math.ceil(recentOrders.length / itemsPerPage);
// // //   const startIndex = (currentPage - 1) * itemsPerPage;
// // //   const paginatedOrders = recentOrders.slice(startIndex, startIndex + itemsPerPage);

// // //   // Status Distribution (You can enhance this later when backend sends real data)
// // //   const statusDistribution = {
// // //     completed: statsData ? parseInt(statsData[2].value) : 0,
// // //     pending: statsData ? parseInt(statsData[1].value) : 0,
// // //     cancelled: 0, // Backend doesn't send yet
// // //   };

// // //   const totalOrdersStatus = statusDistribution.completed + statusDistribution.pending + statusDistribution.cancelled || 1;

// // //   return (
// // //     <div className="bg-[#F4EBDD] min-h-screen p-6 md:p-8">
// // //       <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">
// // //         {/* Header / Title */}
// // //         <div className="mb-6 mt-8 md:mt-10">
// // //           <h1 className="text-2xl md:text-3xl font-semibold font-roboto text-gray-800">
// // //             DashBoard Over View
// // //           </h1>
// // //           <p className="text-sm md:text-base text-gray-500 font-dm mt-1.5">
// // //             Welcome back! Here's today's snap shot
// // //           </p>
// // //         </div>

// // //         {/* Stats Cards - Live Data */}
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
// // //           {loading ? (
// // //             Array(5).fill(0).map((_, i) => (
// // //               <div key={i} className="bg-white rounded-xl p-5 shadow-sm h-32 animate-pulse" />
// // //             ))
// // //           ) : (
// // //             statsData?.map((item, index) => (
// // //               <div
// // //                 key={index}
// // //                 className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start justify-between gap-4 hover:shadow transition-shadow"
// // //               >
// // //                 <div className="space-y-1.5 flex-1">
// // //                   <p className="text-xs md:text-sm text-gray-500 font-medium tracking-wide">
// // //                     {item.title}
// // //                   </p>
// // //                   <h2 className="text-xl md:text-2xl font-bold text-gray-900">
// // //                     {item.value}
// // //                   </h2>
// // //                   <p className={`text-xs md:text-sm font-medium ${item.color}`}>
// // //                     {item.change}
// // //                   </p>
// // //                 </div>
// // //                 <div className="p-2.5 rounded-full bg-orange-50 border border-orange-100/70 flex-shrink-0">
// // //                   <item.icon size={15} className="text-orange-600" strokeWidth={2.2} />
// // //                 </div>
// // //               </div>
// // //             ))
// // //           )}
// // //         </div>

// // //         {/* Charts Section */}
// // //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
// // //           {/* Weekly Orders Chart */}
// // //           <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100">
// // //             <h3 className="text-[20px] font-bold text-gray-800 mb-6 font-roboto">Weekly Orders</h3>

// // //             <ResponsiveContainer width="100%" height={360}>
// // //               <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 10 }}>
// // //                 <CartesianGrid stroke="#f5f6f8" />
// // //                 <XAxis dataKey="day" />
// // //                 <YAxis />
// // //                 <Tooltip
// // //                   cursor={{ fill: "transparent" }}
// // //                   content={({ active, payload, label }) => {
// // //                     if (active && payload && payload.length) {
// // //                       return (
// // //                         <div className="bg-[#A61E30] text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-lg relative">
// // //                           <span>{label}</span>
// // //                           <br />
// // //                           <span>{payload[0].value} Orders</span>
// // //                           <div className="absolute bottom-[-6px] left-1 w-0 h-1 border-t-[10px] border-t-[#A61E30] border-l-[6px] border-l-transparent border-r-[10px] border-r-transparent" />
// // //                         </div>
// // //                       );
// // //                     }
// // //                     return null;
// // //                   }}
// // //                 />
// // //                 <Bar dataKey="orders" fill="#EBDAA3" radius={[6, 6, 0, 0]} barSize={40} />
// // //               </BarChart>
// // //             </ResponsiveContainer>
// // //           </div>

// // //           {/* Order Status - Live */}
// // //           <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100 flex flex-col">
// // //             <h3 className="text-lg font-semibold text-gray-800 mb-6">Order Status</h3>

// // //             <div className="flex items-center justify-center my-4 relative">
// // //               <div className="absolute top-2 right-6 z-20 bg-[#A61E30] text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-lg">
// // //                 Pending: {statusDistribution.pending}
// // //                 <div className="absolute left-1 bottom-[-4px] w-0 h-0 border-t-[10px] border-t-[#A61E30] border-l-[6px] border-l-transparent border-r-[10px] border-r-transparent" />
// // //               </div>

// // //               <div className="relative w-44 h-44 md:w-48 md:h-48 z-10">
// // //                 <div
// // //                   className="w-full h-full rounded-full"
// // //                   style={{
// // //                     background: `conic-gradient(
// // //                       #22c55e 0% ${(statusDistribution.completed / totalOrdersStatus) * 100}%,
// // //                       #f59e0b ${(statusDistribution.completed / totalOrdersStatus) * 100}% ${((statusDistribution.completed + statusDistribution.pending) / totalOrdersStatus) * 100}%,
// // //                       #ef4444 ${((statusDistribution.completed + statusDistribution.pending) / totalOrdersStatus) * 100}% 100%
// // //                     )`,
// // //                   }}
// // //                 />
// // //                 <div className="absolute inset-6 bg-white rounded-full shadow-inner" />
// // //               </div>
// // //             </div>

// // //             <div className="space-y-3 text-sm mt-2">
// // //               {[
// // //                 { color: "bg-green-500", label: "Completed", value: statusDistribution.completed },
// // //                 { color: "bg-yellow-500", label: "Pending", value: statusDistribution.pending },
// // //                 { color: "bg-red-500", label: "Cancelled", value: statusDistribution.cancelled },
// // //               ].map((item) => (
// // //                 <div key={item.label} className="flex justify-between items-center">
// // //                   <div className="flex items-center gap-2.5">
// // //                     <div className={`w-3.5 h-3.5 rounded-full ${item.color}`} />
// // //                     <span className="text-gray-700">{item.label}</span>
// // //                   </div>
// // //                   <span className="font-medium font-roboto font-dm text-gray-800">{item.value}</span>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Recent Orders Table */}
// // //         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
// // //           <div className="flex items-center justify-between px-6 py-4 border-b">
// // //             <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
// // //             <button className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center gap-1.5">
// // //               View All →
// // //             </button>
// // //           </div>

// // //           <div className="overflow-x-auto">
// // //             <table className="w-full text-sm min-w-[700px]">
// // //               <thead className="bg-gray-50">
// // //                 <tr>
// // //                   <th className="text-left px-6 py-4 font-medium text-gray-600">ORDER ID</th>
// // //                   <th className="text-left px-6 py-4 font-medium text-gray-600">CUSTOMER</th>
// // //                   <th className="text-left px-6 py-4 font-medium text-gray-600">TOTAL</th>
// // //                   <th className="text-left px-6 py-4 font-medium text-gray-600">STATUS</th>
// // //                   <th className="text-left px-6 py-4 font-medium text-gray-600">DATE</th>
// // //                   <th className="w-12"></th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody className="divide-y divide-gray-100">
// // //                 {loading ? (
// // //                   <tr><td colSpan="6" className="py-16 text-center text-gray-500">Loading recent orders...</td></tr>
// // //                 ) : paginatedOrders.length === 0 ? (
// // //                   <tr><td colSpan="6" className="py-16 text-center text-gray-500">No recent orders yet</td></tr>
// // //                 ) : (
// // //                   paginatedOrders.map((order, index) => (
// // //                     <tr key={index} className="hover:bg-gray-50/60 transition-colors">
// // //                       <td className="px-6 py-4 font-medium text-gray-800">{order.id}</td>
// // //                       <td className="px-6 py-4">
// // //                         <div className="flex items-center gap-3">
// // //                           <div className="w-9 h-9 rounded-full bg-red-50 text-red-700 font-semibold flex items-center justify-center text-sm">
// // //                             {order.initials}
// // //                           </div>
// // //                           <span className="font-medium text-gray-800">{order.name}</span>
// // //                         </div>
// // //                       </td>
// // //                       <td className="px-6 py-4 font-medium text-gray-800">₦{order.total}</td>
// // //                       <td className="px-6 py-4">
// // //                         <span
// // //                           className={`px-3 py-1 rounded-full text-xs font-medium ${
// // //                             order.status.includes("Received") || order.status.includes("Order")
// // //                               ? "bg-blue-100 text-blue-700"
// // //                               : order.status.includes("Preparing") || order.status.includes("Processing")
// // //                               ? "bg-yellow-100 text-yellow-700"
// // //                               : "bg-green-100 text-green-700"
// // //                           }`}
// // //                         >
// // //                           {order.status}
// // //                         </span>
// // //                       </td>
// // //                       <td className="px-6 py-4 text-gray-600">{order.date}</td>
// // //                       <td className="px-6 py-4 text-gray-500 text-2xl font-light">…</td>
// // //                     </tr>
// // //                   ))
// // //                 )}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         </div>

// // //         {/* Pagination */}
// // //         <div className="flex items-center justify-end px-6 py-4">
// // //           <div className="flex items-center gap-4 text-sm text-gray-600">
// // //             <button
// // //               className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
// // //               disabled={currentPage === 1}
// // //               onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// // //             >
// // //               <IoIosArrowBack />
// // //             </button>

// // //             <span className="font-medium">
// // //               Page {currentPage} of {totalPages || 1}
// // //             </span>

// // //             <button
// // //               className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
// // //               disabled={currentPage === totalPages || totalPages === 0}
// // //               onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// // //             >
// // //               <IoIosArrowForward />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };




// // import React, { useState, useEffect } from "react";
// // import { ShoppingCart, Clock, CheckCircle } from "lucide-react";
// // import { CiDeliveryTruck } from "react-icons/ci";
// // import { TbCurrencyNaira } from "react-icons/tb";
// // import {
// //   BarChart,
// //   Bar,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   ResponsiveContainer,
// //   CartesianGrid,
// // } from "recharts";
// // import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// // // Import both services
// // import { getDashboardStats, getAllOrders } from "../api/apiServices"; 

// // export const AdminDashboard = () => {
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const itemsPerPage = 10;

// //   const [statsData, setStatsData] = useState(null);
// //   const [recentOrders, setRecentOrders] = useState([]);
// //   const [chartData, setChartData] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   const fetchDashboardData = async () => {
// //     setLoading(true);
// //     try {
// //       // Run both API calls in parallel for better performance
// //       const [statsRes, ordersRes] = await Promise.all([
// //         getDashboardStats(),
// //         getAllOrders({ page: currentPage }) 
// //       ]);

// //       // 1. Process Dashboard Stats & Chart
// //       if (statsRes.success) {
// //         const { stats, weekly_chart } = statsRes.data;

// //         const formattedStats = [
// //           {
// //             title: "Total Orders",
// //             value: (stats?.total_orders || 0).toLocaleString(),
// //             change: "↑12% vs yesterday",
// //             icon: ShoppingCart,
// //             color: "text-green-600",
// //           },
// //           {
// //             title: "Pending Orders",
// //             value: (stats?.pending_orders || 0).toLocaleString(),
// //             change: "↓3 new",
// //             icon: Clock,
// //             color: "text-orange-600",
// //           },
// //           {
// //             title: "Completed",
// //             value: (stats?.completed_orders || 0).toLocaleString(),
// //             change: "↑8% up",
// //             icon: CheckCircle,
// //             color: "text-green-600",
// //           },
// //           {
// //             title: "Revenue",
// //             value: `₦${Number(stats?.revenue || 0).toLocaleString()}`,
// //             change: "↑15% up",
// //             icon: TbCurrencyNaira,
// //             color: "text-green-600",
// //           },
// //           {
// //             title: "Avg Delivery",
// //             value: `${stats?.avg_delivery || 0} min`,
// //             change: "↑2 min faster",
// //             icon: CiDeliveryTruck,
// //             color: "text-green-600",
// //           },
// //         ];
// //         setStatsData(formattedStats);

// //         const formattedChart = weekly_chart?.map((item) => ({
// //           day: item.day || item.date,
// //           orders: item.orders || item.count || 0,
// //         })) || [];
// //         setChartData(formattedChart);
// //       }

// //       // 2. Process Recent Orders using your specific getAllOrders endpoint
// //       if (ordersRes.success) {
// //         const formattedOrders = ordersRes.data.orders.map((order) => ({
// //           id: order.order_id, // e.g., "#QP-BMEF0E"
// //           dbId: order.id,
// //           initials: order.customer?.initials || "??",
// //           name: order.customer?.name || "Unknown",
// //           total: order.total, // Using the pre-formatted string from your JSON
// //           status: order.status,
// //           date: order.date,
// //         }));
// //         setRecentOrders(formattedOrders);
// //       }

// //     } catch (err) {
// //       console.error("Dashboard fetch error:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchDashboardData();
// //   }, [currentPage]); // Re-fetch orders when page changes

// //   const totalPages = Math.ceil(recentOrders.length / itemsPerPage);
  
// //   // Logic for the donut chart remains based on stats
// //   const statusDistribution = {
// //     completed: statsData ? parseInt(statsData[2].value.replace(/,/g, '')) : 0,
// //     pending: statsData ? parseInt(statsData[1].value.replace(/,/g, '')) : 0,
// //     cancelled: 0,
// //   };
// //   const totalOrdersStatus = statusDistribution.completed + statusDistribution.pending || 1;

// //   return (
// //     <div className="bg-[#F4EBDD] min-h-screen p-6 md:p-8">
// //       <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">
        
// //         {/* Header */}
// //         <div className="mb-6 mt-8 md:mt-10">
// //           <h1 className="text-2xl md:text-3xl font-semibold font-roboto text-gray-800">
// //             DashBoard Over View
// //           </h1>
// //           <p className="text-sm md:text-base text-gray-500 font-dm mt-1.5">
// //             Welcome back! Here's today's snap shot
// //           </p>
// //         </div>

// //         {/* Stats Cards */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
// //           {loading && !statsData ? (
// //             Array(5).fill(0).map((_, i) => (
// //               <div key={i} className="bg-white rounded-xl p-5 shadow-sm h-32 animate-pulse" />
// //             ))
// //           ) : (
// //             statsData?.map((item, index) => (
// //               <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start justify-between gap-4">
// //                 <div className="space-y-1.5 flex-1">
// //                   <p className="text-xs md:text-sm text-gray-500 font-medium">{item.title}</p>
// //                   <h2 className="text-xl md:text-2xl font-bold text-gray-900">{item.value}</h2>
// //                   <p className={`text-xs md:text-sm font-medium ${item.color}`}>{item.change}</p>
// //                 </div>
// //                 <div className="p-2.5 rounded-full bg-orange-50 border border-orange-100/70">
// //                   <item.icon size={15} className="text-orange-600" />
// //                 </div>
// //               </div>
// //             ))
// //           )}
// //         </div>

// //         {/* Charts Section */}
// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
// //           {/* Weekly Orders */}
// //           <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100">
// //             <h3 className="text-[20px] font-bold text-gray-800 mb-6 font-roboto">Weekly Orders</h3>
// //             <ResponsiveContainer width="100%" height={360}>
// //               <BarChart data={chartData}>
// //                 <CartesianGrid stroke="#f5f6f8" vertical={false} />
// //                 <XAxis dataKey="day" axisLine={false} tickLine={false} />
// //                 <YAxis axisLine={false} tickLine={false} />
// //                 <Tooltip cursor={{ fill: "transparent" }} />
// //                 <Bar dataKey="orders" fill="#EBDAA3" radius={[6, 6, 0, 0]} barSize={40} />
// //               </BarChart>
// //             </ResponsiveContainer>
// //           </div>

// //           {/* Status Donut */}
// //           <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100 flex flex-col">
// //             <h3 className="text-lg font-semibold text-gray-800 mb-6">Order Status</h3>
// //             <div className="flex items-center justify-center my-4 relative">
// //               <div className="relative w-44 h-44 md:w-48 md:h-48">
// //                 <div
// //                   className="w-full h-full rounded-full"
// //                   style={{
// //                     background: `conic-gradient(
// //                       #22c55e 0% ${(statusDistribution.completed / totalOrdersStatus) * 100}%,
// //                       #f59e0b ${(statusDistribution.completed / totalOrdersStatus) * 100}% 100%
// //                     )`,
// //                   }}
// //                 />
// //                 <div className="absolute inset-6 bg-white rounded-full shadow-inner" />
// //               </div>
// //             </div>
// //             <div className="space-y-3 mt-4">
// //               <StatusLabel color="bg-green-500" label="Completed" value={statusDistribution.completed} />
// //               <StatusLabel color="bg-yellow-500" label="Pending" value={statusDistribution.pending} />
// //             </div>
// //           </div>
// //         </div>

// //         {/* Recent Orders Table (Using your API Data) */}
// //         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
// //           <div className="flex items-center justify-between px-6 py-4 border-b">
// //             <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
// //             <button className="text-red-600 text-sm font-medium">View All →</button>
// //           </div>

// //           <div className="overflow-x-auto">
// //             <table className="w-full text-sm min-w-[700px]">
// //               <thead className="bg-gray-50">
// //                 <tr>
// //                   <th className="text-left px-6 py-4 font-medium text-gray-600">ORDER ID</th>
// //                   <th className="text-left px-6 py-4 font-medium text-gray-600">CUSTOMER</th>
// //                   <th className="text-left px-6 py-4 font-medium text-gray-600">TOTAL</th>
// //                   <th className="text-left px-6 py-4 font-medium text-gray-600">STATUS</th>
// //                   <th className="text-left px-6 py-4 font-medium text-gray-600">DATE</th>
// //                   <th className="w-12"></th>
// //                 </tr>
// //               </thead>
// //               <tbody className="divide-y divide-gray-100">
// //                 {recentOrders.map((order, index) => (
// //                   <tr key={index} className="hover:bg-gray-50/60">
// //                     <td className="px-6 py-4 font-medium text-gray-800">{order.id}</td>
// //                     <td className="px-6 py-4">
// //                       <div className="flex items-center gap-3">
// //                         <div className="w-9 h-9 rounded-full bg-red-50 text-red-700 font-semibold flex items-center justify-center text-xs">
// //                           {order.initials}
// //                         </div>
// //                         <span className="font-medium text-gray-800">{order.name}</span>
// //                       </div>
// //                     </td>
// //                     <td className="px-6 py-4 font-medium text-gray-800">₦{order.total}</td>
// //                     <td className="px-6 py-4">
// //                       <span className={`px-3 py-1 rounded-full text-xs font-medium ${
// //                         order.status === "Paid" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
// //                       }`}>
// //                         {order.status}
// //                       </span>
// //                     </td>
// //                     <td className="px-6 py-4 text-gray-600">{order.date}</td>
// //                     <td className="px-6 py-4 text-gray-400 text-xl">…</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>

// //         {/* Pagination */}
// //         <div className="flex items-center justify-end px-6 pb-6">
// //           <div className="flex items-center gap-4 text-sm text-gray-600">
// //             <button 
// //               onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
// //               disabled={currentPage === 1}
// //               className="p-2 hover:bg-gray-100 rounded disabled:opacity-30"
// //             >
// //               <IoIosArrowBack />
// //             </button>
// //             <span className="font-medium">Page {currentPage}</span>
// //             <button 
// //               onClick={() => setCurrentPage(p => p + 1)}
// //               className="p-2 hover:bg-gray-100 rounded"
// //             >
// //               <IoIosArrowForward />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Simple helper component for Status Legend
// // const StatusLabel = ({ color, label, value }) => (
// //   <div className="flex justify-between items-center">
// //     <div className="flex items-center gap-2.5">
// //       <div className={`w-3 h-3 rounded-full ${color}`} />
// //       <span className="text-gray-700">{label}</span>
// //     </div>
// //     <span className="font-medium text-gray-800">{value}</span>
// //   </div>
// // );




// // import React, { useState, useEffect } from "react";
// // import { ShoppingCart, Clock, CheckCircle } from "lucide-react";
// // import { CiDeliveryTruck } from "react-icons/ci";
// // import { TbCurrencyNaira } from "react-icons/tb";
// // import {
// //   BarChart,
// //   Bar,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   ResponsiveContainer,
// //   CartesianGrid,
// // } from "recharts";
// // import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// // import { getDashboardStats, getAllOrders } from "../api/apiServices";

// // export const AdminDashboard = () => {
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const itemsPerPage = 10;

// //   const [statsData, setStatsData] = useState(null);
// //   const [recentOrders, setRecentOrders] = useState([]);
// //   const [chartData, setChartData] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   const fetchDashboard = async () => {
// //     setLoading(true);
// //     try {
// //       const statsResponse = await getDashboardStats();
// //       const ordersResponse = await getAllOrders({ page: currentPage });

// //       if (statsResponse.success) {
// //         const { stats, weekly_chart } = statsResponse.data;

// //         // Format Stats Cards
// //         const formattedStats = [
// //           {
// //             title: "Total Orders",
// //             value: stats.total_orders.toLocaleString(),
// //             change: "↑12% vs yesterday",
// //             icon: ShoppingCart,
// //             color: "text-green-600",
// //           },
// //           {
// //             title: "Pending Orders",
// //             value: stats.pending_orders.toLocaleString(),
// //             change: "↓3 new",
// //             icon: Clock,
// //             color: "text-orange-600",
// //           },
// //           {
// //             title: "Completed",
// //             value: stats.completed_orders.toLocaleString(),
// //             change: "↑8% up",
// //             icon: CheckCircle,
// //             color: "text-green-600",
// //           },
// //           {
// //             title: "Revenue",
// //             value: `₦${Number(stats.revenue).toLocaleString()}`,
// //             change: "↑15% up",
// //             icon: TbCurrencyNaira,
// //             color: "text-green-600",
// //           },
// //           {
// //             title: "Avg Delivery",
// //             value: `${stats.avg_delivery} min`,
// //             change: "↑2 min faster",
// //             icon: CiDeliveryTruck,
// //             color: "text-green-600",
// //           },
// //         ];

// //         setStatsData(formattedStats);

// //         // Weekly Chart (Original Fallback Logic)
// //         const formattedChart = weekly_chart.length > 0 
// //           ? weekly_chart.map((item) => ({
// //               day: item.day || item.date,
// //               orders: item.orders || item.count || 0,
// //             }))
// //           : [
// //               { day: "Mon", orders: 0 },
// //               { day: "Tue", orders: 0 },
// //               { day: "Wed", orders: 0 },
// //               { day: "Thu", orders: 0 },
// //               { day: "Fri", orders: 0 },
// //               { day: "Sat", orders: 0 },
// //               { day: "Sun", orders: 0 },
// //             ];

// //         setChartData(formattedChart);
// //       }

// //       // Update Recent Orders (Using your custom JSON structure)
// //       if (ordersResponse.success) {
// //         const formattedOrders = ordersResponse.data.orders.map((order) => ({
// //           id: order.order_id,
// //           initials: order.customer?.initials || "??",
// //           name: order.customer?.name || "Unknown",
// //           total: order.total,
// //           status: order.status,
// //           date: order.date,
// //         }));
// //         setRecentOrders(formattedOrders);
// //       }
// //     } catch (err) {
// //       console.error("Failed to load dashboard:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchDashboard();
// //   }, [currentPage]);

// //   // Pagination
// //   const totalPages = Math.ceil(recentOrders.length / itemsPerPage);
// //   const startIndex = (currentPage - 1) * itemsPerPage;
// //   const paginatedOrders = recentOrders.slice(startIndex, startIndex + itemsPerPage);

// //   // Status Distribution (Original Calculation Logic)
// //   const statusDistribution = {
// //     completed: statsData ? parseInt(statsData[2].value.replace(/,/g, '')) : 0,
// //     pending: statsData ? parseInt(statsData[1].value.replace(/,/g, '')) : 0,
// //     cancelled: 0,
// //   };

// //   const totalOrdersStatus = statusDistribution.completed + statusDistribution.pending + statusDistribution.cancelled || 1;

// //   return (
// //     <div className="bg-[#F4EBDD] min-h-screen p-6 md:p-8">
// //       <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">
// //         {/* Header */}
// //         <div className="mb-6 mt-8 md:mt-10">
// //           <h1 className="text-2xl md:text-3xl font-semibold font-roboto text-gray-800">
// //             DashBoard Over View
// //           </h1>
// //           <p className="text-sm md:text-base text-gray-500 font-dm mt-1.5">
// //             Welcome back! Here's today's snap shot
// //           </p>
// //         </div>

// //         {/* Stats Cards */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
// //           {loading && !statsData ? (
// //             Array(5).fill(0).map((_, i) => (
// //               <div key={i} className="bg-white rounded-xl p-5 shadow-sm h-32 animate-pulse" />
// //             ))
// //           ) : (
// //             statsData?.map((item, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start justify-between gap-4 hover:shadow transition-shadow"
// //               >
// //                 <div className="space-y-1.5 flex-1">
// //                   <p className="text-xs md:text-sm text-gray-500 font-medium tracking-wide">
// //                     {item.title}
// //                   </p>
// //                   <h2 className="text-xl md:text-2xl font-bold text-gray-900">
// //                     {item.value}
// //                   </h2>
// //                   <p className={`text-xs md:text-sm font-medium ${item.color}`}>
// //                     {item.change}
// //                   </p>
// //                 </div>
// //                 <div className="p-2.5 rounded-full bg-orange-50 border border-orange-100/70 flex-shrink-0">
// //                   <item.icon size={15} className="text-orange-600" strokeWidth={2.2} />
// //                 </div>
// //               </div>
// //             ))
// //           )}
// //         </div>

// //         {/* Charts Section - RESTORED ORIGINAL FORM */}
// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
// //           {/* Weekly Orders Chart */}
// //           <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100">
// //             <h3 className="text-[20px] font-bold text-gray-800 mb-6 font-roboto">Weekly Orders</h3>

// //             <ResponsiveContainer width="100%" height={360}>
// //               <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 10 }}>
// //                 <CartesianGrid stroke="#f5f6f8" />
// //                 <XAxis dataKey="day" />
// //                 <YAxis />
// //                 <Tooltip
// //                   cursor={{ fill: "transparent" }}
// //                   content={({ active, payload, label }) => {
// //                     if (active && payload && payload.length) {
// //                       return (
// //                         <div className="bg-[#A61E30] text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-lg relative">
// //                           <span>{label}</span>
// //                           <br />
// //                           <span>{payload[0].value} Orders</span>
// //                           <div className="absolute bottom-[-6px] left-1 w-0 h-1 border-t-[10px] border-t-[#A61E30] border-l-[6px] border-l-transparent border-r-[10px] border-r-transparent" />
// //                         </div>
// //                       );
// //                     }
// //                     return null;
// //                   }}
// //                 />
// //                 <Bar dataKey="orders" fill="#EBDAA3" radius={[6, 6, 0, 0]} barSize={40} />
// //               </BarChart>
// //             </ResponsiveContainer>
// //           </div>

// //           {/* Order Status - RESTORED ORIGINAL FORM */}
// //           <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100 flex flex-col">
// //             <h3 className="text-lg font-semibold text-gray-800 mb-6">Order Status</h3>

// //             <div className="flex items-center justify-center my-4 relative">
// //               <div className="absolute top-2 right-6 z-20 bg-[#A61E30] text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-lg">
// //                 Pending: {statusDistribution.pending}
// //                 <div className="absolute left-1 bottom-[-4px] w-0 h-0 border-t-[10px] border-t-[#A61E30] border-l-[6px] border-l-transparent border-r-[10px] border-r-transparent" />
// //               </div>

// //               <div className="relative w-44 h-44 md:w-48 md:h-48 z-10">
// //                 <div
// //                   className="w-full h-full rounded-full"
// //                   style={{
// //                     background: `conic-gradient(
// //                       #22c55e 0% ${(statusDistribution.completed / totalOrdersStatus) * 100}%,
// //                       #f59e0b ${(statusDistribution.completed / totalOrdersStatus) * 100}% ${((statusDistribution.completed + statusDistribution.pending) / totalOrdersStatus) * 100}%,
// //                       #ef4444 ${((statusDistribution.completed + statusDistribution.pending) / totalOrdersStatus) * 100}% 100%
// //                     )`,
// //                   }}
// //                 />
// //                 <div className="absolute inset-6 bg-white rounded-full shadow-inner" />
// //               </div>
// //             </div>

// //             <div className="space-y-3 text-sm mt-2">
// //               {[
// //                 { color: "bg-green-500", label: "Completed", value: statusDistribution.completed },
// //                 { color: "bg-yellow-500", label: "Pending", value: statusDistribution.pending },
// //                 { color: "bg-red-500", label: "Cancelled", value: statusDistribution.cancelled },
// //               ].map((item) => (
// //                 <div key={item.label} className="flex justify-between items-center">
// //                   <div className="flex items-center gap-2.5">
// //                     <div className={`w-3.5 h-3.5 rounded-full ${item.color}`} />
// //                     <span className="text-gray-700">{item.label}</span>
// //                   </div>
// //                   <span className="font-medium font-roboto text-gray-800">{item.value}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Recent Orders Table */}
// //         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
// //           <div className="flex items-center justify-between px-6 py-4 border-b">
// //             <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
// //             <button className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center gap-1.5">
// //               View All →
// //             </button>
// //           </div>

// //           <div className="overflow-x-auto">
// //             <table className="w-full text-sm min-w-[700px]">
// //               <thead className="bg-gray-50">
// //                 <tr>
// //                   <th className="text-left px-6 py-4 font-medium text-gray-600">ORDER ID</th>
// //                   <th className="text-left px-6 py-4 font-medium text-gray-600">CUSTOMER</th>
// //                   <th className="text-left px-6 py-4 font-medium text-gray-600">TOTAL</th>
// //                   <th className="text-left px-6 py-4 font-medium text-gray-600">STATUS</th>
// //                   <th className="text-left px-6 py-4 font-medium text-gray-600">DATE</th>
// //                   <th className="w-12"></th>
// //                 </tr>
// //               </thead>
// //               <tbody className="divide-y divide-gray-100">
// //                 {paginatedOrders.map((order, index) => (
// //                   <tr key={index} className="hover:bg-gray-50/60 transition-colors">
// //                     <td className="px-6 py-4 font-medium text-gray-800">{order.id}</td>
// //                     <td className="px-6 py-4">
// //                       <div className="flex items-center gap-3">
// //                         <div className="w-9 h-9 rounded-full bg-red-50 text-red-700 font-semibold flex items-center justify-center text-sm">
// //                           {order.initials}
// //                         </div>
// //                         <span className="font-medium text-gray-800">{order.name}</span>
// //                       </div>
// //                     </td>
// //                     <td className="px-6 py-4 font-medium text-gray-800">₦{order.total}</td>
// //                     <td className="px-6 py-4">
// //                       <span
// //                         className={`px-3 py-1 rounded-full text-xs font-medium ${
// //                           order.status === "Paid" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
// //                         }`}
// //                       >
// //                         {order.status}
// //                       </span>
// //                     </td>
// //                     <td className="px-6 py-4 text-gray-600">{order.date}</td>
// //                     <td className="px-6 py-4 text-gray-500 text-2xl font-light">…</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>

// //         {/* Pagination Controls */}
// //         <div className="flex items-center justify-end px-6 py-4">
// //           <div className="flex items-center gap-4 text-sm text-gray-600">
// //             <button
// //               className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-gray-200 disabled:opacity-40"
// //               disabled={currentPage === 1}
// //               onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// //             >
// //               <IoIosArrowBack />
// //             </button>
// //             <span className="font-medium">
// //               Page {currentPage} of {totalPages || 1}
// //             </span>
// //             <button
// //               className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-gray-200 disabled:opacity-40"
// //               disabled={currentPage === totalPages || totalPages === 0}
// //               onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// //             >
// //               <IoIosArrowForward />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };




// // import React, { useState, useEffect } from "react";
// // import { ShoppingCart, Clock, CheckCircle } from "lucide-react";
// // import { CiDeliveryTruck } from "react-icons/ci";
// // import { TbCurrencyNaira } from "react-icons/tb";
// // import {
// //   BarChart,
// //   Bar,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   ResponsiveContainer,
// //   CartesianGrid,
// // } from "recharts";
// // import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// // import { getDashboardStats, getAllOrders } from "../api/apiServices";

// // export const AdminDashboard = () => {
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const itemsPerPage = 10;

// //   const [statsData, setStatsData] = useState(null);
// //   const [recentOrders, setRecentOrders] = useState([]);
// //   const [chartData, setChartData] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   const fetchDashboard = async () => {
// //     setLoading(true);
// //     try {
// //       const statsResponse = await getDashboardStats();
// //       const ordersResponse = await getAllOrders({ page: currentPage });

// //       if (statsResponse.success) {
// //         const { stats, weekly_chart } = statsResponse.data;

// //         const formattedStats = [
// //           {
// //             title: "Total Orders",
// //             value: stats.total_orders.toLocaleString(),
// //             change: "↑12% vs yesterday",
// //             icon: ShoppingCart,
// //             color: "text-green-600",
// //           },
// //           {
// //             title: "Pending Orders",
// //             value: stats.pending_orders.toLocaleString(),
// //             change: "↓3 new",
// //             icon: Clock,
// //             color: "text-orange-600",
// //           },
// //           {
// //             title: "Completed",
// //             value: stats.completed_orders.toLocaleString(),
// //             change: "↑8% up",
// //             icon: CheckCircle,
// //             color: "text-green-600",
// //           },
// //           {
// //             title: "Revenue",
// //             value: `₦${Number(stats.revenue).toLocaleString()}`,
// //             change: "↑15% up",
// //             icon: TbCurrencyNaira,
// //             color: "text-green-600",
// //           },
// //           {
// //             title: "Avg Delivery",
// //             value: `${stats.avg_delivery} min`,
// //             change: "↑2 min faster",
// //             icon: CiDeliveryTruck,
// //             color: "text-green-600",
// //           },
// //         ];

// //         setStatsData(formattedStats);

// //         const formattedChart = weekly_chart.length > 0 
// //           ? weekly_chart.map((item) => ({
// //               day: item.day || item.date,
// //               orders: item.orders || item.count || 0,
// //             }))
// //           : [
// //               { day: "Mon", orders: 0 }, { day: "Tue", orders: 0 }, { day: "Wed", orders: 0 },
// //               { day: "Thu", orders: 0 }, { day: "Fri", orders: 0 }, { day: "Sat", orders: 0 },
// //               { day: "Sun", orders: 0 },
// //             ];

// //         setChartData(formattedChart);
// //       }

// //       if (ordersResponse.success) {
// //         const formattedOrders = ordersResponse.data.orders.map((order) => ({
// //           id: order.order_id,
// //           initials: order.customer?.initials || "??",
// //           name: order.customer?.name || "Unknown",
// //           total: order.total,
// //           status: order.status, // e.g., "Paid", "Pending", "Cancelled"
// //           date: order.date,
// //         }));
// //         setRecentOrders(formattedOrders);
// //       }
// //     } catch (err) {
// //       console.error("Failed to load dashboard:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchDashboard();
// //   }, [currentPage]);

// //   const totalPages = Math.ceil(recentOrders.length / itemsPerPage);
// //   const startIndex = (currentPage - 1) * itemsPerPage;
// //   const paginatedOrders = recentOrders.slice(startIndex, startIndex + itemsPerPage);

// //   // Status Distribution
// //   const statusDistribution = {
// //     completed: statsData ? parseInt(statsData[2].value.replace(/,/g, '')) : 0,
// //     pending: statsData ? parseInt(statsData[1].value.replace(/,/g, '')) : 0,
// //     cancelled: 0, 
// //   };

// //   const totalOrdersStatus = statusDistribution.completed + statusDistribution.pending + statusDistribution.cancelled || 1;

// //   // Helper to determine status color based on various possible API strings
// //   const getStatusStyles = (status) => {
// //     const s = status?.toLowerCase();
// //     if (["paid", "completed", "delivered", "success"].includes(s)) {
// //       return "bg-green-100 text-green-700";
// //     }
// //     if (["pending", "processing", "ongoing"].includes(s)) {
// //       return "bg-orange-100 text-orange-700";
// //     }
// //     if (["cancelled", "failed", "returned"].includes(s)) {
// //       return "bg-red-100 text-red-700";
// //     }
// //     return "bg-blue-100 text-blue-700";
// //   };

// //   return (
// //     <div className="bg-[#F4EBDD] min-h-screen p-6 md:p-8">
// //       <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">
// //         {/* Header */}
// //         <div className="mb-6 mt-8 md:mt-10">
// //           <h1 className="text-2xl md:text-3xl font-semibold font-roboto text-gray-800">
// //             DashBoard Over View
// //           </h1>
// //           <p className="text-sm md:text-base text-gray-500 font-dm mt-1.5">
// //             Welcome back! Here's today's snapshot
// //           </p>
// //         </div>

// //         {/* Stats Cards */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
// //           {loading && !statsData ? (
// //             Array(5).fill(0).map((_, i) => (
// //               <div key={i} className="bg-white rounded-xl p-5 shadow-sm h-32 animate-pulse" />
// //             ))
// //           ) : (
// //             statsData?.map((item, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start justify-between gap-4 hover:shadow transition-shadow"
// //               >
// //                 <div className="space-y-1.5 flex-1">
// //                   <p className="text-xs md:text-sm text-gray-500 font-medium tracking-wide">
// //                     {item.title}
// //                   </p>
// //                   <h2 className="text-xl md:text-2xl font-bold text-gray-900">
// //                     {item.value}
// //                   </h2>
// //                   <p className={`text-xs md:text-sm font-medium ${item.color}`}>
// //                     {item.change}
// //                   </p>
// //                 </div>
// //                 <div className="p-2.5 rounded-full bg-orange-50 border border-orange-100/70 flex-shrink-0">
// //                   <item.icon size={15} className="text-orange-600" strokeWidth={2.2} />
// //                 </div>
// //               </div>
// //             ))
// //           )}
// //         </div>

// //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
// //           {/* Weekly Orders Chart */}
// //           <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100">
// //             <h3 className="text-[20px] font-bold text-gray-800 mb-6 font-roboto">Weekly Orders</h3>
// //             <ResponsiveContainer width="100%" height={360}>
// //               <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 10 }}>
// //                 <CartesianGrid stroke="#f5f6f8" />
// //                 <XAxis dataKey="day" />
// //                 <YAxis />
// //                 <Tooltip
// //                   cursor={{ fill: "transparent" }}
// //                   content={({ active, payload, label }) => {
// //                     if (active && payload && payload.length) {
// //                       return (
// //                         <div className="bg-[#A61E30] text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-lg relative">
// //                           <span>{label}</span>
// //                           <br />
// //                           <span>{payload[0].value} Orders</span>
// //                           <div className="absolute bottom-[-6px] left-1 w-0 h-1 border-t-[10px] border-t-[#A61E30] border-l-[6px] border-l-transparent border-r-[10px] border-r-transparent" />
// //                         </div>
// //                       );
// //                     }
// //                     return null;
// //                   }}
// //                 />
// //                 <Bar dataKey="orders" fill="#EBDAA3" radius={[6, 6, 0, 0]} barSize={40} />
// //               </BarChart>
// //             </ResponsiveContainer>
// //           </div>

// //           {/* Order Status Donut */}
// //           <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100 flex flex-col">
// //             <h3 className="text-lg font-semibold text-gray-800 mb-6">Order Status</h3>
// //             <div className="flex items-center justify-center my-4 relative">
// //               <div className="absolute top-2 right-6 z-20 bg-[#A61E30] text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-lg">
// //                 Pending: {statusDistribution.pending}
// //                 <div className="absolute left-1 bottom-[-4px] w-0 h-0 border-t-[10px] border-t-[#A61E30] border-l-[6px] border-l-transparent border-r-[10px] border-r-transparent" />
// //               </div>
// //               <div className="relative w-44 h-44 md:w-48 md:h-48 z-10">
// //                 <div
// //                   className="w-full h-full rounded-full"
// //                   style={{
// //                     background: `conic-gradient(
// //                       #22c55e 0% ${(statusDistribution.completed / totalOrdersStatus) * 100}%,
// //                       #f59e0b ${(statusDistribution.completed / totalOrdersStatus) * 100}% ${((statusDistribution.completed + statusDistribution.pending) / totalOrdersStatus) * 100}%,
// //                       #ef4444 ${((statusDistribution.completed + statusDistribution.pending) / totalOrdersStatus) * 100}% 100%
// //                     )`,
// //                   }}
// //                 />
// //                 <div className="absolute inset-6 bg-white rounded-full shadow-inner" />
// //               </div>
// //             </div>
// //             <div className="space-y-3 text-sm mt-2">
// //               {[
// //                 { color: "bg-green-500", label: "Completed", value: statusDistribution.completed },
// //                 { color: "bg-yellow-500", label: "Pending", value: statusDistribution.pending },
// //                 { color: "bg-red-500", label: "Cancelled", value: statusDistribution.cancelled },
// //               ].map((item) => (
// //                 <div key={item.label} className="flex justify-between items-center">
// //                   <div className="flex items-center gap-2.5">
// //                     <div className={`w-3.5 h-3.5 rounded-full ${item.color}`} />
// //                     <span className="text-gray-700">{item.label}</span>
// //                   </div>
// //                   <span className="font-medium font-roboto text-gray-800">{item.value}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Recent Orders Table */}
// //         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
// //           <div className="flex items-center justify-between px-6 py-4 border-b">
// //             <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>

// //             <button className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center gap-1.5">
// //               View All →
// //             </button>
           
// //           </div>
// //           <div className="overflow-x-auto">
// //             <table className="w-full text-sm min-w-[700px]">
// //               <thead className="bg-gray-50">
// //                 <tr>
// //                   <th className="text-left px-6 py-4 font-medium text-gray-600">ORDER ID</th>
// //                   <th className="text-left px-6 py-4 font-medium text-gray-600">CUSTOMER</th>
// //                   <th className="text-left px-6 py-4 font-medium text-gray-600">TOTAL</th>
// //                   <th className="text-left px-6 py-4 font-medium text-gray-600">STATUS</th>
// //                   <th className="text-left px-6 py-4 font-medium text-gray-600">DATE</th>
// //                   <th className="w-12"></th>
// //                 </tr>
// //               </thead>
// //               <tbody className="divide-y divide-gray-100">
// //                 {paginatedOrders.map((order, index) => (
// //                   <tr key={index} className="hover:bg-gray-50/60 transition-colors">
// //                     <td className="px-6 py-4 font-medium text-gray-800">{order.id}</td>
// //                     <td className="px-6 py-4">
// //                       <div className="flex items-center gap-3">
// //                         <div className="w-9 h-9 rounded-full bg-red-50 text-red-700 font-semibold flex items-center justify-center text-sm">
// //                           {order.initials}
// //                         </div>
// //                         <span className="font-medium text-gray-800">{order.name}</span>
// //                       </div>
// //                     </td>
// //                     <td className="px-6 py-4 font-medium text-gray-800">₦{order.total}</td>
// //                     <td className="px-6 py-4">
// //                       <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles(order.status)}`}>
// //                         {order.status}
// //                       </span>
// //                     </td>
// //                     <td className="px-6 py-4 text-gray-600">{order.date}</td>
// //                     <td className="px-6 py-4 text-gray-500 text-2xl font-light">…</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>

// //         {/* Pagination */}
// //         <div className="flex items-center justify-end px-6 py-4">
// //           <div className="flex items-center gap-4 text-sm text-gray-600">
// //             <button
// //               className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-gray-200 disabled:opacity-40"
// //               disabled={currentPage === 1}
// //               onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// //             >
// //               <IoIosArrowBack />
// //             </button>
// //             <span className="font-medium">
// //               Page {currentPage} of {totalPages || 1}
// //             </span>
// //             <button
// //               className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-gray-200 disabled:opacity-40"
// //               disabled={currentPage === totalPages || totalPages === 0}
// //               onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// //             >
// //               <IoIosArrowForward />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };





// import React, { useState, useEffect } from "react";
// import { ShoppingCart, Clock, CheckCircle } from "lucide-react";
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
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// import { getDashboardStats, getAllOrders } from "../api/apiServices";

// export const AdminDashboard = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   const [statsData, setStatsData] = useState(null);
//   const [recentOrders, setRecentOrders] = useState([]);
//   const [chartData, setChartData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchDashboard = async () => {
//     setLoading(true);
//     try {
//       const statsResponse = await getDashboardStats();
//       const ordersResponse = await getAllOrders({ page: currentPage });

//       if (statsResponse.success) {
//         const { stats, weekly_chart } = statsResponse.data;

//         const formattedStats = [
//           {
//             title: "Total Orders",
//             value: stats.total_orders.toLocaleString(),
//             change: "↑12% vs yesterday",
//             icon: ShoppingCart,
//             color: "text-green-600",
//           },
//           {
//             title: "Pending Orders",
//             value: stats.pending_orders.toLocaleString(),
//             change: "↓3 new",
//             icon: Clock,
//             color: "text-orange-600",
//           },
//           {
//             title: "Completed",
//             value: stats.completed_orders.toLocaleString(),
//             change: "↑8% up",
//             icon: CheckCircle,
//             color: "text-green-600",
//           },
//           {
//             title: "Revenue",
//             value: `₦${Number(stats.revenue).toLocaleString()}`,
//             change: "↑15% up",
//             icon: TbCurrencyNaira,
//             color: "text-green-600",
//           },
//           {
//             title: "Avg Delivery",
//             value: `${stats.avg_delivery} min`,
//             change: "↑2 min faster",
//             icon: CiDeliveryTruck,
//             color: "text-green-600",
//           },
//         ];

//         setStatsData(formattedStats);

//         const formattedChart = weekly_chart.length > 0 
//           ? weekly_chart.map((item) => ({
//               day: item.day || item.date,
//               orders: item.orders || item.count || 0,
//             }))
//           : [
//               { day: "Mon", orders: 0 }, { day: "Tue", orders: 0 }, { day: "Wed", orders: 0 },
//               { day: "Thu", orders: 0 }, { day: "Fri", orders: 0 }, { day: "Sat", orders: 0 },
//               { day: "Sun", orders: 0 },
//             ];

//         setChartData(formattedChart);
//       }

//       if (ordersResponse.success) {
//         const formattedOrders = ordersResponse.data.orders.map((order) => ({
//           id: order.order_id,
//           initials: order.customer?.initials || "??",
//           name: order.customer?.name || "Unknown",
//           total: order.total,
//           status: order.status, 
//           date: order.date,
//         }));
//         setRecentOrders(formattedOrders);
//       }
//     } catch (err) {
//       console.error("Failed to load dashboard:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDashboard();
//   }, [currentPage]);

//   const totalPages = Math.ceil(recentOrders.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const paginatedOrders = recentOrders.slice(startIndex, startIndex + itemsPerPage);

//   const statusDistribution = {
//     completed: statsData ? parseInt(statsData[2].value.replace(/,/g, '')) : 0,
//     pending: statsData ? parseInt(statsData[1].value.replace(/,/g, '')) : 0,
//     cancelled: 0, 
//   };

//   const totalOrdersStatus = statusDistribution.completed + statusDistribution.pending + statusDistribution.cancelled || 1;

//   // --- REFINED STATUS LOGIC ---
//   const getStatusStyles = (status) => {
//     const s = status?.toLowerCase().trim();
    
//     // 1. COMPLETED / PAID
//     if (["paid", "completed", "success"].includes(s)) {
//       return "bg-green-100 text-green-700 border-green-200";
//     }
//     // 2. READY TO PICK
//     if (["ready to pick", "ready", "pickup"].includes(s)) {
//       return "bg-indigo-100 text-indigo-700 border-indigo-200";
//     }
//     // 3. OUT FOR DELIVERY
//     if (["delivery", "out for delivery", "shipped", "on the way"].includes(s)) {
//       return "bg-cyan-100 text-cyan-700 border-cyan-200";
//     }
//     // 4. PENDING / PROCESSING
//     if (["pending", "processing", "ongoing"].includes(s)) {
//       return "bg-orange-100 text-orange-700 border-orange-200";
//     }
//     // 5. CANCELLED / FAILED
//     if (["cancelled", "failed", "returned"].includes(s)) {
//       return "bg-red-100 text-red-700 border-red-200";
//     }
//     // DEFAULT
//     return "bg-gray-100 text-gray-700 border-gray-200";
//   };

//   return (
//     <div className="bg-[#F4EBDD] min-h-screen p-6 md:p-8">
//       <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">
//         {/* Header */}
//         <div className="mb-6 mt-8 md:mt-10">
//           <h1 className="text-2xl md:text-3xl font-semibold font-roboto text-gray-800">
//             DashBoard Over View
//           </h1>
//           <p className="text-sm md:text-base text-gray-500 font-dm mt-1.5">
//             Welcome back! Here's today's snapshot
//           </p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
//           {loading && !statsData ? (
//             Array(5).fill(0).map((_, i) => (
//               <div key={i} className="bg-white rounded-xl p-5 shadow-sm h-32 animate-pulse" />
//             ))
//           ) : (
//             statsData?.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start justify-between gap-4 hover:shadow transition-shadow"
//               >
//                 <div className="space-y-1.5 flex-1">
//                   <p className="text-xs md:text-sm text-gray-500 font-medium tracking-wide">
//                     {item.title}
//                   </p>
//                   <h2 className="text-xl md:text-2xl font-bold text-gray-900">
//                     {item.value}
//                   </h2>
//                   <p className={`text-xs md:text-sm font-medium ${item.color}`}>
//                     {item.change}
//                   </p>
//                 </div>
//                 <div className="p-2.5 rounded-full bg-orange-50 border border-orange-100/70 flex-shrink-0">
//                   <item.icon size={15} className="text-orange-600" strokeWidth={2.2} />
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
//           {/* Weekly Orders Chart */}
//           <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100">
//             <h3 className="text-[20px] font-bold text-gray-800 mb-6 font-roboto">Weekly Orders</h3>
//             <ResponsiveContainer width="100%" height={360}>
//               <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 10 }}>
//                 <CartesianGrid stroke="#f5f6f8" />
//                 <XAxis dataKey="day" />
//                 <YAxis />
//                 <Tooltip
//                   cursor={{ fill: "transparent" }}
//                   content={({ active, payload, label }) => {
//                     if (active && payload && payload.length) {
//                       return (
//                         <div className="bg-[#A61E30] text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-lg relative">
//                           <span>{label}</span>
//                           <br />
//                           <span>{payload[0].value} Orders</span>
//                           <div className="absolute bottom-[-6px] left-1 w-0 h-1 border-t-[10px] border-t-[#A61E30] border-l-[6px] border-l-transparent border-r-[10px] border-r-transparent" />
//                         </div>
//                       );
//                     }
//                     return null;
//                   }}
//                 />
//                 <Bar dataKey="orders" fill="#EBDAA3" radius={[6, 6, 0, 0]} barSize={40} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Order Status Donut */}
//           <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100 flex flex-col">
//             <h3 className="text-lg font-semibold text-gray-800 mb-6">Order Status</h3>
//             <div className="flex items-center justify-center my-4 relative">
//               <div className="absolute top-2 right-6 z-20 bg-[#A61E30] text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-lg">
//                 Pending: {statusDistribution.pending}
//                 <div className="absolute left-1 bottom-[-4px] w-0 h-0 border-t-[10px] border-t-[#A61E30] border-l-[6px] border-l-transparent border-r-[10px] border-r-transparent" />
//               </div>
//               <div className="relative w-44 h-44 md:w-48 md:h-48 z-10">
//                 <div
//                   className="w-full h-full rounded-full"
//                   style={{
//                     background: `conic-gradient(
//                       #22c55e 0% ${(statusDistribution.completed / totalOrdersStatus) * 100}%,
//                       #f59e0b ${(statusDistribution.completed / totalOrdersStatus) * 100}% ${((statusDistribution.completed + statusDistribution.pending) / totalOrdersStatus) * 100}%,
//                       #ef4444 ${((statusDistribution.completed + statusDistribution.pending) / totalOrdersStatus) * 100}% 100%
//                     )`,
//                   }}
//                 />
//                 <div className="absolute inset-6 bg-white rounded-full shadow-inner" />
//               </div>
//             </div>
//             <div className="space-y-3 text-sm mt-2">
//               {[
//                 { color: "bg-green-500", label: "Completed", value: statusDistribution.completed },
//                 { color: "bg-yellow-500", label: "Pending", value: statusDistribution.pending },
//                 { color: "bg-red-500", label: "Cancelled", value: statusDistribution.cancelled },
//               ].map((item) => (
//                 <div key={item.label} className="flex justify-between items-center">
//                   <div className="flex items-center gap-2.5">
//                     <div className={`w-3.5 h-3.5 rounded-full ${item.color}`} />
//                     <span className="text-gray-700">{item.label}</span>
//                   </div>
//                   <span className="font-medium font-roboto text-gray-800">{item.value}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Recent Orders Table */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//           <div className="flex items-center justify-between px-6 py-4 border-b">
//             <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
//             <button className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center gap-1.5">
//               View All →
//             </button>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm min-w-[700px]">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="text-left px-6 py-4 font-medium text-gray-600">ORDER ID</th>
//                   <th className="text-left px-6 py-4 font-medium text-gray-600">CUSTOMER</th>
//                   <th className="text-left px-6 py-4 font-medium text-gray-600">TOTAL</th>
//                   <th className="text-left px-6 py-4 font-medium text-gray-600">STATUS</th>
//                   <th className="text-left px-6 py-4 font-medium text-gray-600">DATE</th>
//                   <th className="w-12"></th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {paginatedOrders.map((order, index) => {
//                   const statusClasses = getStatusStyles(order.status);
                  
//                   return (
//                     <tr key={index} className="hover:bg-gray-50/60 transition-colors">
//                       <td className="px-6 py-4 font-medium text-gray-800">{order.id}</td>
//                       <td className="px-6 py-4">
//                         <div className="flex items-center gap-3">
//                           {/* Avatar background now specifically distinct based on status */}
//                           <div className={`w-9 h-9 rounded-full font-bold border flex items-center justify-center text-[10px] uppercase tracking-tighter shadow-sm ${statusClasses}`}>
//                             {order.initials}
//                           </div>
//                           <span className="font-medium text-gray-800">{order.name}</span>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 font-medium text-gray-800">₦{order.total}</td>
//                       <td className="px-6 py-4">
//                         <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusClasses}`}>
//                           {order.status}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 text-gray-600">{order.date}</td>
//                       <td className="px-6 py-4 text-gray-500 text-2xl font-light cursor-pointer">…</td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Pagination Logic remained the same */}
//         <div className="flex items-center justify-end px-6 py-4">
//           <div className="flex items-center gap-4 text-sm text-gray-600">
//             <button
//               className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-gray-200 disabled:opacity-40"
//               disabled={currentPage === 1}
//               onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//             >
//               <IoIosArrowBack />
//             </button>
//             <span className="font-medium">
//               Page {currentPage} of {totalPages || 1}
//             </span>
//             <button
//               className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-gray-200 disabled:opacity-40"
//               disabled={currentPage === totalPages || totalPages === 0}
//               onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//             >
//               <IoIosArrowForward />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };





import React, { useState, useEffect } from "react";
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
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { getDashboardStats, getAllOrders } from "../api/apiServices";

export const AdminDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [statsData, setStatsData] = useState(null);
  const [recentOrders, setRecentOrders] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- MAPPING LOGIC FROM ORDERSPAGE ---
  const statusStyles = {
    "Order Received": "bg-blue-100 text-blue-700 border-blue-200",
    "Preparing Food": "bg-purple-100 text-purple-700 border-purple-200",
    "Ready to Pickup": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "Out for Delivery": "bg-orange-100 text-orange-700 border-orange-200",
    "Delivered": "bg-green-100 text-green-700 border-green-200",
  };

  const apiToUiStatus = {
    "received": "Order Received",
    "Received": "Order Received",
    "prepared": "Preparing Food",
    "Ready_for_pick": "Ready to Pickup",
    "out_for_delivery": "Out for Delivery",
    "delivered": "Delivered",
  };

  const getStatusClasses = (rawStatus) => {
    const uiStatus = apiToUiStatus[rawStatus] || rawStatus;
    return statusStyles[uiStatus] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  const fetchDashboard = async () => {
    setLoading(true);
    try {
      const statsResponse = await getDashboardStats();
      const ordersResponse = await getAllOrders({ page: currentPage });

      if (statsResponse.success) {
        const { stats, weekly_chart } = statsResponse.data;

        const formattedStats = [
          { title: "Total Orders", value: stats.total_orders.toLocaleString(), change: "↑12% vs yesterday", icon: ShoppingCart, color: "text-green-600" },
          { title: "Pending Orders", value: stats.pending_orders.toLocaleString(), change: "↓3 new", icon: Clock, color: "text-orange-600" },
          { title: "Completed", value: stats.completed_orders.toLocaleString(), change: "↑8% up", icon: CheckCircle, color: "text-green-600" },
          { title: "Revenue", value: `₦${Number(stats.revenue).toLocaleString()}`, change: "↑15% up", icon: TbCurrencyNaira, color: "text-green-600" },
          { title: "Avg Delivery", value: `${stats.avg_delivery} min`, change: "↑2 min faster", icon: CiDeliveryTruck, color: "text-green-600" },
        ];

        setStatsData(formattedStats);

        const formattedChart = weekly_chart.length > 0 
          ? weekly_chart.map((item) => ({ day: item.day || item.date, orders: item.orders || item.count || 0 }))
          : [{ day: "Mon", orders: 0 }, { day: "Tue", orders: 0 }, { day: "Wed", orders: 0 }, { day: "Thu", orders: 0 }, { day: "Fri", orders: 0 }, { day: "Sat", orders: 0 }, { day: "Sun", orders: 0 }];

        setChartData(formattedChart);
      }

      if (ordersResponse.success) {
        const formattedOrders = ordersResponse.data.orders.map((order) => ({
          id: order.order_id,
          initials: order.customer?.initials || "??",
          name: order.customer?.name || "Unknown",
          total: order.total,
          status: order.status, 
          date: order.date,
        }));
        setRecentOrders(formattedOrders);
      }
    } catch (err) {
      console.error("Failed to load dashboard:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, [currentPage]);

  const totalPages = Math.ceil(recentOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = recentOrders.slice(startIndex, startIndex + itemsPerPage);

  const statusDistribution = {
    completed: statsData ? parseInt(statsData[2].value.replace(/,/g, '')) : 0,
    pending: statsData ? parseInt(statsData[1].value.replace(/,/g, '')) : 0,
    cancelled: 0, 
  };

  const totalOrdersStatus = statusDistribution.completed + statusDistribution.pending + statusDistribution.cancelled || 1;

  return (
    <div className="bg-[#F4EBDD] min-h-screen p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-10">
        {/* Header */}
        <div className="mb-6 mt-8 md:mt-10">
          <h1 className="text-2xl md:text-3xl font-semibold font-roboto text-gray-800">DashBoard Over View</h1>
          <p className="text-sm md:text-base text-gray-500 font-dm mt-1.5">Welcome back! Here's today's snapshot</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
          {loading && !statsData ? (
            Array(5).fill(0).map((_, i) => <div key={i} className="bg-white rounded-xl p-5 shadow-sm h-32 animate-pulse" />)
          ) : (
            statsData?.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start justify-between gap-4 hover:shadow transition-shadow">
                <div className="space-y-1.5 flex-1">
                  <p className="text-xs md:text-sm text-gray-500 font-medium tracking-wide">{item.title}</p>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">{item.value}</h2>
                  <p className={`text-xs md:text-sm font-medium ${item.color}`}>{item.change}</p>
                </div>
                <div className="p-2.5 rounded-full bg-orange-50 border border-orange-100/70 flex-shrink-0">
                  <item.icon size={15} className="text-orange-600" strokeWidth={2.2} />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100">
            <h3 className="text-[20px] font-bold text-gray-800 mb-6 font-roboto">Weekly Orders</h3>
            <ResponsiveContainer width="100%" height={360}>
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 10 }}>
                <CartesianGrid stroke="#f5f6f8" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip cursor={{ fill: "transparent" }} content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-[#A61E30] text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-lg relative">
                        <span>{label}</span><br /><span>{payload[0].value} Orders</span>
                        <div className="absolute bottom-[-6px] left-1 w-0 h-1 border-t-[10px] border-t-[#A61E30] border-l-[6px] border-l-transparent border-r-[10px] border-r-transparent" />
                      </div>
                    );
                  }
                  return null;
                }} />
                <Bar dataKey="orders" fill="#EBDAA3" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Order Status</h3>
            <div className="flex items-center justify-center my-4 relative">
              <div className="absolute top-2 right-6 z-20 bg-[#A61E30] text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-lg">
                Pending: {statusDistribution.pending}
                <div className="absolute left-1 bottom-[-4px] w-0 h-0 border-t-[10px] border-t-[#A61E30] border-l-[6px] border-l-transparent border-r-[10px] border-r-transparent" />
              </div>
              <div className="relative w-44 h-44 md:w-48 md:h-48 z-10">
                <div className="w-full h-full rounded-full" style={{ background: `conic-gradient(#22c55e 0% ${(statusDistribution.completed / totalOrdersStatus) * 100}%, #f59e0b ${(statusDistribution.completed / totalOrdersStatus) * 100}% ${((statusDistribution.completed + statusDistribution.pending) / totalOrdersStatus) * 100}%, #ef4444 ${((statusDistribution.completed + statusDistribution.pending) / totalOrdersStatus) * 100}% 100%)` }} />
                <div className="absolute inset-6 bg-white rounded-full shadow-inner" />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
            <button className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center gap-1.5">View All →</button>
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
                {paginatedOrders.map((order, index) => {
                  {/* USING SYNCED STATUS COLORS */}
                  const statusClass = getStatusClasses(order.status);
                  const displayStatus = apiToUiStatus[order.status] || order.status;

                  return (
                    <tr key={index} className="hover:bg-gray-50/60 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-800">{order.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {/* AVATAR MATCHES STATUS BG/TEXT */}
                          <div className={`w-9 h-9 rounded-full font-bold border flex items-center justify-center text-[10px] uppercase shadow-sm ${statusClass}`}>
                            {order.initials}
                          </div>
                          <span className="font-medium text-gray-800">{order.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-800">₦{order.total}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-tight ${statusClass}`}>
                          {displayStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{order.date}</td>
                      <td className="px-6 py-4 text-gray-500 text-2xl font-light">…</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end px-6 py-4">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <button className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-gray-200 disabled:opacity-40" disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}><IoIosArrowBack /></button>
            <span className="font-medium">Page {currentPage} of {totalPages || 1}</span>
            <button className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-gray-200 disabled:opacity-40" disabled={currentPage === totalPages || totalPages === 0} onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}><IoIosArrowForward /></button>
          </div>
        </div>
      </div>
    </div>
  );
};