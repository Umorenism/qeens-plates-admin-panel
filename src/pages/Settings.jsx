// import React, { useState } from "react";

// import { Bell } from "lucide-react";

// export default function Settings() {
//   return (
//     <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
//       {/* Header */}
//       <div className="mb-6 mt-10 flex justify-between items-center">
//         <div>
//           <h1 className="text-[32px] font-[600] font-dm text-black font-semibold">
//             Settings
//           </h1>
//         </div>
//       </div>

//       <div>
//         <div className="bg-white p-4 rounded-[12px] py-2 p-3 max-w-xl">
//           <h1 className="text-black font-[500] text-[20px] font-dm">
//             Restaurant Details
//           </h1>
//           <div >
//             <label className="text-black mt-5 font-[300] text-[14px] font-dm">
//               Restaurant Name
//             </label>
//             <div className="relative  w-full">
//               <input
//                 type="text"
//                 placeholder="Queen’s Plate - Food Express"
//                 className="pl-4 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none  rounded-[40px] rounded-tl-[5px] font-dm"
//               />
//             </div>
//             <div className="flex flex-col mt-5 w-full ">
//            <div className="items-center justify-between gap-4 flex mb-4">
//              <div className="w-full">
//                 <label htmlFor="" className="text-black mt-5 font-[300] text-[14px] font-dm">Email</label>
//                 <input
//                 type="text"
//                 placeholder="Enter your Email"
//                 className="pl-4 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none  rounded-[40px] rounded-tl-[5px] font-dm"
//               />
//             </div>
//             <div className="w-full">
//                  <label htmlFor="" className="text-black mt-5 font-[300] text-[14px] font-dm">Phone</label>
//                 <input
//                 type="text"
//                 placeholder="Enter your Phone Number"
//                 className="pl-4 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none  rounded-[40px] rounded-tl-[5px] font-dm"
//               />
//             </div>
//            </div>
//             <div>
                
//       <button className="bg-[#A61E30] mb-4 text-white px-5 py-2 rounded-[8px] text-[12.87px]">Save Changes</button>
//             </div>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white p-4 mt-10 rounded-[12px] py-2 p-3 max-w-xl">
//           <h1 className="text-black font-[400] text-[20px] font-dm">
//             Security
//           </h1>
//           <p className="text-[#6B7280] font-dm text-[16px]">Change your admin password and manage access.</p>
//           <button className="bg-[#ffff] border mb-4 text-[#374151] px-5 py-2 rounded-[8px] text-[12.87px]">Change Password</button>
//         </div>
//       </div>
//     </div>
//   );
// }



import React from "react";

export default function Settings() {
  return (
    <div className="min-h-screen bg-[#f4efe6] p-8 font-dm">
      {/* Header */}
      <div className="mb-6 mt-10 flex justify-between items-center">
        <h1 className="text-[32px] font-[600] font-dm text-black">
          Settings
        </h1>
      </div>

      {/* Restaurant Details */}
      <div className="bg-white rounded-xl p-5 shadow-sm max-w-xl">
        <h1 className="text-black font-[500] text-[20px] font-dm mb-4">
          Restaurant Details
        </h1>

        {/* Restaurant Name */}
        <div className="mb-5">
          <label className="text-black font-[300] text-[14px] font-dm mb-2 block">
            Restaurant Name
          </label>
          <input
            type="text"
            placeholder="Queen’s Plate - Food Express"
            className="pl-4 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none  rounded-[40px] rounded-tl-[5px] font-dm"
          />
        </div>

        {/* Email & Phone */}
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1">
            <label className="text-black font-[300] text-[14px] font-dm mb-2 block">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your Email"
             className="pl-4 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none  rounded-[40px] rounded-tl-[5px] font-dm"
            />
          </div>
          <div className="flex-1">
            <label className="text-black font-[300] text-[14px] font-dm mb-2 block">
              Phone
            </label>
            <input
              type="text"
              placeholder="Enter your Phone Number"
              className="pl-4 pr-4 py-2 w-full bg-white border shadow-sm text-gray-500 outline-none  rounded-[40px] rounded-tl-[5px] font-dm"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-5">
          <button className="bg-[#A61E30] text-white px-5 py-2 rounded-[8px] text-[12.87px]">
            Save Changes
          </button>
        </div>
      </div>

      {/* Security */}
      <div className="bg-white rounded-xl p-5 shadow-sm max-w-xl mt-10">
        <h1 className="text-black font-[400] text-[20px] font-dm mb-2">
          Security
        </h1>
        <p className="text-[#6B7280] font-dm text-[16px] mb-4">
          Change your admin password and manage access.
        </p>
        <button className="bg-white border text-[#374151] px-5 py-2 rounded-[8px] text-[12.87px]">
          Change Password
        </button>
      </div>
    </div>
  );
}