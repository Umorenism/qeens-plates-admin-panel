// import React, { useState } from "react";
// import { FiSearch, FiEdit2, FiX } from "react-icons/fi";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import img1 from '../assets/chops.png'
// const menuItems = [
//   {
//     name: "Jollof Rice",
//     description: "African-style rice with tomato",
//     category: "Rice",
//     price: "12,500",
//     status: "Available",
//     icon: "🍚",
//   },
//   {
//     name: "Afang Soup",
//     description: "Traditional soup prepared with goat meat, stockfish, periwinkle",
//     category: "Soups",
//     price: "5,000",
//     status: "Unavailable",
//     icon: "🍲",
//   },
//   {
//     name: "Grilled Chicken",
//     description: "Well-seasoned grilled chicken with a smoky flavor",
//     category: "Protein",
//     price: "6,000",
//     status: "Available",
//     icon: "🍗",
//   },
//   {
//     name: "Pasta",
//     description: "West African-style pasta with tomato sauce",
//     category: "Pasta",
//     price: "10,000",
//     status: "Unavailable",
//     icon: "🍝",
//   },
//   {
//     name: "Vanilla Ice Cream",
//     description: "Rich chocolate ice cream topped with smooth chocolate frosting",
//     category: "Ice Cream",
//     price: "12,000",
//     status: "Available",
//     icon: "🍦",
//   },
// ];

// const statusStyles = {
//   Available: {
//     bg: "bg-green-100",
//     text: "text-green-700",
//     border: "border-green-200",
//     hover: "hover:bg-green-200",
//   },
//   Unavailable: {
//     bg: "bg-red-100",
//     text: "text-red-700",
//     border: "border-red-200",
//     hover: "hover:bg-red-200",
//   },
// };

// export default function MenuManagement() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);

//   const [newItem, setNewItem] = useState({
//     name: "",
//     category: "",
//     price: "",
//     description: "",
//     status: "Available",
//     imageFile: null,        // actual File object for upload
//     imagePreview: null,     // local URL for preview
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewItem((prev) => ({ ...prev, [name]: value }));
//   };

//   // ────────────────────────────────────────────────
//   //  Handle image selection + preview
//   // ────────────────────────────────────────────────
//   const handleImageUpload = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     // Optional: basic validation (size, type)
//     if (file.size > 5 * 1024 * 1024) { // 5MB limit
//       alert("Image size should be less than 5MB");
//       return;
//     }
//     if (!file.type.startsWith("image/")) {
//       alert("Please select an image file");
//       return;
//     }

//     const previewUrl = URL.createObjectURL(file);

//     setNewItem((prev) => ({
//       ...prev,
//       imageFile: file,
//       imagePreview: previewUrl,
//     }));
//   };

//   // ────────────────────────────────────────────────
//   //  Submit form (with image ready for upload)
//   // ────────────────────────────────────────────────
//   const handleAddItem = async (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!newItem.name || !newItem.category || !newItem.price) {
//       alert("Please fill in all required fields");
//       return;
//     }

//     // Prepare data to send to backend
//     const formData = new FormData();
//     formData.append("name", newItem.name);
//     formData.append("category", newItem.category);
//     formData.append("price", newItem.price);
//     formData.append("description", newItem.description || "");
//     formData.append("status", newItem.status);

//     if (newItem.imageFile) {
//       formData.append("image", newItem.imageFile);
//     }

//     try {
//       // Example: real API call (uncomment & adjust)
//       // const response = await fetch("/api/menu-items", {
//       //   method: "POST",
//       //   body: formData,
//       // });
//       // if (!response.ok) throw new Error("Failed to add item");

//       console.log("Submitting new item:", {
//         name: newItem.name,
//         category: newItem.category,
//         price: newItem.price,
//         description: newItem.description,
//         status: newItem.status,
//         hasImage: !!newItem.imageFile,
//       });

//       // Reset form
//       setNewItem({
//         name: "",
//         category: "",
//         price: "",
//         description: "",
//         status: "Available",
//         imageFile: null,
//         imagePreview: null,
//       });

//       setIsAddModalOpen(false);

//       // In real app: refresh list / show success toast
//       alert("Item added successfully! (demo)");
//     } catch (err) {
//       console.error("Error adding item:", err);
//       alert("Failed to add item. Please try again.");
//     }
//   };

//   const filteredItems = menuItems.filter(
//     (item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-[#f4efe6] p-6 md:p-8 font-sans">
//       <div className="max-w-7xl mx-auto space-y-6">
//         {/* Header */}
//         <div className="flex mt-10 flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//           <div>
//             <h1 className="text-3xl md:text-[32px] font-bold text-gray-900 font-roboto">
//               Menu Management
//             </h1>
//             <p className="mt-1 text-sm text-gray-600">
//               Add, edit, and manage menu items and their availability.
//             </p>
//           </div>

//           <button
//             onClick={() => setIsAddModalOpen(true)}
//             className="bg-[#D4AF37] hover:bg-[#c09b2f] text-white px-5 py-2.5 rounded-xl md:rounded-[14px] text-sm md:text-[13px] font-medium shadow-sm transition-colors flex items-center gap-1.5"
//           >
//             + Add Items
//           </button>
//         </div>

//         {/* Search */}
//         <div className="relative max-w-md">
//           <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//           <input
//             type="text"
//             placeholder="Search menu items..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-10  pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//           />
//         </div>

//         {/* Table */}
//         <div className="bg-white rounded-2xl md:rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left min-w-[700px]">
//               <thead className="bg-[#F6E9EA] text-gray-600 text-sm uppercase tracking-wider">
//                 <tr>
//                   <th className="px-6 py-4 font-roboto font-semibold">ITEM</th>
//                   <th className="px-6 py-4 font-roboto font-semibold">CATEGORY</th>
//                   <th className="px-6 py-4 font-roboto font-semibold">PRICE</th>
//                   <th className="px-6 py-4 font-roboto font-semibold">STATUS</th>
//                   <th className="px-6 py-4 font-roboto font-semibold text-right">ACTIONS</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {filteredItems.map((item, index) => (
//                   <tr key={index} className="hover:bg-gray-50/60 transition-colors">
//                     <td className="px-6 py-4">
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 rounded-[15.19px] bg-gray-50 border border-gray-200 flex items-center justify-center text-xl">
//                           {item.icon}
//                         </div>
//                         <div>
//                           <div className="font-medium text-gray-900">{item.name}</div>
//                           <div className="text-sm text-gray-500 mt-0.5 line-clamp-1">
//                             {item.description}
//                           </div>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 text-gray-700">{item.category}</td>
//                     <td className="px-6 py-4 font-medium text-gray-900">₦{item.price}</td>
//                     <td className="px-6 py-4">
//                       <button
//                         className={`px-3.5 py-1.5 text-sm font-medium rounded-full border flex items-center gap-1.5 ${statusStyles[item.status].bg} ${statusStyles[item.status].text} ${statusStyles[item.status].border} ${statusStyles[item.status].hover} transition-colors`}
//                       >
//                         {item.status}
//                         <span className="text-xs opacity-70">▼</span>
//                       </button>
//                     </td>
//                     <td className="px-6 py-4 text-right">
//                       <div className="flex items-center justify-end gap-3">
//                         <button className="p-1.5 text-gray-500 hover:text-[#D4AF37] rounded hover:bg-gray-100 transition-colors">
//                           <FiEdit2 size={18} />
//                         </button>
//                         <button className="p-1.5 text-gray-500 hover:text-gray-700 rounded hover:bg-gray-100 transition-colors">
//                           <BsThreeDotsVertical size={18} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* ──────────────────────────────────────
//             ADD ITEM MODAL
//         ────────────────────────────────────── */}
//         {isAddModalOpen && (
//           <div className="fixed inset-0  z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
//             <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-gray-200">
//               {/* Header */}
//               <div className="px-6 py-3  bg-white/80">
//                 <h2 className="text-xl mt-3 font-bold text-center md:text-center text-[#A61E30]">
//                   Add New Item
//                 </h2>
//               </div>

//               {/* Form */}
//               <form onSubmit={handleAddItem} className="p-6 space-y-5">
//                 <input
//                   type="text"
//                   name="name"
//                   value={newItem.name}
//                   onChange={handleInputChange}
//                   placeholder="Jollof Rice"
//                   required
//                   className="pl-3  pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px]  font-dm"
//                 />

//                 <input
//                   type="text"
//                   name="category"
//                   value={newItem.category}
//                   onChange={handleInputChange}
//                   placeholder="Rice"
//                   required
//                   className="pl-3  pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[28px] rounded-tl-[5px]  font-dm"
//                 />

//                 <input
//                   type="text"
//                   name="price"
//                   value={newItem.price}
//                   onChange={handleInputChange}
//                   placeholder="6,000"
//                   required
//                   className="pl-3  pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px]  font-dm"
//                 />

               

//                 <div className="relative">
//   <textarea
//     name="description"
//     value={newItem.description}
//     onChange={handleInputChange}
//     placeholder="African-style rice with tomato and spices"
//     rows={3}
//     className="
//       pl-10 pr-4 py-3 min-h-[96px] w-full 
//       bg-white border border-gray-300 shadow-sm 
//       text-gray-700 placeholder-gray-500 outline-none 
//       rounded-[28px] rounded-tl-[8px] 
//       font-dm resize-none
//       focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all
//     "
//   />
//   <div className="absolute left-4 top-3 text-gray-400">
   
//   </div>
// </div>

//                 {/* Smaller image preview */}
//                 <div className="relative group mt-2">
//                   <div className="
//                     w-full h-32
//                     bg-gray-50 rounded-xl 
//                     border-2 border-dashed border-gray-300 
//                     overflow-hidden
//                   ">
//                     {newItem.imagePreview ? (
//                       <img
//                         src={newItem.imagePreview}
//                         alt="Item preview"
//                         className="w-full h-full object-cover object-center"
//                       />
//                     ) : (
//                       <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
//                         {/* <div className="text-4xl mb-1">📷</div> */}
//                         <p className="text-xs">Tap to upload image</p>
//                       </div>
//                     )}
//                   </div>

//                   <label className="
//                     absolute inset-0 flex items-center justify-center 
//                     bg-black/35 opacity-0 group-hover:opacity-100 
//                     transition-opacity cursor-pointer rounded-xl
//                   ">
//                     <div className="
//                       bg-white/95 px-4 py-2 text-sm font-medium rounded-[11.2px] 
//                       shadow flex items-center gap-2 text-gray-800
//                     ">
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
//                       </svg>
//                       Edit Image
//                     </div>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       className="hidden"
//                       onChange={handleImageUpload}
//                     />
//                   </label>
//                 </div>

//                 {/* Buttons */}
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
//                     Save
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
// import { FiSearch, FiEdit2, FiX } from "react-icons/fi";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { getMenuItems, toggleMenuItemStatus } from "../api/apiServices"; // Adjust path as needed

// const statusStyles = {
//   Available: {
//     bg: "bg-green-100",
//     text: "text-green-700",
//     border: "border-green-200",
//     hover: "hover:bg-green-200",
//   },
//   Unavailable: {
//     bg: "bg-red-100",
//     text: "text-red-700",
//     border: "border-red-200",
//     hover: "hover:bg-red-200",
//   },
// };

// export default function MenuManagement() {
//   const [menuItems, setMenuItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);

//   const [newItem, setNewItem] = useState({
//     name: "",
//     category: "",
//     price: "",
//     description: "",
//     status: "Available",
//     imageFile: null,
//     imagePreview: null,
//   });

//   // Fetch menu items from API
//   const fetchMenuItems = async () => {
//     setLoading(true);
//     try {
//       const response = await getMenuItems();

//       if (response.success && Array.isArray(response.data)) {
//         const formattedItems = response.data.map((item) => ({
//           id: item.id,
//           name: item.name,
//           description: item.description,
//           category: item.category,
//           price: item.price,           // already formatted with comma e.g. "11,000"
//           rawPrice: item.raw_price,
//           status: item.is_available ? "Available" : "Unavailable",
//           image: item.image,           // full URL
//           icon: "🍽️",                  // fallback emoji (you can improve later with category icons)
//         }));

//         setMenuItems(formattedItems);
//       }
//     } catch (err) {
//       console.error("Failed to load menu items:", err);
//       setMenuItems([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Load data on mount
//   useEffect(() => {
//     fetchMenuItems();
//   }, []);

//   // Toggle status (Available <-> Unavailable)
//   const handleToggleStatus = async (id, currentStatus) => {
//     try {
//       await toggleMenuItemStatus(id);
//       // Refresh the list after toggle
//       fetchMenuItems();
//     } catch (err) {
//       alert("Failed to update status. Please try again.");
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewItem((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     if (file.size > 5 * 1024 * 1024) {
//       alert("Image size should be less than 5MB");
//       return;
//     }
//     if (!file.type.startsWith("image/")) {
//       alert("Please select an image file");
//       return;
//     }

//     const previewUrl = URL.createObjectURL(file);
//     setNewItem((prev) => ({
//       ...prev,
//       imageFile: file,
//       imagePreview: previewUrl,
//     }));
//   };

//   const handleAddItem = async (e) => {
//     e.preventDefault();
//     if (!newItem.name || !newItem.category || !newItem.price) {
//       alert("Please fill in all required fields");
//       return;
//     }

//     // TODO: Implement POST /admin/menu-management with FormData when backend endpoint is ready
//     // For now, we show success and refresh (you can add the real POST later)

//     console.log("New item ready for submission:", newItem);

//     alert("Item added successfully! (Backend POST coming soon)");
    
//     // Reset form
//     setNewItem({
//       name: "",
//       category: "",
//       price: "",
//       description: "",
//       status: "Available",
//       imageFile: null,
//       imagePreview: null,
//     });
//     setIsAddModalOpen(false);

//     // Refresh list
//     fetchMenuItems();
//   };

//   const filteredItems = menuItems.filter(
//     (item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-[#f4efe6] p-6 md:p-8 font-sans">
//       <div className="max-w-7xl mx-auto space-y-6">
//         {/* Header */}
//         <div className="flex mt-10 flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//           <div>
//             <h1 className="text-3xl md:text-[32px] font-bold text-gray-900 font-roboto">
//               Menu Management
//             </h1>
//             <p className="mt-1 text-sm text-gray-600">
//               Add, edit, and manage menu items and their availability.
//             </p>
//           </div>

//           <button
//             onClick={() => setIsAddModalOpen(true)}
//             className="bg-[#D4AF37] hover:bg-[#c09b2f] text-white px-5 py-2.5 rounded-xl md:rounded-[14px] text-sm md:text-[13px] font-medium shadow-sm transition-colors flex items-center gap-1.5"
//           >
//             + Add Items
//           </button>
//         </div>

//         {/* Search */}
//         <div className="relative max-w-md">
//           <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//           <input
//             type="text"
//             placeholder="Search menu items..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-10 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//           />
//         </div>

//         {/* Table */}
//         <div className="bg-white rounded-2xl md:rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left min-w-[700px]">
//               <thead className="bg-[#F6E9EA] text-gray-600 text-sm uppercase tracking-wider">
//                 <tr>
//                   <th className="px-6 py-4 font-roboto font-semibold">ITEM</th>
//                   <th className="px-6 py-4 font-roboto font-semibold">CATEGORY</th>
//                   <th className="px-6 py-4 font-roboto font-semibold">PRICE</th>
//                   <th className="px-6 py-4 font-roboto font-semibold">STATUS</th>
//                   <th className="px-6 py-4 font-roboto font-semibold text-right">ACTIONS</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {loading ? (
//                   <tr>
//                     <td colSpan="5" className="px-6 py-16 text-center text-gray-500">
//                       Loading menu items...
//                     </td>
//                   </tr>
//                 ) : filteredItems.length === 0 ? (
//                   <tr>
//                     <td colSpan="5" className="px-6 py-16 text-center text-gray-500">
//                       No menu items found
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredItems.map((item) => (
//                     <tr key={item.id} className="hover:bg-gray-50/60 transition-colors">
//                       <td className="px-6 py-4">
//                         <div className="flex items-center gap-3">
//                           <div className="w-10 h-10 rounded-[15.19px] bg-gray-50 border border-gray-200 flex items-center justify-center text-xl overflow-hidden">
//                             {item.image ? (
//                               <img 
//                                 src={item.image} 
//                                 alt={item.name}
//                                 className="w-full h-full object-cover"
//                               />
//                             ) : (
//                               item.icon
//                             )}
//                           </div>
//                           <div>
//                             <div className="font-medium text-gray-900">{item.name}</div>
//                             <div className="text-sm text-gray-500 mt-0.5 line-clamp-1">
//                               {item.description}
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 text-gray-700">{item.category}</td>
//                       <td className="px-6 py-4 font-medium text-gray-900">₦{item.price}</td>
//                       <td className="px-6 py-4">
//                         <button
//                           onClick={() => handleToggleStatus(item.id, item.status)}
//                           className={`px-3.5 py-1.5 text-sm font-medium rounded-full border flex items-center gap-1.5 ${statusStyles[item.status].bg} ${statusStyles[item.status].text} ${statusStyles[item.status].border} ${statusStyles[item.status].hover} transition-colors`}
//                         >
//                           {item.status}
//                           <span className="text-xs opacity-70">▼</span>
//                         </button>
//                       </td>
//                       <td className="px-6 py-4 text-right">
//                         <div className="flex items-center justify-end gap-3">
//                           <button className="p-1.5 text-gray-500 hover:text-[#D4AF37] rounded hover:bg-gray-100 transition-colors">
//                             <FiEdit2 size={18} />
//                           </button>
//                           <button className="p-1.5 text-gray-500 hover:text-gray-700 rounded hover:bg-gray-100 transition-colors">
//                             <BsThreeDotsVertical size={18} />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* ADD ITEM MODAL - unchanged except for submit handling */}
//         {isAddModalOpen && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
//             <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-gray-200">
//               <div className="px-6 py-3 bg-white/80">
//                 <h2 className="text-xl mt-3 font-bold text-center text-[#A61E30]">
//                   Add New Item
//                 </h2>
//               </div>

//               <form onSubmit={handleAddItem} className="p-6 space-y-5">
//                 <input
//                   type="text"
//                   name="name"
//                   value={newItem.name}
//                   onChange={handleInputChange}
//                   placeholder="Jollof Rice"
//                   required
//                   className="pl-3 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//                 />

//                 <input
//                   type="text"
//                   name="category"
//                   value={newItem.category}
//                   onChange={handleInputChange}
//                   placeholder="Rice"
//                   required
//                   className="pl-3 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[28px] rounded-tl-[5px] font-dm"
//                 />

//                 <input
//                   type="text"
//                   name="price"
//                   value={newItem.price}
//                   onChange={handleInputChange}
//                   placeholder="6,000"
//                   required
//                   className="pl-3 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//                 />

//                 <div className="relative">
//                   <textarea
//                     name="description"
//                     value={newItem.description}
//                     onChange={handleInputChange}
//                     placeholder="African-style rice with tomato and spices"
//                     rows={3}
//                     className="pl-10 pr-4 py-3 min-h-[96px] w-full bg-white border border-gray-300 shadow-sm text-gray-700 placeholder-gray-500 outline-none rounded-[28px] rounded-tl-[8px] font-dm resize-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 transition-all"
//                   />
//                 </div>

//                 {/* Image Upload Section - unchanged */}
//                 <div className="relative group mt-2">
//                   <div className="w-full h-32 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 overflow-hidden">
//                     {newItem.imagePreview ? (
//                       <img
//                         src={newItem.imagePreview}
//                         alt="Item preview"
//                         className="w-full h-full object-cover object-center"
//                       />
//                     ) : (
//                       <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
//                         <p className="text-xs">Tap to upload image</p>
//                       </div>
//                     )}
//                   </div>

//                   <label className="absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer rounded-xl">
//                     <div className="bg-white/95 px-4 py-2 text-sm font-medium rounded-[11.2px] shadow flex items-center gap-2 text-gray-800">
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
//                       </svg>
//                       Edit Image
//                     </div>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       className="hidden"
//                       onChange={handleImageUpload}
//                     />
//                   </label>
//                 </div>

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
//                     Save
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
// import { FiSearch, FiEdit2 } from "react-icons/fi";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { getMenuItems, toggleMenuItemStatus } from "../api/apiServices"; // Adjust path if needed

// const statusStyles = {
//   Available: {
//     bg: "bg-green-100",
//     text: "text-green-700",
//     border: "border-green-200",
//     hover: "hover:bg-green-200",
//   },
//   Unavailable: {
//     bg: "bg-red-100",
//     text: "text-red-700",
//     border: "border-red-200",
//     hover: "hover:bg-red-200",
//   },
// };

// export default function MenuManagement() {
//   const [menuItems, setMenuItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [submitting, setSubmitting] = useState(false);

//   const [newItem, setNewItem] = useState({
//     name: "",
//     category: "",
//     price: "",
//     description: "",
//     imageFile: null,
//     imagePreview: null,
//   });

//   // Fetch all menu items
//   const fetchMenuItems = async () => {
//     setLoading(true);
//     try {
//       const response = await getMenuItems();

//       if (response.success && Array.isArray(response.data)) {
//         const formatted = response.data.map((item) => ({
//           id: item.id,
//           name: item.name,
//           description: item.description,
//           category: item.category,
//           price: item.price,
//           status: item.is_available ? "Available" : "Unavailable",
//           image: item.image, // full URL from backend
//         }));
//         setMenuItems(formatted);
//       }
//     } catch (err) {
//       console.error("Failed to fetch menu:", err);
//       setMenuItems([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMenuItems();
//   }, []);

//   // Toggle availability
//   const handleToggleStatus = async (id) => {
//     try {
//       await toggleMenuItemStatus(id);
//       fetchMenuItems(); // Refresh list
//     } catch (err) {
//       alert("Failed to update status");
//     }
//   };

//   // Handle form inputs
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewItem((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     if (file.size > 5 * 1024 * 1024) {
//       alert("Image must be less than 5MB");
//       return;
//     }
//     if (!file.type.startsWith("image/")) {
//       alert("Please select a valid image");
//       return;
//     }

//     setNewItem((prev) => ({
//       ...prev,
//       imageFile: file,
//       imagePreview: URL.createObjectURL(file),
//     }));
//   };

//   // === REAL ADD ITEM (POST) - This is what was missing ===
//   const handleAddItem = async (e) => {
//     e.preventDefault();
//     if (!newItem.name || !newItem.category || !newItem.price) {
//       alert("Name, Category and Price are required");
//       return;
//     }

//     setSubmitting(true);

//     const formData = new FormData();
//     formData.append("name", newItem.name);
//     formData.append("category", newItem.category);        // or "category_id" if backend expects ID
//     formData.append("price", newItem.price.replace(/,/g, "")); // remove comma
//     formData.append("description", newItem.description || "");

//     if (newItem.imageFile) {
//       formData.append("image", newItem.imageFile);
//     }

//     try {
//       // TODO: Add this function to apiServices.js
//       // const response = await addMenuItem(formData);

//       // For now (since POST endpoint may not be active yet), we simulate success
//       console.log("✅ FormData ready to send:", Object.fromEntries(formData));

//       alert("Item added successfully!");

//       // Reset form
//       setNewItem({
//         name: "",
//         category: "",
//         price: "",
//         description: "",
//         imageFile: null,
//         imagePreview: null,
//       });

//       setIsAddModalOpen(false);

//       // THIS IS THE IMPORTANT PART - Refresh the table
//       await fetchMenuItems();

//     } catch (err) {
//       console.error(err);
//       alert("Failed to add item. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const filteredItems = menuItems.filter((item) =>
//     [item.name, item.description, item.category]
//       .some((field) => field?.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   return (
//     <div className="min-h-screen bg-[#f4efe6] p-6 md:p-8 font-sans">
//       <div className="max-w-7xl mx-auto space-y-6">
//         {/* Header */}
//         <div className="flex mt-10 flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//           <div>
//             <h1 className="text-3xl md:text-[32px] font-bold text-gray-900 font-roboto">
//               Menu Management
//             </h1>
//             <p className="mt-1 text-sm text-gray-600">
//               Add, edit, and manage menu items and their availability.
//             </p>
//           </div>

//           <button
//             onClick={() => setIsAddModalOpen(true)}
//             className="bg-[#D4AF37] hover:bg-[#c09b2f] text-white px-5 py-2.5 rounded-xl md:rounded-[14px] text-sm md:text-[13px] font-medium shadow-sm transition-colors flex items-center gap-1.5"
//           >
//             + Add Items
//           </button>
//         </div>

//         {/* Search */}
//         <div className="relative max-w-md">
//           <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//           <input
//             type="text"
//             placeholder="Search menu items..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-10 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//           />
//         </div>

//         {/* Table - now shows live data */}
//         <div className="bg-white rounded-2xl md:rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left min-w-[700px]">
//               <thead className="bg-[#F6E9EA] text-gray-600 text-sm uppercase tracking-wider">
//                 <tr>
//                   <th className="px-6 py-4 font-roboto font-semibold">ITEM</th>
//                   <th className="px-6 py-4 font-roboto font-semibold">CATEGORY</th>
//                   <th className="px-6 py-4 font-roboto font-semibold">PRICE</th>
//                   <th className="px-6 py-4 font-roboto font-semibold">STATUS</th>
//                   <th className="px-6 py-4 font-roboto font-semibold text-right">ACTIONS</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {loading ? (
//                   <tr><td colSpan="5" className="py-16 text-center">Loading menu items...</td></tr>
//                 ) : filteredItems.length === 0 ? (
//                   <tr><td colSpan="5" className="py-16 text-center">No items found</td></tr>
//                 ) : (
//                   filteredItems.map((item) => (
//                     <tr key={item.id} className="hover:bg-gray-50/60 transition-colors">
//                       <td className="px-6 py-4">
//                         <div className="flex items-center gap-3">
//                           <div className="w-10 h-10 rounded-[15.19px] bg-gray-50 border border-gray-200 overflow-hidden flex items-center justify-center text-xl">
//                             {item.image ? (
//                               <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                             ) : "🍽️"}
//                           </div>
//                           <div>
//                             <div className="font-medium text-gray-900">{item.name}</div>
//                             <div className="text-sm text-gray-500 line-clamp-1">{item.description}</div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 text-gray-700">{item.category}</td>
//                       <td className="px-6 py-4 font-medium text-gray-900">₦{item.price}</td>
//                       <td className="px-6 py-4">
//                         <button
//                           onClick={() => handleToggleStatus(item.id)}
//                           className={`px-3.5 py-1.5 text-sm font-medium rounded-full border flex items-center gap-1.5 transition-all ${statusStyles[item.status].bg} ${statusStyles[item.status].text} ${statusStyles[item.status].border} ${statusStyles[item.status].hover}`}
//                         >
//                           {item.status}
//                           <span className="text-xs opacity-70">▼</span>
//                         </button>
//                       </td>
//                       <td className="px-6 py-4 text-right">
//                         <div className="flex items-center justify-end gap-3">
//                           <button className="p-1.5 text-gray-500 hover:text-[#D4AF37] rounded hover:bg-gray-100">
//                             <FiEdit2 size={18} />
//                           </button>
//                           <button className="p-1.5 text-gray-500 hover:text-gray-700 rounded hover:bg-gray-100">
//                             <BsThreeDotsVertical size={18} />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Add Modal - unchanged UI */}
//         {isAddModalOpen && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
//             <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
//               <div className="px-6 py-4 border-b">
//                 <h2 className="text-xl font-bold text-center text-[#A61E30]">Add New Menu Item</h2>
//               </div>

//               <form onSubmit={handleAddItem} className="p-6 space-y-5">
//                 {/* ... your existing form fields (name, category, price, description, image) remain exactly the same ... */}

//                 <input
//                   type="text"
//                   name="name"
//                   value={newItem.name}
//                   onChange={handleInputChange}
//                   placeholder="Item Name"
//                   required
//                   className="pl-3 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//                 />

//                 <input
//                   type="text"
//                   name="category"
//                   value={newItem.category}
//                   onChange={handleInputChange}
//                   placeholder="Category (e.g. Soups, Rice)"
//                   required
//                   className="pl-3 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[28px] rounded-tl-[5px] font-dm"
//                 />

//                 <input
//                   type="text"
//                   name="price"
//                   value={newItem.price}
//                   onChange={handleInputChange}
//                   placeholder="Price (e.g. 11000)"
//                   required
//                   className="pl-3 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//                 />

//                 <textarea
//                   name="description"
//                   value={newItem.description}
//                   onChange={handleInputChange}
//                   placeholder="Description..."
//                   rows={3}
//                   className="pl-4 pr-4 py-3 w-full bg-white border border-gray-300 shadow-sm text-gray-700 outline-none rounded-[28px] rounded-tl-[8px] font-dm resize-none"
//                 />

//                 {/* Image upload section - your original code */}
//                 <div className="relative group mt-2">
//                   <div className="w-full h-32 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 overflow-hidden">
//                     {newItem.imagePreview ? (
//                       <img src={newItem.imagePreview} alt="preview" className="w-full h-full object-cover" />
//                     ) : (
//                       <div className="flex flex-col items-center justify-center h-full text-gray-400 text-xs">
//                         Tap to upload image
//                       </div>
//                     )}
//                   </div>
//                   <label className="absolute inset-0 cursor-pointer">
//                     <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
//                   </label>
//                 </div>

//                 <div className="flex justify-end gap-3 pt-4">
//                   <button
//                     type="button"
//                     onClick={() => setIsAddModalOpen(false)}
//                     className="px-6 py-2.5 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-[11.2px]"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     disabled={submitting}
//                     className="px-6 py-2.5 bg-[#A61E30] hover:bg-red-700 text-white rounded-[11.2px] disabled:opacity-70"
//                   >
//                     {submitting ? "Saving..." : "Save Item"}
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
// import { FiSearch, FiEdit2 } from "react-icons/fi";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { getMenuItems, toggleMenuItemStatus, addMenuItem, updateMenuItem, deleteMenuItem } from "../api/apiServices";

// const statusStyles = {
//   Available: { bg: "bg-green-100", text: "text-green-700", border: "border-green-200", hover: "hover:bg-green-200" },
//   Unavailable: { bg: "bg-red-100", text: "text-red-700", border: "border-red-200", hover: "hover:bg-red-200" },
// };

// export default function MenuManagement() {
//   const [menuItems, setMenuItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Modals
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const [submitting, setSubmitting] = useState(false);

//   // Form state (used for both Add and Edit)
//   const [formData, setFormData] = useState({
//     name: "",
//     category: "",
//     price: "",
//     description: "",
//     imageFile: null,
//     imagePreview: null,
//   });

//   const fetchMenuItems = async () => {
//     setLoading(true);
//     try {
//       const response = await getMenuItems();
//       if (response.success && Array.isArray(response.data)) {
//         const formatted = response.data.map((item) => ({
//           id: item.id,
//           name: item.name,
//           description: item.description,
//           category: item.category,
//           price: item.price,
//           status: item.is_available ? "Available" : "Unavailable",
//           image: item.image,
//         }));
//         setMenuItems(formatted);
//       }
//     } catch (err) {
//       console.error("Failed to fetch menu:", err);
//       setMenuItems([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMenuItems();
//   }, []);

//   const handleToggleStatus = async (id) => {
//     try {
//       await toggleMenuItemStatus(id);
//       fetchMenuItems();
//     } catch (err) {
//       alert("Failed to update status");
//     }
//   };

//   // Open Edit Modal
//   const openEditModal = (item) => {
//     setSelectedItem(item);
//     setFormData({
//       name: item.name,
//       category: item.category,
//       price: item.price.replace(/,/g, ""),
//       description: item.description || "",
//       imageFile: null,
//       imagePreview: item.image || null,
//     });
//     setIsEditModalOpen(true);
//   };

//   // Open Delete Confirmation
//   const openDeleteModal = (item) => {
//     setSelectedItem(item);
//     setIsDeleteModalOpen(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     if (file.size > 5 * 1024 * 1024) return alert("Image must be less than 5MB");
//     if (!file.type.startsWith("image/")) return alert("Please select a valid image");

//     setFormData((prev) => ({
//       ...prev,
//       imageFile: file,
//       imagePreview: URL.createObjectURL(file),
//     }));
//   };

//   // Add Item
//   const handleAddItem = async (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.category || !formData.price) {
//       return alert("Name, Category and Price are required");
//     }

//     setSubmitting(true);
//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("category", formData.category);
//     data.append("price", formData.price);
//     data.append("description", formData.description || "");
//     if (formData.imageFile) data.append("image", formData.imageFile);

//     try {
//       await addMenuItem(data);
//       alert("Item added successfully!");
//       setIsAddModalOpen(false);
//       resetForm();
//       fetchMenuItems();
//     } catch (err) {
//       alert("Failed to add item");
//       console.error(err);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   // Update Item
//   const handleUpdateItem = async (e) => {
//     e.preventDefault();
//     if (!selectedItem || !formData.name || !formData.category || !formData.price) {
//       return alert("Please fill required fields");
//     }

//     setSubmitting(true);
//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("category", formData.category);
//     data.append("price", formData.price);
//     data.append("description", formData.description || "");
//     if (formData.imageFile) data.append("image", formData.imageFile);

//     try {
//       await updateMenuItem(selectedItem.id, data);
//       alert("Item updated successfully!");
//       setIsEditModalOpen(false);
//       resetForm();
//       fetchMenuItems();
//     } catch (err) {
//       alert("Failed to update item");
//       console.error(err);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   // Delete Item
//   const handleDeleteItem = async () => {
//     if (!selectedItem) return;
//     setSubmitting(true);

//     try {
//       await deleteMenuItem(selectedItem.id);
//       alert("Item deleted successfully!");
//       setIsDeleteModalOpen(false);
//       fetchMenuItems();
//     } catch (err) {
//       alert("Failed to delete item");
//       console.error(err);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       name: "",
//       category: "",
//       price: "",
//       description: "",
//       imageFile: null,
//       imagePreview: null,
//     });
//     setSelectedItem(null);
//   };

//   const filteredItems = menuItems.filter((item) =>
//     [item.name, item.description, item.category].some((field) =>
//       field?.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   return (
//     <div className="min-h-screen bg-[#f4efe6] p-6 md:p-8 font-sans">
//       <div className="max-w-7xl mx-auto space-y-6">
//         {/* Header */}
//         <div className="flex mt-10 flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//           <div>
//             <h1 className="text-3xl md:text-[32px] font-bold text-gray-900 font-roboto">Menu Management</h1>
//             <p className="mt-1 text-sm text-gray-600">Add, edit, and manage menu items and their availability.</p>
//           </div>
//           <button
//             onClick={() => { resetForm(); setIsAddModalOpen(true); }}
//             className="bg-[#D4AF37] hover:bg-[#c09b2f] text-white px-5 py-2.5 rounded-xl md:rounded-[14px] text-sm md:text-[13px] font-medium shadow-sm transition-colors flex items-center gap-1.5"
//           >
//             + Add Items
//           </button>
//         </div>

//         {/* Search */}
//         <div className="relative max-w-md">
//           <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//           <input
//             type="text"
//             placeholder="Search menu items..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-10 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//           />
//         </div>

//         {/* Table */}
//         <div className="bg-white rounded-2xl md:rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left min-w-[700px]">
//               <thead className="bg-[#F6E9EA] text-gray-600 text-sm uppercase tracking-wider">
//                 <tr>
//                   <th className="px-6 py-4 font-roboto font-semibold">ITEM</th>
//                   <th className="px-6 py-4 font-roboto font-semibold">CATEGORY</th>
//                   <th className="px-6 py-4 font-roboto font-semibold">PRICE</th>
//                   <th className="px-6 py-4 font-roboto font-semibold">STATUS</th>
//                   <th className="px-6 py-4 font-roboto font-semibold text-right">ACTIONS</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {loading ? (
//                   <tr><td colSpan="5" className="py-16 text-center">Loading menu items...</td></tr>
//                 ) : filteredItems.length === 0 ? (
//                   <tr><td colSpan="5" className="py-16 text-center">No items found</td></tr>
//                 ) : (
//                   filteredItems.map((item) => (
//                     <tr key={item.id} className="hover:bg-gray-50/60 transition-colors">
//                       <td className="px-6 py-4">
//                         <div className="flex items-center gap-3">
//                           <div className="w-10 h-10 rounded-[15.19px] bg-gray-50 border border-gray-200 overflow-hidden flex items-center justify-center text-xl">
//                             {item.image ? (
//                               <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                             ) : "🍽️"}
//                           </div>
//                           <div>
//                             <div className="font-medium text-gray-900">{item.name}</div>
//                             <div className="text-sm text-gray-500 line-clamp-1">{item.description}</div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 text-gray-700">{item.category}</td>
//                       <td className="px-6 py-4 font-medium text-gray-900">₦{item.price}</td>
//                       <td className="px-6 py-4">
//                         <button
//                           onClick={() => handleToggleStatus(item.id)}
//                           className={`px-3.5 py-1.5 text-sm font-medium rounded-full border flex items-center gap-1.5 transition-all ${statusStyles[item.status].bg} ${statusStyles[item.status].text} ${statusStyles[item.status].border} ${statusStyles[item.status].hover}`}
//                         >
//                           {item.status} <span className="text-xs opacity-70">▼</span>
//                         </button>
//                       </td>
//                       <td className="px-6 py-4 text-right">
//                         <div className="flex items-center justify-end gap-3">
//                           <button
//                             onClick={() => openEditModal(item)}
//                             className="p-1.5 text-gray-500 hover:text-[#D4AF37] rounded hover:bg-gray-100"
//                           >
//                             <FiEdit2 size={18} />
//                           </button>
//                           <button
//                             onClick={() => openDeleteModal(item)}
//                             className="p-1.5 text-gray-500 hover:text-red-600 rounded hover:bg-gray-100"
//                           >
//                             <BsThreeDotsVertical size={18} />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* ====================== ADD & EDIT MODAL (Shared) ====================== */}
//       {(isAddModalOpen || isEditModalOpen) && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
//           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
//             <div className="px-6 py-4 border-b">
//               <h2 className="text-xl font-bold text-center text-[#A61E30]">
//                 {isEditModalOpen ? "Edit Menu Item" : "Add New Menu Item"}
//               </h2>
//             </div>

//             <form onSubmit={isEditModalOpen ? handleUpdateItem : handleAddItem} className="p-6 space-y-5">
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 placeholder="Item Name"
//                 required
//                 className="pl-3 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//               />

//               <input
//                 type="text"
//                 name="category"
//                 value={formData.category}
//                 onChange={handleInputChange}
//                 placeholder="Category (e.g. Soups, Rice)"
//                 required
//                 className="pl-3 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[28px] rounded-tl-[5px] font-dm"
//               />

//               <input
//                 type="text"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleInputChange}
//                 placeholder="Price (e.g. 11000)"
//                 required
//                 className="pl-3 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//               />

//               <textarea
//                 name="description"
//                 value={formData.description}
//                 onChange={handleInputChange}
//                 placeholder="Description..."
//                 rows={3}
//                 className="pl-4 pr-4 py-3 w-full bg-white border border-gray-300 shadow-sm text-gray-700 outline-none rounded-[28px] rounded-tl-[8px] font-dm resize-none"
//               />

//               <div className="relative group mt-2">
//                 <div className="w-full h-32 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 overflow-hidden">
//                   {formData.imagePreview ? (
//                     <img src={formData.imagePreview} alt="preview" className="w-full h-full object-cover" />
//                   ) : (
//                     <div className="flex flex-col items-center justify-center h-full text-gray-400 text-xs">
//                       Tap to upload image
//                     </div>
//                   )}
//                 </div>
//                 <label className="absolute inset-0 cursor-pointer">
//                   <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
//                 </label>
//               </div>

//               <div className="flex justify-end gap-3 pt-4">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setIsAddModalOpen(false);
//                     setIsEditModalOpen(false);
//                     resetForm();
//                   }}
//                   className="px-6 py-2.5 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-[11.2px]"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={submitting}
//                   className="px-6 py-2.5 bg-[#A61E30] hover:bg-red-700 text-white rounded-[11.2px] disabled:opacity-70"
//                 >
//                   {submitting ? "Saving..." : isEditModalOpen ? "Update Item" : "Save Item"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* ====================== DELETE CONFIRMATION MODAL ====================== */}
//       {isDeleteModalOpen && selectedItem && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
//           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center">
//             <h3 className="text-lg font-semibold text-red-600 mb-2">Delete Item?</h3>
//             <p className="text-gray-600 mb-6">
//               Are you sure you want to delete <strong>{selectedItem.name}</strong>?<br />
//               This action cannot be undone.
//             </p>
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={() => setIsDeleteModalOpen(false)}
//                 className="px-6 py-2.5 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-[11.2px]"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleDeleteItem}
//                 disabled={submitting}
//                 className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-[11.2px] disabled:opacity-70"
//               >
//                 {submitting ? "Deleting..." : "Yes, Delete"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




// import React, { useState, useEffect } from "react";
// import { FiSearch, FiEdit2 } from "react-icons/fi";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { 
//   getMenuItems, 
//   toggleMenuItemStatus, 
//   addMenuItem, 
//   updateMenuItem, 
//   deleteMenuItem 
// } from "../api/apiServices";

// const statusStyles = {
//   Available: { bg: "bg-green-100", text: "text-green-700", border: "border-green-200", hover: "hover:bg-green-200" },
//   Unavailable: { bg: "bg-red-100", text: "text-red-700", border: "border-red-200", hover: "hover:bg-red-200" },
// };

// export default function MenuManagement() {
//   const [menuItems, setMenuItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Modals
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const [submitting, setSubmitting] = useState(false);

//   // Form state (used for both Add and Edit)
//   const [formData, setFormData] = useState({
//     name: "",
//     category_id: "",      // ← Changed to category_id
//     price: "",
//     description: "",
//     imageFile: null,
//     imagePreview: null,
//   });

//   const fetchMenuItems = async () => {
//     setLoading(true);
//     try {
//       const response = await getMenuItems();
//       if (response.success && Array.isArray(response.data)) {
//         const formatted = response.data.map((item) => ({
//           id: item.id,
//           name: item.name,
//           description: item.description,
//           category: item.category,        // for display
//           category_id: item.category_id,  // important for editing
//           price: item.price,
//           status: item.is_available ? "Available" : "Unavailable",
//           image: item.image,
//         }));
//         setMenuItems(formatted);
//       }
//     } catch (err) {
//       console.error("Failed to fetch menu:", err);
//       setMenuItems([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMenuItems();
//   }, []);

//   const handleToggleStatus = async (id) => {
//     try {
//       await toggleMenuItemStatus(id);
//       fetchMenuItems();
//     } catch (err) {
//       alert("Failed to update status");
//     }
//   };

//   // Open Edit Modal with correct data
//   const openEditModal = (item) => {
//     setSelectedItem(item);
//     setFormData({
//       name: item.name,
//       category_id: item.category_id || "",     // ← Use category_id
//       price: item.price ? item.price.replace(/,/g, "") : "",
//       description: item.description || "",
//       imageFile: null,
//       imagePreview: item.image || null,
//     });
//     setIsEditModalOpen(true);
//   };

//   const openDeleteModal = (item) => {
//     setSelectedItem(item);
//     setIsDeleteModalOpen(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     if (file.size > 5 * 1024 * 1024) return alert("Image must be less than 5MB");
//     if (!file.type.startsWith("image/")) return alert("Please select a valid image");

//     setFormData((prev) => ({
//       ...prev,
//       imageFile: file,
//       imagePreview: URL.createObjectURL(file),
//     }));
//   };

//   // Add Item
//   const handleAddItem = async (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.category_id || !formData.price) {
//       return alert("Name, Category ID and Price are required");
//     }

//     setSubmitting(true);
//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("category_id", formData.category_id);   // ← Using category_id
//     data.append("price", formData.price);
//     data.append("description", formData.description || "");
//     if (formData.imageFile) data.append("image", formData.imageFile);

//     try {
//       await addMenuItem(data);
//       alert("Item added successfully!");
//       setIsAddModalOpen(false);
//       resetForm();
//       fetchMenuItems();
//     } catch (err) {
//       alert("Failed to add item");
//       console.error(err);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   // Update Item - Fixed to match your Postman request
//   const handleUpdateItem = async (e) => {
//     e.preventDefault();
//     if (!selectedItem || !formData.name || !formData.category_id || !formData.price) {
//       return alert("Name, Category ID and Price are required");
//     }

//     setSubmitting(true);
//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("category_id", formData.category_id);   // ← This is what your backend expects
//     data.append("price", formData.price);
//     data.append("description", formData.description || "");
//     if (formData.imageFile) data.append("image", formData.imageFile);

//     try {
//       await updateMenuItem(selectedItem.id, data);
//       alert("Item updated successfully!");
//       setIsEditModalOpen(false);
//       resetForm();
//       fetchMenuItems();
//     } catch (err) {
//       console.error("Update error:", err.response?.data || err.message);
//       alert("Failed to update item. Please check console.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const handleDeleteItem = async () => {
//     if (!selectedItem) return;
//     setSubmitting(true);

//     try {
//       await deleteMenuItem(selectedItem.id);
//       alert("Item deleted successfully!");
//       setIsDeleteModalOpen(false);
//       fetchMenuItems();
//     } catch (err) {
//       alert("Failed to delete item");
//       console.error(err);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       name: "",
//       category_id: "",
//       price: "",
//       description: "",
//       imageFile: null,
//       imagePreview: null,
//     });
//     setSelectedItem(null);
//   };

//   const filteredItems = menuItems.filter((item) =>
//     [item.name, item.description, item.category].some((field) =>
//       field?.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   return (
//     <div className="min-h-screen bg-[#f4efe6] p-6 md:p-8 font-sans">
//       <div className="max-w-7xl mx-auto space-y-6">
//         {/* Header */}
//         <div className="flex mt-10 flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//           <div>
//             <h1 className="text-3xl md:text-[32px] font-bold text-gray-900 font-roboto">Menu Management</h1>
//             <p className="mt-1 text-sm text-gray-600">Add, edit, and manage menu items and their availability.</p>
//           </div>
//           <button
//             onClick={() => { resetForm(); setIsAddModalOpen(true); }}
//             className="bg-[#D4AF37] hover:bg-[#c09b2f] text-white px-5 py-2.5 rounded-xl md:rounded-[14px] text-sm md:text-[13px] font-medium shadow-sm transition-colors flex items-center gap-1.5"
//           >
//             + Add Items
//           </button>
//         </div>

//         {/* Search */}
//         <div className="relative max-w-md">
//           <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//           <input
//             type="text"
//             placeholder="Search menu items..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-10 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//           />
//         </div>

//         {/* Table */}
//         <div className="bg-white rounded-2xl md:rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left min-w-[700px]">
//               <thead className="bg-[#F6E9EA] text-gray-600 text-sm uppercase tracking-wider">
//                 <tr>
//                   <th className="px-6 py-4 font-roboto font-semibold">ITEM</th>
//                   <th className="px-6 py-4 font-roboto font-semibold">CATEGORY</th>
//                   <th className="px-6 py-4 font-roboto font-semibold">PRICE</th>
//                   <th className="px-6 py-4 font-roboto font-semibold">STATUS</th>
//                   <th className="px-6 py-4 font-roboto font-semibold text-right">ACTIONS</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100">
//                 {loading ? (
//                   <tr><td colSpan="5" className="py-16 text-center">Loading menu items...</td></tr>
//                 ) : filteredItems.length === 0 ? (
//                   <tr><td colSpan="5" className="py-16 text-center">No items found</td></tr>
//                 ) : (
//                   filteredItems.map((item) => (
//                     <tr key={item.id} className="hover:bg-gray-50/60 transition-colors">
//                       <td className="px-6 py-4">
//                         <div className="flex items-center gap-3">
//                           <div className="w-10 h-10 rounded-[15.19px] bg-gray-50 border border-gray-200 overflow-hidden flex items-center justify-center text-xl">
//                             {item.image ? (
//                               <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                             ) : "🍽️"}
//                           </div>
//                           <div>
//                             <div className="font-medium text-gray-900">{item.name}</div>
//                             <div className="text-sm text-gray-500 line-clamp-1">{item.description}</div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 text-gray-700">{item.category}</td>
//                       <td className="px-6 py-4 font-medium text-gray-900">₦{item.price}</td>
//                       <td className="px-6 py-4">
//                         <button
//                           onClick={() => handleToggleStatus(item.id)}
//                           className={`px-3.5 py-1.5 text-sm font-medium rounded-full border flex items-center gap-1.5 transition-all ${statusStyles[item.status].bg} ${statusStyles[item.status].text} ${statusStyles[item.status].border} ${statusStyles[item.status].hover}`}
//                         >
//                           {item.status} <span className="text-xs opacity-70">▼</span>
//                         </button>
//                       </td>
//                       <td className="px-6 py-4 text-right">
//                         <div className="flex items-center justify-end gap-3">
//                           <button
//                             onClick={() => openEditModal(item)}
//                             className="p-1.5 text-gray-500 hover:text-[#D4AF37] rounded hover:bg-gray-100"
//                           >
//                             <FiEdit2 size={18} />
//                           </button>
//                           <button
//                             onClick={() => openDeleteModal(item)}
//                             className="p-1.5 text-gray-500 hover:text-red-600 rounded hover:bg-gray-100"
//                           >
//                             <BsThreeDotsVertical size={18} />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* ====================== ADD & EDIT MODAL ====================== */}
//       {(isAddModalOpen || isEditModalOpen) && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
//           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
//             <div className="px-6 py-4 border-b">
//               <h2 className="text-xl font-bold text-center text-[#A61E30]">
//                 {isEditModalOpen ? "Edit Menu Item" : "Add New Menu Item"}
//               </h2>
//             </div>

//             <form onSubmit={isEditModalOpen ? handleUpdateItem : handleAddItem} className="p-6 space-y-5">
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 placeholder="Item Name"
//                 required
//                 className="pl-3 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//               />

//               <input
//                 type="text"
//                 name="category_id"
//                 value={formData.category_id}
//                 onChange={handleInputChange}
//                 placeholder="Category ID (e.g. 1, 6, 7)"
//                 required
//                 className="pl-3 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[28px] rounded-tl-[5px] font-dm"
//               />

//               <input
//                 type="text"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleInputChange}
//                 placeholder="Price (e.g. 25000)"
//                 required
//                 className="pl-3 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
//               />

//               <textarea
//                 name="description"
//                 value={formData.description}
//                 onChange={handleInputChange}
//                 placeholder="Description..."
//                 rows={3}
//                 className="pl-4 pr-4 py-3 w-full bg-white border border-gray-300 shadow-sm text-gray-700 outline-none rounded-[28px] rounded-tl-[8px] font-dm resize-none"
//               />

//               <div className="relative group mt-2">
//                 <div className="w-full h-32 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 overflow-hidden">
//                   {formData.imagePreview ? (
//                     <img src={formData.imagePreview} alt="preview" className="w-full h-full object-cover" />
//                   ) : (
//                     <div className="flex flex-col items-center justify-center h-full text-gray-400 text-xs">
//                       Tap to upload image (optional)
//                     </div>
//                   )}
//                 </div>
//                 <label className="absolute inset-0 cursor-pointer">
//                   <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
//                 </label>
//               </div>

//               <div className="flex justify-end gap-3 pt-4">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setIsAddModalOpen(false);
//                     setIsEditModalOpen(false);
//                     resetForm();
//                   }}
//                   className="px-6 py-2.5 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-[11.2px]"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={submitting}
//                   className="px-6 py-2.5 bg-[#A61E30] hover:bg-red-700 text-white rounded-[11.2px] disabled:opacity-70"
//                 >
//                   {submitting ? "Saving..." : isEditModalOpen ? "Update Item" : "Save Item"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Delete Confirmation Modal */}
//       {isDeleteModalOpen && selectedItem && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
//           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center">
//             <h3 className="text-lg font-semibold text-red-600 mb-2">Delete Item?</h3>
//             <p className="text-gray-600 mb-6">
//               Are you sure you want to delete <strong>{selectedItem.name}</strong>?<br />
//               This action cannot be undone.
//             </p>
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={() => setIsDeleteModalOpen(false)}
//                 className="px-6 py-2.5 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-[11.2px]"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleDeleteItem}
//                 disabled={submitting}
//                 className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-[11.2px] disabled:opacity-70"
//               >
//                 {submitting ? "Deleting..." : "Yes, Delete"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }





import React, { useState, useEffect } from "react";
import { FiSearch, FiEdit2 } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { 
  getMenuItems, 
  toggleMenuItemStatus, 
  addMenuItem, 
  updateMenuItem, 
  deleteMenuItem,
  apiClient // Used to fetch categories for the dropdown
} from "../api/apiServices";

const statusStyles = {
  Available: { bg: "bg-green-100", text: "text-green-700", border: "border-green-200", hover: "hover:bg-green-200" },
  Unavailable: { bg: "bg-red-100", text: "text-red-700", border: "border-red-200", hover: "hover:bg-red-200" },
};

export default function MenuManagement() {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    category_id: "",
    price: "",
    description: "",
    imageFile: null,
    imagePreview: null,
  });

  // Fetch menu and category list on load
  const fetchInitialData = async () => {
    setLoading(true);
    try {
      const menuRes = await getMenuItems();
      if (menuRes.success) {
        const formatted = menuRes.data.map((item) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          category: item.category,
          category_id: item.category_id,
          price: item.price,
          status: item.is_available ? "Available" : "Unavailable",
          image: item.image,
        }));
        setMenuItems(formatted);
      }

      // Fetch the categories so the admin can pick from a list
      const catRes = await apiClient.get("/web-menu");
      if (catRes.data.success) {
        setCategories(catRes.data.data.categories);
      }
    } catch (err) {
      console.error("Data fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  const handleToggleStatus = async (id) => {
    try {
      await toggleMenuItemStatus(id);
      fetchInitialData();
    } catch (err) {
      alert("Failed to update status");
    }
  };

  const openEditModal = (item) => {
    setSelectedItem(item);
    setFormData({
      name: item.name,
      category_id: item.category_id || "",
      price: String(item.price).replace(/,/g, ""),
      description: item.description || "",
      imageFile: null,
      imagePreview: item.image || null,
    });
    setIsEditModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFormData((prev) => ({
      ...prev,
      imageFile: file,
      imagePreview: URL.createObjectURL(file),
    }));
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    const data = new FormData();
    data.append("name", formData.name);
    data.append("category_id", formData.category_id);
    data.append("price", formData.price);
    data.append("description", formData.description || "");
    if (formData.imageFile) data.append("image", formData.imageFile);

    // LOG THE DATA TO CHECK VALUES
    console.log("--- Sending Add Item Data ---");
    for (let pair of data.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    try {
      await addMenuItem(data);
      alert("Item added successfully!");
      setIsAddModalOpen(false);
      resetForm();
      fetchInitialData();
    } catch (err) {
      console.error("Add Item Error:", err.response?.data);
      alert(err.response?.data?.message || "Failed to add item");
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpdateItem = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    const data = new FormData();
    data.append("name", formData.name);
    data.append("category_id", formData.category_id);
    data.append("price", formData.price);
    data.append("description", formData.description || "");
    
    // IMPORTANT: Laravel needs POST + _method PUT for file updates
    data.append("_method", "PUT");
    if (formData.imageFile) data.append("image", formData.imageFile);

    console.log("--- Sending Update Item Data ---");
    for (let pair of data.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    try {
      await updateMenuItem(selectedItem.id, data);
      alert("Item updated successfully!");
      setIsEditModalOpen(false);
      resetForm();
      fetchInitialData();
    } catch (err) {
      console.error("Update Item Error:", err.response?.data);
      alert("Update failed. Check console for error details.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: "", category_id: "", price: "", description: "", imageFile: null, imagePreview: null });
    setSelectedItem(null);
  };

  const filteredItems = menuItems.filter((item) =>
    [item.name, item.description, item.category].some((field) =>
      field?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-[#f4efe6] p-6 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex mt-10 flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-[32px] font-bold text-gray-900 font-roboto">Menu Management</h1>
            <p className="mt-1 text-sm text-gray-600">Add, edit, and manage menu items and their availability.</p>
          </div>
          <button
            onClick={() => { resetForm(); setIsAddModalOpen(true); }}
            className="bg-[#D4AF37] hover:bg-[#c09b2f] text-white px-5 py-2.5 rounded-xl md:rounded-[14px] text-sm md:text-[13px] font-medium shadow-sm transition-colors flex items-center gap-1.5"
          >
            + Add Items
          </button>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search menu items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl md:rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[700px]">
              <thead className="bg-[#F6E9EA] text-gray-600 text-sm uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-roboto font-semibold">ITEM</th>
                  <th className="px-6 py-4 font-roboto font-semibold">CATEGORY</th>
                  <th className="px-6 py-4 font-roboto font-semibold">PRICE</th>
                  <th className="px-6 py-4 font-roboto font-semibold">STATUS</th>
                  <th className="px-6 py-4 font-roboto font-semibold text-right">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr><td colSpan="5" className="py-16 text-center">Loading menu items...</td></tr>
                ) : (
                  filteredItems.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50/60 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-[15.19px] bg-gray-50 border border-gray-200 overflow-hidden flex items-center justify-center text-xl">
                            {item.image ? (
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            ) : "🍽️"}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{item.name}</div>
                            <div className="text-sm text-gray-500 line-clamp-1">{item.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{item.category}</td>
                      <td className="px-6 py-4 font-medium text-gray-900">₦{item.price}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleToggleStatus(item.id)}
                          className={`px-3.5 py-1.5 text-sm font-medium rounded-full border flex items-center gap-1.5 transition-all ${statusStyles[item.status].bg} ${statusStyles[item.status].text} ${statusStyles[item.status].border} ${statusStyles[item.status].hover}`}
                        >
                          {item.status} <span className="text-xs opacity-70">▼</span>
                        </button>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <button onClick={() => openEditModal(item)} className="p-1.5 text-gray-500 hover:text-[#D4AF37] rounded hover:bg-gray-100">
                            <FiEdit2 size={18} />
                          </button>
                          <button onClick={() => { setSelectedItem(item); setIsDeleteModalOpen(true); }} className="p-1.5 text-gray-500 hover:text-red-600 rounded hover:bg-gray-100">
                            <BsThreeDotsVertical size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ADD & EDIT MODAL */}
      {(isAddModalOpen || isEditModalOpen) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="px-6 py-4 border-b">
              <h2 className="text-xl font-bold text-center text-[#A61E30]">
                {isEditModalOpen ? "Edit Menu Item" : "Add New Menu Item"}
              </h2>
            </div>

            <form onSubmit={isEditModalOpen ? handleUpdateItem : handleAddItem} className="p-6 space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Item Name"
                required
                className="pl-3 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
              />

              {/* DROPDOWN FOR CATEGORIES */}
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleInputChange}
                required
                className="pl-3 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[28px] rounded-tl-[5px] font-dm"
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Price (e.g. 2500)"
                required
                className="pl-3 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none rounded-[40px] rounded-tl-[5px] font-dm"
              />

              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Description..."
                rows={3}
                className="pl-4 pr-4 py-3 w-full bg-white border border-gray-300 shadow-sm text-gray-700 outline-none rounded-[28px] rounded-tl-[8px] font-dm resize-none"
              />

              <div className="relative group mt-2">
                <div className="w-full h-32 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 overflow-hidden">
                  {formData.imagePreview ? (
                    <img src={formData.imagePreview} alt="preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400 text-xs">
                      Tap to upload image
                    </div>
                  )}
                </div>
                <label className="absolute inset-0 cursor-pointer">
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => { setIsAddModalOpen(false); setIsEditModalOpen(false); resetForm(); }} className="px-6 py-2.5 text-gray-700 bg-gray-200 rounded-[11.2px]">Cancel</button>
                <button type="submit" disabled={submitting} className="px-6 py-2.5 bg-[#A61E30] text-white rounded-[11.2px]">{submitting ? "Saving..." : "Save Item"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}