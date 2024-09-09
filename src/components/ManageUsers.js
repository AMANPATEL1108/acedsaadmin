import React, { useState } from "react";
import toast from "react-hot-toast"; // Import toast for notifications

const ManageUsers = ({ users, removeUser, addUser }) => {
  const [showAddForm, setShowAddForm] = useState(false); // State to show or hide the form
  const [newUser, setNewUser] = useState({ name: "", email: "" }); // State for new user data

  const handleAddUser = (e) => {
    e.preventDefault();
    if (newUser.name && newUser.email) {
      addUser(newUser); // Call the addUser function passed as a prop
      setNewUser({ name: "", email: "" }); // Reset form fields
      setShowAddForm(false); // Close the modal
      // toast.success("User added successfully!"); // Show success notification
    } else {
      toast.error("Please fill in all fields."); // Show error if fields are empty
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Manage Users</h2>

      {/* Add User Button */}
      <button
        onClick={() => setShowAddForm(true)} // Show the form on click
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out"
      >
        Add User
      </button>

      {/* Add User Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
            <h3 className="text-2xl font-semibold mb-4">Add New User</h3>
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
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)} // Close form on cancel
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-300 ease-in-out"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Users Table */}
      <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-b hover:bg-gray-50 transition-colors duration-300 ease-in-out"
            >
              <td className="px-4 py-2">{user.id}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2 space-x-2">
                <button
                  onClick={() => removeUser(user.id, user.name)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300 ease-in-out"
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
};

export default ManageUsers;
