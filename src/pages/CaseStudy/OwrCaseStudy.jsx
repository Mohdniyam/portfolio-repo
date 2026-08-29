import { createElement } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Boxes,
  Check,
  CircleDollarSign,
  CloudCog,
  CreditCard,
  Database,
  Globe2,
  Layers3,
  PackageOpen,
  Palette,
  Radio,
  RefreshCcw,
  Repeat2,
  ServerCog,
  ShieldCheck,
  ShoppingCart,
  Store,
  Truck,
  WalletCards,
  Warehouse,
} from "lucide-react";
import data from "../../../data.json";

const storeJourney = [
  ["01", "Launch", "Create a store, choose a plan, connect a subdomain or custom domain."],
  ["02", "Shape", "Select a theme and configure the pages, brand, policies, and plugins."],
  ["03", "Operate", "Manage catalogue, variants, warehouses, inventory, customers, and offers."],
  ["04", "Sell", "Run checkout across COD, wallet, PhonePe, Razorpay, or Cashfree flows."],
  ["05", "Fulfil", "Allocate stock, create shipments, track delivery, returns, and exchanges."],
  ["06", "Grow", "Use analytics, communication, loyalty, risk, and conversion controls."],
];

const pillars = [
  {
    icon: Palette,
    number: "01",
    title: "Storefront engine",
    description: "Eight EJS themes share a configurable page model for home, collection, product, cart, checkout, account, order, policy, and content experiences.",
    points: ["Theme-level layouts", "Page configuration", "Custom domains"],
  },
  {
    icon: Boxes,
    number: "02",
    title: "Commerce operations",
    description: "Store-scoped products, variants, media, collections, categories, brands, suppliers, purchase orders, warehouses, and available stock form the catalogue core.",
    points: ["Multi-warehouse stock", "Supplier purchasing", "Catalogue relationships"],
  },
  {
    icon: CreditCard,
    number: "03",
    title: "Money movement",
    description: "Checkout, refunds, prepaid incentives, gift cards, customer and platform wallets, transaction logs, subscriptions, and multiple gateways stay connected.",
    points: ["PhonePe · Razorpay · Cashfree", "Wallet ledger", "Plans & subscriptions"],
  },
  {
    icon: Truck,
    number: "04",
    title: "Order intelligence",
    description: "Order processing extends into shipment creation, status updates, returns, exchanges, RTO handling, COD-to-prepaid journeys, and customer risk profiles.",
    points: ["Shiprocket · Delhivery", "Returns & refunds", "Risk-aware workflows"],
  },
];

const engineeringDecisions = [
  ["Tenant context in the URL", "Store identifiers scope operational APIs, while vhost routing resolves branded subdomains and custom domains into the correct storefront at request time."],
  ["Configuration over duplication", "A shared theme-page configuration layer supplies categories, products, checkout, shipping, customer, brand, and settings data to distinct storefront experiences."],
  ["Inventory as a warehouse concern", "Products and variants are connected to warehouse-specific stock records so purchasing, availability, and fulfilment can evolve independently."],
  ["Payments as explicit state machines", "Gateway status routes, confirmations, webhook handling, refunds, recharge records, wallets, and transaction logs keep money movement inspectable."],
  ["Operations beyond the happy path", "Return and exchange flows, delivery failures, RTO utilities, risk scoring, prepaid conversion, and communication templates model real commerce exceptions."],
  ["Fast paths with live feedback", "Redis supports cache-sensitive workloads while Socket.IO, scheduled jobs, and notifications keep operational state moving without constant manual refreshes."],
];

const integrations = ["PhonePe", "Razorpay", "Cashfree", "Shiprocket", "Delhivery", "Interakt", "Google Analytics", "Cloudinary"];

const OwrLogo = () => (
  <div className="flex items-center gap-3" aria-label="OWR">
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b8ff5b] text-xs font-black text-[#24102d]">O</span>
    <span className="text-sm font-black tracking-[0.24em] text-white">OWR</span>
  </div>
);

const Label = ({ children, dark = false }) => (
  <p className={`text-[10px] font-bold uppercase tracking-[0.28em] ${dark ? "text-[#6a1e9c]" : "text-[#c6ff78]"}`}>
    {children}
  </p>
);

const OwrCaseStudy = ({ caseData }) => {
  const email = data.Hero?.[0]?.email || "";

  return (
    <main className="min-h-screen overflow-hidden bg-[#160b1c] text-white selection:bg-[#b8ff5b] selection:text-[#211128]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#160b1c]/85 backdrop-blur-2xl">
        <div className="mx-auto flex min-h-18 w-full max-w-[1280px] items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <a href="#projects" className="group inline-flex items-center gap-2 text-xs font-medium text-white/60 transition hover:text-white sm:text-sm">
            <ArrowLeft size={17} className="transition group-hover:-translate-x-1" />
            <span className="hidden xxs:inline">Back to portfolio</span>
            <span className="xxs:hidden">Back</span>
          </a>
          <OwrLogo />
        </div>
      </header>

      <article>
        <section className="relative border-b border-white/10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(106,30,156,.36),transparent_34%),radial-gradient(circle_at_86%_70%,rgba(184,255,91,.12),transparent_28%)]" />
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-white/10 lg:block" />

          <div className="relative mx-auto grid min-h-[calc(100vh-72px)] w-full max-w-[1280px] gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10 lg:py-24">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-[#c6ff78]/25 bg-[#c6ff78]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#c6ff78]">SaaS architecture</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">{caseData.period}</span>
              </div>

              <h1 className="mt-8 max-w-3xl text-[clamp(2.7rem,6.8vw,6.4rem)] font-semibold leading-[0.94] tracking-[-0.065em]">
                Build a store.
                <span className="block text-[#c6ff78]">Run the whole business.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/58 sm:text-lg sm:leading-9">
                OWR is a multi-tenant commerce operating system for launching branded storefronts and managing the catalogue, inventory, checkout, fulfilment, money, and customer lifecycle behind them.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                {email && (
                  <a href={`mailto:${email}?subject=Let%27s discuss the OWR case study`} className="inline-flex items-center gap-2 rounded-full bg-[#c6ff78] px-5 py-3 text-sm font-bold text-[#25122d] transition hover:bg-white">
                    Discuss this project <ArrowUpRight size={17} />
                  </a>
                )}
                <a href="#owr-architecture" className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/75 transition hover:bg-white/5 hover:text-white">Explore architecture</a>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-5 border-t border-white/10 pt-7">
                {[["08", "Storefront themes"], ["Custom", "Domain routing"], ["Multi", "Warehouse inventory"]].map(([value, label]) => (
                  <div key={label}>
                    <p className="text-xl font-semibold text-white">{value}</p>
                    <p className="mt-1 text-[11px] text-white/35">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
              <div className="absolute -inset-8 rounded-full bg-[#6a1e9c]/20 blur-3xl" />
              <div className="relative rounded-[32px] border border-white/12 bg-[#f5f1f7] p-3 text-[#26152d] shadow-[0_40px_110px_rgba(0,0,0,.45)] sm:p-4">
                <div className="overflow-hidden rounded-[23px] bg-white">
                  <div className="flex items-center justify-between border-b border-[#321b3e]/10 px-4 py-3 sm:px-5">
                    <div className="flex items-center gap-2">
                      <span className="h-7 w-7 rounded-full bg-[#6a1e9c]" />
                      <span className="text-xs font-black tracking-[0.18em]">NORTH/01</span>
                    </div>
                    <div className="flex gap-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#6f6474]">
                      <span>Shop</span><span className="hidden xxs:inline">Collections</span><span>Bag</span>
                    </div>
                  </div>

                  <div className="grid min-h-[380px] bg-[#ede5f1] sm:grid-cols-[1.08fr_0.92fr]">
                    <div className="flex flex-col justify-between p-6 sm:p-8">
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#6a1e9c]">New season · 2025</p>
                        <p className="mt-4 text-4xl font-black leading-[0.92] tracking-[-0.06em] sm:text-5xl">YOUR<br />STORE,<br /><span className="text-[#6a1e9c]">YOUR WAY.</span></p>
                        <p className="mt-5 max-w-xs text-xs leading-5 text-[#6c5c72]">A complete storefront rendered from tenant, theme, and page configuration.</p>
                      </div>
                      <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#27142f] px-4 py-2 text-[10px] font-bold text-white">Shop collection <ArrowRight size={12} /></span>
                    </div>
                    <div className="relative min-h-56 overflow-hidden bg-[#6a1e9c] p-5 text-white sm:min-h-full">
                      <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full border-[28px] border-[#c6ff78]/80" />
                      <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[#a766ce]" />
                      <div className="relative flex h-full flex-col justify-end">
                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">Theme 04</p>
                        <p className="mt-2 text-xl font-semibold">Configured per brand.</p>
                        <div className="mt-5 flex gap-2">
                          {["#c6ff78", "#fff", "#30163b"].map((color) => <span key={color} className="h-5 w-5 rounded-full border border-white/30" style={{ backgroundColor: color }} />)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#2d1736] px-4 py-3 shadow-2xl sm:-left-8">
                <Globe2 className="text-[#c6ff78]" size={18} />
                <div><p className="text-[9px] uppercase tracking-[0.18em] text-white/35">Tenant resolved</p><p className="mt-0.5 text-xs font-medium">store.custom-domain.com</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f0eb] text-[#28182d]">
          <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div>
                <Label dark>Product model</Label>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">From blank domain to daily operations.</h2>
              </div>
              <p className="max-w-2xl self-end text-sm leading-7 text-[#675d69] sm:text-lg sm:leading-8">The architecture follows the merchant journey. Store creation is only the beginning; the same tenant context continues through every operational workflow.</p>
            </div>

            <div className="mt-12 grid overflow-hidden rounded-[26px] border border-[#371f42]/12 sm:grid-cols-2 lg:grid-cols-3">
              {storeJourney.map(([number, title, description], index) => (
                <div key={title} className={`min-h-52 bg-white/55 p-6 sm:p-7 ${index < 5 ? "border-b border-[#371f42]/10 lg:border-b-0" : ""} ${index % 3 !== 2 ? "lg:border-r lg:border-[#371f42]/10" : ""}`}>
                  <p className="text-xs font-bold text-[#6a1e9c]">{number}</p>
                  <h3 className="mt-10 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#746978]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
          <Label>The operating system</Label>
          <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">Four systems moving as one.</h2>
            <p className="max-w-md text-sm leading-7 text-white/45">Each capability is store-scoped, but none exists in isolation. Inventory affects checkout; payment affects orders; delivery affects refunds and wallets.</p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group rounded-[26px] border border-white/10 bg-[#1d1024] p-6 transition hover:border-[#c6ff78]/30 sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c6ff78]/10 text-[#c6ff78]"><Icon size={22} /></span>
                    <span className="text-xs font-bold text-white/25">{item.number}</span>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/48">{item.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.points.map((point) => <span key={point} className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-white/55">{point}</span>)}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="owr-architecture" className="border-y border-white/10 bg-[#201027]">
          <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.64fr_1.36fr] lg:gap-20 lg:px-10 lg:py-28">
            <div>
              <Label>Tenant architecture</Label>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">One runtime. Many independent stores.</h2>
              <p className="mt-5 text-sm leading-7 text-white/45">The hostname starts the request context. From there, the system resolves the store, loads its configuration and commerce data, and renders the selected experience.</p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#160b1c] p-4 sm:p-7">
              <div className="space-y-3">
                {[
                  [Globe2, "Request edge", "Subdomain · Custom domain · www alias"],
                  [Store, "Tenant resolver", "Hostname → domain record → store context"],
                  [Palette, "Presentation", "Theme selection · Page configuration · EJS render"],
                  [ServerCog, "Store-scoped API", "Catalogue · Orders · Customers · Finance · Shipping"],
                  [Database, "Shared infrastructure", "PostgreSQL · Redis · Media storage · Scheduled jobs"],
                ].map(([icon, title, detail], index) => (
                  <div key={title} className="relative grid gap-4 rounded-2xl border border-white/8 bg-white/[0.035] p-4 sm:grid-cols-[48px_150px_minmax(0,1fr)] sm:items-center">
                    {index < 4 && <span className="absolute -bottom-4 left-10 z-10 h-5 w-px bg-[#c6ff78]/25" />}
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6a1e9c]/25 text-[#d7a7f0]">{createElement(icon, { size: 18 })}</span>
                    <p className="text-sm font-semibold">{title}</p>
                    <p className="text-xs leading-5 text-white/40">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#c6ff78] text-[#25122d]">
          <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#6a1e9c]">Engineering decisions</p>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">Designed around operational truth.</h2>
              </div>
              <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                {engineeringDecisions.map(([title, description]) => (
                  <div key={title} className="border-t border-[#32173d]/20 pt-5">
                    <div className="flex items-center gap-2"><Check size={16} className="text-[#6a1e9c]" /><h3 className="text-sm font-bold">{title}</h3></div>
                    <p className="mt-3 text-sm leading-7 text-[#5a495f]">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[0.66fr_1.34fr] lg:gap-20">
            <div>
              <Label>Commerce edge</Label>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">Integrated where the business needs it.</h2>
              <p className="mt-5 text-sm leading-7 text-white/45">Providers stay behind focused routes and utilities so core store workflows retain one coherent model.</p>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10 sm:grid-cols-4">
                {integrations.map((integration) => (
                  <div key={integration} className="flex min-h-28 items-center justify-center bg-[#1b0e21] p-4 text-center text-sm font-semibold text-white/65">{integration}</div>
                ))}
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {[
                  [Radio, "Live state", "Socket.IO and notifications"],
                  [Repeat2, "Recurring work", "Cron and scheduled jobs"],
                  [CloudCog, "Media pipeline", "Cloud storage and image processing"],
                ].map(([icon, title, detail]) => (
                  <div key={title} className="rounded-2xl border border-white/10 p-5">{createElement(icon, { size: 18, className: "text-[#c6ff78]" })}<p className="mt-4 text-sm font-semibold">{title}</p><p className="mt-2 text-xs text-white/38">{detail}</p></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10">
          <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
              <div>
                <Label>My contribution</Label>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">Building across the commerce stack.</h2>
                <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/55"><Layers3 size={15} className="text-[#c6ff78]" />{caseData.role}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  [PackageOpen, "Commerce domain", "Product, inventory, order, return, customer, offer, and operational APIs."],
                  [Globe2, "Store delivery", "Tenant-aware domain resolution, storefront themes, and configuration-backed rendering."],
                  [WalletCards, "Payments & wallets", "Gateway flows, transaction history, refunds, recharges, and recurring plans."],
                  [BarChart3, "Scale & visibility", "Caching, analytics, logs, real-time events, scheduled work, and notifications."],
                ].map(([icon, title, detail]) => (
                  <div key={title} className="rounded-[22px] border border-white/10 bg-[#1b0e21] p-6">{createElement(icon, { size: 20, className: "text-[#c6ff78]" })}<h3 className="mt-6 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-white/42">{detail}</p></div>
                ))}
              </div>
            </div>

            <div className="mt-20 overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_80%_0%,rgba(106,30,156,.55),transparent_40%),#211128] p-7 sm:p-10 lg:flex lg:items-end lg:justify-between lg:gap-12 lg:p-14">
              <div>
                <Label>Outcome</Label>
                <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">A storefront builder with an operating system underneath.</h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/48 sm:text-base sm:leading-8">OWR gives each merchant an independent brand and domain without fragmenting the commerce engine that powers daily operations.</p>
              </div>
              <a href="#projects" className="mt-8 inline-flex shrink-0 items-center gap-2 rounded-full bg-[#c6ff78] px-5 py-3 text-sm font-bold text-[#25122d] transition hover:bg-white lg:mt-0">Explore more work <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default OwrCaseStudy;
