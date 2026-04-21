// import { useParams } from "react-router-dom";
// import { useState } from "react";

// export default function OrderDetailInfo() {
//   const { id } = useParams();

//   const statuses = [
//     "Order Received",
//     "Prepared Food",
//     "Ready for Pick",
//     "Out for Delivery",
//     "Delivered",
//   ];

//   const [currentStatus, setCurrentStatus] = useState(statuses[0]);

//   return (
//     <div className="min-h-screen bg-[#f4efe6] font-dm-sans px-4 py-8 md:p-10">
//       <div className="mx-auto w-full max-w-5xl space-y-6">

//         {/* Header */}
//         <div className="flex justify-between items-center mt-10 flex-wrap gap-3">
//           <div className="flex flex-col items-start  gap-2">
//             <h1 className="text-[22px] font-Roboto text-[#3A3A3A] font-bold">
//               ORD-{id || 7731}
//             </h1>
//             <span className="text-sm text-gray-500">
//               2025-03-18 14:30
//             </span>
//           </div>

//           {/* Dynamic Status */}
//           <div className="bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-medium">
//             {currentStatus}
//           </div>
//         </div>

//         {/* Customer + Payment (Same Parent) */}
//         <div className="grid md:grid-cols-2 gap-6">
          
//           {/* Customer Card */}
//           <div className="bg-white rounded-2xl p-6 shadow-sm border">
//             <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">
//               Customer Info
//             </h2>

//             <div className="space-y-2 text-sm">
//               <p>
//                 <span className="text-gray-500">Name:</span>{" "}
//                 <span className="font-medium font-dm text-[#000000]">James Cole</span>
//               </p>
//               <p>
//                 <span className="text-gray-500">Phone:</span>{" "}
//                 <span className="font-medium font-dm text-[#000000]">08102420751</span>
//               </p>
//               <p>
//                 <span className="text-gray-500">Address:</span>{" "}
//                 <span className="font-medium font-dm text-[#000000]">
//                   45 Kimathi St, Nairobi
//                 </span>
//               </p>
//             </div>
//           </div>

//           {/* Payment Card */}
//           <div className="bg-white rounded-2xl p-6 shadow-sm border">
//             <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">
//               Payment
//             </h2>

//             <div className="space-y-2 text-sm">
//               <p>
//                 <span className="text-gray-500 font-dm text-[#3A3A3AB2]">Method:</span>{" "}
//                 <span className="font-dm text-black">Card Payment</span>
//               </p>
//               <p>
//                 <span className="text-gray-500 font-dm text-[#3A3A3AB2]">Status:</span>{" "}
//                 <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
//   Paid
// </span>
//               </p>
//               <p className="pt-2">
//                 <span className="text-gray-500 font-dm text-[#3A3A3AB2]">Total:</span>{" "}
//                 <span className="text-xl text-black font-bold font-dm">₦23,100</span>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Ordered Items */}
//         <div className="bg-white rounded-2xl p-6 shadow-sm border">
//           <h2 className="text-[20px] font-dm text-[#A61E30] font-bold mb-5">
//             ORDERED ITEMS
//           </h2>

//           <div className="overflow-hidden  ">
//             <table className="w-full rounded-[30px] text-sm">
//               <thead className="bg-[#F6E9EA] text-gray-600 rounded-[30px] ">
//                 <tr className="">
//                   <th className="text-left px-4 py-3">Item</th>
//                   <th className="text-center px-4 py-3">Qty</th>
//                   <th className="text-right px-4 py-3">Price</th>
//                   <th className="text-right px-4 py-3">Subtotal</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 <tr className="text-black">
//                   <td className="px-4 py-3">Jollof Rice</td>
//                   <td className="text-center">2</td>
//                   <td className="text-right">₦8,200</td>
//                   <td className="text-right font-medium">₦16,400</td>
//                 </tr>

//                 <tr className="text-black">
//                   <td className="px-4 py-3">Grilled Chicken</td>
//                   <td className="text-center">6</td>
//                   <td className="text-right">₦5,500</td>
//                   <td className="text-right font-medium">₦33,000</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Update Status */}
//         <div className="bg-white rounded-2xl p-6 shadow-sm border">
//           <h2 className="text-[20px] font-dm font-bold text-[#A61E30] mb-5">
//             UPDATE STATUS
//           </h2>

//           <div className="flex flex-wrap gap-3">
//             {statuses.map((status) => {
//               const active = currentStatus === status;

//               return (
//                 <button
//                   key={status}
//                   onClick={() => setCurrentStatus(status)}
//                   className={`
//                     px-4 py-2 text-sm transition font-dm
//                     rounded-[40px] rounded-tl-[5px]
//                     ${
//                       active
//                         ? "bg-[#A61E30] text-white"
//                         : "bg-[#F3E9B530] border text-gray-700 hover:bg-gray-200"
//                     }
//                   `}
//                 >
//                   {status}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }







import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOrderById } from "../api/apiServices";
import toast from "react-hot-toast";

export default function OrderDetailInfo() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  const statuses = [
    "Order Received",
    "Prepared Food",
    "Ready for Pick",
    "Out for Delivery",
    "Delivered",
  ];

  const [currentStatus, setCurrentStatus] = useState("");

  useEffect(() => {
    const fetchOrderDetail = async () => {
      try {
        setLoading(true);
        const response = await getOrderById(id);
        if (response.success) {
          // Setting the data from res.data
          setOrder(response.data);
          setCurrentStatus(response.data.status || "Order Received");
        }
      } catch (err) {
        console.error("Error fetching order:", err);
        toast.error("Failed to load order details");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchOrderDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm">
        <div className="animate-pulse text-gray-500 text-lg font-medium">Loading order details...</div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-[#f4efe6] flex items-center justify-center font-dm">
        <p className="text-gray-500">Order not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4efe6] font-dm-sans px-4 py-8 md:p-10">
      <div className="mx-auto w-full max-w-5xl space-y-6">

        {/* Header */}
        <div className="flex justify-between items-center mt-10 flex-wrap gap-3">
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-[22px] font-Roboto text-[#3A3A3A] font-bold">
              {order.order_number}
            </h1>
            <span className="text-sm text-gray-500">
              {order.created_at}
            </span>
          </div>

          <div className="bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-medium">
            {currentStatus}
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Customer Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">
              Customer Info
            </h2>

            <div className="space-y-2 text-sm">
              <p>
                <span className="text-gray-500">Name:</span>{" "}
                <span className="font-medium font-dm text-[#000000]">{order.customer?.name}</span>
              </p>
              <p>
                <span className="text-gray-500">Phone:</span>{" "}
                <span className="font-medium font-dm text-[#000000]">{order.customer?.phone}</span>
              </p>
              <p>
                <span className="text-gray-500">Address:</span>{" "}
                <span className="font-medium font-dm text-[#000000]">{order.customer?.address}</span>
              </p>
            </div>
          </div>

          {/* Payment Card - Updated for your new Response */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <h2 className="text-[20.5px] font-dm font-semibold text-[#A61E30] mb-4">
              Payment
            </h2>

            <div className="space-y-2 text-sm">
              <p>
                <span className="text-gray-500 font-dm text-[#3A3A3AB2]">Method:</span>{" "}
                <span className="font-dm text-black">{order.payment?.method}</span>
              </p>
              <p>
                <span className="text-gray-500 font-dm text-[#3A3A3AB2]">Status:</span>{" "}
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold ml-2">
                  {order.payment?.status}
                </span>
              </p>
              <p className="pt-2">
                <span className="text-gray-500 font-dm text-[#3A3A3AB2]">Total:</span>{" "}
                <span className="text-xl text-black font-bold font-dm">₦{order.payment?.total}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Ordered Items */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h2 className="text-[20px] font-dm text-[#A61E30] font-bold mb-5">
            ORDERED ITEMS
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#F6E9EA] text-gray-600">
                <tr>
                  <th className="text-left px-4 py-3 rounded-l-lg">Item</th>
                  <th className="text-center px-4 py-3">Qty</th>
                  <th className="text-right px-4 py-3">Price</th>
                  <th className="text-right px-4 py-3 rounded-r-lg">Subtotal</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-50">
                {order.items?.map((item, index) => (
                  <tr key={index} className="text-black">
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

        {/* Status Actions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h2 className="text-[20px] font-dm font-bold text-[#A61E30] mb-5">
            UPDATE STATUS
          </h2>

          <div className="flex flex-wrap gap-3">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setCurrentStatus(status)}
                className={`px-4 py-2 text-sm transition font-dm rounded-[40px] rounded-tl-[5px] ${
                  currentStatus === status
                    ? "bg-[#A61E30] text-white"
                    : "bg-[#F3E9B530] border text-gray-700 hover:bg-gray-200"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}