import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Import Sidebar
import ManageQuestions from "./ManageQuestions"; // Import ManageQuestions
import ManageUsers from "./ManageUsers"; // Import ManageUsers
import Dashboard from "./Dashboard"; // Import Dashboard

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("dashboard"); // Default section

  // Function to dynamically render the selected component
  const renderContent = () => {
    switch (activeComponent) {
      case "manageQuestions":
        return <ManageQuestions />;
      case "manageUsers":
        return <ManageUsers />;
      case "dashboard":
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="admin-dashboard flex">
      {/* Sidebar passing setActiveComponent function */}
      <Sidebar setActiveComponent={setActiveComponent} />

      {/* Main content area */}
      <div className="main-content flex-1 p-4">
        {renderContent()} {/* Dynamic content rendering */}
      </div>
    </div>
  );
};

export default AdminDashboard;
