import React, { useState } from "react";
import data from "../../../data.json"; // adjust the path as needed
import { ArrowUpRight } from "lucide-react";

const Project = () => {
  // Get projects from the JSON file
  const projects = data.Projects || [];
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="section-card rounded-[24px] border border-white/10 bg-[#121212] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 text-white">
      {/* Heading */}
      <div className="flex flex-col justify-start mb-10 md:text-start xxs:text-center md:my-3 xxs:my-6">
        <h1 className="text-4xl font-bold uppercase leading-none text-white sm:text-5xl xl:text-7xl">
          Recent
        </h1>
        <h1 className="mt-1 text-4xl font-bold uppercase leading-none text-[#B6B4BD] sm:text-5xl xl:text-7xl">
          Projects
        </h1>
      </div>

      {/* Project Cards */}
      <div className="flex w-full flex-col gap-6">
        {projects.map((project, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={index}
              onClick={() => toggleExpand(index)}
              className="relative group overflow-hidden rounded-[24px] border border-white/10 bg-[#121212] p-6 md:p-8 flex flex-col sm:flex-row items-start gap-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:bg-[#171717]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

              <ArrowUpRight
                className="absolute top-6 right-6 text-[#8e8e8e] group-hover:text-white transition"
                size={20}
              />

              <img
                src={project.image}
                alt={project.title}
                className="relative w-24 h-16 sm:w-28 sm:h-20 md:w-32 md:h-24 rounded-xl object-cover bg-white/5 p-2 shadow-sm"
              />

              <div className="relative flex-1">
                <a
                  href={project.projectURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-orange-300">
                    {project.title}
                  </h3>
                </a>

                <p
                  className={`text-[#9d9d9d] text-sm md:text-base mt-3 leading-7 overflow-hidden transition-all duration-500 ease-out ${
                    isExpanded ? "max-h-96" : "max-h-16"
                  }`}
                >
                  {project.description}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={`#/case-studies/${project.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 px-4 py-2 text-sm font-medium text-orange-300 transition hover:border-orange-400 hover:bg-orange-400/10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Read Case Study <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
