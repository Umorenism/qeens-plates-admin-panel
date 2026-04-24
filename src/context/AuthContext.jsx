
// import React, { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";

// const AuthContext = createContext();

// const BASE_URL =
//   "https://queensplate-main-jw6so1.free.laravel.cloud/api/v1";

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // ✅ Restore session on refresh
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     const storedToken = localStorage.getItem("token");

//     if (storedUser && storedToken) {
//       try {
//         setUser(JSON.parse(storedUser));
//       } catch (error) {
//         console.error("Failed to parse stored user");
//         localStorage.clear();
//       }
//     }

//     setLoading(false);
//   }, []);

//   // ✅ LOGIN
//   const login = (userData, token, userType) => {
//     localStorage.setItem("user", JSON.stringify(userData));
//     localStorage.setItem("token", token);
//     localStorage.setItem("user_type", userType);

//     setUser(userData);
//   };

//   // ✅ LOGOUT (API + cleanup)
//   const logout = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       if (token) {
//         await axios.post(
//           `${BASE_URL}/auth/logout`,
//           {},
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//       }
//     } catch (error) {
//       console.warn("Logout API failed (safe fallback logout)");
//     }

//     // Always clear storage
//     localStorage.clear();

//     setUser(null);

//     // redirect handled in Sidebar
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }




import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const BASE_URL =
  "https://api.queensplate.store/api/v1";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Restore session on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse stored user");
        localStorage.clear();
      }
    }

    setLoading(false);
  }, []);

  // ✅ LOGIN (Updated to use 'role' for consistency)
  const login = (userData, token, role) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
    localStorage.setItem("role", role); // Standardized key

    setUser(userData);
  };

  // ✅ LOGOUT (API + cleanup)
  const logout = async () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        await axios.post(
          `${BASE_URL}/auth/logout`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }
    } catch (error) {
      console.warn("Logout API failed (safe fallback logout)");
    }

    // Always clear storage entirely to prevent role leakage
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}