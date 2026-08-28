import React from "react";
import data from "../../../data.json";
import { ArrowUpRight } from "lucide-react";

const Experience = () => {
  // Access the Experience array from JSON
  const experienceData = data.Experience?.[0]; // Get the first (and only) object

  return (
    <section
      id="experience"
      className="section-card rounded-[24px] border border-white/10 bg-[#121212] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 text-white"
    >
      {/* Header Section */}
      <div className="text-start mb-8 md:text-start xxs:text-center md:my-3 xxs:my-6">
        <h1 className="text-4xl font-bold uppercase leading-none text-white sm:text-5xl xl:text-7xl">
          {experienceData.exp}
        </h1>
        <h1 className="mt-1 text-4xl font-bold uppercase leading-none text-[#B6B4BD] sm:text-5xl xl:text-7xl">
          EXPERIENCE
        </h1>
      </div>

      {/* Experience Cards */}
      <div className="flex w-full flex-col gap-6">
        {experienceData.items.map((exp, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-[24px] border border-white/10 bg-[#121212] p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-[#171717]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

            <ArrowUpRight
              className="absolute top-6 right-6 text-[#8e8e8e] group-hover:text-white transition"
              size={20}
            />

            <div className="relative">
              <p className="text-sm uppercase tracking-[0.3em] text-orange-400">{exp.date}</p>
              <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
                {exp.title}
              </h3>

              <ul className="mt-4 list-disc pl-5 text-[#9d9d9d] text-base md:text-lg leading-8 space-y-2">
                {exp.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
