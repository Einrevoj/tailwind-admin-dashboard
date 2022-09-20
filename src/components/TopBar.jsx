import React from "react";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function TopBar() {
  return (
    <div className="topbar container h-12 bg-white sticky top-0 z-50">
      <div className="topbarWrapper h-full py-0 px-5 flex items-center justify-between">
        <div className="topLeft">
          <span className="logo font-bold text-3xl cursor-pointer text-blue-900">
            VCA
          </span>
        </div>
        <div className="topRight flex items-center">
          <div className="topbarIconContainer relative cursor-pointer mx-3 text-gray-500">
            <NotificationsNone />
            <span className="topIconBadge w-4 h-4 absolute -top-1 right-0 bg-red text-white rounded-full flex items-center justify-center text-xs">
              2
            </span>
          </div>
          <div className="topbarIconContainer relative cursor-pointer mx-3 text-gray-500">
            <Language />
            <span className="topIconBadge w-4 h-4 absolute -top-1 right-0 bg-red text-white rounded-full flex items-center justify-center text-xs">
              2
            </span>
          </div>
          <div className="topbarIconContainer relative cursor-pointer mx-3 text-gray-500">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar w-10 h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
