import React from "react";

const projects = [
  {
    title: "Hotel Management System",
    description: "A full system with admin & customer dashboard, MPESA payments, and room booking.",
  },
  {
    title: "Agro Yield Optimizer",
    description: "AI-powered smart farming system with irrigation scheduling & weather integration.",
  },
  {
    title: "Ace Liberty Academy School Website",
    description: "Modern, responsive website for a private school with green & white branding.",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-10">
      <h2 className="text-4xl font-bold text-green-400 mb-8">🚀 Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div key={p.title} className="bg-slate-800 p-5 rounded-lg shadow hover:bg-slate-700">
            <h3 className="text-2xl font-bold">{p.title}</h3>
            <p className="mt-3 text-gray-300">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
