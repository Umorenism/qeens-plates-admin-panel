

import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { getAllOrders } from "../api/apiServices"; 

const statusStyles = {
  "Order Received": "bg-blue-100 text-blue-700 border-blue-200",
  "Preparing Food": "bg-purple-100 text-purple-700 border-purple-200",
  "Ready to Pickup": "bg-yellow-100 text-yellow-800 border-yellow-200",
  "Out for Delivery": "bg-orange-100 text-orange-700 border-orange-200",
  "Delivered": "bg-green-100 text-green-700 border-green-200",
};

const apiToUiStatus = {
  "received": "Order Received",
  "Order Received": "Order Received",
  "prepared": "Preparing Food",
  "Ready_for_pick": "Ready to Pickup",
  "out_for_delivery": "Out for Delivery",
  "delivered": "Delivered",
  "Received": "Order Received"
  
};

export default function OrdersPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const filters = ["All", "Order Received", "Preparing Food", "Ready to Pickup", "Out for Delivery", "Delivered"];

  const fetchOrders = useCallback(async (status = "All", search = "") => {
    try {
      const params = {};
      if (status !== "All") {
        const slug = Object.keys(apiToUiStatus).find(key => apiToUiStatus[key] === status);
        params.status = slug;
      }
      if (search.trim()) params.search = search.trim();

      const response = await getAllOrders(params);

      if (response.success && response.data?.orders) {
        const formattedOrders = response.data.orders.map((order) => ({
          displayId: order.order_id,
          rawId: order.id,
          customer: order.customer?.name || "Unknown Customer",
          initials: order.customer?.initials || "?",
          total: order.total, 
          status: apiToUiStatus[order.status] || order.status, 
          date: order.date || "N/A",
        }));
        setOrders(formattedOrders);
      } else {
        setOrders([]);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Sync data whenever search, filter, or page focus changes
  // useEffect(() => {
  //   const delayDebounceFn = setTimeout(() => {
  //     fetchOrders(activeFilter, searchTerm);
  //   }, 300);

  //   // Refresh when user returns to this tab/window
  //   window.addEventListener("focus", () => fetchOrders(activeFilter, searchTerm));

  //   return () => {
  //     clearTimeout(delayDebounceFn);
  //     window.removeEventListener("focus", () => fetchOrders(activeFilter, searchTerm));
  //   };
  // }, [activeFilter, searchTerm, fetchOrders]);

 useEffect(() => {
  const delayDebounceFn = setTimeout(() => {
    fetchOrders(activeFilter, searchTerm, true);
  }, 300);

  return () => clearTimeout(delayDebounceFn);
}, [activeFilter, searchTerm]);

  return (
    <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
      <div className="mb-6 mt-10">
        <h1 className="text-[32px] font-roboto text-black">Orders</h1>
        <p className="text-gray-500 text-sm">View and manage all incoming food orders.</p>
      </div>

      <div className="flex flex-wrap gap-4 mb-6 items-center">
        <div className="relative w-72">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search order..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
          />
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setLoading(true);
                setActiveFilter(filter);
              }}
              className={`px-4 py-2 text-sm transition rounded-[40px] rounded-tl-[5px] font-dm whitespace-nowrap ${
                activeFilter === filter ? "bg-[#A61E30] text-white" : "bg-white border text-gray-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left font-dm">
          <thead className="bg-gray-50 text-gray-500 text-sm">
            <tr>
              <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">ORDER ID</th>
              <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">CUSTOMER</th>
              <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">TOTAL</th>
              <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">STATUS</th>
              <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">DATE</th>
              <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider text-right">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="6" className="px-6 py-16 text-center text-gray-500">Loading orders...</td></tr>
            ) : orders.length === 0 ? (
              <tr><td colSpan="6" className="px-6 py-16 text-center text-gray-500">No orders found</td></tr>
            ) : (
              orders.map((order, index) => (
                <tr
                  key={order.rawId || index}
                  onClick={() => navigate(`/dashboard/order/${order.rawId}`)}
                  className="border-t hover:bg-gray-50 transition cursor-pointer"
                >
                  <td className="px-6 py-4 font-medium text-[#0F172A]">{order.displayId}</td>
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold uppercase border ${statusStyles[order.status] || "bg-gray-100"}`}>
                      {order.initials}
                    </div>
                    <span className="text-[#334155] font-dm text-sm font-medium">{order.customer}</span>
                  </td>
                  <td className="px-6 py-4 text-[#334155] font-dm text-sm font-bold">₦{order.total}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 font-dm rounded-full text-[10px] font-bold border uppercase tracking-tight ${statusStyles[order.status] || "bg-gray-100"}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-dm text-[#334155] text-sm">{order.date}</td>
                  <td className="px-6 py-4 text-xl text-right font-dm text-gray-300">⋯</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}






