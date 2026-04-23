// import React, { useState } from "react";
// import noodles from "../../assets/noodles.svg";
// import wave from "../../assets/wave.svg";
// import logo from "../../assets/adminlogo.svg";
// import { FaEye, FaEyeSlash } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// export default function ForgetPassword() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // Function to handle password update
//   const handleChangePassword = async () => {
//     setError("");
//     setSuccess("");

//     // Validation
//     if (!email || !password || !confirmPassword) {
//       return setError("All fields are required");
//     }
//     if (password !== confirmPassword) {
//       return setError("Passwords do not match");
//     }

//     try {
//       // Simulate API call delay
//       await new Promise((res) => setTimeout(res, 800));

//       // Dummy success (replace with real API call later)
//       console.log("Password changed for:", email);

//       setSuccess("Password updated successfully!");
//       setPassword("");
//       setConfirmPassword("");
//       setEmail("");

//       // Optionally redirect to login
//       setTimeout(() => {
//         window.location.href = "/login";
//       }, 1200);
//     } catch (err) {
//       setError("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#e8d5b7] flex items-center justify-center overflow-hidden">
//       <div className="relative w-full h-screen bg-[#e8d5b7] overflow-hidden mx-auto">
//         {/* Wave Background */}
//         <img
//           src={wave}
//           alt="wave"
//           className="absolute bottom-0 left-0 w-full h-[440px] object-cover z-[1]"
//         />

//         {/* Noodles Image */}
//         <div className="absolute left-0 bottom-10 z-10">
//           <img
//             src={noodles}
//             alt="noodles"
//             className="w-[528px] h-[528px] object-cover"
//           />
//         </div>

//         {/* Logo */}
//         <div className="absolute top-0 left-16 z-20">
//           <img src={logo} alt="Logo" className="w-[140px] object-contain" />
//         </div>

//         {/* Change Password Section */}
//         <div className="absolute right-24 top-1/2 -translate-y-1/2 z-20 w-full max-w-[520px]">
//           <div className="p-10 ">
//             <h2 className="text-[28px] font-[900] font-dm text-[#3A3A3A] text-center mb-10">
//               Change Password
//             </h2>

//             <div className="space-y-5">
//               {/* Email */}
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-6 py-4 rounded-[40px] rounded-tl-[5px] bg-gray-100 border border-gray-200 
//                            focus:border-[#a61c2f] focus:bg-white outline-none transition-all text-gray-700"
//               />

//               {/* New Password */}
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="New Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full px-6 py-4 rounded-[40px] rounded-tl-[5px] bg-gray-100 border border-gray-200 
//                              focus:border-[#a61c2f] focus:bg-white outline-none transition-all text-gray-700 pr-12"
//                 />
//                 <span
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
//                 >
//                   {showPassword ? <FaEye /> : <FaEyeSlash />}
//                 </span>
//               </div>

//               {/* Confirm Password */}
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Confirm Password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   className="w-full px-6 py-4 rounded-[40px] rounded-tl-[5px] bg-gray-100 border border-gray-200 
//                              focus:border-[#a61c2f] focus:bg-white outline-none transition-all text-gray-700 pr-12"
//                 />
//                 <span
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
//                 >
//                   {showPassword ? <FaEye /> : <FaEyeSlash />}
//                 </span>
//               </div>

//               {/* Error / Success */}
//               {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//               {success && <p className="text-green-500 text-sm text-center">{success}</p>}

//               {/* Update Button */}
//               <button
//                 onClick={handleChangePassword}
//                 type="button"
//                 className="w-full py-3 bg-[#a61c2f] hover:bg-[#8d1828] 
//                            text-white text-lg font-medium rounded-[12px] 
//                            shadow-lg transition-all duration-200 mt-4"
//               >
//                 Submit
//               </button>

//               {/* Optional Forgot Password Link */}
//               {/* <Link to="/forget-password" className="w-full flex justify-end mt-2">
//                 <p className="text-sm text-red-500 hover:text-gray-700 transition-colors cursor-pointer">
//                   Forgot password?
//                 </p>
//               </Link> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







import React, { useState } from "react";
import noodles from "../../assets/noodles.svg";
import wave from "../../assets/wave.svg";
import logo from "../../assets/adminlogo.svg";
import { useNavigate } from "react-router-dom";
import { forgotPassword, verifyOtp } from "../../api/apiServices";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1: Email, 2: OTP
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRequestOtp = async () => {
    setError("");
    if (!email) return setError("Email is required");
    try {
      setLoading(true);
      const res = await forgotPassword(email);
      if (res.success) {
        setSuccess(res.message);
        setStep(2);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setError("");
    if (!otp) return setError("OTP is required");
    try {
      setLoading(true);
      const res = await verifyOtp({ email, otp });
      if (res.success) {
        // Move to Reset Password page and pass data
        navigate("/reset-password", { state: { email, otp } });
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
            <h2 className="text-[28px] font-[900] font-dm text-[#3A3A3A] text-center mb-10">
              {step === 1 ? "Forgot Password" : "Verify OTP"}
            </h2>

            <div className="space-y-5">
              {step === 1 ? (
                <input
                  type="email" placeholder="Email" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 rounded-[40px] rounded-tl-[5px] bg-gray-100 border border-gray-200 focus:border-[#a61c2f] focus:bg-white outline-none transition-all text-gray-700"
                />
              ) : (
                <input
                  type="text" placeholder="Enter 4-digit OTP" maxLength={4} value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-6 py-4 rounded-[40px] rounded-tl-[5px] bg-gray-100 border border-gray-200 focus:border-[#a61c2f] focus:bg-white outline-none transition-all text-gray-700 text-center tracking-[10px] text-xl font-bold"
                />
              )}

              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              {success && <p className="text-green-600 text-sm text-center">{success}</p>}

              <button
                onClick={step === 1 ? handleRequestOtp : handleVerifyOtp}
                disabled={loading}
                className="w-full py-3 bg-[#a61c2f] hover:bg-[#8d1828] text-white text-lg font-medium rounded-[12px] shadow-lg transition-all mt-4 disabled:opacity-50"
              >
                {loading ? "Processing..." : step === 1 ? "Send Code" : "Verify Code"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}