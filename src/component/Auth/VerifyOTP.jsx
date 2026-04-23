import React, { useState } from "react";
import noodles from "../../assets/noodles.svg";
import wave from "../../assets/wave.svg";
import logo from "../../assets/adminlogo.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { verifyOtp } from "../../api/apiServices"; 

export default function VerifyOTP() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve email from the initial 'Forget Password' request state
  const email = location.state?.email || "";

  const handleVerifyOtp = async () => {
    setError("");
    if (!otp) return setError("OTP is required");
    if (!email) return setError("Session expired. Please restart the process.");

    try {
      setLoading(true);
      const response = await verifyOtp({ email, otp });

      if (response.status === 200 || response.success) {
        // Navigate to the Change Password screen, passing the verified email and otp
        navigate("/reset-password", { state: { email, otp } });
      } else {
        setError(response.message || "Invalid OTP code");
      }
    } catch (err) {
      setError("Verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#e8d5b7] flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-screen bg-[#e8d5b7] overflow-hidden mx-auto">
        <img src={wave} alt="wave" className="absolute bottom-0 left-0 w-full h-[440px] object-cover z-[1]" />
        <div className="absolute left-0 bottom-10 z-10">
          <img src={noodles} alt="noodles" className="w-[528px] h-[528px] object-cover" />
        </div>
        <div className="absolute top-0 left-16 z-20">
          <img src={logo} alt="Logo" className="w-[140px] object-contain" />
        </div>

        <div className="absolute right-24 top-1/2 -translate-y-1/2 z-20 w-full max-w-[520px]">
          <div className="p-10">
            <h2 className="text-[28px] font-[900] font-dm text-[#3A3A3A] text-center mb-4">Verify OTP</h2>
            <p className="text-center text-gray-600 mb-10 text-sm">Enter the code sent to <br/><b>{email}</b></p>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="4-Digit Code"
                maxLength={4}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-6 py-4 rounded-[40px] rounded-tl-[5px] bg-gray-100 border border-gray-200 focus:border-[#a61c2f] focus:bg-white outline-none transition-all text-gray-700 text-center text-2xl tracking-[10px] font-bold"
              />

              {error && <p className="text-red-500 text-sm text-center">{error}</p>}

              <button
                onClick={handleVerifyOtp}
                disabled={loading}
                className="w-full py-3 bg-[#a61c2f] hover:bg-[#8d1828] text-white text-lg font-medium rounded-[12px] shadow-lg transition-all duration-200 mt-4 disabled:opacity-50"
              >
                {loading ? "Verifying..." : "Verify Code"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}