


// import React from "react";

// export default function Settings() {
//   return (
//     <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
//       {/* Header */}
//       <div className="mb-6 mt-10 flex justify-between items-center">
//         <h1 className="text-[32px] font-[600] font-dm text-black">
//           Settings
//         </h1>
//       </div>

//       {/* Restaurant Details */}
//       <div className="bg-white rounded-xl p-5 shadow-sm max-w-xl">
//         <h1 className="text-black font-[500] text-[20px] font-dm mb-4">
//           Restaurant Details
//         </h1>

//         {/* Restaurant Name */}
//         <div className="mb-5">
//           <label className="text-black font-[300] text-[14px] font-dm mb-2 block">
//             Restaurant Name
//           </label>
//           <input
//             type="text"
//             placeholder="Queen’s Plate - Food Express"
//             className="pl-4 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none  rounded-[40px] rounded-tl-[5px] font-dm"
//           />
//         </div>

//         {/* Email & Phone */}
//         <div className="flex flex-col gap-4 md:flex-row">
//           <div className="flex-1">
//             <label className="text-black font-[300] text-[14px] font-dm mb-2 block">
//               Email
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your Email"
//              className="pl-4 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none  rounded-[40px] rounded-tl-[5px] font-dm"
//             />
//           </div>
//           <div className="flex-1">
//             <label className="text-black font-[300] text-[14px] font-dm mb-2 block">
//               Phone
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your Phone Number"
//               className="pl-4 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none  rounded-[40px] rounded-tl-[5px] font-dm"
//             />
//           </div>
//         </div>

//         {/* Save Button */}
//         <div className="mt-5">
//           <button className="bg-[#A61E30] text-white px-5 py-2 rounded-[8px] text-[12.87px]">
//             Save Changes
//           </button>
//         </div>
//       </div>

//       {/* Security */}
//       <div className="bg-white rounded-xl p-5 shadow-sm max-w-xl mt-10">
//         <h1 className="text-black font-[400] text-[20px] font-dm mb-2">
//           Security
//         </h1>
//         <p className="text-[#6B7280] font-dm text-[16px] mb-4">
//           Change your admin password and manage access.
//         </p>
//         <button className="bg-white border text-[#374151] px-5 py-2 rounded-[8px] text-[12.87px]">
//           Change Password
//         </button>
//       </div>
//     </div>
//   );
// }




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

// const API_BASE =
//   "https://queensplate-main-jw6so1.free.laravel.cloud/api/v1";

// export default function Settings() {
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     delivery_fee: "",
//     tax_rate: "",
//     email: "",
//     phone: "",
//   });

//   const token = localStorage.getItem("token"); // adjust if stored differently


//   // FETCH SETTINGS
//   useEffect(() => {
//     fetchSettings();
//   }, []);

//   const fetchSettings = async () => {
//     try {
//       setLoading(true);

//       const res = await axios.get(
//         `${API_BASE}/superadmin/setting`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const data = res.data?.data;

//       if (data) {
//         setFormData({
//           name: data.name || "",
//           delivery_fee: data.delivery_fee || "",
//           tax_rate: data.tax_rate || "",
//           email: data.email || "",
//           phone: data.phone || "",
//         });
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to load settings");
//     } finally {
//       setLoading(false);
//     }
//   };


//   // HANDLE INPUT CHANGE
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };


//   // UPDATE SETTINGS
//   const handleSubmit = async () => {
//     try {
//       setLoading(true);

//       await axios.put(
//         `${API_BASE}/superadmin/setting`,
//         {
//           name: formData.name,
//           delivery_fee: Number(formData.delivery_fee),
//           tax_rate: Number(formData.tax_rate),
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       toast.success("Settings updated successfully");
//     } catch (err) {
//       console.error(err);
//       toast.error("Update failed");
//     } finally {
//       setLoading(false);
//     }
//   };


//   return (
//     <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
//       {/* Header */}
//       <div className="mb-6 mt-10 flex justify-between items-center">
//         <h1 className="text-[32px] font-[600] font-dm text-black">
//           Settings
//         </h1>
//       </div>


//       {/* Restaurant Details */}
//       <div className="bg-white rounded-xl p-5 shadow-sm max-w-xl">
//         <h1 className="text-black font-[500] text-[20px] font-dm mb-4">
//           Restaurant Details
//         </h1>


//         {/* Restaurant Name */}
//         <div className="mb-5">
//           <label className="text-black font-[300] text-[14px] font-dm mb-2 block">
//             Restaurant Name
//           </label>

//           <input
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             type="text"
//             className="pl-4 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px]"
//           />
//         </div>


//         {/* Email & Phone */}
//         <div className="flex flex-col gap-4 md:flex-row">
//           <div className="flex-1">
//             <label className="text-black font-[300] text-[14px] mb-2 block">
//               Email
//             </label>

//             <input
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               type="text"
//               className="pl-4 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px]"
//             />
//           </div>

//           <div className="flex-1">
//             <label className="text-black font-[300] text-[14px] mb-2 block">
//               Phone
//             </label>

//             <input
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               type="text"
//               className="pl-4 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px]"
//             />
//           </div>
//         </div>


//         {/* Delivery Fee */}
//         <div className="mt-4">
//           <label className="text-black text-[14px] mb-2 block">
//             Delivery Fee
//           </label>

//           <input
//             name="delivery_fee"
//             value={formData.delivery_fee}
//             onChange={handleChange}
//             type="number"
//             className="pl-4 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px]"
//           />
//         </div>


//         {/* Tax Rate */}
//         <div className="mt-4">
//           <label className="text-black text-[14px] mb-2 block">
//             Tax Rate (%)
//           </label>

//           <input
//             name="tax_rate"
//             value={formData.tax_rate}
//             onChange={handleChange}
//             type="number"
//             className="pl-4 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px]"
//           />
//         </div>


//         {/* Save Button */}
//         <div className="mt-5">
//           <button
//             onClick={handleSubmit}
//             disabled={loading}
//             className="bg-[#A61E30] text-white px-5 py-2 rounded-[8px] text-[12.87px]"
//           >
//             {loading ? "Saving..." : "Save Changes"}
//           </button>
//         </div>
//       </div>


//       {/* Security */}
//       <div className="bg-white rounded-xl p-5 shadow-sm max-w-xl mt-10">
//         <h1 className="text-black font-[400] text-[20px] mb-2">
//           Security
//         </h1>

//         <p className="text-[#6B7280] text-[16px] mb-4">
//           Change your admin password and manage access.
//         </p>

//         <button className="bg-white border text-[#374151] px-5 py-2 rounded-[8px] text-[12.87px]">
//           Change Password
//         </button>
//       </div>
//     </div>
//   );
// }





// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

// const API_BASE = "https://queensplate-main-jw6so1.free.laravel.cloud/api/v1";

// export default function Settings() {
//   const [loading, setLoading] = useState(false);

//   // Added delivery_time to match your live data requirement
//   const [formData, setFormData] = useState({
//     name: "",
//     delivery_fee: "",
//     tax_rate: "",
//     delivery_time: "", // New field from live data
//     email: "",
//     phone: "",
//   });

//   const token = localStorage.getItem("token");

//   // FETCH SETTINGS
//   useEffect(() => {
//     fetchSettings();
//   }, []);

//   const fetchSettings = async () => {
//   const token = localStorage.getItem("token");
//   console.log("Current Token:", token); // If this is null, you aren't logged in correctly.

//   try {
//     const res = await axios.post(`${API_BASE}/superadmin/setting`, {}, {
//       headers: { Authorization: `Bearer ${token}` }
//     });
//     // ...
//   } catch (err) {
//     if (err.response?.status === 403) {
//       toast.error("You do not have Superadmin privileges.");
//     }
//   }
// };

//   // HANDLE INPUT CHANGE
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // UPDATE SETTINGS (Using POST as required by your route)
//   const handleSubmit = async () => {
//     if (!formData.name) return toast.error("Restaurant name is required");

//     try {
//       setLoading(true);

//       const res = await axios.post(
//         `${API_BASE}/superadmin/setting`,
//         {
//           name: formData.name,
//           delivery_fee: Number(formData.delivery_fee),
//           tax_rate: Number(formData.tax_rate),
//           delivery_time: formData.delivery_time,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (res.data.status === "success") {
//         toast.success(res.data.message || "Settings updated successfully");
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error(err.response?.data?.message || "Update failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
//       {/* Header */}
//       <div className="mb-6 mt-10 flex justify-between items-center">
//         <h1 className="text-[32px] font-[600] font-dm text-black">Settings</h1>
//       </div>

//       {/* Restaurant Details */}
//       <div className="bg-white rounded-xl p-5 shadow-sm max-w-xl">
//         <h1 className="text-black font-[500] text-[20px] font-dm mb-4">
//           Restaurant Details
//         </h1>

//         {/* Restaurant Name */}
//         <div className="mb-5">
//           <label className="text-black font-[300] text-[14px] font-dm mb-2 block">
//             Restaurant Name
//           </label>
//           <input
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             type="text"
//             className="pl-4 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px]"
//           />
//         </div>

//         {/* Email & Phone */}
//         <div className="flex flex-col gap-4 md:flex-row">
//           <div className="flex-1">
//             <label className="text-black font-[300] text-[14px] mb-2 block">
//               Email
//             </label>
//             <input
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               type="text"
//               className="pl-4 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px]"
//             />
//           </div>

//           <div className="flex-1">
//             <label className="text-black font-[300] text-[14px] mb-2 block">
//               Phone
//             </label>
//             <input
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               type="text"
//               className="pl-4 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px]"
//             />
//           </div>
//         </div>

//         {/* Delivery Fee & Tax Rate Row */}
//         <div className="flex flex-col gap-4 md:flex-row mt-4">
//           <div className="flex-1">
//             <label className="text-black text-[14px] mb-2 block">
//               Delivery Fee (₦)
//             </label>
//             <input
//               name="delivery_fee"
//               value={formData.delivery_fee}
//               onChange={handleChange}
//               type="number"
//               className="pl-4 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px]"
//             />
//           </div>

//           <div className="flex-1">
//             <label className="text-black text-[14px] mb-2 block">
//               Tax Rate (%)
//             </label>
//             <input
//               name="tax_rate"
//               value={formData.tax_rate}
//               onChange={handleChange}
//               type="number"
//               className="pl-4 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px]"
//             />
//           </div>
//         </div>

//         {/* Delivery Time - Matches req/res requirement */}
//         <div className="mt-4">
//           <label className="text-black text-[14px] mb-2 block">
//             Average Delivery Time (minutes)
//           </label>
//           <input
//             name="delivery_time"
//             value={formData.delivery_time}
//             onChange={handleChange}
//             type="text"
//             placeholder="e.g. 30"
//             className="pl-4 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px]"
//           />
//         </div>

//         {/* Save Button */}
//         <div className="mt-6">
//           <button
//             onClick={handleSubmit}
//             disabled={loading}
//             className="bg-[#A61E30] text-white px-8 py-2.5 rounded-[8px] text-[14px] font-medium transition-opacity disabled:opacity-50"
//           >
//             {loading ? "Saving..." : "Save Changes"}
//           </button>
//         </div>
//       </div>

//       {/* Security Section (Original UI maintained) */}
//       {/* <div className="bg-white rounded-xl p-5 shadow-sm max-w-xl mt-10">
//         <h1 className="text-black font-[400] text-[20px] mb-2">Security</h1>
//         <p className="text-[#6B7280] text-[16px] mb-4">
//           Change your admin password and manage access.
//         </p>
//         <button className="bg-white border text-[#374151] px-5 py-2 rounded-[8px] text-[12.87px] hover:bg-gray-50">
//           Change Password
//         </button>
//       </div> */}
//     </div>
//   );
// }





import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const API_BASE = "https://queensplate-main-jw6so1.free.laravel.cloud/api/v1";

export default function Settings() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    delivery_fee: "",
    tax_rate: "",
    delivery_time: "",
    email: "",
    phone: "",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchSettings();
  }, []);

  // FETCH SETTINGS
  const fetchSettings = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Session expired. Please login again.");
      return;
    }

    try {
      setLoading(true);
      // Backend only supports POST for this route
      const res = await axios.post(`${API_BASE}/superadmin/setting`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const data = res.data?.data;
      if (data) {
        setFormData({
          name: data.name || "",
          delivery_fee: data.delivery_fee || "",
          tax_rate: data.tax_rate || "",
          delivery_time: data.delivery_time || "",
          email: data.email || "", 
          phone: data.phone || "",
        });
      }
    } catch (err) {
      console.error("Fetch error:", err);
      if (err.response?.status === 403) {
        toast.error("Access Denied: You do not have Superadmin privileges.");
      } else {
        toast.error("Failed to load business settings.");
      }
    } finally {
      setLoading(false);
    }
  };

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // UPDATE SETTINGS
  const handleSubmit = async () => {
    if (!formData.name) return toast.error("Restaurant name is required");

    try {
      setLoading(true);
      const res = await axios.post(
        `${API_BASE}/superadmin/setting`,
        {
          name: formData.name,
          delivery_fee: Number(formData.delivery_fee),
          tax_rate: Number(formData.tax_rate),
          delivery_time: formData.delivery_time,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (res.data.status === "success" || res.data.success) {
        toast.success(res.data.message || "Settings updated successfully!");
      }
    } catch (err) {
      console.error("Update error:", err);
      const errorMsg = err.response?.data?.message || "Update failed. Please try again.";
      
      if (err.response?.status === 403) {
        toast.error("Unauthorized: Only Superadmins can change these settings.");
      } else {
        toast.error(errorMsg);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
      <div className="mb-6 mt-10 flex justify-between items-center">
        <h1 className="text-[32px] font-[600] text-black">Settings</h1>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm max-w-xl">
        <h1 className="text-black font-[500] text-[20px] mb-6">Restaurant Details</h1>

        {/* Restaurant Name */}
        <div className="mb-5">
          <label className="text-black font-[300] text-[14px] mb-2 block">Restaurant Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            className="px-4 py-2 w-full bg-white border border-gray-200 shadow-sm text-gray-700 outline-none rounded-[40px] rounded-tl-[5px] focus:border-[#A61E30]"
          />
        </div>

        <div className="flex flex-col gap-4 md:flex-row mb-5">
          <div className="flex-1">
            <label className="text-black font-[300] text-[14px] mb-2 block">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="px-4 py-2 w-full bg-white border border-gray-200 shadow-sm text-gray-700 outline-none rounded-[40px] rounded-tl-[5px] focus:border-[#A61E30]"
            />
          </div>
          <div className="flex-1">
            <label className="text-black font-[300] text-[14px] mb-2 block">Phone</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="text"
              className="px-4 py-2 w-full bg-white border border-gray-200 shadow-sm text-gray-700 outline-none rounded-[40px] rounded-tl-[5px] focus:border-[#A61E30]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row mb-5">
          <div className="flex-1">
            <label className="text-black text-[14px] mb-2 block">Delivery Fee (₦)</label>
            <input
              name="delivery_fee"
              value={formData.delivery_fee}
              onChange={handleChange}
              type="number"
              className="px-4 py-2 w-full bg-white border border-gray-200 shadow-sm text-gray-700 outline-none rounded-[40px] rounded-tl-[5px] focus:border-[#A61E30]"
            />
          </div>
          <div className="flex-1">
            <label className="text-black text-[14px] mb-2 block">Tax Rate (%)</label>
            <input
              name="tax_rate"
              value={formData.tax_rate}
              onChange={handleChange}
              type="number"
              className="px-4 py-2 w-full bg-white border border-gray-200 shadow-sm text-gray-700 outline-none rounded-[40px] rounded-tl-[5px] focus:border-[#A61E30]"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="text-black text-[14px] mb-2 block">Average Delivery Time (minutes)</label>
          <input
            name="delivery_time"
            value={formData.delivery_time}
            onChange={handleChange}
            type="text"
            placeholder="e.g. 30"
            className="px-4 py-2 w-full bg-white border border-gray-200 shadow-sm text-gray-700 outline-none rounded-[40px] rounded-tl-[5px] focus:border-[#A61E30]"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-[#A61E30] text-white px-8 py-2.5 rounded-[8px] text-[14px] font-medium transition-all hover:bg-[#851826] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Saving Changes..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}