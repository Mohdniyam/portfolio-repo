import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [["Services", "services"], ["Work", "work"], ["Process", "process"], ["About", "about"], ["Insights", "principles"]];

export default function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-ink/85 backdrop-blur-xl">
      <nav className="site-container flex h-[72px] items-center justify-between" aria-label="Main navigation">
        <a href="#top" className="group flex items-center gap-3" aria-label="Mohd Niya Mul Haque, home">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-xs font-semibold group-hover:border-accent/50">MN</span>
          <span className="hidden text-sm font-medium text-white/85 sm:block">Mohd Niya Mul Haque</span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, id]) => <a key={id} href={`#${id}`} className="nav-link">{label}</a>)}
        </div>
        <a href="#contact" className="button button-primary hidden sm:inline-flex">Discuss a project <ArrowUpRight size={16} /></a>
        <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 sm:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X size={19} /> : <Menu size={19} />}</button>
      </nav>
      {open && <div id="mobile-menu" className="border-t border-white/10 bg-[#0d0e0e] px-5 py-5 sm:hidden"><div className="flex flex-col">
        {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 text-base text-white/75">{label}</a>)}
        <a href="#contact" onClick={() => setOpen(false)} className="button button-primary mt-5 justify-center">Discuss a project <ArrowUpRight size={16} /></a>
      </div></div>}
    </header>
  );
}
