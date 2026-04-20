// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FiSearch } from "react-icons/fi";
// const ordersData = [
//   {
//     id: "#ORD-7732",
//     customer: "Chukwuma Adeyemi",
//     initials: "CA",
//     total: "12,500",
//     status: "Received Order",
//     date: "Oct 24, 2023",
//   },
//   {
//     id: "#ORD-7731",
//     customer: "Amara Nwosu",
//     initials: "AN",
//     total: "8,200",
//     status: "Prepared Food",
//     date: "Oct 24, 2023",
//   },
//   {
//     id: "#ORD-7730",
//     customer: "Chinelo Okoro",
//     initials: "CO",
//     total: "15,000",
//     status: "Ready For Pick",
//     date: "Oct 23, 2023",
//   },
//   {
//     id: "#ORD-7729",
//     customer: "David Obi",
//     initials: "DO",
//     total: "7,500",
//     status: "Out of Delivered",
//     date: "Oct 22, 2023",
//   },
//   {
//     id: "#ORD-7729",
//     customer: "Umoren Obi",
//     initials: "DO",
//     total: "7,500",
//     status: " Delivered",
//     date: "Oct 22, 2023",
//   },
// ];

// const statusStyles = {
//   "Received Order": "bg-[#DBEAFE] text-[#1D4ED8]",
//   "Prepared Food": "bg-[#FFEDD5] text-[#C2410C]",
//   "Ready For Pick": "bg-[#F3E8FF] text-[#7E22CE]",
//   "Out of Delivered": "bg-[#FEF3C7] text-[#B45309]",
//   "Delivered": "bg-[#DCFCE7] text-[#166534]",
// };

// export default function OrdersPage() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const navigate = useNavigate();

//   const filteredOrders =
//     activeFilter === "All"
//       ? ordersData
//       : ordersData.filter((order) => order.status === activeFilter);

//   const filters = ["All", "Received Order", "Prepared Food", "Ready For Pick", "Out of Delivered"];

//   return (
//     <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
//   {/* Header */}
//   <div className="mb-6 mt-10">
//     <h1 className="text-[32px] font-roboto text-black">Orders</h1>
//     <p className="text-gray-500 text-sm"> View and manage all incoming food orders. </p>
//   </div>

//   {/* Search + Filters */}
//   <div className="flex flex-wrap gap-4 mb-6 items-center">
//     <div className="relative w-72 ">
//       <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//       <input
//         type="text"
//         placeholder="Search order..."
//         className="pl-10  pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px]  font-dm"
//       />
//     </div>

//     <div className="flex gap-3">
//       {filters.map((filter) => (
//         <button
//           key={filter}
//           onClick={() => setActiveFilter(filter)}
//           className={`px-4 py-2 text-sm transition rounded-[40px] rounded-tl-[5px] font-dm ${
//             activeFilter === filter
//               ? "bg-[#A61E30] text-white"
//               : "bg-white border text-gray-600"
//           }`}
//         >
//           {filter}
//         </button>
//       ))}
//     </div>
//   </div>

//   {/* Table */}
//   <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
//     <table className="w-full text-left font-dm">
//       <thead className="bg-gray-50 text-gray-500 text-sm">
//         <tr>
//           <th className="px-6 py-4 font-roboto">ORDER ID</th>
//           <th className="px-6 py-4 font-roboto">CUSTOMER</th>
//           <th className="px-6 py-4 font-roboto">TOTAL</th>
//           <th className="px-6 py-4 font-roboto">STATUS</th>
//           <th className="px-6 py-4 font-roboto">DATE</th>
//           <th className="px-6 py-4 font-roboto">ACTION</th>
//         </tr>
//       </thead>
//       <tbody>
//         {filteredOrders.map((order, index) => (
//           <tr
//             key={index}
//             onClick={() => navigate(`/dashboard/order/${order.id.replace("#", "")}`)}
//             className="border-t hover:bg-gray-50 transition"
//           >
//             <td className="px-6 py-4 font-medium text-[#0F172A]">{order.id}</td>
//             <td className="px-6 py-4 flex items-center gap-3">
//               <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold bg-blue-100 text-blue-600">
//                 {order.initials}
//               </div>
//               <span className="text-[#334155] font-dm">{order.customer}</span>
//             </td>
//             <td className="px-6 py-4 text-[#334155] font-dm">{order.total}</td>
//             <td className="px-6 py-4">
//               <span
//                 className={`px-3 py-1 font-dm text-[#334155] rounded-full text-xs font-medium ${statusStyles[order.status]}`}
//               >
//                 {order.status}
//               </span>
//             </td>
//             <td className="px-6 py-4 font-dm text-[#334155]">{order.date}</td>
//             <td className="px-6 py-4 text-xl cursor-pointer font-dm text-[#334155]">⋯</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FiSearch } from "react-icons/fi";
// import { getAllOrders } from "../api/apiServices"; //

// const statusStyles = {
//   "Received Order": "bg-[#DBEAFE] text-[#1D4ED8]",
//   "Prepared Food": "bg-[#FFEDD5] text-[#C2410C]",
//   "Ready For Pick": "bg-[#F3E8FF] text-[#7E22CE]",
//   "Out of Delivered": "bg-[#FEF3C7] text-[#B45309]",
//   Delivered: "bg-[#DCFCE7] text-[#166534]",
// };

// export default function OrdersPage() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const filters = [
//     "All",
//     "Received Order",
//     "Prepared Food",
//     "Ready For Pick",
//     "Out of Delivered",
//   ];

//   // Fetch orders
//   const fetchOrders = async (status = "All", search = "") => {
//     setLoading(true);
//     try {
//       const params = {};
//       if (status !== "All") params.status = status.toLowerCase();
//       if (search.trim()) params.search = search.trim();

//       const response = await getAllOrders(params);

//       if (response.success && response.data?.orders) {
//         const apiOrders = response.data.orders;

//         const formattedOrders = apiOrders.map((order) => ({
//           id: `#ORD-${order.id || order.order_id || order.order_number || "0000"}`,
//           rawId: order.id || order.order_id || order.order_number,
//           customer:
//             order.customer_name ||
//             order.user?.name ||
//             order.customer?.name ||
//             "Unknown Customer",
//           initials: (
//             order.customer_name ||
//             order.user?.name ||
//             order.customer?.name ||
//             "XX"
//           )
//             .split(" ")
//             .map((n) => n[0])
//             .join("")
//             .toUpperCase()
//             .slice(0, 2),
//           total: order.total_amount
//             ? Number(order.total_amount).toLocaleString()
//             : "0",
//           status: order.status
//             ? order.status
//                 .replace(/_/g, " ")
//                 .replace(/\b\w/g, (l) => l.toUpperCase())
//             : "Received Order",
//           date: order.created_at
//             ? new Date(order.created_at).toLocaleDateString("en-US", {
//                 month: "short",
//                 day: "numeric",
//                 year: "numeric",
//               })
//             : "N/A",
//         }));

//         setOrders(formattedOrders);
//       } else {
//         setOrders([]);
//       }
//     } catch (err) {
//       console.error("Failed to fetch orders:", err);
//       setOrders([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch when filter or search changes
//   useEffect(() => {
//     fetchOrders(activeFilter, searchTerm);
//   }, [activeFilter, searchTerm]);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   return (
//     <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
//       {/* Header */}
//       <div className="mb-6 mt-10">
//         <h1 className="text-[32px] font-roboto text-black">Orders</h1>
//         <p className="text-gray-500 text-sm">
//           View and manage all incoming food orders.
//         </p>
//       </div>

//       {/* Search + Filters */}
//       <div className="flex flex-wrap gap-4 mb-6 items-center">
//         <div className="relative w-72">
//           <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//           <input
//             type="text"
//             placeholder="Search order..."
//             value={searchTerm}
//             onChange={handleSearchChange}
//             className="pl-10 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//           />
//         </div>

//         <div className="flex gap-3">
//           {filters.map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setActiveFilter(filter)}
//               className={`px-4 py-2 text-sm transition rounded-[40px] rounded-tl-[5px] font-dm ${
//                 activeFilter === filter
//                   ? "bg-[#A61E30] text-white"
//                   : "bg-white border text-gray-600"
//               }`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Table */}
//       <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
//         <table className="w-full text-left font-dm">
//           <thead className="bg-gray-50 text-gray-500 text-sm">
//             <tr>
//               <th className="px-6 py-4 font-roboto">ORDER ID</th>
//               <th className="px-6 py-4 font-roboto">CUSTOMER</th>
//               <th className="px-6 py-4 font-roboto">TOTAL</th>
//               <th className="px-6 py-4 font-roboto">STATUS</th>
//               <th className="px-6 py-4 font-roboto">DATE</th>
//               <th className="px-6 py-4 font-roboto">ACTION</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loading ? (
//               <tr>
//                 <td
//                   colSpan="6"
//                   className="px-6 py-16 text-center text-gray-500"
//                 >
//                   Loading orders...
//                 </td>
//               </tr>
//             ) : orders.length === 0 ? (
//               <tr>
//                 <td
//                   colSpan="6"
//                   className="px-6 py-16 text-center text-gray-500"
//                 >
//                   No orders found
//                 </td>
//               </tr>
//             ) : (
//               orders.map((order, index) => (
//                 <tr
//                   key={index}
//                   onClick={() => navigate(`/dashboard/order/${order.rawId}`)}
//                   className="border-t hover:bg-gray-50 transition cursor-pointer"
//                 >
//                   <td className="px-6 py-4 font-medium text-[#0F172A]">
//                     {order.id}
//                   </td>
//                   <td className="px-6 py-4 flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold bg-blue-100 text-blue-600">
//                       {order.initials}
//                     </div>
//                     <span className="text-[#334155] font-dm">
//                       {order.customer}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 text-[#334155] font-dm">
//                     ₦{order.total}
//                   </td>
//                   <td className="px-6 py-4">
//                     <span
//                       className={`px-3 py-1 font-dm rounded-full text-xs font-medium ${
//                         statusStyles[order.status] ||
//                         "bg-gray-100 text-gray-600"
//                       }`}
//                     >
//                       {order.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 font-dm text-[#334155]">
//                     {order.date}
//                   </td>
//                   <td className="px-6 py-4 text-xl cursor-pointer font-dm text-[#334155]">
//                     ⋯
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }





import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { getAllOrders } from "../api/apiServices"; 

const statusStyles = {
  "Paid": "bg-[#DCFCE7] text-[#166534]", // Green
  "Processing": "bg-[#FFEDD5] text-[#C2410C]", // Orange
  "Pending": "bg-[#FEF3C7] text-[#B45309]", // Amber
  "Cancelled": "bg-red-100 text-red-600",
};

export default function OrdersPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filters = [
    "All",
    "Paid",
    "Processing",
    "Pending",
  ];

  const fetchOrders = async (status = "All", search = "") => {
    setLoading(true);
    try {
      const params = {};
      // Match the API's expected query params
      if (status !== "All") params.status = status.toLowerCase();
      if (search.trim()) params.search = search.trim();

      const response = await getAllOrders(params);

      if (response.success && response.data?.orders) {
        const apiOrders = response.data.orders;

        const formattedOrders = apiOrders.map((order) => ({
          // Fix: Use the API's provided order_id directly
          displayId: order.order_id || `#${order.id}`,
          rawId: order.id,
          customer: order.customer?.name || "Unknown Customer",
          initials: order.customer?.initials || "??",
          // Fix: API returns "8,000" as a string with comma, so we use it directly
          total: order.total, 
          status: order.status || "Pending",
          // Fix: Use the API's pre-formatted date
          date: order.date || "N/A",
        }));

        setOrders(formattedOrders);
      } else {
        setOrders([]);
      }
    } catch (err) {
      console.error("Failed to fetch orders:", err);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchOrders(activeFilter, searchTerm);
    }, 300); // Small debounce for search

    return () => clearTimeout(delayDebounceFn);
  }, [activeFilter, searchTerm]);

  return (
    <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
      <div className="mb-6 mt-10">
        <h1 className="text-[32px] font-roboto text-black">Orders</h1>
        <p className="text-gray-500 text-sm">
          View and manage all incoming food orders.
        </p>
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

        <div className="flex gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm transition rounded-[40px] rounded-tl-[5px] font-dm ${
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

      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left font-dm">
          <thead className="bg-gray-50 text-gray-500 text-sm">
            <tr>
              <th className="px-6 py-4 font-roboto">ORDER ID</th>
              <th className="px-6 py-4 font-roboto">CUSTOMER</th>
              <th className="px-6 py-4 font-roboto">TOTAL</th>
              <th className="px-6 py-4 font-roboto">STATUS</th>
              <th className="px-6 py-4 font-roboto">DATE</th>
              <th className="px-6 py-4 font-roboto">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="px-6 py-16 text-center text-gray-500">
                  Loading orders...
                </td>
              </tr>
            ) : orders.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-6 py-16 text-center text-gray-500">
                  No orders found
                </td>
              </tr>
            ) : (
              orders.map((order, index) => (
                <tr
                  key={order.rawId || index}
                  onClick={() => navigate(`/dashboard/order/${order.rawId}`)}
                  className="border-t hover:bg-gray-50 transition cursor-pointer"
                >
                  <td className="px-6 py-4 font-medium text-[#0F172A]">
                    {order.displayId}
                  </td>
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold bg-blue-100 text-blue-600 uppercase">
                      {order.initials}
                    </div>
                    <span className="text-[#334155] font-dm">
                      {order.customer}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#334155] font-dm">
                    ₦{order.total}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 font-dm rounded-full text-xs font-medium ${
                        statusStyles[order.status] || "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-dm text-[#334155]">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 text-xl cursor-pointer font-dm text-[#334155]">
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