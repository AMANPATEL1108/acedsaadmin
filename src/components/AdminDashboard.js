import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const AdminDashboard = () => {
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = localStorage.getItem("currentPage");
    return savedPage || "dashboard";
  });
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Michael Johnson", email: "michael@example.com" },
  ]);
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  const removeUser = (userId, userName) => {
    setUsers(users.filter((user) => user.id !== userId));
    toast.error(`User ${userName} has been removed!`);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (newUser.name && newUser.email) {
      setUsers([
        ...users,
        { id: users.length + 1, name: newUser.name, email: newUser.email },
      ]);
      setNewUser({ name: "", email: "" });
      setShowAddUserForm(false);
      toast.success(`User ${newUser.name} has been added!`);
    }
  };

  const renderContent = () => {
    if (currentPage === "manageUsers") {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
          <button
            onClick={() => setShowAddUserForm(true)}
            className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add User
          </button>

          {showAddUserForm && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h3 className="text-xl font-semibold mb-4">Add New User</h3>
                <form onSubmit={handleAddUser}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      value={newUser.name}
                      onChange={(e) =>
                        setNewUser({ ...newUser, name: e.target.value })
                      }
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      value={newUser.email}
                      onChange={(e) =>
                        setNewUser({ ...newUser, email: e.target.value })
                      }
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      required
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setShowAddUserForm(false)}
                      className="mr-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                    >
                      Add User
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <table className="min-w-full table-auto bg-white shadow-md rounded-lg mt-6">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="px-6 py-4">{user.id}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => removeUser(user.id, user.name)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold">Welcome to Admin Dashboard</h2>
        <p>Manage DSA questions and users here.</p>
      </div>
    );
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="px-4 py-6">
          <h2 className="text-xl font-semibold text-center">Admin Dashboard</h2>
        </div>
        <nav className="flex-grow px-4 py-2">
          <button
            onClick={() => setCurrentPage("manageUsers")}
            className={`w-full text-left px-4 py-2 mt-2 ${
              currentPage === "manageUsers" ? "bg-gray-700" : "bg-gray-800"
            } hover:bg-gray-600 rounded-md`}
          >
            Manage Users
          </button>

          <button
            onClick={() => setCurrentPage("like")}
            className={`w-full text-left px-4 py-2 mt-2 ${
              currentPage === "like" ? "bg-gray-700" : "bg-gray-800"
            } hover:bg-gray-600 rounded-md`}
          >
            Like
          </button>

          <button
            onClick={() => setCurrentPage("about")}
            className={`w-full text-left px-4 py-2 mt-2 ${
              currentPage === "about" ? "bg-gray-700" : "bg-gray-800"
            } hover:bg-gray-600 rounded-md`}
          >
            About
          </button>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow bg-gray-100">{renderContent()}</div>

      {/* Toaster for notifications */}
      <Toaster />
    </div>
  );
};

export default AdminDashboard;
