





import React, { useState, useEffect, useMemo } from "react";
import { FiSearch, FiX, FiMessageSquare, FiUserCheck, FiSlash } from "react-icons/fi"; 
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// Assuming you updated your apiServices to include getAdminCustomers
import { getAdminCustomers } from "../api/apiServices"; 

/* ===========================
    Styles & Mapping Logic
   =========================== */
const statusStyles = {
  "Order Received": "bg-blue-100 text-blue-700 border-blue-200",
  "Preparing Food": "bg-purple-100 text-purple-700 border-purple-200",
  "Ready to Pickup": "bg-yellow-100 text-yellow-800 border-yellow-200",
  "Out for Delivery": "bg-orange-100 text-orange-700 border-orange-200",
  "Delivered": "bg-green-100 text-green-700 border-green-200",
};

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
      <p className="text-sm font-semibold text-gray-800">{reviewer || "Anonymous"}</p>
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
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [sidebarLoading, setSidebarLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch all customers from the NEW endpoint
  const fetchSidebarData = async () => {
    setSidebarLoading(true);
    try {
      const response = await getAdminCustomers();
      const customersList = response?.data?.customers || [];
      
      if (customersList.length > 0) {
        const formatted = customersList.map((c) => ({
          id: c.id,
          name: c.profile.name,
          // Extract the latest order ID if available, else N/A
          order_id: c.orders.length > 0 ? c.orders[0].order_id : "NO ORDERS",
          status: c.stats.pending_orders > 0 ? "Active" : "Inactive",
          // Store the full object for easy detail viewing
          fullData: c 
        }));
        setCustomers(formatted);
        if (!selectedCustomerId) {
          setSelectedCustomerId(formatted[0].id);
        }
      }
    } catch (err) {
      console.error("Sidebar Fetch Error:", err);
    } finally {
      setSidebarLoading(false);
    }
  };

  useEffect(() => { fetchSidebarData(); }, []);

  const filteredCustomers = useMemo(() => {
    return customers
      .filter((c) => (activeFilter === "All" ? true : c.status === activeFilter))
      .filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [customers, activeFilter, searchTerm]);

  // Derived state for the details panel based on selected ID
  const customerDetails = useMemo(() => {
    return customers.find(c => c.id === selectedCustomerId)?.fullData;
  }, [selectedCustomerId, customers]);

  /* ===========================
      Safe Data Access
     =========================== */
  const profile = customerDetails?.profile || { 
    name: "Select a customer", 
    location: "N/A", 
    email: "N/A", 
    phone: "N/A", 
    customer_since: "N/A",
    avatar: null 
  };
  
  const stats = customerDetails?.stats || { 
    total_orders: 0, 
    pending_orders: 0, 
    completion_rate: "0%" 
  };
  
  const recentOrders = customerDetails?.orders || [];
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
        {!customerDetails && !sidebarLoading ? (
          <div className="flex items-center justify-center h-full text-gray-400">Select a customer to view details</div>
        ) : (
          <>
            {/* PROFILE CARD */}
            <div className="bg-white rounded-[16px] p-6 flex flex-wrap justify-between items-center gap-6 shadow-sm border border-white">
              <div className="flex items-center gap-5 min-w-0">
                <Avatar src={profile.avatar} name={profile.name} size="w-20 h-20" />
                <div className="min-w-0">
                  <h2 className="font-bold text-2xl text-gray-800 truncate">{profile.name}</h2>
                  <p className="text-sm text-gray-500 mb-1">{profile.location !== "N/A" ? profile.location : "Location not provided"} • Joined {profile.customer_since}</p>
                  <p className="text-xs text-gray-400 truncate">{profile.email} • {profile.phone}</p>
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
                      <th className="px-4 py-3 font-medium">ITEM</th>
                      <th className="px-4 py-3 font-medium">AMOUNT</th>
                      <th className="px-4 py-3 font-medium">DATE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {recentOrders.map((order, i) => (
                      <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-4 py-4 font-mono text-xs text-gray-600">{order.order_id}</td>
                        {/* Mapping items[0].name from the new structure */}
                        <td className="px-4 py-4 capitalize font-medium text-gray-700">
                          {order.items && order.items[0]?.name || "N/A"}
                        </td>
                        <td className="px-4 py-4 text-gray-800 font-bold">₦{order.total}</td>
                        <td className="px-4 py-4 text-gray-500 text-xs">{order.date}</td>
                      </tr>
                    ))}
                    {recentOrders.length === 0 && (
                      <tr>
                        <td colSpan="4" className="text-center py-10 text-gray-400">No recent orders.</td>
                      </tr>
                    )}
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