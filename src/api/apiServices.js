




import axios from "axios";

const base_url = "https://api.queensplate.store/api/v1";

// ------------------- CONFIG -------------------
export const apiClient = axios.create({
  baseURL: base_url,
  headers: { "Content-Type": "application/json" },
});

export const adminApi = axios.create({
  baseURL: base_url,
  headers: { "Content-Type": "application/json" },
});

const authInterceptor = (config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.Accept = "application/json";
  }
  return config;
};

apiClient.interceptors.request.use(authInterceptor);
adminApi.interceptors.request.use(authInterceptor);


export const loginAdmin = async ({ email, password }) => {
  try {
    const res = await apiClient.post("auth/login", {
      email,
      password,
    });

    const { success, data, message } = res.data;

    if (!success) {
      throw new Error(message || "Login failed");
    }

    const { access_token, user, user_type } = data;

    if (!access_token) {
      throw new Error("No access token received");
    }

    // ✅ Only allow admin + superadmin dashboard access
    if (user_type !== "admin" && user_type !== "superadmin") {
      throw new Error(
        "Access denied: You do not have administrator privileges."
      );
    }

    // ✅ Save auth info
    localStorage.setItem("token", access_token);
    localStorage.setItem("user_type", user_type);
    localStorage.setItem("user", JSON.stringify(user));

    const authHeader = `Bearer ${access_token}`;

    apiClient.defaults.headers.common.Authorization = authHeader;
    adminApi.defaults.headers.common.Authorization = authHeader;

    return {
      user,
      token: access_token,
      user_type,
    };

  } catch (err) {

    const errorMsg =
      err.response?.data?.message ||
      err.message ||
      "Invalid credentials";

    throw new Error(errorMsg);
  }
};


// ------------------- ADMIN ORDERS API FUNCTIONS -------------------
export const getAllOrders = async (params = {}) => {
  try {
    const response = await adminApi.get("/admin/orders", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error.response?.data || error.message);
    throw error;
  }
};

export const searchOrders = async (searchTerm) => {
  return getAllOrders({ search: searchTerm });
};

export const filterOrdersByStatus = async (status) => {
  return getAllOrders({ status: status.toLowerCase() });
};

export const getOrderById = async (id) => {
  try {
    const response = await adminApi.get(`/admin/order/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching order ${id}:`, error.response?.data || error.message);
    throw error;
  }
};






// Get all menu items
export const getMenuItems = async () => {
  try {
    const response = await adminApi.get("/admin/menu-management");
    return response.data;
  } catch (error) {
    console.error("Error fetching menu items:", error.response?.data || error.message);
    throw error;
  }
};

// Toggle availability (PATCH)
export const toggleMenuItemStatus = async (id) => {
  try {
    const response = await adminApi.patch(`/admin/menu-management/${id}/status`);
    return response.data;
  } catch (error) {
    console.error("Error toggling status:", error.response?.data || error.message);
    throw error;
  }
};




// Delete menu item
export const deleteMenuItem = async (id) => {
  const response = await adminApi.delete(`/admin/menu-management/${id}`);
  return response.data;
};

export const getDashboardStats = async () => {
  const response = await adminApi.get("/admin/dashboard-stats");
  return response.data;
};



export const getCustomerById = async (id) => {
  try {
    const response = await adminApi.get(`/admin/customers/${id}`);
    return response.data;
    console.log("Customer data:", response);
  } catch (error) {
    console.error("Error fetching customer:", error.response?.data || error.message);
    throw error;
  }
};


// ------------------- ADMIN MANAGEMENT API -------------------

export const getAdmins = async (page = 1) => {
  const res = await adminApi.get(`/superadmin/admin-management?page=${page}`);
  return res.data;
};

export const createAdmin = async (adminData) => {
  const res = await adminApi.post("/superadmin/admin-management", adminData);
  return res.data;
};

export const updateAdmin = async (id, adminData) => {
  const res = await adminApi.put(`/superadmin/admin-management/${id}`, adminData);
  return res.data;
};

export const deleteAdmin = async (id, password) => {
  const res = await adminApi.delete(`/superadmin/admin-management/${id}`, {
    data: { password }
  });
  return res.data;
};

export const resetAdminPassword = async (id, password) => {
  const res = await adminApi.post(`/superadmin/admin-management/${id}/reset`, { password });
  return res.data;
};



// Add new menu item
export const addMenuItem = async (formData) => {
  const response = await adminApi.post("/admin/menu-management", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};




// src/api/apiServices.js

export const getNotifications = async (page = 1) => {
  const response = await adminApi.get(`/notifications?page=${page}`);
  return response.data;
};

// Mark one as read
export const markNotificationAsRead = async (id) => {
  const response = await adminApi.get(`/notifications/${id}/read`);
  return response.data;
};

// Mark all as read
export const markAllNotificationsRead = async () => {
  const response = await adminApi.post(`/notifications/mark-all-read`);
  return response.data;
};

// Delete notification
export const deleteNotification = async (id) => {
  const response = await adminApi.delete(`/notifications/${id}`);
  return response.data;
};

export const updateMenuItem = async (id, formData) => {
  const response = await adminApi.put(
    `/admin/menu-management/${id}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    }
  );
  return response.data;
};



export const updateOrderStatus = async (orderId, status) => {
  try {
    const response = await adminApi.post("/admin/orders/update-status", {
      order_id: orderId,
      status: status,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating status:", error.response?.data || error.message);
    throw error;
  }
};



// ------------------- AUTH / FORGET PASSWORD API FUNCTIONS -------------------

/**
 * 1. Request Forget Password OTP
 * Endpoint: auth/forgot-password
 * Request: { email: "admin@test.com" }
 */
export const forgotPassword = async (email) => {
  try {
    const res = await apiClient.post("auth/forgot-password", { email });
    return res.data;
  } catch (err) {
    const errorMsg = 
      err.response?.data?.message || 
      err.message || 
      "Failed to send OTP";
    throw new Error(errorMsg);
  }
};

/**
 * 2. Verify OTP
 * Endpoint: auth/verify-otp
 * Request: { email: "admin@test.com", otp: "5859" }
 */
export const verifyOtp = async (data) => {
  try {
    const res = await apiClient.post("auth/verify-otp", data);
    return res.data;
  } catch (err) {
    const errorMsg = 
      err.response?.data?.message || 
      err.message || 
      "OTP verification failed";
    throw new Error(errorMsg);
  }
};

/**
 * 3. Reset Password (Final Step)
 * Endpoint: auth/reset-password
 * Request: { email, otp, password, confirm_password }
 */
export const resetPassword = async (data) => {
  try {
    const res = await apiClient.post("auth/reset-password", data);
    return res.data;
  } catch (err) {
    const errorMsg = 
      err.response?.data?.message || 
      err.message || 
      "Password reset failed";
    throw new Error(errorMsg);
  }
};