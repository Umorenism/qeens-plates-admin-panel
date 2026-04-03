



import { useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const userType = localStorage.getItem("user_type");

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

  
  if (!token) {
    console.warn("[ProtectedRoute] No token found. Redirecting to login.");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

 
  if (!user && !loading) {
   
    if (userType !== "admin") {
       return <Navigate to="/login" replace />;
    }
  }

  return children;
}