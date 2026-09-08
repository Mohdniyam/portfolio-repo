import { useState } from "react";
import { Plus } from "lucide-react";
import SectionHeading from "../../components/SectionHeading";
const items = [
  ["What kinds of projects do you take on?", "Custom SaaS and internal tools, Shopify builds, e-commerce systems, API integrations and workflow automation. I’m best suited to projects where software needs to solve a specific business or operational problem."],
  ["Can you work with an existing codebase?", "Yes. I can audit the current product, understand its architecture and constraints, then improve, extend or stabilize it without unnecessary rewrites."],
  ["Do you build custom Shopify functionality?", "Yes—custom storefront experiences, theme work, Shopify APIs, product and inventory synchronization, webhooks and integrations with operational systems."],
  ["Can you integrate third-party platforms and APIs?", "Yes. My work includes commerce, payment, logistics and cloud integrations, with attention to authentication, retries, observability and data consistency."],
  ["Do you provide ongoing development and maintenance?", "Yes. Engagements can include post-launch stabilization, ongoing product development, maintenance and iterative improvements."],
  ["How does a new project start?", "We begin with a short conversation about the business problem, users, existing systems and desired outcome. I then propose a practical next step, scope and delivery approach."],
];
export default function FAQ() { const [open, setOpen] = useState(0); return <section className="section-pad"><div className="site-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"><SectionHeading eyebrow="FAQ" title="A few things you may want to know." /><div className="border-t border-white/10">{items.map(([q,a],i) => <div key={q} className="border-b border-white/10"><h3><button type="button" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} aria-controls={`faq-${i}`} className="flex w-full items-center justify-between gap-5 py-6 text-left text-base font-medium sm:text-lg">{q}<Plus className={`shrink-0 text-accent transition ${open === i ? "rotate-45" : ""}`} size={20} /></button></h3><div id={`faq-${i}`} hidden={open !== i} className="pb-6 pr-10 text-sm leading-7 text-white/45 sm:text-base sm:leading-8">{a}</div></div>)}</div></div></section>; }
