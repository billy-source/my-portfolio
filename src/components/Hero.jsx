import React from "react";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold">Hello 👋, I'm <span className="text-green-400">Billy Kemboi</span></h1>
      <h2 className="text-2xl mt-3 text-gray-300 typing">Software Engineer | Web Developer | Tech Innovator</h2>

      <a 
        href="#projects" 
        className="mt-6 bg-green-500 px-6 py-3 rounded-md text-xl hover:bg-green-600 transition-all">
        View My Work
      </a>
    </section>
  );
};

export default Hero;
