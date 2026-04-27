

// // // import { useParams } from "react-router-dom";
// // // import { useState, useEffect } from "react";
// // // import { getOrderById, updateOrderStatus } from "../api/apiServices"; 
// // // import toast from "react-hot-toast";

// // // export default function OrderDetailInfo() {
// // //   const { id } = useParams();
// // //   const [order, setOrder] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [updating, setUpdating] = useState(false);
// // //   const [cancelReason, setCancelReason] = useState("");
// // //   const [showCancelInput, setShowCancelInput] = useState(false);

// // //   const statusConfig = [
// // //     { label: "Order Received", key: "received", color: "bg-blue-100 text-blue-700 border-blue-200" },
// // //     { label: "Preparing Food", key: "prepared", color: "bg-purple-100 text-purple-700 border-purple-200" },
// // //     { label: "Ready to Pickup", key: "ready_for_pick", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
// // //     { label: "Out for Delivery", key: "out_for_delivery", color: "bg-orange-100 text-orange-700 border-orange-200" },
// // //     { label: "Delivered", key: "delivered", color: "bg-green-100 text-green-700 border-green-200" },
// // //     { label: "Canceled", key: "cancelled", color: "bg-red-100 text-red-700 border-red-200" },
// // //   ];

// // //   const [currentStatus, setCurrentStatus] = useState(null);
// // //   const isFinalStatus = currentStatus?.key === "delivered" || currentStatus?.key === "cancelled";

// // //   useEffect(() => {
// // //     const fetchOrderDetail = async () => {
// // //       try {
// // //         setLoading(true);
// // //         const response = await getOrderById(id);
// // //         if (response.success) {
// // //           setOrder(response.data);
// // //           const match = statusConfig.find(s => 
// // //             s.key.toLowerCase() === response.data.status.toLowerCase()
// // //           );
// // //           setCurrentStatus(match || statusConfig[0]);
// // //         }
// // //       } catch (err) {
// // //         toast.error("Failed to load order details");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };
// // //     if (id) fetchOrderDetail();
// // //   }, [id]);

// // //   const handleStatusUpdate = async (statusObj, reason = null) => {
// // //     if (updating || currentStatus?.key === statusObj.key || isFinalStatus) return;

// // //     // 1. Show input if "Canceled" clicked but no reason provided
// // //     if (statusObj.key === "cancelled" && reason === null) {
// // //       setShowCancelInput(true);
// // //       return;
// // //     }

// // //     setUpdating(true);

// // //     // 2. Fix: Call the API with the status string and optional reason separately
// // //     // We send statusObj.key (string) to satisfy the backend validation
// // //     toast.promise(
// // //       updateOrderStatus(id, statusObj.key, reason), 
// // //       {
// // //         loading: `Updating to ${statusObj.label}...`,
// // //         success: (response) => {
// // //           if (response.success) {
// // //             setCurrentStatus(statusObj);
// // //             setShowCancelInput(false);
// // //             setOrder(prev => ({ 
// // //               ...prev, 
// // //               status: statusObj.key,
// // //               cancellation_reason: reason || prev.cancellation_reason,
// // //               updated_at: response.data?.updated_at || prev.updated_at 
// // //             }));
// // //             return `Status updated to ${statusObj.label}`;
// // //           }
// // //           throw new Error(response.message || "Update failed");
// // //         },
// // //         error: (err) => err.message || "Failed to update status",
// // //       },
// // //       {
// // //         style: { minWidth: '250px', fontFamily: 'DM Sans, sans-serif' },
// // //         success: {
// // //           duration: 3000,
// // //           iconTheme: { primary: '#A61E30', secondary: '#fff' },
// // //         },
// // //       }
// // //     ).finally(() => setUpdating(false));
// // //   };

// // //   if (loading) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm"><div className="animate-pulse text-gray-500 text-lg font-medium">Loading...</div></div>;
// // //   if (!order) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm"><p className="text-gray-500">Order not found.</p></div>;

// // //   return (
// // //     <div className="min-h-screen bg-[#f4efe6] font-dm-sans px-4 py-8 md:p-10">
// // //       <div className="mx-auto w-full max-w-6xl space-y-6">
        
// // //         {/* Header */}
// // //         <div className="flex justify-between items-center mt-10 flex-wrap gap-3">
// // //           <div className="flex flex-col items-start gap-2">
// // //             <h1 className="text-[22px] font-Roboto text-[#3A3A3A] font-bold">{order.order_number}</h1>
// // //             <span className="text-sm text-gray-500">{order.created_at}</span>
// // //           </div>
// // //           <div className={`${currentStatus?.color} px-4 py-1.5 rounded-full text-sm font-medium border uppercase text-[10px] tracking-wider font-bold`}>
// // //             {currentStatus?.label}
// // //           </div>
// // //         </div>

// // //         {/* Info Cards */}
// // //         <div className="grid md:grid-cols-2 gap-6">
// // //           <div className="bg-white rounded-2xl p-6 shadow-sm border">
// // //             <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">Customer Info</h2>
// // //             <div className="space-y-2 text-sm">
// // //               <p><span className="text-gray-500 font-dm">Name:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.name}</span></p>
// // //               <p><span className="text-gray-500 font-dm">Phone:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.phone}</span></p>
// // //               <p><span className="text-gray-500 font-dm">Address:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.address}</span></p>
// // //             </div>
// // //           </div>

// // //           <div className="bg-white rounded-2xl p-6 shadow-sm border">
// // //             <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">Payment</h2>
// // //             <div className="space-y-2 text-sm">
// // //               <p><span className="text-gray-500 font-dm">Method:</span> <span className="text-black uppercase font-dm">{order.payment?.method}</span></p>
// // //               <p><span className="text-gray-500 font-dm">Status:</span> <span className={`px-3 py-1 rounded-full text-sm font-semibold ml-2 ${order.payment?.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{order.payment?.status}</span></p>
// // //               <p className="pt-2">
// // //                 <span className="text-gray-500 font-dm">Total:</span> 
// // //                 <span className="text-xl text-black font-bold font-dm"> ₦{order.payment?.total || order.total_amount}</span>
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Ordered Items Table */}
// // //         <div className="bg-white rounded-2xl p-6 shadow-sm border">
// // //           <h2 className="text-[20px] font-dm text-[#A61E30] font-bold mb-5 uppercase">Ordered Items</h2>
// // //           <div className="overflow-x-auto text-black">
// // //             <table className="w-full text-sm">
// // //               <thead className="bg-[#F6E9EA] text-gray-600">
// // //                 <tr>
// // //                   <th className="text-left px-4 py-3 rounded-l-lg font-dm">Item</th>
// // //                   <th className="text-center px-4 py-3 font-dm">Qty</th>
// // //                   <th className="text-right px-4 py-3 font-dm">Price</th>
// // //                   <th className="text-right px-4 py-3 rounded-r-lg font-dm">Subtotal</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody className="divide-y divide-gray-50">
// // //                 {order.items?.map((item, index) => (
// // //                   <tr key={index}>
// // //                     <td className="px-4 py-4 font-dm">{item.name}</td>
// // //                     <td className="text-center px-4 py-4 font-dm">{item.quantity}</td>
// // //                     <td className="text-right px-4 py-4 font-dm">₦{item.price}</td>
// // //                     <td className="text-right px-4 py-4 font-medium font-dm">₦{item.subtotal}</td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         </div>

// // //         {/* Update Status Section */}
// // //         <div className="bg-white rounded-2xl p-6 shadow-sm border">
// // //           <div className="flex justify-between items-center mb-5">
// // //             <h2 className="text-[20px] font-dm font-bold text-[#A61E30] uppercase">Update Status</h2>
// // //             {isFinalStatus && (
// // //               <span className={`text-[10px] font-bold px-2 py-1 rounded ${currentStatus.key === 'cancelled' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
// // //                 ORDER {currentStatus.key === 'cancelled' ? 'CANCELED' : currentStatus.key.toUpperCase()}
// // //               </span>
// // //             )}
// // //           </div>

// // //           {/* Cancellation Reason Alert (Visible once cancelled) */}
// // //           {currentStatus?.key === "cancelled" && order.cancellation_reason && (
// // //             <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
// // //               <h3 className="text-xs font-bold text-red-700 uppercase tracking-wider mb-1">Reason for Cancellation</h3>
// // //               <p className="text-sm text-red-600 font-dm italic">"{order.cancellation_reason}"</p>
// // //             </div>
// // //           )}

// // //           {/* Admin Input Field (Shows when clicking 'Canceled' button) */}
// // //           {showCancelInput && !isFinalStatus && (
// // //             <div className="mb-6 p-5 bg-gray-50 border rounded-xl animate-in fade-in slide-in-from-top-2">
// // //               <label className="block text-sm font-bold text-gray-700 mb-2 font-dm">Please provide a reason for cancellation:</label>
// // //               <textarea 
// // //                 className="w-full bg-transparent p-3 border rounded-lg focus:ring-1 focus:ring-[#A61E30] outline-none text-gray-700 text-sm font-dm"
// // //                 placeholder="e.g. Out of stock, Out of delivery range..."
// // //                 value={cancelReason}
// // //                 onChange={(e) => setCancelReason(e.target.value)}
// // //                 rows="3"
// // //               />
// // //               <div className="flex gap-3 mt-4">
// // //                 <button 
// // //                   onClick={() => handleStatusUpdate(statusConfig.find(s => s.key === "cancelled"), cancelReason)}
// // //                   disabled={!cancelReason.trim() || updating}
// // //                   className="bg-[#A61E30] text-white px-6 py-2 rounded-lg text-sm font-bold disabled:opacity-50 font-dm"
// // //                 >
// // //                   Confirm Cancellation
// // //                 </button>
// // //                 <button 
// // //                   onClick={() => {setShowCancelInput(false); setCancelReason("");}}
// // //                   className="bg-white border px-6 py-2 rounded-lg text-sm font-medium text-gray-600 font-dm"
// // //                 >
// // //                   Cancel
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* Status Selection Buttons */}
// // //           <div className="flex flex-wrap gap-3">
// // //             {statusConfig.map((status) => (
// // //               <button
// // //                 key={status.key}
// // //                 disabled={updating || isFinalStatus || (showCancelInput && status.key !== 'cancelled')}
// // //                 onClick={() => handleStatusUpdate(status)}
// // //                 className={`px-4 py-2 text-sm transition font-dm rounded-[40px] rounded-tl-[5px] border ${
// // //                   currentStatus?.key === status.key 
// // //                     ? "bg-[#A61E30] text-white border-[#A61E30]" 
// // //                     : "bg-[#F3E9B530] text-gray-700 hover:bg-gray-200 border-transparent"
// // //                 } ${(updating || isFinalStatus) ? "opacity-50 cursor-not-allowed" : ""}`}
// // //               >
// // //                 {status.label}
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }




// // // import { useParams } from "react-router-dom";
// // // import { useState, useEffect } from "react";
// // // // Updated to use the customer detail service
// // // import { getCustomerById, updateOrderStatus } from "../api/apiServices"; 
// // // import toast from "react-hot-toast";

// // // export default function OrderDetailInfo() {
// // //   const { id } = useParams();
// // //   const [order, setOrder] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [updating, setUpdating] = useState(false);
// // //   const [cancelReason, setCancelReason] = useState("");
// // //   const [showCancelInput, setShowCancelInput] = useState(false);

// // //   const statusConfig = [
// // //     { label: "Order Received", key: "received", color: "bg-blue-100 text-blue-700 border-blue-200" },
// // //     { label: "Preparing Food", key: "prepared", color: "bg-purple-100 text-purple-700 border-purple-200" },
// // //     { label: "Ready to Pickup", key: "ready_for_pick", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
// // //     { label: "Out for Delivery", key: "out_for_delivery", color: "bg-orange-100 text-orange-700 border-orange-200" },
// // //     { label: "Delivered", key: "delivered", color: "bg-green-100 text-green-700 border-green-200" },
// // //     { label: "Canceled", key: "cancelled", color: "bg-red-100 text-red-700 border-red-200" },
// // //   ];

// // //   const [currentStatus, setCurrentStatus] = useState(null);
// // //   const isFinalStatus = currentStatus?.key === "delivered" || currentStatus?.key === "cancelled";

// // //   useEffect(() => {
// // //     const fetchOrderDetail = async () => {
// // //       try {
// // //         setLoading(true);
// // //         // Using the new customer detail endpoint
// // //         const response = await getCustomerById(id); 
// // //         if (response.success) {
// // //           // Since this endpoint returns an array of orders, we find the one matching the ID 
// // //           // or handle the data structure based on your specific detail needs.
// // //           // For this implementation, I'm assuming we're showing the first/relevant order from that customer.
// // //           const orderData = response.data.orders[0]; 
          
// // //           if (orderData) {
// // //             // Inject customer profile info into the order object for the UI to consume
// // //             const enrichedOrder = {
// // //                 ...orderData,
// // //                 customer: {
// // //                     name: response.data.profile.name,
// // //                     phone: response.data.profile.phone,
// // //                     address: orderData.order_address // Using address from the specific order
// // //                 }
// // //             };
            
// // //             setOrder(enrichedOrder);
// // //             const match = statusConfig.find(s => 
// // //               s.key.toLowerCase() === orderData.status.toLowerCase()
// // //             );
// // //             setCurrentStatus(match || statusConfig[0]);
// // //           }
// // //         }
// // //       } catch (err) {
// // //         toast.error("Failed to load order details");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };
// // //     if (id) fetchOrderDetail();
// // //   }, [id]);

// // //   const handleStatusUpdate = async (statusObj, reason = null) => {
// // //     if (updating || currentStatus?.key === statusObj.key || isFinalStatus) return;

// // //     if (statusObj.key === "cancelled" && reason === null) {
// // //       setShowCancelInput(true);
// // //       return;
// // //     }

// // //     setUpdating(true);

// // //     toast.promise(
// // //       updateOrderStatus(id, statusObj.key, reason), 
// // //       {
// // //         loading: `Updating to ${statusObj.label}...`,
// // //         success: (response) => {
// // //           if (response.success) {
// // //             setCurrentStatus(statusObj);
// // //             setShowCancelInput(false);
// // //             setOrder(prev => ({ 
// // //               ...prev, 
// // //               status: statusObj.key,
// // //               cancellation_reason: reason || prev.cancellation_reason,
// // //               updated_at: response.data?.updated_at || prev.updated_at 
// // //             }));
// // //             return `Status updated to ${statusObj.label}`;
// // //           }
// // //           throw new Error(response.message || "Update failed");
// // //         },
// // //         error: (err) => err.message || "Failed to update status",
// // //       },
// // //       {
// // //         style: { minWidth: '250px', fontFamily: 'DM Sans, sans-serif' },
// // //         success: {
// // //           duration: 3000,
// // //           iconTheme: { primary: '#A61E30', secondary: '#fff' },
// // //         },
// // //       }
// // //     ).finally(() => setUpdating(false));
// // //   };

// // //   if (loading) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm"><div className="animate-pulse text-gray-500 text-lg font-medium">Loading...</div></div>;
// // //   if (!order) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm"><p className="text-gray-500">Order not found.</p></div>;

// // //   return (
// // //     <div className="min-h-screen bg-[#f4efe6] font-dm-sans px-4 py-8 md:p-10">
// // //       <div className="mx-auto w-full max-w-6xl space-y-6">
        
// // //         {/* Header */}
// // //         <div className="flex justify-between items-center mt-10 flex-wrap gap-3">
// // //           <div className="flex flex-col items-start gap-2">
// // //             <h1 className="text-[22px] font-Roboto text-[#3A3A3A] font-bold">{order.order_id}</h1>
// // //             <span className="text-sm text-gray-500">{order.date}</span>
// // //           </div>
// // //           <div className={`${currentStatus?.color} px-4 py-1.5 rounded-full text-sm font-medium border uppercase text-[10px] tracking-wider font-bold`}>
// // //             {currentStatus?.label}
// // //           </div>
// // //         </div>

// // //         {/* Info Cards */}
// // //         <div className="grid md:grid-cols-2 gap-6">
// // //           <div className="bg-white rounded-2xl p-6 shadow-sm border">
// // //             <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">Customer Info</h2>
// // //             <div className="space-y-2 text-sm">
// // //               <p><span className="text-gray-500 font-dm">Name:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.name}</span></p>
// // //               <p><span className="text-gray-500 font-dm">Phone:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.phone}</span></p>
// // //               <p><span className="text-gray-500 font-dm">Address:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.address}</span></p>
// // //             </div>
// // //           </div>

// // //           <div className="bg-white rounded-2xl p-6 shadow-sm border">
// // //             <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">Payment</h2>
// // //             <div className="space-y-2 text-sm">
// // //               <p><span className="text-gray-500 font-dm">Method:</span> <span className="text-black uppercase font-dm">{order.payment?.method}</span></p>
// // //               <p><span className="text-gray-500 font-dm">Status:</span> <span className={`px-3 py-1 rounded-full text-sm font-semibold ml-2 ${order.payment?.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{order.payment?.status}</span></p>
// // //               <p className="pt-2">
// // //                 <span className="text-gray-500 font-dm">Total:</span> 
// // //                 <span className="text-xl text-black font-bold font-dm"> ₦{order.total}</span>
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Ordered Items Table */}
// // //         <div className="bg-white rounded-2xl p-6 shadow-sm border">
// // //           <h2 className="text-[20px] font-dm text-[#A61E30] font-bold mb-5 uppercase">Ordered Items</h2>
// // //           <div className="overflow-x-auto text-black">
// // //             <table className="w-full text-sm">
// // //               <thead className="bg-[#F6E9EA] text-gray-600">
// // //                 <tr>
// // //                   <th className="text-left px-4 py-3 rounded-l-lg font-dm">Item</th>
// // //                   <th className="text-center px-4 py-3 font-dm">Qty</th>
// // //                   <th className="text-right px-4 py-3 font-dm">Price</th>
// // //                   <th className="text-right px-4 py-3 rounded-r-lg font-dm">Subtotal</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody className="divide-y divide-gray-50">
// // //                 {order.items?.map((item, index) => (
// // //                   <tr key={index}>
// // //                     <td className="px-4 py-4 font-dm">{item.name}</td>
// // //                     <td className="text-center px-4 py-4 font-dm">{item.quantity}</td>
// // //                     <td className="text-right px-4 py-4 font-dm">₦{item.price}</td>
// // //                     {/* Calculated subtotal if not provided by api directly per item */}
// // //                     <td className="text-right px-4 py-4 font-medium font-dm">₦{item.subtotal || (parseFloat(item.price.replace(/,/g, '')) * parseInt(item.quantity)).toLocaleString()}</td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         </div>

// // //         {/* Update Status Section */}
// // //         <div className="bg-white rounded-2xl p-6 shadow-sm border">
// // //           <div className="flex justify-between items-center mb-5">
// // //             <h2 className="text-[20px] font-dm font-bold text-[#A61E30] uppercase">Update Status</h2>
// // //             {isFinalStatus && (
// // //               <span className={`text-[10px] font-bold px-2 py-1 rounded ${currentStatus.key === 'cancelled' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
// // //                 ORDER {currentStatus.key === 'cancelled' ? 'CANCELED' : currentStatus.key.toUpperCase()}
// // //               </span>
// // //             )}
// // //           </div>

// // //           {currentStatus?.key === "cancelled" && order.cancellation_reason && (
// // //             <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
// // //               <h3 className="text-xs font-bold text-red-700 uppercase tracking-wider mb-1">Reason for Cancellation</h3>
// // //               <p className="text-sm text-red-600 font-dm italic">"{order.cancellation_reason}"</p>
// // //             </div>
// // //           )}

// // //           {showCancelInput && !isFinalStatus && (
// // //             <div className="mb-6 p-5 bg-gray-50 border rounded-xl animate-in fade-in slide-in-from-top-2">
// // //               <label className="block text-sm font-bold text-gray-700 mb-2 font-dm">Please provide a reason for cancellation:</label>
// // //               <textarea 
// // //                 className="w-full bg-transparent p-3 border rounded-lg focus:ring-1 focus:ring-[#A61E30] outline-none text-gray-700 text-sm font-dm"
// // //                 placeholder="e.g. Out of stock, Out of delivery range..."
// // //                 value={cancelReason}
// // //                 onChange={(e) => setCancelReason(e.target.value)}
// // //                 rows="3"
// // //               />
// // //               <div className="flex gap-3 mt-4">
// // //                 <button 
// // //                   onClick={() => handleStatusUpdate(statusConfig.find(s => s.key === "cancelled"), cancelReason)}
// // //                   disabled={!cancelReason.trim() || updating}
// // //                   className="bg-[#A61E30] text-white px-6 py-2 rounded-lg text-sm font-bold disabled:opacity-50 font-dm"
// // //                 >
// // //                   Confirm Cancellation
// // //                 </button>
// // //                 <button 
// // //                   onClick={() => {setShowCancelInput(false); setCancelReason("");}}
// // //                   className="bg-white border px-6 py-2 rounded-lg text-sm font-medium text-gray-600 font-dm"
// // //                 >
// // //                   Cancel
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           )}

// // //           <div className="flex flex-wrap gap-3">
// // //             {statusConfig.map((status) => (
// // //               <button
// // //                 key={status.key}
// // //                 disabled={updating || isFinalStatus || (showCancelInput && status.key !== 'cancelled')}
// // //                 onClick={() => handleStatusUpdate(status)}
// // //                 className={`px-4 py-2 text-sm transition font-dm rounded-[40px] rounded-tl-[5px] border ${
// // //                   currentStatus?.key === status.key 
// // //                     ? "bg-[#A61E30] text-white border-[#A61E30]" 
// // //                     : "bg-[#F3E9B530] text-gray-700 hover:bg-gray-200 border-transparent"
// // //                 } ${(updating || isFinalStatus) ? "opacity-50 cursor-not-allowed" : ""}`}
// // //               >
// // //                 {status.label}
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }






// // // import { useParams } from "react-router-dom";
// // // import { useState, useEffect } from "react";
// // // import { getCustomerById, updateOrderStatus } from "../api/apiServices"; 
// // // import toast from "react-hot-toast";

// // // export default function OrderDetailInfo() {
// // //   const { id } = useParams(); // This is the Customer ID from the URL
// // //   const [order, setOrder] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [updating, setUpdating] = useState(false);
// // //   const [cancelReason, setCancelReason] = useState("");
// // //   const [showCancelInput, setShowCancelInput] = useState(false);

// // //   const statusConfig = [
// // //     { label: "Order Received", key: "received", color: "bg-blue-100 text-blue-700 border-blue-200" },
// // //     { label: "Preparing Food", key: "prepared", color: "bg-purple-100 text-purple-700 border-purple-200" },
// // //     { label: "Ready to Pickup", key: "ready_for_pick", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
// // //     { label: "Out for Delivery", key: "out_for_delivery", color: "bg-orange-100 text-orange-700 border-orange-200" },
// // //     { label: "Delivered", key: "delivered", color: "bg-green-100 text-green-700 border-green-200" },
// // //     { label: "Canceled", key: "cancelled", color: "bg-red-100 text-red-700 border-red-200" },
// // //   ];

// // //   const [currentStatus, setCurrentStatus] = useState(null);
// // //   const isFinalStatus = currentStatus?.key === "delivered" || currentStatus?.key === "cancelled";

// // //   useEffect(() => {
// // //     const fetchOrderDetail = async () => {
// // //       try {
// // //         setLoading(true);
// // //         // 1. Fetching from the Customer Detail endpoint
// // //         const response = await getCustomerById(id); 
        
// // //         if (response.success && response.data) {
// // //           const profile = response.data.profile;
// // //           // 2. We pick the most recent order or handle specific order logic
// // //           // For a detail page reached via ID, we assume the latest order or first in list
// // //           const orderData = response.data.orders[0]; 

// // //           if (orderData) {
// // //             const enrichedOrder = {
// // //               ...orderData,
// // //               customer: {
// // //                 name: profile.name,
// // //                 phone: profile.phone,
// // //                 address: orderData.order_address
// // //               }
// // //             };
            
// // //             setOrder(enrichedOrder);
// // //             const match = statusConfig.find(s => 
// // //               s.key.toLowerCase() === orderData.status.toLowerCase()
// // //             );
// // //             setCurrentStatus(match || statusConfig[0]);
// // //           }
// // //         }
// // //       } catch (err) {
// // //         toast.error("Failed to load customer order details");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };
// // //     if (id) fetchOrderDetail();
// // //   }, [id]);

// // //   // MAINTAINED: updateOrderStatus logic remains the same
// // //   const handleStatusUpdate = async (statusObj, reason = null) => {
// // //     if (updating || currentStatus?.key === statusObj.key || isFinalStatus) return;

// // //     if (statusObj.key === "cancelled" && reason === null) {
// // //       setShowCancelInput(true);
// // //       return;
// // //     }

// // //     setUpdating(true);

// // //     toast.promise(
// // //       updateOrderStatus(order.id, statusObj.key, reason), // Uses the internal Order ID (e.g. 23)
// // //       {
// // //         loading: `Updating to ${statusObj.label}...`,
// // //         success: (response) => {
// // //           if (response.success) {
// // //             setCurrentStatus(statusObj);
// // //             setShowCancelInput(false);
// // //             setOrder(prev => ({ 
// // //               ...prev, 
// // //               status: statusObj.key,
// // //               cancellation_reason: reason || prev.cancellation_reason
// // //             }));
// // //             return `Status updated to ${statusObj.label}`;
// // //           }
// // //           throw new Error(response.message || "Update failed");
// // //         },
// // //         error: (err) => err.message || "Failed to update status",
// // //       },
// // //       {
// // //         style: { minWidth: '250px', fontFamily: 'DM Sans, sans-serif' },
// // //         success: { duration: 3000, iconTheme: { primary: '#A61E30', secondary: '#fff' } },
// // //       }
// // //     ).finally(() => setUpdating(false));
// // //   };

// // //   if (loading) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm"><div className="animate-pulse text-gray-500 text-lg font-medium">Loading Details...</div></div>;
// // //   if (!order) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm"><p className="text-gray-500">No profile data found.</p></div>;

// // //   return (
// // //     <div className="min-h-screen bg-[#f4efe6] font-dm-sans px-4 py-8 md:p-10">
// // //       <div className="mx-auto w-full max-w-6xl space-y-6">
        
// // //         {/* Header */}
// // //         <div className="flex justify-between items-center mt-10 flex-wrap gap-3">
// // //           <div className="flex flex-col items-start gap-2">
// // //             <h1 className="text-[22px] font-Roboto text-[#3A3A3A] font-bold">{order.order_id}</h1>
// // //             <span className="text-sm text-gray-500">{order.date}</span>
// // //           </div>
// // //           <div className={`${currentStatus?.color} px-4 py-1.5 rounded-full text-sm font-medium border uppercase text-[10px] tracking-wider font-bold`}>
// // //             {currentStatus?.label}
// // //           </div>
// // //         </div>

// // //         {/* Info Cards */}
// // //         <div className="grid md:grid-cols-2 gap-6">
// // //           <div className="bg-white rounded-2xl p-6 shadow-sm border">
// // //             <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">Customer Info</h2>
// // //             <div className="space-y-2 text-sm">
// // //               <p><span className="text-gray-500 font-dm">Name:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.name}</span></p>
// // //               <p><span className="text-gray-500 font-dm">Phone:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.phone}</span></p>
// // //               <p><span className="text-gray-500 font-dm">Address:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.address}</span></p>
// // //             </div>
// // //           </div>

// // //           <div className="bg-white rounded-2xl p-6 shadow-sm border">
// // //             <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">Payment</h2>
// // //             <div className="space-y-2 text-sm">
// // //               <p><span className="text-gray-500 font-dm">Method:</span> <span className="text-black uppercase font-dm">{order.payment?.method}</span></p>
// // //               <p><span className="text-gray-500 font-dm">Status:</span> <span className={`px-3 py-1 rounded-full text-sm font-semibold ml-2 ${order.payment?.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{order.payment?.status}</span></p>
// // //               <p className="pt-2">
// // //                 <span className="text-gray-500 font-dm">Total:</span> 
// // //                 <span className="text-xl text-black font-bold font-dm"> ₦{order.total}</span>
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Items Table */}
// // //         <div className="bg-white rounded-2xl p-6 shadow-sm border">
// // //           <h2 className="text-[20px] font-dm text-[#A61E30] font-bold mb-5 uppercase">Ordered Items</h2>
// // //           <div className="overflow-x-auto text-black">
// // //             <table className="w-full text-sm">
// // //               <thead className="bg-[#F6E9EA] text-gray-600">
// // //                 <tr>
// // //                   <th className="text-left px-4 py-3 rounded-l-lg font-dm">Item</th>
// // //                   <th className="text-center px-4 py-3 font-dm">Qty</th>
// // //                   <th className="text-right px-4 py-3 font-dm">Price</th>
// // //                   <th className="text-right px-4 py-3 rounded-r-lg font-dm">Subtotal</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody className="divide-y divide-gray-50">
// // //                 {order.items?.map((item, index) => (
// // //                   <tr key={index}>
// // //                     <td className="px-4 py-4 font-dm">{item.name}</td>
// // //                     <td className="text-center px-4 py-4 font-dm">{item.quantity}</td>
// // //                     <td className="text-right px-4 py-4 font-dm">₦{item.price}</td>
// // //                     <td className="text-right px-4 py-4 font-medium font-dm">₦{(parseFloat(item.price.replace(/,/g, '')) * parseInt(item.quantity)).toLocaleString()}</td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         </div>

// // //         {/* Update Status */}
// // //         <div className="bg-white rounded-2xl p-6 shadow-sm border">
// // //           <h2 className="text-[20px] font-dm font-bold text-[#A61E30] uppercase mb-5">Update Status</h2>
          
// // //           {showCancelInput && (
// // //             <div className="mb-6 p-5 bg-gray-50 border rounded-xl">
// // //               <label className="block text-sm font-bold text-gray-700 mb-2">Cancellation Reason:</label>
// // //               <textarea 
// // //                 className="w-full p-3 border rounded-lg outline-none text-sm"
// // //                 value={cancelReason}
// // //                 onChange={(e) => setCancelReason(e.target.value)}
// // //                 rows="3"
// // //               />
// // //               <div className="flex gap-3 mt-4">
// // //                 <button 
// // //                   onClick={() => handleStatusUpdate(statusConfig.find(s => s.key === "cancelled"), cancelReason)}
// // //                   className="bg-[#A61E30] text-white px-6 py-2 rounded-lg text-sm font-bold"
// // //                 >
// // //                   Confirm
// // //                 </button>
// // //                 <button onClick={() => setShowCancelInput(false)} className="text-gray-500 text-sm">Cancel</button>
// // //               </div>
// // //             </div>
// // //           )}

// // //           <div className="flex flex-wrap gap-3">
// // //             {statusConfig.map((status) => (
// // //               <button
// // //                 key={status.key}
// // //                 disabled={updating || isFinalStatus}
// // //                 onClick={() => handleStatusUpdate(status)}
// // //                 className={`px-4 py-2 text-sm font-dm rounded-[40px] rounded-tl-[5px] border ${
// // //                   currentStatus?.key === status.key 
// // //                     ? "bg-[#A61E30] text-white border-[#A61E30]" 
// // //                     : "bg-[#F3E9B530] text-gray-700 border-transparent"
// // //                 } ${isFinalStatus ? "opacity-50" : ""}`}
// // //               >
// // //                 {status.label}
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }






// // import React, { useState, useEffect } from "react";
// // import { useParams } from "react-router-dom";
// // import { getCustomerById, updateOrderStatus } from "../api/apiServices"; 
// // import toast from "react-hot-toast";

// // export default function OrderDetailInfo() {
// //   const { id } = useParams(); 
// //   const [order, setOrder] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [updating, setUpdating] = useState(false);
// //   const [showCancelInput, setShowCancelInput] = useState(false);
// //   const [cancelReason, setCancelReason] = useState("");

// //   const statusConfig = [
// //     { label: "Order Received", key: "received", color: "bg-blue-100 text-blue-700 border-blue-200" },
// //     { label: "Preparing Food", key: "prepared", color: "bg-purple-100 text-purple-700 border-purple-200" },
// //     { label: "Ready to Pickup", key: "ready_for_pick", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
// //     { label: "Out for Delivery", key: "out_for_delivery", color: "bg-orange-100 text-orange-700 border-orange-200" },
// //     { label: "Delivered", key: "delivered", color: "bg-green-100 text-green-700 border-green-200" },
// //     { label: "Canceled", key: "cancelled", color: "bg-red-100 text-red-700 border-red-200" },
// //   ];

// //   useEffect(() => {
// //     const fetchDetail = async () => {
// //       try {
// //         setLoading(true);
// //         const response = await getCustomerById(id);
// //         if (response.success && response.data) {
// //           const profile = response.data.profile;
// //           const orderData = response.data.orders[0]; // Assuming latest order is first

// //           if (orderData) {
// //             setOrder({
// //               ...orderData,
// //               customerInfo: {
// //                 name: profile.name,
// //                 phone: profile.phone,
// //                 address: orderData.order_address || profile.address
// //               }
// //             });
// //           }
// //         }
// //       } catch (err) {
// //         toast.error("Error loading details");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     if (id) fetchDetail();
// //   }, [id]);

// //   const handleUpdate = async (statusObj, reason = null) => {
// //     if (updating || order.status === statusObj.key) return;
// //     if (statusObj.key === "cancelled" && !reason) {
// //       setShowCancelInput(true);
// //       return;
// //     }

// //     setUpdating(true);
// //     toast.promise(
// //       updateOrderStatus(order.id, statusObj.key, reason),
// //       {
// //         loading: "Updating status...",
// //         success: (res) => {
// //           if (res.success) {
// //             setOrder(prev => ({ ...prev, status: statusObj.key }));
// //             setShowCancelInput(false);
// //             return "Status Updated!";
// //           }
// //           throw new Error();
// //         },
// //         error: "Update failed",
// //       }
// //     ).finally(() => setUpdating(false));
// //   };

// //   if (loading) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm">Loading...</div>;
// //   if (!order) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm">No Data found.</div>;

// //   const currentStatusObj = statusConfig.find(s => s.key === order.status) || statusConfig[0];

// //   return (
// //     <div className="min-h-screen bg-[#f4efe6] p-10 font-dm">
// //       <div className="max-w-6xl mx-auto space-y-6">
// //         <div className="flex justify-between items-center mt-10">
// //           <div>
// //             <h1 className="text-2xl font-bold text-gray-800">{order.order_id}</h1>
// //             <p className="text-sm text-gray-500">{order.date}</p>
// //           </div>
// //           <div className={`${currentStatusObj.color} px-4 py-1 rounded-full text-[10px] font-bold border uppercase`}>
// //             {currentStatusObj.label}
// //           </div>
// //         </div>

// //         <div className="grid md:grid-cols-2 gap-6">
// //           <div className="bg-white p-6 rounded-2xl shadow-sm border">
// //             <h2 className="text-[#A61E30] font-bold mb-4">Customer Info</h2>
// //             <div className="text-sm space-y-1">
// //               <p><span className="text-gray-400">Name:</span> {order.customerInfo.name}</p>
// //               <p><span className="text-gray-400">Phone:</span> {order.customerInfo.phone}</p>
// //               <p><span className="text-gray-400">Address:</span> {order.customerInfo.address}</p>
// //             </div>
// //           </div>
// //           <div className="bg-white p-6 rounded-2xl shadow-sm border">
// //             <h2 className="text-[#A61E30] font-bold mb-4">Payment Info</h2>
// //             <div className="text-sm space-y-1">
// //               <p><span className="text-gray-400">Method:</span> {order.payment?.method}</p>
// //               <p><span className="text-gray-400">Total:</span> <span className="text-lg font-bold">₦{order.total}</span></p>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="bg-white p-6 rounded-2xl shadow-sm border overflow-hidden">
// //           <h2 className="text-[#A61E30] font-bold mb-4 uppercase">Ordered Items</h2>
// //           <table className="w-full text-sm">
// //             <thead className="bg-gray-50 text-gray-600">
// //               <tr>
// //                 <th className="text-left p-3">Item</th>
// //                 <th className="text-center p-3">Qty</th>
// //                 <th className="text-right p-3">Price</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {order.items?.map((item, i) => (
// //                 <tr key={i} className="border-t">
// //                   <td className="p-3">{item.name}</td>
// //                   <td className="text-center p-3">{item.quantity}</td>
// //                   <td className="text-right p-3">₦{item.price}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>

// //         <div className="bg-white p-6 rounded-2xl shadow-sm border">
// //           <h2 className="text-[#A61E30] font-bold mb-4 uppercase">Update Status</h2>
// //           <div className="flex flex-wrap gap-3">
// //             {statusConfig.map((s) => (
// //               <button
// //                 key={s.key}
// //                 onClick={() => handleUpdate(s)}
// //                 disabled={updating}
// //                 className={`px-4 py-2 text-xs rounded-full border transition ${
// //                   order.status === s.key ? "bg-[#A61E30] text-white" : "bg-gray-50 text-gray-700"
// //                 }`}
// //               >
// //                 {s.label}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }





// // import { useParams } from "react-router-dom";
// // import { useState, useEffect } from "react";
// // import { getCustomerById, updateOrderStatus } from "../api/apiServices"; 
// // import toast from "react-hot-toast";

// // export default function OrderDetailInfo() {
// //   const { id } = useParams(); // This matches order.customerId from the list
// //   const [order, setOrder] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [updating, setUpdating] = useState(false);
// //   const [cancelReason, setCancelReason] = useState("");
// //   const [showCancelInput, setShowCancelInput] = useState(false);

// //   // Matches statusStyles from OrdersPage for visual consistency
// //   const statusConfig = [
// //     { label: "Order Received", key: "received", color: "bg-blue-100 text-blue-700 border-blue-200" },
// //     { label: "Preparing Food", key: "prepared", color: "bg-purple-100 text-purple-700 border-purple-200" },
// //     { label: "Ready to Pickup", key: "ready_for_pick", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
// //     { label: "Out for Delivery", key: "out_for_delivery", color: "bg-orange-100 text-orange-700 border-orange-200" },
// //     { label: "Delivered", key: "delivered", color: "bg-green-100 text-green-700 border-green-200" },
// //     { label: "Canceled", key: "cancelled", color: "bg-red-100 text-red-700 border-red-200" },
// //   ];

// //   const [currentStatus, setCurrentStatus] = useState(null);
// //   const isFinalStatus = currentStatus?.key === "delivered" || currentStatus?.key === "cancelled";

// //   useEffect(() => {
// //     const fetchOrderDetail = async () => {
// //       try {
// //         setLoading(true);
// //         const response = await getCustomerById(id);
        
// //         if (response.success && response.data) {
// //           const profile = response.data.profile;
// //           // We grab the most recent order (index 0) to match the dashboard's display logic
// //           const latestOrder = response.data.orders?.[0];

// //           if (latestOrder) {
// //             setOrder({
// //               ...latestOrder,
// //               // Normalize data to match the UI fields
// //               order_number: latestOrder.order_id,
// //               created_at: latestOrder.date,
// //               customer: {
// //                 name: profile?.name,
// //                 phone: profile?.phone,
// //                 address: latestOrder.order_address || profile?.location
// //               }
// //             });

// //             const match = statusConfig.find(s => 
// //               s.key.toLowerCase() === (latestOrder.status || "").toLowerCase() || 
// //               (latestOrder.status === 'pending' && s.key === 'received')
// //             );
// //             setCurrentStatus(match || statusConfig[0]);
// //           }
// //         }
// //       } catch (err) {
// //         toast.error("Failed to load customer details");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     if (id) fetchOrderDetail();
// //   }, [id]);

// //   const handleStatusUpdate = async (statusObj, reason = null) => {
// //     if (updating || currentStatus?.key === statusObj.key || isFinalStatus) return;

// //     if (statusObj.key === "cancelled" && reason === null) {
// //       setShowCancelInput(true);
// //       return;
// //     }

// //     setUpdating(true);

// //     // Still using the specific database order.id (e.g., 23) for the update
// //     toast.promise(
// //       updateOrderStatus(order.id, statusObj.key, reason), 
// //       {
// //         loading: `Updating to ${statusObj.label}...`,
// //         success: (response) => {
// //           if (response.success) {
// //             setCurrentStatus(statusObj);
// //             setShowCancelInput(false);
// //             setOrder(prev => ({ 
// //               ...prev, 
// //               status: statusObj.key,
// //               cancellation_reason: reason || prev.cancellation_reason
// //             }));
// //             return `Status updated to ${statusObj.label}`;
// //           }
// //           throw new Error(response.message || "Update failed");
// //         },
// //         error: (err) => err.message || "Failed to update status",
// //       },
// //       {
// //         style: { minWidth: '250px', fontFamily: 'DM Sans, sans-serif' },
// //         success: { duration: 3000, iconTheme: { primary: '#A61E30', secondary: '#fff' } },
// //       }
// //     ).finally(() => setUpdating(false));
// //   };

// //   if (loading) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm"><div className="animate-pulse text-gray-500 text-lg font-medium">Loading...</div></div>;
// //   if (!order) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm"><p className="text-gray-500">Order not found.</p></div>;

// //   return (
// //     <div className="min-h-screen bg-[#f4efe6] font-dm-sans px-4 py-8 md:p-10">
// //       <div className="mx-auto w-full max-w-6xl space-y-6">
        
// //         {/* Header - IDs now match OrdersPage */}
// //         <div className="flex justify-between items-center mt-10 flex-wrap gap-3">
// //           <div className="flex flex-col items-start gap-2">
// //             <h1 className="text-[22px] font-Roboto text-[#3A3A3A] font-bold">{order.order_number}</h1>
// //             <span className="text-sm text-gray-500">{order.created_at}</span>
// //           </div>
// //           <div className={`${currentStatus?.color} px-4 py-1.5 rounded-full text-sm font-medium border uppercase text-[10px] tracking-wider font-bold`}>
// //             {currentStatus?.label}
// //           </div>
// //         </div>

// //         {/* Info Cards */}
// //         <div className="grid md:grid-cols-2 gap-6">
// //           <div className="bg-white rounded-2xl p-6 shadow-sm border">
// //             <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">Customer Info</h2>
// //             <div className="space-y-2 text-sm">
// //               <p><span className="text-gray-500 font-dm">Name:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.name}</span></p>
// //               <p><span className="text-gray-500 font-dm">Phone:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.phone}</span></p>
// //               <p><span className="text-gray-500 font-dm">Address:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.address}</span></p>
// //             </div>
// //           </div>

// //           <div className="bg-white rounded-2xl p-6 shadow-sm border">
// //             <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">Payment</h2>
// //             <div className="space-y-2 text-sm">
// //               <p><span className="text-gray-500 font-dm">Method:</span> <span className="text-black uppercase font-dm">{order.payment?.method}</span></p>
// //               <p><span className="text-gray-500 font-dm">Status:</span> <span className={`px-3 py-1 rounded-full text-sm font-semibold ml-2 ${order.payment?.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{order.payment?.status}</span></p>
// //               <p className="pt-2">
// //                 <span className="text-gray-500 font-dm">Total:</span> 
// //                 <span className="text-xl text-black font-bold font-dm"> ₦{order.total}</span>
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Ordered Items Table */}
// //         <div className="bg-white rounded-2xl p-6 shadow-sm border">
// //           <h2 className="text-[20px] font-dm text-[#A61E30] font-bold mb-5 uppercase">Ordered Items</h2>
// //           <div className="overflow-x-auto text-black">
// //             <table className="w-full text-sm">
// //               <thead className="bg-[#F6E9EA] text-gray-600">
// //                 <tr>
// //                   <th className="text-left px-4 py-3 rounded-l-lg font-dm">Item</th>
// //                   <th className="text-center px-4 py-3 font-dm">Qty</th>
// //                   <th className="text-right px-4 py-3 font-dm">Price</th>
// //                   <th className="text-right px-4 py-3 rounded-r-lg font-dm">Subtotal</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="divide-y divide-gray-50">
// //                 {order.items?.map((item, index) => (
// //                   <tr key={index}>
// //                     <td className="px-4 py-4 font-dm">{item.name}</td>
// //                     <td className="text-center px-4 py-4 font-dm">{item.quantity}</td>
// //                     <td className="text-right px-4 py-4 font-dm">₦{item.price}</td>
// //                     <td className="text-right px-4 py-4 font-medium font-dm">₦{item.subtotal || (parseFloat(item.price.replace(/,/g, '')) * item.quantity).toLocaleString()}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>

// //         {/* Update Status Section */}
// //         <div className="bg-white rounded-2xl p-6 shadow-sm border">
// //           <h2 className="text-[20px] font-dm font-bold text-[#A61E30] uppercase mb-5">Update Status</h2>
// //           <div className="flex flex-wrap gap-3">
// //             {statusConfig.map((status) => (
// //               <button
// //                 key={status.key}
// //                 disabled={updating || isFinalStatus}
// //                 onClick={() => handleStatusUpdate(status)}
// //                 className={`px-4 py-2 text-sm transition font-dm rounded-[40px] rounded-tl-[5px] border ${
// //                   currentStatus?.key === status.key 
// //                     ? "bg-[#A61E30] text-white border-[#A61E30]" 
// //                     : "bg-[#F3E9B530] text-gray-700 hover:bg-gray-200 border-transparent"
// //                 } ${(updating || isFinalStatus) ? "opacity-50 cursor-not-allowed" : ""}`}
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





// // import { useParams, useLocation } from "react-router-dom";
// // import { useState, useEffect } from "react";
// // import { getCustomerById, updateOrderStatus } from "../api/apiServices"; 
// // import toast from "react-hot-toast";

// // export default function OrderDetailInfo() {
// //   const { id } = useParams(); // Customer ID
// //   const [order, setOrder] = useState(null);
// //   const [customerProfile, setCustomerProfile] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [updating, setUpdating] = useState(false);
// //   const [cancelReason, setCancelReason] = useState("");
// //   const [showCancelInput, setShowCancelInput] = useState(false);

// //   const statusConfig = [
// //     { label: "Order Received", key: "received", color: "bg-blue-100 text-blue-700 border-blue-200" },
// //     { label: "Preparing Food", key: "prepared", color: "bg-purple-100 text-purple-700 border-purple-200" },
// //     { label: "Ready to Pickup", key: "ready_for_pick", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
// //     { label: "Out for Delivery", key: "out_for_delivery", color: "bg-orange-100 text-orange-700 border-orange-200" },
// //     { label: "Delivered", key: "delivered", color: "bg-green-100 text-green-700 border-green-200" },
// //     { label: "Canceled", key: "cancelled", color: "bg-red-100 text-red-700 border-red-200" },
// //   ];

// //   const [currentStatus, setCurrentStatus] = useState(null);
// //   const isFinalStatus = currentStatus?.key === "delivered" || currentStatus?.key === "cancelled";

// //   useEffect(() => {
// //     const fetchOrderDetail = async () => {
// //       try {
// //         setLoading(true);
// //         const response = await getCustomerById(id);
        
// //         if (response.success && response.data) {
// //           const profile = response.data.profile;
// //           setCustomerProfile(profile);
          
// //           // Grabbing the first order in the array as the primary context
// //           const targetOrder = response.data.orders?.[0];

// //           if (targetOrder) {
// //             setOrder(targetOrder);

// //             // Mapping backend "pending" or "processing" to "Order Received" UI
// //             const statusKey = targetOrder.status === 'processing' || targetOrder.status === 'pending' 
// //               ? 'received' 
// //               : targetOrder.status;

// //             const match = statusConfig.find(s => s.key === statusKey);
// //             setCurrentStatus(match || statusConfig[0]);
// //           }
// //         }
// //       } catch (err) {
// //         toast.error("Failed to load details");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     if (id) fetchOrderDetail();
// //   }, [id]);

// //   const handleStatusUpdate = async (statusObj, reason = null) => {
// //     if (updating || currentStatus?.key === statusObj.key || isFinalStatus) return;

// //     if (statusObj.key === "cancelled" && !reason) {
// //       setShowCancelInput(true);
// //       return;
// //     }

// //     setUpdating(true);
// //     toast.promise(
// //       updateOrderStatus(order.id, statusObj.key, reason), 
// //       {
// //         loading: `Updating...`,
// //         success: (res) => {
// //           if (res.success) {
// //             setCurrentStatus(statusObj);
// //             setShowCancelInput(false);
// //             setOrder(prev => ({ ...prev, status: statusObj.key, cancellation_reason: reason }));
// //             return `Status: ${statusObj.label}`;
// //           }
// //           throw new Error(res.message || "Failed");
// //         },
// //         error: (err) => err.message,
// //       },
// //       {
// //         style: { minWidth: '200px', fontFamily: 'DM Sans' },
// //         success: { iconTheme: { primary: '#A61E30', secondary: '#fff' } },
// //       }
// //     ).finally(() => setUpdating(false));
// //   };

// //   if (loading) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm text-gray-400">Loading...</div>;
// //   if (!order) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm text-gray-400">No order details found.</div>;

// //   return (
// //     <div className="min-h-screen bg-[#f4efe6] font-dm-sans px-4 py-8 md:p-10">
// //       <div className="mx-auto w-full max-w-6xl space-y-6">
        
// //         {/* Header */}
// //         <div className="flex justify-between items-center mt-10 flex-wrap gap-3">
// //           <div className="flex flex-col items-start gap-1">
// //             <h1 className="text-[24px] font-bold text-[#3A3A3A]">{order.order_id}</h1>
// //             <span className="text-sm text-gray-500">{order.date}</span>
// //           </div>
// //           <div className={`${currentStatus?.color} px-4 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wider`}>
// //             {currentStatus?.label}
// //           </div>
// //         </div>

// //         <div className="grid md:grid-cols-2 gap-6">
// //           {/* Customer Info Card with Avatar */}
// //           <div className="bg-white rounded-2xl p-6 shadow-sm border">
// //             <h2 className="text-[18px] font-bold text-[#A61E30] mb-5 uppercase tracking-tight">Customer</h2>
// //             <div className="flex items-center gap-4">
// //               <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center font-bold text-xl border overflow-hidden shrink-0 text-gray-500">
// //                 {customerProfile?.avatar ? (
// //                   <img src={customerProfile.avatar} alt="" className="w-full h-full object-cover" />
// //                 ) : (
// //                   customerProfile?.name?.charAt(0).toUpperCase()
// //                 )}
// //               </div>
// //               <div className="space-y-1 text-sm">
// //                 <p className="font-bold text-gray-900">{customerProfile?.name}</p>
// //                 <p className="text-gray-500">{customerProfile?.email}</p>
// //                 <p className="text-gray-500">{order.order_address}</p>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white rounded-2xl p-6 shadow-sm border">
// //             <h2 className="text-[18px] font-bold text-[#A61E30] mb-5 uppercase tracking-tight">Payment</h2>
// //             <div className="space-y-3 text-sm">
// //               <div className="flex justify-between">
// //                 <span className="text-gray-500">Method</span>
// //                 <span className="font-bold text-black uppercase">{order.payment?.method}</span>
// //               </div>
// //               <div className="flex justify-between items-center">
// //                 <span className="text-gray-500">Status</span>
// //                 <span className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase ${order.payment?.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
// //                   {order.payment?.status}
// //                 </span>
// //               </div>
// //               <div className="pt-2 border-t flex justify-between items-center">
// //                 <span className="text-gray-500">Total Amount</span>
// //                 <span className="text-xl font-bold text-black">₦{order.total}</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Ordered Items */}
// //         <div className="bg-white rounded-2xl p-6 shadow-sm border">
// //           <h2 className="text-[18px] font-bold text-[#A61E30] mb-5 uppercase">Items</h2>
// //           <table className="w-full text-sm">
// //             <thead className="text-gray-400 border-b">
// //               <tr>
// //                 <th className="text-left pb-3 font-medium">Description</th>
// //                 <th className="text-center pb-3 font-medium">Qty</th>
// //                 <th className="text-right pb-3 font-medium">Price</th>
// //               </tr>
// //             </thead>
// //             <tbody className="divide-y divide-gray-50">
// //               {order.items?.map((item, idx) => (
// //                 <tr key={idx}>
// //                   <td className="py-4 font-medium text-gray-800">{item.name}</td>
// //                   <td className="py-4 text-center text-gray-600">{item.quantity}</td>
// //                   <td className="py-4 text-right font-bold text-gray-900">₦{item.price}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>

// //         {/* Status Update & Cancellation Reason */}
// //         <div className="bg-white rounded-2xl p-6 shadow-sm border">
// //           <h2 className="text-[18px] font-bold text-[#A61E30] mb-5 uppercase">Control Panel</h2>
          
// //           {/* Reason Display */}
// //           {order.status === 'cancelled' && order.cancellation_reason && (
// //             <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl">
// //               <p className="text-[10px] font-bold text-red-500 uppercase mb-1">Cancellation Reason</p>
// //               <p className="text-sm text-red-700 italic">"{order.cancellation_reason}"</p>
// //             </div>
// //           )}

// //           {/* Cancellation Input */}
// //           {showCancelInput && (
// //             <div className="mb-6 p-4 bg-gray-50 border rounded-xl animate-in slide-in-from-top-2 duration-300">
// //               <label className="text-xs font-bold text-gray-600 uppercase mb-2 block">Reason for cancellation</label>
// //               <textarea 
// //                 className="w-full p-3 border rounded-lg outline-none focus:border-[#A61E30] text-sm"
// //                 placeholder="Why is this order being canceled?"
// //                 value={cancelReason}
// //                 onChange={(e) => setCancelReason(e.target.value)}
// //                 rows="2"
// //               />
// //               <div className="flex gap-2 mt-3">
// //                 <button 
// //                   onClick={() => handleStatusUpdate(statusConfig.find(s => s.key === "cancelled"), cancelReason)}
// //                   className="bg-[#A61E30] text-white px-4 py-2 rounded-lg text-xs font-bold"
// //                 >
// //                   Confirm Cancel
// //                 </button>
// //                 <button onClick={() => setShowCancelInput(false)} className="px-4 py-2 text-xs font-bold text-gray-400">Go Back</button>
// //               </div>
// //             </div>
// //           )}

// //           <div className="flex flex-wrap gap-2">
// //             {statusConfig.map((status) => (
// //               <button
// //                 key={status.key}
// //                 disabled={updating || isFinalStatus}
// //                 onClick={() => handleStatusUpdate(status)}
// //                 className={`px-5 py-2 text-[11px] font-bold uppercase tracking-tight transition rounded-[40px] rounded-tl-[4px] border ${
// //                   currentStatus?.key === status.key 
// //                     ? "bg-[#A61E30] text-white border-[#A61E30]" 
// //                     : "bg-gray-50 text-gray-500 hover:bg-gray-100 border-transparent"
// //                 } ${isFinalStatus ? "opacity-40 cursor-not-allowed" : ""}`}
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







// // import { useParams, useLocation } from "react-router-dom";
// // import { useState, useEffect } from "react";
// // import { getAllCustomers, updateOrderStatus } from "../api/apiServices"; 
// // import toast from "react-hot-toast";

// // export default function OrderDetailInfo() {
// //   const { id } = useParams(); // This is the Order ID (e.g., "23") from the URL
// //   const [order, setOrder] = useState(null);
// //   const [customerProfile, setCustomerProfile] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [updating, setUpdating] = useState(false);
// //   const [cancelReason, setCancelReason] = useState("");
// //   const [showCancelInput, setShowCancelInput] = useState(false);

// //   const statusConfig = [
// //     { label: "Order Received", key: "received", color: "bg-blue-100 text-blue-700 border-blue-200" },
// //     { label: "Preparing Food", key: "prepared", color: "bg-purple-100 text-purple-700 border-purple-200" },
// //     { label: "Ready to Pickup", key: "ready_for_pick", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
// //     { label: "Out for Delivery", key: "out_for_delivery", color: "bg-orange-100 text-orange-700 border-orange-200" },
// //     { label: "Delivered", key: "delivered", color: "bg-green-100 text-green-700 border-green-200" },
// //     { label: "Canceled", key: "cancelled", color: "bg-red-100 text-red-700 border-red-200" },
// //   ];

// //   const [currentStatus, setCurrentStatus] = useState(null);
// //   const isFinalStatus = currentStatus?.key === "delivered" || currentStatus?.key === "cancelled";

// //   useEffect(() => {
// //     const fetchOrderDetail = async () => {
// //       try {
// //         setLoading(true);
// //         const response = await getAllCustomers();
        
// //         // Extracting the customer list from the typical response structure
// //         const customerList = response.data?.customers || response.data || [];

// //         let foundOrder = null;
// //         let foundCustomer = null;

// //         // Loop through customers to find the order that matches the ID in the URL
// //         customerList.forEach(customer => {
// //           const orders = customer.orders || [];
// //           const match = orders.find(o => String(o.id) === String(id));
// //           if (match) {
// //             foundOrder = match;
// //             foundCustomer = customer.profile || customer;
// //           }
// //         });

// //         if (foundOrder) {
// //           setOrder(foundOrder);
// //           setCustomerProfile(foundCustomer);

// //           // Logic to map backend status to UI status
// //           const statusKey = foundOrder.status === 'processing' || foundOrder.status === 'pending' 
// //             ? 'received' 
// //             : foundOrder.status;

// //           const match = statusConfig.find(s => s.key === statusKey);
// //           setCurrentStatus(match || statusConfig[0]);
// //         }
// //       } catch (err) {
// //         console.error("Fetch Error:", err);
// //         toast.error("Failed to load details");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     if (id) fetchOrderDetail();
// //   }, [id]);

// //   const handleStatusUpdate = async (statusObj, reason = null) => {
// //     if (updating || currentStatus?.key === statusObj.key || isFinalStatus) return;

// //     if (statusObj.key === "cancelled" && !reason) {
// //       setShowCancelInput(true);
// //       return;
// //     }

// //     setUpdating(true);
// //     toast.promise(
// //       updateOrderStatus(order.id, statusObj.key, reason), 
// //       {
// //         loading: `Updating...`,
// //         success: (res) => {
// //           if (res.success) {
// //             setCurrentStatus(statusObj);
// //             setShowCancelInput(false);
// //             setOrder(prev => ({ ...prev, status: statusObj.key, cancellation_reason: reason }));
// //             return `Status: ${statusObj.label}`;
// //           }
// //           throw new Error(res.message || "Failed");
// //         },
// //         error: (err) => err.message,
// //       },
// //       {
// //         style: { minWidth: '200px', fontFamily: 'DM Sans' },
// //         success: { iconTheme: { primary: '#A61E30', secondary: '#fff' } },
// //       }
// //     ).finally(() => setUpdating(false));
// //   };

// //   if (loading) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm text-gray-400">Loading...</div>;
// //   if (!order) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm text-gray-400">No order details found.</div>;

// //   return (
// //     <div className="min-h-screen bg-[#f4efe6] font-dm-sans px-4 py-8 md:p-10">
// //       <div className="mx-auto w-full max-w-6xl space-y-6">
        
// //         {/* Header */}
// //         <div className="flex justify-between items-center mt-10 flex-wrap gap-3">
// //           <div className="flex flex-col items-start gap-1">
// //             <h1 className="text-[24px] font-bold text-[#3A3A3A]">{order.order_id}</h1>
// //             <span className="text-sm text-gray-500">{order.date}</span>
// //           </div>
// //           <div className={`${currentStatus?.color} px-4 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wider`}>
// //             {currentStatus?.label}
// //           </div>
// //         </div>

// //         <div className="grid md:grid-cols-2 gap-6">
// //           <div className="bg-white rounded-2xl p-6 shadow-sm border">
// //             <h2 className="text-[18px] font-bold text-[#A61E30] mb-5 uppercase tracking-tight">Customer</h2>
// //             <div className="flex items-center gap-4">
// //               <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center font-bold text-xl border overflow-hidden shrink-0 text-gray-500">
// //                 {customerProfile?.avatar ? (
// //                   <img src={customerProfile.avatar} alt="" className="w-full h-full object-cover" />
// //                 ) : (
// //                   customerProfile?.name?.charAt(0).toUpperCase()
// //                 )}
// //               </div>
// //               <div className="space-y-1 text-sm">
// //                 <p className="font-bold text-gray-900">{customerProfile?.name}</p>
// //                 <p className="text-gray-500">{customerProfile?.email}</p>
// //                 <p className="text-gray-500">{order.order_address}</p>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white rounded-2xl p-6 shadow-sm border">
// //             <h2 className="text-[18px] font-bold text-[#A61E30] mb-5 uppercase tracking-tight">Payment</h2>
// //             <div className="space-y-3 text-sm">
// //               <div className="flex justify-between">
// //                 <span className="text-gray-500">Method</span>
// //                 <span className="font-bold text-black uppercase">{order.payment?.method}</span>
// //               </div>
// //               <div className="flex justify-between items-center">
// //                 <span className="text-gray-500">Status</span>
// //                 <span className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase ${order.payment?.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
// //                   {order.payment?.status}
// //                 </span>
// //               </div>
// //               <div className="pt-2 border-t flex justify-between items-center">
// //                 <span className="text-gray-500">Total Amount</span>
// //                 <span className="text-xl font-bold text-black">₦{order.total}</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Ordered Items */}
// //         <div className="bg-white rounded-2xl p-6 shadow-sm border">
// //           <h2 className="text-[18px] font-bold text-[#A61E30] mb-5 uppercase">Items</h2>
// //           <table className="w-full text-sm">
// //             <thead className="text-gray-400 border-b">
// //               <tr>
// //                 <th className="text-left pb-3 font-medium">Description</th>
// //                 <th className="text-center pb-3 font-medium">Qty</th>
// //                 <th className="text-right pb-3 font-medium">Price</th>
// //               </tr>
// //             </thead>
// //             <tbody className="divide-y divide-gray-50">
// //               {order.items?.map((item, idx) => (
// //                 <tr key={idx}>
// //                   <td className="py-4 font-medium text-gray-800">{item.name}</td>
// //                   <td className="py-4 text-center text-gray-600">{item.quantity}</td>
// //                   <td className="py-4 text-right font-bold text-gray-900">₦{item.price}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>

// //         {/* Control Panel */}
// //         <div className="bg-white rounded-2xl p-6 shadow-sm border">
// //           <h2 className="text-[18px] font-bold text-[#A61E30] mb-5 uppercase">Control Panel</h2>
          
// //           {order.status === 'cancelled' && order.cancellation_reason && (
// //             <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl">
// //               <p className="text-[10px] font-bold text-red-500 uppercase mb-1">Cancellation Reason</p>
// //               <p className="text-sm text-red-700 italic">"{order.cancellation_reason}"</p>
// //             </div>
// //           )}

// //           {showCancelInput && (
// //             <div className="mb-6 p-4 bg-gray-50 border rounded-xl">
// //               <label className="text-xs font-bold text-gray-600 uppercase mb-2 block">Reason for cancellation</label>
// //               <textarea 
// //                 className="w-full p-3 border rounded-lg outline-none focus:border-[#A61E30] text-sm"
// //                 placeholder="Why is this order being canceled?"
// //                 value={cancelReason}
// //                 onChange={(e) => setCancelReason(e.target.value)}
// //                 rows="2"
// //               />
// //               <div className="flex gap-2 mt-3">
// //                 <button 
// //                   onClick={() => handleStatusUpdate(statusConfig.find(s => s.key === "cancelled"), cancelReason)}
// //                   className="bg-[#A61E30] text-white px-4 py-2 rounded-lg text-xs font-bold"
// //                 >
// //                   Confirm Cancel
// //                 </button>
// //                 <button onClick={() => setShowCancelInput(false)} className="px-4 py-2 text-xs font-bold text-gray-400">Go Back</button>
// //               </div>
// //             </div>
// //           )}

// //           <div className="flex flex-wrap gap-2">
// //             {statusConfig.map((status) => (
// //               <button
// //                 key={status.key}
// //                 disabled={updating || isFinalStatus}
// //                 onClick={() => handleStatusUpdate(status)}
// //                 className={`px-5 py-2 text-[11px] font-bold uppercase tracking-tight transition rounded-[40px] rounded-tl-[4px] border ${
// //                   currentStatus?.key === status.key 
// //                     ? "bg-[#A61E30] text-white border-[#A61E30]" 
// //                     : "bg-gray-50 text-gray-500 hover:bg-gray-100 border-transparent"
// //                 } ${isFinalStatus ? "opacity-40 cursor-not-allowed" : ""}`}
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
// import { getAllCustomers, updateOrderStatus } from "../api/apiServices"; 
// import toast from "react-hot-toast";

// export default function OrderDetailInfo() {
//   const { id } = useParams(); 
//   const [order, setOrder] = useState(null);
//   const [customerProfile, setCustomerProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);
//   const [cancelReason, setCancelReason] = useState("");
//   const [showCancelInput, setShowCancelInput] = useState(false);

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
//         const response = await getAllCustomers();

//         // ✅ FIXED: Correct API path
//         const customerList = response.data?.data?.customers || [];

//         let foundOrder = null;
//         let foundCustomer = null;

//         customerList.forEach(customer => {
//           const orders = customer.orders || [];
//           const match = orders.find(o => String(o.id) === String(id));
//           if (match) {
//             foundOrder = match;
//             foundCustomer = customer.profile || customer;
//           }
//         });

//         if (foundOrder) {
//           setOrder(foundOrder);
//           setCustomerProfile(foundCustomer);

//           // ✅ Improved status normalization
//           const normalizeStatus = (status) => {
//             if (status === "pending" || status === "processing") return "received";
//             return status;
//           };

//           const statusKey = normalizeStatus(foundOrder.status);
//           const match = statusConfig.find(s => s.key === statusKey);

//           setCurrentStatus(match || statusConfig[0]);
//         }
//       } catch (err) {
//         console.error("Fetch Error:", err);
//         toast.error("Failed to load details");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) fetchOrderDetail();
//   }, [id]);

//   const handleStatusUpdate = async (statusObj, reason = null) => {
//     if (updating || currentStatus?.key === statusObj.key || isFinalStatus) return;

//     if (statusObj.key === "cancelled" && !reason) {
//       setShowCancelInput(true);
//       return;
//     }

//     setUpdating(true);
//     toast.promise(
//       updateOrderStatus(order.id, statusObj.key, reason), 
//       {
//         loading: `Updating...`,
//         success: (res) => {
//           if (res.success) {
//             setCurrentStatus(statusObj);
//             setShowCancelInput(false);
//             setOrder(prev => ({ ...prev, status: statusObj.key, cancellation_reason: reason }));
//             return `Status: ${statusObj.label}`;
//           }
//           throw new Error(res.message || "Failed");
//         },
//         error: (err) => err.message,
//       },
//       {
//         style: { minWidth: '200px', fontFamily: 'DM Sans' },
//         success: { iconTheme: { primary: '#A61E30', secondary: '#fff' } },
//       }
//     ).finally(() => setUpdating(false));
//   };

//   if (loading) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm text-gray-400">Loading...</div>;
//   if (!order) return <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm text-gray-400">No order details found.</div>;

//   return (
//     <div className="min-h-screen bg-[#f4efe6] font-dm-sans px-4 py-8 md:p-10">
//       <div className="mx-auto w-full max-w-6xl space-y-6">
        
//         {/* Header */}
//         <div className="flex justify-between items-center mt-10 flex-wrap gap-3">
//           <div className="flex flex-col items-start gap-1">
//             <h1 className="text-[24px] font-bold text-[#3A3A3A]">{order.order_id}</h1>
//             <span className="text-sm text-gray-500">{order.date}</span>
//           </div>
//           <div className={`${currentStatus?.color} px-4 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wider`}>
//             {currentStatus?.label}
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-6">
//           <div className="bg-white rounded-2xl p-6 shadow-sm border">
//             <h2 className="text-[18px] font-bold text-[#A61E30] mb-5 uppercase tracking-tight">Customer</h2>
//             <div className="flex items-center gap-4">
//               <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center font-bold text-xl border overflow-hidden shrink-0 text-gray-500">
//                 {customerProfile?.avatar ? (
//                   <img src={customerProfile.avatar} alt="" className="w-full h-full object-cover" />
//                 ) : (
//                   customerProfile?.name?.charAt(0).toUpperCase()
//                 )}
//               </div>
//               <div className="space-y-1 text-sm">
//                 <p className="font-bold text-gray-900">{customerProfile?.name}</p>
//                 <p className="text-gray-500">{customerProfile?.email}</p>

//                 {/* ✅ FIXED: delivery_address */}
//                 <p className="text-gray-500">{order.delivery_address}</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow-sm border">
//             <h2 className="text-[18px] font-bold text-[#A61E30] mb-5 uppercase tracking-tight">Payment</h2>
//             <div className="space-y-3 text-sm">
//               <div className="flex justify-between">
//                 <span className="text-gray-500">Method</span>
//                 <span className="font-bold text-black uppercase">{order.payment?.method}</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-gray-500">Status</span>
//                 <span className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase ${
//                   order.payment?.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
//                 }`}>
//                   {order.payment?.status}
//                 </span>
//               </div>
//               <div className="pt-2 border-t flex justify-between items-center">
//                 <span className="text-gray-500">Total Amount</span>
//                 <span className="text-xl font-bold text-black">₦{order.total}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Items */}
//         <div className="bg-white rounded-2xl p-6 shadow-sm border">
//           <h2 className="text-[18px] font-bold text-[#A61E30] mb-5 uppercase">Items</h2>
//           <table className="w-full text-sm">
//             <thead className="text-gray-400 border-b">
//               <tr>
//                 <th className="text-left pb-3 font-medium">Description</th>
//                 <th className="text-center pb-3 font-medium">Qty</th>
//                 <th className="text-right pb-3 font-medium">Price</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-50">
//               {order.items?.map((item, idx) => (
//                 <tr key={idx}>
//                   <td className="py-4 font-medium text-gray-800">{item.name}</td>
//                   <td className="py-4 text-center text-gray-600">{item.quantity}</td>
//                   <td className="py-4 text-right font-bold text-gray-900">₦{item.price}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Control Panel */}
//         <div className="bg-white rounded-2xl p-6 shadow-sm border">
//           <h2 className="text-[18px] font-bold text-[#A61E30] mb-5 uppercase">Control Panel</h2>

//           {order.status === 'cancelled' && order.cancellation_reason && (
//             <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl">
//               <p className="text-[10px] font-bold text-red-500 uppercase mb-1">Cancellation Reason</p>
//               <p className="text-sm text-red-700 italic">"{order.cancellation_reason}"</p>
//             </div>
//           )}

//           {showCancelInput && (
//             <div className="mb-6 p-4 bg-gray-50 border rounded-xl">
//               <label className="text-xs font-bold text-gray-600 uppercase mb-2 block">Reason for cancellation</label>
//               <textarea 
//                 className="w-full p-3 border rounded-lg outline-none focus:border-[#A61E30] text-sm"
//                 value={cancelReason}
//                 onChange={(e) => setCancelReason(e.target.value)}
//                 rows="2"
//               />
//               <div className="flex gap-2 mt-3">
//                 <button 
//                   onClick={() => handleStatusUpdate(statusConfig.find(s => s.key === "cancelled"), cancelReason)}
//                   className="bg-[#A61E30] text-white px-4 py-2 rounded-lg text-xs font-bold"
//                 >
//                   Confirm Cancel
//                 </button>
//                 <button onClick={() => setShowCancelInput(false)} className="px-4 py-2 text-xs font-bold text-gray-400">
//                   Go Back
//                 </button>
//               </div>
//             </div>
//           )}

//           <div className="flex flex-wrap gap-2">
//             {statusConfig.map((status) => (
//               <button
//                 key={status.key}
//                 disabled={updating || isFinalStatus}
//                 onClick={() => handleStatusUpdate(status)}
//                 className={`px-5 py-2 text-[11px] font-bold uppercase tracking-tight transition rounded-[40px] rounded-tl-[4px] border ${
//                   currentStatus?.key === status.key 
//                     ? "bg-[#A61E30] text-white border-[#A61E30]" 
//                     : "bg-gray-50 text-gray-500 hover:bg-gray-100 border-transparent"
//                 } ${isFinalStatus ? "opacity-40 cursor-not-allowed" : ""}`}
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
//   const [cancelReason, setCancelReason] = useState("");
//   const [showCancelInput, setShowCancelInput] = useState(false);

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

//   const handleStatusUpdate = async (statusObj, reason = null) => {
//     if (updating || currentStatus?.key === statusObj.key || isFinalStatus) return;

//     // 1. Show input if "Canceled" clicked but no reason provided
//     if (statusObj.key === "cancelled" && reason === null) {
//       setShowCancelInput(true);
//       return;
//     }

//     setUpdating(true);

//     // 2. Fix: Call the API with the status string and optional reason separately
//     // We send statusObj.key (string) to satisfy the backend validation
//     toast.promise(
//       updateOrderStatus(id, statusObj.key, reason), 
//       {
//         loading: `Updating to ${statusObj.label}...`,
//         success: (response) => {
//           if (response.success) {
//             setCurrentStatus(statusObj);
//             setShowCancelInput(false);
//             setOrder(prev => ({ 
//               ...prev, 
//               status: statusObj.key,
//               cancellation_reason: reason || prev.cancellation_reason,
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
//       <div className="mx-auto w-full max-w-6xl space-y-6">
        
//         {/* Header */}
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
//               <p><span className="text-gray-500 font-dm">Name:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.name}</span></p>
//               <p><span className="text-gray-500 font-dm">Phone:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.phone}</span></p>
//               <p><span className="text-gray-500 font-dm">Address:</span> <span className="font-medium font-dm text-[#000000]">{order.customer?.address}</span></p>
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow-sm border">
//             <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">Payment</h2>
//             <div className="space-y-2 text-sm">
//               <p><span className="text-gray-500 font-dm">Method:</span> <span className="text-black uppercase font-dm">{order.payment?.method}</span></p>
//               <p><span className="text-gray-500 font-dm">Status:</span> <span className={`px-3 py-1 rounded-full text-sm font-semibold ml-2 ${order.payment?.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{order.payment?.status}</span></p>
//               <p className="pt-2">
//                 <span className="text-gray-500 font-dm">Total:</span> 
//                 <span className="text-xl text-black font-bold font-dm"> ₦{order.payment?.total || order.total_amount}</span>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Ordered Items Table */}
//         <div className="bg-white rounded-2xl p-6 shadow-sm border">
//           <h2 className="text-[20px] font-dm text-[#A61E30] font-bold mb-5 uppercase">Ordered Items</h2>
//           <div className="overflow-x-auto text-black">
//             <table className="w-full text-sm">
//               <thead className="bg-[#F6E9EA] text-gray-600">
//                 <tr>
//                   <th className="text-left px-4 py-3 rounded-l-lg font-dm">Item</th>
//                   <th className="text-center px-4 py-3 font-dm">Qty</th>
//                   <th className="text-right px-4 py-3 font-dm">Price</th>
//                   <th className="text-right px-4 py-3 rounded-r-lg font-dm">Subtotal</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-50">
//                 {order.items?.map((item, index) => (
//                   <tr key={index}>
//                     <td className="px-4 py-4 font-dm">{item.name}</td>
//                     <td className="text-center px-4 py-4 font-dm">{item.quantity}</td>
//                     <td className="text-right px-4 py-4 font-dm">₦{item.price}</td>
//                     <td className="text-right px-4 py-4 font-medium font-dm">₦{item.subtotal}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Update Status Section */}
//         <div className="bg-white rounded-2xl p-6 shadow-sm border">
//           <div className="flex justify-between items-center mb-5">
//             <h2 className="text-[20px] font-dm font-bold text-[#A61E30] uppercase">Update Status</h2>
//             {isFinalStatus && (
//               <span className={`text-[10px] font-bold px-2 py-1 rounded ${currentStatus.key === 'cancelled' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
//                 ORDER {currentStatus.key === 'cancelled' ? 'CANCELED' : currentStatus.key.toUpperCase()}
//               </span>
//             )}
//           </div>

//           {/* Cancellation Reason Alert (Visible once cancelled) */}
//           {currentStatus?.key === "cancelled" && order.cancellation_reason && (
//             <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
//               <h3 className="text-xs font-bold text-red-700 uppercase tracking-wider mb-1">Reason for Cancellation</h3>
//               <p className="text-sm text-red-600 font-dm italic">"{order.cancellation_reason}"</p>
//             </div>
//           )}

//           {/* Admin Input Field (Shows when clicking 'Canceled' button) */}
//           {showCancelInput && !isFinalStatus && (
//             <div className="mb-6 p-5 bg-gray-50 border rounded-xl animate-in fade-in slide-in-from-top-2">
//               <label className="block text-sm font-bold text-gray-700 mb-2 font-dm">Please provide a reason for cancellation:</label>
//               <textarea 
//                 className="w-full bg-transparent p-3 border rounded-lg focus:ring-1 focus:ring-[#A61E30] outline-none text-gray-700 text-sm font-dm"
//                 placeholder="e.g. Out of stock, Out of delivery range..."
//                 value={cancelReason}
//                 onChange={(e) => setCancelReason(e.target.value)}
//                 rows="3"
//               />
//               <div className="flex gap-3 mt-4">
//                 <button 
//                   onClick={() => handleStatusUpdate(statusConfig.find(s => s.key === "cancelled"), cancelReason)}
//                   disabled={!cancelReason.trim() || updating}
//                   className="bg-[#A61E30] text-white px-6 py-2 rounded-lg text-sm font-bold disabled:opacity-50 font-dm"
//                 >
//                   Confirm Cancellation
//                 </button>
//                 <button 
//                   onClick={() => {setShowCancelInput(false); setCancelReason("");}}
//                   className="bg-white border px-6 py-2 rounded-lg text-sm font-medium text-gray-600 font-dm"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Status Selection Buttons */}
//           <div className="flex flex-wrap gap-3">
//             {statusConfig.map((status) => (
//               <button
//                 key={status.key}
//                 disabled={updating || isFinalStatus || (showCancelInput && status.key !== 'cancelled')}
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
//   const [cancelReason, setCancelReason] = useState("");
//   const [showCancelInput, setShowCancelInput] = useState(false);

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

//   const handleStatusUpdate = async (statusObj, reason = null) => {
//     if (updating || currentStatus?.key === statusObj.key || isFinalStatus) return;

//     if (statusObj.key === "cancelled" && reason === null) {
//       setShowCancelInput(true);
//       return;
//     }

//     setUpdating(true);
//     toast.promise(
//       updateOrderStatus(id, statusObj.key, reason), 
//       {
//         loading: `Updating to ${statusObj.label}...`,
//         success: (response) => {
//           if (response.success) {
//             setCurrentStatus(statusObj);
//             setShowCancelInput(false);
//             setOrder(prev => ({ 
//               ...prev, 
//               status: statusObj.key,
//               cancellation_reason: reason || prev.cancellation_reason,
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
//       <div className="mx-auto w-full max-w-6xl space-y-6">
        
//         {/* Header */}
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
//             <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-5 uppercase tracking-tight">Customer</h2>
//             <div className="flex items-center gap-4">
//               {/* Avatar Section */}
//               <div className="w-16 h-16 rounded-full bg-[#f4efe6] flex items-center justify-center font-bold text-xl border border-gray-200 overflow-hidden shrink-0 text-[#A61E30]">
//                 {order.customer?.avatar ? (
//                   <img src={order.customer.avatar} alt="Ihenacho Maxwell" className="w-full h-full object-cover" />
//                 ) : (
//                   <span className="uppercase font-dm">I</span>
//                 )}
//               </div>
//               <div className="space-y-1 text-sm font-dm">
//                 <p className="font-bold text-gray-900">Ihenacho Maxwell</p>
//                 <p className="text-gray-500">{order.customer?.email || "No email available"}</p>
//                 <p className="text-gray-500">{order.customer?.address}</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow-sm border">
//             <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-5 uppercase tracking-tight">Payment</h2>
//             <div className="space-y-3 text-sm font-dm">
//               <div className="flex justify-between">
//                 <span className="text-gray-500">Method:</span>
//                 <span className="text-black uppercase font-bold">{order.payment?.method}</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-gray-500">Status:</span>
//                 <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${order.payment?.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
//                   {order.payment?.status}
//                 </span>
//               </div>
//               <div className="pt-2 border-t flex justify-between items-center">
//                 <span className="text-gray-500">Total Amount:</span>
//                 <span className="text-xl text-black font-bold">₦{order.payment?.total || order.total_amount}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Ordered Items Table */}
//         <div className="bg-white rounded-2xl p-6 shadow-sm border">
//           <h2 className="text-[20px] font-dm text-[#A61E30] font-bold mb-5 uppercase">Ordered Items</h2>
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead className="bg-[#F6E9EA] text-gray-600">
//                 <tr>
//                   <th className="text-left px-4 py-3 rounded-l-lg font-dm">Item</th>
//                   <th className="text-center px-4 py-3 font-dm">Qty</th>
//                   <th className="text-right px-4 py-3 font-dm">Price</th>
//                   <th className="text-right px-4 py-3 rounded-r-lg font-dm">Subtotal</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-50 text-black">
//                 {order.items?.map((item, index) => (
//                   <tr key={index}>
//                     <td className="px-4 py-4 font-dm">{item.name}</td>
//                     <td className="text-center px-4 py-4 font-dm">{item.quantity}</td>
//                     <td className="text-right px-4 py-4 font-dm">₦{item.price}</td>
//                     <td className="text-right px-4 py-4 font-medium font-dm">₦{item.subtotal}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Update Status Section */}
//         <div className="bg-white rounded-2xl p-6 shadow-sm border">
//           <div className="flex justify-between items-center mb-5">
//             <h2 className="text-[20px] font-dm font-bold text-[#A61E30] uppercase">Control Panel</h2>
//             {isFinalStatus && (
//               <span className={`text-[10px] font-bold px-2 py-1 rounded ${currentStatus.key === 'cancelled' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
//                 ORDER {currentStatus.key.toUpperCase()}
//               </span>
//             )}
//           </div>

//           {currentStatus?.key === "cancelled" && order.cancellation_reason && (
//             <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
//               <h3 className="text-xs font-bold text-red-700 uppercase tracking-wider mb-1">Cancellation Reason</h3>
//               <p className="text-sm text-red-600 font-dm italic">"{order.cancellation_reason}"</p>
//             </div>
//           )}

//           {showCancelInput && !isFinalStatus && (
//             <div className="mb-6 p-5 bg-gray-50 border rounded-xl animate-in fade-in slide-in-from-top-2">
//               <label className="block text-sm font-bold text-gray-700 mb-2 font-dm">Reason for cancellation:</label>
//               <textarea 
//                 className="w-full bg-transparent p-3 border rounded-lg focus:ring-1 focus:ring-[#A61E30] outline-none text-gray-700 text-sm font-dm"
//                 placeholder="e.g. Out of stock..."
//                 value={cancelReason}
//                 onChange={(e) => setCancelReason(e.target.value)}
//                 rows="2"
//               />
//               <div className="flex gap-3 mt-4">
//                 <button 
//                   onClick={() => handleStatusUpdate(statusConfig.find(s => s.key === "cancelled"), cancelReason)}
//                   disabled={!cancelReason.trim() || updating}
//                   className="bg-[#A61E30] text-white px-6 py-2 rounded-lg text-sm font-bold disabled:opacity-50 font-dm"
//                 >
//                   Confirm
//                 </button>
//                 <button 
//                   onClick={() => {setShowCancelInput(false); setCancelReason("");}}
//                   className="bg-white border px-6 py-2 rounded-lg text-sm font-medium text-gray-600 font-dm"
//                 >
//                   Go Back
//                 </button>
//               </div>
//             </div>
//           )}

//           <div className="flex flex-wrap gap-3">
//             {statusConfig.map((status) => (
//               <button
//                 key={status.key}
//                 disabled={updating || isFinalStatus || (showCancelInput && status.key !== 'cancelled')}
//                 onClick={() => handleStatusUpdate(status)}
//                 className={`px-5 py-2 text-[11px] font-bold uppercase tracking-tight transition font-dm rounded-[40px] rounded-tl-[5px] border ${
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
    { label: "Processing", key: "processing", color: "bg-indigo-100 text-indigo-700 border-indigo-200" }, // Added to match your JSON status
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

    if (statusObj.key === "cancelled" && reason === null) {
      setShowCancelInput(true);
      return;
    }

    setUpdating(true);
    toast.promise(
      updateOrderStatus(id, statusObj.key, reason), 
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
      <div className="mx-auto w-full max-w-6xl space-y-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mt-10 flex-wrap gap-3">
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-[22px] font-Roboto text-[#3A3A3A] font-bold">{order.order_number}</h1>
            <span className="text-sm text-gray-500">{order.created_at}</span>
          </div>
          <div className={`${currentStatus?.color} px-4 py-1.5 rounded-full text-[10px] font-bold border uppercase tracking-wider`}>
            {currentStatus?.label}
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-5 uppercase tracking-tight">Customer</h2>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#f4efe6] flex items-center justify-center font-bold text-xl border border-gray-200 overflow-hidden shrink-0 text-[#A61E30]">
                {order.customer?.avatar ? (
                  <img src={order.customer.avatar} alt={order.customer.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="uppercase font-dm">{order.customer?.name?.charAt(0) || "C"}</span>
                )}
              </div>
              <div className="space-y-1 text-sm font-dm">
                <p className="font-bold text-gray-900 capitalize">{order.customer?.name || "Customer"}</p>
                <p className="text-[#A61E30] font-medium font-semibold">{order.customer?.phone || "No phone number"}</p>
                <p className="text-gray-500 leading-tight">
                  {order.customer?.delivery_address || order.customer?.address || "No address provided"}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-5 uppercase tracking-tight">Payment</h2>
            <div className="space-y-3 text-sm font-dm">
              <div className="flex justify-between">
                <span className="text-gray-500">Method:</span>
                <span className="text-black uppercase font-bold">{order.payment?.method}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Status:</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${order.payment?.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {order.payment?.status}
                </span>
              </div>
              <div className="pt-2 border-t flex justify-between items-center">
                <span className="text-gray-500">Total Amount:</span>
                <span className="text-xl text-black font-bold">₦{order.payment?.total || order.total_amount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ordered Items Table */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h2 className="text-[20px] font-dm text-[#A61E30] font-bold mb-5 uppercase">Ordered Items</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#F6E9EA] text-gray-600">
                <tr>
                  <th className="text-left px-4 py-3 rounded-l-lg font-dm">Item</th>
                  <th className="text-center px-4 py-3 font-dm">Qty</th>
                  <th className="text-right px-4 py-3 font-dm">Price</th>
                  <th className="text-right px-4 py-3 rounded-r-lg font-dm">Subtotal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-black">
                {order.items?.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 py-4 font-dm">{item.name}</td>
                    <td className="text-center px-4 py-4 font-dm">{item.quantity}</td>
                    <td className="text-right px-4 py-4 font-dm">₦{item.price}</td>
                    <td className="text-right px-4 py-4 font-medium font-dm">₦{item.subtotal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Control Panel */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-[20px] font-dm font-bold text-[#A61E30] uppercase">Control Panel</h2>
          </div>

          {showCancelInput && !isFinalStatus && (
            <div className="mb-6 p-5 bg-gray-50 border rounded-xl">
              <label className="block text-sm font-bold text-gray-700 mb-2 font-dm">Reason for cancellation:</label>
              <textarea 
                className="w-full bg-white p-3 border rounded-lg focus:ring-1 focus:ring-[#A61E30] outline-none text-gray-700 text-sm font-dm"
                placeholder="e.g. Out of stock..."
                value={cancelReason}
                onChange={(e) => setCancelReason(e.target.value)}
                rows="2"
              />
              <div className="flex gap-3 mt-4">
                <button 
                  onClick={() => handleStatusUpdate(statusConfig.find(s => s.key === "cancelled"), cancelReason)}
                  disabled={!cancelReason.trim() || updating}
                  className="bg-[#A61E30] text-white px-6 py-2 rounded-lg text-sm font-bold disabled:opacity-50 font-dm"
                >
                  Confirm Cancellation
                </button>
                <button 
                  onClick={() => {setShowCancelInput(false); setCancelReason("");}}
                  className="bg-white border px-6 py-2 rounded-lg text-sm font-medium text-gray-600 font-dm"
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
                className={`px-5 py-2 text-[11px] font-bold uppercase tracking-tight transition font-dm rounded-[40px] rounded-tl-[5px] border ${
                  currentStatus?.key === status.key 
                    ? "bg-[#A61E30] text-white border-[#A61E30]" 
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200"
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