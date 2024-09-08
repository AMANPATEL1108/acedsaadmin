import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import ManageQuestions from "./ManageQuestions";
import ManageUsers from "./ManageUsers";

const AdminDashboard = () => {
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = localStorage.getItem("currentPage");
    return savedPage || "dashboard";
  });

  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ]);

  const removeUser = (userId, userName) => {
    setUsers(users.filter((user) => user.id !== userId));
    toast.error(`User ${userName} has been removed!`);
  };

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  const renderContent = () => {
    if (currentPage === "manageDSA") {
      return <ManageQuestions />;
    }

    if (currentPage === "manageUsers") {
      return <ManageUsers users={users} removeUser={removeUser} />;
    }

    return <div>Dashboard Content</div>;
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white shadow-md">
        <nav className="px-6 py-4">
          <button
            onClick={() => setCurrentPage("dashboard")}
            className={`w-full text-left px-4 py-3 mt-2 rounded-md ${
              currentPage === "dashboard" ? "bg-gray-700" : "hover:bg-gray-600"
            } transition-colors duration-300 ease-in-out`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setCurrentPage("manageDSA")}
            className={`w-full text-left px-4 py-3 mt-2 rounded-md ${
              currentPage === "manageDSA" ? "bg-gray-700" : "hover:bg-gray-600"
            } transition-colors duration-300 ease-in-out`}
          >
            Manage DSA Questions
          </button>
          <button
            onClick={() => setCurrentPage("manageUsers")}
            className={`w-full text-left px-4 py-3 mt-2 rounded-md ${
              currentPage === "manageUsers"
                ? "bg-gray-700"
                : "hover:bg-gray-600"
            } transition-colors duration-300 ease-in-out`}
          >
            Manage Users
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Toaster position="top-right" />
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
