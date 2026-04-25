// // import React, { useState } from "react";
// // import { FiSearch } from "react-icons/fi";
// // import { BsThreeDotsVertical } from "react-icons/bs";
// // import { FiEdit2, FiRefreshCw, FiTrash2, FiPower } from "react-icons/fi";

// // const statusStyles = {
// //   Available: {
// //     bg: "bg-green-100",
// //     text: "text-green-700",
// //     border: "border-green-200",
// //     hover: "hover:bg-green-200",
// //   },
// //   Unavailable: {
// //     bg: "bg-red-100",
// //     text: "text-red-700",
// //     border: "border-red-200",
// //     hover: "hover:bg-red-200",
// //   },
// // };

// // export default function AdminPermission() {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [isAddModalOpen, setIsAddModalOpen] = useState(false);

// //   const [newItem, setNewItem] = useState({
// //     name: "",
// //     category: "",
// //     price: "",
// //     description: "",
// //     status: "Available",
// //     imageFile: null,        // actual File object for upload
// //     imagePreview: null,     // local URL for preview
// //   });

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setNewItem((prev) => ({ ...prev, [name]: value }));
// //   };

// //   // ────────────────────────────────────────────────
// //   //  Handle image selection + preview
// //   // ────────────────────────────────────────────────
// //   const handleImageUpload = (e) => {
// //     const file = e.target.files?.[0];
// //     if (!file) return;

// //     // Optional: basic validation (size, type)
// //     if (file.size > 5 * 1024 * 1024) { // 5MB limit
// //       alert("Image size should be less than 5MB");
// //       return;
// //     }
// //     if (!file.type.startsWith("image/")) {
// //       alert("Please select an image file");
// //       return;
// //     }

// //     const previewUrl = URL.createObjectURL(file);

// //     setNewItem((prev) => ({
// //       ...prev,
// //       imageFile: file,
// //       imagePreview: previewUrl,
// //     }));
// //   };

// //   // ────────────────────────────────────────────────
// //   //  Submit form (with image ready for upload)
// //   // ────────────────────────────────────────────────
// //   const handleAddItem = async (e) => {
// //     e.preventDefault();

// //     // Basic validation
// //     if (!newItem.name || !newItem.category || !newItem.price) {
// //       alert("Please fill in all required fields");
// //       return;
// //     }

// //     // Prepare data to send to backend
// //     const formData = new FormData();
// //     formData.append("name", newItem.name);
// //     formData.append("category", newItem.category);
// //     formData.append("price", newItem.price);
// //     formData.append("description", newItem.description || "");
// //     formData.append("status", newItem.status);

// //     if (newItem.imageFile) {
// //       formData.append("image", newItem.imageFile);
// //     }

// //     try {
// //       // Example: real API call (uncomment & adjust)
// //       // const response = await fetch("/api/menu-items", {
// //       //   method: "POST",
// //       //   body: formData,
// //       // });
// //       // if (!response.ok) throw new Error("Failed to add item");

// //       console.log("Submitting new item:", {
// //         name: newItem.name,
// //         category: newItem.category,
// //         price: newItem.price,
// //         description: newItem.description,
// //         status: newItem.status,
// //         hasImage: !!newItem.imageFile,
// //       });

// //       // Reset form
// //       setNewItem({
// //         name: "",
// //         category: "",
// //         price: "",
// //         description: "",
// //         status: "Available",
// //         imageFile: null,
// //         imagePreview: null,
// //       });

// //       setIsAddModalOpen(false);

// //       // In real app: refresh list / show success toast
// //       alert("Item added successfully! (demo)");
// //     } catch (err) {
// //       console.error("Error adding item:", err);
// //       alert("Failed to add item. Please try again.");
// //     }
// //   };

 
// //   return (
// //     <div className="min-h-screen bg-[#f4efe6] p-6 md:p-8 font-sans">
// //       <div className="max-w-7xl mx-auto space-y-6">
// //         {/* Header */}
// //         <div className="flex mt-10 flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
// //           <div>
// //             <h1 className="text-3xl md:text-[32px] font-bold text-gray-900 font-roboto">
// //               Admin Management
// //             </h1>
// //             <p className="mt-1 text-sm text-gray-600">
// //               3 admin accounts
// //             </p>
// //           </div>

// //           <button
// //             onClick={() => setIsAddModalOpen(true)}
// //             className="bg-[#D4AF37] hover:bg-[#c09b2f] text-white px-5 py-2.5 rounded-xl md:rounded-[14px] text-sm md:text-[13px] font-medium shadow-sm transition-colors flex items-center gap-1.5"
// //           >
// //             + Create Admin
// //           </button>
// //         </div>

// //         {/* Search */}
// //         <div className="relative w-full">
// //           <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
// //           <input
// //             type="text"
// //             placeholder="Search menu items..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             className="pl-10  pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
// //           />
// //         </div>

// //         <div className="bg-[#f7f7f7] rounded-2xl p-6 shadow-sm border border-gray-200 overflow-x-auto">
// //   <table className="w-full text-left border-separate border-spacing-y-4">
// //     <thead>
// //       <tr className="text-gray-500 text-sm">
// //         <th>ADMIN ID</th>
// //         <th>NAME</th>
// //         <th>EMAIL ADDRESS</th>
// //         <th>PHONE</th>
// //         <th>ROLES</th>
// //         <th>STATUS</th>
// //         <th>CREATED</th>
// //         <th>ACTION</th>
// //       </tr>
// //     </thead>

// //     <tbody>
// //       {[
// //         {
// //           id: "A001",
// //           initials: "CA",
// //           name: "Chukwuma Adeyemi",
// //           email: "Chuck@queensplate.com",
// //           phone: "+234 801 234 5678",
// //           role: "Admin",
// //           status: "Active",
// //         },
// //         {
// //           id: "A002",
// //           initials: "AN",
// //           name: "Amara Nwosu",
// //           email: "Amara@queensplate.com",
// //           phone: "+234 802 345 6789",
// //           role: "Manager",
// //           status: "Inactive",
// //         },
// //         {
// //           id: "A003",
// //           initials: "CO",
// //           name: "Chinelo Okoro",
// //           email: "Chinelo@queensplate.com",
// //           phone: "+234 803 456 7890",
// //           role: "Admin",
// //           status: "Active",
// //         },
// //       ]
// //         .filter((item) =>
// //           item.name.toLowerCase().includes(searchTerm.toLowerCase())
// //         )
// //         .map((admin, index) => (
// //           <tr
// //             key={index}
// //             className=" text-sm"
// //           >
// //             <td className="py-4 text-gray-500 px-2">{admin.id}</td>

// //             {/* Name + Avatar */}
// //             <td className="py-4 px-2 flex items-center gap-3">
// //               <div className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 bg-gray-300 font-dm text-xs font-semibold">
// //                 {admin.initials}
// //               </div>
// //               <span className="text-gray-500">{admin.name}</span>
// //             </td>

// //             <td className="py-4 px-2 text-gray-600">{admin.email}</td>
// //             <td className="py-4 px-2 text-gray-600">{admin.phone}</td>

// //             {/* Role */}
// //             <td className="py-4 px-2">
// //               <span
// //                 className={`px-3 py-1 text-xs rounded-full ${
// //                   admin.role === "Admin"
// //                     ? "bg-orange-100 text-orange-600"
// //                     : "bg-yellow-100 text-yellow-600"
// //                 }`}
// //               >
// //                 {admin.role}
// //               </span>
// //             </td>

// //             {/* Status */}
// //             <td className="py-4 px-2">
// //               <span
// //                 className={`px-3 py-1 text-xs rounded-full ${
// //                   admin.status === "Active"
// //                     ? "bg-green-100 text-green-600"
// //                     : "bg-red-100 text-red-500"
// //                 }`}
// //               >
// //                 {admin.status}
// //               </span>
// //             </td>

// //             <td className="py-4 px-2 text-gray-500">
// //               Oct 24, 2023
// //             </td>

// //             {/* Actions */}
// //             <td className="py-4 px-2 flex items-center gap-3 text-gray-500">
// //               <FiEdit2 className="cursor-pointer hover:text-black" />

// //               <button
// //                 onClick={() => alert("Toggle status")}
// //                 className="cursor-pointer hover:text-black"
// //               >
// //                <FiPower/>
// //               </button>
// //               <button
// //                 onClick={() => alert("Toggle status")}
// //                 className="cursor-pointer hover:text-black"
// //               >
// //                <FiRefreshCw/>
// //               </button>

// //               <button
// //                 onClick={() => alert("Delete admin")}
// //                 className="text-red-500 hover:text-red-700"
// //               >
// //                 <FiTrash2 />
// //               </button>
// //             </td>
// //           </tr>
// //         ))}
// //     </tbody>
// //   </table>
// // </div>
       
// //         {isAddModalOpen && (
// //           <div className="fixed inset-0  z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
// //             <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-gray-200">
// //               {/* Header */}
// //               <div className="px-6 py-3  bg-white/80">
// //                 <h2 className="text-xl mt-3 font-bold text-center md:text-center text-[#A61E30]">
// //                  Create Admin
// //                 </h2>
// //               </div>

// //               {/* Form */}
// //               <form onSubmit={handleAddItem} className="p-6 space-y-5">
// //                 <input
// //                   type="text"
// //                   name="name"
// //                   value={newItem.name}
// //                   onChange={handleInputChange}
// //                   placeholder="Jollof Rice"
// //                   required
// //                   className="pl-3  pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px]  font-dm"
// //                 />

// //                 <input
// //                   type="text"
// //                   name="email"
// //                   value={newItem.email}
// //                   onChange={handleInputChange}
// //                   placeholder="Email"
// //                   required
// //                   className="pl-3  pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[28px] rounded-tl-[5px]  font-dm"
// //                 />

// //                 <input
// //                   type="text"
// //                   name="Phone"
// //                   value={newItem.phone}
// //                   onChange={handleInputChange}
// //                   placeholder="phone number"
// //                   required
// //                   className="pl-3  pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px]  font-dm"
// //                 />
// //                 <input
// //                   type="text"
// //                   name="Phone"
// //                   value={newItem.role}
// //                   onChange={handleInputChange}
// //                   placeholder="Role"
// //                   required
// //                   className="pl-3  pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px]  font-dm"
// //                 />

               

            

              

// //                 {/* Buttons */}
// //                 <div className="flex justify-end gap-3 pt-4">
// //                   <button
// //                     type="button"
// //                     onClick={() => setIsAddModalOpen(false)}
// //                     className="px-6 py-2.5 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-[11.2px] transition-colors font-medium"
// //                   >
// //                     Cancel
// //                   </button>
// //                   <button
// //                     type="submit"
// //                     className="px-6 py-2.5 bg-[#A61E30] hover:bg-red-700 text-white rounded-[11.2px] transition-colors font-medium shadow-sm"
// //                   >
// //                    Create
// //                   </button>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }








// // import React, { useState, useEffect } from "react";
// // import { FiSearch, FiEdit2, FiRefreshCw, FiTrash2, FiPower } from "react-icons/fi";
// // import { getAdmins, createAdmin, updateAdmin, deleteAdmin, resetAdminPassword } from "../api/apiServices"; 
// // import toast from "react-hot-toast";

// // export default function AdminPermission() {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
// //   const [admins, setAdmins] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [totalAdmins, setTotalAdmins] = useState(0);
// //   const [editingId, setEditingId] = useState(null);

// //   const [newItem, setNewItem] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     password: "",
// //   });

// //   // Fetch Admins on Mount
// //   const fetchAdmins = async () => {
// //     setLoading(true);
// //     try {
// //       const res = await getAdmins();
// //       if (res.success) {
// //         setAdmins(res.data.data);
// //         setTotalAdmins(res.data.total);
// //       }
// //     } catch (err) {
// //       toast.error("Failed to fetch admins");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchAdmins();
// //   }, []);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setNewItem((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       if (editingId) {
// //         await updateAdmin(editingId, newItem);
// //         toast.success("Admin updated successfully");
// //       } else {
// //         await createAdmin(newItem);
// //         toast.success("Admin created successfully");
// //       }
// //       setIsAddModalOpen(false);
// //       setEditingId(null);
// //       setNewItem({ name: "", email: "", phone: "", password: "" });
// //       fetchAdmins();
// //     } catch (err) {
// //       toast.error(err.response?.data?.message || "Operation failed");
// //     }
// //   };

// //   const handleEditClick = (admin) => {
// //     setEditingId(admin.id);
// //     setNewItem({
// //       name: admin.name,
// //       email: admin.email,
// //       phone: admin.phone || "",
// //       password: "", // Leave blank for security
// //     });
// //     setIsAddModalOpen(true);
// //   };

// //   const handleDelete = async (id) => {
// //     const password = prompt("Please enter YOUR password to confirm deletion:");
// //     if (!password) return;
// //     try {
// //       await deleteAdmin(id, password);
// //       toast.success("Admin deleted");
// //       fetchAdmins();
// //     } catch (err) {
// //       toast.error("Deletion failed. Check your password.");
// //     }
// //   };

// //   const handleResetPassword = async (id) => {
// //     const newPass = prompt("Enter new password for this admin:");
// //     if (!newPass) return;
// //     try {
// //       await resetAdminPassword(id, newPass);
// //       toast.success("Password reset successfully");
// //     } catch (err) {
// //       toast.error("Reset failed");
// //     }
// //   };

// //   const getInitials = (name) => name?.split(" ").map(n => n[0]).join("").toUpperCase() || "??";

// //   return (
// //     <div className="min-h-screen bg-[#f4efe6] p-6 md:p-8 font-sans">
// //       <div className="max-w-7xl mx-auto space-y-6">
// //         {/* Header */}
// //         <div className="flex mt-10 flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
// //           <div>
// //             <h1 className="text-3xl md:text-[32px] font-bold text-gray-900 font-roboto">
// //               Admin Management
// //             </h1>
// //             <p className="mt-1 text-sm text-gray-600">
// //               {totalAdmins} admin accounts
// //             </p>
// //           </div>

// //           <button
// //             onClick={() => {
// //               setEditingId(null);
// //               setNewItem({ name: "", email: "", phone: "", password: "" });
// //               setIsAddModalOpen(true);
// //             }}
// //             className="bg-[#D4AF37] hover:bg-[#c09b2f] text-white px-5 py-2.5 rounded-xl md:rounded-[14px] text-sm md:text-[13px] font-medium shadow-sm transition-colors flex items-center gap-1.5"
// //           >
// //             + Create Admin
// //           </button>
// //         </div>

// //         {/* Search */}
// //         <div className="relative w-full">
// //           <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
// //           <input
// //             type="text"
// //             placeholder="Search admins by name..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             className="pl-10 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
// //           />
// //         </div>

// //         <div className="bg-[#f7f7f7] rounded-2xl p-6 shadow-sm border border-gray-200 overflow-x-auto">
// //           <table className="w-full text-left border-separate border-spacing-y-4">
// //             <thead>
// //               <tr className="text-gray-500 text-sm">
// //                 <th>ADMIN ID</th>
// //                 <th>NAME</th>
// //                 <th>EMAIL ADDRESS</th>
// //                 <th>PHONE</th>
// //                 <th>STATUS</th>
// //                 <th>CREATED</th>
// //                 <th>ACTION</th>
// //               </tr>
// //             </thead>

// //             <tbody>
// //               {loading ? (
// //                 <tr><td colSpan="7" className="text-center py-10">Loading admins...</td></tr>
// //               ) : (
// //                 admins
// //                 .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
// //                 .map((admin) => (
// //                   <tr key={admin.id} className="text-sm bg-white shadow-sm">
// //                     <td className="py-4 text-gray-500 px-4 rounded-l-lg">#{admin.id}</td>
// //                     <td className="py-4 px-2 flex items-center gap-3">
// //                       <div className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 bg-gray-200 font-dm text-xs font-semibold">
// //                         {getInitials(admin.name)}
// //                       </div>
// //                       <span className="text-gray-700 font-medium">{admin.name}</span>
// //                     </td>
// //                     <td className="py-4 px-2 text-gray-600">{admin.email}</td>
// //                     <td className="py-4 px-2 text-gray-600">{admin.phone || "N/A"}</td>
// //                     <td className="py-4 px-2">
// //                       <span className={`px-3 py-1 text-xs rounded-full bg-green-100 text-green-600`}>
// //                         Active
// //                       </span>
// //                     </td>
// //                     <td className="py-4 px-2 text-gray-500">
// //                       {new Date(admin.created_at).toLocaleDateString()}
// //                     </td>
// //                     <td className="py-4 px-2 rounded-r-lg flex items-center gap-3 text-gray-500">
// //                       <FiEdit2 className="cursor-pointer hover:text-black" onClick={() => handleEditClick(admin)} />
// //                       <FiRefreshCw className="cursor-pointer hover:text-blue-500" title="Reset Password" onClick={() => handleResetPassword(admin.id)} />
// //                       <FiTrash2 className="text-red-500 cursor-pointer hover:text-red-700" onClick={() => handleDelete(admin.id)} />
// //                     </td>
// //                   </tr>
// //                 ))
// //               )}
// //             </tbody>
// //           </table>
// //         </div>

// //         {/* Create/Edit Modal */}
// //         {isAddModalOpen && (
// //           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
// //             <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-gray-200">
// //               <div className="px-6 py-4 bg-white border-b">
// //                 <h2 className="text-xl font-bold text-center text-[#A61E30]">
// //                   {editingId ? "Update Admin" : "Create Admin"}
// //                 </h2>
// //               </div>

// //               <form onSubmit={handleSubmit} className="p-6 space-y-4">
// //                 <input
// //                   type="text"
// //                   name="name"
// //                   value={newItem.name}
// //                   onChange={handleInputChange}
// //                   placeholder="Full Name"
// //                   required
// //                   className="px-4 py-2 w-full border rounded-full outline-none focus:ring-1 focus:ring-[#A61E30]"
// //                 />
// //                 <input
// //                   type="email"
// //                   name="email"
// //                   value={newItem.email}
// //                   onChange={handleInputChange}
// //                   placeholder="Email Address"
// //                   required
// //                   className="px-4 py-2 w-full border rounded-full outline-none focus:ring-1 focus:ring-[#A61E30]"
// //                 />
// //                 <input
// //                   type="text"
// //                   name="phone"
// //                   value={newItem.phone}
// //                   onChange={handleInputChange}
// //                   placeholder="Phone Number"
// //                   className="px-4 py-2 w-full border rounded-full outline-none focus:ring-1 focus:ring-[#A61E30]"
// //                 />
// //                 <input
// //                   type="password"
// //                   name="password"
// //                   value={newItem.password}
// //                   onChange={handleInputChange}
// //                   placeholder={editingId ? "New Password (optional)" : "Password"}
// //                   required={!editingId}
// //                   className="px-4 py-2 w-full border rounded-full outline-none focus:ring-1 focus:ring-[#A61E30]"
// //                 />

// //                 <div className="flex justify-end gap-3 pt-4">
// //                   <button
// //                     type="button"
// //                     onClick={() => setIsAddModalOpen(false)}
// //                     className="px-6 py-2 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
// //                   >
// //                     Cancel
// //                   </button>
// //                   <button
// //                     type="submit"
// //                     className="px-6 py-2 bg-[#A61E30] text-white rounded-xl hover:bg-red-800 transition-colors"
// //                   >
// //                     {editingId ? "Update" : "Create"}
// //                   </button>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }





// import React, { useState, useEffect } from "react";
// import { FiSearch, FiEdit2, FiRefreshCw, FiTrash2, FiPower } from "react-icons/fi";
// import { getAdmins, createAdmin, updateAdmin, deleteAdmin, resetAdminPassword } from "../api/apiServices"; 
// import toast from "react-hot-toast";

// export default function AdminPermission() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [admins, setAdmins] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [totalAdmins, setTotalAdmins] = useState(0);
//   const [editingId, setEditingId] = useState(null);

//   // Identify if current user has rights
//   const userType = localStorage.getItem("user_type");
//   const isSuperAdmin = userType === "superadmin";

//   const [newItem, setNewItem] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   const fetchAdmins = async () => {
//     setLoading(true);
//     try {
//       const res = await getAdmins();
//       if (res.success) {
//         // Mapping Laravel paginated data
//         setAdmins(res.data.data || []);
//         setTotalAdmins(res.data.total || 0);
//       }
//     } catch (err) {
//       toast.error("Failed to fetch admins");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAdmins();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewItem((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingId) {
//         await updateAdmin(editingId, newItem);
//         toast.success("Admin updated successfully");
//       } else {
//         await createAdmin(newItem);
//         toast.success("Admin created successfully");
//       }
//       setIsAddModalOpen(false);
//       setEditingId(null);
//       setNewItem({ name: "", email: "", phone: "", password: "" });
//       fetchAdmins();
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Operation failed");
//     }
//   };

//   const handleEditClick = (admin) => {
//     setEditingId(admin.id);
//     setNewItem({
//       name: admin.name,
//       email: admin.email,
//       phone: admin.phone || "",
//       password: "", 
//     });
//     setIsAddModalOpen(true);
//   };

//   const handleDelete = async (id) => {
//     const password = prompt("Confirm your Super Admin password to delete:");
//     if (!password) return;
//     try {
//       await deleteAdmin(id, password);
//       toast.success("Admin deleted");
//       fetchAdmins();
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Deletion failed");
//     }
//   };

//   const handleResetPassword = async (id) => {
//     const newPass = prompt("Enter new password for this admin:");
//     if (!newPass) return;
//     try {
//       await resetAdminPassword(id, newPass);
//       toast.success("Password reset successfully");
//     } catch (err) {
//       toast.error("Reset failed");
//     }
//   };

//   const getInitials = (name) => name?.split(" ").map(n => n[0]).join("").toUpperCase().substring(0, 2) || "??";

//   return (
//     <div className="min-h-screen bg-[#f4efe6] p-6 md:p-8 font-sans">
//       <div className="max-w-7xl mx-auto space-y-6">
//         {/* Header */}
//         <div className="flex mt-10 flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//           <div>
//             <h1 className="text-3xl md:text-[32px] font-bold text-gray-900 font-roboto">
//               Admin Management
//             </h1>
//             <p className="mt-1 text-sm text-gray-600">
//               {totalAdmins} admin accounts
//             </p>
//           </div>

//           {/* Only Super Admin can see Create button */}
//           {isSuperAdmin && (
//             <button
//               onClick={() => {
//                 setEditingId(null);
//                 setNewItem({ name: "", email: "", phone: "", password: "" });
//                 setIsAddModalOpen(true);
//               }}
//               className="bg-[#D4AF37] hover:bg-[#c09b2f] text-white px-5 py-2.5 rounded-xl md:rounded-[14px] text-sm md:text-[13px] font-medium shadow-sm transition-colors flex items-center gap-1.5"
//             >
//               + Create Admin
//             </button>
//           )}
//         </div>

//         {/* Search */}
//         <div className="relative w-full">
//           <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//           <input
//             type="text"
//             placeholder="Search admins..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-10 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//           />
//         </div>

//         <div className="bg-[#f7f7f7] rounded-2xl p-6 shadow-sm border border-gray-200 overflow-x-auto">
//           <table className="w-full text-left border-separate border-spacing-y-4">
//             <thead>
//               <tr className="text-gray-500 text-sm">
//                 <th className="px-2">ADMIN ID</th>
//                 <th className="px-2">NAME</th>
//                 <th className="px-2">EMAIL ADDRESS</th>
//                 <th className="px-2">PHONE</th>
//                 <th className="px-2">STATUS</th>
//                 <th className="px-2">CREATED</th>
//                 <th className="px-2">ACTION</th>
//               </tr>
//             </thead>

//             <tbody>
//               {loading ? (
//                 <tr><td colSpan="7" className="text-center py-10 text-gray-400">Loading Admins...</td></tr>
//               ) : (
//                 admins
//                 .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
//                 .map((admin, index) => (
//                   <tr key={admin.id || index} className="text-sm">
//                     <td className="py-4 text-gray-500 px-2">#{admin.id}</td>

//                     <td className="py-4 px-2 flex items-center gap-3">
//                       <div className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 bg-gray-300 font-dm text-xs font-semibold">
//                         {getInitials(admin.name)}
//                       </div>
//                       <span className="text-gray-500">{admin.name}</span>
//                     </td>

//                     <td className="py-4 px-2 text-gray-600">{admin.email}</td>
//                     <td className="py-4 px-2 text-gray-600">{admin.phone || "N/A"}</td>

//                     <td className="py-4 px-2">
//                       <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
//                         Active
//                       </span>
//                     </td>

//                     <td className="py-4 px-2 text-gray-500">
//                       {new Date(admin.created_at).toLocaleDateString()}
//                     </td>

//                     <td className="py-4 px-2 flex items-center gap-3 text-gray-500">
//                       <FiEdit2 className="cursor-pointer hover:text-black" onClick={() => handleEditClick(admin)} />
//                       <FiRefreshCw className="cursor-pointer hover:text-black" onClick={() => handleResetPassword(admin.id)} />
//                       <button 
//                         onClick={() => handleDelete(admin.id)}
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         <FiTrash2 />
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
        
//         {/* Create/Edit Modal */}
//         {isAddModalOpen && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
//             <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-gray-200">
//               <div className="px-6 py-3 bg-white/80 border-b">
//                 <h2 className="text-xl mt-3 font-bold text-center text-[#A61E30]">
//                   {editingId ? "Update Admin" : "Create Admin"}
//                 </h2>
//               </div>

//               <form onSubmit={handleSubmit} className="p-6 space-y-5">
//                 <input
//                   type="text"
//                   name="name"
//                   value={newItem.name}
//                   onChange={handleInputChange}
//                   placeholder="Full Name"
//                   required
//                   className="pl-3 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//                 />

//                 <input
//                   type="email"
//                   name="email"
//                   value={newItem.email}
//                   onChange={handleInputChange}
//                   placeholder="Email"
//                   required
//                   className="pl-3 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[28px] rounded-tl-[5px] font-dm"
//                 />

//                 <input
//                   type="text"
//                   name="phone"
//                   value={newItem.phone}
//                   onChange={handleInputChange}
//                   placeholder="Phone number"
//                   required
//                   className="pl-3 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//                 />

//                 <input
//                   type="password"
//                   name="password"
//                   value={newItem.password}
//                   onChange={handleInputChange}
//                   placeholder={editingId ? "New Password (Optional)" : "Password"}
//                   required={!editingId}
//                   className="pl-3 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//                 />

//                 <div className="flex justify-end gap-3 pt-4">
//                   <button
//                     type="button"
//                     onClick={() => setIsAddModalOpen(false)}
//                     className="px-6 py-2.5 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-[11.2px] transition-colors font-medium"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-6 py-2.5 bg-[#A61E30] hover:bg-red-700 text-white rounded-[11.2px] transition-colors font-medium shadow-sm"
//                   >
//                     {editingId ? "Update" : "Create"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }





// import React, { useState, useEffect } from "react";
// import { FiSearch, FiEdit2, FiRefreshCw, FiTrash2 } from "react-icons/fi";
// import { getAdmins, createAdmin, updateAdmin, deleteAdmin, resetAdminPassword } from "../api/apiServices"; 
// import toast from "react-hot-toast";

// export default function AdminPermission() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [admins, setAdmins] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [totalAdmins, setTotalAdmins] = useState(0);
//   const [editingId, setEditingId] = useState(null);

//   const [newItem, setNewItem] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   // Fetch Admins on Mount
//   const fetchAdmins = async () => {
//     setLoading(true);
//     try {
//       const res = await getAdmins();
//       if (res.success) {
//         // Mapping Laravel paginated data: res.data.data
//         setAdmins(res.data.data || []);
//         setTotalAdmins(res.data.total || 0);
//       }
//     } catch (err) {
//       toast.error("Failed to fetch admins");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAdmins();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewItem((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingId) {
//         // Update existing admin
//         await updateAdmin(editingId, {
//           name: newItem.name,
//           email: newItem.email,
//           phone: newItem.phone,
//           // Only send password if the user typed a new one
//           ...(newItem.password && { password: newItem.password })
//         });
//         toast.success("Admin updated successfully");
//       } else {
//         // Create new admin
//         await createAdmin(newItem);
//         toast.success("Admin created successfully");
//       }
//       setIsAddModalOpen(false);
//       setEditingId(null);
//       setNewItem({ name: "", email: "", phone: "", password: "" });
//       fetchAdmins();
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Operation failed");
//     }
//   };

//   const handleEditClick = (admin) => {
//     setEditingId(admin.id);
//     setNewItem({
//       name: admin.name,
//       email: admin.email,
//       phone: admin.phone || "",
//       password: "", 
//     });
//     setIsAddModalOpen(true);
//   };

//   const handleDelete = async (id) => {
//     const password = prompt("Please enter YOUR password to confirm deletion:");
//     if (!password) return;
//     try {
//       await deleteAdmin(id, password);
//       toast.success("Admin deleted");
//       fetchAdmins();
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Deletion failed. Check your password.");
//     }
//   };

//   const handleResetPassword = async (id) => {
//     const newPass = prompt("Enter new password for this admin:");
//     if (!newPass) return;
//     try {
//       await resetAdminPassword(id, newPass);
//       toast.success("Password reset successfully");
//     } catch (err) {
//       toast.error("Reset failed");
//     }
//   };

//   const getInitials = (name) => name?.split(" ").map(n => n[0]).join("").toUpperCase().substring(0, 2) || "??";

//   return (
//     <div className="min-h-screen bg-[#f4efe6] p-6 md:p-8 font-sans">
//       <div className="max-w-7xl mx-auto space-y-6">
//         {/* Header */}
//         <div className="flex mt-10 flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//           <div>
//             <h1 className="text-3xl md:text-[32px] font-bold text-gray-900 font-roboto">
//               Admin Management
//             </h1>
//             <p className="mt-1 text-sm text-gray-600">
//               {totalAdmins} admin accounts
//             </p>
//           </div>

//           {/* Create Button - Always visible for Super Admins */}
//           <button
//             onClick={() => {
//               setEditingId(null);
//               setNewItem({ name: "", email: "", phone: "", password: "" });
//               setIsAddModalOpen(true);
//             }}
//             className="bg-[#D4AF37] hover:bg-[#c09b2f] text-white px-5 py-2.5 rounded-xl md:rounded-[14px] text-sm md:text-[13px] font-medium shadow-sm transition-colors flex items-center gap-1.5"
//           >
//             + Create Admin
//           </button>
//         </div>

//         {/* Search */}
//         <div className="relative w-full">
//           <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//           <input
//             type="text"
//             placeholder="Search admins by name..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-10 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//           />
//         </div>

//         <div className="bg-[#f7f7f7] rounded-2xl p-6 shadow-sm border border-gray-200 overflow-x-auto">
//           <table className="w-full text-left border-separate border-spacing-y-4">
//             <thead>
//               <tr className="text-gray-500 text-sm">
//                 <th className="px-2">ADMIN ID</th>
//                 <th className="px-2">NAME</th>
//                 <th className="px-2">EMAIL ADDRESS</th>
//                 <th className="px-2">PHONE</th>
//                 <th className="px-2">STATUS</th>
//                 <th className="px-2">CREATED</th>
//                 <th className="px-2">ACTION</th>
//               </tr>
//             </thead>

//             <tbody>
//               {loading ? (
//                 <tr><td colSpan="7" className="text-center py-10 text-gray-400">Loading admins...</td></tr>
//               ) : (
//                 admins
//                 .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
//                 .map((admin) => (
//                   <tr key={admin.id} className="text-sm bg-white shadow-sm">
//                     <td className="py-4 text-gray-500 px-4 rounded-l-lg">#{admin.id}</td>
//                     <td className="py-4 px-2 flex items-center gap-3">
//                       <div className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 bg-gray-200 font-dm text-xs font-semibold">
//                         {getInitials(admin.name)}
//                       </div>
//                       <span className="text-gray-700 font-medium">{admin.name}</span>
//                     </td>
//                     <td className="py-4 px-2 text-gray-600">{admin.email}</td>
//                     <td className="py-4 px-2 text-gray-600">{admin.phone || "N/A"}</td>
//                     <td className="py-4 px-2">
//                       <span className={`px-3 py-1 text-xs rounded-full bg-green-100 text-green-600`}>
//                         Active
//                       </span>
//                     </td>
//                     <td className="py-4 px-2 text-gray-500">
//                       {new Date(admin.created_at).toLocaleDateString()}
//                     </td>
//                     <td className="py-4 px-2 rounded-r-lg flex items-center gap-3 text-gray-500">
//                       <FiEdit2 className="cursor-pointer hover:text-black" onClick={() => handleEditClick(admin)} />
//                       <FiRefreshCw className="cursor-pointer hover:text-blue-500" title="Reset Password" onClick={() => handleResetPassword(admin.id)} />
//                       <FiTrash2 className="text-red-500 cursor-pointer hover:text-red-700" onClick={() => handleDelete(admin.id)} />
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Create/Edit Modal */}
//         {isAddModalOpen && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
//             <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-gray-200">
//               <div className="px-6 py-4 bg-white border-b">
//                 <h2 className="text-xl font-bold text-center text-[#A61E30] mt-2">
//                   {editingId ? "Update Admin" : "Create Admin"}
//                 </h2>
//               </div>

//               <form onSubmit={handleSubmit} className="p-6 space-y-4">
//                 <input
//                   type="text"
//                   name="name"
//                   value={newItem.name}
//                   onChange={handleInputChange}
//                   placeholder="Full Name"
//                   required
//                   className="px-4 py-2 w-full border bg-white shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   value={newItem.email}
//                   onChange={handleInputChange}
//                   placeholder="Email Address"
//                   required
//                   className="px-4 py-2 w-full border bg-white shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//                 />
//                 <input
//                   type="text"
//                   name="phone"
//                   value={newItem.phone}
//                   onChange={handleInputChange}
//                   placeholder="Phone Number"
//                   required
//                   className="px-4 py-2 w-full border bg-white shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//                 />
//                 <input
//                   type="password"
//                   name="password"
//                   value={newItem.password}
//                   onChange={handleInputChange}
//                   placeholder={editingId ? "New Password (optional)" : "Password"}
//                   required={!editingId}
//                   className="px-4 py-2 w-full border bg-white shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//                 />

//                 <div className="flex justify-end gap-3 pt-4">
//                   <button
//                     type="button"
//                     onClick={() => setIsAddModalOpen(false)}
//                     className="px-6 py-2 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-6 py-2 bg-[#A61E30] text-white rounded-xl hover:bg-red-800 transition-colors"
//                   >
//                     {editingId ? "Update" : "Create"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }






import React, { useState, useEffect } from "react";
import {
  FiSearch,
  FiEdit2,
  FiRefreshCw,
  FiTrash2,
} from "react-icons/fi";
import {
  getAdmins,
  createAdmin,
  updateAdmin,
  deleteAdmin,
  resetAdminPassword,
} from "../api/apiServices";

import toast from "react-hot-toast";

export default function AdminPermission() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  const [totalAdmins, setTotalAdmins] = useState(0);

  const [editingId, setEditingId] = useState(null);

  const [submitting, setSubmitting] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [newItem, setNewItem] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  // FETCH ADMINS
  const fetchAdmins = async () => {
    setLoading(true);

    try {
      const res = await getAdmins();

      if (res.success) {
        setAdmins(res.data.data || []);
        setTotalAdmins(res.data.total || 0);
      }
    } catch (err) {
      toast.error("Failed to fetch admins");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  // HANDLE INPUT CHANGE
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // CREATE / UPDATE ADMIN
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      if (editingId) {
        await updateAdmin(editingId, {
          name: newItem.name,
          email: newItem.email,
          phone: newItem.phone,
          ...(newItem.password && {
            password: newItem.password,
          }),
        });

        toast.success("Admin updated successfully");
      } else {
        await createAdmin(newItem);

        toast.success("Admin created successfully");
      }

      setIsAddModalOpen(false);

      setEditingId(null);

      setNewItem({
        name: "",
        email: "",
        phone: "",
        password: "",
      });

      fetchAdmins();
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Permission denied — Superadmin required"
      );
    } finally {
      setSubmitting(false);
    }
  };

  // EDIT ADMIN
  const handleEditClick = (admin) => {
    setEditingId(admin.id);

    setNewItem({
      name: admin.name,
      email: admin.email,
      phone: admin.phone || "",
      password: "",
    });

    setIsAddModalOpen(true);
  };

  // DELETE ADMIN
  const handleDelete = async (id) => {
    const password = prompt(
      "Please enter YOUR password to confirm deletion:"
    );

    if (!password) return;

    try {
      await deleteAdmin(id, password);

      toast.success("Admin deleted");

      fetchAdmins();
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Deletion failed. Check your password."
      );
    }
  };

  // RESET PASSWORD
  const handleResetPassword = async (id) => {
    const newPass = prompt(
      "Enter new password for this admin:"
    );

    if (!newPass) return;

    try {
      await resetAdminPassword(id, newPass);

      toast.success("Password reset successfully");
    } catch (err) {
      toast.error("Reset failed");
    }
  };

  const getInitials = (name) =>
    name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2) || "??";

  return (
    <div className="min-h-screen bg-[#f4efe6] p-6 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* HEADER */}
        <div className="flex mt-10 flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-[32px] font-bold text-gray-900 font-roboto">
              Admin Management
            </h1>

            <p className="mt-1 text-sm text-gray-600">
              {totalAdmins} admin accounts
            </p>
          </div>

          {/* CREATE BUTTON */}
          <button
            onClick={() => {
              setEditingId(null);

              setNewItem({
                name: "",
                email: "",
                phone: "",
                password: "",
              });

              setIsAddModalOpen(true);
            }}
            className="bg-[#D4AF37] hover:bg-[#c09b2f] text-white px-5 py-2.5 rounded-xl md:rounded-[14px] text-sm md:text-[13px] font-medium shadow-sm transition-colors flex items-center gap-1.5"
          >
            + Create Admin
          </button>
        </div>

        {/* SEARCH */}
        <div className="relative w-full">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

          <input
            type="text"
            placeholder="Search admins by name..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className="pl-10 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px]"
          />
        </div>

        {/* TABLE */}
        <div className="bg-[#f7f7f7] rounded-2xl p-6 shadow-sm border border-gray-200 overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-4">

            <thead>
              <tr className="text-gray-500 text-sm">
                <th className="px-2">ADMIN ID</th>
                <th className="px-2">NAME</th>
                <th className="px-2">EMAIL</th>
                <th className="px-2">PHONE</th>
                <th className="px-2">STATUS</th>
                <th className="px-2">CREATED</th>
                <th className="px-2">ACTION</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-10 text-gray-400"
                  >
                    Loading admins...
                  </td>
                </tr>
              ) : (
                admins
                  .filter((item) =>
                    item.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  )
                  .map((admin) => (
                    <tr
                      key={admin.id}
                      className="text-sm bg-white shadow-sm"
                    >
                      <td className="py-4 text-gray-500 px-4 rounded-l-lg">
                        #{admin.id}
                      </td>

                      <td className="py-4 px-2 flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 bg-gray-200 text-xs font-semibold">
                          {getInitials(admin.name)}
                        </div>

                        <span className="text-gray-700 font-medium">
                          {admin.name}
                        </span>
                      </td>

                      <td className="py-4 px-2 text-gray-600">
                        {admin.email}
                      </td>

                      <td className="py-4 px-2 text-gray-600">
                        {admin.phone || "N/A"}
                      </td>

                      <td className="py-4 px-2">
                        <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
                          Active
                        </span>
                      </td>

                      <td className="py-4 px-2 text-gray-500">
                        {new Date(
                          admin.created_at
                        ).toLocaleDateString()}
                      </td>

                      <td className="py-4 px-2 flex gap-3 text-gray-500">

                        <FiEdit2
                          className="cursor-pointer hover:text-black"
                          onClick={() =>
                            handleEditClick(admin)
                          }
                        />

                        <FiRefreshCw
                          className="cursor-pointer hover:text-blue-500"
                          onClick={() =>
                            handleResetPassword(admin.id)
                          }
                        />

                        <FiTrash2
                          className="text-red-500 cursor-pointer hover:text-red-700"
                          onClick={() =>
                            handleDelete(admin.id)
                          }
                        />

                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>

        {/* MODAL */}
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">

            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-gray-200">

              <div className="px-6 py-4 border-b">
                <h2 className="text-xl font-bold text-center text-[#A61E30] mt-2">
                  {editingId
                    ? "Update Admin"
                    : "Create Admin"}
                </h2>
              </div>

              <form
                onSubmit={handleSubmit}
                className="p-6 space-y-4"
              >

                <input
                  name="name"
                  value={newItem.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  required
                  className="px-4 bg-transparent py-2 w-full border border-[#A61E30] shadow-sm text-gray-700 outline-none rounded-[40px] rounded-tl-[5px]"
                />

                <input
                  name="email"
                  value={newItem.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="px-4 py-2 w-full border shadow-sm bg-transparent border-[#A61E30] text-gray-700 outline-none rounded-[40px] rounded-tl-[5px]"
                />

                <input
                  name="phone"
                  value={newItem.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  className="px-4 py-2 w-full border border-[#A61E30] bg-transparent shadow-sm text-gray-700 outline-none rounded-[40px] rounded-tl-[5px]"
                />

                {/* PASSWORD FIELD */}
                <div className="relative">

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    value={newItem.password}
                    onChange={handleInputChange}
                    placeholder={
                      editingId
                        ? "New Password (optional)"
                        : "Password"
                    }
                    required={!editingId}
                    className="px-4 py-2 w-full border border-[#A61E30] bg-transparent shadow-sm text-gray-700 outline-none rounded-[40px] rounded-tl-[5px]"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-2 text-sm text-gray-400"
                  >
                    {showPassword
                      ? "Hide"
                      : "Show"}
                  </button>

                </div>

                <div className="flex justify-end gap-3 pt-4">

                  <button
                    type="button"
                    onClick={() =>
                      setIsAddModalOpen(false)
                    }
                    className="px-6 py-2 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-2 bg-[#A61E30] text-white rounded-xl hover:bg-red-800"
                  >
                    {submitting
                      ? "Processing..."
                      : editingId
                      ? "Update"
                      : "Create"}
                  </button>

                </div>

              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}