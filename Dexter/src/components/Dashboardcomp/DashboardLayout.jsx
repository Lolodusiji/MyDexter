import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1">
        <Sidebar />

        <div className="flex-grow duration-300 bg-[#F8F8F8] pt-[1rem] md:ml-[15rem] min-h-screen ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
