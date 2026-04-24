





import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const API_BASE = "https://api.queensplate.store/api/v1";

export default function Settings() {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    delivery_fee: "",
    tax_rate: "",
    delivery_time: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setFetching(false);
      return toast.error("Please login.");
    }

    try {
      setFetching(true);
      // Fetching existing settings
      const res = await axios.post(`${API_BASE}/superadmin/setting`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (res.data?.data) {
        const settings = res.data.data;
        setFormData({
          name: settings.name || "",
          delivery_fee: settings.delivery_fee || "",
          tax_rate: settings.tax_rate || "",
          delivery_time: settings.delivery_time || "",
          email: settings.email || "",
          phone: settings.phone || "",
        });
      }
    } catch (err) {
      if (err.response?.status === 403) {
        toast.error("Restricted: Superadmin role required.");
      } else {
        toast.error("Could not load settings.");
      }
    } finally {
      setFetching(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name) return toast.error("Restaurant name is required");
    const token = localStorage.getItem("token");
    
    // Create a loading toast
    const loadId = toast.loading("Updating settings...");

    try {
      setLoading(true);
      const res = await axios.post(
        `${API_BASE}/superadmin/setting`,
        {
          name: formData.name,
          delivery_fee: Number(formData.delivery_fee),
          tax_rate: Number(formData.tax_rate),
          delivery_time: String(formData.delivery_time),
          email: formData.email,
          phone: formData.phone,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Match your API response: { "status": "success", "message": "..." }
      if (res.data.status === "success") {
        toast.success(res.data.message || "Settings updated successfully!", { id: loadId });
      } else {
        toast.error("Failed to update settings.", { id: loadId });
      }
    } catch (err) {
      if (err.response?.status === 403) {
        toast.error("Permission Denied: Superadmin access required.", { id: loadId });
      } else {
        toast.error(err.response?.data?.message || "Update failed.", { id: loadId });
      }
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return (
    <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm">
      <div className="animate-pulse text-gray-500">Loading Configuration...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f4efe6] p-4 md:p-8 font-dm">
      {/* Ensure Toaster is present to show messages */}
      <Toaster position="top-center" />

      <div className="mb-6 mt-10">
        <h1 className="text-[32px] font-[600] text-black">Settings</h1>
      </div>

      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm max-w-2xl border border-gray-100">
        <h2 className="text-black font-[500] text-[20px] mb-8">Restaurant Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <Label text="Restaurant Name" />
            <Input name="name" value={formData.name} onChange={handleChange} />
          </div>

          <div className="flex flex-col">
            <Label text="Email Address" />
            <Input name="email" type="email" value={formData.email} onChange={handleChange} />
          </div>

          <div className="flex flex-col">
            <Label text="Phone Number" />
            <Input name="phone" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="flex flex-col">
            <Label text="Delivery Fee (₦)" />
            <Input name="delivery_fee" type="number" value={formData.delivery_fee} onChange={handleChange} />
          </div>

          <div className="flex flex-col">
            <Label text="Tax Rate (%)" />
            <Input name="tax_rate" type="number" value={formData.tax_rate} onChange={handleChange} />
          </div>

          <div className="md:col-span-2">
            <Label text="Average Delivery Time (minutes)" />
            <Input name="delivery_time" placeholder="e.g. 30" value={formData.delivery_time} onChange={handleChange} />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-8 bg-[#A61E30] text-white px-10 py-3 rounded-xl text-[14px] font-bold transition-all hover:bg-[#851826] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-red-900/10"
        >
          {loading ? "Processing..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}

const Label = ({ text }) => <label className="text-black font-[400] text-[13px] mb-1.5 ml-1 block uppercase tracking-wide opacity-70">{text}</label>;

const Input = ({ ...props }) => (
  <input
    {...props}
    className="px-5 py-3 w-full bg-white border border-gray-200 shadow-sm text-gray-700 outline-none rounded-[40px] rounded-tl-[4px] focus:border-[#A61E30] transition-colors"
  />
);