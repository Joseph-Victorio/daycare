import React from "react";
import Sidebar from "./Sidebar"; 

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100 flex-col md:flex-row">
   
      <Sidebar />

      <div className="flex-1 p-6 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
