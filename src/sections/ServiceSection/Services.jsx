import React from "react";
import data from "../../../data.json";

const Services = () => {
  const serviceData = data.ServiceSection?.[0]; // Access the first item safely

  if (!serviceData) {
    return (
      <p className="text-center text-gray-400 py-10">
        No service data available.
      </p>
    );
  }

  // Extract dynamic data
  const { description, yearOfExperience, projectCompleted } = serviceData;

  // Extract numbers only (for display like +12 → +2)
  // const experienceNumber = yearOfExperience.replace(/[^\d.]/g, "");
  // const projectNumber = projectCompleted.replace(/[^\d.]/g, "");

  return (
    <section id="home" className="section-card rounded-[18px] border border-white/10 bg-[#121212] px-5 py-8 sm:rounded-[24px] sm:px-8 sm:py-10 lg:px-10">
      <div className="flex flex-col gap-6 md:gap-8">
        <div className="text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-400">Software Engineer</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white">
            Building reliable software systems for product growth.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#9d9a9a] sm:text-base">
            {description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#171717] p-5">
            <h3 className="text-[40px] font-semibold text-white sm:text-[46px]">
              {yearOfExperience}
            </h3>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#998f8f]">
              Years of experience
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#171717] p-5">
            <h3 className="text-[40px] font-semibold text-white sm:text-[46px]">
              {projectCompleted}
            </h3>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#998f8f]">
              Projects completed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
