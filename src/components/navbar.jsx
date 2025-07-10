import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-black text-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold">SANJAY</h1>
      <div className="space-x-4">
        <Link to="home" smooth className="cursor-pointer">Home</Link>
        <Link to="about" smooth className="cursor-pointer">About</Link>
        <Link to="projects" smooth className="cursor-pointer">Projects</Link>
        <Link to="contact" smooth className="cursor-pointer">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
