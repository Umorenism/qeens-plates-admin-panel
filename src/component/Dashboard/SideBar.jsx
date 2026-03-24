



// // src/components/dashboard/Sidebar.jsx
// import { NavLink } from "react-router-dom";
// import {
//   LayoutDashboard,
//   ShoppingCart,
//   Users,
//   UtensilsCrossed,
//   BarChart3,
//   Settings,
//   LogOut,
// } from "lucide-react";
// import logo1 from "../../assets/logo.png";

// const navItems = [
//   { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard, end: true },
//   { to: "/dashboard/orders", label: "Orders", icon: ShoppingCart },
//   { to: "/dashboard/menu", label: "Menu Management", icon: UtensilsCrossed },
//   { to: "/dashboard/customers", label: "Customers", icon: Users },
  
//   { to: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
// ];

// export default function Sidebar({ mobile = false }) {
//   const baseClasses = mobile
//     ? "flex flex-col h-full p-6"
//     : "flex flex-col h-screen p-6";

//   return (
//     <aside className={`${baseClasses} bg-[#A61E30] text-white`}>
//       {/* Logo Section */}
//       <div className="mb-5 px-2">
//         <img src={logo1} alt="Logo" className="h-auto w-auto" />
//       </div>
//       <hr className="mb-4"/>

//       {/* Navigation Links */}
//       <nav className="flex-1 space-y-2">
//         {navItems.map((item) => (
//           <NavLink
//             key={item.to}
//             to={item.to}
//             end={item.end}
//             className={({ isActive }) =>
//               `flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-200 text-[14px] font-semibold ${
//                 isActive
//                   ? "bg-[#EBDAA3] text-[#A61E30] shadow-lg shadow-black/20"
//                   : "text-white/70 hover:bg-white/10 hover:text-white"
//               }`
//             }
//           >
//             {({ isActive }) => (
//               <>
//                 <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
//                 <span>{item.label}</span>
//               </>
//             )}
//           </NavLink>
//         ))}
//       </nav>

//       {/* Bottom Footer Area */}
//       <div className="pt-6 mt-auto  border-white/10 space-y-1">
//         <FooterButton onClick={()=>{"/settings"}} icon={Settings} label="Settings" />
//         <FooterButton icon={LogOut} label="Logout" />
//       </div>
//     </aside>
//   );
// }

// // Helper component for bottom buttons
// function FooterButton({ icon: Icon, label,onClick }) {
//   return (
//     <button onClick={()=>{}} className="flex items-center gap-3.5 px-4 py-3 w-full text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all text-[14px] font-semibold">
//       <Icon size={20} />
//       <span>{label}</span>
//     </button>
//   );
// }





// // src/components/dashboard/Sidebar.jsx
// import { NavLink } from "react-router-dom";
// import {
//   LayoutDashboard,
//   ShoppingCart,
//   Users,
//   UtensilsCrossed,
//   BarChart3,
//   Settings,
//   LogOut,
// } from "lucide-react";
// import logo1 from "../../assets/logo.png";
// import bglogo from "../../assets/sidimg.png"; // Local image option
// // You can use:
// // 1. Local image: import bgImage from "../../assets/sidebar-bg.jpg";
// // 2. Online URL (for quick testing)
// const sidebarBg = bglogo; 
// // Examples: dark red food background, blurred kitchen, spices on dark table, etc.

// const navItems = [
//   { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard, end: true },
//   { to: "/dashboard/orders", label: "Orders", icon: ShoppingCart },
//   { to: "/dashboard/menu", label: "Menu Management", icon: UtensilsCrossed },
//   { to: "/dashboard/customers", label: "Customers", icon: Users },
//   { to: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
// ];

// export default function Sidebar({ mobile = false }) {
//   const baseClasses = mobile
//     ? "flex flex-col h-full p-6 relative overflow-hidden"
//     : "flex flex-col h-screen p-6 relative overflow-hidden";

//   return (
//     <aside className={`${baseClasses}`}>
//       {/* Background Image Layer */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url(${sidebarBg})`,
//           // filter: "brightness(0.65) contrast(1.1)", // optional – darken & boost contrast
//         }}
//       >
//         {/* Overlay for readability – dark red tint matching your brand */}
//         <div className="absolute inset-0 bg-[#A61E30]/75 " /> 
//         {/* Alternative overlays you can try:
//             bg-gradient-to-b from-[#A61E30]/80 to-[#4a0e14]/90
//             bg-black/65
//             bg-gradient-to-t from-black/70 via-transparent to-black/40
//         */}
//       </div>

//       {/* Content Layer – make sure it's above background */}
//       <div className="relative z-10 flex flex-col h-full text-white">
//         {/* Logo Section */}
//        {/* Logo Section – Larger & Centered */}
// <div className="mb-8 flex justify-center items-center">
//   <img 
//     src={logo1} 
//     alt="Logo" 
//     className="h-40 w-40 object-contain"   // ← adjust h/w as needed (e.g. h-44 w-44)
//   />
// </div>
//         <hr className="mb-4 border-white/20" />

//         {/* Navigation Links */}
//         <nav className="flex-1 space-y-2">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.to}
//               to={item.to}
//               end={item.end}
//               className={({ isActive }) =>
//                 `flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-200 text-[14px] font-semibold backdrop-blur-[2px] ${
//                   isActive
//                     ? "bg-[#EBDAA3] text-[#A61E30] shadow-lg shadow-black/30"
//                     : "text-white hover:bg-white/10 hover:text-[#A61E30]"
//                 }`
//               }
//             >
//               {({ isActive }) => (
//                 <>
//                 <div className="bg-[#F6E9EA] p-1 rounded-[10px] ">
//                   <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
//                 </div>
                  
//                   <span>{item.label}</span>
//                 </>
//               )}
//             </NavLink>
//           ))}
//         </nav>

//         {/* Bottom Footer Area */}
//         <div className="pt-6 mt-auto border-t border-white/10 space-y-1">
//           <FooterButton icon={Settings} label="Settings" onClick={()=>("/setting")}/>
//           <FooterButton icon={LogOut} label="Logout" />
//         </div>
//       </div>
//     </aside>
//   );
// }

// // Helper component for bottom buttons (unchanged, but added backdrop-blur support)
// function FooterButton({ icon: Icon, label ,onClick}) {
//   return (
//     <button className="flex items-center gap-3.5 px-4 py-3 w-full text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all text-[14px] font-semibold backdrop-blur-[2px]">
//       <Icon size={20} />
//       <span>{label}</span>
//     </button>
//   );
// }



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
import logo1 from "../../assets/logo.png";
import bglogo from "../../assets/sidimg.png";
import { IoPersonSharp } from "react-icons/io5";
const sidebarBg = bglogo;

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/dashboard/admin", label: "Admin Dashboard", icon: IoPersonSharp },
  { to: "/dashboard/orders", label: "Orders", icon: ShoppingCart },
  { to: "/dashboard/menu", label: "Menu Management", icon: UtensilsCrossed },
  { to: "/dashboard/customers", label: "Customers", icon: Users },
  { to: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
];

export default function Sidebar({ mobile = false }) {
  const navigate = useNavigate();

  const baseClasses = mobile
    ? "flex flex-col h-full p-6 relative overflow-hidden"
    : "flex flex-col h-screen p-6 relative overflow-hidden";

  return (
    <aside className={`${baseClasses}`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${sidebarBg})` }}
      >
        <div className="absolute inset-0 bg-[#A61E30]/75" />
      </div>

      <div className="relative z-10 flex flex-col h-full text-white">
        <div className="mb-8 flex justify-center items-center">
          <img src={logo1} alt="Logo" className="h-40 w-40 object-contain" />
        </div>
        <hr className="mb-4 border-white/20" />

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-200 text-[14px] font-semibold backdrop-blur-[2px] ${
                  isActive
                    ? "bg-[#EBDAA3] text-[#A61E30] shadow-lg  shadow-black/30"
                    : "text-[#FFFF] hover:bg-white/10 hover:text-[#A61E30]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="bg-[#F6E9EA] p-1 rounded-[10px] text-[#A61E30] ">
                    <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                  </div>
                  <span className={({ isActive }) =>
                ` ${
                  isActive
                    ? " text-white "
                    : "text-white "
                }`
              }>{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Footer Buttons */}
        <div className="pt-6 mt-auto border-t border-white/10 space-y-1">
          <FooterButton
            icon={Settings}
            label="Settings"
            onClick={() => navigate("/dashboard/settings")}
          />
          <FooterButton
            icon={LogOut}
            label="Logout"
            onClick={() => navigate("/login")} // example logout route
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