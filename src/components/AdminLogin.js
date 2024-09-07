import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (email === "admin@example.com" && password === "admin123") {
      // Redirect to the admin dashboard after successful login
      navigate("/admin/dashboard");
    } else {
      setError("Invalid login credentials");
    }
  };

  return (
    <section className="h-screen bg-blue-600 flex items-center justify-center">
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-md">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-6 text-center">Sign in</h3>

              <form onSubmit={handleSubmit}>
                {/* Email Input */}
                <div className="mb-4 text-left">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="typeEmailX-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="typeEmailX-2"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Password Input */}
                <div className="mb-4 text-left">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="typePasswordX-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="typePasswordX-2"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {/* Checkbox */}
                <div className="flex items-center mb-4">
                  <input
                    className="form-check-input h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    type="checkbox"
                    id="form1Example3"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label className="ml-2 block text-sm text-gray-900" htmlFor="form1Example3">
                    Remember password
                  </label>
                </div>

                {/* Error Message */}
                {error && <div className="text-red-500 mb-4">{error}</div>}

                {/* Login Button */}
                <button
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
