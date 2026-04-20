// // src/pages/NotificationsPage.jsx
// import React, { useState, useEffect } from "react";
// import { 
//   getNotifications, 
//   markNotificationAsRead, 
//   markAllNotificationsRead, 
//   deleteNotification 
// } from "../api/apiServices";
// import { Bell, CheckCircle, AlertTriangle, Info, Clock, Trash2, Check } from "lucide-react";

// export default function NotificationsPage() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchNotifications();
//   }, []);

//   const fetchNotifications = async () => {
//     try {
//       const res = await getNotifications();
//       if (res.success) setData(res.data);
//     } catch (err) {
//       console.error("Fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleMarkAllRead = async () => {
//     try {
//       const res = await markAllNotificationsRead();
//       if (res.success) fetchNotifications(); // Refresh list
//     } catch (err) {
//       console.error("Mark all read error:", err);
//     }
//   };

//   const handleMarkSingleRead = async (id) => {
//     try {
//       const res = await markNotificationAsRead(id);
//       if (res.success) fetchNotifications();
//     } catch (err) {
//       console.error("Mark single read error:", err);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this notification?")) return;
//     try {
//       await deleteNotification(id);
//       fetchNotifications();
//     } catch (err) {
//       console.error("Delete error:", err);
//     }
//   };

//   const getIcon = (type) => {
//     switch (type) {
//       case "warning": return <AlertTriangle className="text-orange-500" size={20} />;
//       case "success": return <CheckCircle className="text-green-500" size={20} />;
//       default: return <Info className="text-blue-500" size={20} />;
//     }
//   };

//   return (
//     <div className="p-8 mt-16 bg-[#F6F1E8] min-h-screen">
//       <div className="max-w-4xl mx-auto">
//         {/* HEADER AREA */}
//         <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
//           <div>
//             <h1 className="text-2xl font-bold text-[#A61E30]">Notifications</h1>
//             <p className="text-sm text-gray-500 mt-1">Manage your system alerts and updates</p>
//           </div>
          
//           <div className="flex items-center gap-3">
//             {data?.unread_count > 0 && (
//               <button 
//                 onClick={handleMarkAllRead}
//                 className="text-xs font-bold text-[#A61E30] bg-white border border-[#E0C0C3] px-4 py-2 rounded-lg hover:bg-[#F6E9EA] transition-colors"
//               >
//                 Mark all as read
//               </button>
//             )}
//             <span className="bg-[#A61E30] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
//               {data?.unread_count || 0} New
//             </span>
//           </div>
//         </div>

//         {/* NOTIFICATION LIST */}
//         <div className="space-y-4">
//           {loading ? (
//             <div className="flex flex-col items-center py-20">
//               <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#A61E30]"></div>
//               <p className="text-gray-500 mt-4 text-sm">Loading notifications...</p>
//             </div>
//           ) : data?.notifications?.data.length > 0 ? (
//             data.notifications.data.map((noti) => (
//               <div 
//                 key={noti.id} 
//                 className={`group p-5 rounded-xl border flex gap-4 transition-all bg-white shadow-sm hover:shadow-md ${
//                   !noti.read_at ? "border-l-4 border-l-[#A61E30]" : "border-gray-100 opacity-80"
//                 }`}
//               >
//                 <div className="mt-1 shrink-0">{getIcon(noti.data.type)}</div>
                
//                 <div className="flex-1 min-w-0">
//                   <div className="flex justify-between items-start">
//                     <h3 className={`font-bold text-gray-800 truncate ${!noti.read_at ? "" : "font-semibold"}`}>
//                       {noti.data.title}
//                     </h3>
                    
//                     {/* ACTIONS */}
//                     <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
//                       {!noti.read_at && (
//                         <button 
//                           onClick={() => handleMarkSingleRead(noti.id)}
//                           className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
//                           title="Mark as read"
//                         >
//                           <Check size={16} />
//                         </button>
//                       )}
//                       <button 
//                         onClick={() => handleDelete(noti.id)}
//                         className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
//                         title="Delete"
//                       >
//                         <Trash2 size={16} />
//                       </button>
//                     </div>
//                   </div>
                  
//                   <p className="text-sm text-gray-600 mt-1 leading-relaxed">{noti.data.message}</p>
                  
//                   <div className="flex items-center gap-2 mt-3 text-[10px] text-gray-400 uppercase tracking-widest font-bold">
//                     <Clock size={12} />
//                     {new Date(noti.created_at).toLocaleString()}
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="text-center py-24 bg-white rounded-2xl border border-dashed border-gray-300">
//               <Bell className="mx-auto text-gray-200 mb-4" size={50} />
//               <p className="text-gray-500 font-medium">All caught up!</p>
//               <p className="text-gray-400 text-sm">No notifications to show.</p>
//             </div>
//           )}
//         </div>

//         {/* PAGINATION INFO (Optional) */}
//         {data?.notifications?.last_page > 1 && (
//           <div className="mt-8 flex justify-center">
//             <p className="text-xs text-gray-400">
//               Page {data.notifications.current_page} of {data.notifications.last_page}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }





// src/pages/NotificationsPage.jsx
import React, { useState, useEffect } from "react";
import { 
  getNotifications, 
  markNotificationAsRead, 
  markAllNotificationsRead, 
  deleteNotification 
} from "../api/apiServices";
import { Bell, CheckCircle, AlertTriangle, Info, Clock, Trash2, Check } from "lucide-react";

export default function NotificationsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    try {
      const res = await getNotifications();
      if (res.success) setData(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchNotifications(); }, []);

  const getIcon = (type) => {
    switch (type) {
      case "warning": return <AlertTriangle className="text-orange-500" size={20} />;
      case "success": return <CheckCircle className="text-green-500" size={20} />;
      default: return <Info className="text-blue-500" size={20} />;
    }
  };

  // Extract the array from the paginated structure in your JSON
  const notificationsList = data?.notifications?.data || [];

  return (
    <div className="p-8 mt-16 bg-[#F6F1E8] min-h-screen">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[#A61E30]">Notifications</h1>
            <p className="text-sm text-gray-500">Stay updated with your latest activities</p>
          </div>
          
          <div className="flex items-center gap-3">
            {data?.unread_count > 0 && (
              <button 
                onClick={async () => { await markAllNotificationsRead(); fetchNotifications(); }}
                className="text-xs font-bold text-[#A61E30] bg-white border border-[#E0C0C3] px-4 py-2 rounded-lg hover:bg-[#F6E9EA]"
              >
                Mark all as read
              </button>
            )}
            <span className="bg-[#A61E30] text-white px-4 py-1.5 rounded-full text-xs font-bold">
              {data?.unread_count || 0} New
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {loading ? (
            <p className="text-center py-20 text-gray-500">Loading...</p>
          ) : notificationsList.length > 0 ? (
            notificationsList.map((noti) => (
              <div 
                key={noti.id} 
                className={`group p-5 rounded-xl border flex gap-4 bg-white transition-all ${
                  !noti.read_at ? "border-l-4 border-l-[#A61E30] shadow-sm" : "border-gray-100 opacity-75"
                }`}
              >
                <div className="mt-1">{getIcon(noti.data.type)}</div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-gray-800">{noti.data.title}</h3>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {!noti.read_at && (
                        <button onClick={() => { markNotificationAsRead(noti.id); fetchNotifications(); }} className="p-1 hover:bg-gray-100 rounded text-blue-600"><Check size={16}/></button>
                      )}
                      <button onClick={() => { deleteNotification(noti.id); fetchNotifications(); }} className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-red-500"><Trash2 size={16}/></button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{noti.data.message}</p>
                  <div className="flex items-center gap-2 mt-3 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    <Clock size={12} />
                    {new Date(noti.created_at).toLocaleString()}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
               <Bell className="mx-auto text-gray-200 mb-2" size={40} />
               <p className="text-gray-500">All caught up!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}