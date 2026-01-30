
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="flex items-center gap-8 px-6 py-3 bg-gray-900/50 backdrop-blur-xl rounded-full border border-gray-800 shadow-2xl">
        <a href="#home" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Home</a>
        <a href="#skills" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Skills</a>
        <a href="#projects" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Projects</a>
        <a href="#contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
