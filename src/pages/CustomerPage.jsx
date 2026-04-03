




// import React, { useState, useMemo } from "react";
// import { FiSearch } from "react-icons/fi";
// import { FaStar } from "react-icons/fa";
// import profilePic from "../assets/profile.png";
// import { useNavigate } from "react-router-dom";

// /* ===========================
// Reusable Components
// =========================== */

// const ReviewItem = ({ reviewer, rating, message, avatar }) => (
//   <div className="flex gap-3">
//     <img src={avatar} alt={reviewer} className="w-10 h-10 rounded-full object-cover" />
//     <div>
//       <p className="text-sm font-semibold text-gray-800">{reviewer}</p>
//       <div className="flex text-red-500 text-xs">
//         {[...Array(rating)].map((_, i) => (
//           <FaStar key={i} />
//         ))}
//       </div>
//       <p className="text-xs text-gray-500">{message}</p>
//     </div>
//   </div>
// );

// const CustomerItem = ({ customer, isActive, onClick }) => (
//   <div
//     onClick={onClick}
//     className={`flex items-center gap-3 p-2 rounded-[12px] cursor-pointer relative bg-[#FFFFFF] shadow-sm hover:bg-gray-50 transition`}
//   >
//     {/* Vertical accent line inside the card */}
//     <div
//       className={`absolute left-0 top-0 h-full w-1 rounded-l-[12px] ${
//         isActive ? "bg-[#A61E30]" : "bg-transparent"
//       }`}
//     ></div>

//     <img
//       src={customer.avatar}
//       className="w-10 h-10 rounded-full object-cover"
//       alt={customer.name}
//     />
//     <div>
//       <p className="text-sm font-semibold text-gray-800">{customer.name}</p>
//       <p className="text-xs text-gray-500">Last active {customer.lastActive}</p>
//     </div>
//   </div>
// );

// /* ===========================
// Main Component
// =========================== */

// export default function CustomerPage() {
//   const navigate = useNavigate();

//   /* ===========================
//   Mock Data (Replace with API)
//   ============================ */
//   const customers = [
//     { id: 1, name: "Jane Mwangi", avatar: profilePic, lastActive: "1h ago", status: "Active" },
//     { id: 2, name: "Sarah Paul", avatar: profilePic, lastActive: "2h ago", status: "Recent" },
//     { id: 3, name: "John Doe", avatar: profilePic, lastActive: "3h ago", status: "Active" },
//     // Add more for testing large lists
//   ];

//   const reviews = [
//     { id: 1, reviewer: "Sarah Paul", rating: 5, message: "Delicious food, fast delivery", avatar: profilePic },
//     { id: 2, reviewer: "John Mike", rating: 4, message: "Packaging was excellent", avatar: profilePic },
//     { id: 3, reviewer: "Anna Lee", rating: 5, message: "Quick delivery & tasty meals", avatar: profilePic },
//     // Add more for large datasets
//   ];

//   const orders = [
//     { id: "ORD-7791", item: "Jollof Rice", total: "₦11,200", date: "Oct 23, 2023" },
//     { id: "ORD-7792", item: "3 packs of noodles", total: "₦5,700", date: "Oct 23, 2023" },
//     { id: "ORD-7793", item: "Fried Plantain", total: "₦2,500", date: "Oct 22, 2023" },
//     { id: "ORD-7794", item: "Chicken Suya", total: "₦7,000", date: "Oct 21, 2023" },
//     // Add more for scroll testing
//   ];

//   /* ===========================
//   React State
//   ============================ */
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCustomer, setSelectedCustomer] = useState(customers[0]?.id);

//   /* ===========================
//   Filter + Search Logic
//   ============================ */
//   const filteredCustomers = useMemo(() => {
//     return customers
//       .filter((customer) =>
//         activeFilter === "All" ? true : customer.status === activeFilter
//       )
//       .filter((customer) =>
//         customer.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//   }, [customers, activeFilter, searchTerm]);

//   return (
//     <div className="flex min-h-screen bg-[#F6F1E8]">
//       {/* SIDEBAR */}
//       <div className="w-[280px] mt-14 bg-[#F9F9F9] p-5 border-r flex flex-col">
//         <h1 className="text-lg font-semibold text-gray-800 mb-4">Customers</h1>

//         {/* SEARCH */}
//         <div className="relative mb-5">
//           <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//           <input
//             placeholder="Search customer..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-10 rounded-tl-[5px] pr-4 py-2 w-full bg-white text-gray-600 border shadow-sm rounded-[40px]"
//           />
//         </div>

//         {/* FILTER */}
//         <div className="flex mb-4 rounded-[12px] bg-gray-100 p-1">
//           {["All", "Active", "Recent"].map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setActiveFilter(filter)}
//               className={`px-5 py-1 text-xs rounded-[6px] ${
//                 activeFilter === filter
//                   ? "bg-[#A61E30] text-white"
//                   : "bg-white border text-gray-600"
//               }`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>

//         {/* CUSTOMER LIST */}
//         <div className="space-y-3 overflow-y-auto max-h-[500px]">
//           {filteredCustomers.map((customer) => (
//             <CustomerItem
//               key={customer.id}
//               customer={customer}
//               isActive={customer.id === selectedCustomer}
//               onClick={() => setSelectedCustomer(customer.id)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="flex-1 p-6 mt-10 space-y-6">
//         {/* PROFILE CARD */}
//         <div className="bg-white rounded-[12px] p-5 flex justify-between shadow-sm">
//           <div className="flex items-center gap-4">
//             <img src={profilePic} className="w-14 h-14 rounded-full" />
//             <div>
//               <h2 className="font-semibold text-gray-800">Jane Mwangi</h2>
//               <p className="text-sm text-gray-500">
//                 9 am road, Akwa Ibom · Customer since Jan 2023
//               </p>
//               <p className="text-sm text-gray-500">
//                 jane.mwangi@example.com · +234 701 234 567
//               </p>
//             </div>
//           </div>
//           <button
//             onClick={() => navigate("/messages")}
//             className="bg-[#A61E30] text-white rounded-[12px] h-[38px] px-4 text-sm hover:bg-[#8f1624] transition-colors"
//           >
//             Send Message
//           </button>
//         </div>

//         {/* STATS */}
//         <div className="grid grid-cols-3 gap-4">
//           <div className="bg-white p-4 rounded-xl shadow-sm">
//             <p className="text-xs text-gray-500">Total Orders</p>
//             <h3 className="text-xl font-bold text-gray-800">{orders.length}</h3>
//             <p className="text-xs text-green-600">2 Orders today</p>
//           </div>
//           <div className="bg-white p-4 rounded-xl shadow-sm">
//             <p className="text-xs text-gray-500">Pending Orders</p>
//             <h3 className="text-xl font-bold text-gray-800">0</h3>
//             <p className="text-xs text-red-500">No pending order</p>
//           </div>
//           <div className="bg-white p-4 rounded-xl shadow-sm">
//             <p className="text-xs text-gray-500">Complete</p>
//             <h3 className="text-xl font-bold text-gray-800">{orders.length}</h3>
//             <p className="text-xs text-green-600">100%</p>
//           </div>
//         </div>

//         {/* RECENT ORDERS */}
//        <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col">
//   <h3 className="font-[500] font-dm text-[24px] text-[#A61E30] mb-4">
//     Recent Orders
//   </h3>

//   {/* Scrollable Table Container with visible rounded corners */}
//   <div className="overflow-y-auto max-h-[300px] w-full p-1 rounded-[20px] bg-white ">
//     <table className="w-full text-sm table-fixed border-collapse">
//       <thead className="sticky top-0 bg-[#E0DBDB4D]">
//         <tr className="text-gray-300 text-left">
//           <th className="px-3 py-2">ORDER ID</th>
//           <th className="px-3 py-2">ITEM</th>
//           <th className="px-3 py-2">TOTAL</th>
//           <th className="px-3 py-2">DATE</th>
//         </tr>
//       </thead>
//       <tbody>
//         {orders.map((order) => (
//           <tr
//             key={order.id}
//             className="hover:bg-gray-50 transition-colors"
//           >
//             <td className="px-3 py-2 text-[#334155]">{order.id}</td>
//             <td className="px-3 py-2 text-[#334155]">{order.item}</td>
//             <td className="px-3 py-2 text-[#334155]">{order.total}</td>
//             <td className="px-3 py-2 text-[#334155]">{order.date}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// </div>

//         {/* REVIEWS */}
//         <div className="bg-white rounded-xl p-5 shadow-sm">
//           <div className="flex justify-between mb-4">
//             <h3 className="font-[500] font-dm text-[24px] text-[#A61E30] mb-4">Recent Reviews</h3>
//             <button className="text-xs bg-[#F6E9EA] px-3 text-[#A61E30] py-1 w-[95.16px] rounded-[12.77px] h-[28.77px]">
//               View all →
//             </button>
//           </div>

//           <div className="space-y-4 max-h-[260px] overflow-y-auto">
//             {reviews.map((review) => (
//               <ReviewItem key={review.id} {...review} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }









// import React, { useState, useEffect, useMemo } from "react";
// import { FiSearch } from "react-icons/fi";
// import { FaStar } from "react-icons/fa";
// import profilePic from "../assets/profile.png";
// import { useNavigate } from "react-router-dom";

// import { getCustomers, getCustomerById } from "../api/apiServices";

// /* ===========================
// Reusable Components (Unchanged)
// =========================== */

// const ReviewItem = ({ reviewer, rating, message, avatar }) => (
//   <div className="flex gap-3">
//     <img src={avatar || profilePic} alt={reviewer} className="w-10 h-10 rounded-full object-cover" />
//     <div>
//       <p className="text-sm font-semibold text-gray-800">{reviewer}</p>
//       <div className="flex text-red-500 text-xs">
//         {[...Array(rating || 5)].map((_, i) => (
//           <FaStar key={i} />
//         ))}
//       </div>
//       <p className="text-xs text-gray-500">{message}</p>
//     </div>
//   </div>
// );

// const CustomerItem = ({ customer, isActive, onClick }) => (
//   <div
//     onClick={onClick}
//     className={`flex items-center gap-3 p-2 rounded-[12px] cursor-pointer relative bg-[#FFFFFF] shadow-sm hover:bg-gray-50 transition`}
//   >
//     <div
//       className={`absolute left-0 top-0 h-full w-1 rounded-l-[12px] ${
//         isActive ? "bg-[#A61E30]" : "bg-transparent"
//       }`}
//     ></div>

//     <img
//       src={customer.avatar || profilePic}
//       className="w-10 h-10 rounded-full object-cover"
//       alt={customer.name}
//     />
//     <div>
//       <p className="text-sm font-semibold text-gray-800">{customer.name}</p>
//       <p className="text-xs text-gray-500">Last active {customer.lastActive}</p>
//     </div>
//   </div>
// );

// /* ===========================
// Main Component
// =========================== */

// export default function CustomerPage() {
//   const navigate = useNavigate();

//   // State
//   const [customers, setCustomers] = useState([]);
//   const [selectedCustomerId, setSelectedCustomerId] = useState(null);
//   const [customerDetails, setCustomerDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [detailsLoading, setDetailsLoading] = useState(false);

//   const [activeFilter, setActiveFilter] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");

//   // Fetch all customers for sidebar
//   const fetchCustomers = async () => {
//     try {
//       const response = await getCustomers();
//       if (response.success && Array.isArray(response.data)) {
//         const formattedCustomers = response.data.map((cust) => ({
//           id: cust.id,
//           name: cust.name || cust.customer_name,
//           avatar: cust.avatar || profilePic,
//           lastActive: cust.last_active || "Recently",
//           status: cust.status || "Active",
//         }));

//         setCustomers(formattedCustomers);

//         // Auto select first customer
//         if (formattedCustomers.length > 0 && !selectedCustomerId) {
//           setSelectedCustomerId(formattedCustomers[0].id);
//         }
//       }
//     } catch (err) {
//       console.error("Failed to fetch customers:", err);
//     }
//   };

//   // Fetch selected customer details
//   const fetchCustomerDetails = async (id) => {
//     if (!id) return;
//     setDetailsLoading(true);
//     try {
//       const response = await getCustomerById(id);
//       if (response.success) {
//         setCustomerDetails(response.data);
//       }
//     } catch (err) {
//       console.error("Failed to fetch customer details:", err);
//     } finally {
//       setDetailsLoading(false);
//     }
//   };

//   // Initial load
//   useEffect(() => {
//     fetchCustomers();
//   }, []);

//   // Load details when selection changes
//   useEffect(() => {
//     if (selectedCustomerId) {
//       fetchCustomerDetails(selectedCustomerId);
//     }
//   }, [selectedCustomerId]);

//   // Filter + Search
//   const filteredCustomers = useMemo(() => {
//     return customers
//       .filter((customer) =>
//         activeFilter === "All" ? true : customer.status === activeFilter
//       )
//       .filter((customer) =>
//         customer.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//   }, [customers, activeFilter, searchTerm]);

//   // Current customer data (fallback if details not loaded yet)
//   const currentCustomer = customerDetails?.profile || {
//     name: "Loading...",
//     location: "N/A",
//     email: "N/A",
//     phone: "N/A",
//     customer_since: "N/A",
//     avatar: profilePic,
//   };

//   const stats = customerDetails?.stats || {
//     total_orders: 0,
//     pending_orders: 0,
//     completed_orders: 0,
//     completion_rate: "0%",
//   };

//   const recentOrders = customerDetails?.recent_orders || [];
//   const recentReviews = customerDetails?.recent_reviews || [];

//   return (
//     <div className="flex min-h-screen bg-[#F6F1E8]">
//       {/* SIDEBAR - Live Customers */}
//       <div className="w-[280px] mt-14 bg-[#F9F9F9] p-5 border-r flex flex-col">
//         <h1 className="text-lg font-semibold text-gray-800 mb-4">Customers</h1>

//         {/* SEARCH */}
//         <div className="relative mb-5">
//           <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//           <input
//             placeholder="Search customer..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-10 rounded-tl-[5px] pr-4 py-2 w-full bg-white text-gray-600 border shadow-sm rounded-[40px]"
//           />
//         </div>

//         {/* FILTER */}
//         <div className="flex mb-4 rounded-[12px] bg-gray-100 p-1">
//           {["All", "Active", "Recent"].map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setActiveFilter(filter)}
//               className={`px-5 py-1 text-xs rounded-[6px] ${
//                 activeFilter === filter
//                   ? "bg-[#A61E30] text-white"
//                   : "bg-white border text-gray-600"
//               }`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>

//         {/* CUSTOMER LIST - Live */}
//         <div className="space-y-3 overflow-y-auto max-h-[500px]">
//           {filteredCustomers.length === 0 ? (
//             <p className="text-gray-500 text-sm p-3">No customers found</p>
//           ) : (
//             filteredCustomers.map((customer) => (
//               <CustomerItem
//                 key={customer.id}
//                 customer={customer}
//                 isActive={customer.id === selectedCustomerId}
//                 onClick={() => setSelectedCustomerId(customer.id)}
//               />
//             ))
//           )}
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="flex-1 p-6 mt-10 space-y-6">
//         {/* PROFILE CARD - Live */}
//         <div className="bg-white rounded-[12px] p-5 flex justify-between shadow-sm">
//           <div className="flex items-center gap-4">
//             <img 
//               src={currentCustomer.avatar || profilePic} 
//               className="w-14 h-14 rounded-full" 
//               alt={currentCustomer.name} 
//             />
//             <div>
//               <h2 className="font-semibold text-gray-800">{currentCustomer.name}</h2>
//               <p className="text-sm text-gray-500">
//                 {currentCustomer.location} · Customer since {currentCustomer.customer_since}
//               </p>
//               <p className="text-sm text-gray-500">
//                 {currentCustomer.email} · {currentCustomer.phone}
//               </p>
//             </div>
//           </div>
//           <button
//             onClick={() => navigate("/messages")}
//             className="bg-[#A61E30] text-white rounded-[12px] h-[38px] px-4 text-sm hover:bg-[#8f1624] transition-colors"
//           >
//             Send Message
//           </button>
//         </div>

//         {/* STATS - Live */}
//         <div className="grid grid-cols-3 gap-4">
//           <div className="bg-white p-4 rounded-xl shadow-sm">
//             <p className="text-xs text-gray-500">Total Orders</p>
//             <h3 className="text-xl font-bold text-gray-800">{stats.total_orders}</h3>
//             <p className="text-xs text-green-600">2 Orders today</p>
//           </div>
//           <div className="bg-white p-4 rounded-xl shadow-sm">
//             <p className="text-xs text-gray-500">Pending Orders</p>
//             <h3 className="text-xl font-bold text-gray-800">{stats.pending_orders}</h3>
//             <p className="text-xs text-red-500">No pending order</p>
//           </div>
//           <div className="bg-white p-4 rounded-xl shadow-sm">
//             <p className="text-xs text-gray-500">Complete</p>
//             <h3 className="text-xl font-bold text-gray-800">{stats.completed_orders}</h3>
//             <p className="text-xs text-green-600">{stats.completion_rate}</p>
//           </div>
//         </div>

//         {/* RECENT ORDERS - Live */}
//         <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col">
//           <h3 className="font-[500] font-dm text-[24px] text-[#A61E30] mb-4">
//             Recent Orders
//           </h3>

//           <div className="overflow-y-auto max-h-[300px] w-full p-1 rounded-[20px] bg-white">
//             <table className="w-full text-sm table-fixed border-collapse">
//               <thead className="sticky top-0 bg-[#E0DBDB4D]">
//                 <tr className="text-gray-300 text-left">
//                   <th className="px-3 py-2">ORDER ID</th>
//                   <th className="px-3 py-2">ITEM</th>
//                   <th className="px-3 py-2">TOTAL</th>
//                   <th className="px-3 py-2">DATE</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {recentOrders.length === 0 ? (
//                   <tr>
//                     <td colSpan="4" className="px-3 py-8 text-center text-gray-500">
//                       No recent orders
//                     </td>
//                   </tr>
//                 ) : (
//                   recentOrders.map((order, index) => (
//                     <tr key={index} className="hover:bg-gray-50 transition-colors">
//                       <td className="px-3 py-2 text-[#334155]">{order.order_id || `#ORD-${order.id}`}</td>
//                       <td className="px-3 py-2 text-[#334155]">{order.item || order.food_name || "N/A"}</td>
//                       <td className="px-3 py-2 text-[#334155]">₦{Number(order.total || order.amount || 0).toLocaleString()}</td>
//                       <td className="px-3 py-2 text-[#334155]">
//                         {order.date || (order.created_at ? new Date(order.created_at).toLocaleDateString() : "N/A")}
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* REVIEWS - Live */}
//         <div className="bg-white rounded-xl p-5 shadow-sm">
//           <div className="flex justify-between mb-4">
//             <h3 className="font-[500] font-dm text-[24px] text-[#A61E30] mb-4">Recent Reviews</h3>
//             <button className="text-xs bg-[#F6E9EA] px-3 text-[#A61E30] py-1 w-[95.16px] rounded-[12.77px] h-[28.77px]">
//               View all →
//             </button>
//           </div>

//           <div className="space-y-4 max-h-[260px] overflow-y-auto">
//             {recentReviews.length === 0 ? (
//               <p className="text-gray-500 text-sm py-8 text-center">No reviews yet</p>
//             ) : (
//               recentReviews.map((review, index) => (
//                 <ReviewItem
//                   key={index}
//                   reviewer={review.reviewer || review.user_name}
//                   rating={review.rating || 5}
//                   message={review.message || review.comment}
//                   avatar={review.avatar || profilePic}
//                 />
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






import React, { useState, useEffect, useMemo } from "react";
import { FiSearch } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import profilePic from "../assets/profile.png";
import { useNavigate } from "react-router-dom";

import { getCustomers, getCustomerById } from "../api/apiServices";

/* ===========================
Reusable Components
=========================== */

const ReviewItem = ({ reviewer, rating, message, avatar }) => (
  <div className="flex gap-3">
    <img 
      src={avatar || profilePic} 
      alt={reviewer} 
      className="w-10 h-10 rounded-full object-cover flex-shrink-0" 
    />
    <div className="flex-1 min-w-0">
      <p className="text-sm font-semibold text-gray-800">{reviewer}</p>
      <div className="flex text-red-500 text-xs">
        {[...Array(Math.min(rating || 5, 5))].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <p className="text-xs text-gray-500 line-clamp-2">{message}</p>
    </div>
  </div>
);

const CustomerItem = ({ customer, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-3 p-2 rounded-[12px] cursor-pointer relative bg-[#FFFFFF] shadow-sm hover:bg-gray-50 transition`}
  >
    <div
      className={`absolute left-0 top-0 h-full w-1 rounded-l-[12px] ${
        isActive ? "bg-[#A61E30]" : "bg-transparent"
      }`}
    ></div>

    <img
      src={customer.avatar || profilePic}
      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
      alt={customer.name}
    />
    <div className="min-w-0 flex-1">
      <p className="text-sm font-semibold text-gray-800 truncate">{customer.name}</p>
      <p className="text-xs text-gray-500">Last active {customer.lastActive}</p>
    </div>
  </div>
);

/* ===========================
Main Component
=========================== */

export default function CustomerPage() {
  const navigate = useNavigate();

  // State
  const [customers, setCustomers] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [customerDetails, setCustomerDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [detailsLoading, setDetailsLoading] = useState(false);

  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch all customers for sidebar
  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const response = await getCustomers();
      if (response.success && Array.isArray(response.data)) {
        const formattedCustomers = response.data.map((cust) => ({
          id: cust.id,
          name: cust.name || cust.customer_name || "Unknown",
          avatar: cust.avatar,
          lastActive: cust.last_active || cust.last_login || "Recently",
          status: cust.status || "Active",
        }));

        setCustomers(formattedCustomers);

        // Auto-select first customer
        if (formattedCustomers.length > 0 && !selectedCustomerId) {
          setSelectedCustomerId(formattedCustomers[0].id);
        }
      }
    } catch (err) {
      console.error("Failed to fetch customers:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch selected customer full details
  const fetchCustomerDetails = async (id) => {
    if (!id) return;
    setDetailsLoading(true);
    try {
      const response = await getCustomerById(id);
      if (response.success) {
        setCustomerDetails(response.data);
      }
    } catch (err) {
      console.error("Failed to fetch customer details:", err);
    } finally {
      setDetailsLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchCustomers();
  }, []);

  // Load details when customer is selected
  useEffect(() => {
    if (selectedCustomerId) {
      fetchCustomerDetails(selectedCustomerId);
    }
  }, [selectedCustomerId]);

  // Filter + Search Logic
  const filteredCustomers = useMemo(() => {
    return customers
      .filter((customer) =>
        activeFilter === "All" ? true : customer.status === activeFilter
      )
      .filter((customer) =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [customers, activeFilter, searchTerm]);

  // Current displayed customer data
  const currentCustomer = customerDetails?.data?.profile || {
    name: "Select a customer",
    location: "N/A",
    email: "N/A",
    phone: "N/A",
    customer_since: "N/A",
    avatar: null,
  };

  const stats = customerDetails?.data?.stats || {
    total_orders: 0,
    pending_orders: 0,
    completed_orders: 0,
    completion_rate: "0%",
  };

  const recentOrders = customerDetails?.data?.recent_orders || [];
  const recentReviews = customerDetails?.data?.recent_reviews || [];

  return (
    <div className="flex min-h-screen bg-[#F6F1E8]">
      {/* SIDEBAR - Live Customers List */}
      <div className="w-[280px] mt-14 bg-[#F9F9F9] p-5 border-r flex flex-col">
        <h1 className="text-lg font-semibold text-gray-800 mb-4">Customers</h1>

        {/* SEARCH */}
        <div className="relative mb-5">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            placeholder="Search customer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 rounded-tl-[5px] pr-4 py-2 w-full bg-white text-gray-600 border shadow-sm rounded-[40px]"
          />
        </div>

        {/* FILTER */}
        <div className="flex mb-4 rounded-[12px] bg-gray-100 p-1">
          {["All", "Active", "Recent"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-1 text-xs rounded-[6px] flex-1 ${
                activeFilter === filter
                  ? "bg-[#A61E30] text-white"
                  : "bg-white border text-gray-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* CUSTOMER LIST - Scrollable */}
        <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-220px)] pr-2">
          {loading ? (
            <p className="text-gray-500 text-sm p-3">Loading customers...</p>
          ) : filteredCustomers.length === 0 ? (
            <p className="text-gray-500 text-sm p-3">No customers found</p>
          ) : (
            filteredCustomers.map((customer) => (
              <CustomerItem
                key={customer.id}
                customer={customer}
                isActive={customer.id === selectedCustomerId}
                onClick={() => setSelectedCustomerId(customer.id)}
              />
            ))
          )}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 mt-10 space-y-6">
        {/* PROFILE CARD */}
        <div className="bg-white rounded-[12px] p-5 flex justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <img 
              src={currentCustomer.avatar || profilePic} 
              className="w-14 h-14 rounded-full object-cover" 
              alt={currentCustomer.name} 
            />
            <div>
              <h2 className="font-semibold text-gray-800">{currentCustomer.name}</h2>
              <p className="text-sm text-gray-500">
                {currentCustomer.location} · Customer since {currentCustomer.customer_since}
              </p>
              <p className="text-sm text-gray-500">
                {currentCustomer.email} · {currentCustomer.phone}
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/messages")}
            className="bg-[#A61E30] text-white rounded-[12px] h-[38px] px-4 text-sm hover:bg-[#8f1624] transition-colors"
          >
            Send Message
          </button>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-xs text-gray-500">Total Orders</p>
            <h3 className="text-xl font-bold text-gray-800">{stats.total_orders}</h3>
            <p className="text-xs text-green-600">2 Orders today</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-xs text-gray-500">Pending Orders</p>
            <h3 className="text-xl font-bold text-gray-800">{stats.pending_orders}</h3>
            <p className="text-xs text-red-500">No pending order</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-xs text-gray-500">Complete</p>
            <h3 className="text-xl font-bold text-gray-800">{stats.completed_orders}</h3>
            <p className="text-xs text-green-600">{stats.completion_rate}</p>
          </div>
        </div>

        {/* RECENT ORDERS - Scrollable */}
        <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col">
          <h3 className="font-[500] font-dm text-[24px] text-[#A61E30] mb-4">
            Recent Orders
          </h3>

          <div className="overflow-y-auto max-h-[300px] w-full p-1 rounded-[20px] bg-white ">
            <table className="w-full text-sm table-fixed border-collapse">
              <thead className="sticky top-0 bg-[#E0DBDB4D]">
                <tr className="text-gray-300 text-left">
                  <th className="px-3 py-2">ORDER ID</th>
                  <th className="px-3 py-2">ITEM</th>
                  <th className="px-3 py-2">TOTAL</th>
                  <th className="px-3 py-2">DATE</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="px-3 py-10 text-center text-gray-500">
                      No recent orders yet
                    </td>
                  </tr>
                ) : (
                  recentOrders.map((order, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-3 py-2 text-[#334155]">
                        {order.order_id || `#ORD-${order.id}`}
                      </td>
                      <td className="px-3 py-2 text-[#334155]">
                        {order.item || order.food_name || "N/A"}
                      </td>
                      <td className="px-3 py-2 text-[#334155]">
                        ₦{Number(order.total || order.amount || 0).toLocaleString()}
                      </td>
                      <td className="px-3 py-2 text-[#334155]">
                        {order.date || (order.created_at ? new Date(order.created_at).toLocaleDateString() : "N/A")}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* RECENT REVIEWS - Scrollable */}
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <div className="flex justify-between mb-4">
            <h3 className="font-[500] font-dm text-[24px] text-[#A61E30]">Recent Reviews</h3>
            <button className="text-xs bg-[#F6E9EA] px-3 text-[#A61E30] py-1 w-[95.16px] rounded-[12.77px] h-[28.77px]">
              View all →
            </button>
          </div>

          <div className="space-y-4 max-h-[260px] overflow-y-auto pr-2">
            {recentReviews.length === 0 ? (
              <p className="text-gray-500 text-sm py-8 text-center">No reviews yet</p>
            ) : (
              recentReviews.map((review, index) => (
                <ReviewItem
                  key={index}
                  reviewer={review.reviewer || review.user_name || "Customer"}
                  rating={review.rating || 5}
                  message={review.message || review.comment || ""}
                  avatar={review.avatar}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}