// import React, { useState, useEffect } from "react";
// import { FiPlus, FiEdit2, FiTrash2, FiUpload, FiX, FiSearch } from "react-icons/fi";
// import { getAllCategories, addCategory, updateCategory, deleteCategory } from "../api/apiServices"; // Ensure these exist in your apiServices
// import { toast } from "react-hot-toast"; // Recommended for feedback

// const AdminCategories = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [submitting, setSubmitting] = useState(false);

//   // Form State
//   const [formData, setFormData] = useState({ id: "", name: "", image: null });
//   const [imagePreview, setImagePreview] = useState(null);

//   const fetchCategories = async () => {
//     setLoading(true);
//     try {
//       const res = await getAllCategories();
//       if (res?.success) setCategories(res.data);
//     } catch (err) {
//       toast.error("Failed to load categories");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => { fetchCategories(); }, []);

//   const handleOpenModal = (category = null) => {
//     if (category) {
//       setIsEditing(true);
//       setFormData({ id: category.id, name: category.name, image: null });
//       setImagePreview(`https://api.queensplate.store/storage/${category.image}`);
//     } else {
//       setIsEditing(false);
//       setFormData({ id: "", name: "", image: null });
//       setImagePreview(null);
//     }
//     setIsModalOpen(true);
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData({ ...formData, image: file });
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
    
//     // Using FormData for Multi-part (Image Upload)
//     const data = new FormData();
//     data.append("name", formData.name);
//     if (formData.image) data.append("image", formData.image);
//     if (isEditing) data.append("category_id", formData.id);

//     try {
//       let res;
//       if (isEditing) {
//         res = await updateCategory(data); // PUT req
//       } else {
//         res = await addCategory(data); // POST req
//       }

//       if (res.status === 200 || res.success) {
//         toast.success(`Category ${isEditing ? "updated" : "added"} successfully`);
//         setIsModalOpen(false);
//         fetchCategories();
//       }
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Operation failed");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this category?")) {
//       try {
//         const res = await deleteCategory(id);
//         if (res.status === 200) {
//           toast.success("Category deleted");
//           fetchCategories();
//         }
//       } catch (err) {
//         toast.error("Delete failed");
//       }
//     }
//   };

//   const filteredCategories = categories.filter(cat => 
//     cat.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="p-8 mt-10 bg-[#F6F1E8] min-h-screen">
//       {/* HEADER */}
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-800">Category Management</h1>
//           <p className="text-sm text-gray-500">Organize your menu items by categories</p>
//         </div>
//         <button 
//           onClick={() => handleOpenModal()}
//           className="flex items-center gap-2 bg-[#A61E30] text-white px-5 py-2.5 rounded-xl font-medium transition-transform active:scale-95 shadow-lg shadow-red-900/20"
//         >
//           <FiPlus /> Add Category
//         </button>
//       </div>

//       {/* SEARCH BAR */}
//       <div className="relative mb-6 max-w-md">
//         <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
//         <input 
//           type="text"
//           placeholder="Search categories..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#A61E30]/20 transition-all shadow-sm"
//         />
//       </div>

//       {/* GRID */}
//       {loading ? (
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 animate-pulse">
//            {[...Array(5)].map((_, i) => <div key={i} className="h-48 bg-white rounded-3xl" />)}
//         </div>
//       ) : (
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
//           {filteredCategories.map((cat) => (
//             <div key={cat.id} className="group relative bg-white rounded-3xl p-4 shadow-sm border border-transparent hover:border-[#A61E30]/30 transition-all hover:shadow-xl">
//               <div className="aspect-square rounded-2xl bg-gray-50 overflow-hidden mb-4">
//                 <img 
//                   src={cat.image ? `https://api.queensplate.store/storage/${cat.image}` : "/placeholder-cat.png"} 
//                   alt={cat.name}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   onError={(e) => { e.target.src = "https://placehold.co/400x400?text=Category"; }}
//                 />
//               </div>
//               <h3 className="font-bold text-gray-800 text-center truncate">{cat.name}</h3>
              
//               {/* ACTIONS OVERLAY */}
//               <div className="absolute top-6 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <button onClick={() => handleOpenModal(cat)} className="p-2 bg-white text-blue-600 rounded-full shadow-lg hover:bg-blue-50">
//                   <FiEdit2 size={14} />
//                 </button>
//                 <button onClick={() => handleDelete(cat.id)} className="p-2 bg-white text-red-600 rounded-full shadow-lg hover:bg-red-50">
//                   <FiTrash2 size={14} />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* ADD/EDIT MODAL */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
//           <div className="bg-white rounded-[2rem] w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
//             <div className="p-6 border-b flex justify-between items-center">
//               <h2 className="text-xl font-bold text-gray-800">{isEditing ? "Edit Category" : "New Category"}</h2>
//               <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//                 <FiX className="text-xl text-gray-400" />
//               </button>
//             </div>
            
//             <form onSubmit={handleSubmit} className="p-8 space-y-6">
//               {/* IMAGE UPLOAD */}
//               <div className="flex flex-col items-center">
//                 <label className="relative cursor-pointer group">
//                   <div className="w-32 h-32 rounded-3xl border-2 border-dashed border-gray-200 flex items-center justify-center overflow-hidden bg-gray-50 group-hover:bg-gray-100 transition-colors">
//                     {imagePreview ? (
//                       <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
//                     ) : (
//                       <div className="text-center">
//                         <FiUpload className="mx-auto text-gray-400 mb-1" />
//                         <span className="text-[10px] font-bold text-gray-400 uppercase">Upload</span>
//                       </div>
//                     )}
//                   </div>
//                   <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
//                   <div className="absolute -bottom-2 -right-2 bg-[#A61E30] text-white p-2 rounded-xl shadow-lg">
//                     <FiEdit2 size={12} />
//                   </div>
//                 </label>
//                 <p className="text-[10px] text-gray-400 mt-3 uppercase tracking-widest font-bold">Category Image</p>
//               </div>

//               {/* NAME INPUT */}
//               <div>
//                 <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Category Name</label>
//                 <input 
//                   required
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) => setFormData({...formData, name: e.target.value})}
//                   placeholder="e.g. Traditional Soups"
//                   className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#A61E30]/20 transition-all font-medium"
//                 />
//               </div>

//               <button 
//                 disabled={submitting}
//                 type="submit"
//                 className="w-full py-4 bg-[#A61E30] text-white rounded-2xl font-bold shadow-xl shadow-red-900/20 transition-transform active:scale-95 disabled:opacity-50"
//               >
//                 {submitting ? "Saving..." : isEditing ? "Update Category" : "Create Category"}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminCategories;







import React, { useState, useEffect } from "react";
import { FiPlus, FiEdit2, FiTrash2, FiUpload, FiX, FiSearch } from "react-icons/fi";
import { getAllCategories, addCategory, updateCategory, deleteCategory } from "../api/apiServices";
import { toast } from "react-hot-toast";

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({ id: "", name: "", image: null });
  const [imagePreview, setImagePreview] = useState(null);

  // Helper to format image URLs from the API
  const getImageUrl = (path) => {
    if (!path) return "https://placehold.co/400x400?text=No+Image";
    // Checks if path already contains http, otherwise appends base storage url
    return path.startsWith("http") ? path : `https://api.queensplate.store/storage/${path}`;
  };

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await getAllCategories();
      if (res?.success) {
        setCategories(res.data);
      }
    } catch (err) {
      toast.error("Failed to load categories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchCategories(); }, []);

  const handleOpenModal = (category = null) => {
    if (category) {
      setIsEditing(true);
      setFormData({ id: category.id, name: category.name, image: null });
      setImagePreview(getImageUrl(category.image));
    } else {
      setIsEditing(false);
      setFormData({ id: "", name: "", image: null });
      setImagePreview(null);
    }
    setIsModalOpen(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    const data = new FormData();
    data.append("name", formData.name);
    
    // Only append image if a new file was selected
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      if (isEditing) {
        // Per your requirement: PUT expects 'category_id'
        data.append("category_id", formData.id);
        await updateCategory(data);
        toast.success("Category updated");
      } else {
        await addCategory(data);
        toast.success("Category created");
      }
      setIsModalOpen(false);
      fetchCategories();
    } catch (err) {
      toast.error(err.response?.data?.message || "Operation failed");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await deleteCategory(id);
        toast.success("Category removed");
        fetchCategories();
      } catch (err) {
        toast.error("Delete failed");
      }
    }
  };

  const filteredCategories = categories.filter(cat => 
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 mt-10 bg-[#F6F1E8] min-h-screen">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-black text-gray-800">Category Management</h1>
          <p className="text-sm text-gray-500 font-medium">Total Categories: {categories.length}</p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 bg-[#A61E30] text-white px-6 py-3 rounded-2xl font-bold transition-all active:scale-95 shadow-lg shadow-red-900/20 hover:bg-[#8e1a29]"
        >
          <FiPlus strokeWidth={3} /> Add Category
        </button>
      </div>

      {/* SEARCH */}
      <div className="relative mb-8 max-w-md">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input 
          type="text"
          placeholder="Filter categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3.5 bg-white border-none rounded-2xl focus:ring-2 focus:ring-[#A61E30] transition-all shadow-sm font-medium"
        />
      </div>

      {/* CATEGORY GRID */}
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
           {[...Array(10)].map((_, i) => (
             <div key={i} className="h-56 bg-white/50 animate-pulse rounded-[2.5rem]" />
           ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="group bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-white hover:border-red-100">
              <div className="aspect-square rounded-[2rem] bg-gray-50 overflow-hidden mb-4 relative">
                <img 
                  src={getImageUrl(cat.image)} 
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* ACTIONS OVERLAY */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                   <button onClick={() => handleOpenModal(cat)} className="p-3 bg-white text-blue-600 rounded-2xl shadow-xl hover:scale-110 transition-transform">
                      <FiEdit2 size={18} />
                   </button>
                   <button onClick={() => handleDelete(cat.id)} className="p-3 bg-white text-red-600 rounded-2xl shadow-xl hover:scale-110 transition-transform">
                      <FiTrash2 size={18} />
                   </button>
                </div>
              </div>
              <div className="px-2 pb-2">
                <h3 className="font-bold text-gray-800 text-center text-lg">{cat.name}</h3>
                <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest mt-1">ID: #{cat.id}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ADD/EDIT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-[3rem] w-full max-w-md overflow-hidden shadow-2xl animate-in zoom-in duration-300">
            <div className="p-8 border-b border-gray-50 flex justify-between items-center">
              <h2 className="text-2xl font-black text-gray-800">{isEditing ? "Edit Category" : "New Category"}</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <FiX className="text-2xl text-gray-400" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              <div className="flex flex-col items-center">
                <label className="relative cursor-pointer group">
                  <div className="w-40 h-40 rounded-[3rem] border-4 border-dashed border-gray-100 flex items-center justify-center overflow-hidden bg-gray-50 group-hover:border-[#A61E30]/30 transition-all">
                    {imagePreview ? (
                      <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-center p-4">
                        <FiUpload className="mx-auto text-[#A61E30] mb-2 text-2xl" />
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Click to Upload Image</span>
                      </div>
                    )}
                  </div>
                  <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                </label>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Category Name</label>
                <input 
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter name..."
                  className="w-full px-6 py-5 bg-gray-50 border-none rounded-3xl focus:ring-2 focus:ring-[#A61E30] transition-all font-bold text-gray-700"
                />
              </div>

              <button 
                disabled={submitting}
                type="submit"
                className="w-full py-5 bg-[#A61E30] text-white rounded-3xl font-black text-lg shadow-2xl shadow-red-900/30 transition-all active:scale-95 disabled:opacity-50"
              >
                {submitting ? "Processing..." : isEditing ? "Save Changes" : "Create Category"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCategories;