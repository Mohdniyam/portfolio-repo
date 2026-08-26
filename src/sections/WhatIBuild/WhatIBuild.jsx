import React from "react";
import data from "../../../data.json";

const WhatIBuild = () => {
  const focusAreas = data.WhatIBuild || [];

  return (
    <section id="focus" className="section-card rounded-[24px] border border-white/10 bg-[#121212] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 text-white">
      <div className="mb-8 text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.35em] text-orange-400">What I Build</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white">
          Product systems that support growth, reliability and operational clarity.
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {focusAreas.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-[#111111] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
          >
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#b7b2b2]">{item.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-[#d7d4d4]">
              {item.points.map((point, pointIndex) => (
                <li key={pointIndex} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIBuild;
