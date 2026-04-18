// // src/components/dashboard/Header.jsx
// import { Bell } from "lucide-react";
// import profilePic from "../../assets/profile.png";
// export default function Header() {
//   return (
//     <header
//       className="fixed top-0 left-72 right-0 z-40 
//                  bg-[#F6E9EA] border-b border-[#E0C0C3] shadow-sm"
//       style={{ fontFamily: "'DM Sans', sans-serif" }}
//     >
//       <div className="h-16 lg:h-20 px-6 lg:px-8 flex items-center justify-between">
        
//         {/* User Profile */}
//         <div className="flex items-center gap-3">
          
//          <div className="w-10 h-10 rounded-full overflow-hidden">
//   <img
//     src={profilePic}
//     alt="Profile"
//     className="w-full h-full object-cover"
//   />
// </div>

//           <div className="flex flex-col">
//             <span className="font-semibold text-[#A61E30] text-[18px] leading-none">
//               Sarah James
//             </span>

//             <span className="text-xs text-[#6B2C35] font-medium mt-1">
//               Admin
//             </span>
//           </div>
//         </div>

//         {/* Notifications */}
//         <button
//           className="p-2 rounded-full hover:bg-[#E8D3D5] text-[#A61E30] relative"
//           aria-label="Notifications"
//         >
//           <Bell size={22} />

//           <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#F6E9EA]" />
//         </button>

//       </div>
//     </header>
//   );
// }




// // src/components/dashboard/Header.jsx
// import React, { useState, useEffect } from "react";
// import { Bell } from "lucide-react";
// import profilePic from "../../assets/profile.png";

// export default function Header() {
//   const [user, setUser] = useState({
//     name: "Sarah James",
//     role: "Admin",
//     avatar: null,
//   });

//   // Load user data from localStorage (set during login)
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     const storedUserType = localStorage.getItem("user_type");

//     if (storedUser) {
//       try {
//         const parsedUser = JSON.parse(storedUser);
//         setUser({
//           name: parsedUser.name || parsedUser.full_name || "Admin User",
//           role: storedUserType === "admin" ? "Admin" : "Staff",
//           avatar: parsedUser.avatar || parsedUser.profile_picture || null,
//         });
//       } catch (e) {
//         console.error("Failed to parse user data");
//       }
//     }
//   }, []);

//   return (
//     <header
//       className="fixed top-0 left-72 right-0 z-40 
//                  bg-[#F6E9EA] border-b border-[#E0C0C3] shadow-sm"
//       style={{ fontFamily: "'DM Sans', sans-serif" }}
//     >
//       <div className="h-16 lg:h-20 px-6 lg:px-8 flex items-center justify-between">
        
//         {/* User Profile - Live Data */}
//         <div className="flex items-center gap-3">
          
//           <div className="w-10 h-10 rounded-full overflow-hidden border border-[#E0C0C3]">
//             <img
//               src={user.avatar || profilePic}
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <div className="flex flex-col">
//             <span className="font-semibold text-[#A61E30] text-[18px] leading-none">
//               {user.name}
//             </span>

//             <span className="text-xs text-[#6B2C35] font-medium mt-1">
//               {user.role}
//             </span>
//           </div>
//         </div>

//         {/* Notifications */}
//         <button
//           className="p-2 rounded-full hover:bg-[#E8D3D5] text-[#A61E30] relative"
//           aria-label="Notifications"
//         >
//           <Bell size={22} />

//           <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#F6E9EA]" />
//         </button>

//       </div>
//     </header>
//   );
// }




// // src/components/dashboard/Header.jsx
// import React, { useState, useEffect } from "react";
// import { Bell } from "lucide-react";
// import profilePic from "../../assets/profile.png";

// export default function Header() {
//   const [user, setUser] = useState({
//     name: "Admin User",
//     role: "Admin",
//     avatar: null,
//   });

//   useEffect(() => {
//     const loadUser = () => {
//       try {
//         const storedUser = localStorage.getItem("user");
//         const storedUserType = localStorage.getItem("user_type");

//         if (!storedUser) return;

//         const parsedUser = JSON.parse(storedUser);

//         setUser({
//           name: parsedUser?.name || "Admin User",
//           role:
//             storedUserType === "admin"
//               ? "Admin"
//               : storedUserType === "staff"
//               ? "Staff"
//               : "User",
//           avatar:
//             parsedUser?.avatar ||
//             parsedUser?.profile_picture ||
//             null,
//         });
//       } catch (error) {
//         console.error("Failed to load user data:", error);
//       }
//     };

//     loadUser();
//   }, []);

//   return (
//     <header
//       className="fixed top-0 left-72 right-0 z-40 
//       bg-[#F6E9EA] border-b border-[#E0C0C3] shadow-sm"
//       style={{ fontFamily: "'DM Sans', sans-serif" }}
//     >
//       <div className="h-16 lg:h-20 px-6 lg:px-8 flex items-center justify-between">

//         {/* User Profile */}
//         <div className="flex items-center gap-3">

//           <div className="w-10 h-10 rounded-full overflow-hidden border border-[#E0C0C3]">
//             <img
//               src={user.avatar || profilePic}
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <div className="flex flex-col">
//             <span className="font-semibold text-[#A61E30] text-[18px] leading-none">
//               {user.name}
//             </span>

//             <span className="text-xs text-[#6B2C35] font-medium mt-1">
//               {user.role}
//             </span>
//           </div>

//         </div>

//         {/* Notifications */}
//         <button
//           className="p-2 rounded-full hover:bg-[#E8D3D5] text-[#A61E30] relative"
//           aria-label="Notifications"
//         >
//           <Bell size={22} />

//           {/* Notification dot */}
//           <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#F6E9EA]" />
//         </button>

//       </div>
//     </header>
//   );
// }





// src/components/dashboard/Header.jsx
import React, { useState, useEffect } from "react";
import { Bell } from "lucide-react";

export default function Header() {
  const [user, setUser] = useState({
    name: "Admin",
    role: "Admin",
    avatar: null,
  });

  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem("user");
        const storedUserType = localStorage.getItem("user_type");

        if (!storedUser) return;

        const parsedUser = JSON.parse(storedUser);

        setUser({
          name: parsedUser?.name || "Admin",
          role:
            storedUserType === "admin"
              ? "Admin"
              : storedUserType === "superadmin"
              ? "Super Admin"
              : storedUserType === "staff"
              ? "Staff"
              : "User",
          avatar:
            parsedUser?.avatar ||
            parsedUser?.profile_picture ||
            null,
        });
      } catch (error) {
        console.error("Failed to load user data:", error);
      }
    };

    loadUser();
  }, []);

  // 👉 Generate initials
  const getInitials = (name) => {
    if (!name) return "U";

    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header
      className="fixed top-0 left-72 right-0 z-40 
      bg-[#F6E9EA] border-b border-[#E0C0C3] shadow-sm"
    >
      <div className="h-16 lg:h-20 px-6 flex items-center justify-between">

        {/* USER INFO */}
        <div className="flex items-center gap-3">

          {/* AVATAR */}
          {user.avatar ? (
            <img
              src={user.avatar}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border border-[#E0C0C3]"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-[#A61E30] text-white flex items-center justify-center font-semibold text-sm">
              {getInitials(user.name)}
            </div>
          )}

          {/* NAME + ROLE */}
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-[#A61E30] text-[16px]">
              {user.name}
            </span>

            <span className="text-xs text-[#6B2C35] font-medium">
              {user.role}
            </span>
          </div>

        </div>

        {/* NOTIFICATION */}
        <button className="p-2 rounded-full hover:bg-[#E8D3D5] text-[#A61E30] relative">
          <Bell size={22} />

          <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#F6E9EA]" />
        </button>

      </div>
    </header>
  );
}