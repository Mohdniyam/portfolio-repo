import { ArrowDownRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
const proof = ["3.5+ years engineering experience", "Production systems", "End-to-end delivery"];
export default function Hero() {
  return <section id="top" className="relative border-b border-white/[0.08] pt-[72px]">
    <div className="grid-texture absolute inset-0 opacity-40" />
    <div className="site-container relative grid min-h-[calc(100svh-72px)] items-center gap-14 py-20 lg:grid-cols-[1fr_340px] lg:py-24 xl:gap-24">
      <div>
        <p className="eyebrow">Software engineering <span>•</span> Shopify <span>•</span> Automation</p>
        <h1 className="mt-7 max-w-[1000px] text-[clamp(3rem,7.5vw,7.3rem)] font-medium leading-[0.94] tracking-[-0.065em]">I build software that helps businesses <span className="text-accent">sell, operate &amp; automate.</span></h1>
        <p className="mt-8 max-w-2xl text-base leading-8 text-white/55 sm:text-lg sm:leading-9">I partner with startups, e-commerce brands and growing businesses to build custom software, Shopify experiences and operational automation—from idea to production.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#contact" className="button button-primary justify-center">Discuss your project <ArrowUpRight size={17} /></a><a href="#work" className="button button-secondary justify-center">Explore my work <ArrowDownRight size={17} /></a></div>
      </div>
      <aside className="self-end border-l border-white/10 pl-6 lg:mb-4 lg:pl-8" aria-label="Professional summary">
        <p className="text-xs uppercase leading-6 tracking-[0.22em] text-white/35">Software engineer &amp;<br />development partner</p><p className="mt-5 text-2xl font-medium leading-snug tracking-[-0.03em]">Mohd Niya Mul Haque</p>
        <div className="mt-8 space-y-4">{proof.map((item) => <p key={item} className="flex items-center gap-3 text-sm text-white/55"><CheckCircle2 className="text-accent" size={16} />{item}</p>)}</div>
      </aside>
    </div>
  </section>;
}
