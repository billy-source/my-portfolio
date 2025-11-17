import React from "react";

const skills = [
  "React.js", "JavaScript", "HTML/CSS", "Tailwind CSS",
  "Node.js", "Python", "Django", "Firebase", "Git & GitHub",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-10">
      <h2 className="text-4xl font-bold text-green-400 mb-8">⚡ Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {skills.map((skill) => (
          <div key={skill} className="bg-slate-800 p-4 rounded-lg text-center text-lg hover:bg-slate-700">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
