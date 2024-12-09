import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/Main_Logo.svg";
import blog from "../../assets/blog.svg";
import signin from "../../assets/signin.svg";
import { BsPersonCircle } from "react-icons/bs";
import ai from "../../assets/ai.svg";
import analytics from "../../assets/analytics.svg";
import collapse from "../../assets/collapse.svg";
// import Signup from "../../pages/Onboard/Signup";

const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSignedUp, setIsSignedUp] = useState(false);
  // const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login"); // Navigate to the login page when "Sign In" is clicked
  };

  const navigationItems = isSignedUp
    ? [
        { id: 1, label: "Dexter AI", icon: ai, path: "/" },
        { id: 2, label: "Analytics", icon: analytics, path: "/analytics" },
        { id: 3, label: "Blog Post", icon: blog, path: "/blog-post" },
      ]
    : [
        { id: 1, label: "Dexter AI", icon: ai, path: "/" },
        { id: 2, label: "Analytics", icon: analytics, path: "/analytics" },
        { id: 3, label: "Blog Post", icon: blog, path: "/blog-post" },
        { id: 4, label: "Sign In", icon: signin, path: "/login", onClick: handleLogin }, // Handle click for "Sign In"
      ];

  const onLinkClick = (item) => {
    if (item.path !== "/login") {
      navigate(item.path);
    } else {
      item.onClick && item.onClick(); // Call handleLogin if "Sign In" is clicked
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-64 bg-white h-full shadow-xl z-20 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      {/* Sidebar Header */}
      <div className="px-6 pt-8 flex items-center justify-between">
        <img src={logo} alt="Dexter AI Logo" className="w-auto" />
        <button className="md:hidden">
          <img src={collapse} alt="Collapse Sidebar" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-3 px-6 md:px-6 mt-6">
        <p className="text-secondary text-xs">ASSISTANT</p>
        {navigationItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center space-x-3 cursor-pointer py-2 px-2 rounded-md ${
              location.pathname === item.path
                ? "bg-hover text-white"
                : "hover:text-primary hover:bg-hover"
            }`}
            onClick={() => onLinkClick(item)}
          >
            <img
              src={item.icon}
              className="w-[10%]"
              alt={`${item.label} icon`}
            />
            <span className="text-tetiary font-medium text-sm md:text-base">
              {item.label}
            </span>
          </div>
        ))}
      </nav>

      {/* Conditional Sign-Up Section */}
      {!isSignedUp ? (
        <div className="mt-6 border-t px-6 md:px-6">
          <p className="text-secondary text-sm mt-4 mb-3">
            Create a free account, or go Pro to unlock automated blog creation
            and domain analytics!
          </p>
          <button
            className="px-4 py-2 text-primary border border-primary rounded-full w-full font-medium hover:bg-primary hover:text-white"
            onClick={handleSignup} // Open the modal on button click
          >
            Sign Up
          </button>
        </div>
      ) : (
        <div className="mt-6 border-t px-6 md:px-4">
          <p className="text-secondary my-4 text-sm font-semibold mb-2">
            RECENT CHATS
          </p>
        </div>
      )}

      {/* Footer */}
      {!isSignedUp && (
        <div className="px-6 mt-6 pb-6 border-t md:px-6">
          <ul className="space-y-2 text-secondary font-semibold mt-4">
            <li className="cursor-pointer hover:text-primary">Why My Dexter?</li>
            <li className="cursor-pointer hover:text-primary">FAQ</li>
            <li className="cursor-pointer hover:text-primary">
              Terms & Policies
            </li>
          </ul>
          <p className="mt-4 text-xs text-secondary">© 2024 My Dexter</p>
        </div>
      )}

      {/* Signup Modal */}
      {/* <Signup isOpen={isModalOpen} onClose={() => setModalOpen(false)} /> */}
    </div>
  );
};

export default Sidebar;
