import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-slate-900 fixed w-full shadow-lg z-50">
      <h1 className="text-2xl font-bold text-green-400">Billy Kemboi</h1>
      <ul className="flex space-x-6 text-lg">
        <li><a href="#home" className="hover:text-green-400">Home</a></li>
        <li><a href="#about" className="hover:text-green-400">About</a></li>
        <li><a href="#skills" className="hover:text-green-400">Skills</a></li>
        <li><a href="#projects" className="hover:text-green-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
