import React from "react";

const ManageUsers = ({ users, removeUser }) => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Manage Users</h2>

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
              <td className="px-4 py-2">
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
