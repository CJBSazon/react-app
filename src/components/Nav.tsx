import React from 'react';

function BasicExample() {
  return (
    <nav className="bg-orange-400 fixed w-full">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white text-base font-bold">Home</a>
          <a href="#services" className="text-white text-base font-bold">Services</a>
          <a href="#about" className="text-white text-base font-bold">About</a>
          <a href="#menu" className="text-white text-base font-bold">Menu</a>
        </div>
        <a href="#home" className="text-2xl font-bold">
          <img className="w-16 rounded-full" src="/src/assets/img/logo.jpg" alt="Mabsi Soy" />
        </a>
        <div className="hidden md:flex space-x-4">
          <a href="#sign-in" className="bg-white text-black px-4 py-2 rounded-md">Sign In</a>
          <a href="#sign-up" className="bg-black text-white px-4 py-2 rounded-md">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

export default BasicExample;