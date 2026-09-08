const items = ["SaaS platforms", "Shopify commerce", "Business automation", "API integrations", "Cloud delivery"];
export default function TrustBar() {
  return <section className="border-b border-white/[0.08]" aria-label="Core areas of work"><div className="site-container grid grid-cols-2 md:grid-cols-5">
    {items.map((item, index) => <p key={item} className={`flex min-h-20 items-center text-[11px] font-medium uppercase tracking-[0.17em] text-white/40 ${index ? "border-l border-white/[0.08] pl-5" : ""}`}>{item}</p>)}
  </div></section>;
}
