import React, { createElement } from "react";
import data from "../../../data.json";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Layers3,
  Users,
} from "lucide-react";

const valueIcons = [BriefcaseBusiness, Code2, Users];

const FeaturedExperience = ({ experience }) => (
  <article className="relative overflow-hidden rounded-[28px] border border-orange-400/20 bg-[#151413] shadow-[0_30px_80px_rgba(0,0,0,.28)]">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,.17),transparent_38%),radial-gradient(circle_at_90%_75%,rgba(197,255,65,.07),transparent_28%)]" />
    <div className="relative p-5 sm:p-7 lg:p-9">
      <div className="flex flex-col gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-orange-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              Current role
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
              {experience.date}
            </span>
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-orange-400">
            {experience.company}
          </p>
          <h3 className="mt-2 max-w-3xl text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
            {experience.title}
          </h3>
          <p className="mt-3 text-xs font-medium text-white/40 sm:text-sm">
            {experience.engagement}
          </p>
        </div>

        <a
          href={`#/case-studies/${experience.caseStudySlug}`}
          className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/12 px-4 py-2.5 text-xs font-semibold text-white/70 transition hover:border-orange-400/40 hover:bg-orange-400/10 hover:text-white"
        >
          Full case study
          <ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      <p className="mt-7 max-w-4xl text-base leading-8 text-[#c9c4c1] sm:text-lg sm:leading-9">
        {experience.summary}
      </p>

      <div className="mt-8 grid gap-3 xl:grid-cols-3">
        {experience.value.map((item, index) => (
          <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
              {createElement(valueIcons[index], { size: 19 })}
            </div>
            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
              {item.label}
            </p>
            <h4 className="mt-2 text-base font-semibold text-white">{item.title}</h4>
            <p className="mt-3 text-sm leading-6 text-white/45">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-9 grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
            Selected delivery
          </p>
          <ul className="mt-5 space-y-4">
            {experience.responsibilities.map((responsibility) => (
              <li key={responsibility} className="grid grid-cols-[20px_minmax(0,1fr)] gap-3 text-sm leading-7 text-[#aaa5a2] sm:text-base">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#c5ff41]/10 text-[#c5ff41]">
                  <Check size={12} />
                </span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-2xl border border-white/10 bg-[#10100f] p-5">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            <Layers3 size={15} className="text-orange-400" />
            Scope signals
          </p>
          <div className="mt-5 space-y-3">
            {experience.signals.map((signal) => (
              <p key={signal} className="border-b border-white/8 pb-3 text-sm font-medium text-white/75 last:border-0 last:pb-0">
                {signal}
              </p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {experience.tech.map((technology) => (
              <span key={technology} className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-white/45">
                {technology}
              </span>
            ))}
          </div>
        </aside>
      </div>

      <div className="mt-9 flex flex-col gap-4 rounded-2xl border border-[#c5ff41]/15 bg-[#c5ff41]/[0.045] p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Building a SaaS, marketplace, or commerce platform?</p>
          <p className="mt-1 text-xs leading-5 text-white/40">I can help turn complex workflows into a reliable product and delivery plan.</p>
        </div>
        <a href="#contact" className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#c5ff41] px-4 py-2.5 text-xs font-bold text-[#151312] transition hover:bg-white">
          Start a conversation <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  </article>
);

const StandardExperience = ({ experience }) => (
  <article className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-[#151515] p-5 transition hover:border-white/20 hover:bg-[#181818] sm:p-7">
    <ArrowUpRight className="absolute right-5 top-5 text-white/25 transition group-hover:text-orange-400 sm:right-7 sm:top-7" size={18} />
    <p className="pr-8 text-[10px] font-semibold uppercase tracking-[0.24em] text-orange-400">{experience.date}</p>
    <h3 className="mt-3 pr-8 text-xl font-semibold text-white sm:text-2xl">{experience.title}</h3>
    <ul className="mt-5 space-y-3 text-sm leading-7 text-white/45">
      {experience.responsibilities.map((responsibility) => (
        <li key={responsibility} className="grid grid-cols-[6px_minmax(0,1fr)] gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-white/30" />
          <span>{responsibility}</span>
        </li>
      ))}
    </ul>
  </article>
);

const Experience = () => {
  const experienceData = data.Experience?.[0];
  const featuredExperience = experienceData.items.find((item) => item.featured);
  const earlierExperience = experienceData.items.filter((item) => !item.featured);

  return (
    <section
      id="experience"
      className="section-card rounded-[24px] border border-white/10 bg-[#121212] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 text-white"
    >
      <div className="mb-9">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-400">Selected experience</p>
        <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
          Engineering products that move businesses forward.
        </h2>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
          {experienceData.exp.toLowerCase()} building commerce and SaaS systems—from product architecture and integrations to team direction and production delivery.
        </p>
      </div>

      {featuredExperience && <FeaturedExperience experience={featuredExperience} />}

      {earlierExperience.length > 0 && (
        <div className="mt-12">
          <div className="mb-5 flex items-center gap-4">
            <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.22em] text-white/35">Earlier experience</p>
            <span className="h-px w-full bg-white/10" />
          </div>
          <div className="grid gap-4 xl:grid-cols-2">
            {earlierExperience.map((experience) => (
              <StandardExperience key={experience.title} experience={experience} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
