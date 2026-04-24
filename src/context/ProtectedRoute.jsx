

// import { useLocation } from "react-router-dom";
// import { useAuth } from "./AuthContext";
// export default function ProtectedRoute({ children }) {
//   const { user, loading } = useAuth();
//   const location = useLocation();
//   const token = localStorage.getItem("token");
//   const userType = localStorage.getItem("user_type");

//   // 1. If the AuthContext is still fetching the user profile, show loader
//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-[#e8d5b7]">
//         <div className="text-xl font-bold text-[#a61c2f] animate-pulse">
//           Authenticating Admin...
//         </div>
//       </div>
//     );
//   }

  
//   if (!token) {
//     console.warn("[ProtectedRoute] No token found. Redirecting to login.");
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

 
//   if (!user && !loading) {
   
//     if (userType !== "admin") {
//        return <Navigate to="/login" replace />;
//     }
//   }

//   return children;
// }





import { useLocation, Navigate } from "react-router-dom"; // ✅ Added Navigate to imports
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role")?.toLowerCase(); // ✅ Matches our login/sidebar logic

  // 1. If the AuthContext is still fetching the user profile, show loader
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#e8d5b7]">
        <div className="text-xl font-bold text-[#a61c2f] animate-pulse">
          Authenticating Admin...
        </div>
      </div>
    );
  }

  // 2. If no token is found, redirect to login
  if (!token) {
    console.warn("[ProtectedRoute] No token found. Redirecting to login.");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 3. Role-based protection check
  // Allows access if user is logged in as 'admin' or 'superadmin'
  if (!user && !loading) {
    if (userRole !== "admin" && userRole !== "superadmin") {
       return <Navigate to="/login" replace />;
    }
  }

  return children;
}