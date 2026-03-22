import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { loginAdmin } from "../../api/apiServices";
import { useAuth } from "../../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import loginBg from "../../assets/logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { auth, login } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (auth?.token && auth?.admin) {
      navigate("/dashboard", { replace: true });
    }
  }, [auth, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { user, token } = await loginAdmin({ email, password });

      if (!token || !user?.id) {
        throw new Error("Invalid response from server – missing token or user data");
      }

      login({ token, admin: user });
      toast.success("Login successful!");

      setTimeout(() => {
        navigate("/dashboard", { replace: true });
      }, 300);

    } catch (err) {
      console.error("Login error:", err);

      let errorMessage = "Login failed. Please try again.";

      if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err.message) {
        errorMessage = err.message;
      }

      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4 py-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${loginBg})` }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Toaster position="top-center" />

      {error && (
        <motion.div
          className="absolute top-10 bg-red-100 border border-red-500 text-red-700 px-6 py-3 rounded-md shadow-md z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {error}
        </motion.div>
      )}

      <motion.div
        className="w-full max-w-md p-8 bg-white backdrop-blur-xl rounded-2xl shadow-xl space-y-8 border border-gray-700/50"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="text-center">
          <h1 className="text-[#A61E30] font-black text-4xl">Queen's Plates</h1>
          <h2 className="text-2xl font-bold text-gray-500 mt-3">Admin Login</h2>
          <p className="text-sm text-gray-500 mt-2">Secure access to dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-500">Email</label>
            <input
              type="email"
              placeholder="admin@queensplates.com"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
              className="mt-1 w-full px-4 py-3  rounded-[40px] rounded-tl-[5px] bg-white border border-gray-500 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[#A61E30]"
              required
              autoComplete="email"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-500">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-3  bg-white border border-gray-500  text-black placeholder-black rounded-[40px] rounded-tl-[5px] focus:outline-none focus:ring-2 focus:ring-[#A61E30] pr-12"
              required
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-10 text-gray-400 hover:text-white transition-colors"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full bg-[#A61E30] text-white py-3 rounded-xl font-semibold hover:bg-[#8f1624] transition disabled:opacity-60 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}