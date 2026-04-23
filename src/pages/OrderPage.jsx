// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { FiSearch } from "react-icons/fi";
// // const ordersData = [
// //   {
// //     id: "#ORD-7732",
// //     customer: "Chukwuma Adeyemi",
// //     initials: "CA",
// //     total: "12,500",
// //     status: "Received Order",
// //     date: "Oct 24, 2023",
// //   },
// //   {
// //     id: "#ORD-7731",
// //     customer: "Amara Nwosu",
// //     initials: "AN",
// //     total: "8,200",
// //     status: "Prepared Food",
// //     date: "Oct 24, 2023",
// //   },
// //   {
// //     id: "#ORD-7730",
// //     customer: "Chinelo Okoro",
// //     initials: "CO",
// //     total: "15,000",
// //     status: "Ready For Pick",
// //     date: "Oct 23, 2023",
// //   },
// //   {
// //     id: "#ORD-7729",
// //     customer: "David Obi",
// //     initials: "DO",
// //     total: "7,500",
// //     status: "Out of Delivered",
// //     date: "Oct 22, 2023",
// //   },
// //   {
// //     id: "#ORD-7729",
// //     customer: "Umoren Obi",
// //     initials: "DO",
// //     total: "7,500",
// //     status: " Delivered",
// //     date: "Oct 22, 2023",
// //   },
// // ];

// // const statusStyles = {
// //   "Received Order": "bg-[#DBEAFE] text-[#1D4ED8]",
// //   "Prepared Food": "bg-[#FFEDD5] text-[#C2410C]",
// //   "Ready For Pick": "bg-[#F3E8FF] text-[#7E22CE]",
// //   "Out of Delivered": "bg-[#FEF3C7] text-[#B45309]",
// //   "Delivered": "bg-[#DCFCE7] text-[#166534]",
// // };

// // export default function OrdersPage() {
// //   const [activeFilter, setActiveFilter] = useState("All");
// //   const navigate = useNavigate();

// //   const filteredOrders =
// //     activeFilter === "All"
// //       ? ordersData
// //       : ordersData.filter((order) => order.status === activeFilter);

// //   const filters = ["All", "Received Order", "Prepared Food", "Ready For Pick", "Out of Delivered"];

// //   return (
// //     <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
// //   {/* Header */}
// //   <div className="mb-6 mt-10">
// //     <h1 className="text-[32px] font-roboto text-black">Orders</h1>
// //     <p className="text-gray-500 text-sm"> View and manage all incoming food orders. </p>
// //   </div>

// //   {/* Search + Filters */}
// //   <div className="flex flex-wrap gap-4 mb-6 items-center">
// //     <div className="relative w-72 ">
// //       <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
// //       <input
// //         type="text"
// //         placeholder="Search order..."
// //         className="pl-10  pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px]  font-dm"
// //       />
// //     </div>

// //     <div className="flex gap-3">
// //       {filters.map((filter) => (
// //         <button
// //           key={filter}
// //           onClick={() => setActiveFilter(filter)}
// //           className={`px-4 py-2 text-sm transition rounded-[40px] rounded-tl-[5px] font-dm ${
// //             activeFilter === filter
// //               ? "bg-[#A61E30] text-white"
// //               : "bg-white border text-gray-600"
// //           }`}
// //         >
// //           {filter}
// //         </button>
// //       ))}
// //     </div>
// //   </div>

// //   {/* Table */}
// //   <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
// //     <table className="w-full text-left font-dm">
// //       <thead className="bg-gray-50 text-gray-500 text-sm">
// //         <tr>
// //           <th className="px-6 py-4 font-roboto">ORDER ID</th>
// //           <th className="px-6 py-4 font-roboto">CUSTOMER</th>
// //           <th className="px-6 py-4 font-roboto">TOTAL</th>
// //           <th className="px-6 py-4 font-roboto">STATUS</th>
// //           <th className="px-6 py-4 font-roboto">DATE</th>
// //           <th className="px-6 py-4 font-roboto">ACTION</th>
// //         </tr>
// //       </thead>
// //       <tbody>
// //         {filteredOrders.map((order, index) => (
// //           <tr
// //             key={index}
// //             onClick={() => navigate(`/dashboard/order/${order.id.replace("#", "")}`)}
// //             className="border-t hover:bg-gray-50 transition"
// //           >
// //             <td className="px-6 py-4 font-medium text-[#0F172A]">{order.id}</td>
// //             <td className="px-6 py-4 flex items-center gap-3">
// //               <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold bg-blue-100 text-blue-600">
// //                 {order.initials}
// //               </div>
// //               <span className="text-[#334155] font-dm">{order.customer}</span>
// //             </td>
// //             <td className="px-6 py-4 text-[#334155] font-dm">{order.total}</td>
// //             <td className="px-6 py-4">
// //               <span
// //                 className={`px-3 py-1 font-dm text-[#334155] rounded-full text-xs font-medium ${statusStyles[order.status]}`}
// //               >
// //                 {order.status}
// //               </span>
// //             </td>
// //             <td className="px-6 py-4 font-dm text-[#334155]">{order.date}</td>
// //             <td className="px-6 py-4 text-xl cursor-pointer font-dm text-[#334155]">⋯</td>
// //           </tr>
// //         ))}
// //       </tbody>
// //     </table>
// //   </div>
// // </div>
// //   );
// // }

// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { FiSearch } from "react-icons/fi";
// // import { getAllOrders } from "../api/apiServices"; //

// // const statusStyles = {
// //   "Received Order": "bg-[#DBEAFE] text-[#1D4ED8]",
// //   "Prepared Food": "bg-[#FFEDD5] text-[#C2410C]",
// //   "Ready For Pick": "bg-[#F3E8FF] text-[#7E22CE]",
// //   "Out of Delivered": "bg-[#FEF3C7] text-[#B45309]",
// //   Delivered: "bg-[#DCFCE7] text-[#166534]",
// // };

// // export default function OrdersPage() {
// //   const [activeFilter, setActiveFilter] = useState("All");
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const navigate = useNavigate();

// //   const filters = [
// //     "All",
// //     "Received Order",
// //     "Prepared Food",
// //     "Ready For Pick",
// //     "Out of Delivered",
// //   ];

// //   // Fetch orders
// //   const fetchOrders = async (status = "All", search = "") => {
// //     setLoading(true);
// //     try {
// //       const params = {};
// //       if (status !== "All") params.status = status.toLowerCase();
// //       if (search.trim()) params.search = search.trim();

// //       const response = await getAllOrders(params);

// //       if (response.success && response.data?.orders) {
// //         const apiOrders = response.data.orders;

// //         const formattedOrders = apiOrders.map((order) => ({
// //           id: `#ORD-${order.id || order.order_id || order.order_number || "0000"}`,
// //           rawId: order.id || order.order_id || order.order_number,
// //           customer:
// //             order.customer_name ||
// //             order.user?.name ||
// //             order.customer?.name ||
// //             "Unknown Customer",
// //           initials: (
// //             order.customer_name ||
// //             order.user?.name ||
// //             order.customer?.name ||
// //             "XX"
// //           )
// //             .split(" ")
// //             .map((n) => n[0])
// //             .join("")
// //             .toUpperCase()
// //             .slice(0, 2),
// //           total: order.total_amount
// //             ? Number(order.total_amount).toLocaleString()
// //             : "0",
// //           status: order.status
// //             ? order.status
// //                 .replace(/_/g, " ")
// //                 .replace(/\b\w/g, (l) => l.toUpperCase())
// //             : "Received Order",
// //           date: order.created_at
// //             ? new Date(order.created_at).toLocaleDateString("en-US", {
// //                 month: "short",
// //                 day: "numeric",
// //                 year: "numeric",
// //               })
// //             : "N/A",
// //         }));

// //         setOrders(formattedOrders);
// //       } else {
// //         setOrders([]);
// //       }
// //     } catch (err) {
// //       console.error("Failed to fetch orders:", err);
// //       setOrders([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Fetch when filter or search changes
// //   useEffect(() => {
// //     fetchOrders(activeFilter, searchTerm);
// //   }, [activeFilter, searchTerm]);

// //   const handleSearchChange = (e) => {
// //     setSearchTerm(e.target.value);
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
// //       {/* Header */}
// //       <div className="mb-6 mt-10">
// //         <h1 className="text-[32px] font-roboto text-black">Orders</h1>
// //         <p className="text-gray-500 text-sm">
// //           View and manage all incoming food orders.
// //         </p>
// //       </div>

// //       {/* Search + Filters */}
// //       <div className="flex flex-wrap gap-4 mb-6 items-center">
// //         <div className="relative w-72">
// //           <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
// //           <input
// //             type="text"
// //             placeholder="Search order..."
// //             value={searchTerm}
// //             onChange={handleSearchChange}
// //             className="pl-10 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
// //           />
// //         </div>

// //         <div className="flex gap-3">
// //           {filters.map((filter) => (
// //             <button
// //               key={filter}
// //               onClick={() => setActiveFilter(filter)}
// //               className={`px-4 py-2 text-sm transition rounded-[40px] rounded-tl-[5px] font-dm ${
// //                 activeFilter === filter
// //                   ? "bg-[#A61E30] text-white"
// //                   : "bg-white border text-gray-600"
// //               }`}
// //             >
// //               {filter}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Table */}
// //       <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
// //         <table className="w-full text-left font-dm">
// //           <thead className="bg-gray-50 text-gray-500 text-sm">
// //             <tr>
// //               <th className="px-6 py-4 font-roboto">ORDER ID</th>
// //               <th className="px-6 py-4 font-roboto">CUSTOMER</th>
// //               <th className="px-6 py-4 font-roboto">TOTAL</th>
// //               <th className="px-6 py-4 font-roboto">STATUS</th>
// //               <th className="px-6 py-4 font-roboto">DATE</th>
// //               <th className="px-6 py-4 font-roboto">ACTION</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {loading ? (
// //               <tr>
// //                 <td
// //                   colSpan="6"
// //                   className="px-6 py-16 text-center text-gray-500"
// //                 >
// //                   Loading orders...
// //                 </td>
// //               </tr>
// //             ) : orders.length === 0 ? (
// //               <tr>
// //                 <td
// //                   colSpan="6"
// //                   className="px-6 py-16 text-center text-gray-500"
// //                 >
// //                   No orders found
// //                 </td>
// //               </tr>
// //             ) : (
// //               orders.map((order, index) => (
// //                 <tr
// //                   key={index}
// //                   onClick={() => navigate(`/dashboard/order/${order.rawId}`)}
// //                   className="border-t hover:bg-gray-50 transition cursor-pointer"
// //                 >
// //                   <td className="px-6 py-4 font-medium text-[#0F172A]">
// //                     {order.id}
// //                   </td>
// //                   <td className="px-6 py-4 flex items-center gap-3">
// //                     <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold bg-blue-100 text-blue-600">
// //                       {order.initials}
// //                     </div>
// //                     <span className="text-[#334155] font-dm">
// //                       {order.customer}
// //                     </span>
// //                   </td>
// //                   <td className="px-6 py-4 text-[#334155] font-dm">
// //                     ₦{order.total}
// //                   </td>
// //                   <td className="px-6 py-4">
// //                     <span
// //                       className={`px-3 py-1 font-dm rounded-full text-xs font-medium ${
// //                         statusStyles[order.status] ||
// //                         "bg-gray-100 text-gray-600"
// //                       }`}
// //                     >
// //                       {order.status}
// //                     </span>
// //                   </td>
// //                   <td className="px-6 py-4 font-dm text-[#334155]">
// //                     {order.date}
// //                   </td>
// //                   <td className="px-6 py-4 text-xl cursor-pointer font-dm text-[#334155]">
// //                     ⋯
// //                   </td>
// //                 </tr>
// //               ))
// //             )}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }





// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { FiSearch } from "react-icons/fi";
// // import { getAllOrders } from "../api/apiServices"; 

// // const statusStyles = {
// //   "Paid": "bg-[#DCFCE7] text-[#166534]", // Green
// //   "Processing": "bg-[#FFEDD5] text-[#C2410C]", // Orange
// //   "Pending": "bg-[#FEF3C7] text-[#B45309]", // Amber
// //   "Cancelled": "bg-red-100 text-red-600",
// // };

// // export default function OrdersPage() {
// //   const [activeFilter, setActiveFilter] = useState("All");
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const navigate = useNavigate();

// //   const filters = [
// //     "All",
// //     "Paid",
// //     "Processing",
// //     "Pending",
// //   ];

// //   const fetchOrders = async (status = "All", search = "") => {
// //     setLoading(true);
// //     try {
// //       const params = {};
// //       // Match the API's expected query params
// //       if (status !== "All") params.status = status.toLowerCase();
// //       if (search.trim()) params.search = search.trim();

// //       const response = await getAllOrders(params);

// //       if (response.success && response.data?.orders) {
// //         const apiOrders = response.data.orders;

// //         const formattedOrders = apiOrders.map((order) => ({
// //           // Fix: Use the API's provided order_id directly
// //           displayId: order.order_id || `#${order.id}`,
// //           rawId: order.id,
// //           customer: order.customer?.name || "Unknown Customer",
// //           initials: order.customer?.initials || "??",
// //           // Fix: API returns "8,000" as a string with comma, so we use it directly
// //           total: order.total, 
// //           status: order.status || "Pending",
// //           // Fix: Use the API's pre-formatted date
// //           date: order.date || "N/A",
// //         }));

// //         setOrders(formattedOrders);
// //       } else {
// //         setOrders([]);
// //       }
// //     } catch (err) {
// //       console.error("Failed to fetch orders:", err);
// //       setOrders([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     const delayDebounceFn = setTimeout(() => {
// //       fetchOrders(activeFilter, searchTerm);
// //     }, 300); // Small debounce for search

// //     return () => clearTimeout(delayDebounceFn);
// //   }, [activeFilter, searchTerm]);

// //   return (
// //     <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
// //       <div className="mb-6 mt-10">
// //         <h1 className="text-[32px] font-roboto text-black">Orders</h1>
// //         <p className="text-gray-500 text-sm">
// //           View and manage all incoming food orders.
// //         </p>
// //       </div>

// //       <div className="flex flex-wrap gap-4 mb-6 items-center">
// //         <div className="relative w-72">
// //           <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
// //           <input
// //             type="text"
// //             placeholder="Search order..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             className="pl-10 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
// //           />
// //         </div>

// //         <div className="flex gap-3">
// //           {filters.map((filter) => (
// //             <button
// //               key={filter}
// //               onClick={() => setActiveFilter(filter)}
// //               className={`px-4 py-2 text-sm transition rounded-[40px] rounded-tl-[5px] font-dm ${
// //                 activeFilter === filter
// //                   ? "bg-[#A61E30] text-white"
// //                   : "bg-white border text-gray-600"
// //               }`}
// //             >
// //               {filter}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
// //         <table className="w-full text-left font-dm">
// //           <thead className="bg-gray-50 text-gray-500 text-sm">
// //             <tr>
// //               <th className="px-6 py-4 font-roboto">ORDER ID</th>
// //               <th className="px-6 py-4 font-roboto">CUSTOMER</th>
// //               <th className="px-6 py-4 font-roboto">TOTAL</th>
// //               <th className="px-6 py-4 font-roboto">STATUS</th>
// //               <th className="px-6 py-4 font-roboto">DATE</th>
// //               <th className="px-6 py-4 font-roboto">ACTION</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {loading ? (
// //               <tr>
// //                 <td colSpan="6" className="px-6 py-16 text-center text-gray-500">
// //                   Loading orders...
// //                 </td>
// //               </tr>
// //             ) : orders.length === 0 ? (
// //               <tr>
// //                 <td colSpan="6" className="px-6 py-16 text-center text-gray-500">
// //                   No orders found
// //                 </td>
// //               </tr>
// //             ) : (
// //               orders.map((order, index) => (
// //                 <tr
// //                   key={order.rawId || index}
// //                   onClick={() => navigate(`/dashboard/order/${order.rawId}`)}
// //                   className="border-t hover:bg-gray-50 transition cursor-pointer"
// //                 >
// //                   <td className="px-6 py-4 font-medium text-[#0F172A]">
// //                     {order.displayId}
// //                   </td>
// //                   <td className="px-6 py-4 flex items-center gap-3">
// //                     <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold bg-blue-100 text-blue-600 uppercase">
// //                       {order.initials}
// //                     </div>
// //                     <span className="text-[#334155] font-dm">
// //                       {order.customer}
// //                     </span>
// //                   </td>
// //                   <td className="px-6 py-4 text-[#334155] font-dm">
// //                     ₦{order.total}
// //                   </td>
// //                   <td className="px-6 py-4">
// //                     <span
// //                       className={`px-3 py-1 font-dm rounded-full text-xs font-medium ${
// //                         statusStyles[order.status] || "bg-gray-100 text-gray-600"
// //                       }`}
// //                     >
// //                       {order.status}
// //                     </span>
// //                   </td>
// //                   <td className="px-6 py-4 font-dm text-[#334155]">
// //                     {order.date}
// //                   </td>
// //                   <td className="px-6 py-4 text-xl cursor-pointer font-dm text-[#334155]">
// //                     ⋯
// //                   </td>
// //                 </tr>
// //               ))
// //             )}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }



// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { FiSearch } from "react-icons/fi";
// // import { getAllOrders } from "../api/apiServices"; 

// // // Unique color mapping strictly for the delivery workflow
// // const statusStyles = {
// //   "Order Received": "bg-blue-100 text-blue-700 border-blue-200",
// //   "Preparing Food": "bg-purple-100 text-purple-700 border-purple-200",
// //   "Ready to Pickup": "bg-yellow-100 text-yellow-800 border-yellow-200",
// //   "Out for Delivery": "bg-orange-100 text-orange-700 border-orange-200",
// //   "Delivered": "bg-green-100 text-green-700 border-green-200",
// // };

// // export default function OrdersPage() {
// //   const [activeFilter, setActiveFilter] = useState("All");
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const navigate = useNavigate();

// //   // Updated Filters: strictly operational statuses
// //   const filters = [
// //     "All", 
// //     "Order Received", 
// //     "Preparing Food", 
// //     "Ready to Pickup", 
// //     "Out for Delivery", 
// //     "Delivered"
// //   ];

// //   const fetchOrders = async (status = "All", search = "") => {
// //     setLoading(true);
// //     try {
// //       const params = {};
// //       // Logic to handle conversion from Display labels to API slugs
// //       if (status !== "All") params.status = status.toLowerCase().replace(/ /g, "_");
// //       if (search.trim()) params.search = search.trim();

// //       const response = await getAllOrders(params);

// //       if (response.success && response.data?.orders) {
// //         const formattedOrders = response.data.orders.map((order) => ({
// //           displayId: order.order_id || `#${order.id}`,
// //           rawId: order.id,
// //           customer: order.customer?.name || "Unknown Customer",
// //           initials: order.customer?.initials || 
// //                    (order.customer?.name ? order.customer.name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase() : "?"),
// //           total: order.total, 
// //           status: order.status || "Order Received",
// //           date: order.date || "N/A",
// //         }));

// //         setOrders(formattedOrders);
// //       } else {
// //         setOrders([]);
// //       }
// //     } catch (err) {
// //       console.error("Failed to fetch orders:", err);
// //       setOrders([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     const delayDebounceFn = setTimeout(() => {
// //       fetchOrders(activeFilter, searchTerm);
// //     }, 300);
// //     return () => clearTimeout(delayDebounceFn);
// //   }, [activeFilter, searchTerm]);

// //   return (
// //     <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
// //       <div className="mb-6 mt-10">
// //         <h1 className="text-[32px] font-roboto text-black">Orders</h1>
// //         <p className="text-gray-500 text-sm">
// //           View and manage all incoming food orders.
// //         </p>
// //       </div>

// //       <div className="flex flex-wrap gap-4 mb-6 items-center">
// //         <div className="relative w-72">
// //           <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
// //           <input
// //             type="text"
// //             placeholder="Search order..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             className="pl-10 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
// //           />
// //         </div>

// //         <div className="flex gap-3 overflow-x-auto pb-2">
// //           {filters.map((filter) => (
// //             <button
// //               key={filter}
// //               onClick={() => setActiveFilter(filter)}
// //               className={`px-4 py-2 text-sm transition rounded-[40px] rounded-tl-[5px] font-dm whitespace-nowrap ${
// //                 activeFilter === filter
// //                   ? "bg-[#A61E30] text-white"
// //                   : "bg-white border text-gray-600"
// //               }`}
// //             >
// //               {filter}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
// //         <table className="w-full text-left font-dm">
// //           <thead className="bg-gray-50 text-gray-500 text-sm">
// //             <tr>
// //               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">ORDER ID</th>
// //               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">CUSTOMER</th>
// //               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">TOTAL</th>
// //               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">STATUS</th>
// //               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">DATE</th>
// //               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider text-right">ACTION</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {loading ? (
// //               <tr>
// //                 <td colSpan="6" className="px-6 py-16 text-center text-gray-500">Loading orders...</td>
// //               </tr>
// //             ) : orders.length === 0 ? (
// //               <tr>
// //                 <td colSpan="6" className="px-6 py-16 text-center text-gray-500">No orders found</td>
// //               </tr>
// //             ) : (
// //               orders.map((order, index) => {
// //                 const currentStyle = statusStyles[order.status] || "bg-gray-100 text-gray-600 border-gray-200";
                
// //                 return (
// //                   <tr
// //                     key={order.rawId || index}
// //                     onClick={() => navigate(`/dashboard/order/${order.rawId}`)}
// //                     className="border-t hover:bg-gray-50 transition cursor-pointer"
// //                   >
// //                     <td className="px-6 py-4 font-medium text-[#0F172A]">
// //                       {order.displayId}
// //                     </td>
// //                     <td className="px-6 py-4 flex items-center gap-3">
// //                       {/* Avatar background matches status color */}
// //                       <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold uppercase border ${currentStyle}`}>
// //                         {order.initials}
// //                       </div>
// //                       <span className="text-[#334155] font-dm text-sm font-medium">
// //                         {order.customer}
// //                       </span>
// //                     </td>
// //                     <td className="px-6 py-4 text-[#334155] font-dm text-sm font-bold">
// //                       ₦{order.total}
// //                     </td>
// //                     <td className="px-6 py-4">
// //                       {/* Status badge background matches avatar color */}
// //                       <span className={`px-3 py-1 font-dm rounded-full text-[10px] font-bold border uppercase tracking-tight ${currentStyle}`}>
// //                         {order.status}
// //                       </span>
// //                     </td>
// //                     <td className="px-6 py-4 font-dm text-[#334155] text-sm">
// //                       {order.date}
// //                     </td>
// //                     <td className="px-6 py-4 text-xl text-right font-dm text-gray-300">
// //                       ⋯
// //                     </td>
// //                   </tr>
// //                 );
// //               })
// //             )}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }





// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { FiSearch } from "react-icons/fi";
// // import { getAllOrders } from "../api/apiServices"; 

// // const statusStyles = {
// //   "Order Received": "bg-blue-100 text-blue-700 border-blue-200",
// //   "Preparing Food": "bg-purple-100 text-purple-700 border-purple-200",
// //   "Ready to Pickup": "bg-yellow-100 text-yellow-800 border-yellow-200",
// //   "Out for Delivery": "bg-orange-100 text-orange-700 border-orange-200",
// //   "Delivered": "bg-green-100 text-green-700 border-green-200",
// // };

// // // Mapper to translate API slugs to UI Labels
// // const apiToUiStatus = {
// //   "received": "Order Received",
// //   "prepared": "Preparing Food",
// //   "Ready_for_pick": "Ready to Pickup",
// //   "out_for_delivery": "Out for Delivery",
// //   "delivered": "Delivered"
// // };

// // export default function OrdersPage() {
// //   const [activeFilter, setActiveFilter] = useState("All");
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const navigate = useNavigate();

// //   const filters = ["All", "Order Received", "Preparing Food", "Ready to Pickup", "Out for Delivery", "Delivered"];

// //   const fetchOrders = async (status = "All", search = "") => {
// //     setLoading(true);
// //     try {
// //       const params = {};
// //       if (status !== "All") {
// //         // Reverse map UI label back to API slug for filtering
// //         const slug = Object.keys(apiToUiStatus).find(key => apiToUiStatus[key] === status);
// //         params.status = slug;
// //       }
// //       if (search.trim()) params.search = search.trim();

// //       const response = await getAllOrders(params);

// //       if (response.success && response.data?.orders) {
// //         const formattedOrders = response.data.orders.map((order) => ({
// //           displayId: order.order_number || `#${order.id}`,
// //           rawId: order.id,
// //           customer: order.customer?.name || "Unknown Customer",
// //           initials: order.customer?.name ? order.customer.name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase() : "?",
// //           total: order.payment?.total || order.total, 
// //           status: apiToUiStatus[order.status] || order.status, // Map the slug to UI label
// //           date: order.created_at || "N/A",
// //         }));
// //         setOrders(formattedOrders);
// //       } else {
// //         setOrders([]);
// //       }
// //     } catch (err) {
// //       setOrders([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     const delayDebounceFn = setTimeout(() => {
// //       fetchOrders(activeFilter, searchTerm);
// //     }, 300);
// //     return () => clearTimeout(delayDebounceFn);
// //   }, [activeFilter, searchTerm]);

// //   return (
// //     <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
// //       <div className="mb-6 mt-10">
// //         <h1 className="text-[32px] font-roboto text-black">Orders</h1>
// //         <p className="text-gray-500 text-sm">View and manage all incoming food orders.</p>
// //       </div>

// //       <div className="flex flex-wrap gap-4 mb-6 items-center">
// //         <div className="relative w-72">
// //           <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
// //           <input
// //             type="text"
// //             placeholder="Search order..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             className="pl-10 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
// //           />
// //         </div>
// //         <div className="flex gap-3 overflow-x-auto pb-2">
// //           {filters.map((filter) => (
// //             <button
// //               key={filter}
// //               onClick={() => setActiveFilter(filter)}
// //               className={`px-4 py-2 text-sm transition rounded-[40px] rounded-tl-[5px] font-dm whitespace-nowrap ${
// //                 activeFilter === filter ? "bg-[#A61E30] text-white" : "bg-white border text-gray-600"
// //               }`}
// //             >
// //               {filter}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
// //         <table className="w-full text-left font-dm">
// //           <thead className="bg-gray-50 text-gray-500 text-sm">
// //             <tr>
// //               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">ORDER ID</th>
// //               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">CUSTOMER</th>
// //               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">TOTAL</th>
// //               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">STATUS</th>
// //               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">DATE</th>
// //               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider text-right">ACTION</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {loading ? (
// //               <tr><td colSpan="6" className="px-6 py-16 text-center text-gray-500">Loading orders...</td></tr>
// //             ) : orders.length === 0 ? (
// //               <tr><td colSpan="6" className="px-6 py-16 text-center text-gray-500">No orders found</td></tr>
// //             ) : (
// //               orders.map((order, index) => (
// //                 <tr
// //                   key={order.rawId || index}
// //                   onClick={() => navigate(`/dashboard/order/${order.rawId}`)}
// //                   className="border-t hover:bg-gray-50 transition cursor-pointer"
// //                 >
// //                   <td className="px-6 py-4 font-medium text-[#0F172A]">{order.displayId}</td>
// //                   <td className="px-6 py-4 flex items-center gap-3">
// //                     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold uppercase border ${statusStyles[order.status] || "bg-gray-100"}`}>
// //                       {order.initials}
// //                     </div>
// //                     <span className="text-[#334155] font-dm text-sm font-medium">{order.customer}</span>
// //                   </td>
// //                   <td className="px-6 py-4 text-[#334155] font-dm text-sm font-bold">₦{order.total}</td>
// //                   <td className="px-6 py-4">
// //                     <span className={`px-3 py-1 font-dm rounded-full text-[10px] font-bold border uppercase tracking-tight ${statusStyles[order.status] || "bg-gray-100"}`}>
// //                       {order.status}
// //                     </span>
// //                   </td>
// //                   <td className="px-6 py-4 font-dm text-[#334155] text-sm">{order.date}</td>
// //                   <td className="px-6 py-4 text-xl text-right font-dm text-gray-300">⋯</td>
// //                 </tr>
// //               ))
// //             )}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }






// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FiSearch } from "react-icons/fi";
// import { getAllOrders } from "../api/apiServices"; 

// const statusStyles = {
//   "Order Received": "bg-blue-100 text-blue-700 border-blue-200",
//   "Preparing Food": "bg-purple-100 text-purple-700 border-purple-200",
//   "Ready to Pickup": "bg-yellow-100 text-yellow-800 border-yellow-200",
//   "Out for Delivery": "bg-orange-100 text-orange-700 border-orange-200",
//   "Delivered": "bg-green-100 text-green-700 border-green-200",
// };

// // Mapper to translate API slugs to UI Labels
// const apiToUiStatus = {
//   "received": "Order Received",
//   "prepared": "Preparing Food",
//   "Ready_for_pick": "Ready to Pickup",
//   "out_for_delivery": "Out for Delivery",
//   "delivered": "Delivered"
// };

// export default function OrdersPage() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const filters = ["All", "Order Received", "Preparing Food", "Ready to Pickup", "Out for Delivery", "Delivered"];

//   const fetchOrders = async (status = "All", search = "") => {
//     setLoading(true);
//     try {
//       const params = {};
//       if (status !== "All") {
//         const slug = Object.keys(apiToUiStatus).find(key => apiToUiStatus[key] === status);
//         params.status = slug;
//       }
//       if (search.trim()) params.search = search.trim();

//       const response = await getAllOrders(params);

//       if (response.success && response.data?.orders) {
//         const formattedOrders = response.data.orders.map((order) => {
//           // Map the status slug to UI label
//           const uiStatusLabel = apiToUiStatus[order.status] || order.status;
          
//           return {
//             displayId: order.order_number || `#${order.id}`,
//             rawId: order.id,
//             customer: order.customer?.name || "Unknown Customer",
//             initials: order.customer?.name 
//               ? order.customer.name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase() 
//               : "?",
//             total: order.payment?.total || order.total, 
//             status: uiStatusLabel, 
//             // Ensure we use created_at as per your API response sample
//             date: order.created_at || order.date || "N/A",
//           };
//         });
//         setOrders(formattedOrders);
//       } else {
//         setOrders([]);
//       }
//     } catch (err) {
//       console.error("Fetch error:", err);
//       setOrders([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // This ensures that when you click "Back" from Order Details, 
//   // the list refreshes to show the updated status and date.
//   useEffect(() => {
//     const delayDebounceFn = setTimeout(() => {
//       fetchOrders(activeFilter, searchTerm);
//     }, 300);
//     return () => clearTimeout(delayDebounceFn);
//   }, [activeFilter, searchTerm]);

//   return (
//     <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
//       <div className="mb-6 mt-10">
//         <h1 className="text-[32px] font-roboto text-black">Orders</h1>
//         <p className="text-gray-500 text-sm">View and manage all incoming food orders.</p>
//       </div>

//       <div className="flex flex-wrap gap-4 mb-6 items-center">
//         <div className="relative w-72">
//           <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//           <input
//             type="text"
//             placeholder="Search order..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-10 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//           />
//         </div>
//         <div className="flex gap-3 overflow-x-auto pb-2">
//           {filters.map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setActiveFilter(filter)}
//               className={`px-4 py-2 text-sm transition rounded-[40px] rounded-tl-[5px] font-dm whitespace-nowrap ${
//                 activeFilter === filter ? "bg-[#A61E30] text-white" : "bg-white border text-gray-600"
//               }`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
//         <table className="w-full text-left font-dm">
//           <thead className="bg-gray-50 text-gray-500 text-sm">
//             <tr>
//               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">ORDER ID</th>
//               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">CUSTOMER</th>
//               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">TOTAL</th>
//               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">STATUS</th>
//               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">DATE</th>
//               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider text-right">ACTION</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loading ? (
//               <tr><td colSpan="6" className="px-6 py-16 text-center text-gray-500">Loading orders...</td></tr>
//             ) : orders.length === 0 ? (
//               <tr><td colSpan="6" className="px-6 py-16 text-center text-gray-500">No orders found</td></tr>
//             ) : (
//               orders.map((order, index) => (
//                 <tr
//                   key={order.rawId || index}
//                   onClick={() => navigate(`/dashboard/order/${order.rawId}`)}
//                   className="border-t hover:bg-gray-50 transition cursor-pointer"
//                 >
//                   <td className="px-6 py-4 font-medium text-[#0F172A]">{order.displayId}</td>
//                   <td className="px-6 py-4 flex items-center gap-3">
//                     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold uppercase border ${statusStyles[order.status] || "bg-gray-100"}`}>
//                       {order.initials}
//                     </div>
//                     <span className="text-[#334155] font-dm text-sm font-medium">{order.customer}</span>
//                   </td>
//                   <td className="px-6 py-4 text-[#334155] font-dm text-sm font-bold">₦{order.total}</td>
//                   <td className="px-6 py-4">
//                     <span className={`px-3 py-1 font-dm rounded-full text-[10px] font-bold border uppercase tracking-tight ${statusStyles[order.status] || "bg-gray-100"}`}>
//                       {order.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 font-dm text-[#334155] text-sm">{order.date}</td>
//                   <td className="px-6 py-4 text-xl text-right font-dm text-gray-300">⋯</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }







// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FiSearch } from "react-icons/fi";
// import { getAllOrders } from "../api/apiServices"; 

// const statusStyles = {
//   "Order Received": "bg-blue-100 text-blue-700 border-blue-200",
//   "Preparing Food": "bg-purple-100 text-purple-700 border-purple-200",
//   "Ready to Pickup": "bg-yellow-100 text-yellow-800 border-yellow-200",
//   "Out for Delivery": "bg-orange-100 text-orange-700 border-orange-200",
//   "Delivered": "bg-green-100 text-green-700 border-green-200",
// };

// const apiToUiStatus = {
//   "received": "Order Received",
//   "Order Received": "Order Received", // Handle both cases
//   "prepared": "Preparing Food",
//   "Ready_for_pick": "Ready to Pickup",
//   "out_for_delivery": "Out for Delivery",
//   "delivered": "Delivered",
//   "Received": "Order Received"
// };

// export default function OrdersPage() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const filters = ["All", "Order Received", "Preparing Food", "Ready to Pickup", "Out for Delivery", "Delivered"];

//   const fetchOrders = async (status = "All", search = "") => {
//     setLoading(true);
//     try {
//       const params = {};
//       if (status !== "All") {
//         const slug = Object.keys(apiToUiStatus).find(key => apiToUiStatus[key] === status);
//         params.status = slug;
//       }
//       if (search.trim()) params.search = search.trim();

//       const response = await getAllOrders(params);

//       if (response.success && response.data?.orders) {
//         const formattedOrders = response.data.orders.map((order) => ({
//           displayId: order.order_id, // Use order_id string (#QP-...)
//           rawId: order.id,           // Use numeric ID for the route path
//           customer: order.customer?.name || "Unknown Customer",
//           initials: order.customer?.initials || "?",
//           total: order.total, 
//           status: apiToUiStatus[order.status] || order.status, 
//           date: order.date || "N/A", // Use the data.date field
//         }));
//         setOrders(formattedOrders);
//       } else {
//         setOrders([]);
//       }
//     } catch (err) {
//       console.error("Fetch error:", err);
//       setOrders([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const delayDebounceFn = setTimeout(() => {
//       fetchOrders(activeFilter, searchTerm);
//     }, 300);
//     return () => clearTimeout(delayDebounceFn);
//   }, [activeFilter, searchTerm]);

//   return (
//     <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
//       <div className="mb-6 mt-10">
//         <h1 className="text-[32px] font-roboto text-black">Orders</h1>
//         <p className="text-gray-500 text-sm">View and manage all incoming food orders.</p>
//       </div>

//       <div className="flex flex-wrap gap-4 mb-6 items-center">
//         <div className="relative w-72">
//           <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//           <input
//             type="text"
//             placeholder="Search order..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-10 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//           />
//         </div>
//         <div className="flex gap-3 overflow-x-auto pb-2">
//           {filters.map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setActiveFilter(filter)}
//               className={`px-4 py-2 text-sm transition rounded-[40px] rounded-tl-[5px] font-dm whitespace-nowrap ${
//                 activeFilter === filter ? "bg-[#A61E30] text-white" : "bg-white border text-gray-600"
//               }`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
//         <table className="w-full text-left font-dm">
//           <thead className="bg-gray-50 text-gray-500 text-sm">
//             <tr>
//               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">ORDER ID</th>
//               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">CUSTOMER</th>
//               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">TOTAL</th>
//               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">STATUS</th>
//               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">DATE</th>
//               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider text-right">ACTION</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loading ? (
//               <tr><td colSpan="6" className="px-6 py-16 text-center text-gray-500">Loading orders...</td></tr>
//             ) : orders.length === 0 ? (
//               <tr><td colSpan="6" className="px-6 py-16 text-center text-gray-500">No orders found</td></tr>
//             ) : (
//               orders.map((order, index) => (
//                 <tr
//                   key={order.rawId || index}
//                   onClick={() => navigate(`/dashboard/order/${order.rawId}`)}
//                   className="border-t hover:bg-gray-50 transition cursor-pointer"
//                 >
//                   <td className="px-6 py-4 font-medium text-[#0F172A]">{order.displayId}</td>
//                   <td className="px-6 py-4 flex items-center gap-3">
//                     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold uppercase border ${statusStyles[order.status] || "bg-gray-100"}`}>
//                       {order.initials}
//                     </div>
//                     <span className="text-[#334155] font-dm text-sm font-medium">{order.customer}</span>
//                   </td>
//                   <td className="px-6 py-4 text-[#334155] font-dm text-sm font-bold">₦{order.total}</td>
//                   <td className="px-6 py-4">
//                     <span className={`px-3 py-1 font-dm rounded-full text-[10px] font-bold border uppercase tracking-tight ${statusStyles[order.status] || "bg-gray-100"}`}>
//                       {order.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 font-dm text-[#334155] text-sm">{order.date}</td>
//                   <td className="px-6 py-4 text-xl text-right font-dm text-gray-300">⋯</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect, useCallback } from "react";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { FiSearch } from "react-icons/fi";
// import { getAllOrders } from "../api/apiServices"; 

// const statusStyles = {
//   "Order Received": "bg-blue-100 text-blue-700 border-blue-200",
//   "Preparing Food": "bg-purple-100 text-purple-700 border-purple-200",
//   "Ready to Pickup": "bg-yellow-100 text-yellow-800 border-yellow-200",
//   "Out for Delivery": "bg-orange-100 text-orange-700 border-orange-200",
//   "Delivered": "bg-green-100 text-green-700 border-green-200",
// };

// const apiToUiStatus = {
//   "received": "Order Received",
//   "Order Received": "Order Received",
//   "prepared": "Preparing Food",
//   "Ready_for_pick": "Ready to Pickup",
//   "out_for_delivery": "Out for Delivery",
//   "delivered": "Delivered",
//   "Received": "Order Received"
  
// };

// export default function OrdersPage() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();

//   const filters = ["All", "Order Received", "Preparing Food", "Ready to Pickup", "Out for Delivery", "Delivered"];

//   const fetchOrders = useCallback(async (status = "All", search = "") => {
//     try {
//       const params = {};
//       if (status !== "All") {
//         const slug = Object.keys(apiToUiStatus).find(key => apiToUiStatus[key] === status);
//         params.status = slug;
//       }
//       if (search.trim()) params.search = search.trim();

//       const response = await getAllOrders(params);

//       if (response.success && response.data?.orders) {
//         const formattedOrders = response.data.orders.map((order) => ({
//           displayId: order.order_id,
//           rawId: order.id,
//           customer: order.customer?.name || "Unknown Customer",
//           initials: order.customer?.initials || "?",
//           total: order.total, 
//           status: apiToUiStatus[order.status] || order.status, 
//           date: order.date || "N/A",
//         }));
//         setOrders(formattedOrders);
//       } else {
//         setOrders([]);
//       }
//     } catch (err) {
//       console.error("Fetch error:", err);
//       setOrders([]);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   // Sync data whenever search, filter, or page focus changes
//   // useEffect(() => {
//   //   const delayDebounceFn = setTimeout(() => {
//   //     fetchOrders(activeFilter, searchTerm);
//   //   }, 300);

//   //   // Refresh when user returns to this tab/window
//   //   window.addEventListener("focus", () => fetchOrders(activeFilter, searchTerm));

//   //   return () => {
//   //     clearTimeout(delayDebounceFn);
//   //     window.removeEventListener("focus", () => fetchOrders(activeFilter, searchTerm));
//   //   };
//   // }, [activeFilter, searchTerm, fetchOrders]);

//  useEffect(() => {
//   const delayDebounceFn = setTimeout(() => {
//     fetchOrders(activeFilter, searchTerm, true);
//   }, 300);

//   return () => clearTimeout(delayDebounceFn);
// }, [activeFilter, searchTerm]);

//   return (
//     <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
//       <div className="mb-6 mt-10">
//         <h1 className="text-[32px] font-roboto text-black">Orders</h1>
//         <p className="text-gray-500 text-sm">View and manage all incoming food orders.</p>
//       </div>

//       <div className="flex flex-wrap gap-4 mb-6 items-center">
//         <div className="relative w-72">
//           <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//           <input
//             type="text"
//             placeholder="Search order..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-10 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//           />
//         </div>
//         <div className="flex gap-3 overflow-x-auto pb-2">
//           {filters.map((filter) => (
//             <button
//               key={filter}
//               onClick={() => {
//                 setLoading(true);
//                 setActiveFilter(filter);
//               }}
//               className={`px-4 py-2 text-sm transition rounded-[40px] rounded-tl-[5px] font-dm whitespace-nowrap ${
//                 activeFilter === filter ? "bg-[#A61E30] text-white" : "bg-white border text-gray-600"
//               }`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
//         <table className="w-full text-left font-dm">
//           <thead className="bg-gray-50 text-gray-500 text-sm">
//             <tr>
//               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">ORDER ID</th>
//               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">CUSTOMER</th>
//               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">TOTAL</th>
//               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">STATUS</th>
//               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">DATE</th>
//               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider text-right">ACTION</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loading ? (
//               <tr><td colSpan="6" className="px-6 py-16 text-center text-gray-500">Loading orders...</td></tr>
//             ) : orders.length === 0 ? (
//               <tr><td colSpan="6" className="px-6 py-16 text-center text-gray-500">No orders found</td></tr>
//             ) : (
//               orders.map((order, index) => (
//                 <tr
//                   key={order.rawId || index}
//                   onClick={() => navigate(`/dashboard/order/${order.rawId}`)}
//                   className="border-t hover:bg-gray-50 transition cursor-pointer"
//                 >
//                   <td className="px-6 py-4 font-medium text-[#0F172A]">{order.displayId}</td>
//                   <td className="px-6 py-4 flex items-center gap-3">
//                     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold uppercase border ${statusStyles[order.status] || "bg-gray-100"}`}>
//                       {order.initials}
//                     </div>
//                     <span className="text-[#334155] font-dm text-sm font-medium">{order.customer}</span>
//                   </td>
//                   <td className="px-6 py-4 text-[#334155] font-dm text-sm font-bold">₦{order.total}</td>
//                   <td className="px-6 py-4">
//                     <span className={`px-3 py-1 font-dm rounded-full text-[10px] font-bold border uppercase tracking-tight ${statusStyles[order.status] || "bg-gray-100"}`}>
//                       {order.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 font-dm text-[#334155] text-sm">{order.date}</td>
//                   <td className="px-6 py-4 text-xl text-right font-dm text-gray-300">⋯</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  received: "Order Received",
  Received: "Order Received",
  "Order Received": "Order Received",
  prepared: "Preparing Food",
  Ready_for_pick: "Ready to Pickup",
  out_for_delivery: "Out for Delivery",
  delivered: "Delivered",
};

export default function OrdersPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const filters = [
    "All",
    "Order Received",
    "Preparing Food",
    "Ready to Pickup",
    "Out for Delivery",
    "Delivered",
  ];

  /**
   * Fetch Orders
   */
  const fetchOrders = useCallback(async (status = "All", search = "") => {
    try {
      const params = {};

      // Convert UI filter to API slug safely
      if (status !== "All") {
        const slug = Object.entries(apiToUiStatus).find(
          ([key, value]) => value === status
        )?.[0];

        if (slug) params.status = slug;
      }

      if (search.trim()) {
        params.search = search.trim();
      }

      const response = await getAllOrders(params);

      if (response.success && response.data?.orders) {
        const formattedOrders = response.data.orders.map((order) => ({
          displayId: order.order_id,
          rawId: order.id,
          customer: order.customer?.name || "Unknown Customer",
          initials: order.customer?.initials || "?",
          total: order.total,

          // 🔥 Support BOTH status + payment_status
          status:
            apiToUiStatus[order.payment_status] ||
            apiToUiStatus[order.status] ||
            order.payment_status ||
            order.status,

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

  /**
   * Fetch when filter changes (instant)
   */
  useEffect(() => {
    setLoading(true);
    fetchOrders(activeFilter, searchTerm);
  }, [activeFilter, fetchOrders]);

  /**
   * Debounce search
   */
  useEffect(() => {
    const delay = setTimeout(() => {
      fetchOrders(activeFilter, searchTerm);
    }, 400);

    return () => clearTimeout(delay);
  }, [searchTerm, fetchOrders, activeFilter]);

  /**
   * Instant UI update when returning from OrderDetailPage
   */
  useEffect(() => {
    if (location.state?.updatedOrder) {
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.rawId === location.state.updatedOrder.id
            ? {
                ...order,
                status:
                  apiToUiStatus[
                    location.state.updatedOrder.status
                  ] || location.state.updatedOrder.status,
              }
            : order
        )
      );
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
      {/* Header */}
      <div className="mb-6 mt-10">
        <h1 className="text-[32px] font-roboto text-black">Orders</h1>
        <p className="text-gray-500 text-sm">
          View and manage all incoming food orders.
        </p>
      </div>

      {/* Search + Filters */}
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
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm transition rounded-[40px] rounded-tl-[5px] font-dm whitespace-nowrap ${
                activeFilter === filter
                  ? "bg-[#A61E30] text-white"
                  : "bg-white border text-gray-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left font-dm">
          <thead className="bg-gray-50 text-gray-500 text-sm">
            <tr>
              <th className="px-6 py-4 font-roboto text-[11px] uppercase">
                ORDER ID
              </th>
              <th className="px-6 py-4 font-roboto text-[11px] uppercase">
                CUSTOMER
              </th>
              <th className="px-6 py-4 font-roboto text-[11px] uppercase">
                TOTAL
              </th>
              <th className="px-6 py-4 font-roboto text-[11px] uppercase">
                STATUS
              </th>
              <th className="px-6 py-4 font-roboto text-[11px] uppercase">
                DATE
              </th>
              <th className="px-6 py-4 font-roboto text-[11px] uppercase text-right">
                ACTION
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-16 text-center text-gray-500"
                >
                  Loading orders...
                </td>
              </tr>
            ) : orders.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-16 text-center text-gray-500"
                >
                  No orders found
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr
                  key={order.rawId}
                  onClick={() =>
                    navigate(`/dashboard/order/${order.rawId}`)
                  }
                  className="border-t hover:bg-gray-50 transition cursor-pointer"
                >
                  <td className="px-6 py-4 font-medium text-[#0F172A]">
                    {order.displayId}
                  </td>

                  <td className="px-6 py-4 flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold uppercase border ${
                        statusStyles[order.status] || "bg-gray-100"
                      }`}
                    >
                      {order.initials}
                    </div>

                    <span className="text-[#334155] text-sm font-medium">
                      {order.customer}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-[#334155] text-sm font-bold">
                    ₦{order.total}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold border uppercase ${
                        statusStyles[order.status] || "bg-gray-100"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-[#334155] text-sm">
                    {order.date}
                  </td>

                  <td className="px-6 py-4 text-xl text-right text-gray-300">
                    ⋯
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}




// import React, { useState, useEffect, useCallback, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { FiSearch } from "react-icons/fi";
// import { getAllOrders } from "../api/apiServices"; 

// const statusStyles = {
//   "Order Received": "bg-blue-100 text-blue-700 border-blue-200",
//   "Preparing Food": "bg-purple-100 text-purple-700 border-purple-200",
//   "Ready to Pickup": "bg-yellow-100 text-yellow-800 border-yellow-200",
//   "Out for Delivery": "bg-orange-100 text-orange-700 border-orange-200",
//   "Delivered": "bg-green-100 text-green-700 border-green-200",
// };

// const apiToUiStatus = {
//   "received": "Order Received",
//   "Received": "Order Received",
//   "Order Received": "Order Received",
//   "prepared": "Preparing Food",
//   "Ready_for_pick": "Ready to Pickup",
//   "out_for_delivery": "Out for Delivery",
//   "delivered": "Delivered",
// };

// export default function OrdersPage() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();
  
//   // Use a ref to track current values for the focus listener
//   const filterRef = useRef(activeFilter);
//   const searchRef = useRef(searchTerm);

//   useEffect(() => {
//     filterRef.current = activeFilter;
//     searchRef.current = searchTerm;
//   }, [activeFilter, searchTerm]);

//   const filters = ["All", "Order Received", "Preparing Food", "Ready to Pickup", "Out for Delivery", "Delivered"];

//   const fetchOrders = useCallback(async (status = "All", search = "", showLoader = false) => {
//     if (showLoader) setLoading(true);
//     try {
//       const params = {};
      
//       // Map UI filter back to API keys
//       if (status !== "All") {
//         const slug = Object.keys(apiToUiStatus).find(key => apiToUiStatus[key] === status);
//         params.status = slug;
//       }
      
//       if (search.trim()) {
//         params.search = search.trim();
//       }

//       const response = await getAllOrders(params);

//       if (response.success && response.data?.orders) {
//         const formattedOrders = response.data.orders.map((order) => ({
//           displayId: order.order_id,
//           rawId: order.id,
//           customer: order.customer?.name || "Unknown Customer",
//           initials: order.customer?.initials || "?",
//           total: order.total, 
//           status: apiToUiStatus[order.status] || order.status, 
//           date: order.date || "N/A",
//         }));
//         setOrders(formattedOrders);
//       } else {
//         setOrders([]);
//       }
//     } catch (err) {
//       console.error("Fetch error:", err);
//       setOrders([]);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   // 1. Initial Load and Debounced Search/Filter
//   useEffect(() => {
//     const delayDebounceFn = setTimeout(() => {
//       fetchOrders(activeFilter, searchTerm, true);
//     }, 300);
//     return () => clearTimeout(delayDebounceFn);
//   }, [activeFilter, searchTerm, fetchOrders]);

//   // 2. Refresh when returning to this page/tab
//   useEffect(() => {
//     const handleFocus = () => {
//       fetchOrders(filterRef.current, searchRef.current, false);
//     };

//     window.addEventListener("focus", handleFocus);
//     // Trigger immediately on mount to catch updates from the detail page
//     handleFocus();

//     return () => window.removeEventListener("focus", handleFocus);
//   }, [fetchOrders]);

//   return (
//     <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
//       <div className="mb-6 mt-10">
//         <h1 className="text-[32px] font-roboto text-black">Orders</h1>
//         <p className="text-gray-500 text-sm">View and manage all incoming food orders.</p>
//       </div>

//       <div className="flex flex-wrap gap-4 mb-6 items-center">
//         <div className="relative w-72">
//           <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//           <input
//             type="text"
//             placeholder="Search order..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-10 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//           />
//         </div>
//         <div className="flex gap-3 overflow-x-auto pb-2">
//           {filters.map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setActiveFilter(filter)}
//               className={`px-4 py-2 text-sm transition rounded-[40px] rounded-tl-[5px] font-dm whitespace-nowrap ${
//                 activeFilter === filter ? "bg-[#A61E30] text-white" : "bg-white border text-gray-600"
//               }`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
//         <table className="w-full text-left font-dm">
//           <thead className="bg-gray-50 text-gray-500 text-sm">
//             <tr>
//               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">ORDER ID</th>
//               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">CUSTOMER</th>
//               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">TOTAL</th>
//               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">STATUS</th>
//               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider">DATE</th>
//               <th className="px-6 py-4 font-roboto text-[11px] uppercase tracking-wider text-right">ACTION</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loading ? (
//               <tr><td colSpan="6" className="px-6 py-16 text-center text-gray-500">Loading orders...</td></tr>
//             ) : orders.length === 0 ? (
//               <tr><td colSpan="6" className="px-6 py-16 text-center text-gray-500">No orders found</td></tr>
//             ) : (
//               orders.map((order, index) => (
//                 <tr
//                   key={order.rawId || index}
//                   onClick={() => navigate(`/dashboard/order/${order.rawId}`)}
//                   className="border-t hover:bg-gray-50 transition cursor-pointer"
//                 >
//                   <td className="px-6 py-4 font-medium text-[#0F172A]">{order.displayId}</td>
//                   <td className="px-6 py-4 flex items-center gap-3">
//                     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold uppercase border ${statusStyles[order.status] || "bg-gray-100"}`}>
//                       {order.initials}
//                     </div>
//                     <span className="text-[#334155] font-dm text-sm font-medium">{order.customer}</span>
//                   </td>
//                   <td className="px-6 py-4 text-[#334155] font-dm text-sm font-bold">₦{order.total}</td>
//                   <td className="px-6 py-4">
//                     <span className={`px-3 py-1 font-dm rounded-full text-[10px] font-bold border uppercase tracking-tight ${statusStyles[order.status] || "bg-gray-100"}`}>
//                       {order.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 font-dm text-[#334155] text-sm">{order.date}</td>
//                   <td className="px-6 py-4 text-xl text-right font-dm text-gray-300">⋯</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }