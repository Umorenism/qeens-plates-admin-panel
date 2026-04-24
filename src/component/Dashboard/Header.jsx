
// src/components/dashboard/Header.jsx
import React, { useState, useEffect, useRef } from "react";
import { Bell, Clock, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getNotifications } from "../../api/apiServices";

export default function Header() {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [notiData, setNotiData] = useState({ unread: 0, list: [] });
  
  // Initialize user with standard data
  const [user, setUser] = useState({ 
    name: "Admin User", 
    role: "Admin", 
    avatar: null 
  });

  // Load User & Notifications
  useEffect(() => {
    // 1. Consistency check: Use the same keys set in loginAdmin
    const storedUser = localStorage.getItem("user");
    const storedRole = localStorage.getItem("role"); // Use 'role', not 'user_type'

    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser({
        name: parsed?.name || "Admin",
        role: storedRole || "Admin", // Fallback to Admin
        avatar: parsed?.avatar || parsed?.profile_picture || null
      });
    }
    
    fetchNoti();
    
    // Auto-refresh notifications every 2 minutes
    const interval = setInterval(fetchNoti, 120000);

    // Close dropdown on click outside
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearInterval(interval);
    };
  }, []);

  const fetchNoti = async () => {
    try {
      const res = await getNotifications();
      if (res.success) {
        setNotiData({
          unread: res.data.unread_count,
          list: res.data.notifications.data.slice(0, 5) // Top 5 for dropdown
        });
      }
    } catch (err) { 
      console.error("Notification fetch failed:", err); 
    }
  };

  const getInitials = (name) => 
    name?.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2) || "AD";

  return (
    <header className="fixed top-0 left-72 right-0 z-40 bg-[#F6E9EA] border-b border-[#E0C0C3] shadow-sm">
      <div className="h-16 lg:h-20 px-6 flex items-center justify-between">
        
        {/* USER INFO */}
        <div className="flex items-center gap-3">
          {user.avatar ? (
            <img 
              src={user.avatar} 
              alt="Profile" 
              className="w-10 h-10 rounded-full object-cover border border-[#E0C0C3]" 
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-[#A61E30] text-white flex items-center justify-center font-semibold text-sm shadow-inner">
              {getInitials(user.name)}
            </div>
          )}
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-[#A61E30] text-[16px]">
              {user.name}
            </span>
            {/* Display Role with conditional styling if Superadmin */}
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md mt-0.5 w-fit ${
              user.role.toLowerCase() === "superadmin" 
                ? "bg-[#A61E30] text-white" 
                : "bg-[#E0C0C3] text-[#6B2C35]"
            }`}>
              {user.role}
            </span>
          </div>
        </div>

        {/* NOTIFICATION SECTION */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl hover:bg-[#E8D3D5] text-[#A61E30] relative transition-all duration-200"
          >
            <Bell size={22} />
            {notiData.unread > 0 && (
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-red-600 text-[9px] text-white flex items-center justify-center rounded-full border-2 border-[#F6E9EA] font-bold">
                {notiData.unread > 9 ? '9+' : notiData.unread}
              </span>
            )}
          </button>

          {/* DROPDOWN */}
          {isOpen && (
            <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2">
              <div className="p-4 border-b bg-[#F9F9F9] flex justify-between items-center">
                <span className="font-bold text-gray-800">Notifications</span>
                {notiData.unread > 0 && (
                  <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold">
                    {notiData.unread} NEW
                  </span>
                )}
              </div>

              <div className="max-h-[350px] overflow-y-auto">
                {notiData.list.length > 0 ? notiData.list.map((n) => (
                  <div 
                    key={n.id} 
                    className="p-4 border-b last:border-0 hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <p className="text-xs font-bold text-gray-800">{n.data.title}</p>
                    <p className="text-[11px] text-gray-500 line-clamp-2 mt-0.5">{n.data.message}</p>
                    <div className="flex items-center gap-1 mt-2 text-[9px] text-gray-400">
                      <Clock size={10} /> 
                      {new Date(n.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                )) : (
                  <div className="p-10 text-center text-gray-400 text-xs flex flex-col items-center gap-2">
                    <Bell size={24} className="opacity-20" />
                    No new notifications
                  </div>
                )}
              </div>

              <button 
                onClick={() => { navigate("/dashboard/notifications"); setIsOpen(false); }}
                className="w-full p-3 bg-gray-50 text-[#A61E30] text-xs font-bold flex items-center justify-center gap-1 hover:bg-gray-100 transition-colors border-t"
              >
                View All Notifications <ChevronRight size={14} />
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}