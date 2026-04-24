



import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  UtensilsCrossed,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import { IoPersonSharp } from "react-icons/io5";
import { useAuth } from "../../context/AuthContext";

import logo1 from "../../assets/logo.png";
import bglogo from "../../assets/sidimg.png";

const sidebarBg = bglogo;

export default function Sidebar({ mobile = false }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  // 🔐 Role-aware navigation (Matching the key saved during login)
  const userRole = localStorage.getItem("role")?.toLowerCase();

  const navItems = [
    {
      to: "/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      end: true,
    },
    // Only show Admin Permission/Dashboard if superadmin
    ...(userRole === "superadmin"
      ? [
          {
            to: "/dashboard/admin",
            label: "Admin Permissions",
            icon: IoPersonSharp,
          },
        ]
      : []),
    {
      to: "/dashboard/orders",
      label: "Orders",
      icon: ShoppingCart,
    },
    {
      to: "/dashboard/menu",
      label: "Menu Management",
      icon: UtensilsCrossed,
    },
    {
      to: "/dashboard/customers",
      label: "Customers",
      icon: Users,
    },
    {
      to: "/dashboard/analytics",
      label: "Analytics",
      icon: BarChart3,
    },
  ];

  const handleLogout = async () => {
    await logout();
    localStorage.clear(); // Clear all user data on logout
    navigate("/login");
  };

  const baseClasses = mobile
    ? "flex flex-col h-full p-6 relative overflow-hidden"
    : "flex flex-col h-screen p-6 relative overflow-hidden";

  return (
    <aside className={`${baseClasses}`}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${sidebarBg})` }}
      >
        <div className="absolute inset-0 bg-[#A61E30]/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full text-white">
        {/* Logo */}
        <div className="mb-8 flex justify-center items-center">
          <img
            src={logo1}
            alt="Logo"
            className="h-40 w-40 object-contain"
          />
        </div>

        <hr className="mb-4 border-white/20" />

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-200 text-[14px] font-semibold backdrop-blur-[2px] ${
                  isActive
                    ? "bg-[#EBDAA3] text-[#A61E30] shadow-lg shadow-black/30"
                    : "text-[#FFFF] hover:bg-white/10 hover:text-[#A61E30]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="bg-[#F6E9EA] p-1 rounded-[10px] text-[#A61E30]">
                    <item.icon
                      size={20}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                  </div>

                  <span className="text-white">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Footer Buttons */}
        <div className="pt-6 mt-auto border-t border-white/10 space-y-1">
          {/* Only show Settings for superadmin */}
          {userRole === "superadmin" && (
            <FooterButton
              icon={Settings}
              label="Settings"
              onClick={() => navigate("/dashboard/settings")}
            />
          )}

          <FooterButton
            icon={LogOut}
            label="Logout"
            onClick={handleLogout}
          />
        </div>
      </div>
    </aside>
  );
}

function FooterButton({ icon: Icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3.5 px-4 py-3 w-full text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all text-[14px] font-semibold backdrop-blur-[2px]"
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );
}