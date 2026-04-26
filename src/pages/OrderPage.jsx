

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





// import React, { useState, useEffect, useCallback } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FiSearch } from "react-icons/fi";
// import { getAllOrders } from "../api/apiServices"; 

// const statusStyles = {
//   "Order Received": "bg-blue-100 text-blue-700 border-blue-200",
//   "Preparing Food": "bg-purple-100 text-purple-700 border-purple-200",
//   "Ready to Pickup": "bg-yellow-100 text-yellow-800 border-yellow-200",
//   "Out for Delivery": "bg-orange-100 text-orange-700 border-orange-200",
//   "Delivered": "bg-green-100 text-green-700 border-green-200",
//   "Canceled": "bg-red-100 text-red-700 border-red-200",
// };

// // This mapping is used for BOTH displaying and finding the API slug
// const apiToUiStatus = {
//   "received": "Order Received",
//   "prepared": "Preparing Food",
//   "ready_for_pick": "Ready to Pickup",
//   "out_for_delivery": "Out for Delivery",
//   "delivered": "Delivered",
//   "canceled": "Canceled",
// };

// export default function OrdersPage() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   // Ensure these strings match the VALUES in apiToUiStatus exactly
//   const filters = ["All", "Order Received", "Preparing Food", "Ready to Pickup", "Out for Delivery", "Delivered", "Canceled"];

//   const fetchOrders = useCallback(async (status = "All", search = "") => {
//     try {
//       const params = {};
      
//       // Correctly find the API key (slug) based on the UI Label
//       if (status !== "All") {
//         const slug = Object.keys(apiToUiStatus).find(key => apiToUiStatus[key] === status);
//         if (slug) params.status = slug;
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
//           // Match API status to UI name, fallback to raw status if not found
//           status: apiToUiStatus[order.status.toLowerCase()] || order.status, 
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

//   useEffect(() => {
//     const delayDebounceFn = setTimeout(() => {
//       fetchOrders(activeFilter, searchTerm);
//     }, 300);

//     return () => clearTimeout(delayDebounceFn);
//   }, [activeFilter, searchTerm, fetchOrders]);

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
//         <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
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
//                     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold uppercase border ${statusStyles[order.status] || "bg-gray-100 text-gray-600"}`}>
//                       {order.initials}
//                     </div>
//                     <span className="text-[#334155] font-dm text-sm font-medium">{order.customer}</span>
//                   </td>
//                   <td className="px-6 py-4 text-[#334155] font-dm text-sm font-bold">₦{order.total}</td>
//                   <td className="px-6 py-4">
//                     <span className={`px-3 py-1 font-dm rounded-full text-[10px] font-bold border uppercase tracking-tight ${statusStyles[order.status] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
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
// import { useLocation, useNavigate } from "react-router-dom";
// import { FiSearch } from "react-icons/fi";
// import { getAllOrders } from "../api/apiServices"; 

// const statusStyles = {
//   "Order Received": "bg-blue-100 text-blue-700 border-blue-200",
//   "Preparing Food": "bg-purple-100 text-purple-700 border-purple-200",
//   "Ready to Pickup": "bg-yellow-100 text-yellow-800 border-yellow-200",
//   "Out for Delivery": "bg-orange-100 text-orange-700 border-orange-200",
//   "Delivered": "bg-green-100 text-green-700 border-green-200",
//   "Canceled": "bg-red-100 text-red-700 border-red-200", // This MUST match the UI value exactly
// };

// const apiToUiStatus = {
//   "received": "Order Received",
//   "prepared": "Preparing Food",
//   "ready_for_pick": "Ready to Pickup",
//   "out_for_delivery": "Out for Delivery",
//   "delivered": "Delivered",
//   "canceled": "Canceled",
//   "cancelled": "Canceled", // Handle potential double 'l' from backend
// };

// export default function OrdersPage() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const filters = ["All", "Order Received", "Preparing Food", "Ready to Pickup", "Out for Delivery", "Delivered", "Canceled"];

//   const fetchOrders = useCallback(async (status = "All", search = "") => {
//     try {
//       const params = {};
      
//       if (status !== "All") {
//         const slug = Object.keys(apiToUiStatus).find(key => apiToUiStatus[key] === status);
//         if (slug) params.status = slug;
//       }
      
//       if (search.trim()) params.search = search.trim();

//       const response = await getAllOrders(params);

//       if (response.success && response.data?.orders) {
//         const formattedOrders = response.data.orders.map((order) => {
//           // Normalize status: find the UI label from the API slug
//           const uiStatus = apiToUiStatus[order.status?.toLowerCase()] || order.status;

//           return {
//             displayId: order.order_id,
//             rawId: order.id,
//             customer: order.customer?.name || "Unknown Customer",
//             initials: order.customer?.initials || "?",
//             total: order.total, 
//             status: uiStatus, // Now this is guaranteed to be "Canceled" (capital C, one l)
//             date: order.date || "N/A",
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
//   }, []);

//   useEffect(() => {
//     const delayDebounceFn = setTimeout(() => {
//       fetchOrders(activeFilter, searchTerm);
//     }, 300);

//     return () => clearTimeout(delayDebounceFn);
//   }, [activeFilter, searchTerm, fetchOrders]);

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
//         <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
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
//                     {/* The initials circle will now use the correct red color for Canceled */}
//                     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold uppercase border ${statusStyles[order.status] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
//                       {order.initials}
//                     </div>
//                     <span className="text-[#334155] font-dm text-sm font-medium">{order.customer}</span>
//                   </td>
//                   <td className="px-6 py-4 text-[#334155] font-dm text-sm font-bold">₦{order.total}</td>
//                   <td className="px-6 py-4">
//                     {/* The status badge will now use the correct red color for Canceled */}
//                     <span className={`px-3 py-1 font-dm rounded-full text-[10px] font-bold border uppercase tracking-tight ${statusStyles[order.status] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
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






// import React, { useState, useEffect, useCallback, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { 
//   FiSearch, 
//   FiLayers, 
//   FiInbox, 
//   FiCoffee, 
//   FiPackage, 
//   FiTruck, 
//   FiCheckCircle, 
//   FiXCircle 
// } from "react-icons/fi";
// import { getAllOrders } from "../api/apiServices"; 

// // 1. Color Configuration
// const statusStyles = {
//   "Order Received": "bg-blue-100 text-blue-700 border-blue-200",
//   "Preparing Food": "bg-purple-100 text-purple-700 border-purple-200",
//   "Ready to Pickup": "bg-yellow-100 text-yellow-800 border-yellow-200",
//   "Out for Delivery": "bg-orange-100 text-orange-700 border-orange-200",
//   "Delivered": "bg-green-100 text-green-700 border-green-200",
//   "Canceled": "bg-red-100 text-red-700 border-red-200",
// };

// // 2. Mapping Configuration
// const apiToUiStatus = {
//   "received": "Order Received",
//   "prepared": "Preparing Food",
//   "ready_for_pick": "Ready to Pickup",
//   "out_for_delivery": "Out for Delivery",
//   "delivered": "Delivered",
//   "canceled": "Canceled",
//   "cancelled": "Canceled",
// };

// // 3. Serial Filter Configuration with Icons
// const filterConfigs = [
//   { label: "All", icon: <FiLayers /> },
//   { label: "Order Received", icon: <FiInbox /> },
//   { label: "Preparing Food", icon: <FiCoffee /> },
//   { label: "Ready to Pickup", icon: <FiPackage /> },
//   { label: "Out for Delivery", icon: <FiTruck /> },
//   { label: "Delivered", icon: <FiCheckCircle /> },
//   { label: "Canceled", icon: <FiXCircle /> },
// ];

// export default function OrdersPage() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   // 4. Client-side Filter Logic (Search)
//   const filteredOrders = useMemo(() => {
//     return orders.filter((order) => {
//       const searchLower = searchTerm.toLowerCase();
//       return (
//         order.customer.toLowerCase().includes(searchLower) ||
//         order.displayId.toString().toLowerCase().includes(searchLower)
//       );
//     });
//   }, [orders, searchTerm]);

//   // 5. API Fetch Logic
//   const fetchOrders = useCallback(async (status = "All", search = "") => {
//     try {
//       setLoading(true);
//       const params = {};
      
//       if (status !== "All") {
//         const slug = Object.keys(apiToUiStatus).find(key => apiToUiStatus[key] === status);
//         if (slug) params.status = slug;
//       }
      
//       if (search.trim()) params.search = search.trim();

//       const response = await getAllOrders(params);

//       if (response.success && response.data?.orders) {
//         const formattedOrders = response.data.orders.map((order) => {
//           const uiStatus = apiToUiStatus[order.status?.toLowerCase()] || order.status;
//           return {
//             displayId: order.order_id,
//             rawId: order.id,
//             customer: order.customer?.name || "Unknown Customer",
//             initials: order.customer?.initials || "?",
//             total: order.total, 
//             status: uiStatus, 
//             date: order.date || "N/A",
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
//   }, []);

//   useEffect(() => {
//     const delayDebounceFn = setTimeout(() => {
//       fetchOrders(activeFilter, searchTerm);
//     }, 300);

//     return () => clearTimeout(delayDebounceFn);
//   }, [activeFilter, searchTerm, fetchOrders]);

//   return (
//     <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
//       <div className="mb-6 mt-10">
//         <h1 className="text-[32px] font-roboto text-black">Orders</h1>
//         <p className="text-gray-500 text-sm">View and manage all incoming food orders.</p>
//       </div>

//       <div className="flex flex-wrap gap-4 mb-6 items-center">
//         {/* Search Bar */}
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

//         {/* Icon-based Filter Bar */}
//         <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
//           {filterConfigs.map((filter) => (
//             <button
//               key={filter.label}
//               onClick={() => setActiveFilter(filter.label)}
//               className={`flex items-center gap-2 px-4 py-2 text-sm transition rounded-[40px] rounded-tl-[5px] font-dm whitespace-nowrap border ${
//                 activeFilter === filter.label 
//                   ? "bg-[#A61E30] text-white border-[#A61E30] shadow-md" 
//                   : "bg-white text-gray-600 border-gray-200 hover:border-[#A61E30] hover:text-[#A61E30]"
//               }`}
//             >
//               <span className="text-lg">{filter.icon}</span>
//               {filter.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Orders Table */}
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
//             ) : filteredOrders.length === 0 ? (
//               <tr><td colSpan="6" className="px-6 py-16 text-center text-gray-500">No orders found</td></tr>
//             ) : (
//               filteredOrders.map((order, index) => (
//                 <tr
//                   key={order.rawId || index}
//                   onClick={() => navigate(`/dashboard/order/${order.rawId}`)}
//                   className="border-t hover:bg-gray-50 transition cursor-pointer"
//                 >
//                   <td className="px-6 py-4 font-medium text-[#0F172A]">{order.displayId}</td>
//                   <td className="px-6 py-4 flex items-center gap-3">
//                     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold uppercase border ${statusStyles[order.status] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
//                       {order.initials}
//                     </div>
//                     <span className="text-[#334155] font-dm text-sm font-medium">{order.customer}</span>
//                   </td>
//                   <td className="px-6 py-4 text-[#334155] font-dm text-sm font-bold">₦{order.total}</td>
//                   <td className="px-6 py-4">
//                     <span className={`px-3 py-1 font-dm rounded-full text-[10px] font-bold border uppercase tracking-tight ${statusStyles[order.status] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
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







// import React, { useState, useEffect, useCallback, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { 
//   FiSearch, 
//   FiLayers, 
//   FiInbox, 
//   FiCoffee, 
//   FiPackage, 
//   FiTruck, 
//   FiCheckCircle, 
//   FiXCircle 
// } from "react-icons/fi";
// import { getAllOrders } from "../api/apiServices"; 

// // 1. Color Configuration
// const statusStyles = {
//   "Order Received": "bg-blue-100 text-blue-700 border-blue-200",
//   "Preparing Food": "bg-purple-100 text-purple-700 border-purple-200",
//   "Ready to Pickup": "bg-yellow-100 text-yellow-800 border-yellow-200",
//   "Out for Delivery": "bg-orange-100 text-orange-700 border-orange-200",
//   "Delivered": "bg-green-100 text-green-700 border-green-200",
//   "Canceled": "bg-red-100 text-red-700 border-red-200",
// };

// // 2. Mapping Configuration
// const apiToUiStatus = {
//   "received": "Order Received",
//   "prepared": "Preparing Food",
//   "ready_for_pick": "Ready to Pickup",
//   "out_for_delivery": "Out for Delivery",
//   "delivered": "Delivered",
//   "canceled": "Canceled",
//   "cancelled": "Canceled",
// };

// // 3. Serial Filter Configuration with Icons
// const filterConfigs = [
//   { label: "All", icon: <FiLayers /> },
//   { label: "Order Received", icon: <FiInbox /> },
//   { label: "Preparing Food", icon: <FiCoffee /> },
//   { label: "Ready to Pickup", icon: <FiPackage /> },
//   { label: "Out for Delivery", icon: <FiTruck /> },
//   { label: "Delivered", icon: <FiCheckCircle /> },
//   { label: "Canceled", icon: <FiXCircle /> },
// ];

// export default function OrdersPage() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   // 4. Client-side Filter Logic (Search)
//   const filteredOrders = useMemo(() => {
//     return orders.filter((order) => {
//       const searchLower = searchTerm.toLowerCase();
//       return (
//         order.customer.toLowerCase().includes(searchLower) ||
//         order.displayId.toString().toLowerCase().includes(searchLower)
//       );
//     });
//   }, [orders, searchTerm]);

//   // 5. API Fetch Logic
//   const fetchOrders = useCallback(async (status = "All", search = "") => {
//     try {
//       setLoading(true);
//       const params = {};
      
//       if (status !== "All") {
//         const slug = Object.keys(apiToUiStatus).find(key => apiToUiStatus[key] === status);
//         if (slug) params.status = slug;
//       }
      
//       if (search.trim()) params.search = search.trim();

//       const response = await getAllOrders(params);

//       if (response.success && response.data?.orders) {
//         const formattedOrders = response.data.orders.map((order) => {
//           const uiStatus = apiToUiStatus[order.status?.toLowerCase()] || order.status;
//           return {
//             displayId: order.order_id,
//             rawId: order.id,
//             customer: order.customer?.name || "Unknown Customer",
//             initials: order.customer?.initials || "?",
//             total: order.total, 
//             status: uiStatus, 
//             date: order.date || "N/A",
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
//   }, []);

//   useEffect(() => {
//     const delayDebounceFn = setTimeout(() => {
//       fetchOrders(activeFilter, searchTerm);
//     }, 300);

//     return () => clearTimeout(delayDebounceFn);
//   }, [activeFilter, searchTerm, fetchOrders]);

//   return (
//     <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
//       <div className="mb-6 mt-10">
//         <h1 className="text-[32px] font-roboto text-black">Orders</h1>
//         <p className="text-gray-500 text-sm">View and manage all incoming food orders.</p>
//       </div>

//       <div className="flex flex-wrap gap-4 mb-6 items-center">
//         {/* Search Bar */}
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

//         {/* Icon-based Filter Bar */}
//         <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
//           {filterConfigs.map((filter) => (
//             <button
//               key={filter.label}
//               onClick={() => setActiveFilter(filter.label)}
//               className={`flex items-center gap-2 px-4 py-2 text-sm transition rounded-[40px] rounded-tl-[5px] font-dm whitespace-nowrap border ${
//                 activeFilter === filter.label 
//                   ? "bg-[#A61E30] text-white border-[#A61E30] shadow-md" 
//                   : "bg-white text-gray-600 border-gray-200 hover:border-[#A61E30] hover:text-[#A61E30]"
//               }`}
//             >
//               <span className="text-lg">{filter.icon}</span>
//               {filter.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Orders Table */}
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
//             ) : filteredOrders.length === 0 ? (
//               <tr><td colSpan="6" className="px-6 py-16 text-center text-gray-500">No orders found</td></tr>
//             ) : (
//               filteredOrders.map((order, index) => (
//                 <tr
//                   key={order.rawId || index}
//                   onClick={() => navigate(`/dashboard/order/${order.rawId}`)}
//                   className="border-t hover:bg-gray-50 transition cursor-pointer"
//                 >
//                   <td className="px-6 py-4 font-medium text-[#0F172A]">{order.displayId}</td>
//                   <td className="px-6 py-4 flex items-center gap-3">
//                     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold uppercase border ${statusStyles[order.status] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
//                       {order.initials}
//                     </div>
//                     <span className="text-[#334155] font-dm text-sm font-medium">{order.customer}</span>
//                   </td>
//                   <td className="px-6 py-4 text-[#334155] font-dm text-sm font-bold">₦{order.total}</td>
//                   <td className="px-6 py-4">
//                     <span className={`px-3 py-1 font-dm rounded-full text-[10px] font-bold border uppercase tracking-tight ${statusStyles[order.status] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
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




// import React, { useState, useEffect, useCallback, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { 
//   FiSearch, 
//   FiLayers, 
//   FiInbox, 
//   FiCoffee, 
//   FiPackage, 
//   FiTruck, 
//   FiCheckCircle, 
//   FiXCircle 
// } from "react-icons/fi";
// import { getAllOrders } from "../api/apiServices"; 

// // 1. Color Configuration
// const statusStyles = {
//   "Order Received": "bg-blue-100 text-blue-700 border-blue-200",
//   "Preparing Food": "bg-purple-100 text-purple-700 border-purple-200",
//   "Ready to Pickup": "bg-yellow-100 text-yellow-800 border-yellow-200",
//   "Out for Delivery": "bg-orange-100 text-orange-700 border-orange-200",
//   "Delivered": "bg-green-100 text-green-700 border-green-200",
//   "Canceled": "bg-red-100 text-red-700 border-red-200",
// };

// // 2. Mapping Configuration
// const apiToUiStatus = {
//   "received": "Order Received",
//   "prepared": "Preparing Food",
//   "ready_for_pick": "Ready to Pickup",
//   "out_for_delivery": "Out for Delivery",
//   "delivered": "Delivered",
//   "canceled": "Canceled",
//   "cancelled": "Canceled",
// };

// // 3. Serial Filter Configuration with Icons
// const filterConfigs = [
//   { label: "All", icon: <FiLayers /> },
//   { label: "Order Received", icon: <FiInbox /> },
//   { label: "Preparing Food", icon: <FiCoffee /> },
//   { label: "Ready to Pickup", icon: <FiPackage /> },
//   { label: "Out for Delivery", icon: <FiTruck /> },
//   { label: "Delivered", icon: <FiCheckCircle /> },
//   { label: "Canceled", icon: <FiXCircle /> },
// ];

// export default function OrdersPage() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   // 4. Client-side Filter Logic (Combined Search + Status)
//   // ✅ This now handles the category filtering without calling the API
//   const filteredOrders = useMemo(() => {
//     return orders.filter((order) => {
//       const searchLower = searchTerm.toLowerCase();
      
//       // Check Search
//       const matchesSearch = 
//         order.customer.toLowerCase().includes(searchLower) ||
//         order.displayId.toString().toLowerCase().includes(searchLower);

//       // Check Status Category
//       const matchesStatus = activeFilter === "All" || order.status === activeFilter;

//       return matchesSearch && matchesStatus;
//     });
//   }, [orders, searchTerm, activeFilter]);

//   // 5. API Fetch Logic
//   // ✅ Removed status from params so it always fetches all relevant search data
//   const fetchOrders = useCallback(async (search = "") => {
//     try {
//       setLoading(true);
//       const params = {};
      
//       if (search.trim()) params.search = search.trim();

//       const response = await getAllOrders(params);

//       if (response.success && response.data?.orders) {
//         const formattedOrders = response.data.orders.map((order) => {
//           const uiStatus = apiToUiStatus[order.status?.toLowerCase()] || order.status;
//           return {
//             displayId: order.order_id,
//             rawId: order.id,
//             customer: order.customer?.name || "Unknown Customer",
//             initials: order.customer?.initials || "?",
//             total: order.total, 
//             status: uiStatus, 
//             date: order.date || "N/A",
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
//   }, []);

//   // 6. Effect Hook
//   // ✅ Removed activeFilter from dependencies to stop API calls on button click
//   useEffect(() => {
//     const delayDebounceFn = setTimeout(() => {
//       fetchOrders(searchTerm);
//     }, 300);

//     return () => clearTimeout(delayDebounceFn);
//   }, [searchTerm, fetchOrders]);

//   return (
//     <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
//       <div className="mb-6 mt-10">
//         <h1 className="text-[32px] font-roboto text-black">Orders</h1>
//         <p className="text-gray-500 text-sm">View and manage all incoming food orders.</p>
//       </div>

//       <div className="flex flex-wrap gap-4 mb-6 items-center">
//         {/* Search Bar */}
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

//         {/* Icon-based Filter Bar */}
//         <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
//           {filterConfigs.map((filter) => (
//             <button
//               key={filter.label}
//               onClick={() => setActiveFilter(filter.label)}
//               className={`flex items-center gap-2 px-4 py-2 text-sm transition rounded-[40px] rounded-tl-[5px] font-dm whitespace-nowrap border ${
//                 activeFilter === filter.label 
//                   ? "bg-[#A61E30] text-white border-[#A61E30] shadow-md" 
//                   : "bg-white text-gray-600 border-gray-200 hover:border-[#A61E30] hover:text-[#A61E30]"
//               }`}
//             >
//               <span className="text-lg">{filter.icon}</span>
//               {filter.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Orders Table */}
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
//             ) : filteredOrders.length === 0 ? (
//               <tr><td colSpan="6" className="px-6 py-16 text-center text-gray-500">No orders found</td></tr>
//             ) : (
//               filteredOrders.map((order, index) => (
//                 <tr
//                   key={order.rawId || index}
//                   onClick={() => navigate(`/dashboard/order/${order.rawId}`)}
//                   className="border-t hover:bg-gray-50 transition cursor-pointer"
//                 >
//                   <td className="px-6 py-4 font-medium text-[#0F172A]">{order.displayId}</td>
//                   <td className="px-6 py-4 flex items-center gap-3">
//                     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold uppercase border ${statusStyles[order.status] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
//                       {order.initials}
//                     </div>
//                     <span className="text-[#334155] font-dm text-sm font-medium">{order.customer}</span>
//                   </td>
//                   <td className="px-6 py-4 text-[#334155] font-dm text-sm font-bold">₦{order.total}</td>
//                   <td className="px-6 py-4">
//                     <span className={`px-3 py-1 font-dm rounded-full text-[10px] font-bold border uppercase tracking-tight ${statusStyles[order.status] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
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





// // import React, { useState, useEffect, useCallback, useMemo } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { 
// //   FiSearch, 
// //   FiLayers, 
// //   FiInbox, 
// //   FiCoffee, 
// //   FiPackage, 
// //   FiTruck, 
// //   FiCheckCircle, 
// //   FiXCircle 
// // } from "react-icons/fi";
// // // Removed getAllOrders, now using the customer-based service
// // import { getAllCustomers } from "../api/apiServices"; 

// // const statusStyles = {
// //   "Order Received": "bg-blue-100 text-blue-700 border-blue-200",
// //   "Preparing Food": "bg-purple-100 text-purple-700 border-purple-200",
// //   "Ready to Pickup": "bg-yellow-100 text-yellow-800 border-yellow-200",
// //   "Out for Delivery": "bg-orange-100 text-orange-700 border-orange-200",
// //   "Delivered": "bg-green-100 text-green-700 border-green-200",
// //   "Canceled": "bg-red-100 text-red-700 border-red-200",
// // };

// // const apiToUiStatus = {
// //   "received": "Order Received",
// //   "prepared": "Preparing Food",
// //   "ready_for_pick": "Ready to Pickup",
// //   "out_for_delivery": "Out for Delivery",
// //   "delivered": "Delivered",
// //   "canceled": "Canceled",
// //   "cancelled": "Canceled",
// //   "pending": "Order Received",
// //   "processing": "Preparing Food"
// // };

// // const filterConfigs = [
// //   { label: "All", icon: <FiLayers /> },
// //   { label: "Order Received", icon: <FiInbox /> },
// //   { label: "Preparing Food", icon: <FiCoffee /> },
// //   { label: "Ready to Pickup", icon: <FiPackage /> },
// //   { label: "Out for Delivery", icon: <FiTruck /> },
// //   { label: "Delivered", icon: <FiCheckCircle /> },
// //   { label: "Canceled", icon: <FiXCircle /> },
// // ];

// // export default function OrdersPage() {
// //   const [activeFilter, setActiveFilter] = useState("All");
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const navigate = useNavigate();

// //   const filteredOrders = useMemo(() => {
// //     return orders.filter((order) => {
// //       const searchLower = searchTerm.toLowerCase();
// //       const matchesSearch = 
// //         order.customer.toLowerCase().includes(searchLower) ||
// //         order.displayId.toString().toLowerCase().includes(searchLower);
// //       const matchesStatus = activeFilter === "All" || order.status === activeFilter;
// //       return matchesSearch && matchesStatus;
// //     });
// //   }, [orders, searchTerm, activeFilter]);

// //   // Updated to use the Customer List endpoint
// //   const fetchOrdersFromCustomers = useCallback(async (search = "") => {
// //     try {
// //       setLoading(true);
// //       const params = search.trim() ? { search: search.trim() } : {};
      
// //       // Fetching all customers to extract their orders
// //       const response = await getAllCustomers(params);

// //       if (response.success && response.data?.customers) {
// //         // Flattening the orders from all customers into a single list
// //         const allOrders = [];
        
// //         response.data.customers.forEach(customer => {
// //           if (customer.orders && Array.isArray(customer.orders)) {
// //             customer.orders.forEach(order => {
// //               const uiStatus = apiToUiStatus[order.status?.toLowerCase()] || order.status;
// //               allOrders.push({
// //                 displayId: order.order_id,
// //                 // Navigating via Customer ID as requested for the detail page
// //                 rawId: customer.id, 
// //                 customer: customer.name || "Unknown Customer",
// //                 initials: customer.name ? customer.name.split(" ").map(n => n[0]).join("").toUpperCase() : "?",
// //                 total: order.total, 
// //                 status: uiStatus, 
// //                 date: order.date || "N/A",
// //               });
// //             });
// //           }
// //         });
        
// //         // Sorting by newest date if possible (optional)
// //         setOrders(allOrders);
// //       } else {
// //         setOrders([]);
// //       }
// //     } catch (err) {
// //       console.error("Fetch error:", err);
// //       setOrders([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     const delayDebounceFn = setTimeout(() => {
// //       fetchOrdersFromCustomers(searchTerm);
// //     }, 300);
// //     return () => clearTimeout(delayDebounceFn);
// //   }, [searchTerm, fetchOrdersFromCustomers]);

// //   return (
// //     <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
// //       <div className="mb-6 mt-10">
// //         <h1 className="text-[32px] font-roboto text-black">Orders</h1>
// //         <p className="text-gray-500 text-sm">View and manage all incoming food orders via customer profiles.</p>
// //       </div>

// //       <div className="flex flex-wrap gap-4 mb-6 items-center">
// //         <div className="relative w-72">
// //           <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
// //           <input
// //             type="text"
// //             placeholder="Search customer or order..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             className="pl-10 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
// //           />
// //         </div>

// //         <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
// //           {filterConfigs.map((filter) => (
// //             <button
// //               key={filter.label}
// //               onClick={() => setActiveFilter(filter.label)}
// //               className={`flex items-center gap-2 px-4 py-2 text-sm transition rounded-[40px] rounded-tl-[5px] font-dm whitespace-nowrap border ${
// //                 activeFilter === filter.label 
// //                   ? "bg-[#A61E30] text-white border-[#A61E30] shadow-md" 
// //                   : "bg-white text-gray-600 border-gray-200 hover:border-[#A61E30] hover:text-[#A61E30]"
// //               }`}
// //             >
// //               <span className="text-lg">{filter.icon}</span>
// //               {filter.label}
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
// //               <tr><td colSpan="6" className="px-6 py-16 text-center text-gray-500">Loading order data...</td></tr>
// //             ) : filteredOrders.length === 0 ? (
// //               <tr><td colSpan="6" className="px-6 py-16 text-center text-gray-500">No orders found</td></tr>
// //             ) : (
// //               filteredOrders.map((order, index) => (
// //                 <tr
// //                   key={`${order.rawId}-${index}`}
// //                   // Navigates to Detail Info using Customer ID
// //                   onClick={() => navigate(`/dashboard/order/${order.rawId}`)}
// //                   className="border-t hover:bg-gray-50 transition cursor-pointer"
// //                 >
// //                   <td className="px-6 py-4 font-medium text-[#0F172A]">{order.displayId}</td>
// //                   <td className="px-6 py-4 flex items-center gap-3">
// //                     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold uppercase border ${statusStyles[order.status] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
// //                       {order.initials}
// //                     </div>
// //                     <span className="text-[#334155] font-dm text-sm font-medium">{order.customer}</span>
// //                   </td>
// //                   <td className="px-6 py-4 text-[#334155] font-dm text-sm font-bold">₦{order.total}</td>
// //                   <td className="px-6 py-4">
// //                     <span className={`px-3 py-1 font-dm rounded-full text-[10px] font-bold border uppercase tracking-tight ${statusStyles[order.status] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
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





// // import React, { useState, useEffect, useCallback, useMemo } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { 
// //   FiSearch, FiLayers, FiInbox, FiCoffee, 
// //   FiPackage, FiTruck, FiCheckCircle, FiXCircle 
// // } from "react-icons/fi";
// // import { getAllCustomers } from "../api/apiServices"; 

// // const statusStyles = {
// //   "Order Received": "bg-blue-100 text-blue-700 border-blue-200",
// //   "Preparing Food": "bg-purple-100 text-purple-700 border-purple-200",
// //   "Ready to Pickup": "bg-yellow-100 text-yellow-800 border-yellow-200",
// //   "Out for Delivery": "bg-orange-100 text-orange-700 border-orange-200",
// //   "Delivered": "bg-green-100 text-green-700 border-green-200",
// //   "Canceled": "bg-red-100 text-red-700 border-red-200",
// // };

// // const apiToUiStatus = {
// //   "received": "Order Received",
// //   "prepared": "Preparing Food",
// //   "ready_for_pick": "Ready to Pickup",
// //   "out_for_delivery": "Out for Delivery",
// //   "delivered": "Delivered",
// //   "canceled": "Canceled",
// //   "cancelled": "Canceled",
// //   "pending": "Order Received",
// // };

// // const filterConfigs = [
// //   { label: "All", icon: <FiLayers /> },
// //   { label: "Order Received", icon: <FiInbox /> },
// //   { label: "Preparing Food", icon: <FiCoffee /> },
// //   { label: "Ready to Pickup", icon: <FiPackage /> },
// //   { label: "Out for Delivery", icon: <FiTruck /> },
// //   { label: "Delivered", icon: <FiCheckCircle /> },
// //   { label: "Canceled", icon: <FiXCircle /> },
// // ];

// // export default function OrdersPage() {
// //   const [activeFilter, setActiveFilter] = useState("All");
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const navigate = useNavigate();

// //   const filteredOrders = useMemo(() => {
// //     return orders.filter((order) => {
// //       const searchLower = searchTerm.toLowerCase();
// //       const matchesSearch = 
// //         order.customerName.toLowerCase().includes(searchLower) ||
// //         order.displayId.toString().toLowerCase().includes(searchLower);
// //       const matchesStatus = activeFilter === "All" || order.status === activeFilter;
// //       return matchesSearch && matchesStatus;
// //     });
// //   }, [orders, searchTerm, activeFilter]);

// //  const fetchOrdersFromCustomers = useCallback(async (search = "") => {
// //     try {
// //       setLoading(true);
// //       const response = await getAllCustomers(search.trim() ? { search: search.trim() } : {});
      
// //       console.log("OrdersPage API Response:", response);

// //       // 1. Extract the data object
// //       const result = response.data;
// //       if (!result) {
// //         setOrders([]);
// //         return;
// //       }

// //       const flattenedOrders = [];

// //       // 2. Helper function to process a single customer entry
// //       const processEntry = (item) => {
// //         // Access name from item.profile.name (as seen in your JSON) or item.name
// //         const name = item.profile?.name || item.name || "Unknown User";
// //         const customerId = item.id || item.profile?.id;
// //         const ordersArray = item.orders || item.recent_orders || [];

// //         ordersArray.forEach(order => {
// //           flattenedOrders.push({
// //             displayId: order.order_id,
// //             customerId: customerId,
// //             internalOrderId: order.id,
// //             customerName: name,
// //             initials: name.charAt(0).toUpperCase(),
// //             total: order.total,
// //             status: apiToUiStatus[order.status?.toLowerCase()] || order.status,
// //             date: order.date || "N/A",
// //           });
// //         });
// //       };

// //       // 3. Handle different response shapes
// //       if (Array.isArray(result)) {
// //         // If it's a list of customers
// //         result.forEach(processEntry);
// //       } else if (result.customers && Array.isArray(result.customers)) {
// //         // If it's wrapped in a customers array
// //         result.customers.forEach(processEntry);
// //       } else {
// //         // If the result IS the customer object (matching your JSON snippet)
// //         processEntry(result);
// //       }

// //       setOrders(flattenedOrders);
// //     } catch (err) {
// //       console.error("Fetch error:", err);
// //       setOrders([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     const delayDebounceFn = setTimeout(() => fetchOrdersFromCustomers(searchTerm), 300);
// //     return () => clearTimeout(delayDebounceFn);
// //   }, [searchTerm, fetchOrdersFromCustomers]);

// //   return (
// //     <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
// //       <div className="mb-6 mt-10">
// //         <h1 className="text-[32px] font-roboto text-black font-bold">Orders</h1>
// //         <p className="text-gray-500 text-sm">Managing orders via customer profiles.</p>
// //       </div>

// //       <div className="flex flex-wrap gap-4 mb-6 items-center">
// //         <div className="relative w-72">
// //           <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
// //           <input
// //             type="text"
// //             placeholder="Search customer or order ID..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             className="pl-10 pr-4 py-2 w-full bg-white border outline-none rounded-[40px] rounded-tl-[5px]"
// //           />
// //         </div>

// //         <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
// //           {filterConfigs.map((f) => (
// //             <button
// //               key={f.label}
// //               onClick={() => setActiveFilter(f.label)}
// //               className={`flex items-center gap-2 px-4 py-2 text-sm rounded-[40px] rounded-tl-[5px] border transition ${
// //                 activeFilter === f.label ? "bg-[#A61E30] text-white" : "bg-white text-gray-600"
// //               }`}
// //             >
// //               {f.icon} {f.label}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
// //         <table className="w-full text-left">
// //           <thead className="bg-gray-50 text-gray-500 text-[11px] uppercase">
// //             <tr>
// //               <th className="px-6 py-4">Order ID</th>
// //               <th className="px-6 py-4">Customer</th>
// //               <th className="px-6 py-4">Total</th>
// //               <th className="px-6 py-4">Status</th>
// //               <th className="px-6 py-4">Date</th>
// //               <th className="px-6 py-4 text-right">Action</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {loading ? (
// //               <tr><td colSpan="6" className="px-6 py-16 text-center">Loading...</td></tr>
// //             ) : (
// //               filteredOrders.map((order, idx) => (
// //                 <tr 
// //                   key={idx} 
// //                   onClick={() => navigate(`/dashboard/order/${order.customerId}`)}
// //                   className="border-t hover:bg-gray-50 cursor-pointer transition"
// //                 >
// //                   <td className="px-6 py-4 font-medium text-gray-700">{order.displayId}</td>
// //                   <td className="px-6 py-4 flex items-center gap-3">
// //                     <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-[10px] border text-gray-700">
// //                       {order.initials}
// //                     </div>
// //                     <span className="text-sm font-medium text-gray-700">{order.customerName}</span>
// //                   </td>
// //                   <td className="px-6 py-4 text-sm font-bold">₦{order.total}</td>
// //                   <td className="px-6 py-4">
// //                     <span className={`px-3 py-1 rounded-full text-[10px] font-bold border uppercase ${statusStyles[order.status]}`}>
// //                       {order.status}
// //                     </span>
// //                   </td>
// //                   <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
// //                   <td className="px-6 py-4 text-right text-gray-300">⋯</td>
// //                 </tr>
// //               ))
// //             )}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }





// import React, { useState, useEffect, useCallback, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { 
//   FiSearch, FiLayers, FiInbox, FiCoffee, 
//   FiPackage, FiTruck, FiCheckCircle, FiXCircle 
// } from "react-icons/fi";
// import { getAllCustomers } from "../api/apiServices"; 

// const statusStyles = {
//   "Order Received": "bg-blue-100 text-blue-700 border-blue-200",
//   "Preparing Food": "bg-purple-100 text-purple-700 border-purple-200",
//   "Ready to Pickup": "bg-yellow-100 text-yellow-800 border-yellow-200",
//   "Out for Delivery": "bg-orange-100 text-orange-700 border-orange-200",
//   "Delivered": "bg-green-100 text-green-700 border-green-200",
//   "Canceled": "bg-red-100 text-red-700 border-red-200",
// };

// const apiToUiStatus = {
//   "received": "Order Received",
//   "prepared": "Preparing Food",
//   "ready_for_pick": "Ready to Pickup",
//   "out_for_delivery": "Out for Delivery",
//   "delivered": "Delivered",
//   "canceled": "Canceled",
//   "cancelled": "Canceled",
//   "pending": "Order Received",
//   "processing": "Preparing Food", // ✅ FIX
// };

// const filterConfigs = [
//   { label: "All", icon: <FiLayers /> },
//   { label: "Order Received", icon: <FiInbox /> },
//   { label: "Preparing Food", icon: <FiCoffee /> },
//   { label: "Ready to Pickup", icon: <FiPackage /> },
//   { label: "Out for Delivery", icon: <FiTruck /> },
//   { label: "Delivered", icon: <FiCheckCircle /> },
//   { label: "Canceled", icon: <FiXCircle /> },
// ];

// export default function OrdersPage() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const filteredOrders = useMemo(() => {
//     return orders.filter((order) => {
//       const searchLower = searchTerm.toLowerCase();
//       const matchesSearch = 
//         order.customerName.toLowerCase().includes(searchLower) ||
//         order.displayId.toString().toLowerCase().includes(searchLower);

//       const matchesStatus = activeFilter === "All" || order.status === activeFilter;

//       return matchesSearch && matchesStatus;
//     });
//   }, [orders, searchTerm, activeFilter]);

//   const fetchOrdersFromCustomers = useCallback(async (search = "") => {
//     try {
//       setLoading(true);

//       const response = await getAllCustomers(
//         search.trim() ? { search: search.trim() } : {}
//       );

//       console.log("API RESPONSE:", response.data);

//       const customers = response.data?.data?.customers || [];

//       const flattenedOrders = [];

//       customers.forEach((item) => {
//         const name = item.profile?.name || item.name || "Unknown User";
//         const customerId = item.id || item.profile?.id;
//         const ordersArray = item.orders || item.recent_orders || [];

//         ordersArray.forEach((order) => {
//           flattenedOrders.push({
//             displayId: order.order_id,
//             customerId: customerId,
//             internalOrderId: order.id, // ✅ IMPORTANT
//             customerName: name,
//             initials: name.charAt(0).toUpperCase(),
//             total: order.total,
//             status: apiToUiStatus[order.status?.toLowerCase()] || order.status,
//             date: order.date || "N/A",
//           });
//         });
//       });

//       setOrders(flattenedOrders);
//     } catch (err) {
//       console.error("Fetch error:", err);
//       setOrders([]);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     const delayDebounceFn = setTimeout(() => {
//       fetchOrdersFromCustomers(searchTerm);
//     }, 300);

//     return () => clearTimeout(delayDebounceFn);
//   }, [searchTerm, fetchOrdersFromCustomers]);

//   return (
//     <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
//       <div className="mb-6 mt-10">
//         <h1 className="text-[32px] font-roboto text-black font-bold">Orders</h1>
//         <p className="text-gray-500 text-sm">Managing orders via customer profiles.</p>
//       </div>

//       <div className="flex flex-wrap gap-4 mb-6 items-center">
//         <div className="relative w-72">
//           <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search customer or order ID..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-10 pr-4 py-2 w-full bg-white border outline-none rounded-[40px] rounded-tl-[5px]"
//           />
//         </div>

//         <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
//           {filterConfigs.map((f) => (
//             <button
//               key={f.label}
//               onClick={() => setActiveFilter(f.label)}
//               className={`flex items-center gap-2 px-4 py-2 text-sm rounded-[40px] rounded-tl-[5px] border transition ${
//                 activeFilter === f.label
//                   ? "bg-[#A61E30] text-white"
//                   : "bg-white text-gray-600"
//               }`}
//             >
//               {f.icon} {f.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
//         <table className="w-full text-left">
//           <thead className="bg-gray-50 text-gray-500 text-[11px] uppercase">
//             <tr>
//               <th className="px-6 py-4">Order ID</th>
//               <th className="px-6 py-4">Customer</th>
//               <th className="px-6 py-4">Total</th>
//               <th className="px-6 py-4">Status</th>
//               <th className="px-6 py-4">Date</th>
//               <th className="px-6 py-4 text-right">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {loading ? (
//               <tr>
//                 <td colSpan="6" className="px-6 py-16 text-center">
//                   Loading...
//                 </td>
//               </tr>
//             ) : (
//               filteredOrders.map((order, idx) => (
//                 <tr
//                   key={idx}
//                   onClick={() =>
//                     navigate(`/dashboard/order/${order.internalOrderId}`) // ✅ FIXED
//                   }
//                   className="border-t hover:bg-gray-50 cursor-pointer transition"
//                 >
//                   <td className="px-6 py-4 font-medium text-gray-700">
//                     {order.displayId}
//                   </td>

//                   <td className="px-6 py-4 flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-[10px] border text-gray-700">
//                       {order.initials}
//                     </div>
//                     <span className="text-sm font-medium text-gray-700">
//                       {order.customerName}
//                     </span>
//                   </td>

//                   <td className="px-6 py-4 text-sm font-bold">
//                     ₦{order.total}
//                   </td>

//                   <td className="px-6 py-4">
//                     <span
//                       className={`px-3 py-1 rounded-full text-[10px] font-bold border uppercase ${
//                         statusStyles[order.status]
//                       }`}
//                     >
//                       {order.status}
//                     </span>
//                   </td>

//                   <td className="px-6 py-4 text-sm text-gray-500">
//                     {order.date}
//                   </td>

//                   <td className="px-6 py-4 text-right text-gray-300">⋯</td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }







import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FiSearch, 
  FiLayers, 
  FiInbox, 
  FiCoffee, 
  FiPackage, 
  FiTruck, 
  FiCheckCircle, 
  FiXCircle 
} from "react-icons/fi";
import { getAllOrders } from "../api/apiServices"; 

// 1. Color Configuration
const statusStyles = {
  "Order Received": "bg-blue-100 text-blue-700 border-blue-200",
  "Preparing Food": "bg-purple-100 text-purple-700 border-purple-200",
  "Ready to Pickup": "bg-yellow-100 text-yellow-800 border-yellow-200",
  "Out for Delivery": "bg-orange-100 text-orange-700 border-orange-200",
  "Delivered": "bg-green-100 text-green-700 border-green-200",
  "Canceled": "bg-red-100 text-red-700 border-red-200",
};

// 2. Mapping Configuration
const apiToUiStatus = {
  "received": "Order Received",
  "prepared": "Preparing Food",
  "ready_for_pick": "Ready to Pickup",
  "out_for_delivery": "Out for Delivery",
  "delivered": "Delivered",
  "canceled": "Canceled",
  "cancelled": "Canceled",
};

// 3. Serial Filter Configuration with Icons
const filterConfigs = [
  { label: "All", icon: <FiLayers /> },
  { label: "Order Received", icon: <FiInbox /> },
  { label: "Preparing Food", icon: <FiCoffee /> },
  { label: "Ready to Pickup", icon: <FiPackage /> },
  { label: "Out for Delivery", icon: <FiTruck /> },
  { label: "Delivered", icon: <FiCheckCircle /> },
  { label: "Canceled", icon: <FiXCircle /> },
];

export default function OrdersPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // 4. Client-side Filter Logic (Combined Search + Status)
  // ✅ This now handles the category filtering without calling the API
  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const searchLower = searchTerm.toLowerCase();
      
      // Check Search
      const matchesSearch = 
        order.customer.toLowerCase().includes(searchLower) ||
        order.displayId.toString().toLowerCase().includes(searchLower);

      // Check Status Category
      const matchesStatus = activeFilter === "All" || order.status === activeFilter;

      return matchesSearch && matchesStatus;
    });
  }, [orders, searchTerm, activeFilter]);

  // 5. API Fetch Logic
  // ✅ Removed status from params so it always fetches all relevant search data
  const fetchOrders = useCallback(async (search = "") => {
    try {
      setLoading(true);
      const params = {};
      
      if (search.trim()) params.search = search.trim();

      const response = await getAllOrders(params);

      if (response.success && response.data?.orders) {
        const formattedOrders = response.data.orders.map((order) => {
          const uiStatus = apiToUiStatus[order.status?.toLowerCase()] || order.status;
          return {
            displayId: order.order_id,
            rawId: order.id,
            customer: order.customer?.name || "Unknown Customer",
            initials: order.customer?.initials || "?",
            total: order.total, 
            status: uiStatus, 
            date: order.date || "N/A",
          };
        });
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

  // 6. Effect Hook
  // ✅ Removed activeFilter from dependencies to stop API calls on button click
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchOrders(searchTerm);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, fetchOrders]);

  return (
    <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
      <div className="mb-6 mt-10">
        <h1 className="text-[32px] font-roboto text-black">Orders</h1>
        <p className="text-gray-500 text-sm">View and manage all incoming food orders.</p>
      </div>

      <div className="flex flex-wrap gap-4 mb-6 items-center">
        {/* Search Bar */}
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

        {/* Icon-based Filter Bar */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {filterConfigs.map((filter) => (
            <button
              key={filter.label}
              onClick={() => setActiveFilter(filter.label)}
              className={`flex items-center gap-2 px-4 py-2 text-sm transition rounded-[40px] rounded-tl-[5px] font-dm whitespace-nowrap border ${
                activeFilter === filter.label 
                  ? "bg-[#A61E30] text-white border-[#A61E30] shadow-md" 
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#A61E30] hover:text-[#A61E30]"
              }`}
            >
              <span className="text-lg">{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
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
            ) : filteredOrders.length === 0 ? (
              <tr><td colSpan="6" className="px-6 py-16 text-center text-gray-500">No orders found</td></tr>
            ) : (
              filteredOrders.map((order, index) => (
                <tr
                  key={order.rawId || index}
                  onClick={() => navigate(`/dashboard/order/${order.rawId}`)}
                  className="border-t hover:bg-gray-50 transition cursor-pointer"
                >
                  <td className="px-6 py-4 font-medium text-[#0F172A]">{order.displayId}</td>
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold uppercase border ${statusStyles[order.status] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
                      {order.initials}
                    </div>
                    <span className="text-[#334155] font-dm text-sm font-medium">{order.customer}</span>
                  </td>
                  <td className="px-6 py-4 text-[#334155] font-dm text-sm font-bold">₦{order.total}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 font-dm rounded-full text-[10px] font-bold border uppercase tracking-tight ${statusStyles[order.status] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
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