import { createElement } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleDollarSign,
  Code2,
  Database,
  GitBranch,
  Layers3,
  PackageCheck,
  RefreshCw,
  Route,
  ShieldCheck,
  ShoppingBag,
  Store,
  Truck,
  Users,
  WalletCards,
} from "lucide-react";
import data from "../../../data.json";

const surfaces = [
  {
    icon: PackageCheck,
    index: "01",
    audience: "Supplier workspace",
    title: "From catalogue to fulfilment",
    description:
      "Suppliers onboard products, manage variants and inventory, process routed orders, handle returns, and track settlements from one focused workspace.",
    features: ["Products & variants", "Orders & RTO returns", "Payments & reports"],
    accent: "from-[#68d391]/20 to-transparent",
  },
  {
    icon: ShoppingBag,
    index: "02",
    audience: "Dropshipper marketplace",
    title: "From discovery to Shopify",
    description:
      "Dropshippers discover approved products, connect stores, publish inventory, manage orders, resolve NDR cases, and follow every financial movement.",
    features: ["Curated marketplace", "Shopify store manager", "Wallet & settlements"],
    accent: "from-[#47b8c7]/20 to-transparent",
  },
  {
    icon: ShieldCheck,
    index: "03",
    audience: "Operations control plane",
    title: "Visibility across the network",
    description:
      "Administrators govern catalogue quality, KYC, pricing, logistics, finance, risk, referrals, users, and platform-wide operational exceptions.",
    features: ["Approval workflows", "Finance & compliance", "Analytics & audit trail"],
    accent: "from-[#8b7cf6]/20 to-transparent",
  },
];

const lifecycle = [
  { label: "Source", detail: "Supplier creates product" },
  { label: "Approve", detail: "Admin validates catalogue" },
  { label: "Publish", detail: "Dropshipper selects offer" },
  { label: "Sync", detail: "Product reaches Shopify" },
  { label: "Fulfil", detail: "Order routes to supplier" },
  { label: "Settle", detail: "Ledger allocates value" },
];

const engineering = [
  {
    icon: RefreshCw,
    title: "Shopify as a synchronized channel",
    description:
      "OAuth, product publishing, inventory synchronization, signed webhooks, order ingestion, cancellation, refunds, and fulfilment updates form one integration boundary.",
    tags: ["OAuth", "HMAC webhooks", "Inventory sync"],
  },
  {
    icon: Route,
    title: "Logistics built around exceptions",
    description:
      "Courier abstraction, serviceability, AWB generation, tracking callbacks, NDR actions, RTO rules, supplier rerouting, and simulation tools cover the non-happy path.",
    tags: ["Multi-carrier", "NDR / RTO", "Status policy"],
  },
  {
    icon: CircleDollarSign,
    title: "Finance as a traceable workflow",
    description:
      "Order-level pricing snapshots feed wallets, ledgers, supplier payouts, dropshipper earnings, platform margins, settlements, penalties, invoices, and GST reporting.",
    tags: ["Ledger", "Payouts", "GST snapshots"],
  },
  {
    icon: ShieldCheck,
    title: "Guardrails at every boundary",
    description:
      "Role-aware access, KYC and compliance workflows, route-group rate limits, correlation IDs, migration-led schema changes, and centralized errors protect operations as scope grows.",
    tags: ["RBAC", "Rate limits", "Auditability"],
  },
];

const stackGroups = [
  { label: "Experiences", value: "Next.js · React · TypeScript · Vite" },
  { label: "Application", value: "Node.js · Express 5 · Sequelize" },
  { label: "Data & jobs", value: "PostgreSQL · Redis · BullMQ" },
  { label: "Infrastructure", value: "AWS · S3 · CI/CD" },
  { label: "Commerce", value: "Shopify · Razorpay · GST" },
  { label: "Logistics", value: "Shiprocket · Velocity · Webhooks" },
];

const UnicsiMark = () => (
  <div className="flex items-center gap-3" aria-label="UNICSI">
    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#45bac8] to-[#88d56c] text-sm font-black text-[#071210]">
      U
    </span>
    <span className="text-sm font-semibold tracking-[0.22em] text-white">UNICSI</span>
  </div>
);

const Eyebrow = ({ children }) => (
  <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#77d6c1]">
    <span className="h-px w-7 bg-[#77d6c1]/60" />
    {children}
  </p>
);

const UnicsiCaseStudy = ({ caseData }) => {
  const email = data.Hero?.[0]?.email || "";

  return (
    <main className="min-h-screen overflow-hidden bg-[#07100f] text-[#f5f7f3] selection:bg-[#75d6b5] selection:text-[#07100f]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07100f]/85 backdrop-blur-2xl">
        <div className="mx-auto flex min-h-18 w-full max-w-[1280px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 text-xs font-medium text-white/65 transition hover:text-white sm:text-sm"
          >
            <ArrowLeft className="transition group-hover:-translate-x-1" size={17} />
            <span className="hidden xxs:inline">Back to portfolio</span>
            <span className="xxs:hidden">Back</span>
          </a>
          <UnicsiMark />
        </div>
      </header>

      <article>
        <section className="relative border-b border-white/10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(81,194,177,0.16),transparent_30%),radial-gradient(circle_at_10%_80%,rgba(132,211,105,0.10),transparent_30%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:64px_64px]" />

          <div className="relative mx-auto grid w-full max-w-[1280px] gap-14 px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-10 lg:py-24">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55 sm:text-xs">
                <span className="rounded-full border border-[#77d6c1]/30 bg-[#77d6c1]/10 px-3 py-1.5 text-[#8ee0cd]">
                  Product case study
                </span>
                <span>{caseData.period}</span>
              </div>

              <h1 className="mt-7 max-w-4xl text-[clamp(2.75rem,7vw,6.8rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-white">
                Commerce,
                <span className="block bg-gradient-to-r from-[#8edb70] via-[#69d0aa] to-[#48b8c8] bg-clip-text text-transparent">
                  connected.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg sm:leading-9">
                A multi-role operating system connecting supplier inventory to dropshipper storefronts—and carrying every order through logistics, exceptions, and settlement.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={caseData.projectURL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#e8ffdd] px-5 py-3 text-sm font-semibold text-[#0a1814] transition hover:bg-white"
                >
                  Visit UNICSI <ArrowUpRight size={17} />
                </a>
                {email && (
                  <a
                    href={`mailto:${email}?subject=Let%27s discuss the UNICSI case study`}
                    className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
                  >
                    Discuss the work
                  </a>
                )}
              </div>

              <div className="mt-12 grid max-w-2xl grid-cols-1 border-y border-white/10 sm:grid-cols-3">
                {[
                  ["03", "Connected workspaces"],
                  ["01", "Shared commerce core"],
                  ["360°", "Order visibility"],
                ].map(([value, label], index) => (
                  <div
                    key={label}
                    className={`py-5 sm:px-5 ${index > 0 ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""}`}
                  >
                    <p className="text-2xl font-semibold text-white">{value}</p>
                    <p className="mt-1 text-xs text-white/45">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
              <div className="absolute -inset-5 rounded-[38px] bg-gradient-to-br from-[#75d6b5]/15 to-[#4aaebd]/5 blur-2xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-[#0d1816] shadow-[0_35px_100px_rgba(0,0,0,.45)]">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b62]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f5c451]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#69ce83]" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-white/35">Operations overview</span>
                </div>

                <div className="grid grid-cols-[70px_minmax(0,1fr)] sm:grid-cols-[94px_minmax(0,1fr)]">
                  <div className="border-r border-white/10 p-3 sm:p-4">
                    <div className="mb-7 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#45bac8] to-[#88d56c] text-xs font-black text-[#071210]">U</div>
                    <div className="space-y-4 text-white/35">
                      {[Layers3, ShoppingBag, Truck, WalletCards, Users].map((Icon, index) => (
                        <div key={index} className={`flex h-8 items-center rounded-lg px-2 ${index === 1 ? "bg-white/10 text-[#8ee0cd]" : ""}`}>
                          <Icon size={15} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="min-w-0 p-4 sm:p-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">Good morning, Operations</p>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {[
                        ["Orders", "In sync", "Shopify"],
                        ["In transit", "Live", "Tracking"],
                        ["NDR cases", "Review", "Action"],
                        ["Settlement", "Ready", "Today"],
                      ].map(([label, value, state]) => (
                        <div key={label} className="rounded-xl border border-white/8 bg-white/[0.035] p-3 sm:p-4">
                          <p className="truncate text-[9px] uppercase tracking-[0.14em] text-white/35">{label}</p>
                          <p className="mt-2 text-base font-semibold text-white sm:text-xl">{value}</p>
                          <p className="mt-1 text-[10px] text-[#7ad7bd]">{state}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 rounded-xl border border-white/8 bg-white/[0.035] p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] uppercase tracking-[0.14em] text-white/40">Order flow</p>
                        <span className="h-2 w-2 rounded-full bg-[#72d99a] shadow-[0_0_12px_#72d99a]" />
                      </div>
                      <div className="mt-5 flex h-24 items-end gap-2">
                        {[35, 52, 42, 72, 60, 88, 76, 96, 70, 84].map((height, index) => (
                          <div key={index} className="flex-1 rounded-t-sm bg-gradient-to-t from-[#3a8f91]/35 to-[#78d5ae]" style={{ height: `${height}%` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#13231f] px-4 py-3 shadow-xl sm:-left-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7ad7bd]/15 text-[#83ddc7]"><RefreshCw size={16} /></span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">Shopify sync</p>
                  <p className="mt-0.5 text-xs font-medium text-white">Healthy · live</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <Eyebrow>The system</Eyebrow>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
                Three products.<br />One operation.
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                UNICSI is not a single dashboard. Each audience gets a purpose-built experience while the shared backend keeps the commercial lifecycle consistent.
              </p>
            </div>

            <div className="space-y-4">
              {surfaces.map(({ icon, index, audience, title, description, features, accent }) => (
                <div key={audience} className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0c1715] p-5 transition hover:border-white/20 sm:p-7">
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${accent} opacity-60 transition group-hover:opacity-100`} />
                  <div className="relative grid gap-5 sm:grid-cols-[64px_minmax(0,1fr)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#82dcbf] sm:h-14 sm:w-14">
                      {createElement(icon, { size: 22 })}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.23em] text-[#7fd9c1]">{index} · {audience}</p>
                      </div>
                      <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">{title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/50">{description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {features.map((feature) => (
                          <span key={feature} className="rounded-full border border-white/10 bg-black/10 px-3 py-1.5 text-[11px] text-white/60">{feature}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0a1513]">
          <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
            <Eyebrow>Connected lifecycle</Eyebrow>
            <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">One product, six coordinated transitions.</h2>
              <p className="max-w-sm text-sm leading-7 text-white/45">The architecture follows the order lifecycle, preserving context as ownership moves across teams and systems.</p>
            </div>

            <div className="mt-12 grid grid-cols-1 overflow-hidden rounded-[24px] border border-white/10 sm:grid-cols-2 lg:grid-cols-6">
              {lifecycle.map((step, index) => (
                <div key={step.label} className="relative border-b border-white/10 p-5 last:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:border-b-0 lg:border-r lg:[&:nth-child(2n)]:border-r lg:last:border-r-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#79d6bd]">0{index + 1}</span>
                    {index < lifecycle.length - 1 && <ChevronRight className="hidden text-white/20 lg:block" size={16} />}
                  </div>
                  <h3 className="mt-8 text-lg font-semibold text-white">{step.label}</h3>
                  <p className="mt-2 text-xs leading-5 text-white/40">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
          <Eyebrow>Engineering deep dives</Eyebrow>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">The hard parts live between the screens.</h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {engineering.map(({ icon, title, description, tags }, index) => (
              <div key={title} className={`rounded-[26px] border border-white/10 bg-[#0c1715] p-6 sm:p-8 ${index === 0 || index === 3 ? "md:col-span-2 md:grid md:grid-cols-[0.7fr_1.3fr] md:gap-12" : ""}`}>
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#75d6b5]/10 text-[#82ddc3]">
                    {createElement(icon, { size: 21 })}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white sm:text-2xl">{title}</h3>
                </div>
                <div className={index === 0 || index === 3 ? "md:self-end" : ""}>
                  <p className="mt-4 text-sm leading-7 text-white/50 sm:text-base sm:leading-8">{description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {tags.map((tag) => <span key={tag} className="rounded-full bg-white/5 px-3 py-1.5 text-[11px] text-white/55">{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#e8f4eb] text-[#102019]">
          <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.68fr_1.32fr] lg:px-10 lg:py-28">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#288c82]">System architecture</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">A shared core with clear boundaries.</h2>
              <p className="mt-5 text-sm leading-7 text-[#3d5349] sm:text-base sm:leading-8">Role-specific clients stay independent. Business rules and state transitions converge in one API and service layer, backed by durable data and asynchronous work.</p>
            </div>

            <div className="space-y-3">
              {[
                { icon: Store, label: "Experience layer", items: ["Supplier portal", "Dropshipper marketplace", "Admin control plane"] },
                { icon: Code2, label: "Application layer", items: ["Express API", "Domain services", "RBAC & validation"] },
                { icon: Database, label: "Data & processing", items: ["PostgreSQL", "Redis / BullMQ", "AWS S3"] },
                { icon: GitBranch, label: "Integration edge", items: ["Shopify", "Courier network", "Payments & webhooks"] },
              ].map(({ icon, label, items }, index) => (
                <div key={label} className="relative rounded-2xl border border-[#16372c]/12 bg-white/55 p-4 sm:p-5">
                  {index < 3 && <span className="absolute -bottom-4 left-8 z-10 h-5 w-px bg-[#307e6c]/30" />}
                  <div className="grid gap-4 sm:grid-cols-[170px_minmax(0,1fr)] sm:items-center">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1d6f62]/10 text-[#1d6f62]">{createElement(icon, { size: 17 })}</span>
                      <p className="text-sm font-semibold">{label}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => <span key={item} className="rounded-full border border-[#173d31]/10 bg-white/80 px-3 py-1.5 text-[11px] text-[#385247]">{item}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <Eyebrow>My contribution</Eyebrow>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">Technical leadership across the product.</h2>
              <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                <Code2 size={15} className="text-[#80d9c0]" />
                {caseData.role}
              </div>
            </div>

            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {[
                ["Architecture", "Shaped the role boundaries, shared commerce model, and service responsibilities spanning all three products."],
                ["Commerce workflows", "Connected catalogue, Shopify, inventory, order, fulfilment, return, and settlement state changes."],
                ["Operational tooling", "Built the controls needed to investigate exceptions, manage risk, and keep teams moving without database intervention."],
                ["Delivery discipline", "Used migration-led schema evolution, focused test suites, CI/CD, observability, and safe integration boundaries."],
              ].map(([title, description]) => (
                <div key={title} className="border-t border-white/12 pt-5">
                  <div className="flex items-center gap-2 text-[#7fd9c0]"><Check size={16} /><h3 className="text-sm font-semibold text-white">{title}</h3></div>
                  <p className="mt-3 text-sm leading-7 text-white/45">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10">
          <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <Eyebrow>Technology</Eyebrow>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-white">Built for an evolving operation.</h2>
              </div>
              <div className="grid gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10 sm:grid-cols-2">
                {stackGroups.map(({ label, value }) => (
                  <div key={label} className="bg-[#0b1513] p-5 sm:p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#72d2bb]">{label}</p>
                    <p className="mt-3 text-sm leading-6 text-white/65">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 rounded-[30px] border border-[#75d6b5]/20 bg-[radial-gradient(circle_at_top_right,rgba(117,214,181,.16),transparent_35%),#0d1a17] p-6 sm:p-10 lg:flex lg:items-end lg:justify-between lg:gap-10 lg:p-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7fd9c1]">The result</p>
                <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">One source of truth from product sourcing to payout.</h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">UNICSI replaces fragmented handoffs with a connected operating model—giving each user the right tools and the platform a complete view of commerce in motion.</p>
              </div>
              <a href="#projects" className="mt-8 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0c1915] transition hover:bg-[#e7ffdd] lg:mt-0">
                Explore more work <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default UnicsiCaseStudy;
