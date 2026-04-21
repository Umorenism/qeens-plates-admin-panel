
// apiServices.js
import axios from "axios";

const base_url = "https://queensplate-main-jw6so1.free.laravel.cloud/api/v1/";

// ------------------- GENERAL USER API -------------------
export const apiClient = axios.create({
  baseURL: base_url,
  headers: { "Content-Type": "application/json" },
});


// export const apiClient = axios.create({
//   baseURL: base_url,
// });



apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // ✅ SAME AS ADMIN
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


// ------------------- ADMIN API -------------------
export const adminApi = axios.create({
  baseURL: base_url,
  headers: { "Content-Type": "application/json" },
});



adminApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.Accept = "application/json"; // Add this line
      console.log("[Admin Request] Adding token:", token.substring(0, 20) + "...");
    }
    return config;
  },
  (error) => Promise.reject(error)
);




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