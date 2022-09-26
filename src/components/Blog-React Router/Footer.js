import { isToday } from "date-fns";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const today=new Date();
  return (
    <footer className="p-2 rounded-lg shadow bg-sky-500 bg md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-stone-800 sm:text-center dark:text-gray-800">
        Copyright &copy;  {today.getFullYear()}.   All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-stone-800 dark:text-gray-800 sm:mt-0">
        <li>
          <NavLink to="/" className="mr-4 hover:underline md:mr-6 text-neutral-900">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/post" className="mr-4 hover:underline md:mr-6 text-neutral-900">
            Post
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="mr-4 hover:underline md:mr-6 text-neutral-900">
           About
          </NavLink>
        </li>
       
      </ul>
    </footer>
  );
};

export default Footer;
