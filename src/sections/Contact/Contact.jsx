import { useRef, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { toast } from "react-toastify";
import data from "../../../data.json";
import { getCampaignParams, trackEvent } from "../../utils/analytics";
const endpoint = "https://script.google.com/macros/s/AKfycbzeWGEQ7kbweXj18tHRckBz-ikhuxS4SiuBbwdVpM1FZh09h-nHbe6PhR2cztn6h6Ou/exec";
const initial = { name: "", email: "", projectType: "", budget: "", message: "" };
const projectTypes = ["Custom Software", "Shopify Development", "Website / E-commerce", "Automation / Integration", "Existing Product Improvement", "Not Sure"];
const budgets = ["Under ₹50k", "₹50k – ₹1.5L", "₹1.5L – ₹5L", "₹5L+", "Let's discuss"];
export default function ContactForm({ sourcePage = "homepage", defaultProjectType = "", audience = "" }) {
  const [form, setForm] = useState({ ...initial, projectType: defaultProjectType });
  const [loading, setLoading] = useState(false);
  const started = useRef(false);
  const update = ({ target }) => {
    if (!started.current && sourcePage.startsWith("/solutions/")) { started.current = true; trackEvent("solution_form_start", { landing_page: sourcePage, audience }); }
    setForm((current) => ({ ...current, [target.name]: target.value }));
  };
  const submit = async (event) => {
    event.preventDefault(); setLoading(true);
    try {
      const response = await fetch(endpoint, { method: "POST", body: JSON.stringify({ ...form, subject: form.projectType, landing_page: sourcePage, audience, ...getCampaignParams() }) });
      if (!response.ok) throw new Error("Submission failed");
      if (sourcePage.startsWith("/solutions/")) trackEvent("solution_form_submit", { landing_page: sourcePage, audience });
      toast.success("Thanks — your project details have been sent."); setForm({ ...initial, projectType: defaultProjectType });
    } catch (error) {
      console.error("Error sending project inquiry:", error);
      toast.error("Your message could not be sent. Please email me directly.");
    } finally { setLoading(false); }
  };
  const email = data.Contact[0].email;
  return <section id="contact" className="section-pad"><div className="site-container"><div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#141615]"><div className="grid lg:grid-cols-[0.8fr_1.2fr]">
    <div className="relative border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-14"><div className="grid-texture absolute inset-0 opacity-20" /><div className="relative"><p className="eyebrow">Start a conversation</p><h2 className="mt-6 text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[1] tracking-[-0.055em]">Have a software problem worth solving?</h2><p className="mt-6 max-w-lg text-base leading-8 text-white/45">Tell me what you’re building, what isn’t working, or what you’d like to automate. I’ll reply with useful next steps.</p><a href={`mailto:${email}`} className="mt-10 inline-flex items-center gap-3 text-sm text-white/60 hover:text-white"><Mail size={17} className="text-accent" />{email}</a><p className="mt-5 text-xs text-white/30">Typically replies within 1–2 business days.</p></div></div>
    <form onSubmit={submit} className="grid gap-6 p-7 sm:grid-cols-2 sm:p-10 lg:p-14"><label className="field"><span>Name *</span><input name="name" value={form.name} onChange={update} autoComplete="name" required placeholder="Your name" /></label><label className="field"><span>Work email *</span><input type="email" name="email" value={form.email} onChange={update} autoComplete="email" required placeholder="you@company.com" /></label><label className="field"><span>Project type *</span><select name="projectType" value={form.projectType} onChange={update} required><option value="" disabled>Select a service</option>{projectTypes.map(item => <option key={item}>{item}</option>)}</select></label><label className="field"><span>Budget <em>Optional</em></span><select name="budget" value={form.budget} onChange={update}><option value="">Select a range</option>{budgets.map(item => <option key={item}>{item}</option>)}</select></label><label className="field sm:col-span-2"><span>Project description *</span><textarea name="message" value={form.message} onChange={update} required rows="6" placeholder="What are you looking to build, improve or automate?" /></label><div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs leading-5 text-white/30">Your details are only used to respond to this inquiry.</p><button type="submit" disabled={loading} className="button button-primary justify-center disabled:cursor-wait disabled:opacity-60">{loading ? "Sending…" : "Discuss my project"}<ArrowUpRight size={17} /></button></div></form>
  </div></div></div></section>;
}
