import React from "react";

const principles = [
  "Design for failure and recovery",
  "Treat data consistency as a first-class concern",
  "Make operations idempotent when events can repeat",
  "Build secure-by-default APIs and workflows",
  "Optimize for observability, maintainability and cost",
];

const EngineeringPrinciples = () => {
  return (
    <section id="principles" className="section-card rounded-[24px] border border-white/10 bg-[#121212] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 text-white">
      <div className="mb-8 md:text-start xxs:text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-orange-400">Engineering Principles</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white">
          A pragmatic approach to building reliable software products.
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {principles.map((principle, index) => (
          <div key={index} className="rounded-2xl border border-white/10 bg-[#111111] p-5 text-sm leading-7 text-[#d3cdcd]">
            {principle}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EngineeringPrinciples;
