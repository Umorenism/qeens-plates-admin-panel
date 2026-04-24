










// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { getOrderById, updateOrderStatus } from "../api/apiServices"; 
// import toast from "react-hot-toast";

// export default function OrderDetailInfo() {
//   const { id } = useParams(); // This is the numeric ID from the URL
//   const [order, setOrder] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);

//   const statusConfig = [
//     { label: "Order Received", key: "received", color: "bg-blue-100 text-blue-700 border-blue-200" },
//     { label: "Preparing Food", key: "prepared", color: "bg-purple-100 text-purple-700 border-purple-200" },
//     { label: "Ready to Pickup", key: "Ready_for_pick", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
//     { label: "Out for Delivery", key: "out_for_delivery", color: "bg-orange-100 text-orange-700 border-orange-200" },
//     { label: "Delivered", key: "delivered", color: "bg-green-100 text-green-700 border-green-200" },
//   ];

//   const [currentStatus, setCurrentStatus] = useState(null);

//   useEffect(() => {
//     const fetchOrderDetail = async () => {
//       try {
//         setLoading(true);
//         const response = await getOrderById(id);
//         if (response.success) {
//           setOrder(response.data);
//           // Match current status slug from API to our config
//           const match = statusConfig.find(s => 
//             s.key.toLowerCase() === response.data.status.toLowerCase().replace(/ /g, '_')
//           );
//           setCurrentStatus(match || statusConfig[0]);
//         }
//       } catch (err) {
//         toast.error("Failed to load order details");
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (id) fetchOrderDetail();
//   }, [id]);

//   const handleStatusUpdate = async (statusObj) => {
//     if (updating) return;
//     try {
//       setUpdating(true);
      
//       // Update using the numeric ID as required by your endpoint
//       const response = await updateOrderStatus(id, statusObj.key);
      
//       if (response.success) {
//         setCurrentStatus(statusObj);
        
//         // Update local state: Use total_amount from update res or keep existing total
//         setOrder(prev => ({ 
//           ...prev, 
//           status: statusObj.key,
//           // Sync with the updated_at time if provided by API
//           created_at: response.data.updated_at || prev.created_at 
//         }));
        
//         toast.success(`Status updated to ${statusObj.label}`);
//       }
//     } catch (err) {
//       toast.error("Failed to update status on server");
//     } finally {
//       setUpdating(false);
//     }
//   };

//   if (loading) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm"><div className="animate-pulse text-gray-500 text-lg font-medium">Loading...</div></div>;
//   if (!order) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm"><p className="text-gray-500">Order not found.</p></div>;

//   return (
//     <div className="min-h-screen bg-[#f4efe6] font-dm-sans px-4 py-8 md:p-10">
//       <div className="mx-auto w-full max-w-5xl space-y-6">
//         <div className="flex justify-between items-center mt-10 flex-wrap gap-3">
//           <div className="flex flex-col items-start gap-2">
//             <h1 className="text-[22px] font-Roboto text-[#3A3A3A] font-bold">{order.order_number}</h1>
//             <span className="text-sm text-gray-500">{order.created_at}</span>
//           </div>
//           <div className={`${currentStatus?.color} px-4 py-1.5 rounded-full text-sm font-medium border`}>
//             {currentStatus?.label}
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-6">
//           <div className="bg-white rounded-2xl p-6 shadow-sm border">
//             <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">Customer Info</h2>
//             <div className="space-y-2 text-sm">
//               <p><span className="text-gray-500">Name:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.name}</span></p>
//               <p><span className="text-gray-500">Phone:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.phone}</span></p>
//               <p><span className="text-gray-500">Address:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.address}</span></p>
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow-sm border">
//             <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">Payment</h2>
//             <div className="space-y-2 text-sm">
//               <p><span className="text-gray-500">Method:</span> <span className="text-black">{order.payment?.method}</span></p>
//               <p><span className="text-gray-500">Status:</span> <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold ml-2">{order.payment?.status}</span></p>
//               <p className="pt-2">
//                 <span className="text-gray-500">Total:</span> 
//                 <span className="text-xl text-black font-bold font-dm"> ₦{order.payment?.total || order.total_amount}</span>
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-2xl p-6 shadow-sm border">
//           <h2 className="text-[20px] font-dm text-[#A61E30] font-bold mb-5 uppercase">Ordered Items</h2>
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead className="bg-[#F6E9EA] text-gray-600">
//                 <tr>
//                   <th className="text-left px-4 py-3 rounded-l-lg">Item</th>
//                   <th className="text-center px-4 py-3">Qty</th>
//                   <th className="text-right px-4 py-3">Price</th>
//                   <th className="text-right px-4 py-3 rounded-r-lg">Subtotal</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-50">
//                 {order.items?.map((item, index) => (
//                   <tr key={index} className="text-black">
//                     <td className="px-4 py-4">{item.name}</td>
//                     <td className="text-center px-4 py-4">{item.quantity}</td>
//                     <td className="text-right px-4 py-4">₦{item.price}</td>
//                     <td className="text-right px-4 py-4 font-medium">₦{item.subtotal}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div className="bg-white rounded-2xl p-6 shadow-sm border">
//           <h2 className="text-[20px] font-dm font-bold text-[#A61E30] mb-5 uppercase">Update Status</h2>
//           <div className="flex flex-wrap gap-3">
//             {statusConfig.map((status) => (
//               <button
//                 key={status.key}
//                 disabled={updating}
//                 onClick={() => handleStatusUpdate(status)}
//                 className={`px-4 py-2 text-sm transition font-dm rounded-[40px] rounded-tl-[5px] ${
//                   currentStatus?.key === status.key ? "bg-[#A61E30] text-white" : "bg-[#F3E9B530] border text-gray-700 hover:bg-gray-200"
//                 } ${updating ? "opacity-50 cursor-not-allowed" : ""}`}
//               >
//                 {status.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






// // import { useParams } from "react-router-dom";
// // import { useState, useEffect } from "react";
// // import { getOrderById, updateOrderStatus } from "../api/apiServices"; 
// // import toast from "react-hot-toast";

// // export default function OrderDetailInfo() {
// //   const { id } = useParams();
// //   const [order, setOrder] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [updating, setUpdating] = useState(false);

// //   const statusConfig = [
// //     { label: "Order Received", key: "received", color: "bg-blue-100 text-blue-700 border-blue-200" },
// //     { label: "Preparing Food", key: "prepared", color: "bg-purple-100 text-purple-700 border-purple-200" },
// //     { label: "Ready to Pickup", key: "Ready_for_pick", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
// //     { label: "Out for Delivery", key: "out_for_delivery", color: "bg-orange-100 text-orange-700 border-orange-200" },
// //     { label: "Delivered", key: "delivered", color: "bg-green-100 text-green-700 border-green-200" },
// //   ];

// //   const [currentStatus, setCurrentStatus] = useState(null);

// //   useEffect(() => {
// //     const fetchOrderDetail = async () => {
// //       try {
// //         setLoading(true);
// //         const response = await getOrderById(id);
// //         if (response.success) {
// //           setOrder(response.data);
// //           // Match current status slug from API to our config
// //           const match = statusConfig.find(s => 
// //             s.key.toLowerCase() === response.data.status.toLowerCase() ||
// //             s.label.toLowerCase() === response.data.status.toLowerCase()
// //           );
// //           setCurrentStatus(match || statusConfig[0]);
// //         }
// //       } catch (err) {
// //         toast.error("Failed to load order details");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     if (id) fetchOrderDetail();
// //   }, [id]);

// //   const handleStatusUpdate = async (statusObj) => {
// //     if (updating) return;
// //     try {
// //       setUpdating(true);
// //       const response = await updateOrderStatus(id, statusObj.key);
      
// //       if (response.success) {
// //         // Update both the status tracker and the order object for the UI
// //         setCurrentStatus(statusObj);
// //         setOrder(prev => ({ 
// //           ...prev, 
// //           status: statusObj.key,
// //           created_at: response.data?.updated_at || prev.created_at 
// //         }));
        
// //         toast.success(`Status updated to ${statusObj.label}`);
// //       }
// //     } catch (err) {
// //       toast.error("Failed to update status on server");
// //     } finally {
// //       setUpdating(false);
// //     }
// //   };

// //   if (loading) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm"><div className="animate-pulse text-gray-500 text-lg font-medium">Loading...</div></div>;
// //   if (!order) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm"><p className="text-gray-500">Order not found.</p></div>;

// //   return (
// //     <div className="min-h-screen bg-[#f4efe6] font-dm-sans px-4 py-8 md:p-10">
// //       <div className="mx-auto w-full max-w-5xl space-y-6">
// //         <div className="flex justify-between items-center mt-10 flex-wrap gap-3">
// //           <div className="flex flex-col items-start gap-2">
// //             <h1 className="text-[22px] font-Roboto text-[#3A3A3A] font-bold">{order.order_number}</h1>
// //             <span className="text-sm text-gray-500">{order.created_at}</span>
// //           </div>
// //           <div className={`${currentStatus?.color} px-4 py-1.5 rounded-full text-sm font-medium border`}>
// //             {currentStatus?.label}
// //           </div>
// //         </div>

// //         <div className="grid md:grid-cols-2 gap-6">
// //           <div className="bg-white rounded-2xl p-6 shadow-sm border">
// //             <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">Customer Info</h2>
// //             <div className="space-y-2 text-sm">
// //               <p><span className="text-gray-500">Name:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.name}</span></p>
// //               <p><span className="text-gray-500">Phone:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.phone}</span></p>
// //               <p><span className="text-gray-500">Address:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.address}</span></p>
// //             </div>
// //           </div>

// //           <div className="bg-white rounded-2xl p-6 shadow-sm border">
// //             <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">Payment</h2>
// //             <div className="space-y-2 text-sm">
// //               <p><span className="text-gray-500">Method:</span> <span className="text-black">{order.payment?.method}</span></p>
// //               <p><span className="text-gray-500">Status:</span> <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold ml-2">{order.payment?.status}</span></p>
// //               <p className="pt-2">
// //                 <span className="text-gray-500">Total:</span> 
// //                 <span className="text-xl text-black font-bold font-dm"> ₦{order.payment?.total || order.total_amount}</span>
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="bg-white rounded-2xl p-6 shadow-sm border">
// //           <h2 className="text-[20px] font-dm text-[#A61E30] font-bold mb-5 uppercase">Ordered Items</h2>
// //           <div className="overflow-x-auto">
// //             <table className="w-full text-sm">
// //               <thead className="bg-[#F6E9EA] text-gray-600">
// //                 <tr>
// //                   <th className="text-left px-4 py-3 rounded-l-lg">Item</th>
// //                   <th className="text-center px-4 py-3">Qty</th>
// //                   <th className="text-right px-4 py-3">Price</th>
// //                   <th className="text-right px-4 py-3 rounded-r-lg">Subtotal</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="divide-y divide-gray-50">
// //                 {order.items?.map((item, index) => (
// //                   <tr key={index} className="text-black">
// //                     <td className="px-4 py-4">{item.name}</td>
// //                     <td className="text-center px-4 py-4">{item.quantity}</td>
// //                     <td className="text-right px-4 py-4">₦{item.price}</td>
// //                     <td className="text-right px-4 py-4 font-medium">₦{item.subtotal}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>

// //         <div className="bg-white rounded-2xl p-6 shadow-sm border">
// //           <h2 className="text-[20px] font-dm font-bold text-[#A61E30] mb-5 uppercase">Update Status</h2>
// //           <div className="flex flex-wrap gap-3">
// //             {statusConfig.map((status) => (
// //               <button
// //                 key={status.key}
// //                 disabled={updating}
// //                 onClick={() => handleStatusUpdate(status)}
// //                 className={`px-4 py-2 text-sm transition font-dm rounded-[40px] rounded-tl-[5px] border ${
// //                   currentStatus?.key === status.key ? "bg-[#A61E30] text-white border-[#A61E30]" : "bg-[#F3E9B530] text-gray-700 hover:bg-gray-200 border-transparent"
// //                 } ${updating ? "opacity-50 cursor-not-allowed" : ""}`}
// //               >
// //                 {status.label}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }






// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { getOrderById, updateOrderStatus } from "../api/apiServices"; 
// import toast from "react-hot-toast";

// export default function OrderDetailInfo() {
//   const { id } = useParams();
//   const [order, setOrder] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);

//   // UPDATED: Keys now match your backend requirements exactly (all lowercase)
//   const statusConfig = [
//     { label: "Order Received", key: "received", color: "bg-blue-100 text-blue-700 border-blue-200" },
//     { label: "Preparing Food", key: "prepared", color: "bg-purple-100 text-purple-700 border-purple-200" },
//     { label: "Ready to Pickup", key: "ready_for_pick", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
//     { label: "Out for Delivery", key: "out_for_delivery", color: "bg-orange-100 text-orange-700 border-orange-200" },
//     { label: "Delivered", key: "delivered", color: "bg-green-100 text-green-700 border-green-200" },
//   ];

//   const [currentStatus, setCurrentStatus] = useState(null);

//   useEffect(() => {
//     const fetchOrderDetail = async () => {
//       try {
//         setLoading(true);
//         const response = await getOrderById(id);
//         if (response.success) {
//           setOrder(response.data);
//           // Match the status from API to our config regardless of casing
//           const match = statusConfig.find(s => 
//             s.key.toLowerCase() === response.data.status.toLowerCase()
//           );
//           setCurrentStatus(match || statusConfig[0]);
//         }
//       } catch (err) {
//         toast.error("Failed to load order details");
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (id) fetchOrderDetail();
//   }, [id]);

//   const handleStatusUpdate = async (statusObj) => {
//     // Prevent double clicking or clicking the already active status
//     if (updating || currentStatus?.key === statusObj.key) return;

//     setUpdating(true);

//     toast.promise(
//       updateOrderStatus(id, statusObj.key), // statusObj.key is now lowercase (e.g., "ready_for_pick")
//       {
//         loading: `Updating to ${statusObj.label}...`,
//         success: (response) => {
//           if (response.success) {
//             setCurrentStatus(statusObj);
//             setOrder(prev => ({ 
//               ...prev, 
//               status: statusObj.key,
//               updated_at: response.data?.updated_at || prev.updated_at 
//             }));
//             return `Status updated to ${statusObj.label}`;
//           }
//           throw new Error(response.message || "Update failed");
//         },
//         error: (err) => err.message || "Failed to update status",
//       },
//       {
//         style: { minWidth: '250px', fontFamily: 'DM Sans, sans-serif' },
//         success: {
//           duration: 3000,
//           iconTheme: { primary: '#A61E30', secondary: '#fff' },
//         },
//       }
//     ).finally(() => setUpdating(false));
//   };

//   if (loading) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm"><div className="animate-pulse text-gray-500 text-lg font-medium">Loading...</div></div>;
//   if (!order) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm"><p className="text-gray-500">Order not found.</p></div>;

//   return (
//     <div className="min-h-screen bg-[#f4efe6] font-dm-sans px-4 py-8 md:p-10">
//       <div className="mx-auto w-full max-w-5xl space-y-6">
//         <div className="flex justify-between items-center mt-10 flex-wrap gap-3">
//           <div className="flex flex-col items-start gap-2">
//             <h1 className="text-[22px] font-Roboto text-[#3A3A3A] font-bold">{order.order_number}</h1>
//             <span className="text-sm text-gray-500">{order.created_at}</span>
//           </div>
//           <div className={`${currentStatus?.color} px-4 py-1.5 rounded-full text-sm font-medium border uppercase text-[10px] tracking-wider font-bold`}>
//             {currentStatus?.label}
//           </div>
//         </div>

//         {/* Info Cards */}
//         <div className="grid md:grid-cols-2 gap-6">
//           <div className="bg-white rounded-2xl p-6 shadow-sm border">
//             <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">Customer Info</h2>
//             <div className="space-y-2 text-sm">
//               <p><span className="text-gray-500">Name:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.name}</span></p>
//               <p><span className="text-gray-500">Phone:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.phone}</span></p>
//               <p><span className="text-gray-500">Address:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.address}</span></p>
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow-sm border">
//             <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">Payment</h2>
//             <div className="space-y-2 text-sm">
//               <p><span className="text-gray-500">Method:</span> <span className="text-black uppercase">{order.payment?.method}</span></p>
//               <p><span className="text-gray-500">Status:</span> <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold ml-2">{order.payment?.status}</span></p>
//               <p className="pt-2">
//                 <span className="text-gray-500">Total:</span> 
//                 <span className="text-xl text-black font-bold font-dm"> ₦{order.payment?.total || order.total_amount}</span>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Ordered Items */}
//         <div className="bg-white rounded-2xl p-6 shadow-sm border">
//           <h2 className="text-[20px] font-dm text-[#A61E30] font-bold mb-5 uppercase">Ordered Items</h2>
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead className="bg-[#F6E9EA] text-gray-600">
//                 <tr>
//                   <th className="text-left px-4 py-3 rounded-l-lg">Item</th>
//                   <th className="text-center px-4 py-3">Qty</th>
//                   <th className="text-right px-4 py-3">Price</th>
//                   <th className="text-right px-4 py-3 rounded-r-lg">Subtotal</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-50">
//                 {order.items?.map((item, index) => (
//                   <tr key={index} className="text-black">
//                     <td className="px-4 py-4">{item.name}</td>
//                     <td className="text-center px-4 py-4">{item.quantity}</td>
//                     <td className="text-right px-4 py-4">₦{item.price}</td>
//                     <td className="text-right px-4 py-4 font-medium">₦{item.subtotal}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Update Status Buttons */}
//         <div className="bg-white rounded-2xl p-6 shadow-sm border">
//           <h2 className="text-[20px] font-dm font-bold text-[#A61E30] mb-5 uppercase">Update Status</h2>
//           <div className="flex flex-wrap gap-3">
//             {statusConfig.map((status) => (
//               <button
//                 key={status.key}
//                 disabled={updating}
//                 onClick={() => handleStatusUpdate(status)}
//                 className={`px-4 py-2 text-sm transition font-dm rounded-[40px] rounded-tl-[5px] border ${
//                   currentStatus?.key === status.key 
//                     ? "bg-[#A61E30] text-white border-[#A61E30]" 
//                     : "bg-[#F3E9B530] text-gray-700 hover:bg-gray-200 border-transparent"
//                 } ${updating ? "opacity-50 cursor-not-allowed" : ""}`}
//               >
//                 {status.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { getOrderById, updateOrderStatus } from "../api/apiServices"; 
// import toast from "react-hot-toast";

// export default function OrderDetailInfo() {
//   const { id } = useParams();
//   const [order, setOrder] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);

//   const statusConfig = [
//     { label: "Order Received", key: "received", color: "bg-blue-100 text-blue-700 border-blue-200" },
//     { label: "Preparing Food", key: "prepared", color: "bg-purple-100 text-purple-700 border-purple-200" },
//     { label: "Ready to Pickup", key: "ready_for_pick", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
//     { label: "Out for Delivery", key: "out_for_delivery", color: "bg-orange-100 text-orange-700 border-orange-200" },
//     { label: "Delivered", key: "delivered", color: "bg-green-100 text-green-700 border-green-200" },
//     // ADDED: Canceled Status
//     { label: "Canceled", key: "cancelled", color: "bg-red-100 text-red-700 border-red-200" },
//   ];

//   const [currentStatus, setCurrentStatus] = useState(null);

//   // UPDATED: Disable if delivered OR canceled
//   const isFinalStatus = currentStatus?.key === "delivered" || currentStatus?.key === "cancelled";

//   useEffect(() => {
//     const fetchOrderDetail = async () => {
//       try {
//         setLoading(true);
//         const response = await getOrderById(id);
//         if (response.success) {
//           setOrder(response.data);
//           const match = statusConfig.find(s => 
//             s.key.toLowerCase() === response.data.status.toLowerCase()
//           );
//           setCurrentStatus(match || statusConfig[0]);
//         }
//       } catch (err) {
//         toast.error("Failed to load order details");
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (id) fetchOrderDetail();
//   }, [id]);

//   const handleStatusUpdate = async (statusObj) => {
//     if (updating || currentStatus?.key === statusObj.key || isFinalStatus) return;

//     setUpdating(true);

//     toast.promise(
//       updateOrderStatus(id, statusObj.key),
//       {
//         loading: `Updating to ${statusObj.label}...`,
//         success: (response) => {
//           if (response.success) {
//             setCurrentStatus(statusObj);
//             setOrder(prev => ({ 
//               ...prev, 
//               status: statusObj.key,
//               updated_at: response.data?.updated_at || prev.updated_at 
//             }));
//             return `Status updated to ${statusObj.label}`;
//           }
//           throw new Error(response.message || "Update failed");
//         },
//         error: (err) => err.message || "Failed to update status",
//       },
//       {
//         style: { minWidth: '250px', fontFamily: 'DM Sans, sans-serif' },
//         success: {
//           duration: 3000,
//           iconTheme: { primary: '#A61E30', secondary: '#fff' },
//         },
//       }
//     ).finally(() => setUpdating(false));
//   };

//   if (loading) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm"><div className="animate-pulse text-gray-500 text-lg font-medium">Loading...</div></div>;
//   if (!order) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm"><p className="text-gray-500">Order not found.</p></div>;

//   return (
//     <div className="min-h-screen bg-[#f4efe6] font-dm-sans px-4 py-8 md:p-10">
//       <div className="mx-auto w-full max-w-5xl space-y-6">
//         <div className="flex justify-between items-center mt-10 flex-wrap gap-3">
//           <div className="flex flex-col items-start gap-2">
//             <h1 className="text-[22px] font-Roboto text-[#3A3A3A] font-bold">{order.order_number}</h1>
//             <span className="text-sm text-gray-500">{order.created_at}</span>
//           </div>
//           <div className={`${currentStatus?.color} px-4 py-1.5 rounded-full text-sm font-medium border uppercase text-[10px] tracking-wider font-bold`}>
//             {currentStatus?.label}
//           </div>
//         </div>

//         {/* Info Cards */}
//         <div className="grid md:grid-cols-2 gap-6">
//           <div className="bg-white rounded-2xl p-6 shadow-sm border">
//             <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">Customer Info</h2>
//             <div className="space-y-2 text-sm">
//               <p><span className="text-gray-500">Name:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.name}</span></p>
//               <p><span className="text-gray-500">Phone:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.phone}</span></p>
//               <p><span className="text-gray-500">Address:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.address}</span></p>
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow-sm border">
//             <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">Payment</h2>
//             <div className="space-y-2 text-sm">
//               <p><span className="text-gray-500">Method:</span> <span className="text-black uppercase">{order.payment?.method}</span></p>
//               <p><span className="text-gray-500">Status:</span> <span className={`px-3 py-1 rounded-full text-sm font-semibold ml-2 ${order.payment?.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{order.payment?.status}</span></p>
//               <p className="pt-2">
//                 <span className="text-gray-500">Total:</span> 
//                 <span className="text-xl text-black font-bold font-dm"> ₦{order.payment?.total || order.total_amount}</span>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Ordered Items */}
//         <div className="bg-white rounded-2xl p-6 shadow-sm border">
//           <h2 className="text-[20px] font-dm text-[#A61E30] font-bold mb-5 uppercase">Ordered Items</h2>
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead className="bg-[#F6E9EA] text-gray-600">
//                 <tr>
//                   <th className="text-left px-4 py-3 rounded-l-lg">Item</th>
//                   <th className="text-center px-4 py-3">Qty</th>
//                   <th className="text-right px-4 py-3">Price</th>
//                   <th className="text-right px-4 py-3 rounded-r-lg">Subtotal</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-50">
//                 {order.items?.map((item, index) => (
//                   <tr key={index} className="text-black">
//                     <td className="px-4 py-4">{item.name}</td>
//                     <td className="text-center px-4 py-4">{item.quantity}</td>
//                     <td className="text-right px-4 py-4">₦{item.price}</td>
//                     <td className="text-right px-4 py-4 font-medium">₦{item.subtotal}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Update Status Buttons */}
//         <div className="bg-white rounded-2xl p-6 shadow-sm border">
//           <div className="flex justify-between items-center mb-5">
//             <h2 className="text-[20px] font-dm font-bold text-[#A61E30] uppercase">Update Status</h2>
//             {isFinalStatus && (
//               <span className={`text-[10px] font-bold px-2 py-1 rounded ${currentStatus.key === 'canceled' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
//                 ORDER {currentStatus.key.toUpperCase()}
//               </span>
//             )}
//           </div>
//           <div className="flex flex-wrap gap-3">
//             {statusConfig.map((status) => (
//               <button
//                 key={status.key}
//                 // Disabled if updating OR if the order reached a final state
//                 disabled={updating || isFinalStatus}
//                 onClick={() => handleStatusUpdate(status)}
//                 className={`px-4 py-2 text-sm transition font-dm rounded-[40px] rounded-tl-[5px] border ${
//                   currentStatus?.key === status.key 
//                     ? "bg-[#A61E30] text-white border-[#A61E30]" 
//                     : "bg-[#F3E9B530] text-gray-700 hover:bg-gray-200 border-transparent"
//                 } ${(updating || isFinalStatus) ? "opacity-50 cursor-not-allowed" : ""}`}
//               >
//                 {status.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { getOrderById, updateOrderStatus } from "../api/apiServices"; 
// import toast from "react-hot-toast";

// export default function OrderDetailInfo() {
//   const { id } = useParams();
//   const [order, setOrder] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);

//   const statusConfig = [
//     { label: "Order Received", key: "received", color: "bg-blue-100 text-blue-700 border-blue-200" },
//     { label: "Preparing Food", key: "prepared", color: "bg-purple-100 text-purple-700 border-purple-200" },
//     { label: "Ready to Pickup", key: "ready_for_pick", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
//     { label: "Out for Delivery", key: "out_for_delivery", color: "bg-orange-100 text-orange-700 border-orange-200" },
//     { label: "Delivered", key: "delivered", color: "bg-green-100 text-green-700 border-green-200" },
//     { label: "Canceled", key: "cancelled", color: "bg-red-100 text-red-700 border-red-200" },
//   ];

//   const [currentStatus, setCurrentStatus] = useState(null);

//   const isFinalStatus = currentStatus?.key === "delivered" || currentStatus?.key === "cancelled";

//   useEffect(() => {
//     const fetchOrderDetail = async () => {
//       try {
//         setLoading(true);
//         const response = await getOrderById(id);
//         if (response.success) {
//           setOrder(response.data);
//           const match = statusConfig.find(s => 
//             s.key.toLowerCase() === response.data.status.toLowerCase()
//           );
//           setCurrentStatus(match || statusConfig[0]);
//         }
//       } catch (err) {
//         toast.error("Failed to load order details");
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (id) fetchOrderDetail();
//   }, [id]);

//   const handleStatusUpdate = async (statusObj) => {
//     if (updating || currentStatus?.key === statusObj.key || isFinalStatus) return;

//     setUpdating(true);

//     toast.promise(
//       updateOrderStatus(id, statusObj.key),
//       {
//         loading: `Updating to ${statusObj.label}...`,
//         success: (response) => {
//           if (response.success) {
//             setCurrentStatus(statusObj);
//             setOrder(prev => ({ 
//               ...prev, 
//               status: statusObj.key,
//               updated_at: response.data?.updated_at || prev.updated_at 
//             }));
//             return `Status updated to ${statusObj.label}`;
//           }
//           throw new Error(response.message || "Update failed");
//         },
//         error: (err) => err.message || "Failed to update status",
//       },
//       {
//         style: { minWidth: '250px', fontFamily: 'DM Sans, sans-serif' },
//         success: {
//           duration: 3000,
//           iconTheme: { primary: '#A61E30', secondary: '#fff' },
//         },
//       }
//     ).finally(() => setUpdating(false));
//   };

//   if (loading) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm"><div className="animate-pulse text-gray-500 text-lg font-medium">Loading...</div></div>;
//   if (!order) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm"><p className="text-gray-500">Order not found.</p></div>;

//   return (
//     <div className="min-h-screen bg-[#f4efe6] font-dm-sans px-4 py-8 md:p-10">
//       <div className="mx-auto w-full max-w-5xl space-y-6">
//         <div className="flex justify-between items-center mt-10 flex-wrap gap-3">
//           <div className="flex flex-col items-start gap-2">
//             <h1 className="text-[22px] font-Roboto text-[#3A3A3A] font-bold">{order.order_number}</h1>
//             <span className="text-sm text-gray-500">{order.created_at}</span>
//           </div>
//           <div className={`${currentStatus?.color} px-4 py-1.5 rounded-full text-sm font-medium border uppercase text-[10px] tracking-wider font-bold`}>
//             {currentStatus?.label}
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-6">
//           <div className="bg-white rounded-2xl p-6 shadow-sm border">
//             <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">Customer Info</h2>
//             <div className="space-y-2 text-sm">
//               <p><span className="text-gray-500">Name:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.name}</span></p>
//               <p><span className="text-gray-500">Phone:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.phone}</span></p>
//               <p><span className="text-gray-500">Address:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.address}</span></p>
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow-sm border">
//             <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">Payment</h2>
//             <div className="space-y-2 text-sm">
//               <p><span className="text-gray-500">Method:</span> <span className="text-black uppercase">{order.payment?.method}</span></p>
//               <p><span className="text-gray-500">Status:</span> <span className={`px-3 py-1 rounded-full text-sm font-semibold ml-2 ${order.payment?.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{order.payment?.status}</span></p>
//               <p className="pt-2">
//                 <span className="text-gray-500">Total:</span> 
//                 <span className="text-xl text-black font-bold font-dm"> ₦{order.payment?.total || order.total_amount}</span>
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-2xl p-6 shadow-sm border">
//           <h2 className="text-[20px] font-dm text-[#A61E30] font-bold mb-5 uppercase">Ordered Items</h2>
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead className="bg-[#F6E9EA] text-gray-600">
//                 <tr>
//                   <th className="text-left px-4 py-3 rounded-l-lg">Item</th>
//                   <th className="text-center px-4 py-3">Qty</th>
//                   <th className="text-right px-4 py-3">Price</th>
//                   <th className="text-right px-4 py-3 rounded-r-lg">Subtotal</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-50">
//                 {order.items?.map((item, index) => (
//                   <tr key={index} className="text-black">
//                     <td className="px-4 py-4">{item.name}</td>
//                     <td className="text-center px-4 py-4">{item.quantity}</td>
//                     <td className="text-right px-4 py-4">₦{item.price}</td>
//                     <td className="text-right px-4 py-4 font-medium">₦{item.subtotal}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Update Status Buttons & Cancellation Reason */}
//         <div className="bg-white rounded-2xl p-6 shadow-sm border">
//           <div className="flex justify-between items-center mb-5">
//             <h2 className="text-[20px] font-dm font-bold text-[#A61E30] uppercase">Update Status</h2>
//             {isFinalStatus && (
//               <span className={`text-[10px] font-bold px-2 py-1 rounded ${currentStatus.key === 'cancelled' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
//                 ORDER {currentStatus.key === 'cancelled' ? 'CANCELED' : currentStatus.key.toUpperCase()}
//               </span>
//             )}
//           </div>

//           {/* Conditional Cancellation Reason Box */}
//           {currentStatus?.key === "cancelled" && order.cancellation_reason && (
//             <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
//               <h3 className="text-xs font-bold text-red-700 uppercase tracking-wider mb-1">Reason for Cancellation</h3>
//               <p className="text-sm text-red-600 font-dm italic">"{order.cancellation_reason}"</p>
//             </div>
//           )}

//           <div className="flex flex-wrap gap-3">
//             {statusConfig.map((status) => (
//               <button
//                 key={status.key}
//                 disabled={updating || isFinalStatus}
//                 onClick={() => handleStatusUpdate(status)}
//                 className={`px-4 py-2 text-sm transition font-dm rounded-[40px] rounded-tl-[5px] border ${
//                   currentStatus?.key === status.key 
//                     ? "bg-[#A61E30] text-white border-[#A61E30]" 
//                     : "bg-[#F3E9B530] text-gray-700 hover:bg-gray-200 border-transparent"
//                 } ${(updating || isFinalStatus) ? "opacity-50 cursor-not-allowed" : ""}`}
//               >
//                 {status.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOrderById, updateOrderStatus } from "../api/apiServices"; 
import toast from "react-hot-toast";

export default function OrderDetailInfo() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [cancelReason, setCancelReason] = useState("");
  const [showCancelInput, setShowCancelInput] = useState(false);

  const statusConfig = [
    { label: "Order Received", key: "received", color: "bg-blue-100 text-blue-700 border-blue-200" },
    { label: "Preparing Food", key: "prepared", color: "bg-purple-100 text-purple-700 border-purple-200" },
    { label: "Ready to Pickup", key: "ready_for_pick", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
    { label: "Out for Delivery", key: "out_for_delivery", color: "bg-orange-100 text-orange-700 border-orange-200" },
    { label: "Delivered", key: "delivered", color: "bg-green-100 text-green-700 border-green-200" },
    { label: "Canceled", key: "cancelled", color: "bg-red-100 text-red-700 border-red-200" },
  ];

  const [currentStatus, setCurrentStatus] = useState(null);
  const isFinalStatus = currentStatus?.key === "delivered" || currentStatus?.key === "cancelled";

  useEffect(() => {
    const fetchOrderDetail = async () => {
      try {
        setLoading(true);
        const response = await getOrderById(id);
        if (response.success) {
          setOrder(response.data);
          const match = statusConfig.find(s => 
            s.key.toLowerCase() === response.data.status.toLowerCase()
          );
          setCurrentStatus(match || statusConfig[0]);
        }
      } catch (err) {
        toast.error("Failed to load order details");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchOrderDetail();
  }, [id]);

  const handleStatusUpdate = async (statusObj, reason = null) => {
    if (updating || currentStatus?.key === statusObj.key || isFinalStatus) return;

    // Trigger input field if "Canceled" is clicked but no reason provided yet
    if (statusObj.key === "cancelled" && !reason) {
      setShowCancelInput(true);
      return;
    }

    setUpdating(true);
    const updateData = reason ? { status: statusObj.key, cancellation_reason: reason } : statusObj.key;

    toast.promise(
      updateOrderStatus(id, updateData),
      {
        loading: `Updating to ${statusObj.label}...`,
        success: (response) => {
          if (response.success) {
            setCurrentStatus(statusObj);
            setShowCancelInput(false);
            setOrder(prev => ({ 
              ...prev, 
              status: statusObj.key,
              cancellation_reason: reason || prev.cancellation_reason,
              updated_at: response.data?.updated_at || prev.updated_at 
            }));
            return `Status updated to ${statusObj.label}`;
          }
          throw new Error(response.message || "Update failed");
        },
        error: (err) => err.message || "Failed to update status",
      },
      {
        style: { minWidth: '250px', fontFamily: 'DM Sans, sans-serif' },
        success: {
          duration: 3000,
          iconTheme: { primary: '#A61E30', secondary: '#fff' },
        },
      }
    ).finally(() => setUpdating(false));
  };

  if (loading) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm"><div className="animate-pulse text-gray-500 text-lg font-medium">Loading...</div></div>;
  if (!order) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm"><p className="text-gray-500">Order not found.</p></div>;

  return (
    <div className="min-h-screen bg-[#f4efe6] font-dm-sans px-4 py-8 md:p-10">
      <div className="mx-auto w-full max-w-5xl space-y-6">
        {/* Header section remains same */}
        <div className="flex justify-between items-center mt-10 flex-wrap gap-3">
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-[22px] font-Roboto text-[#3A3A3A] font-bold">{order.order_number}</h1>
            <span className="text-sm text-gray-500">{order.created_at}</span>
          </div>
          <div className={`${currentStatus?.color} px-4 py-1.5 rounded-full text-sm font-medium border uppercase text-[10px] tracking-wider font-bold`}>
            {currentStatus?.label}
          </div>
        </div>

        {/* Info Cards and Table remains same */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">Customer Info</h2>
            <div className="space-y-2 text-sm">
              <p><span className="text-gray-500">Name:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.name}</span></p>
              <p><span className="text-gray-500">Phone:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.phone}</span></p>
              <p><span className="text-gray-500">Address:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.address}</span></p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">Payment</h2>
            <div className="space-y-2 text-sm">
              <p><span className="text-gray-500">Method:</span> <span className="text-black uppercase">{order.payment?.method}</span></p>
              <p><span className="text-gray-500">Status:</span> <span className={`px-3 py-1 rounded-full text-sm font-semibold ml-2 ${order.payment?.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{order.payment?.status}</span></p>
              <p className="pt-2">
                <span className="text-gray-500">Total:</span> 
                <span className="text-xl text-black font-bold font-dm"> ₦{order.payment?.total || order.total_amount}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Ordered Items Table */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h2 className="text-[20px] font-dm text-[#A61E30] font-bold mb-5 uppercase">Ordered Items</h2>
          <div className="overflow-x-auto text-black">
            <table className="w-full text-sm">
              <thead className="bg-[#F6E9EA] text-gray-600">
                <tr>
                  <th className="text-left px-4 py-3 rounded-l-lg font-dm">Item</th>
                  <th className="text-center px-4 py-3 font-dm">Qty</th>
                  <th className="text-right px-4 py-3 font-dm">Price</th>
                  <th className="text-right px-4 py-3 rounded-r-lg font-dm">Subtotal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {order.items?.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 py-4">{item.name}</td>
                    <td className="text-center px-4 py-4">{item.quantity}</td>
                    <td className="text-right px-4 py-4">₦{item.price}</td>
                    <td className="text-right px-4 py-4 font-medium">₦{item.subtotal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Update Status Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-[20px] font-dm font-bold text-[#A61E30] uppercase">Update Status</h2>
            {isFinalStatus && (
              <span className={`text-[10px] font-bold px-2 py-1 rounded ${currentStatus.key === 'cancelled' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                ORDER {currentStatus.key === 'cancelled' ? 'CANCELED' : currentStatus.key.toUpperCase()}
              </span>
            )}
          </div>

          {/* Show the Cancellation Reason if order is already cancelled */}
          {currentStatus?.key === "cancelled" && order.cancellation_reason && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
              <h3 className="text-xs font-bold text-red-700 uppercase tracking-wider mb-1">Reason for Cancellation</h3>
              <p className="text-sm text-red-600 font-dm italic">"{order.cancellation_reason}"</p>
            </div>
          )}

          {/* INPUT FIELD FOR CANCELLING (Shows when admin clicks 'Canceled' button) */}
          {showCancelInput && !isFinalStatus && (
            <div className="mb-6 p-5 bg-gray-50 border rounded-xl animate-in fade-in slide-in-from-top-2">
              <label className="block text-sm font-bold text-gray-700 mb-2 font-dm">Please provide a reason for cancellation:</label>
              <textarea 
                className="w-full p-3 border rounded-lg focus:ring-1 focus:ring-[#A61E30] outline-none text-sm font-dm"
                placeholder="e.g. Out of stock, Delivery area not covered..."
                value={cancelReason}
                onChange={(e) => setCancelReason(e.target.value)}
                rows="3"
              />
              <div className="flex gap-3 mt-4">
                <button 
                  onClick={() => handleStatusUpdate(statusConfig.find(s => s.key === "cancelled"), cancelReason)}
                  disabled={!cancelReason.trim() || updating}
                  className="bg-[#A61E30] text-white px-6 py-2 rounded-lg text-sm font-bold disabled:opacity-50"
                >
                  Confirm Cancellation
                </button>
                <button 
                  onClick={() => {setShowCancelInput(false); setCancelReason("");}}
                  className="bg-white border px-6 py-2 rounded-lg text-sm font-medium text-gray-600"
                >
                  Go Back
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            {statusConfig.map((status) => (
              <button
                key={status.key}
                disabled={updating || isFinalStatus || (showCancelInput && status.key !== 'cancelled')}
                onClick={() => handleStatusUpdate(status)}
                className={`px-4 py-2 text-sm transition font-dm rounded-[40px] rounded-tl-[5px] border ${
                  currentStatus?.key === status.key 
                    ? "bg-[#A61E30] text-white border-[#A61E30]" 
                    : "bg-[#F3E9B530] text-gray-700 hover:bg-gray-200 border-transparent"
                } ${(updating || isFinalStatus) ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {status.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}