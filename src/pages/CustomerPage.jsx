




// // // // import React, { useState, useMemo } from "react";
// // // // import { FiSearch } from "react-icons/fi";
// // // // import { FaStar } from "react-icons/fa";
// // // // import profilePic from "../assets/profile.png";
// // // // import { useNavigate } from "react-router-dom";

// // // // /* ===========================
// // // // Reusable Components
// // // // =========================== */

// // // // const ReviewItem = ({ reviewer, rating, message, avatar }) => (
// // // //   <div className="flex gap-3">
// // // //     <img src={avatar} alt={reviewer} className="w-10 h-10 rounded-full object-cover" />
// // // //     <div>
// // // //       <p className="text-sm font-semibold text-gray-800">{reviewer}</p>
// // // //       <div className="flex text-red-500 text-xs">
// // // //         {[...Array(rating)].map((_, i) => (
// // // //           <FaStar key={i} />
// // // //         ))}
// // // //       </div>
// // // //       <p className="text-xs text-gray-500">{message}</p>
// // // //     </div>
// // // //   </div>
// // // // );

// // // // const CustomerItem = ({ customer, isActive, onClick }) => (
// // // //   <div
// // // //     onClick={onClick}
// // // //     className={`flex items-center gap-3 p-2 rounded-[12px] cursor-pointer relative bg-[#FFFFFF] shadow-sm hover:bg-gray-50 transition`}
// // // //   >
// // // //     {/* Vertical accent line inside the card */}
// // // //     <div
// // // //       className={`absolute left-0 top-0 h-full w-1 rounded-l-[12px] ${
// // // //         isActive ? "bg-[#A61E30]" : "bg-transparent"
// // // //       }`}
// // // //     ></div>

// // // //     <img
// // // //       src={customer.avatar}
// // // //       className="w-10 h-10 rounded-full object-cover"
// // // //       alt={customer.name}
// // // //     />
// // // //     <div>
// // // //       <p className="text-sm font-semibold text-gray-800">{customer.name}</p>
// // // //       <p className="text-xs text-gray-500">Last active {customer.lastActive}</p>
// // // //     </div>
// // // //   </div>
// // // // );

// // // // /* ===========================
// // // // Main Component
// // // // =========================== */

// // // // export default function CustomerPage() {
// // // //   const navigate = useNavigate();

// // // //   /* ===========================
// // // //   Mock Data (Replace with API)
// // // //   ============================ */
// // // //   const customers = [
// // // //     { id: 1, name: "Jane Mwangi", avatar: profilePic, lastActive: "1h ago", status: "Active" },
// // // //     { id: 2, name: "Sarah Paul", avatar: profilePic, lastActive: "2h ago", status: "Recent" },
// // // //     { id: 3, name: "John Doe", avatar: profilePic, lastActive: "3h ago", status: "Active" },
// // // //     // Add more for testing large lists
// // // //   ];

// // // //   const reviews = [
// // // //     { id: 1, reviewer: "Sarah Paul", rating: 5, message: "Delicious food, fast delivery", avatar: profilePic },
// // // //     { id: 2, reviewer: "John Mike", rating: 4, message: "Packaging was excellent", avatar: profilePic },
// // // //     { id: 3, reviewer: "Anna Lee", rating: 5, message: "Quick delivery & tasty meals", avatar: profilePic },
// // // //     // Add more for large datasets
// // // //   ];

// // // //   const orders = [
// // // //     { id: "ORD-7791", item: "Jollof Rice", total: "₦11,200", date: "Oct 23, 2023" },
// // // //     { id: "ORD-7792", item: "3 packs of noodles", total: "₦5,700", date: "Oct 23, 2023" },
// // // //     { id: "ORD-7793", item: "Fried Plantain", total: "₦2,500", date: "Oct 22, 2023" },
// // // //     { id: "ORD-7794", item: "Chicken Suya", total: "₦7,000", date: "Oct 21, 2023" },
// // // //     // Add more for scroll testing
// // // //   ];

// // // //   /* ===========================
// // // //   React State
// // // //   ============================ */
// // // //   const [activeFilter, setActiveFilter] = useState("All");
// // // //   const [searchTerm, setSearchTerm] = useState("");
// // // //   const [selectedCustomer, setSelectedCustomer] = useState(customers[0]?.id);

// // // //   /* ===========================
// // // //   Filter + Search Logic
// // // //   ============================ */
// // // //   const filteredCustomers = useMemo(() => {
// // // //     return customers
// // // //       .filter((customer) =>
// // // //         activeFilter === "All" ? true : customer.status === activeFilter
// // // //       )
// // // //       .filter((customer) =>
// // // //         customer.name.toLowerCase().includes(searchTerm.toLowerCase())
// // // //       );
// // // //   }, [customers, activeFilter, searchTerm]);

// // // //   return (
// // // //     <div className="flex min-h-screen bg-[#F6F1E8]">
// // // //       {/* SIDEBAR */}
// // // //       <div className="w-[280px] mt-14 bg-[#F9F9F9] p-5 border-r flex flex-col">
// // // //         <h1 className="text-lg font-semibold text-gray-800 mb-4">Customers</h1>

// // // //         {/* SEARCH */}
// // // //         <div className="relative mb-5">
// // // //           <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
// // // //           <input
// // // //             placeholder="Search customer..."
// // // //             value={searchTerm}
// // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // //             className="pl-10 rounded-tl-[5px] pr-4 py-2 w-full bg-white text-gray-600 border shadow-sm rounded-[40px]"
// // // //           />
// // // //         </div>

// // // //         {/* FILTER */}
// // // //         <div className="flex mb-4 rounded-[12px] bg-gray-100 p-1">
// // // //           {["All", "Active", "Recent"].map((filter) => (
// // // //             <button
// // // //               key={filter}
// // // //               onClick={() => setActiveFilter(filter)}
// // // //               className={`px-5 py-1 text-xs rounded-[6px] ${
// // // //                 activeFilter === filter
// // // //                   ? "bg-[#A61E30] text-white"
// // // //                   : "bg-white border text-gray-600"
// // // //               }`}
// // // //             >
// // // //               {filter}
// // // //             </button>
// // // //           ))}
// // // //         </div>

// // // //         {/* CUSTOMER LIST */}
// // // //         <div className="space-y-3 overflow-y-auto max-h-[500px]">
// // // //           {filteredCustomers.map((customer) => (
// // // //             <CustomerItem
// // // //               key={customer.id}
// // // //               customer={customer}
// // // //               isActive={customer.id === selectedCustomer}
// // // //               onClick={() => setSelectedCustomer(customer.id)}
// // // //             />
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {/* MAIN CONTENT */}
// // // //       <div className="flex-1 p-6 mt-10 space-y-6">
// // // //         {/* PROFILE CARD */}
// // // //         <div className="bg-white rounded-[12px] p-5 flex justify-between shadow-sm">
// // // //           <div className="flex items-center gap-4">
// // // //             <img src={profilePic} className="w-14 h-14 rounded-full" />
// // // //             <div>
// // // //               <h2 className="font-semibold text-gray-800">Jane Mwangi</h2>
// // // //               <p className="text-sm text-gray-500">
// // // //                 9 am road, Akwa Ibom · Customer since Jan 2023
// // // //               </p>
// // // //               <p className="text-sm text-gray-500">
// // // //                 jane.mwangi@example.com · +234 701 234 567
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //           <button
// // // //             onClick={() => navigate("/messages")}
// // // //             className="bg-[#A61E30] text-white rounded-[12px] h-[38px] px-4 text-sm hover:bg-[#8f1624] transition-colors"
// // // //           >
// // // //             Send Message
// // // //           </button>
// // // //         </div>

// // // //         {/* STATS */}
// // // //         <div className="grid grid-cols-3 gap-4">
// // // //           <div className="bg-white p-4 rounded-xl shadow-sm">
// // // //             <p className="text-xs text-gray-500">Total Orders</p>
// // // //             <h3 className="text-xl font-bold text-gray-800">{orders.length}</h3>
// // // //             <p className="text-xs text-green-600">2 Orders today</p>
// // // //           </div>
// // // //           <div className="bg-white p-4 rounded-xl shadow-sm">
// // // //             <p className="text-xs text-gray-500">Pending Orders</p>
// // // //             <h3 className="text-xl font-bold text-gray-800">0</h3>
// // // //             <p className="text-xs text-red-500">No pending order</p>
// // // //           </div>
// // // //           <div className="bg-white p-4 rounded-xl shadow-sm">
// // // //             <p className="text-xs text-gray-500">Complete</p>
// // // //             <h3 className="text-xl font-bold text-gray-800">{orders.length}</h3>
// // // //             <p className="text-xs text-green-600">100%</p>
// // // //           </div>
// // // //         </div>

// // // //         {/* RECENT ORDERS */}
// // // //        <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col">
// // // //   <h3 className="font-[500] font-dm text-[24px] text-[#A61E30] mb-4">
// // // //     Recent Orders
// // // //   </h3>

// // // //   {/* Scrollable Table Container with visible rounded corners */}
// // // //   <div className="overflow-y-auto max-h-[300px] w-full p-1 rounded-[20px] bg-white ">
// // // //     <table className="w-full text-sm table-fixed border-collapse">
// // // //       <thead className="sticky top-0 bg-[#E0DBDB4D]">
// // // //         <tr className="text-gray-300 text-left">
// // // //           <th className="px-3 py-2">ORDER ID</th>
// // // //           <th className="px-3 py-2">ITEM</th>
// // // //           <th className="px-3 py-2">TOTAL</th>
// // // //           <th className="px-3 py-2">DATE</th>
// // // //         </tr>
// // // //       </thead>
// // // //       <tbody>
// // // //         {orders.map((order) => (
// // // //           <tr
// // // //             key={order.id}
// // // //             className="hover:bg-gray-50 transition-colors"
// // // //           >
// // // //             <td className="px-3 py-2 text-[#334155]">{order.id}</td>
// // // //             <td className="px-3 py-2 text-[#334155]">{order.item}</td>
// // // //             <td className="px-3 py-2 text-[#334155]">{order.total}</td>
// // // //             <td className="px-3 py-2 text-[#334155]">{order.date}</td>
// // // //           </tr>
// // // //         ))}
// // // //       </tbody>
// // // //     </table>
// // // //   </div>
// // // // </div>

// // // //         {/* REVIEWS */}
// // // //         <div className="bg-white rounded-xl p-5 shadow-sm">
// // // //           <div className="flex justify-between mb-4">
// // // //             <h3 className="font-[500] font-dm text-[24px] text-[#A61E30] mb-4">Recent Reviews</h3>
// // // //             <button className="text-xs bg-[#F6E9EA] px-3 text-[#A61E30] py-1 w-[95.16px] rounded-[12.77px] h-[28.77px]">
// // // //               View all →
// // // //             </button>
// // // //           </div>

// // // //           <div className="space-y-4 max-h-[260px] overflow-y-auto">
// // // //             {reviews.map((review) => (
// // // //               <ReviewItem key={review.id} {...review} />
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }









// // // // import React, { useState, useEffect, useMemo } from "react";
// // // // import { FiSearch } from "react-icons/fi";
// // // // import { FaStar } from "react-icons/fa";
// // // // import profilePic from "../assets/profile.png";
// // // // import { useNavigate } from "react-router-dom";

// // // // import { getCustomers, getCustomerById } from "../api/apiServices";

// // // // /* ===========================
// // // // Reusable Components (Unchanged)
// // // // =========================== */

// // // // const ReviewItem = ({ reviewer, rating, message, avatar }) => (
// // // //   <div className="flex gap-3">
// // // //     <img src={avatar || profilePic} alt={reviewer} className="w-10 h-10 rounded-full object-cover" />
// // // //     <div>
// // // //       <p className="text-sm font-semibold text-gray-800">{reviewer}</p>
// // // //       <div className="flex text-red-500 text-xs">
// // // //         {[...Array(rating || 5)].map((_, i) => (
// // // //           <FaStar key={i} />
// // // //         ))}
// // // //       </div>
// // // //       <p className="text-xs text-gray-500">{message}</p>
// // // //     </div>
// // // //   </div>
// // // // );

// // // // const CustomerItem = ({ customer, isActive, onClick }) => (
// // // //   <div
// // // //     onClick={onClick}
// // // //     className={`flex items-center gap-3 p-2 rounded-[12px] cursor-pointer relative bg-[#FFFFFF] shadow-sm hover:bg-gray-50 transition`}
// // // //   >
// // // //     <div
// // // //       className={`absolute left-0 top-0 h-full w-1 rounded-l-[12px] ${
// // // //         isActive ? "bg-[#A61E30]" : "bg-transparent"
// // // //       }`}
// // // //     ></div>

// // // //     <img
// // // //       src={customer.avatar || profilePic}
// // // //       className="w-10 h-10 rounded-full object-cover"
// // // //       alt={customer.name}
// // // //     />
// // // //     <div>
// // // //       <p className="text-sm font-semibold text-gray-800">{customer.name}</p>
// // // //       <p className="text-xs text-gray-500">Last active {customer.lastActive}</p>
// // // //     </div>
// // // //   </div>
// // // // );

// // // // /* ===========================
// // // // Main Component
// // // // =========================== */

// // // // export default function CustomerPage() {
// // // //   const navigate = useNavigate();

// // // //   // State
// // // //   const [customers, setCustomers] = useState([]);
// // // //   const [selectedCustomerId, setSelectedCustomerId] = useState(null);
// // // //   const [customerDetails, setCustomerDetails] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [detailsLoading, setDetailsLoading] = useState(false);

// // // //   const [activeFilter, setActiveFilter] = useState("All");
// // // //   const [searchTerm, setSearchTerm] = useState("");

// // // //   // Fetch all customers for sidebar
// // // //   const fetchCustomers = async () => {
// // // //     try {
// // // //       const response = await getCustomers();
// // // //       if (response.success && Array.isArray(response.data)) {
// // // //         const formattedCustomers = response.data.map((cust) => ({
// // // //           id: cust.id,
// // // //           name: cust.name || cust.customer_name,
// // // //           avatar: cust.avatar || profilePic,
// // // //           lastActive: cust.last_active || "Recently",
// // // //           status: cust.status || "Active",
// // // //         }));

// // // //         setCustomers(formattedCustomers);

// // // //         // Auto select first customer
// // // //         if (formattedCustomers.length > 0 && !selectedCustomerId) {
// // // //           setSelectedCustomerId(formattedCustomers[0].id);
// // // //         }
// // // //       }
// // // //     } catch (err) {
// // // //       console.error("Failed to fetch customers:", err);
// // // //     }
// // // //   };

// // // //   // Fetch selected customer details
// // // //   const fetchCustomerDetails = async (id) => {
// // // //     if (!id) return;
// // // //     setDetailsLoading(true);
// // // //     try {
// // // //       const response = await getCustomerById(id);
// // // //       if (response.success) {
// // // //         setCustomerDetails(response.data);
// // // //       }
// // // //     } catch (err) {
// // // //       console.error("Failed to fetch customer details:", err);
// // // //     } finally {
// // // //       setDetailsLoading(false);
// // // //     }
// // // //   };

// // // //   // Initial load
// // // //   useEffect(() => {
// // // //     fetchCustomers();
// // // //   }, []);

// // // //   // Load details when selection changes
// // // //   useEffect(() => {
// // // //     if (selectedCustomerId) {
// // // //       fetchCustomerDetails(selectedCustomerId);
// // // //     }
// // // //   }, [selectedCustomerId]);

// // // //   // Filter + Search
// // // //   const filteredCustomers = useMemo(() => {
// // // //     return customers
// // // //       .filter((customer) =>
// // // //         activeFilter === "All" ? true : customer.status === activeFilter
// // // //       )
// // // //       .filter((customer) =>
// // // //         customer.name.toLowerCase().includes(searchTerm.toLowerCase())
// // // //       );
// // // //   }, [customers, activeFilter, searchTerm]);

// // // //   // Current customer data (fallback if details not loaded yet)
// // // //   const currentCustomer = customerDetails?.profile || {
// // // //     name: "Loading...",
// // // //     location: "N/A",
// // // //     email: "N/A",
// // // //     phone: "N/A",
// // // //     customer_since: "N/A",
// // // //     avatar: profilePic,
// // // //   };

// // // //   const stats = customerDetails?.stats || {
// // // //     total_orders: 0,
// // // //     pending_orders: 0,
// // // //     completed_orders: 0,
// // // //     completion_rate: "0%",
// // // //   };

// // // //   const recentOrders = customerDetails?.recent_orders || [];
// // // //   const recentReviews = customerDetails?.recent_reviews || [];

// // // //   return (
// // // //     <div className="flex min-h-screen bg-[#F6F1E8]">
// // // //       {/* SIDEBAR - Live Customers */}
// // // //       <div className="w-[280px] mt-14 bg-[#F9F9F9] p-5 border-r flex flex-col">
// // // //         <h1 className="text-lg font-semibold text-gray-800 mb-4">Customers</h1>

// // // //         {/* SEARCH */}
// // // //         <div className="relative mb-5">
// // // //           <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
// // // //           <input
// // // //             placeholder="Search customer..."
// // // //             value={searchTerm}
// // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // //             className="pl-10 rounded-tl-[5px] pr-4 py-2 w-full bg-white text-gray-600 border shadow-sm rounded-[40px]"
// // // //           />
// // // //         </div>

// // // //         {/* FILTER */}
// // // //         <div className="flex mb-4 rounded-[12px] bg-gray-100 p-1">
// // // //           {["All", "Active", "Recent"].map((filter) => (
// // // //             <button
// // // //               key={filter}
// // // //               onClick={() => setActiveFilter(filter)}
// // // //               className={`px-5 py-1 text-xs rounded-[6px] ${
// // // //                 activeFilter === filter
// // // //                   ? "bg-[#A61E30] text-white"
// // // //                   : "bg-white border text-gray-600"
// // // //               }`}
// // // //             >
// // // //               {filter}
// // // //             </button>
// // // //           ))}
// // // //         </div>

// // // //         {/* CUSTOMER LIST - Live */}
// // // //         <div className="space-y-3 overflow-y-auto max-h-[500px]">
// // // //           {filteredCustomers.length === 0 ? (
// // // //             <p className="text-gray-500 text-sm p-3">No customers found</p>
// // // //           ) : (
// // // //             filteredCustomers.map((customer) => (
// // // //               <CustomerItem
// // // //                 key={customer.id}
// // // //                 customer={customer}
// // // //                 isActive={customer.id === selectedCustomerId}
// // // //                 onClick={() => setSelectedCustomerId(customer.id)}
// // // //               />
// // // //             ))
// // // //           )}
// // // //         </div>
// // // //       </div>

// // // //       {/* MAIN CONTENT */}
// // // //       <div className="flex-1 p-6 mt-10 space-y-6">
// // // //         {/* PROFILE CARD - Live */}
// // // //         <div className="bg-white rounded-[12px] p-5 flex justify-between shadow-sm">
// // // //           <div className="flex items-center gap-4">
// // // //             <img 
// // // //               src={currentCustomer.avatar || profilePic} 
// // // //               className="w-14 h-14 rounded-full" 
// // // //               alt={currentCustomer.name} 
// // // //             />
// // // //             <div>
// // // //               <h2 className="font-semibold text-gray-800">{currentCustomer.name}</h2>
// // // //               <p className="text-sm text-gray-500">
// // // //                 {currentCustomer.location} · Customer since {currentCustomer.customer_since}
// // // //               </p>
// // // //               <p className="text-sm text-gray-500">
// // // //                 {currentCustomer.email} · {currentCustomer.phone}
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //           <button
// // // //             onClick={() => navigate("/messages")}
// // // //             className="bg-[#A61E30] text-white rounded-[12px] h-[38px] px-4 text-sm hover:bg-[#8f1624] transition-colors"
// // // //           >
// // // //             Send Message
// // // //           </button>
// // // //         </div>

// // // //         {/* STATS - Live */}
// // // //         <div className="grid grid-cols-3 gap-4">
// // // //           <div className="bg-white p-4 rounded-xl shadow-sm">
// // // //             <p className="text-xs text-gray-500">Total Orders</p>
// // // //             <h3 className="text-xl font-bold text-gray-800">{stats.total_orders}</h3>
// // // //             <p className="text-xs text-green-600">2 Orders today</p>
// // // //           </div>
// // // //           <div className="bg-white p-4 rounded-xl shadow-sm">
// // // //             <p className="text-xs text-gray-500">Pending Orders</p>
// // // //             <h3 className="text-xl font-bold text-gray-800">{stats.pending_orders}</h3>
// // // //             <p className="text-xs text-red-500">No pending order</p>
// // // //           </div>
// // // //           <div className="bg-white p-4 rounded-xl shadow-sm">
// // // //             <p className="text-xs text-gray-500">Complete</p>
// // // //             <h3 className="text-xl font-bold text-gray-800">{stats.completed_orders}</h3>
// // // //             <p className="text-xs text-green-600">{stats.completion_rate}</p>
// // // //           </div>
// // // //         </div>

// // // //         {/* RECENT ORDERS - Live */}
// // // //         <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col">
// // // //           <h3 className="font-[500] font-dm text-[24px] text-[#A61E30] mb-4">
// // // //             Recent Orders
// // // //           </h3>

// // // //           <div className="overflow-y-auto max-h-[300px] w-full p-1 rounded-[20px] bg-white">
// // // //             <table className="w-full text-sm table-fixed border-collapse">
// // // //               <thead className="sticky top-0 bg-[#E0DBDB4D]">
// // // //                 <tr className="text-gray-300 text-left">
// // // //                   <th className="px-3 py-2">ORDER ID</th>
// // // //                   <th className="px-3 py-2">ITEM</th>
// // // //                   <th className="px-3 py-2">TOTAL</th>
// // // //                   <th className="px-3 py-2">DATE</th>
// // // //                 </tr>
// // // //               </thead>
// // // //               <tbody>
// // // //                 {recentOrders.length === 0 ? (
// // // //                   <tr>
// // // //                     <td colSpan="4" className="px-3 py-8 text-center text-gray-500">
// // // //                       No recent orders
// // // //                     </td>
// // // //                   </tr>
// // // //                 ) : (
// // // //                   recentOrders.map((order, index) => (
// // // //                     <tr key={index} className="hover:bg-gray-50 transition-colors">
// // // //                       <td className="px-3 py-2 text-[#334155]">{order.order_id || `#ORD-${order.id}`}</td>
// // // //                       <td className="px-3 py-2 text-[#334155]">{order.item || order.food_name || "N/A"}</td>
// // // //                       <td className="px-3 py-2 text-[#334155]">₦{Number(order.total || order.amount || 0).toLocaleString()}</td>
// // // //                       <td className="px-3 py-2 text-[#334155]">
// // // //                         {order.date || (order.created_at ? new Date(order.created_at).toLocaleDateString() : "N/A")}
// // // //                       </td>
// // // //                     </tr>
// // // //                   ))
// // // //                 )}
// // // //               </tbody>
// // // //             </table>
// // // //           </div>
// // // //         </div>

// // // //         {/* REVIEWS - Live */}
// // // //         <div className="bg-white rounded-xl p-5 shadow-sm">
// // // //           <div className="flex justify-between mb-4">
// // // //             <h3 className="font-[500] font-dm text-[24px] text-[#A61E30] mb-4">Recent Reviews</h3>
// // // //             <button className="text-xs bg-[#F6E9EA] px-3 text-[#A61E30] py-1 w-[95.16px] rounded-[12.77px] h-[28.77px]">
// // // //               View all →
// // // //             </button>
// // // //           </div>

// // // //           <div className="space-y-4 max-h-[260px] overflow-y-auto">
// // // //             {recentReviews.length === 0 ? (
// // // //               <p className="text-gray-500 text-sm py-8 text-center">No reviews yet</p>
// // // //             ) : (
// // // //               recentReviews.map((review, index) => (
// // // //                 <ReviewItem
// // // //                   key={index}
// // // //                   reviewer={review.reviewer || review.user_name}
// // // //                   rating={review.rating || 5}
// // // //                   message={review.message || review.comment}
// // // //                   avatar={review.avatar || profilePic}
// // // //                 />
// // // //               ))
// // // //             )}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }






// // // // import React, { useState, useEffect, useMemo } from "react";
// // // // import { FiSearch } from "react-icons/fi";
// // // // import { FaStar } from "react-icons/fa";
// // // // import profilePic from "../assets/profile.png";
// // // // import { useNavigate } from "react-router-dom";

// // // // import { getCustomers, getCustomerById } from "../api/apiServices";

// // // // /* ===========================
// // // // Reusable Components
// // // // =========================== */

// // // // const ReviewItem = ({ reviewer, rating, message, avatar }) => (
// // // //   <div className="flex gap-3">
// // // //     <img 
// // // //       src={avatar || profilePic} 
// // // //       alt={reviewer} 
// // // //       className="w-10 h-10 rounded-full object-cover flex-shrink-0" 
// // // //     />
// // // //     <div className="flex-1 min-w-0">
// // // //       <p className="text-sm font-semibold text-gray-800">{reviewer}</p>
// // // //       <div className="flex text-red-500 text-xs">
// // // //         {[...Array(Math.min(rating || 5, 5))].map((_, i) => (
// // // //           <FaStar key={i} />
// // // //         ))}
// // // //       </div>
// // // //       <p className="text-xs text-gray-500 line-clamp-2">{message}</p>
// // // //     </div>
// // // //   </div>
// // // // );

// // // // const CustomerItem = ({ customer, isActive, onClick }) => (
// // // //   <div
// // // //     onClick={onClick}
// // // //     className={`flex items-center gap-3 p-2 rounded-[12px] cursor-pointer relative bg-[#FFFFFF] shadow-sm hover:bg-gray-50 transition`}
// // // //   >
// // // //     <div
// // // //       className={`absolute left-0 top-0 h-full w-1 rounded-l-[12px] ${
// // // //         isActive ? "bg-[#A61E30]" : "bg-transparent"
// // // //       }`}
// // // //     ></div>

// // // //     <img
// // // //       src={customer.avatar || profilePic}
// // // //       className="w-10 h-10 rounded-full object-cover flex-shrink-0"
// // // //       alt={customer.name}
// // // //     />
// // // //     <div className="min-w-0 flex-1">
// // // //       <p className="text-sm font-semibold text-gray-800 truncate">{customer.name}</p>
// // // //       <p className="text-xs text-gray-500">Last active {customer.lastActive}</p>
// // // //     </div>
// // // //   </div>
// // // // );

// // // // /* ===========================
// // // // Main Component
// // // // =========================== */

// // // // export default function CustomerPage() {
// // // //   const navigate = useNavigate();

// // // //   // State
// // // //   const [customers, setCustomers] = useState([]);
// // // //   const [selectedCustomerId, setSelectedCustomerId] = useState(null);
// // // //   const [customerDetails, setCustomerDetails] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [detailsLoading, setDetailsLoading] = useState(false);

// // // //   const [activeFilter, setActiveFilter] = useState("All");
// // // //   const [searchTerm, setSearchTerm] = useState("");

// // // //   // Fetch all customers for sidebar
// // // //   const fetchCustomers = async () => {
// // // //     setLoading(true);
// // // //     try {
// // // //       const response = await getCustomers();
// // // //       if (response.success && Array.isArray(response.data)) {
// // // //         const formattedCustomers = response.data.map((cust) => ({
// // // //           id: cust.id,
// // // //           name: cust.name || cust.customer_name || "Unknown",
// // // //           avatar: cust.avatar,
// // // //           lastActive: cust.last_active || cust.last_login || "Recently",
// // // //           status: cust.status || "Active",
// // // //         }));

// // // //         setCustomers(formattedCustomers);

// // // //         // Auto-select first customer
// // // //         if (formattedCustomers.length > 0 && !selectedCustomerId) {
// // // //           setSelectedCustomerId(formattedCustomers[0].id);
// // // //         }
// // // //       }
// // // //     } catch (err) {
// // // //       console.error("Failed to fetch customers:", err);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   // Fetch selected customer full details
// // // //   const fetchCustomerDetails = async (id) => {
// // // //     if (!id) return;
// // // //     setDetailsLoading(true);
// // // //     try {
// // // //       const response = await getCustomerById(id);
// // // //       if (response.success) {
// // // //         setCustomerDetails(response.data);
// // // //       }
// // // //     } catch (err) {
// // // //       console.error("Failed to fetch customer details:", err);
// // // //     } finally {
// // // //       setDetailsLoading(false);
// // // //     }
// // // //   };

// // // //   // Initial load
// // // //   useEffect(() => {
// // // //     fetchCustomers();
// // // //   }, []);

// // // //   // Load details when customer is selected
// // // //   useEffect(() => {
// // // //     if (selectedCustomerId) {
// // // //       fetchCustomerDetails(selectedCustomerId);
// // // //     }
// // // //   }, [selectedCustomerId]);

// // // //   // Filter + Search Logic
// // // //   const filteredCustomers = useMemo(() => {
// // // //     return customers
// // // //       .filter((customer) =>
// // // //         activeFilter === "All" ? true : customer.status === activeFilter
// // // //       )
// // // //       .filter((customer) =>
// // // //         customer.name.toLowerCase().includes(searchTerm.toLowerCase())
// // // //       );
// // // //   }, [customers, activeFilter, searchTerm]);

// // // //   // Current displayed customer data
// // // //   const currentCustomer = customerDetails?.data?.profile || {
// // // //     name: "Select a customer",
// // // //     location: "N/A",
// // // //     email: "N/A",
// // // //     phone: "N/A",
// // // //     customer_since: "N/A",
// // // //     avatar: null,
// // // //   };

// // // //   const stats = customerDetails?.data?.stats || {
// // // //     total_orders: 0,
// // // //     pending_orders: 0,
// // // //     completed_orders: 0,
// // // //     completion_rate: "0%",
// // // //   };

// // // //   const recentOrders = customerDetails?.data?.recent_orders || [];
// // // //   const recentReviews = customerDetails?.data?.recent_reviews || [];

// // // //   return (
// // // //     <div className="flex min-h-screen bg-[#F6F1E8]">
// // // //       {/* SIDEBAR - Live Customers List */}
// // // //       <div className="w-[280px] mt-14 bg-[#F9F9F9] p-5 border-r flex flex-col">
// // // //         <h1 className="text-lg font-semibold text-gray-800 mb-4">Customers</h1>

// // // //         {/* SEARCH */}
// // // //         <div className="relative mb-5">
// // // //           <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
// // // //           <input
// // // //             placeholder="Search customer..."
// // // //             value={searchTerm}
// // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // //             className="pl-10 rounded-tl-[5px] pr-4 py-2 w-full bg-white text-gray-600 border shadow-sm rounded-[40px]"
// // // //           />
// // // //         </div>

// // // //         {/* FILTER */}
// // // //         <div className="flex mb-4 rounded-[12px] bg-gray-100 p-1">
// // // //           {["All", "Active", "Recent"].map((filter) => (
// // // //             <button
// // // //               key={filter}
// // // //               onClick={() => setActiveFilter(filter)}
// // // //               className={`px-5 py-1 text-xs rounded-[6px] flex-1 ${
// // // //                 activeFilter === filter
// // // //                   ? "bg-[#A61E30] text-white"
// // // //                   : "bg-white border text-gray-600"
// // // //               }`}
// // // //             >
// // // //               {filter}
// // // //             </button>
// // // //           ))}
// // // //         </div>

// // // //         {/* CUSTOMER LIST - Scrollable */}
// // // //         <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-220px)] pr-2">
// // // //           {loading ? (
// // // //             <p className="text-gray-500 text-sm p-3">Loading customers...</p>
// // // //           ) : filteredCustomers.length === 0 ? (
// // // //             <p className="text-gray-500 text-sm p-3">No customers found</p>
// // // //           ) : (
// // // //             filteredCustomers.map((customer) => (
// // // //               <CustomerItem
// // // //                 key={customer.id}
// // // //                 customer={customer}
// // // //                 isActive={customer.id === selectedCustomerId}
// // // //                 onClick={() => setSelectedCustomerId(customer.id)}
// // // //               />
// // // //             ))
// // // //           )}
// // // //         </div>
// // // //       </div>

// // // //       {/* MAIN CONTENT */}
// // // //       <div className="flex-1 p-6 mt-10 space-y-6">
// // // //         {/* PROFILE CARD */}
// // // //         <div className="bg-white rounded-[12px] p-5 flex justify-between shadow-sm">
// // // //           <div className="flex items-center gap-4">
// // // //             <img 
// // // //               src={currentCustomer.avatar || profilePic} 
// // // //               className="w-14 h-14 rounded-full object-cover" 
// // // //               alt={currentCustomer.name} 
// // // //             />
// // // //             <div>
// // // //               <h2 className="font-semibold text-gray-800">{currentCustomer.name}</h2>
// // // //               <p className="text-sm text-gray-500">
// // // //                 {currentCustomer.location} · Customer since {currentCustomer.customer_since}
// // // //               </p>
// // // //               <p className="text-sm text-gray-500">
// // // //                 {currentCustomer.email} · {currentCustomer.phone}
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //           <button
// // // //             onClick={() => navigate("/messages")}
// // // //             className="bg-[#A61E30] text-white rounded-[12px] h-[38px] px-4 text-sm hover:bg-[#8f1624] transition-colors"
// // // //           >
// // // //             Send Message
// // // //           </button>
// // // //         </div>

// // // //         {/* STATS */}
// // // //         <div className="grid grid-cols-3 gap-4">
// // // //           <div className="bg-white p-4 rounded-xl shadow-sm">
// // // //             <p className="text-xs text-gray-500">Total Orders</p>
// // // //             <h3 className="text-xl font-bold text-gray-800">{stats.total_orders}</h3>
// // // //             <p className="text-xs text-green-600">2 Orders today</p>
// // // //           </div>
// // // //           <div className="bg-white p-4 rounded-xl shadow-sm">
// // // //             <p className="text-xs text-gray-500">Pending Orders</p>
// // // //             <h3 className="text-xl font-bold text-gray-800">{stats.pending_orders}</h3>
// // // //             <p className="text-xs text-red-500">No pending order</p>
// // // //           </div>
// // // //           <div className="bg-white p-4 rounded-xl shadow-sm">
// // // //             <p className="text-xs text-gray-500">Complete</p>
// // // //             <h3 className="text-xl font-bold text-gray-800">{stats.completed_orders}</h3>
// // // //             <p className="text-xs text-green-600">{stats.completion_rate}</p>
// // // //           </div>
// // // //         </div>

// // // //         {/* RECENT ORDERS - Scrollable */}
// // // //         <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col">
// // // //           <h3 className="font-[500] font-dm text-[24px] text-[#A61E30] mb-4">
// // // //             Recent Orders
// // // //           </h3>

// // // //           <div className="overflow-y-auto max-h-[300px] w-full p-1 rounded-[20px] bg-white ">
// // // //             <table className="w-full text-sm table-fixed border-collapse">
// // // //               <thead className="sticky top-0 bg-[#E0DBDB4D]">
// // // //                 <tr className="text-gray-300 text-left">
// // // //                   <th className="px-3 py-2">ORDER ID</th>
// // // //                   <th className="px-3 py-2">ITEM</th>
// // // //                   <th className="px-3 py-2">TOTAL</th>
// // // //                   <th className="px-3 py-2">DATE</th>
// // // //                 </tr>
// // // //               </thead>
// // // //               <tbody>
// // // //                 {recentOrders.length === 0 ? (
// // // //                   <tr>
// // // //                     <td colSpan="4" className="px-3 py-10 text-center text-gray-500">
// // // //                       No recent orders yet
// // // //                     </td>
// // // //                   </tr>
// // // //                 ) : (
// // // //                   recentOrders.map((order, index) => (
// // // //                     <tr key={index} className="hover:bg-gray-50 transition-colors">
// // // //                       <td className="px-3 py-2 text-[#334155]">
// // // //                         {order.order_id || `#ORD-${order.id}`}
// // // //                       </td>
// // // //                       <td className="px-3 py-2 text-[#334155]">
// // // //                         {order.item || order.food_name || "N/A"}
// // // //                       </td>
// // // //                       <td className="px-3 py-2 text-[#334155]">
// // // //                         ₦{Number(order.total || order.amount || 0).toLocaleString()}
// // // //                       </td>
// // // //                       <td className="px-3 py-2 text-[#334155]">
// // // //                         {order.date || (order.created_at ? new Date(order.created_at).toLocaleDateString() : "N/A")}
// // // //                       </td>
// // // //                     </tr>
// // // //                   ))
// // // //                 )}
// // // //               </tbody>
// // // //             </table>
// // // //           </div>
// // // //         </div>

// // // //         {/* RECENT REVIEWS - Scrollable */}
// // // //         <div className="bg-white rounded-xl p-5 shadow-sm">
// // // //           <div className="flex justify-between mb-4">
// // // //             <h3 className="font-[500] font-dm text-[24px] text-[#A61E30]">Recent Reviews</h3>
// // // //             <button className="text-xs bg-[#F6E9EA] px-3 text-[#A61E30] py-1 w-[95.16px] rounded-[12.77px] h-[28.77px]">
// // // //               View all →
// // // //             </button>
// // // //           </div>

// // // //           <div className="space-y-4 max-h-[260px] overflow-y-auto pr-2">
// // // //             {recentReviews.length === 0 ? (
// // // //               <p className="text-gray-500 text-sm py-8 text-center">No reviews yet</p>
// // // //             ) : (
// // // //               recentReviews.map((review, index) => (
// // // //                 <ReviewItem
// // // //                   key={index}
// // // //                   reviewer={review.reviewer || review.user_name || "Customer"}
// // // //                   rating={review.rating || 5}
// // // //                   message={review.message || review.comment || ""}
// // // //                   avatar={review.avatar}
// // // //                 />
// // // //               ))
// // // //             )}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }








// // // // import React, { useState, useEffect, useMemo } from "react";
// // // // import { FiSearch } from "react-icons/fi";
// // // // import { FaStar } from "react-icons/fa";
// // // // import profilePic from "../assets/profile.png";
// // // // import { useNavigate } from "react-router-dom";

// // // // import { getCustomers, getCustomerById } from "../api/apiServices";

// // // // /* ===========================
// // // // Reusable Components
// // // // =========================== */

// // // // // Helper to get Initials
// // // // const getInitials = (name = "Unknown") => {
// // // //   return name
// // // //     .split(" ")
// // // //     .map((n) => n[0])
// // // //     .join("")
// // // //     .toUpperCase()
// // // //     .slice(0, 2);
// // // // };

// // // // const ReviewItem = ({ reviewer, rating, message, avatar }) => (
// // // //   <div className="flex gap-3">
// // // //     {avatar ? (
// // // //       <img 
// // // //         src={avatar} 
// // // //         alt={reviewer} 
// // // //         className="w-10 h-10 rounded-full object-cover flex-shrink-0" 
// // // //       />
// // // //     ) : (
// // // //       <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-100 text-[#A61E30] text-xs font-bold flex-shrink-0">
// // // //         {getInitials(reviewer)}
// // // //       </div>
// // // //     )}
// // // //     <div className="flex-1 min-w-0">
// // // //       <p className="text-sm font-semibold text-gray-800">{reviewer}</p>
// // // //       <div className="flex text-red-500 text-xs">
// // // //         {[...Array(5)].map((_, i) => (
// // // //           <FaStar key={i} className={i < (rating || 5) ? "text-red-500" : "text-gray-200"} />
// // // //         ))}
// // // //       </div>
// // // //       <p className="text-xs text-gray-500 line-clamp-2">{message}</p>
// // // //     </div>
// // // //   </div>
// // // // );

// // // // const CustomerItem = ({ customer, isActive, onClick }) => (
// // // //   <div
// // // //     onClick={onClick}
// // // //     className={`flex items-center gap-3 p-2 rounded-[12px] cursor-pointer relative bg-[#FFFFFF] shadow-sm hover:bg-gray-50 transition`}
// // // //   >
// // // //     <div
// // // //       className={`absolute left-0 top-0 h-full w-1 rounded-l-[12px] ${
// // // //         isActive ? "bg-[#A61E30]" : "bg-transparent"
// // // //       }`}
// // // //     ></div>

// // // //     {customer.avatar ? (
// // // //       <img
// // // //         src={customer.avatar}
// // // //         className="w-10 h-10 rounded-full object-cover flex-shrink-0"
// // // //         alt={customer.name}
// // // //       />
// // // //     ) : (
// // // //       <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 text-xs font-bold flex-shrink-0">
// // // //         {getInitials(customer.name)}
// // // //       </div>
// // // //     )}
    
// // // //     <div className="min-w-0 flex-1">
// // // //       <p className="text-sm font-semibold text-gray-800 truncate">{customer.name}</p>
// // // //       <p className="text-xs text-gray-500">Last active {customer.lastActive}</p>
// // // //     </div>
// // // //   </div>
// // // // );

// // // // /* ===========================
// // // // Main Component
// // // // =========================== */

// // // // export default function CustomerPage() {
// // // //   const navigate = useNavigate();

// // // //   // State
// // // //   const [customers, setCustomers] = useState([]);
// // // //   const [selectedCustomerId, setSelectedCustomerId] = useState(null);
// // // //   const [customerDetails, setCustomerDetails] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [detailsLoading, setDetailsLoading] = useState(false);

// // // //   const [activeFilter, setActiveFilter] = useState("All");
// // // //   const [searchTerm, setSearchTerm] = useState("");

// // // //   // Fetch all customers for sidebar
// // // //   const fetchCustomers = async () => {
// // // //     setLoading(true);
// // // //     try {
// // // //       const response = await getCustomers();
// // // //       // Adjusting to Laravel data wrapper: response.data.customers or response.data
// // // //       const rawList = response.data?.customers || response.data || [];
      
// // // //       if (response.success && Array.isArray(rawList)) {
// // // //         const formattedCustomers = rawList.map((cust) => ({
// // // //           id: cust.id,
// // // //           name: cust.name || cust.customer_name || "Unknown",
// // // //           avatar: cust.avatar,
// // // //           lastActive: cust.last_active || "Recently",
// // // //           status: cust.status || "Active",
// // // //         }));

// // // //         setCustomers(formattedCustomers);

// // // //         if (formattedCustomers.length > 0 && !selectedCustomerId) {
// // // //           setSelectedCustomerId(formattedCustomers[0].id);
// // // //         }
// // // //       }
// // // //     } catch (err) {
// // // //       console.error("Failed to fetch customers:", err);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   // Fetch selected customer full details
// // // //   const fetchCustomerDetails = async (id) => {
// // // //     if (!id) return;
// // // //     setDetailsLoading(true);
// // // //     try {
// // // //       const response = await getCustomerById(id);
// // // //       if (response.success) {
// // // //         setCustomerDetails(response.data);
// // // //       }
// // // //     } catch (err) {
// // // //       console.error("Failed to fetch customer details:", err);
// // // //     } finally {
// // // //       setDetailsLoading(false);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchCustomers();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     if (selectedCustomerId) {
// // // //       fetchCustomerDetails(selectedCustomerId);
// // // //     }
// // // //   }, [selectedCustomerId]);

// // // //   const filteredCustomers = useMemo(() => {
// // // //     return customers
// // // //       .filter((customer) =>
// // // //         activeFilter === "All" ? true : customer.status === activeFilter
// // // //       )
// // // //       .filter((customer) =>
// // // //         customer.name.toLowerCase().includes(searchTerm.toLowerCase())
// // // //       );
// // // //   }, [customers, activeFilter, searchTerm]);

// // // //   // Handle nested Laravel response structures
// // // //   const currentCustomer = customerDetails?.customer || customerDetails?.profile || {
// // // //     name: "Select a customer",
// // // //     location: "N/A",
// // // //     email: "N/A",
// // // //     phone: "N/A",
// // // //     customer_since: "N/A",
// // // //     avatar: null,
// // // //   };

// // // //   const stats = customerDetails?.stats || {
// // // //     total_orders: 0,
// // // //     pending_orders: 0,
// // // //     completed_orders: 0,
// // // //     completion_rate: "0%",
// // // //   };

// // // //   const recentOrders = customerDetails?.recent_orders || [];
// // // //   const recentReviews = customerDetails?.recent_reviews || [];

// // // //   return (
// // // //     <div className="flex min-h-screen bg-[#F6F1E8]">
// // // //       {/* SIDEBAR */}
// // // //       <div className="w-[280px] mt-14 bg-[#F9F9F9] p-5 border-r flex flex-col">
// // // //         <h1 className="text-lg font-semibold text-gray-800 mb-4">Customers</h1>

// // // //         <div className="relative mb-5">
// // // //           <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
// // // //           <input
// // // //             placeholder="Search customer..."
// // // //             value={searchTerm}
// // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // //             className="pl-10 rounded-tl-[5px] pr-4 py-2 w-full bg-white text-gray-600 border shadow-sm rounded-[40px]"
// // // //           />
// // // //         </div>

// // // //         <div className="flex mb-4 rounded-[12px] bg-gray-100 p-1">
// // // //           {["All", "Active", "Recent"].map((filter) => (
// // // //             <button
// // // //               key={filter}
// // // //               onClick={() => setActiveFilter(filter)}
// // // //               className={`px-5 py-1 text-xs rounded-[6px] flex-1 transition-all ${
// // // //                 activeFilter === filter
// // // //                   ? "bg-[#A61E30] text-white"
// // // //                   : "bg-white border text-gray-600"
// // // //               }`}
// // // //             >
// // // //               {filter}
// // // //             </button>
// // // //           ))}
// // // //         </div>

// // // //         <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-220px)] pr-2">
// // // //           {loading ? (
// // // //             <p className="text-gray-500 text-sm p-3">Loading customers...</p>
// // // //           ) : filteredCustomers.length === 0 ? (
// // // //             <p className="text-gray-500 text-sm p-3">No customers found</p>
// // // //           ) : (
// // // //             filteredCustomers.map((customer) => (
// // // //               <CustomerItem
// // // //                 key={customer.id}
// // // //                 customer={customer}
// // // //                 isActive={customer.id === selectedCustomerId}
// // // //                 onClick={() => setSelectedCustomerId(customer.id)}
// // // //               />
// // // //             ))
// // // //           )}
// // // //         </div>
// // // //       </div>

// // // //       {/* MAIN CONTENT */}
// // // //       <div className="flex-1 p-6 mt-10 space-y-6">
// // // //         {detailsLoading ? (
// // // //           <div className="h-40 flex items-center justify-center bg-white rounded-xl">
// // // //              <p className="text-gray-400">Updating profile details...</p>
// // // //           </div>
// // // //         ) : (
// // // //           <>
// // // //             {/* PROFILE CARD */}
// // // //             <div className="bg-white rounded-[12px] p-5 flex justify-between shadow-sm">
// // // //               <div className="flex items-center gap-4">
// // // //                 {currentCustomer.avatar ? (
// // // //                   <img 
// // // //                     src={currentCustomer.avatar} 
// // // //                     className="w-14 h-14 rounded-full object-cover" 
// // // //                     alt={currentCustomer.name} 
// // // //                   />
// // // //                 ) : (
// // // //                   <div className="w-14 h-14 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 text-lg font-bold">
// // // //                     {getInitials(currentCustomer.name)}
// // // //                   </div>
// // // //                 )}
// // // //                 <div>
// // // //                   <h2 className="font-semibold text-gray-800">{currentCustomer.name}</h2>
// // // //                   <p className="text-sm text-gray-500">
// // // //                     {currentCustomer.location || "Location not set"} · Customer since {currentCustomer.customer_since || "N/A"}
// // // //                   </p>
// // // //                   <p className="text-sm text-gray-500">
// // // //                     {currentCustomer.email} · {currentCustomer.phone}
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //               <button
// // // //                 onClick={() => navigate("/messages")}
// // // //                 className="bg-[#A61E30] text-white rounded-[12px] h-[38px] px-4 text-sm hover:bg-[#8f1624] transition-colors"
// // // //               >
// // // //                 Send Message
// // // //               </button>
// // // //             </div>

// // // //             {/* STATS */}
// // // //             <div className="grid grid-cols-3 gap-4">
// // // //               <div className="bg-white p-4 rounded-xl shadow-sm">
// // // //                 <p className="text-xs text-gray-500">Total Orders</p>
// // // //                 <h3 className="text-xl font-bold text-gray-800">{stats.total_orders}</h3>
// // // //                 <p className="text-xs text-green-600">Active History</p>
// // // //               </div>
// // // //               <div className="bg-white p-4 rounded-xl shadow-sm">
// // // //                 <p className="text-xs text-gray-500">Pending Orders</p>
// // // //                 <h3 className="text-xl font-bold text-gray-800">{stats.pending_orders}</h3>
// // // //                 <p className="text-xs text-red-500">{stats.pending_orders > 0 ? `${stats.pending_orders} awaiting` : "No pending order"}</p>
// // // //               </div>
// // // //               <div className="bg-white p-4 rounded-xl shadow-sm">
// // // //                 <p className="text-xs text-gray-500">Complete</p>
// // // //                 <h3 className="text-xl font-bold text-gray-800">{stats.completed_orders}</h3>
// // // //                 <p className="text-xs text-green-600">{stats.completion_rate}</p>
// // // //               </div>
// // // //             </div>

// // // //             {/* RECENT ORDERS */}
// // // //             <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col">
// // // //               <h3 className="font-[500] font-dm text-[24px] text-[#A61E30] mb-4">
// // // //                 Recent Orders
// // // //               </h3>

// // // //               <div className="overflow-y-auto max-h-[300px] w-full p-1 rounded-[20px] bg-white ">
// // // //                 <table className="w-full text-sm table-fixed border-collapse">
// // // //                   <thead className="sticky top-0 bg-[#F9F9F9]">
// // // //                     <tr className="text-gray-400 text-left">
// // // //                       <th className="px-3 py-2 font-medium">ORDER ID</th>
// // // //                       <th className="px-3 py-2 font-medium">ITEM</th>
// // // //                       <th className="px-3 py-2 font-medium">TOTAL</th>
// // // //                       <th className="px-3 py-2 font-medium">DATE</th>
// // // //                     </tr>
// // // //                   </thead>
// // // //                   <tbody>
// // // //                     {recentOrders.length === 0 ? (
// // // //                       <tr>
// // // //                         <td colSpan="4" className="px-3 py-10 text-center text-gray-500">
// // // //                           No recent orders yet
// // // //                         </td>
// // // //                       </tr>
// // // //                     ) : (
// // // //                       recentOrders.map((order, index) => (
// // // //                         <tr key={index} className="border-t hover:bg-gray-50 transition-colors">
// // // //                           <td className="px-3 py-3 text-[#334155] font-medium">
// // // //                             {order.order_id || `#ORD-${order.id}`}
// // // //                           </td>
// // // //                           <td className="px-3 py-3 text-[#334155]">
// // // //                             {order.item || order.food_name || "Food Item"}
// // // //                           </td>
// // // //                           <td className="px-3 py-3 text-[#334155]">
// // // //                             ₦{Number(order.total || order.amount || 0).toLocaleString()}
// // // //                           </td>
// // // //                           <td className="px-3 py-3 text-[#334155]">
// // // //                             {order.date || (order.created_at ? new Date(order.created_at).toLocaleDateString() : "N/A")}
// // // //                           </td>
// // // //                         </tr>
// // // //                       ))
// // // //                     )}
// // // //                   </tbody>
// // // //                 </table>
// // // //               </div>
// // // //             </div>

// // // //             {/* RECENT REVIEWS */}
// // // //             <div className="bg-white rounded-xl p-5 shadow-sm">
// // // //               <div className="flex justify-between mb-4">
// // // //                 <h3 className="font-[500] font-dm text-[24px] text-[#A61E30]">Recent Reviews</h3>
// // // //                 <button className="text-xs bg-[#F6E9EA] px-3 text-[#A61E30] py-1 rounded-[12px]">
// // // //                   View all →
// // // //                 </button>
// // // //               </div>

// // // //               <div className="space-y-4 max-h-[260px] overflow-y-auto pr-2">
// // // //                 {recentReviews.length === 0 ? (
// // // //                   <p className="text-gray-500 text-sm py-8 text-center">No reviews yet</p>
// // // //                 ) : (
// // // //                   recentReviews.map((review, index) => (
// // // //                     <ReviewItem
// // // //                       key={index}
// // // //                       reviewer={review.reviewer || review.user_name || "Customer"}
// // // //                       rating={review.rating}
// // // //                       message={review.message || review.comment || ""}
// // // //                       avatar={review.avatar}
// // // //                     />
// // // //                   ))
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           </>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }








// // // import React, { useState, useEffect, useMemo } from "react";
// // // import { FiSearch } from "react-icons/fi";
// // // import { FaStar } from "react-icons/fa";
// // // import { useNavigate } from "react-router-dom";
// // // // Updated to import getAllOrders as a fallback for the sidebar
// // // import { getCustomerById, getAllOrders } from "../api/apiServices";

// // // /* ===========================
// // //    Reusable Components
// // //    =========================== */

// // // // Fallback Avatar with Initials
// // // const Avatar = ({ src, name, size = "w-10 h-10" }) => {
// // //   if (src) {
// // //     return <img src={src} alt={name} className={`${size} rounded-full object-cover flex-shrink-0`} />;
// // //   }
// // //   const initials = name 
// // //     ? name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2) 
// // //     : "??";
// // //   return (
// // //     <div className={`${size} rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold flex-shrink-0 uppercase`}>
// // //       {initials}
// // //     </div>
// // //   );
// // // };

// // // const ReviewItem = ({ reviewer, rating, message, avatar }) => (
// // //   <div className="flex gap-3">
// // //     <Avatar src={avatar} name={reviewer} />
// // //     <div className="flex-1 min-w-0">
// // //       <p className="text-sm font-semibold text-gray-800">{reviewer}</p>
// // //       <div className="flex text-red-500 text-xs">
// // //         {[...Array(Math.min(rating || 5, 5))].map((_, i) => (
// // //           <FaStar key={i} />
// // //         ))}
// // //       </div>
// // //       <p className="text-xs text-gray-500 line-clamp-2">{message}</p>
// // //     </div>
// // //   </div>
// // // );

// // // const CustomerItem = ({ customer, isActive, onClick }) => (
// // //   <div
// // //     onClick={onClick}
// // //     className={`flex items-center gap-3 p-2 rounded-[12px] cursor-pointer relative bg-[#FFFFFF] shadow-sm hover:bg-gray-50 transition`}
// // //   >
// // //     <div
// // //       className={`absolute left-0 top-0 h-full w-1 rounded-l-[12px] ${
// // //         isActive ? "bg-[#A61E30]" : "bg-transparent"
// // //       }`}
// // //     ></div>
// // //     <Avatar src={customer.avatar} name={customer.name} />
// // //     <div className="min-w-0 flex-1">
// // //       <p className="text-sm font-semibold text-gray-800 truncate">{customer.name}</p>
// // //       <p className="text-xs text-gray-500">Order ID: {customer.order_id}</p>
// // //     </div>
// // //   </div>
// // // );

// // // /* ===========================
// // //    Main Component
// // //    =========================== */

// // // export default function CustomerPage() {
// // //   const navigate = useNavigate();

// // //   const [customers, setCustomers] = useState([]);
// // //   const [selectedCustomerId, setSelectedCustomerId] = useState(null);
// // //   const [customerDetails, setCustomerDetails] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [detailsLoading, setDetailsLoading] = useState(false);

// // //   const [activeFilter, setActiveFilter] = useState("All");
// // //   const [searchTerm, setSearchTerm] = useState("");

// // //   // Step 1: Use Orders API to populate sidebar since /admin/customers 404s
// // //   const fetchSidebarFromOrders = async () => {
// // //     setLoading(true);
// // //     try {
// // //       const response = await getAllOrders();
// // //       if (response.success && response.data?.orders) {
// // //         const orderList = response.data.orders;
        
// // //         // Map unique customers from orders
// // //         const formatted = orderList.map((order) => ({
// // //           id: order.id, // We use the order's customer record ID to fetch details later
// // //           name: order.customer?.name || "Unknown Customer",
// // //           order_id: order.order_id,
// // //           avatar: null, // Orders list usually doesn't have avatar URLs
// // //           status: "Active",
// // //         }));

// // //         setCustomers(formatted);

// // //         if (formatted.length > 0 && !selectedCustomerId) {
// // //           setSelectedCustomerId(formatted[0].id);
// // //         }
// // //       }
// // //     } catch (err) {
// // //       console.error("Failed to populate sidebar:", err);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // Step 2: Fetch full details for the clicked customer
// // //   const fetchCustomerDetails = async (id) => {
// // //     if (!id) return;
// // //     setDetailsLoading(true);
// // //     try {
// // //       const response = await getCustomerById(id);
// // //       if (response.success) {
// // //         setCustomerDetails(response.data);
// // //       }
// // //     } catch (err) {
// // //       console.error("Failed to fetch profile for ID:", id, err);
// // //     } finally {
// // //       setDetailsLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchSidebarFromOrders();
// // //   }, []);

// // //   useEffect(() => {
// // //     if (selectedCustomerId) {
// // //       fetchCustomerDetails(selectedCustomerId);
// // //     }
// // //   }, [selectedCustomerId]);

// // //   const filteredCustomers = useMemo(() => {
// // //     return customers
// // //       .filter((c) => (activeFilter === "All" ? true : c.status === activeFilter))
// // //       .filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
// // //   }, [customers, activeFilter, searchTerm]);

// // //   // Mapping based on your provided Response JSON
// // //   const profile = customerDetails?.profile || {
// // //     name: "Loading...",
// // //     location: "N/A",
// // //     email: "N/A",
// // //     phone: "N/A",
// // //     customer_since: "N/A",
// // //     avatar: null,
// // //   };

// // //   const stats = customerDetails?.stats || {
// // //     total_orders: 0,
// // //     pending_orders: 0,
// // //     completed_orders: 0,
// // //     completion_rate: "0%",
// // //   };

// // //   const recentOrders = customerDetails?.recent_orders || [];
// // //   const recentReviews = customerDetails?.recent_reviews || [];

// // //   return (
// // //     <div className="flex min-h-screen bg-[#F6F1E8]">
// // //       {/* SIDEBAR */}
// // //       <div className="w-[280px] mt-14 bg-[#F9F9F9] p-5 border-r flex flex-col">
// // //         <h1 className="text-lg font-semibold text-gray-800 mb-4">Customers</h1>

// // //         <div className="relative mb-5">
// // //           <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
// // //           <input
// // //             placeholder="Search customer..."
// // //             value={searchTerm}
// // //             onChange={(e) => setSearchTerm(e.target.value)}
// // //             className="pl-10 rounded-tl-[5px] pr-4 py-2 w-full bg-white text-gray-600 border shadow-sm rounded-[40px]"
// // //           />
// // //         </div>

// // //         <div className="flex mb-4 rounded-[12px] bg-gray-100 p-1">
// // //           {["All", "Active"].map((filter) => (
// // //             <button
// // //               key={filter}
// // //               onClick={() => setActiveFilter(filter)}
// // //               className={`px-5 py-1 text-xs rounded-[6px] flex-1 ${
// // //                 activeFilter === filter
// // //                   ? "bg-[#A61E30] text-white"
// // //                   : "bg-white border text-gray-600"
// // //               }`}
// // //             >
// // //               {filter}
// // //             </button>
// // //           ))}
// // //         </div>

// // //         <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-220px)] pr-2">
// // //           {loading ? (
// // //             <p className="text-gray-500 text-sm p-3">Finding customers...</p>
// // //           ) : filteredCustomers.length === 0 ? (
// // //             <p className="text-gray-500 text-sm p-3">No customers found</p>
// // //           ) : (
// // //             filteredCustomers.map((customer) => (
// // //               <CustomerItem
// // //                 key={customer.id}
// // //                 customer={customer}
// // //                 isActive={customer.id === selectedCustomerId}
// // //                 onClick={() => setSelectedCustomerId(customer.id)}
// // //               />
// // //             ))
// // //           )}
// // //         </div>
// // //       </div>

// // //       {/* MAIN CONTENT */}
// // //       <div className="flex-1 p-6 mt-10 space-y-6">
// // //         {/* PROFILE CARD */}
// // //         <div className="bg-white rounded-[12px] p-5 flex justify-between shadow-sm">
// // //           <div className="flex items-center gap-4">
// // //             <Avatar src={profile.avatar} name={profile.name} size="w-14 h-14" />
// // //             <div>
// // //               <h2 className="font-semibold text-gray-800">{profile.name}</h2>
// // //               <p className="text-sm text-gray-500">
// // //                 {profile.location} · Joined {profile.customer_since}
// // //               </p>
// // //               <p className="text-sm text-gray-500">
// // //                 {profile.email} · {profile.phone}
// // //               </p>
// // //             </div>
// // //           </div>
// // //           <button
// // //             onClick={() => navigate("/messages")}
// // //             className="bg-[#A61E30] text-white rounded-[12px] h-[38px] px-4 text-sm hover:bg-[#8f1624] transition-colors"
// // //           >
// // //             Send Message
// // //           </button>
// // //         </div>

// // //         {/* STATS */}
// // //         <div className="grid grid-cols-3 gap-4">
// // //           <div className="bg-white p-4 rounded-xl shadow-sm">
// // //             <p className="text-xs text-gray-500">Total Orders</p>
// // //             <h3 className="text-xl font-bold text-gray-800">{stats.total_orders}</h3>
// // //           </div>
// // //           <div className="bg-white p-4 rounded-xl shadow-sm">
// // //             <p className="text-xs text-gray-500">Pending Orders</p>
// // //             <h3 className="text-xl font-bold text-gray-800">{stats.pending_orders}</h3>
// // //           </div>
// // //           <div className="bg-white p-4 rounded-xl shadow-sm">
// // //             <p className="text-xs text-gray-500">Completion</p>
// // //             <h3 className="text-xl font-bold text-gray-800">{stats.completion_rate}</h3>
// // //           </div>
// // //         </div>

// // //         {/* RECENT ORDERS */}
// // //         <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col">
// // //           <h3 className="font-[500] font-dm text-[24px] text-[#A61E30] mb-4">
// // //             Recent Orders
// // //           </h3>
// // //           <div className="overflow-y-auto max-h-[300px]">
// // //             <table className="w-full text-sm border-collapse">
// // //               <thead className="bg-gray-50 sticky top-0">
// // //                 <tr className="text-gray-400 text-left">
// // //                   <th className="px-3 py-2">ORDER ID</th>
// // //                   <th className="px-3 py-2">ITEM</th>
// // //                   <th className="px-3 py-2">TOTAL</th>
// // //                   <th className="px-3 py-2">DATE</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {recentOrders.length === 0 ? (
// // //                   <tr>
// // //                     <td colSpan="4" className="px-3 py-10 text-center text-gray-400">
// // //                       No orders found for this customer.
// // //                     </td>
// // //                   </tr>
// // //                 ) : (
// // //                   recentOrders.map((order, index) => (
// // //                     <tr key={index} className="border-t hover:bg-gray-50 transition-colors">
// // //                       <td className="px-3 py-2 text-[#334155]">#{order.order_id || order.id}</td>
// // //                       <td className="px-3 py-2 text-[#334155]">{order.item || "Food Package"}</td>
// // //                       <td className="px-3 py-2 text-[#334155]">₦{Number(order.total || 0).toLocaleString()}</td>
// // //                       <td className="px-3 py-2 text-[#334155]">{order.date || "N/A"}</td>
// // //                     </tr>
// // //                   ))
// // //                 )}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         </div>

// // //         {/* RECENT REVIEWS */}
// // //         <div className="bg-white rounded-xl p-5 shadow-sm">
// // //           <div className="flex justify-between mb-4">
// // //             <h3 className="font-[500] font-dm text-[24px] text-[#A61E30]">Recent Reviews</h3>
// // //             <button className="text-xs bg-[#F6E9EA] px-3 text-[#A61E30] py-1 rounded-[12px]">
// // //               View all →
// // //             </button>
// // //           </div>
// // //           <div className="space-y-4 max-h-[260px] overflow-y-auto pr-2">
// // //             {recentReviews.length === 0 ? (
// // //               <p className="text-gray-400 text-center py-6">No reviews left by this customer.</p>
// // //             ) : (
// // //               recentReviews.map((review, index) => (
// // //                 <ReviewItem
// // //                   key={index}
// // //                   reviewer={review.reviewer}
// // //                   rating={review.rating}
// // //                   message={review.message}
// // //                   avatar={review.avatar}
// // //                 />
// // //               ))
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }





// // // import React, { useState, useEffect, useMemo } from "react";
// // // import { FiSearch, FiX } from "react-icons/fi"; // Added FiX for close button
// // // import { FaStar } from "react-icons/fa";
// // // import { useNavigate } from "react-router-dom";
// // // import { getCustomerById, getAllOrders } from "../api/apiServices";

// // // /* ===========================
// // //    Reusable Components
// // //    =========================== */

// // // const Avatar = ({ src, name, size = "w-10 h-10" }) => {
// // //   if (src) {
// // //     return <img src={src} alt={name} className={`${size} rounded-full object-cover flex-shrink-0`} />;
// // //   }
// // //   const initials = name ? name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2) : "??";
// // //   return (
// // //     <div className={`${size} rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold flex-shrink-0 uppercase`}>
// // //       {initials}
// // //     </div>
// // //   );
// // // };

// // // const ReviewItem = ({ reviewer, rating, message, avatar }) => (
// // //   <div className="flex gap-3 border-b border-gray-50 pb-3 last:border-0">
// // //     <Avatar src={avatar} name={reviewer} />
// // //     <div className="flex-1 min-w-0">
// // //       <p className="text-sm font-semibold text-gray-800">{reviewer}</p>
// // //       <div className="flex text-red-500 text-xs">
// // //         {[...Array(Math.min(rating || 5, 5))].map((_, i) => (
// // //           <FaStar key={i} />
// // //         ))}
// // //       </div>
// // //       <p className="text-xs text-gray-500 mt-1">{message}</p>
// // //     </div>
// // //   </div>
// // // );

// // // /* ===========================
// // //    Review Modal Component
// // //    =========================== */
// // // const ReviewsModal = ({ isOpen, onClose, reviews, customerName }) => {
// // //   if (!isOpen) return null;

// // //   return (
// // //     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
// // //       <div className="bg-white rounded-2xl w-full max-w-lg max-h-[80vh] flex flex-col shadow-2xl">
// // //         <div className="p-5 border-b flex justify-between items-center">
// // //           <div>
// // //             <h3 className="text-xl font-bold text-[#A61E30]">All Reviews</h3>
// // //             <p className="text-sm text-gray-500">{customerName}</p>
// // //           </div>
// // //           <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
// // //             <FiX className="text-2xl text-gray-400" />
// // //           </button>
// // //         </div>
// // //         <div className="p-5 overflow-y-auto space-y-4">
// // //           {reviews.length > 0 ? (
// // //             reviews.map((rev, i) => (
// // //               <ReviewItem key={i} reviewer={rev.reviewer} rating={rev.rating} message={rev.message} avatar={rev.avatar} />
// // //             ))
// // //           ) : (
// // //             <p className="text-center text-gray-500 py-10">No reviews found.</p>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // /* ===========================
// // //    Main Component
// // //    =========================== */
// // // export default function CustomerPage() {
// // //   const navigate = useNavigate();

// // //   const [customers, setCustomers] = useState([]);
// // //   const [selectedCustomerId, setSelectedCustomerId] = useState(null);
// // //   const [customerDetails, setCustomerDetails] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [isModalOpen, setIsModalOpen] = useState(false); // Modal State

// // //   const [activeFilter, setActiveFilter] = useState("All");
// // //   const [searchTerm, setSearchTerm] = useState("");

// // //   const fetchSidebarFromOrders = async () => {
// // //     setLoading(true);
// // //     try {
// // //       const response = await getAllOrders();
// // //       if (response.success && response.data?.orders) {
// // //         const formatted = response.data.orders.map((order) => ({
// // //           id: order.id,
// // //           name: order.customer?.name || "Unknown Customer",
// // //           order_id: order.order_id,
// // //           avatar: null,
// // //           status: "Active",
// // //         }));
// // //         setCustomers(formatted);
// // //         if (formatted.length > 0 && !selectedCustomerId) setSelectedCustomerId(formatted[0].id);
// // //       }
// // //     } catch (err) { console.error(err); } finally { setLoading(false); }
// // //   };

// // //   const fetchCustomerDetails = async (id) => {
// // //     if (!id) return;
// // //     try {
// // //       const response = await getCustomerById(id);
// // //       if (response.success) setCustomerDetails(response.data);
// // //     } catch (err) { console.error(err); }
// // //   };

// // //   useEffect(() => { fetchSidebarFromOrders(); }, []);
// // //   useEffect(() => { if (selectedCustomerId) fetchCustomerDetails(selectedCustomerId); }, [selectedCustomerId]);

// // //   const filteredCustomers = useMemo(() => {
// // //     return customers
// // //       .filter((c) => (activeFilter === "All" ? true : c.status === activeFilter))
// // //       .filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
// // //   }, [customers, activeFilter, searchTerm]);

// // //   const profile = customerDetails?.profile || { name: "Select a customer" };
// // //   const stats = customerDetails?.stats || { total_orders: 0, pending_orders: 0, completion_rate: "0%" };
// // //   const recentOrders = customerDetails?.recent_orders || [];
// // //   const recentReviews = customerDetails?.recent_reviews || [];

// // //   return (
// // //     <div className="flex min-h-screen bg-[#F6F1E8]">
// // //       {/* REVIEWS MODAL */}
// // //       <ReviewsModal 
// // //         isOpen={isModalOpen} 
// // //         onClose={() => setIsModalOpen(false)} 
// // //         reviews={recentReviews} 
// // //         customerName={profile.name}
// // //       />

// // //       {/* SIDEBAR */}
// // //       <div className="w-[280px] mt-14 bg-[#F9F9F9] p-5 border-r flex flex-col">
// // //         <h1 className="text-lg font-semibold text-gray-800 mb-4">Customers</h1>
// // //         <div className="relative mb-5">
// // //           <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
// // //           <input
// // //             placeholder="Search customer..."
// // //             value={searchTerm}
// // //             onChange={(e) => setSearchTerm(e.target.value)}
// // //             className="pl-10 rounded-tl-[5px] pr-4 py-2 w-full bg-white text-gray-600 border shadow-sm rounded-[40px]"
// // //           />
// // //         </div>
// // //         <div className="flex mb-4 rounded-[12px] bg-gray-100 p-1">
// // //           {["All", "Active"].map((filter) => (
// // //             <button
// // //               key={filter}
// // //               onClick={() => setActiveFilter(filter)}
// // //               className={`px-5 py-1 text-xs rounded-[6px] flex-1 ${activeFilter === filter ? "bg-[#A61E30] text-white" : "bg-white border text-gray-600"}`}
// // //             >
// // //               {filter}
// // //             </button>
// // //           ))}
// // //         </div>
// // //         <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-220px)] pr-2">
// // //           {loading ? <p className="text-gray-500 text-sm p-3">Loading...</p> : filteredCustomers.map((customer) => (
// // //             <div key={customer.id} onClick={() => setSelectedCustomerId(customer.id)} className={`flex items-center gap-3 p-2 rounded-[12px] cursor-pointer relative bg-[#FFFFFF] shadow-sm hover:bg-gray-50 transition`}>
// // //               <div className={`absolute left-0 top-0 h-full w-1 rounded-l-[12px] ${customer.id === selectedCustomerId ? "bg-[#A61E30]" : "bg-transparent"}`}></div>
// // //               <Avatar src={customer.avatar} name={customer.name} />
// // //               <div className="min-w-0 flex-1">
// // //                 <p className="text-sm font-semibold text-gray-800 truncate">{customer.name}</p>
// // //                 <p className="text-xs text-gray-500">{customer.order_id}</p>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* MAIN CONTENT */}
// // //       <div className="flex-1 p-6 mt-10 space-y-6">
// // //         {/* PROFILE CARD */}
// // //         <div className="bg-white rounded-[12px] p-5 flex justify-between shadow-sm">
// // //           <div className="flex items-center gap-4">
// // //             <Avatar src={profile.avatar} name={profile.name} size="w-14 h-14" />
// // //             <div>
// // //               <h2 className="font-semibold text-gray-800">{profile.name}</h2>
// // //               <p className="text-sm text-gray-500">{profile.location} · Joined {profile.customer_since}</p>
// // //               <p className="text-sm text-gray-500">{profile.email} · {profile.phone}</p>
// // //             </div>
// // //           </div>
// // //           <button onClick={() => navigate("/messages")} className="bg-[#A61E30] text-white rounded-[12px] h-[38px] px-4 text-sm hover:bg-[#8f1624] transition-colors">
// // //             Send Message
// // //           </button>
// // //         </div>

// // //         {/* STATS */}
// // //         <div className="grid grid-cols-3 gap-4">
// // //           <div className="bg-white p-4 rounded-xl shadow-sm">
// // //             <p className="text-xs text-gray-500">Total Orders</p>
// // //             <h3 className="text-xl font-bold text-gray-800">{stats.total_orders}</h3>
// // //           </div>
// // //           <div className="bg-white p-4 rounded-xl shadow-sm">
// // //             <p className="text-xs text-gray-500">Pending Orders</p>
// // //             <h3 className="text-xl font-bold text-gray-800">{stats.pending_orders}</h3>
// // //           </div>
// // //           <div className="bg-white p-4 rounded-xl shadow-sm">
// // //             <p className="text-xs text-gray-500">Completion</p>
// // //             <h3 className="text-xl font-bold text-gray-800">{stats.completion_rate}</h3>
// // //           </div>
// // //         </div>

// // //         {/* RECENT ORDERS */}
// // //         <div className="bg-white rounded-xl p-5 shadow-sm">
// // //           <h3 className="font-[500] font-dm text-[24px] text-[#A61E30] mb-4">Recent Orders</h3>
// // //           <div className="overflow-y-auto max-h-[250px]">
// // //             <table className="w-full text-sm border-collapse">
// // //               <thead className="bg-gray-50 sticky top-0">
// // //                 <tr className="text-gray-400 text-left">
// // //                   <th className="px-3 py-2">ORDER ID</th>
// // //                   <th className="px-3 py-2">ITEM</th>
// // //                   <th className="px-3 py-2">TOTAL</th>
// // //                   <th className="px-3 py-2">DATE</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {recentOrders.length > 0 ? recentOrders.map((order, i) => (
// // //                   <tr key={i} className="border-t hover:bg-gray-50 transition-colors">
// // //                     <td className="px-3 py-2 text-[#334155]">#{order.order_id || order.id}</td>
// // //                     <td className="px-3 py-2 text-[#334155]">{order.item || "Order Item"}</td>
// // //                     <td className="px-3 py-2 text-[#334155]">₦{Number(order.total || 0).toLocaleString()}</td>
// // //                     <td className="px-3 py-2 text-[#334155]">{order.date}</td>
// // //                   </tr>
// // //                 )) : <tr><td colSpan="4" className="text-center py-10 text-gray-400">No orders.</td></tr>}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         </div>

// // //         {/* RECENT REVIEWS */}
// // //         <div className="bg-white rounded-xl p-5 shadow-sm">
// // //           <div className="flex justify-between mb-4">
// // //             <h3 className="font-[500] font-dm text-[24px] text-[#A61E30]">Recent Reviews</h3>
// // //             <button 
// // //               onClick={() => setIsModalOpen(true)} // Open Modal Logic
// // //               className="text-xs bg-[#F6E9EA] px-3 text-[#A61E30] py-1 rounded-[12px]"
// // //             >
// // //               View all →
// // //             </button>
// // //           </div>
// // //           <div className="space-y-4 max-h-[200px] overflow-y-auto pr-2">
// // //             {recentReviews.length > 0 ? recentReviews.slice(0, 3).map((review, index) => (
// // //               <ReviewItem key={index} reviewer={review.reviewer} rating={review.rating} message={review.message} avatar={review.avatar} />
// // //             )) : <p className="text-gray-400 text-center py-4">No reviews yet.</p>}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }




// // // import React, { useState, useEffect, useMemo } from "react";
// // // import { FiSearch, FiX, FiMessageSquare, FiUserCheck, FiSlash } from "react-icons/fi"; 
// // // import { FaStar } from "react-icons/fa";
// // // import { useNavigate } from "react-router-dom";
// // // import { getCustomerById, getAllOrders } from "../api/apiServices";

// // // /* ===========================
// // //    Reusable Components
// // //    =========================== */

// // // const Avatar = ({ src, name, size = "w-10 h-10" }) => {
// // //   if (src) {
// // //     return <img src={src} alt={name} className={`${size} rounded-full object-cover flex-shrink-0`} />;
// // //   }
// // //   const initials = name ? name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2) : "??";
// // //   return (
// // //     <div className={`${size} rounded-full bg-red-100 text-[#A61E30] flex items-center justify-center text-xs font-bold flex-shrink-0 uppercase border border-red-200`}>
// // //       {initials}
// // //     </div>
// // //   );
// // // };

// // // const ReviewItem = ({ reviewer, rating, message, avatar }) => (
// // //   <div className="flex gap-3 border-b border-gray-50 pb-3 last:border-0">
// // //     <Avatar src={avatar} name={reviewer} />
// // //     <div className="flex-1 min-w-0">
// // //       <p className="text-sm font-semibold text-gray-800">{reviewer}</p>
// // //       <div className="flex text-orange-400 text-xs">
// // //         {[...Array(5)].map((_, i) => (
// // //           <FaStar key={i} className={i < (rating || 5) ? "fill-current" : "text-gray-200"} />
// // //         ))}
// // //       </div>
// // //       <p className="text-xs text-gray-500 mt-1 leading-relaxed">{message}</p>
// // //     </div>
// // //   </div>
// // // );

// // // /* ===========================
// // //    Review Modal
// // //    =========================== */
// // // const ReviewsModal = ({ isOpen, onClose, reviews, customerName }) => {
// // //   if (!isOpen) return null;
// // //   return (
// // //     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
// // //       <div className="bg-white rounded-2xl w-full max-w-lg max-h-[85vh] flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200">
// // //         <div className="p-5 border-b flex justify-between items-center">
// // //           <div>
// // //             <h3 className="text-xl font-bold text-[#A61E30]">All Reviews</h3>
// // //             <p className="text-sm text-gray-500">{customerName}</p>
// // //           </div>
// // //           <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
// // //             <FiX className="text-2xl text-gray-400" />
// // //           </button>
// // //         </div>
// // //         <div className="p-5 overflow-y-auto space-y-4">
// // //           {reviews.length > 0 ? (
// // //             reviews.map((rev, i) => <ReviewItem key={i} {...rev} />)
// // //           ) : (
// // //             <div className="text-center py-20 text-gray-400">No reviews found for this user.</div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // /* ===========================
// // //    Main Component
// // //    =========================== */
// // // export default function CustomerPage() {
// // //   const navigate = useNavigate();
// // //   const [customers, setCustomers] = useState([]);
// // //   const [selectedCustomerId, setSelectedCustomerId] = useState(null);
// // //   const [customerDetails, setCustomerDetails] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // //   const [activeFilter, setActiveFilter] = useState("All");
// // //   const [searchTerm, setSearchTerm] = useState("");

// // //   const fetchSidebarFromOrders = async () => {
// // //   setLoading(true);
// // //   try {
// // //     const response = await getAllOrders();
// // //     if (response.success && response.data?.orders) {
// // //       const uniqueMap = new Map();

// // //       response.data.orders.forEach((o) => {
// // //         // 1. Create a reliable unique key. 
// // //         // Use Customer ID if available, otherwise fallback to a unique string 
// // //         // combined with name to prevent "New Accounts" from overwriting each other.
// // //         const customerId = o.customer?.id;
// // //         const customerName = o.customer?.name || "Unknown Customer";
        
// // //         // We use the ID as the primary key, but if it's missing, 
// // //         // we use the Order ID to ensure it shows up as a distinct entry.
// // //         const mapKey = customerId || `temp-id-${o.id}`;

// // //         if (!uniqueMap.has(mapKey)) {
// // //           uniqueMap.set(mapKey, {
// // //             id: mapKey, // This is what selectedCustomerId will use
// // //             actualId: customerId, // Store the real ID for the API call
// // //             name: customerName,
// // //             order_id: o.order_id,
// // //             avatar: o.customer?.avatar || null,
// // //             status: "Active"
// // //           });
// // //         }
// // //       });

// // //       const formatted = Array.from(uniqueMap.values());
// // //       setCustomers(formatted);

// // //       // Auto-select the first one if nothing is selected
// // //       if (formatted.length > 0 && !selectedCustomerId) {
// // //         setSelectedCustomerId(formatted[0].id);
// // //       }
// // //     }
// // //   } catch (err) {
// // //     console.error("Sidebar Sync Error:", err);
// // //   } finally {
// // //     setLoading(false);
// // //   }
// // // };

// // //   const fetchCustomerDetails = async (id) => {
// // //     if (!id) return;
// // //     try {
// // //       const response = await getCustomerById(id);
// // //       if (response.success) setCustomerDetails(response.data);
// // //     } catch (err) { console.error(err); }
// // //   };

// // //   useEffect(() => { fetchSidebarFromOrders(); }, []);
// // //   useEffect(() => { if (selectedCustomerId) fetchCustomerDetails(selectedCustomerId); }, [selectedCustomerId]);

// // //   const filteredCustomers = useMemo(() => {
// // //     return customers
// // //       .filter((c) => (activeFilter === "All" ? true : c.status === activeFilter))
// // //       .filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
// // //   }, [customers, activeFilter, searchTerm]);

// // //   const profile = customerDetails?.profile || { name: "Select a customer", location: "N/A", email: "N/A", phone: "N/A", customer_since: "N/A" };
// // //   const stats = customerDetails?.stats || { total_orders: 0, pending_orders: 0, completion_rate: "0%" };
// // //   const recentOrders = customerDetails?.recent_orders || [];
// // //   const recentReviews = customerDetails?.recent_reviews || [];

// // //   return (
// // //     <div className="flex min-h-screen bg-[#F6F1E8]">
// // //       <ReviewsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} reviews={recentReviews} customerName={profile.name} />

// // //       {/* SIDEBAR */}
// // //       <div className="w-[300px] mt-14 bg-[#F9F9F9] p-5 border-r flex flex-col shrink-0">
// // //         <h1 className="text-lg font-semibold text-gray-800 mb-4">Customers</h1>
// // //         <div className="relative mb-5">
// // //           <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
// // //           <input
// // //             placeholder="Search customer..."
// // //             value={searchTerm}
// // //             onChange={(e) => setSearchTerm(e.target.value)}
// // //             className="pl-10 pr-4 py-2 w-full bg-white text-sm border shadow-sm rounded-[40px] focus:outline-none focus:ring-1 focus:ring-[#A61E30]"
// // //           />
// // //         </div>
// // //         <div className="flex mb-4 rounded-[12px] bg-gray-100 p-1">
// // //           {["All", "Active"].map((filter) => (
// // //             <button
// // //               key={filter}
// // //               onClick={() => setActiveFilter(filter)}
// // //               className={`px-5 py-1 text-xs rounded-[6px] flex-1 transition-all ${activeFilter === filter ? "bg-[#A61E30] text-white shadow-sm" : "text-gray-600"}`}
// // //             >
// // //               {filter}
// // //             </button>
// // //           ))}
// // //         </div>
// // //         <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-220px)] pr-2 custom-scrollbar">
// // //           {loading ? <p className="text-gray-400 text-xs text-center py-4">Syncing customers...</p> : filteredCustomers.map((customer) => (
// // //             <div key={customer.id} onClick={() => setSelectedCustomerId(customer.id)} className={`flex items-center gap-3 p-3 rounded-[12px] cursor-pointer relative bg-white shadow-sm border transition-all ${customer.id === selectedCustomerId ? "border-[#A61E30] ring-1 ring-[#A61E30]/10" : "border-transparent"}`}>
// // //               <Avatar src={customer.avatar} name={customer.name} />
// // //               <div className="min-w-0 flex-1">
// // //                 <p className="text-sm font-semibold text-gray-800 truncate">{customer.name}</p>
// // //                 <p className="text-[10px] text-gray-400 uppercase tracking-wider">{customer.order_id}</p>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* MAIN CONTENT */}
// // //       <div className="flex-1 p-8 mt-10 space-y-6 overflow-y-auto">
// // //         {/* PROFILE CARD - Accommodates 3 Buttons */}
// // //         <div className="bg-white rounded-[16px] p-6 flex flex-wrap justify-between items-center gap-6 shadow-sm border border-white">
// // //           <div className="flex items-center gap-5 min-w-0">
// // //             <Avatar src={profile.avatar} name={profile.name} size="w-20 h-20" />
// // //             <div className="min-w-0">
// // //               <h2 className="font-bold text-2xl text-gray-800 truncate">{profile.name}</h2>
// // //               <p className="text-sm text-gray-500 mb-1">{profile.location} • Joined {profile.customer_since}</p>
// // //               <p className="text-xs text-gray-400 truncate">{profile.email} • {profile.phone}</p>
// // //             </div>
// // //           </div>
          
// // //           {/* THREE BUTTON ACTION AREA */}
// // //           <div className="flex items-center gap-3 shrink-0">
// // //             <button className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors" title="Verify User">
// // //               <FiUserCheck />
// // //             </button>
// // //             <button className="flex items-center justify-center w-10 h-10 bg-red-50 text-red-500 rounded-full hover:bg-red-100 transition-colors" title="Ban User">
// // //               <FiSlash />
// // //             </button>
// // //             <button 
// // //               onClick={() => navigate("/dashboard/notifications")} 
// // //               className="bg-[#A61E30] text-white rounded-[12px] h-[44px] px-6 text-sm font-medium hover:bg-[#8f1624] transition-all flex items-center gap-2 shadow-md shadow-red-900/10"
// // //             >
// // //               <FiMessageSquare /> Send Message
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* STATS */}
// // //         <div className="grid grid-cols-3 gap-6">
// // //           {[
// // //             { label: "Total Orders", value: stats.total_orders, color: "text-gray-800" },
// // //             { label: "Pending Orders", value: stats.pending_orders, color: "text-orange-500" },
// // //             { label: "Completion Rate", value: stats.completion_rate, color: "text-green-600" }
// // //           ].map((stat, i) => (
// // //             <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
// // //               <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
// // //               <h3 className={`text-2xl font-black ${stat.color}`}>{stat.value}</h3>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* RECENT ORDERS TABLE */}
// // //         <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
// // //           <h3 className="text-xl font-bold text-[#A61E30] mb-5">Recent Order </h3>
// // //           <div className="overflow-x-auto">
// // //             <table className="w-full text-sm">
// // //               <thead>
// // //                 <tr className="text-gray-400 text-left border-b border-gray-50">
// // //                   <th className="px-4 py-3 font-medium">ORDER ID</th>
// // //                   <th className="px-4 py-3 font-medium">ITEM DETAILS</th>
// // //                   <th className="px-4 py-3 font-medium">AMOUNT</th>
// // //                   <th className="px-4 py-3 font-medium">DATE</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody className="divide-y divide-gray-50">
// // //                 {recentOrders.length > 0 ? recentOrders.map((order, i) => (
// // //                   <tr key={i} className="hover:bg-gray-50/50 transition-colors">
// // //                     <td className="px-4 py-4 font-mono text-xs text-gray-600">#{order.order_id || order.id}</td>
// // //                     <td className="px-4 py-4 text-gray-800 font-medium">{order.item || "Standard Delivery"}</td>
// // //                     <td className="px-4 py-4 text-gray-800">₦{Number(order.total || 0).toLocaleString()}</td>
// // //                     <td className="px-4 py-4 text-gray-500 text-xs">{order.date}</td>
// // //                   </tr>
// // //                 )) : (
// // //                   <tr><td colSpan="4" className="text-center py-12 text-gray-400 italic">No transaction history found.</td></tr>
// // //                 )}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         </div>

// // //         {/* RECENT REVIEWS SECTION */}
// // //         <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
// // //           <div className="flex justify-between items-center mb-6">
// // //             <h3 className="text-xl font-bold text-[#A61E30]">Recent Reviews</h3>
// // //             <button 
// // //               onClick={() => setIsModalOpen(true)} 
// // //               className="text-xs font-bold text-[#A61E30] bg-red-50 hover:bg-red-100 px-4 py-2 rounded-full transition-all"
// // //             >
// // //               View All Reviews
// // //             </button>
// // //           </div>
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //             {recentReviews.length > 0 ? recentReviews.slice(0, 4).map((review, index) => (
// // //               <div key={index} className="p-4 rounded-xl border border-gray-50 bg-gray-50/30">
// // //                 <ReviewItem {...review} />
// // //               </div>
// // //             )) : <p className="col-span-2 text-gray-400 text-center py-6">No feedback submitted yet.</p>}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }





// // import React, { useState, useEffect, useMemo } from "react";
// // import { FiSearch, FiX, FiMessageSquare, FiUserCheck, FiSlash } from "react-icons/fi"; 
// // import { FaStar } from "react-icons/fa";
// // import { useNavigate } from "react-router-dom";
// // import { getCustomerById, getAllOrders } from "../api/apiServices";

// // /* ===========================
// //    Reusable Components
// //    =========================== */

// // const Avatar = ({ src, name, size = "w-10 h-10" }) => {
// //   if (src) {
// //     return <img src={src} alt={name} className={`${size} rounded-full object-cover flex-shrink-0`} />;
// //   }
// //   const initials = name ? name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2) : "??";
// //   return (
// //     <div className={`${size} rounded-full bg-red-100 text-[#A61E30] flex items-center justify-center text-xs font-bold flex-shrink-0 uppercase border border-red-200`}>
// //       {initials}
// //     </div>
// //   );
// // };

// // const ReviewItem = ({ reviewer, rating, message, avatar }) => (
// //   <div className="flex gap-3 border-b border-gray-50 pb-3 last:border-0">
// //     <Avatar src={avatar} name={reviewer} />
// //     <div className="flex-1 min-w-0">
// //       <p className="text-sm font-semibold text-gray-800">{reviewer}</p>
// //       <div className="flex text-orange-400 text-xs">
// //         {[...Array(5)].map((_, i) => (
// //           <FaStar key={i} className={i < (rating || 5) ? "fill-current" : "text-gray-200"} />
// //         ))}
// //       </div>
// //       <p className="text-xs text-gray-500 mt-1 leading-relaxed">{message}</p>
// //     </div>
// //   </div>
// // );

// // /* ===========================
// //    Review Modal
// //    =========================== */
// // const ReviewsModal = ({ isOpen, onClose, reviews, customerName }) => {
// //   if (!isOpen) return null;
// //   return (
// //     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
// //       <div className="bg-white rounded-2xl w-full max-w-lg max-h-[85vh] flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200">
// //         <div className="p-5 border-b flex justify-between items-center">
// //           <div>
// //             <h3 className="text-xl font-bold text-[#A61E30]">All Reviews</h3>
// //             <p className="text-sm text-gray-500">{customerName}</p>
// //           </div>
// //           <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
// //             <FiX className="text-2xl text-gray-400" />
// //           </button>
// //         </div>
// //         <div className="p-5 overflow-y-auto space-y-4">
// //           {reviews.length > 0 ? (
// //             reviews.map((rev, i) => <ReviewItem key={i} {...rev} />)
// //           ) : (
// //             <div className="text-center py-20 text-gray-400">No reviews found for this user.</div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // /* ===========================
// //    Main Component
// //    =========================== */
// // export default function CustomerPage() {
// //   const navigate = useNavigate();
// //   const [customers, setCustomers] = useState([]);
// //   const [selectedCustomerId, setSelectedCustomerId] = useState(null);
// //   const [customerDetails, setCustomerDetails] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [activeFilter, setActiveFilter] = useState("All");
// //   const [searchTerm, setSearchTerm] = useState("");

  

// //   const fetchSidebarFromOrders = async () => {
// //     setLoading(true);
// //     try {
// //       const response = await getAllOrders();
// //       if (response.success && response.data?.orders) {
// //         const uniqueMap = new Map();

// //         response.data.orders.forEach((o) => {
// //           const customerId = o.customer?.id;
// //           const customerName = o.customer?.name || "Unknown Customer";
          
// //           // Use real ID if available, otherwise fallback to a unique temp string
// //           const mapKey = customerId || `temp-id-${o.order_id}`;

// //           if (!uniqueMap.has(mapKey)) {
// //             uniqueMap.set(mapKey, {
// //               id: mapKey,
// //               actualId: customerId, // Kept to fetch actual data if ID exists
// //               name: customerName,
// //               order_id: o.order_id,
// //               avatar: o.customer?.avatar || null,
// //               status: "Active"
// //             });
// //           }
// //         });

// //         const formatted = Array.from(uniqueMap.values());
// //         setCustomers(formatted);

// //         if (formatted.length > 0 && !selectedCustomerId) {
// //           setSelectedCustomerId(formatted[0].id);
// //         }
// //       }
// //     } catch (err) {
// //       console.error("Sidebar Sync Error:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const fetchCustomerDetails = async (id) => {
// //     // If ID is a temp ID (new account without real database ID), handle locally
// //     if (typeof id === 'string' && id.includes("temp-id")) {
// //         const tempUser = customers.find(c => c.id === id);
// //         setCustomerDetails({
// //             profile: { 
// //                 name: tempUser?.name || "New Customer", 
// //                 location: "Location Pending", 
// //                 email: "N/A", 
// //                 phone: "N/A", 
// //                 customer_since: "Today" 
// //             },
// //             stats: { total_orders: 1, pending_orders: 1, completion_rate: "0%" },
// //             recent_orders: [],
// //             recent_reviews: []
// //         });
// //         return;
// //     }

// //     try {
// //       const response = await getCustomerById(id);
// //       if (response.success) setCustomerDetails(response.data);
// //     } catch (err) { console.error(err); }
// //   };

// //   useEffect(() => { fetchSidebarFromOrders(); }, []);
  
// //   useEffect(() => { 
// //     if (selectedCustomerId) {
// //         // Find actualId if it exists, otherwise use the selectedCustomerId
// //         const target = customers.find(c => c.id === selectedCustomerId);
// //         fetchCustomerDetails(target?.actualId || selectedCustomerId); 
// //     }
// //   }, [selectedCustomerId, customers]);

// //   const filteredCustomers = useMemo(() => {
// //     return customers
// //       .filter((c) => (activeFilter === "All" ? true : c.status === activeFilter))
// //       .filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
// //   }, [customers, activeFilter, searchTerm]);

// //   const profile = customerDetails?.profile || { name: "Select a customer", location: "N/A", email: "N/A", phone: "N/A", customer_since: "N/A" };
// //   const stats = customerDetails?.stats || { total_orders: 0, pending_orders: 0, completion_rate: "0%" };
// //   const recentOrders = customerDetails?.recent_orders || [];
// //   const recentReviews = customerDetails?.recent_reviews || [];

// //   return (
// //     <div className="flex min-h-screen bg-[#F6F1E8]">
// //       <ReviewsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} reviews={recentReviews} customerName={profile.name} />

// //       {/* SIDEBAR */}
// //       <div className="w-[300px] mt-14 bg-[#F9F9F9] p-5 border-r flex flex-col shrink-0">
// //         <h1 className="text-lg font-semibold text-gray-800 mb-4 font-roboto">Customers</h1>
// //         <div className="relative mb-5">
// //           <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
// //           <input
// //             placeholder="Search customer..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             className="pl-10 pr-4 py-2 w-full bg-white text-sm border shadow-sm rounded-[40px] focus:outline-none focus:ring-1 focus:ring-[#A61E30]"
// //           />
// //         </div>
// //         <div className="flex mb-4 rounded-[12px] bg-gray-100 p-1">
// //           {["All", "Active"].map((filter) => (
// //             <button
// //               key={filter}
// //               onClick={() => setActiveFilter(filter)}
// //               className={`px-5 py-1 text-xs rounded-[6px] flex-1 transition-all ${activeFilter === filter ? "bg-[#A61E30] text-white shadow-sm" : "text-gray-600"}`}
// //             >
// //               {filter}
// //             </button>
// //           ))}
// //         </div>
// //         <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-220px)] pr-2 custom-scrollbar">
// //           {loading ? <p className="text-gray-400 text-xs text-center py-4">Syncing customers...</p> : filteredCustomers.map((customer) => (
// //             <div key={customer.id} onClick={() => setSelectedCustomerId(customer.id)} className={`flex items-center gap-3 p-3 rounded-[12px] cursor-pointer relative bg-white shadow-sm border transition-all ${customer.id === selectedCustomerId ? "border-[#A61E30] ring-1 ring-[#A61E30]/10" : "border-transparent"}`}>
// //               <Avatar src={customer.avatar} name={customer.name} />
// //               <div className="min-w-0 flex-1">
// //                 <p className="text-sm font-semibold text-gray-800 truncate">{customer.name}</p>
// //                 <p className="text-[10px] text-gray-400 uppercase tracking-wider">{customer.order_id}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* MAIN CONTENT */}
// //       <div className="flex-1 p-8 mt-10 space-y-6 overflow-y-auto">
// //         {/* PROFILE CARD */}
// //         <div className="bg-white rounded-[16px] p-6 flex flex-wrap justify-between items-center gap-6 shadow-sm border border-white">
// //           <div className="flex items-center gap-5 min-w-0">
// //             <Avatar src={profile.avatar} name={profile.name} size="w-20 h-20" />
// //             <div className="min-w-0">
// //               <h2 className="font-bold text-2xl text-gray-800 truncate">{profile.name}</h2>
// //               <p className="text-sm text-gray-500 mb-1">{profile.location} • Joined {profile.customer_since}</p>
// //               <p className="text-xs text-gray-400 truncate">{profile.email} • {profile.phone}</p>
// //             </div>
// //           </div>
          
// //           <div className="flex items-center gap-3 shrink-0">
// //             <button className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors" title="Verify User">
// //               <FiUserCheck />
// //             </button>
// //             <button className="flex items-center justify-center w-10 h-10 bg-red-50 text-red-500 rounded-full hover:bg-red-100 transition-colors" title="Ban User">
// //               <FiSlash />
// //             </button>
// //             <button 
// //               onClick={() => navigate("/dashboard/notifications")} 
// //               className="bg-[#A61E30] text-white rounded-[12px] h-[44px] px-6 text-sm font-medium hover:bg-[#8f1624] transition-all flex items-center gap-2 shadow-md shadow-red-900/10"
// //             >
// //               <FiMessageSquare /> Send Message
// //             </button>
// //           </div>
// //         </div>

// //         {/* STATS */}
// //         <div className="grid grid-cols-3 gap-6">
// //           {[
// //             { label: "Total Orders", value: stats.total_orders, color: "text-gray-800" },
// //             { label: "Pending Orders", value: stats.pending_orders, color: "text-orange-500" },
// //             { label: "Completion Rate", value: stats.completion_rate, color: "text-green-600" }
// //           ].map((stat, i) => (
// //             <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
// //               <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
// //               <h3 className={`text-2xl font-black ${stat.color}`}>{stat.value}</h3>
// //             </div>
// //           ))}
// //         </div>

// //         {/* RECENT ORDERS TABLE */}
// //         <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
// //           <h3 className="text-xl font-bold text-[#A61E30] mb-5">Recent Order </h3>
// //           <div className="overflow-x-auto">
// //             <table className="w-full text-sm">
// //               <thead>
// //                 <tr className="text-gray-400 text-left border-b border-gray-50">
// //                   <th className="px-4 py-3 font-medium">ORDER ID</th>
// //                   <th className="px-4 py-3 font-medium">ITEM DETAILS</th>
// //                   <th className="px-4 py-3 font-medium">AMOUNT</th>
// //                   <th className="px-4 py-3 font-medium">DATE</th>
// //                 </tr>
// //               </thead>
// //               {/* <tbody className="divide-y divide-gray-50">
// //                 {recentOrders.length > 0 ? recentOrders.map((order, i) => (
// //                   <tr key={i} className="hover:bg-gray-50/50 transition-colors">
// //                     <td className="px-4 py-4 font-mono text-xs text-gray-600">#{order.order_id || order.id}</td>
// //                     <td className="px-4 py-4 text-gray-800 font-medium">{order.item || "Standard Delivery"}</td>
// //                     <td className="px-4 py-4 text-gray-800">₦{Number(order.total || 0).toLocaleString()}</td>
// //                     <td className="px-4 py-4 text-gray-500 text-xs">{order.date}</td>
// //                   </tr>
// //                 )) : (
// //                   <tr><td colSpan="4" className="text-center py-12 text-gray-400 italic">No transaction history found.</td></tr>
// //                 )}
// //               </tbody> */}
// //               <tbody className="divide-y divide-gray-50">
// //   {recentOrders.length > 0 ? recentOrders.map((order, i) => (
// //     <tr key={i} className="hover:bg-gray-50/50 transition-colors">
// //       {/* Fallback for different ID keys (id vs order_id) */}
// //       <td className="px-4 py-4 font-mono text-xs text-gray-600">
// //         #{order.order_id || order.id || "N/A"}
// //       </td>
// //       {/* Fallback for item names */}
// //       <td className="px-4 py-4 text-gray-800 font-medium">
// //         {order.item || order.product_name || "Standard Delivery"}
// //       </td>
// //       {/* Ensure amount is a number before formatting */}
// //       <td className="px-4 py-4 text-gray-800">
// //         ₦{order.total ? Number(order.total).toLocaleString() : Number(order.amount || 0).toLocaleString()}
// //       </td>
// //       <td className="px-4 py-4 text-gray-500 text-xs">
// //         {order.date || order.created_at || "Recently"}
// //       </td>
// //     </tr>
// //   )) : (
// //     <tr>
// //       <td colSpan="4" className="text-center py-12 text-gray-400 italic">
// //         No transaction history found.
// //       </td>
// //     </tr>
// //   )}
// // </tbody>
// //             </table>
// //           </div>
// //         </div>

// //         {/* RECENT REVIEWS SECTION */}
// //         <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
// //           <div className="flex justify-between items-center mb-6">
// //             <h3 className="text-xl font-bold text-[#A61E30]">Recent Reviews</h3>
// //             <button 
// //               onClick={() => setIsModalOpen(true)} 
// //               className="text-xs font-bold text-[#A61E30] bg-red-50 hover:bg-red-100 px-4 py-2 rounded-full transition-all"
// //             >
// //               View All Reviews
// //             </button>
// //           </div>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             {recentReviews.length > 0 ? recentReviews.slice(0, 4).map((review, index) => (
// //               <div key={index} className="p-4 rounded-xl border border-gray-50 bg-gray-50/30">
// //                 <ReviewItem {...review} />
// //               </div>
// //             )) : <p className="col-span-2 text-gray-400 text-center py-6">No feedback submitted yet.</p>}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }





// // import React, { useState, useEffect, useMemo } from "react";
// // import { FiSearch, FiX, FiMessageSquare, FiUserCheck, FiSlash } from "react-icons/fi"; 
// // import { FaStar } from "react-icons/fa";
// // import { useNavigate } from "react-router-dom";
// // import { getCustomerById, getAllOrders } from "../api/apiServices";

// // /* ===========================
// //    Reusable Components
// //    =========================== */
// // const Avatar = ({ src, name, size = "w-10 h-10" }) => {
// //   if (src) {
// //     return <img src={src} alt={name} className={`${size} rounded-full object-cover flex-shrink-0`} />;
// //   }
// //   const initials = name ? name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2) : "??";
// //   return (
// //     <div className={`${size} rounded-full bg-red-100 text-[#A61E30] flex items-center justify-center text-xs font-bold flex-shrink-0 uppercase border border-red-200`}>
// //       {initials}
// //     </div>
// //   );
// // };

// // const ReviewItem = ({ reviewer, rating, message, avatar }) => (
// //   <div className="flex gap-3 border-b border-gray-50 pb-3 last:border-0">
// //     <Avatar src={avatar} name={reviewer} />
// //     <div className="flex-1 min-w-0">
// //       <p className="text-sm font-semibold text-gray-800">{reviewer}</p>
// //       <div className="flex text-orange-400 text-xs">
// //         {[...Array(5)].map((_, i) => (
// //           <FaStar key={i} className={i < (rating || 5) ? "fill-current" : "text-gray-200"} />
// //         ))}
// //       </div>
// //       <p className="text-xs text-gray-500 mt-1 leading-relaxed">{message}</p>
// //     </div>
// //   </div>
// // );

// // /* ===========================
// //    Review Modal
// //    =========================== */
// // const ReviewsModal = ({ isOpen, onClose, reviews, customerName }) => {
// //   if (!isOpen) return null;
// //   return (
// //     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
// //       <div className="bg-white rounded-2xl w-full max-w-lg max-h-[85vh] flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200">
// //         <div className="p-5 border-b flex justify-between items-center">
// //           <div>
// //             <h3 className="text-xl font-bold text-[#A61E30]">All Reviews</h3>
// //             <p className="text-sm text-gray-500">{customerName}</p>
// //           </div>
// //           <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
// //             <FiX className="text-2xl text-gray-400" />
// //           </button>
// //         </div>
// //         <div className="p-5 overflow-y-auto space-y-4">
// //           {reviews && reviews.length > 0 ? (
// //             reviews.map((rev, i) => <ReviewItem key={i} {...rev} />)
// //           ) : (
// //             <div className="text-center py-20 text-gray-400">No reviews found for this user.</div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // /* ===========================
// //    Main Component
// //    =========================== */
// // export default function CustomerPage() {
// //   const navigate = useNavigate();
// //   const [customers, setCustomers] = useState([]);
// //   const [selectedCustomerId, setSelectedCustomerId] = useState(null);
// //   const [customerDetails, setCustomerDetails] = useState(null);
// //   const [sidebarLoading, setSidebarLoading] = useState(true);
// //   const [detailsLoading, setDetailsLoading] = useState(false);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [activeFilter, setActiveFilter] = useState("All");
// //   const [searchTerm, setSearchTerm] = useState("");

// //   const fetchSidebarFromOrders = async () => {
// //     setSidebarLoading(true);
// //     try {
// //       const response = await getAllOrders();
// //       const ordersList = response?.orders || response?.data?.orders || [];
      
// //       if (ordersList.length > 0) {
// //         const uniqueMap = new Map();

// //         ordersList.forEach((o) => {
// //           const customerId = o.customer?.id;
// //           const customerName = o.customer?.name || "Unknown Customer";
// //           const mapKey = customerId || `temp-id-${o.order_id}`;

// //           if (!uniqueMap.has(mapKey)) {
// //             uniqueMap.set(mapKey, {
// //               id: mapKey,
// //               actualId: customerId,
// //               name: customerName,
// //               order_id: o.order_id,
// //               avatar: o.customer?.avatar || null,
// //               // Logic: If they have an order in this list, we'll treat them as "Active"
// //               status: "Active" 
// //             });
// //           }
// //         });

// //         const formatted = Array.from(uniqueMap.values());
// //         setCustomers(formatted);

// //         if (formatted.length > 0 && !selectedCustomerId) {
// //           setSelectedCustomerId(formatted[0].id);
// //         }
// //       }
// //     } catch (err) {
// //       console.error("Sidebar Sync Error:", err);
// //     } finally {
// //       setSidebarLoading(false);
// //     }
// //   };


// // //   const fetchSidebarFromOrders = async () => {
// // //   setLoading(true);
// // //   try {
// // //     const response = await getAllOrders();
    
// // //     // Path based on your JSON: response.data.orders
// // //     const ordersList = response.data?.orders || [];
    
// // //     if (ordersList.length > 0) {
// // //       const uniqueMap = new Map();

// // //       ordersList.forEach((o) => {
// // //         // Since your JSON doesn't have customer.id, we use name as a temporary unique key
// // //         const customerName = o.customer?.name || "Unknown Customer";
        
// // //         if (!uniqueMap.has(customerName)) {
// // //           uniqueMap.set(customerName, {
// // //             // Using the primary 'id' of the order as a reference if customer id is missing
// // //             id: customerName, 
// // //             actualId: o.id, 
// // //             name: customerName,
// // //             order_id: o.order_id, // e.g., "#QP-BEW4TW"
// // //             avatar: null,
// // //             status: "Active" // Defaulting to active as they have orders
// // //           });
// // //         }
// // //       });

// // //       const formatted = Array.from(uniqueMap.values());
// // //       setCustomers(formatted);

// // //       if (formatted.length > 0 && !selectedCustomerId) {
// // //         setSelectedCustomerId(formatted[0].id);
// // //       }
// // //     }
// // //   } catch (err) {
// // //     console.error("Sidebar Sync Error:", err);
// // //   } finally {
// // //     setLoading(false);
// // //   }
// // // };

// //   const fetchCustomerDetails = async (id) => {
// //     setDetailsLoading(true);
// //     // Handle Temp IDs
// //     if (typeof id === 'string' && id.includes("temp-id")) {
// //         const tempUser = customers.find(c => c.id === id);
// //         setCustomerDetails({
// //             profile: { 
// //                 name: tempUser?.name || "New Customer", 
// //                 location: "Location Pending", 
// //                 email: "N/A", 
// //                 phone: "N/A", 
// //                 customer_since: "Today",
// //                 avatar: tempUser?.avatar
// //             },
// //             stats: { total_orders: 1, pending_orders: 1, completion_rate: "0%" },
// //             recent_orders: [],
// //             recent_reviews: []
// //         });
// //         setDetailsLoading(false);
// //         return;
// //     }

// //     try {
// //       const response = await getCustomerById(id);
// //       // Checking if response is direct or wrapped in response.data
// //       const data = response?.data || response;
// //       setCustomerDetails(data);
// //     } catch (err) { 
// //       console.error(err); 
// //     } finally {
// //       setDetailsLoading(false);
// //     }
// //   };

// //   useEffect(() => { fetchSidebarFromOrders(); }, []);
  
// //   useEffect(() => { 
// //     if (selectedCustomerId) {
// //         const target = customers.find(c => c.id === selectedCustomerId);
// //         fetchCustomerDetails(target?.actualId || selectedCustomerId); 
// //     }
// //   }, [selectedCustomerId]);

// //   const filteredCustomers = useMemo(() => {
// //     return customers
// //       .filter((c) => (activeFilter === "All" ? true : c.status === activeFilter))
// //       .filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
// //   }, [customers, activeFilter, searchTerm]);

// //   // Safe data extraction
// //   const profile = customerDetails?.profile || { name: "Select a customer", location: "N/A", email: "N/A", phone: "N/A", customer_since: "N/A" };
// //   const stats = customerDetails?.stats || { total_orders: 0, pending_orders: 0, completion_rate: "0%" };
// //   const recentOrders = customerDetails?.recent_orders || [];
// //   const recentReviews = customerDetails?.recent_reviews || [];

// //   return (
// //     <div className="flex min-h-screen bg-[#F6F1E8]">
// //       <ReviewsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} reviews={recentReviews} customerName={profile.name} />

// //       {/* SIDEBAR */}
// //       <div className="w-[300px] mt-14 bg-[#F9F9F9] p-5 border-r flex flex-col shrink-0">
// //         <h1 className="text-lg font-semibold text-gray-800 mb-4 font-roboto">Customers</h1>
// //         <div className="relative mb-5">
// //           <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
// //           <input
// //             placeholder="Search customer..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             className="pl-10 pr-4 py-2 w-full bg-white text-sm border shadow-sm rounded-[40px] focus:outline-none focus:ring-1 focus:ring-[#A61E30]"
// //           />
// //         </div>
        
// //         {/* Active Filter Switcher */}
// //         <div className="flex mb-4 rounded-[12px] bg-gray-100 p-1">
// //           {["All", "Active"].map((filter) => (
// //             <button
// //               key={filter}
// //               onClick={() => setActiveFilter(filter)}
// //               className={`px-5 py-1 text-xs rounded-[6px] flex-1 transition-all ${activeFilter === filter ? "bg-[#A61E30] text-white shadow-sm" : "text-gray-600"}`}
// //             >
// //               {filter}
// //             </button>
// //           ))}
// //         </div>

// //         <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-220px)] pr-2 custom-scrollbar">
// //           {sidebarLoading ? (
// //             <p className="text-gray-400 text-xs text-center py-4">Syncing customers...</p>
// //           ) : (
// //             filteredCustomers.map((customer) => (
// //               <div 
// //                 key={customer.id} 
// //                 onClick={() => setSelectedCustomerId(customer.id)} 
// //                 className={`flex items-center gap-3 p-3 rounded-[12px] cursor-pointer relative bg-white shadow-sm border transition-all ${customer.id === selectedCustomerId ? "border-[#A61E30] ring-1 ring-[#A61E30]/10" : "border-transparent"}`}
// //               >
// //                 <Avatar src={customer.avatar} name={customer.name} />
// //                 <div className="min-w-0 flex-1">
// //                   <p className="text-sm font-semibold text-gray-800 truncate">{customer.name}</p>
// //                   <p className="text-[10px] text-gray-400 uppercase tracking-wider">#{customer.order_id}</p>
// //                 </div>
// //               </div>
// //             ))
// //           )}
// //           {!sidebarLoading && filteredCustomers.length === 0 && (
// //              <p className="text-gray-400 text-xs text-center py-4">No customers match.</p>
// //           )}
// //         </div>
// //       </div>

// //       {/* MAIN CONTENT */}
// //       <div className="flex-1 p-8 mt-10 space-y-6 overflow-y-auto">
// //         {detailsLoading ? (
// //           <div className="flex items-center justify-center h-full text-[#A61E30] animate-pulse font-medium">Loading details...</div>
// //         ) : (
// //           <>
// //             {/* PROFILE CARD */}
// //             <div className="bg-white rounded-[16px] p-6 flex flex-wrap justify-between items-center gap-6 shadow-sm border border-white">
// //               <div className="flex items-center gap-5 min-w-0">
// //                 <Avatar src={profile.avatar} name={profile.name} size="w-20 h-20" />
// //                 <div className="min-w-0">
// //                   <h2 className="font-bold text-2xl text-gray-800 truncate">{profile.name}</h2>
// //                   <p className="text-sm text-gray-500 mb-1">{profile.location} • Joined {profile.customer_since}</p>
// //                   <p className="text-xs text-gray-400 truncate">{profile.email} • {profile.phone}</p>
// //                 </div>
// //               </div>
              
// //               <div className="flex items-center gap-3 shrink-0">
// //                 <button className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors" title="Verify User">
// //                   <FiUserCheck />
// //                 </button>
// //                 <button className="flex items-center justify-center w-10 h-10 bg-red-50 text-red-500 rounded-full hover:bg-red-100 transition-colors" title="Ban User">
// //                   <FiSlash />
// //                 </button>
// //                 <button 
// //                   onClick={() => navigate("/dashboard/notifications")} 
// //                   className="bg-[#A61E30] text-white rounded-[12px] h-[44px] px-6 text-sm font-medium hover:bg-[#8f1624] transition-all flex items-center gap-2 shadow-md shadow-red-900/10"
// //                 >
// //                   <FiMessageSquare /> Send Message
// //                 </button>
// //               </div>
// //             </div>

// //             {/* STATS */}
// //             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
// //               {[
// //                 { label: "Total Orders", value: stats.total_orders, color: "text-gray-800" },
// //                 { label: "Pending Orders", value: stats.pending_orders, color: "text-orange-500" },
// //                 { label: "Completion Rate", value: stats.completion_rate, color: "text-green-600" }
// //               ].map((stat, i) => (
// //                 <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
// //                   <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
// //                   <h3 className={`text-2xl font-black ${stat.color}`}>{stat.value}</h3>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* RECENT ORDERS TABLE */}
// //             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
// //               <h3 className="text-xl font-bold text-[#A61E30] mb-5">Recent Orders</h3>
// //               <div className="overflow-x-auto">
// //                 <table className="w-full text-sm">
// //                   <thead>
// //                     <tr className="text-gray-400 text-left border-b border-gray-50">
// //                       <th className="px-4 py-3 font-medium">ORDER ID</th>
// //                       <th className="px-4 py-3 font-medium">ITEM DETAILS</th>
// //                       <th className="px-4 py-3 font-medium">AMOUNT</th>
// //                       <th className="px-4 py-3 font-medium">DATE</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody className="divide-y divide-gray-50">
// //   {recentOrders.length > 0 ? recentOrders.map((order, i) => (
// //     <tr key={i} className="hover:bg-gray-50/50 transition-colors">
// //       <td className="px-4 py-4 font-mono text-xs text-gray-600">
// //         {order.order_id} 
// //       </td>
// //       <td className="px-4 py-4 text-gray-800 font-medium">
// //         {/* If your API doesn't send item details, fallback to status or generic name */}
// //         {order.item || "General Purchase"} 
// //       </td>
// //       <td className="px-4 py-4 text-gray-800 font-bold">
// //         ₦{order.total}
// //       </td>
// //       <td className="px-4 py-4 text-gray-500 text-xs">
// //         {order.date}
// //       </td>
// //     </tr>
// //   )) : (
// //     <tr>
// //       <td colSpan="4" className="text-center py-12 text-gray-400 italic">
// //         No transaction history found.
// //       </td>
// //     </tr>
// //   )}
// // </tbody>
// //                 </table>
// //               </div>
// //             </div>

// //             {/* RECENT REVIEWS SECTION */}
// //             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
// //               <div className="flex justify-between items-center mb-6">
// //                 <h3 className="text-xl font-bold text-[#A61E30]">Recent Reviews</h3>
// //                 <button 
// //                   onClick={() => setIsModalOpen(true)} 
// //                   className="text-xs font-bold text-[#A61E30] bg-red-50 hover:bg-red-100 px-4 py-2 rounded-full transition-all"
// //                 >
// //                   View All Reviews
// //                 </button>
// //               </div>
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                 {recentReviews.length > 0 ? recentReviews.slice(0, 4).map((review, index) => (
// //                   <div key={index} className="p-4 rounded-xl border border-gray-50 bg-gray-50/30">
// //                     <ReviewItem {...review} />
// //                   </div>
// //                 )) : <p className="col-span-2 text-gray-400 text-center py-6">No feedback submitted yet.</p>}
// //               </div>
// //             </div>
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }





// import React, { useState, useEffect, useMemo } from "react";
// import { FiSearch, FiX, FiMessageSquare, FiUserCheck, FiSlash } from "react-icons/fi"; 
// import { FaStar } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { getAllOrders, getOrderById } from "../api/apiServices"; // Removed getCustomerById

// /* ===========================
//    Reusable Components
//    =========================== */
// const Avatar = ({ src, name, size = "w-10 h-10" }) => {
//   if (src) {
//     return <img src={src} alt={name} className={`${size} rounded-full object-cover flex-shrink-0`} />;
//   }
//   const initials = name ? name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2) : "??";
//   return (
//     <div className={`${size} rounded-full bg-red-100 text-[#A61E30] flex items-center justify-center text-xs font-bold flex-shrink-0 uppercase border border-red-200`}>
//       {initials}
//     </div>
//   );
// };

// const ReviewItem = ({ reviewer, rating, message, avatar }) => (
//   <div className="flex gap-3 border-b border-gray-50 pb-3 last:border-0">
//     <Avatar src={avatar} name={reviewer} />
//     <div className="flex-1 min-w-0">
//       <p className="text-sm font-semibold text-gray-800">{reviewer}</p>
//       <div className="flex text-orange-400 text-xs">
//         {[...Array(5)].map((_, i) => (
//           <FaStar key={i} className={i < (rating || 5) ? "fill-current" : "text-gray-200"} />
//         ))}
//       </div>
//       <p className="text-xs text-gray-500 mt-1 leading-relaxed">{message}</p>
//     </div>
//   </div>
// );

// /* ===========================
//    Review Modal
//    =========================== */
// const ReviewsModal = ({ isOpen, onClose, reviews, customerName }) => {
//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
//       <div className="bg-white rounded-2xl w-full max-w-lg max-h-[85vh] flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200">
//         <div className="p-5 border-b flex justify-between items-center">
//           <div>
//             <h3 className="text-xl font-bold text-[#A61E30]">All Reviews</h3>
//             <p className="text-sm text-gray-500">{customerName}</p>
//           </div>
//           <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//             <FiX className="text-2xl text-gray-400" />
//           </button>
//         </div>
//         <div className="p-5 overflow-y-auto space-y-4">
//           {reviews && reviews.length > 0 ? (
//             reviews.map((rev, i) => <ReviewItem key={i} {...rev} />)
//           ) : (
//             <div className="text-center py-20 text-gray-400">No reviews found for this user.</div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ===========================
//    Main Component
//    =========================== */
// export default function CustomerPage() {
//   const navigate = useNavigate();
//   const [customers, setCustomers] = useState([]);
//   const [allOrders, setAllOrders] = useState([]); // Store all orders for filtering
//   const [selectedCustomerId, setSelectedCustomerId] = useState(null);
//   const [customerDetails, setCustomerDetails] = useState(null);
//   const [sidebarLoading, setSidebarLoading] = useState(true);
//   const [detailsLoading, setDetailsLoading] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");

//   const fetchSidebarFromOrders = async () => {
//     setSidebarLoading(true);
//     try {
//       const response = await getAllOrders();
//       const ordersList = response?.data?.orders || [];
//       setAllOrders(ordersList);
      
//       if (ordersList.length > 0) {
//         const uniqueMap = new Map();

//         ordersList.forEach((o) => {
//           const customerName = o.customer?.name || "Unknown Customer";
//           // We group by Name since ID isn't in the customer object of the list
//           if (!uniqueMap.has(customerName)) {
//             uniqueMap.set(customerName, {
//               id: customerName,
//               actualOrderId: o.id, // We use an order ID to fetch details
//               name: customerName,
//               order_id: o.order_id,
//               status: "Active" 
//             });
//           }
//         });

//         const formatted = Array.from(uniqueMap.values());
//         setCustomers(formatted);

//         if (formatted.length > 0 && !selectedCustomerId) {
//           setSelectedCustomerId(formatted[0].id);
//         }
//       }
//     } catch (err) {
//       console.error("Sidebar Sync Error:", err);
//     } finally {
//       setSidebarLoading(false);
//     }
//   };

//   const fetchCustomerDetails = async (customerName) => {
//     setDetailsLoading(true);
//     try {
//       // 1. Find an order ID associated with this customer name from our list
//       const customerRecord = customers.find(c => c.name === customerName);
//       if (!customerRecord) return;

//       // 2. Fetch specific order details to get "Profile" info (phone, address)
//       const response = await getOrderById(customerRecord.actualOrderId);
//       const orderData = response?.data;

//       // 3. Filter allOrders to find "Recent Orders" by this specific customer
//       const customerOrders = allOrders
//         .filter(o => o.customer.name === customerName)
//         .map(o => ({
//             order_id: o.order_id,
//             total: o.total,
//             date: o.date,
//             item: o.status // Using status as a placeholder since list doesn't have items
//         }));

//       // 4. Construct a fake "Customer Profile" from the order data
//       if (orderData) {
//         setCustomerDetails({
//           profile: {
//             name: orderData.customer.name,
//             location: orderData.customer.address,
//             email: "N/A",
//             phone: orderData.customer.phone,
//             customer_since: orderData.created_at.split(' ')[0]
//           },
//           stats: {
//             total_orders: customerOrders.length,
//             pending_orders: customerOrders.filter(o => o.item !== "Paid").length,
//             completion_rate: "100%"
//           },
//           recent_orders: customerOrders,
//           recent_reviews: [] // Orders endpoint doesn't provide reviews
//         });
//       }
//     } catch (err) {
//       console.error("Details Fetch Error:", err);
//     } finally {
//       setDetailsLoading(false);
//     }
//   };

//   useEffect(() => { fetchSidebarFromOrders(); }, []);
  
//   useEffect(() => { 
//     if (selectedCustomerId && customers.length > 0) {
//         fetchCustomerDetails(selectedCustomerId); 
//     }
//   }, [selectedCustomerId, customers]);

//   const filteredCustomers = useMemo(() => {
//     return customers
//       .filter((c) => (activeFilter === "All" ? true : c.status === activeFilter))
//       .filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
//   }, [customers, activeFilter, searchTerm]);

//   const profile = customerDetails?.profile || { name: "Select a customer", location: "N/A", email: "N/A", phone: "N/A", customer_since: "N/A" };
//   const stats = customerDetails?.stats || { total_orders: 0, pending_orders: 0, completion_rate: "0%" };
//   const recentOrders = customerDetails?.recent_orders || [];
//   const recentReviews = customerDetails?.recent_reviews || [];

//   return (
//     <div className="flex min-h-screen bg-[#F6F1E8]">
//       <ReviewsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} reviews={recentReviews} customerName={profile.name} />

//       {/* SIDEBAR */}
//       <div className="w-[300px] mt-14 bg-[#F9F9F9] p-5 border-r flex flex-col shrink-0">
//         <h1 className="text-lg font-semibold text-gray-800 mb-4 font-roboto">Customers</h1>
//         <div className="relative mb-5">
//           <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//           <input
//             placeholder="Search customer..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-10 pr-4 py-2 w-full bg-white text-sm border shadow-sm rounded-[40px] focus:outline-none focus:ring-1 focus:ring-[#A61E30]"
//           />
//         </div>
        
//         <div className="flex mb-4 rounded-[12px] bg-gray-100 p-1">
//           {["All", "Active"].map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setActiveFilter(filter)}
//               className={`px-5 py-1 text-xs rounded-[6px] flex-1 transition-all ${activeFilter === filter ? "bg-[#A61E30] text-white shadow-sm" : "text-gray-600"}`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>

//         <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-220px)] pr-2 custom-scrollbar">
//           {sidebarLoading ? (
//             <p className="text-gray-400 text-xs text-center py-4">Syncing customers...</p>
//           ) : (
//             filteredCustomers.map((customer) => (
//               <div 
//                 key={customer.id} 
//                 onClick={() => setSelectedCustomerId(customer.id)} 
//                 className={`flex items-center gap-3 p-3 rounded-[12px] cursor-pointer relative bg-white shadow-sm border transition-all ${customer.id === selectedCustomerId ? "border-[#A61E30] ring-1 ring-[#A61E30]/10" : "border-transparent"}`}
//               >
//                 <Avatar name={customer.name} />
//                 <div className="min-w-0 flex-1">
//                   <p className="text-sm font-semibold text-gray-800 truncate">{customer.name}</p>
//                   <p className="text-[10px] text-gray-400 uppercase tracking-wider">{customer.order_id}</p>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="flex-1 p-8 mt-10 space-y-6 overflow-y-auto">
//         {detailsLoading ? (
//           <div className="flex items-center justify-center h-full text-[#A61E30] animate-pulse">Loading Customer Data...</div>
//         ) : (
//           <>
//             <div className="bg-white rounded-[16px] p-6 flex flex-wrap justify-between items-center gap-6 shadow-sm border border-white">
//               <div className="flex items-center gap-5 min-w-0">
//                 <Avatar name={profile.name} size="w-20 h-20" />
//                 <div className="min-w-0">
//                   <h2 className="font-bold text-2xl text-gray-800 truncate">{profile.name}</h2>
//                   <p className="text-sm text-gray-500 mb-1">{profile.location} • Joined {profile.customer_since}</p>
//                   <p className="text-xs text-gray-400 truncate">{profile.phone}</p>
//                 </div>
//               </div>
              
//               <div className="flex items-center gap-3 shrink-0">
//                 <button className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"><FiUserCheck /></button>
//                 <button className="flex items-center justify-center w-10 h-10 bg-red-50 text-red-500 rounded-full hover:bg-red-100 transition-colors"><FiSlash /></button>
//                 <button onClick={() => navigate("/dashboard/notifications")} className="bg-[#A61E30] text-white rounded-[12px] h-[44px] px-6 text-sm font-medium flex items-center gap-2"><FiMessageSquare /> Send Message</button>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//               {[
//                 { label: "Total Orders", value: stats.total_orders, color: "text-gray-800" },
//                 { label: "Pending Orders", value: stats.pending_orders, color: "text-orange-500" },
//                 { label: "Completion Rate", value: stats.completion_rate, color: "text-green-600" }
//               ].map((stat, i) => (
//                 <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
//                   <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
//                   <h3 className={`text-2xl font-black ${stat.color}`}>{stat.value}</h3>
//                 </div>
//               ))}
//             </div>

//             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//               <h3 className="text-xl font-bold text-[#A61E30] mb-5">Recent Orders</h3>
//               <div className="overflow-x-auto">
//                 <table className="w-full text-sm">
//                   <thead>
//                     <tr className="text-gray-400 text-left border-b border-gray-50">
//                       <th className="px-4 py-3 font-medium">ORDER ID</th>
//                       <th className="px-4 py-3 font-medium">STATUS</th>
//                       <th className="px-4 py-3 font-medium">AMOUNT</th>
//                       <th className="px-4 py-3 font-medium">DATE</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-50">
//                     {recentOrders.map((order, i) => (
//                       <tr key={i} className="hover:bg-gray-50/50 transition-colors">
//                         <td className="px-4 py-4 font-mono text-xs text-gray-600">{order.order_id}</td>
//                         <td className="px-4 py-4 text-gray-800 font-medium">{order.item}</td>
//                         <td className="px-4 py-4 text-gray-800 font-bold">₦{order.total}</td>
//                         <td className="px-4 py-4 text-gray-500 text-xs">{order.date}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// // }








// import React, { useState, useEffect, useMemo } from "react";
// import { FiSearch, FiX, FiMessageSquare, FiUserCheck, FiSlash } from "react-icons/fi"; 
// import { FaStar } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { getAllOrders, getOrderById, getCustomerById } from "../api/apiServices"; 

// /* ===========================
//    Reusable Components
//    =========================== */
// const Avatar = ({ src, name, size = "w-10 h-10" }) => {
//   if (src) {
//     return <img src={src} alt={name} className={`${size} rounded-full object-cover flex-shrink-0`} />;
//   }
//   const initials = name ? name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2) : "??";
//   return (
//     <div className={`${size} rounded-full bg-red-100 text-[#A61E30] flex items-center justify-center text-xs font-bold flex-shrink-0 uppercase border border-red-200`}>
//       {initials}
//     </div>
//   );
// };

// const ReviewItem = ({ reviewer, rating, message, avatar }) => (
//   <div className="flex gap-3 border-b border-gray-50 pb-3 last:border-0">
//     <Avatar src={avatar} name={reviewer} />
//     <div className="flex-1 min-w-0">
//       <p className="text-sm font-semibold text-gray-800">{reviewer}</p>
//       <div className="flex text-orange-400 text-xs">
//         {[...Array(5)].map((_, i) => (
//           <FaStar key={i} className={i < (rating || 5) ? "fill-current" : "text-gray-200"} />
//         ))}
//       </div>
//       <p className="text-xs text-gray-500 mt-1 leading-relaxed">{message}</p>
//     </div>
//   </div>
// );

// /* ===========================
//    Review Modal
//    =========================== */
// const ReviewsModal = ({ isOpen, onClose, reviews, customerName }) => {
//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
//       <div className="bg-white rounded-2xl w-full max-w-lg max-h-[85vh] flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200">
//         <div className="p-5 border-b flex justify-between items-center">
//           <div>
//             <h3 className="text-xl font-bold text-[#A61E30]">All Reviews</h3>
//             <p className="text-sm text-gray-500">{customerName}</p>
//           </div>
//           <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//             <FiX className="text-2xl text-gray-400" />
//           </button>
//         </div>
//         <div className="p-5 overflow-y-auto space-y-4">
//           {reviews && reviews.length > 0 ? (
//             reviews.map((rev, i) => <ReviewItem key={i} {...rev} />)
//           ) : (
//             <div className="text-center py-20 text-gray-400">No reviews found for this user.</div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ===========================
//    Main Component
//    =========================== */
// export default function CustomerPage() {
//   const navigate = useNavigate();
//   const [customers, setCustomers] = useState([]);
//   const [allOrders, setAllOrders] = useState([]);
//   const [selectedCustomerId, setSelectedCustomerId] = useState(null);
//   const [customerDetails, setCustomerDetails] = useState(null);
//   const [sidebarLoading, setSidebarLoading] = useState(true);
//   const [detailsLoading, setDetailsLoading] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");

//   const fetchSidebarFromOrders = async () => {
//     setSidebarLoading(true);
//     try {
//       const response = await getAllOrders();
//       const ordersList = response?.data?.orders || [];
//       setAllOrders(ordersList);
      
//       if (ordersList.length > 0) {
//         const uniqueMap = new Map();
//         ordersList.forEach((o) => {
//           const customerName = o.customer?.name || "Unknown Customer";
//           if (!uniqueMap.has(customerName)) {
//             uniqueMap.set(customerName, {
//               id: customerName,
//               actualOrderId: o.id,
//               name: customerName,
//               order_id: o.order_id,
//               status: "Active" 
//             });
//           }
//         });
//         const formatted = Array.from(uniqueMap.values());
//         setCustomers(formatted);
//         if (formatted.length > 0 && !selectedCustomerId) {
//           setSelectedCustomerId(formatted[0].id);
//         }
//       }
//     } catch (err) {
//       console.error("Sidebar Sync Error:", err);
//     } finally {
//       setSidebarLoading(false);
//     }
//   };

//   const fetchCustomerDetails = async (customerName) => {
//     setDetailsLoading(true);
//     try {
//       const customerRecord = customers.find(c => c.name === customerName);
//       if (!customerRecord) return;

//       // Parallel requests: Get order data for profile AND customer data for reviews
//       const [orderRes, customerRes] = await Promise.allSettled([
//         getOrderById(customerRecord.actualOrderId),
//         getCustomerById(customerRecord.actualOrderId) // Using order ID as fallback if customer ID is same
//       ]);

//       const orderData = orderRes.status === "fulfilled" ? orderRes.value?.data : null;
//       const customerData = customerRes.status === "fulfilled" ? customerRes.value?.data : null;

//       const customerOrders = allOrders
//         .filter(o => o.customer.name === customerName)
//         .map(o => ({
//             order_id: o.order_id,
//             total: o.total,
//             date: o.date,
//             item: o.status
//         }));

//       if (orderData) {
//         setCustomerDetails({
//           profile: {
//             name: orderData.customer.name,
//             location: orderData.customer.address,
//             email: customerData?.profile?.email || "N/A",
//             phone: orderData.customer.phone,
//             customer_since: orderData.created_at.split(' ')[0],
//             avatar: customerData?.profile?.avatar || null
//           },
//           stats: {
//             total_orders: customerOrders.length,
//             pending_orders: customerOrders.filter(o => o.item !== "Paid").length,
//             completion_rate: "100%"
//           },
//           recent_orders: customerOrders,
//           recent_reviews: customerData?.recent_reviews || [] // Reviews from customer endpoint
//         });
//       }
//     } catch (err) {
//       console.error("Details Fetch Error:", err);
//     } finally {
//       setDetailsLoading(false);
//     }
//   };

//   useEffect(() => { fetchSidebarFromOrders(); }, []);
  
//   useEffect(() => { 
//     if (selectedCustomerId && customers.length > 0) {
//         fetchCustomerDetails(selectedCustomerId); 
//     }
//   }, [selectedCustomerId, customers]);

//   const filteredCustomers = useMemo(() => {
//     return customers
//       .filter((c) => (activeFilter === "All" ? true : c.status === activeFilter))
//       .filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
//   }, [customers, activeFilter, searchTerm]);

//   const profile = customerDetails?.profile || { name: "Select a customer", location: "N/A", email: "N/A", phone: "N/A", customer_since: "N/A" };
//   const stats = customerDetails?.stats || { total_orders: 0, pending_orders: 0, completion_rate: "0%" };
//   const recentOrders = customerDetails?.recent_orders || [];
//   const recentReviews = customerDetails?.recent_reviews || [];

//   return (
//     <div className="flex min-h-screen bg-[#F6F1E8]">
//       <ReviewsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} reviews={recentReviews} customerName={profile.name} />

//       {/* SIDEBAR */}
//       <div className="w-[300px] mt-14 bg-[#F9F9F9] p-5 border-r flex flex-col shrink-0">
//         <h1 className="text-lg font-semibold text-gray-800 mb-4 font-roboto">Customers</h1>
//         <div className="relative mb-5">
//           <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//           <input
//             placeholder="Search customer..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-10 pr-4 py-2 w-full bg-white text-sm border shadow-sm rounded-[40px] focus:outline-none focus:ring-1 focus:ring-[#A61E30]"
//           />
//         </div>
        
//         <div className="flex mb-4 rounded-[12px] bg-gray-100 p-1">
//           {["All", "Active"].map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setActiveFilter(filter)}
//               className={`px-5 py-1 text-xs rounded-[6px] flex-1 transition-all ${activeFilter === filter ? "bg-[#A61E30] text-white shadow-sm" : "text-gray-600"}`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>

//         <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-220px)] pr-2 custom-scrollbar">
//           {sidebarLoading ? (
//             <p className="text-gray-400 text-xs text-center py-4">Syncing customers...</p>
//           ) : (
//             filteredCustomers.map((customer) => (
//               <div 
//                 key={customer.id} 
//                 onClick={() => setSelectedCustomerId(customer.id)} 
//                 className={`flex items-center gap-3 p-3 rounded-[12px] cursor-pointer relative bg-white shadow-sm border transition-all ${customer.id === selectedCustomerId ? "border-[#A61E30] ring-1 ring-[#A61E30]/10" : "border-transparent"}`}
//               >
//                 <Avatar name={customer.name} />
//                 <div className="min-w-0 flex-1">
//                   <p className="text-sm font-semibold text-gray-800 truncate">{customer.name}</p>
//                   <p className="text-[10px] text-gray-400 uppercase tracking-wider">{customer.order_id}</p>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="flex-1 p-8 mt-10 space-y-6 overflow-y-auto">
//         {detailsLoading ? (
//           <div className="flex items-center justify-center h-full text-[#A61E30] animate-pulse">Loading Customer Data...</div>
//         ) : (
//           <>
//             {/* PROFILE CARD */}
//             <div className="bg-white rounded-[16px] p-6 flex flex-wrap justify-between items-center gap-6 shadow-sm border border-white">
//               <div className="flex items-center gap-5 min-w-0">
//                 <Avatar src={profile.avatar} name={profile.name} size="w-20 h-20" />
//                 <div className="min-w-0">
//                   <h2 className="font-bold text-2xl text-gray-800 truncate">{profile.name}</h2>
//                   <p className="text-sm text-gray-500 mb-1">{profile.location} • Joined {profile.customer_since}</p>
//                   <p className="text-xs text-gray-400 truncate">{profile.phone}</p>
//                 </div>
//               </div>
              
//               <div className="flex items-center gap-3 shrink-0">
//                 <button className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"><FiUserCheck /></button>
//                 <button className="flex items-center justify-center w-10 h-10 bg-red-50 text-red-500 rounded-full hover:bg-red-100 transition-colors"><FiSlash /></button>
//                 <button onClick={() => navigate("/dashboard/notifications")} className="bg-[#A61E30] text-white rounded-[12px] h-[44px] px-6 text-sm font-medium flex items-center gap-2"><FiMessageSquare /> Send Message</button>
//               </div>
//             </div>

//             {/* STATS */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//               {[
//                 { label: "Total Orders", value: stats.total_orders, color: "text-gray-800" },
//                 { label: "Pending Orders", value: stats.pending_orders, color: "text-orange-500" },
//                 { label: "Completion Rate", value: stats.completion_rate, color: "text-green-600" }
//               ].map((stat, i) => (
//                 <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
//                   <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
//                   <h3 className={`text-2xl font-black ${stat.color}`}>{stat.value}</h3>
//                 </div>
//               ))}
//             </div>

//             {/* RECENT ORDERS */}
//             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//               <h3 className="text-xl font-bold text-[#A61E30] mb-5">Recent Orders</h3>
//               <div className="overflow-x-auto">
//                 <table className="w-full text-sm">
//                   <thead>
//                     <tr className="text-gray-400 text-left border-b border-gray-50">
//                       <th className="px-4 py-3 font-medium">ORDER ID</th>
//                       <th className="px-4 py-3 font-medium">STATUS</th>
//                       <th className="px-4 py-3 font-medium">AMOUNT</th>
//                       <th className="px-4 py-3 font-medium">DATE</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-50">
//                     {recentOrders.map((order, i) => (
//                       <tr key={i} className="hover:bg-gray-50/50 transition-colors">
//                         <td className="px-4 py-4 font-mono text-xs text-gray-600">{order.order_id}</td>
//                         <td className="px-4 py-4 text-gray-800 font-medium">{order.item}</td>
//                         <td className="px-4 py-4 text-gray-800 font-bold">₦{order.total}</td>
//                         <td className="px-4 py-4 text-gray-500 text-xs">{order.date}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* RECENT REVIEWS SECTION (ADDED BACK) */}
//             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className="text-xl font-bold text-[#A61E30]">Recent Reviews</h3>
//                 <button 
//                   onClick={() => setIsModalOpen(true)} 
//                   className="text-xs font-bold text-[#A61E30] bg-red-50 hover:bg-red-100 px-4 py-2 rounded-full transition-all"
//                 >
//                   View All Reviews
//                 </button>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {recentReviews.length > 0 ? recentReviews.slice(0, 4).map((review, index) => (
//                   <div key={index} className="p-4 rounded-xl border border-gray-50 bg-gray-50/30">
//                     <ReviewItem {...review} />
//                   </div>
//                 )) : <p className="col-span-2 text-gray-400 text-center py-6">No feedback submitted yet.</p>}
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }





import React, { useState, useEffect, useMemo } from "react";
import { FiSearch, FiX, FiMessageSquare, FiUserCheck, FiSlash } from "react-icons/fi"; 
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getAllOrders, getOrderById, getCustomerById } from "../api/apiServices"; 

/* ===========================
   Reusable Components
   =========================== */
const Avatar = ({ src, name, size = "w-10 h-10" }) => {
  if (src) {
    return <img src={src} alt={name} className={`${size} rounded-full object-cover flex-shrink-0`} />;
  }
  const initials = name ? name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2) : "??";
  return (
    <div className={`${size} rounded-full bg-red-100 text-[#A61E30] flex items-center justify-center text-xs font-bold flex-shrink-0 uppercase border border-red-200`}>
      {initials}
    </div>
  );
};

const ReviewItem = ({ reviewer, rating, message, avatar }) => (
  <div className="flex gap-3 border-b border-gray-50 pb-3 last:border-0">
    <Avatar src={avatar} name={reviewer} />
    <div className="flex-1 min-w-0">
      <p className="text-sm font-semibold text-gray-800">{reviewer}</p>
      <div className="flex text-orange-400 text-xs">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={i < (rating || 5) ? "fill-current" : "text-gray-200"} />
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-1 leading-relaxed">{message}</p>
    </div>
  </div>
);

/* ===========================
   Review Modal
   =========================== */
const ReviewsModal = ({ isOpen, onClose, reviews, customerName }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg max-h-[85vh] flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="p-5 border-b flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-[#A61E30]">All Reviews</h3>
            <p className="text-sm text-gray-500">{customerName}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <FiX className="text-2xl text-gray-400" />
          </button>
        </div>
        <div className="p-5 overflow-y-auto space-y-4">
          {reviews && reviews.length > 0 ? (
            reviews.map((rev, i) => <ReviewItem key={i} {...rev} />)
          ) : (
            <div className="text-center py-20 text-gray-400">No reviews found for this user.</div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ===========================
   Main Component
   =========================== */
export default function CustomerPage() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [customerDetails, setCustomerDetails] = useState(null);
  const [sidebarLoading, setSidebarLoading] = useState(true);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchSidebarFromOrders = async () => {
    setSidebarLoading(true);
    try {
      const response = await getAllOrders();
      const ordersList = response?.data?.orders || [];
      setAllOrders(ordersList);
      
      if (ordersList.length > 0) {
        const uniqueMap = new Map();
        ordersList.forEach((o) => {
          const customerName = o.customer?.name || "Unknown Customer";
          // Logic for 'Active' status: if they have any order that isn't Delivered/Cancelled
          const isActive = o.status !== "Delivered" && o.status !== "Cancelled";
          
          if (!uniqueMap.has(customerName)) {
            uniqueMap.set(customerName, {
              id: customerName,
              actualOrderId: o.id,
              name: customerName,
              order_id: o.order_id,
              status: isActive ? "Active" : "Inactive" 
            });
          } else if (isActive) {
            // If we find an active order for an existing map entry, ensure it's marked Active
            uniqueMap.get(customerName).status = "Active";
          }
        });
        const formatted = Array.from(uniqueMap.values());
        setCustomers(formatted);
        if (formatted.length > 0 && !selectedCustomerId) {
          setSelectedCustomerId(formatted[0].id);
        }
      }
    } catch (err) {
      console.error("Sidebar Sync Error:", err);
    } finally {
      setSidebarLoading(false);
    }
  };

  const fetchCustomerDetails = async (customerName) => {
    setDetailsLoading(true);
    try {
      const customerRecord = customers.find(c => c.name === customerName);
      if (!customerRecord) return;

      const [orderRes, customerRes] = await Promise.allSettled([
        getOrderById(customerRecord.actualOrderId),
        getCustomerById(customerRecord.actualOrderId)
      ]);

      const orderData = orderRes.status === "fulfilled" ? orderRes.value?.data : null;
      const customerData = customerRes.status === "fulfilled" ? customerRes.value?.data : null;

      const customerOrders = allOrders
        .filter(o => o.customer.name === customerName)
        .map(o => ({
            order_id: o.order_id,
            total: o.total,
            date: o.date,
            item: o.status
        }));

      if (orderData) {
        setCustomerDetails({
          profile: {
            name: orderData.customer.name,
            location: orderData.customer.address,
            email: customerData?.profile?.email || "N/A",
            phone: orderData.customer.phone,
            customer_since: orderData.created_at?.split(' ')[0] || "N/A",
            avatar: customerData?.profile?.avatar || null
          },
          stats: {
            total_orders: customerOrders.length,
            pending_orders: customerOrders.filter(o => o.item !== "Delivered").length,
            completion_rate: "100%"
          },
          recent_orders: customerOrders,
          recent_reviews: customerData?.recent_reviews || [] 
        });
      }
    } catch (err) {
      console.error("Details Fetch Error:", err);
    } finally {
      setDetailsLoading(false);
    }
  };

  useEffect(() => { fetchSidebarFromOrders(); }, []);
  
  useEffect(() => { 
    if (selectedCustomerId && customers.length > 0) {
        fetchCustomerDetails(selectedCustomerId); 
    }
  }, [selectedCustomerId, customers]);

  const filteredCustomers = useMemo(() => {
    return customers
      .filter((c) => (activeFilter === "All" ? true : c.status === activeFilter))
      .filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [customers, activeFilter, searchTerm]);

  const profile = customerDetails?.profile || { name: "Select a customer", location: "N/A", email: "N/A", phone: "N/A", customer_since: "N/A" };
  const stats = customerDetails?.stats || { total_orders: 0, pending_orders: 0, completion_rate: "0%" };
  const recentOrders = customerDetails?.recent_orders || [];
  const recentReviews = customerDetails?.recent_reviews || [];

  return (
    <div className="flex min-h-screen bg-[#F6F1E8]">
      <ReviewsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} reviews={recentReviews} customerName={profile.name} />

      {/* SIDEBAR */}
      <div className="w-[300px] mt-14 bg-[#F9F9F9] p-5 border-r flex flex-col shrink-0">
        <h1 className="text-lg font-semibold text-gray-800 mb-4 font-roboto">Customers</h1>
        <div className="relative mb-5">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            placeholder="Search customer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full bg-white text-sm border shadow-sm rounded-[40px] focus:outline-none focus:ring-1 focus:ring-[#A61E30]"
          />
        </div>
        
        {/* Working Filter Toggle */}
        <div className="flex mb-4 rounded-[12px] bg-gray-100 p-1">
          {["All", "Active"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-1 text-xs font-bold rounded-[6px] flex-1 transition-all ${activeFilter === filter ? "bg-[#A61E30] text-white shadow-sm" : "text-gray-600 hover:text-gray-800"}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-220px)] pr-2 custom-scrollbar">
          {sidebarLoading ? (
            <p className="text-gray-400 text-xs text-center py-4">Syncing customers...</p>
          ) : (
            filteredCustomers.map((customer) => (
              <div 
                key={customer.id} 
                onClick={() => setSelectedCustomerId(customer.id)} 
                className={`flex items-center gap-3 p-3 rounded-[12px] cursor-pointer relative bg-white shadow-sm border transition-all overflow-hidden ${customer.id === selectedCustomerId ? "border-[#A61E30] ring-1 ring-[#A61E30]/10" : "border-transparent"}`}
              >
                {/* VERTICAL LEFT SIDE LINE */}
                {customer.id === selectedCustomerId && (
                    <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#A61E30]" />
                )}

                <Avatar name={customer.name} />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-gray-800 truncate">{customer.name}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">{customer.order_id}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8 mt-10 space-y-6 overflow-y-auto">
        {detailsLoading ? (
          <div className="flex items-center justify-center h-full text-[#A61E30] animate-pulse">Loading Customer Data...</div>
        ) : (
          <>
            {/* PROFILE CARD */}
            <div className="bg-white rounded-[16px] p-6 flex flex-wrap justify-between items-center gap-6 shadow-sm border border-white">
              <div className="flex items-center gap-5 min-w-0">
                <Avatar src={profile.avatar} name={profile.name} size="w-20 h-20" />
                <div className="min-w-0">
                  <h2 className="font-bold text-2xl text-gray-800 truncate">{profile.name}</h2>
                  <p className="text-sm text-gray-500 mb-1">{profile.location} • Joined {profile.customer_since}</p>
                  <p className="text-xs text-gray-400 truncate">{profile.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 shrink-0">
                <button className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"><FiUserCheck /></button>
                <button className="flex items-center justify-center w-10 h-10 bg-red-50 text-red-500 rounded-full hover:bg-red-100 transition-colors"><FiSlash /></button>
                <button onClick={() => navigate("/dashboard/notifications")} className="bg-[#A61E30] text-white rounded-[12px] h-[44px] px-6 text-sm font-medium flex items-center gap-2 transition-transform active:scale-95"><FiMessageSquare /> Send Message</button>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: "Total Orders", value: stats.total_orders, color: "text-gray-800" },
                { label: "Pending Orders", value: stats.pending_orders, color: "text-orange-500" },
                { label: "Completion Rate", value: stats.completion_rate, color: "text-green-600" }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                  <h3 className={`text-2xl font-black ${stat.color}`}>{stat.value}</h3>
                </div>
              ))}
            </div>

            {/* RECENT ORDERS */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-[#A61E30] mb-5">Recent Orders</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-400 text-left border-b border-gray-50">
                      <th className="px-4 py-3 font-medium">ORDER ID</th>
                      <th className="px-4 py-3 font-medium">STATUS</th>
                      <th className="px-4 py-3 font-medium">AMOUNT</th>
                      <th className="px-4 py-3 font-medium">DATE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {recentOrders.map((order, i) => (
                      <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-4 py-4 font-mono text-xs text-gray-600">{order.order_id}</td>
                        <td className="px-4 py-4 text-gray-800 font-medium">{order.item}</td>
                        <td className="px-4 py-4 text-gray-800 font-bold">₦{order.total}</td>
                        <td className="px-4 py-4 text-gray-500 text-xs">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* RECENT REVIEWS SECTION */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-[#A61E30]">Recent Reviews</h3>
                <button 
                  onClick={() => setIsModalOpen(true)} 
                  className="text-xs font-bold text-[#A61E30] bg-red-50 hover:bg-red-100 px-4 py-2 rounded-full transition-all"
                >
                  View All Reviews
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentReviews.length > 0 ? recentReviews.slice(0, 4).map((review, index) => (
                  <div key={index} className="p-4 rounded-xl border border-gray-50 bg-gray-50/30">
                    <ReviewItem {...review} />
                  </div>
                )) : <p className="col-span-2 text-gray-400 text-center py-6">No feedback submitted yet.</p>}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}