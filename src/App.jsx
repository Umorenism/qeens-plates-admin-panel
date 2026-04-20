import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./component/Dashboard/Dashboard";
import ProtectedRoute from "./context/ProtectedRoute";
import Login from "./component/Auth/Login";

// Pages

import { AdminDashboard } from "./pages/AdminDashboard";
import OrderPage from "./pages/OrderPage";

import Management from "./pages/Management";

import OrderDetailInfo from "./detailinfo/OrderDetailInfo";
import CustomerslInfo from "./detailinfo/CustomersInfo";
import Settings from "./pages/Settings";

import AnalyticsPage from "./pages/AnalyticDashboard";
import CustomerPage from "./pages/CustomerPage";
import AdminPermission from "./pages/AdminPermission";
import ForgetPassword from "./component/Auth/Forget";
import NotificationsPage from "./pages/Notifications";

export default function App() {
  return (
   <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/forget-password" element={<ForgetPassword />} />

      {/* Protected Admin Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        {/* All these sub-routes are now protected by the parent ProtectedRoute */}
        <Route index element={<AdminDashboard />} />
        <Route path="orders" element={<OrderPage />} />
        <Route path="customers" element={<CustomerPage />} />
        <Route path="menu" element={<Management />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="order/:id" element={<OrderDetailInfo />} />
        <Route path="customers/:id" element={<CustomerslInfo />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="settings" element={<Settings />} />
        <Route path="admin" element={<AdminPermission />} />
      </Route>

      {/* Catch all */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
