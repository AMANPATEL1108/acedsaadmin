import React from "react";

const Sidebar = ({ setActiveComponent }) => {
  return (
    <div className="sidebar bg-gray-800 text-white w-64 h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-4">
        <li>
          <button
            onClick={() => setActiveComponent("dashboard")}
            className="w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
          >
            Dashboard
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveComponent("manageQuestions")}
            className="w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
          >
            Manage Questions
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveComponent("manageUsers")}
            className="w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
          >
            Manage Users
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
