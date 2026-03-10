import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Predictions from "./pages/Predictions";
import Reports from "./pages/Reports";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (

    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/predictions" element={<Predictions />} />

        <Route path="/reports" element={<Reports />} />

      </Routes>

    </Router>

  );
}

export default App;