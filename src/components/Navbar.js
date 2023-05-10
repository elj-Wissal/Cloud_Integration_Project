import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router for routing
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter from react-router

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Use useState hook to manage state for isOpen

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle isOpen state when button is clicked
  };

  return (
    <Router> {/* Wrap the Navbar component with BrowserRouter */}
      
    </Router>
  );
};

export default Navbar;
