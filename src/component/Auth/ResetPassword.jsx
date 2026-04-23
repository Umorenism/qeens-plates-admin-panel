import React, { useState } from "react";
import noodles from "../../assets/noodles.svg";
import wave from "../../assets/wave.svg";
import logo from "../../assets/adminlogo.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../../api/apiServices";

export default function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";
  const otp = location.state?.otp || "";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    setError("");
    if (!password || !confirmPassword) return setError("All fields are required");
    if (password !== confirmPassword) return setError("Passwords do not match");

    try {
      setLoading(true);
      const res = await resetPassword({ email, otp, password, confirm_password: confirmPassword });
      if (res.success) {
        setSuccess("Password updated successfully!");
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#e8d5b7] flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-screen bg-[#e8d5b7] overflow-hidden mx-auto">
        <img src={wave} alt="wave" className="absolute bottom-0 left-0 w-full h-[440px] object-cover z-[1]" />
        <div className="absolute left-0 bottom-10 z-10"><img src={noodles} alt="noodles" className="w-[528px] h-[528px] object-cover" /></div>
        <div className="absolute top-0 left-16 z-20"><img src={logo} alt="Logo" className="w-[140px] object-contain" /></div>

        <div className="absolute right-24 top-1/2 -translate-y-1/2 z-20 w-full max-w-[520px]">
          <div className="p-10 ">
            <h2 className="text-[28px] font-[900] font-dm text-[#3A3A3A] text-center mb-10">Reset Password</h2>
            <div className="space-y-5">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} placeholder="New Password" value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-6 py-4 rounded-[40px] rounded-tl-[5px] bg-gray-100 border border-gray-200 text-gray-500 focus:border-[#a61c2f] focus:bg-white outline-none transition-all pr-12"
                />
                <span onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500">
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} placeholder="Confirm Password" value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-6 py-4 rounded-[40px] rounded-tl-[5px] bg-gray-100 border border-gray-200 text-gray-500 focus:border-[#a61c2f] focus:bg-white outline-none transition-all pr-12"
                />
              </div>

              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              {success && <p className="text-green-600 text-sm text-center">{success}</p>}

              <button
                onClick={handleUpdate}
                disabled={loading}
                className="w-full py-3 bg-[#a61c2f] hover:bg-[#8d1828] text-white text-lg font-medium rounded-[12px] shadow-lg transition-all mt-4 disabled:opacity-50"
              >
                {loading ? "Updating..." : "Update Password"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}