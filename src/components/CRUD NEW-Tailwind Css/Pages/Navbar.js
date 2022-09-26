import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-16 px-10 py-2 bg-blue-600">
      <h1 className="text-3xl font-semibold text-white">Crud</h1>
      <Link
        to="/add-user"
        className="flex justify-center w-48 h-12 py-2 text-xl font-semibold text-center text-blue-500 bg-white rounded-1 text-decoration-none"
      >
        Add Users
      </Link>
    </div>
  );
};

export default Navbar;
