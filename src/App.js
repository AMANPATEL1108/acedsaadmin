import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import ManageQuestions from "./components/ManageQuestions"; // Corrected component name

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/manage-questions" element={<ManageQuestions />} />{" "}
        {/* Corrected route */}
      </Routes>
    </Router>
  );
}

export default App;
