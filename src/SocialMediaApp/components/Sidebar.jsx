// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-blue-200 w-64 p-4 h-full">
      <h2 className="text-lg font-bold mb-4">Social Media Navigation</h2>
      <ul>
        <li className="mb-2">
          <Link
            to="/social"
            className="block p-2 bg-gray-300 rounded hover:bg-blue-100"
          >
            Show Posts
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/social/create"
            className="block p-2 bg-gray-300 rounded hover:bg-blue-100"
          >
            Create Post
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
