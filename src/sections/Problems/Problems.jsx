import { createElement } from "react";
import { ArrowRight, Boxes, RefreshCw, Workflow } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
const problems = [
  { icon: Boxes, title: "Your tools do not talk to each other", copy: "Connect storefronts, operations, logistics, payments and reporting into one reliable workflow." },
  { icon: RefreshCw, title: "Manual work is slowing the team down", copy: "Turn repetitive handoffs and spreadsheet-led processes into dependable automation." },
  { icon: Workflow, title: "Off-the-shelf software no longer fits", copy: "Build a focused product around the way your business actually sells, serves and operates." },
];
export default function Problems() {
  return <section className="section-pad"><div className="site-container">
    <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20"><SectionHeading eyebrow="Where I add value" title="When growth exposes the gaps in your software." copy="I help translate operational friction into a clear product, integration or automation plan." />
      <div className="divide-y divide-white/10 border-y border-white/10">{problems.map(({ icon, title, copy }) => <article key={title} className="group grid gap-5 py-7 sm:grid-cols-[48px_1fr_auto] sm:items-start"><span className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-accent">{createElement(icon, { size: 19 })}</span><div><h3 className="text-lg font-medium">{title}</h3><p className="mt-2 max-w-xl text-sm leading-7 text-white/45">{copy}</p></div><ArrowRight className="hidden text-white/20 transition group-hover:translate-x-1 group-hover:text-accent sm:block" size={18} /></article>)}</div>
    </div>
  </div></section>;
}
