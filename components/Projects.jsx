"use client";
import { useState } from 'react';
import { IoCodeSlash } from "react-icons/io5";
import { FaRegEye,FaGithub } from "react-icons/fa";

const Projects = ({ projectData }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projectData.projects
    : projectData.projects.filter(project => project.category === selectedCategory);

  return (
    <div className="w-auto xl:w-full">
      <div className="flex justify-center space-x-4 my-4 pb-10">
        {projectData.categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg text-lg border border-transparent hover:border-accent ${selectedCategory === category ? 'bg-accent text-black font-semibold' : 'bg-[#27272c] text-white/60 '}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
    return (
        <div className="relative group overflow-hidden rounded-xl shadow-white shadow-sm flex flex-col h-full">
        {/* Image Container */}
        <div className="relative overflow-hidden h-80 rounded-lg p-1"> {/* Increase the height here */}
            <img
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105 rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent text-2xl p-2">
                <FaRegEye />
                </a>
                <a href={project.githublink} target="_blank" rel="noopener noreferrer" className="text-accent text-2xl p-2">
                <FaGithub />
                </a>
            </div>
        </div>

  
        {/* Title and Description Container */}
        <div className="flex flex-col justify-center bg-opacity-50 pl-4 pr-4 rounded-lg w-full h-1/2">
            <h3 className="text-accent text-2xl font-bold border-b border-white/30 pb-1 -mt-4">
                {project.title}

            </h3>
          <p className="text-white/60 mt-2 text-base">{project.description}</p>
        </div>
      </div>

    );
  };  

export default Projects;
