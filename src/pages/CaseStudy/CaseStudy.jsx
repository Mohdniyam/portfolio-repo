import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Layers3,
  Target,
  Workflow,
} from "lucide-react";
import data from "../../../data.json";

const SectionHeading = ({ eyebrow, title }) => (
  <div className="mb-7">
    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
      {eyebrow}
    </p>
    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
      {title}
    </h2>
  </div>
);

const CaseStudy = () => {
  const slug = window.location.hash.replace("#/case-studies/", "").split("?")[0];
  const caseData = data.CaseStudies?.find((item) => item.slug === slug);

  if (!caseData) {
    return (
      <main className="mx-auto min-h-screen w-[1180px] px-8 py-20">
        <p className="text-sm uppercase tracking-[0.3em] text-orange-400">404</p>
        <h1 className="mt-4 text-5xl font-semibold text-white">Case study not found.</h1>
        <p className="mt-4 text-lg text-gray-400">
          This project may have moved or the address may be incorrect.
        </p>
        <a href="#projects" className="mt-8 inline-flex items-center gap-2 text-orange-300">
          <ArrowLeft size={18} /> Back to projects
        </a>
      </main>
    );
  }

  const otherProjects = (data.CaseStudies || []).filter(
    (item) => item.slug !== caseData.slug
  );

  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d0d0d]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-[1180px] items-center justify-between px-8">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-white"
          >
            <ArrowLeft size={18} /> Back to portfolio
          </a>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">
            Project Case Study
          </p>
        </div>
      </header>

      <article>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.18),transparent_38%)]" />
          <div className="relative mx-auto grid w-[1180px] grid-cols-[1.2fr_0.8fr] gap-16 px-8 py-24">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-orange-400">
                {caseData.period} · {caseData.category}
              </p>
              <h1 className="mt-6 text-6xl font-semibold leading-[1.08] tracking-[-0.04em] text-white">
                {caseData.title}
              </h1>
              <p className="mt-7 max-w-3xl text-xl leading-9 text-[#b8b8b8]">
                {caseData.overview}
              </p>
              <div className="mt-9 flex items-center gap-4">
                {caseData.projectURL && (
                  <a
                    href={caseData.projectURL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                  >
                    View project <ArrowUpRight size={17} />
                  </a>
                )}
                <a
                  href="#contact"
                  className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-gray-200 transition hover:bg-white/10"
                >
                  Discuss a project
                </a>
              </div>
            </div>

            <aside className="self-end rounded-[28px] border border-white/10 bg-white/[0.04] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <dl className="space-y-6">
                <div>
                  <dt className="text-xs uppercase tracking-[0.25em] text-gray-500">My role</dt>
                  <dd className="mt-2 text-lg font-medium text-white">{caseData.role}</dd>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.25em] text-gray-500">Platform</dt>
                  <dd className="mt-2 text-lg font-medium text-white">{caseData.platform}</dd>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <dt className="text-xs uppercase tracking-[0.25em] text-gray-500">Core stack</dt>
                  <dd className="mt-3 flex flex-wrap gap-2">
                    {caseData.stack.map((technology) => (
                      <span key={technology} className="rounded-full bg-white/[0.07] px-3 py-1.5 text-xs text-gray-300">
                        {technology}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <div className="mx-auto w-[1180px] px-8 py-20">
          <section className="grid grid-cols-[0.8fr_1.2fr] gap-20 border-b border-white/10 pb-20">
            <SectionHeading eyebrow="Context" title="The problem to solve" />
            <div>
              <p className="text-lg leading-8 text-[#c1c1c1]">{caseData.challenge}</p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {caseData.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-2xl border border-white/10 bg-[#141414] p-5">
                    <CheckCircle2 className="text-orange-400" size={21} />
                    <p className="mt-4 text-sm leading-6 text-gray-300">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-b border-white/10 py-20">
            <SectionHeading eyebrow="Approach" title="How I designed the solution" />
            <div className="grid grid-cols-3 gap-5">
              {caseData.approach.map((item, index) => {
                const icons = [Target, Layers3, Workflow];
                const Icon = icons[index % icons.length];
                return (
                  <div key={item.title} className="rounded-[24px] border border-white/10 bg-[#141414] p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                      <Icon size={22} />
                    </div>
                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                      0{index + 1}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-400">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="grid grid-cols-[0.8fr_1.2fr] gap-20 border-b border-white/10 py-20">
            <SectionHeading eyebrow="Engineering" title="Key implementation decisions" />
            <div className="space-y-4">
              {caseData.implementation.map((item, index) => (
                <div key={item.title} className="grid grid-cols-[48px_1fr] gap-5 rounded-2xl border border-white/10 bg-[#141414] p-6">
                  <span className="text-2xl font-semibold text-orange-400">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="py-20">
            <div className="rounded-[32px] border border-orange-400/20 bg-gradient-to-br from-orange-500/10 via-[#151515] to-[#111111] p-10">
              <SectionHeading eyebrow="Outcome" title="What the project delivered" />
              <div className="grid grid-cols-3 gap-5">
                {caseData.outcomes.map((outcome) => (
                  <div key={outcome.title} className="rounded-2xl bg-black/25 p-6">
                    <p className="text-2xl font-semibold text-white">{outcome.title}</p>
                    <p className="mt-3 text-sm leading-6 text-gray-400">{outcome.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t border-white/10 py-20">
            <SectionHeading eyebrow="More work" title="Explore another case study" />
            <div className="grid grid-cols-2 gap-5">
              {otherProjects.map((project) => (
                <a
                  key={project.slug}
                  href={`#/case-studies/${project.slug}`}
                  className="group rounded-[24px] border border-white/10 bg-[#141414] p-7 transition hover:border-orange-400/40 hover:bg-[#181818]"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-orange-400">{project.category}</p>
                  <div className="mt-4 flex items-start justify-between gap-6">
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <ArrowUpRight className="shrink-0 text-gray-500 transition group-hover:text-orange-400" />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-gray-400">{project.overview}</p>
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
};

export default CaseStudy;
