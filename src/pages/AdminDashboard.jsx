


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Added for routing
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
  const navigate = useNavigate(); // Initialize navigation
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [statsData, setStatsData] = useState(null);
  const [recentOrders, setRecentOrders] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- ADDED STATUS MAPPINGS FROM ORDERS PAGE ---
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

  const fetchDashboard = async () => {
    setLoading(true);
    try {
      const statsResponse = await getDashboardStats();
      const ordersResponse = await getAllOrders({ page: currentPage });

      if (statsResponse.success) {
        const { stats, weekly_chart } = statsResponse.data;

        const formattedStats = [
          {
            title: "Total Orders",
            value: stats.total_orders.toLocaleString(),
            change: "↑12% vs yesterday",
            icon: ShoppingCart,
            color: "text-green-600",
          },
          {
            title: "Pending Orders",
            value: stats.pending_orders.toLocaleString(),
            change: "↓3 new",
            icon: Clock,
            color: "text-orange-600",
          },
          {
            title: "Completed",
            value: stats.completed_orders.toLocaleString(),
            change: "↑8% up",
            icon: CheckCircle,
            color: "text-green-600",
          },
          {
            title: "Revenue",
            value: `₦${Number(stats.revenue).toLocaleString()}`,
            change: "↑15% up",
            icon: TbCurrencyNaira,
            color: "text-green-600",
          },
          {
            title: "Avg Delivery",
            value: `${stats.avg_delivery} min`,
            change: "↑2 min faster",
            icon: CiDeliveryTruck,
            color: "text-green-600",
          },
        ];

        setStatsData(formattedStats);

        const formattedChart = weekly_chart.length > 0 
          ? weekly_chart.map((item) => ({
              day: item.day || item.date,
              orders: item.orders || item.count || 0,
            }))
          : [
              { day: "Mon", orders: 0 }, { day: "Tue", orders: 0 }, { day: "Wed", orders: 0 },
              { day: "Thu", orders: 0 }, { day: "Fri", orders: 0 }, { day: "Sat", orders: 0 },
              { day: "Sun", orders: 0 },
            ];

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
          <h1 className="text-2xl md:text-3xl font-semibold font-roboto text-gray-800">
            DashBoard Over View
          </h1>
          <p className="text-sm md:text-base text-gray-500 font-dm mt-1.5">
            Welcome back! Here's today's snapshot
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
          {loading && !statsData ? (
            Array(5).fill(0).map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm h-32 animate-pulse" />
            ))
          ) : (
            statsData?.map((item, index) => (
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
            ))
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Weekly Orders Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100">
            <h3 className="text-[20px] font-bold text-gray-800 mb-6 font-roboto">Weekly Orders</h3>
            <ResponsiveContainer width="100%" height={360}>
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 10 }}>
                <CartesianGrid stroke="#f5f6f8" />
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
                          <div className="absolute bottom-[-6px] left-1 w-0 h-1 border-t-[10px] border-t-[#A61E30] border-l-[6px] border-l-transparent border-r-[10px] border-r-transparent" />
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

          {/* Order Status Donut */}
          <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Order Status</h3>
            <div className="flex items-center justify-center my-4 relative">
              <div className="absolute top-2 right-6 z-20 bg-[#A61E30] text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-lg">
                Pending: {statusDistribution.pending}
                <div className="absolute left-1 bottom-[-4px] w-0 h-0 border-t-[10px] border-t-[#A61E30] border-l-[6px] border-l-transparent border-r-[10px] border-r-transparent" />
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
                  <span className="font-medium font-roboto text-gray-800">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
            <button 
              onClick={() => navigate("/dashboard/orders")} 
              className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center gap-1.5"
            >
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
                {paginatedOrders.map((order, index) => {
                  const uiStatus = apiToUiStatus[order.status] || order.status;
                  const currentStyle = statusStyles[uiStatus] || "bg-gray-100 text-gray-700 border-gray-200";
                  
                  return (
                    <tr key={index} className="hover:bg-gray-50/60 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-800">{order.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-full font-bold border flex items-center justify-center text-[10px] uppercase tracking-tighter shadow-sm ${currentStyle}`}>
                            {order.initials}
                          </div>
                          <span className="font-medium text-gray-800">{order.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-800">₦{order.total}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${currentStyle}`}>
                          {uiStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{order.date}</td>
                      <td 
                        onClick={() => navigate("/dashboard/orders")} 
                        className="px-6 py-4 text-gray-500 text-2xl font-light cursor-pointer hover:text-gray-800"
                      >
                        …
                      </td>
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
            <button
              className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-gray-200 disabled:opacity-40"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              <IoIosArrowBack />
            </button>
            <span className="font-medium">
              Page {currentPage} of {totalPages || 1}
            </span>
            <button
              className="flex items-center gap-1 px-3 py-1.5 rounded-md hover:bg-gray-200 disabled:opacity-40"
              disabled={currentPage === totalPages || totalPages === 0}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};