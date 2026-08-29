import { createElement } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Boxes,
  Check,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Cloud,
  Heart,
  History,
  Languages,
  LifeBuoy,
  MessageCircleMore,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  Tags,
  TicketCheck,
  Truck,
  UserRoundCog,
  Users,
  WalletCards,
} from "lucide-react";
import data from "../../../data.json";

const productSurfaces = [
  {
    icon: ShoppingBag,
    label: "Buyer app",
    title: "Discover, decide, and buy",
    copy: "Products, categories, deals, sellers, wishlist, cart, checkout, orders, wallet, reviews, coupons, and browsing history.",
    color: "bg-[#ff6542]",
  },
  {
    icon: Store,
    label: "Seller app",
    title: "List, sell, and fulfil",
    copy: "GST/MSME onboarding, catalogue creation, product variants, inventory and pricing, promotions, incoming orders, and seller analytics.",
    color: "bg-[#ffc83d]",
  },
  {
    icon: ClipboardCheck,
    label: "Support admin",
    title: "Govern marketplace quality",
    copy: "QC queues, catalogue moderation, seller and buyer management, orders, reviews, affiliates, modules, permissions, and dashboard analytics.",
    color: "bg-[#62d4a9]",
  },
  {
    icon: LifeBuoy,
    label: "Live agent",
    title: "Resolve issues in context",
    copy: "Ticket queues, team assignment, priorities, statuses, attachments, real-time conversations, and agent performance visibility.",
    color: "bg-[#8ea8ff]",
  },
  {
    icon: BarChart3,
    label: "Affiliate workspace",
    title: "Turn attention into attribution",
    copy: "Tracking tags, product and category links, banner links, profile and bank onboarding, conversion analytics, and graph data.",
    color: "bg-[#d7a7ff]",
  },
];

const catalogueFlow = [
  ["Draft", "Seller selects category and completes dynamic product fields."],
  ["Enrich", "Images, variants, size inventory, price, and tax data are attached."],
  ["Review", "QC validates the catalogue and records each status transition."],
  ["Publish", "Approved products become searchable and available to buyers."],
  ["Operate", "Sellers update inventory, pricing, variants, and fulfil orders."],
];

const trustLayers = [
  [ShieldCheck, "Role-specific access", "Separate JWT middleware protects buyer, seller, seller-hub, affiliate, support-admin, and live-agent capabilities."],
  [History, "History by design", "Status, profile, role, inventory, product, ticket, login, review, and address changes retain an operational trail."],
  [BadgeCheck, "Moderated catalogue", "Product submissions and edit requests move through explicit QC states, with seller-level and product-level controls."],
  [MessageCircleMore, "Human support loop", "Tickets preserve priority, status, team assignment, media, chat, and message state—with live delivery through Socket.IO."],
  [Heart, "Community signals", "Verified product and seller reviews support helpful votes, reporting, moderation, hiding, and deletion histories."],
  [UserRoundCog, "Seller verification", "OTP, GST, MSME, bank details, and multiple address types shape a more accountable seller onboarding path."],
];

const stack = [
  ["Runtime", "Node.js · Express"],
  ["Data", "PostgreSQL · Sequelize"],
  ["Realtime", "Socket.IO"],
  ["Identity", "JWT · OTP · bcrypt"],
  ["Storage", "Google Cloud Storage · Multer"],
  ["Commerce edge", "PhonePe · Shiprocket"],
  ["Background work", "node-cron · Email"],
  ["Localization", "Google translation services"],
];

const Mark = () => (
  <div className="flex items-center gap-2.5" aria-label="Dukkandaar">
    <span className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#ffc83d] text-sm font-black text-[#142239]">D</span>
    <span className="hidden text-sm font-black tracking-[-0.02em] text-white xxs:inline">dukkandaar</span>
  </div>
);

const Kicker = ({ children, light = false }) => (
  <p className={`text-[10px] font-black uppercase tracking-[0.25em] ${light ? "text-[#24416c]" : "text-[#ffc83d]"}`}>
    {children}
  </p>
);

const DukkandaarCaseStudy = ({ caseData }) => {
  const email = data.Hero?.[0]?.email || "";

  return (
    <main className="min-h-screen overflow-hidden bg-[#101c30] text-white selection:bg-[#ffc83d] selection:text-[#101c30]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101c30]/88 backdrop-blur-2xl">
        <div className="mx-auto flex min-h-18 w-full max-w-[1280px] items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <a href="#projects" className="group inline-flex items-center gap-2 text-xs font-medium text-white/60 transition hover:text-white sm:text-sm">
            <ArrowLeft size={17} className="transition group-hover:-translate-x-1" />
            <span className="hidden xxs:inline">Back to portfolio</span><span className="xxs:hidden">Back</span>
          </a>
          <Mark />
        </div>
      </header>

      <article>
        <section className="relative border-b border-white/10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_12%,rgba(255,200,61,.16),transparent_28%),radial-gradient(circle_at_90%_78%,rgba(255,101,66,.14),transparent_25%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />

          <div className="relative mx-auto grid w-full max-w-[1280px] gap-16 px-4 py-16 sm:px-6 sm:py-20 lg:min-h-[760px] lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-10 lg:py-24">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#ffc83d] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.19em] text-[#142239]">Marketplace platform</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/38">{caseData.period}</span>
              </div>

              <h1 className="mt-8 max-w-4xl text-[clamp(2.8rem,7vw,6.6rem)] font-black leading-[0.92] tracking-[-0.065em]">
                Every side of
                <span className="block text-[#ffc83d]">the marketplace.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/58 sm:text-lg sm:leading-9">
                Dukkandaar connects buyers, sellers, quality teams, support agents, and affiliates through one role-aware commerce platform across web and mobile experiences.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                {email && <a href={`mailto:${email}?subject=Let%27s discuss the Dukkandaar case study`} className="inline-flex items-center gap-2 rounded-full bg-[#ff6542] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#ff7b5d]">Discuss this work <ArrowUpRight size={17} /></a>}
                <a href="#dukkandaar-system" className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/75 transition hover:bg-white/5 hover:text-white">View system map</a>
              </div>

              <div className="mt-12 grid max-w-2xl grid-cols-1 border-y border-white/10 sm:grid-cols-3">
                {[["05", "Connected workspaces"], ["Realtime", "Support messaging"], ["End-to-end", "Marketplace lifecycle"]].map(([value, label], index) => (
                  <div key={label} className={`py-5 sm:px-5 ${index > 0 ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""}`}>
                    <p className="text-lg font-bold text-white">{value}</p><p className="mt-1 text-[11px] text-white/35">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[570px] lg:ml-auto">
              <div className="absolute -inset-8 rounded-full bg-[#ff6542]/10 blur-3xl" />
              <div className="relative aspect-[1/1.02]">
                <div className="absolute inset-[18%] flex flex-col items-center justify-center rounded-full border border-white/15 bg-[#172741] text-center shadow-[0_30px_80px_rgba(0,0,0,.35)]">
                  <span className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#ffc83d] text-xl font-black text-[#122038]">D</span>
                  <p className="mt-4 text-lg font-black">Commerce core</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/35">One shared marketplace</p>
                </div>

                {[
                  { label: "BUY", icon: ShoppingBag, classes: "left-0 top-[8%] bg-[#ff6542]", note: "Buyer" },
                  { label: "SELL", icon: Store, classes: "right-0 top-[7%] bg-[#ffc83d] text-[#142239]", note: "Seller" },
                  { label: "QC", icon: ClipboardCheck, classes: "right-[-1%] bottom-[13%] bg-[#62d4a9] text-[#142239]", note: "Admin" },
                  { label: "HELP", icon: LifeBuoy, classes: "left-[6%] bottom-[7%] bg-[#8ea8ff] text-[#142239]", note: "Agent" },
                ].map(({ label, icon, classes, note }) => (
                  <div key={label} className={`absolute w-[36%] rounded-[22px] p-4 shadow-2xl sm:p-5 ${classes}`}>
                    <div className="flex items-center justify-between gap-3">{createElement(icon, { size: 20 })}<span className="text-[9px] font-black tracking-[0.2em] opacity-60">{label}</span></div>
                    <p className="mt-7 text-lg font-black sm:text-xl">{note}</p>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-black/15"><span className="block h-full w-2/3 rounded-full bg-current opacity-45" /></div>
                  </div>
                ))}

                <svg className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-40" viewBox="0 0 100 100" aria-hidden="true">
                  <circle cx="50" cy="50" r="39" fill="none" stroke="#ffc83d" strokeDasharray="2 3" strokeWidth=".35" />
                </svg>
              </div>
              <div className="absolute bottom-[2%] right-[32%] flex items-center gap-2 rounded-full border border-white/10 bg-[#172741] px-3 py-2 text-[10px] text-white/65 shadow-xl"><BarChart3 size={13} className="text-[#d7a7ff]" /> Affiliate growth</div>
            </div>
          </div>
        </section>

        <section id="dukkandaar-system" className="bg-[#fff8e9] text-[#142239]">
          <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div><Kicker light>Product ecosystem</Kicker><h2 className="mt-5 text-3xl font-black tracking-[-0.045em] sm:text-5xl">Purpose-built tools for every role.</h2></div>
              <p className="max-w-2xl self-end text-sm leading-7 text-[#657083] sm:text-lg sm:leading-8">The system is divided by responsibility, not by duplicated business logic. Every workspace operates on the same products, orders, sellers, customers, and governance history.</p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
              {productSurfaces.map((surface, index) => (
                <div key={surface.label} className={`rounded-[24px] border border-[#142239]/10 bg-white p-6 shadow-[0_12px_35px_rgba(20,34,57,.06)] ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${surface.color}`}>{createElement(surface.icon, { size: 21 })}</div>
                  <p className="mt-7 text-[10px] font-black uppercase tracking-[0.22em] text-[#6b778a]">{surface.label}</p>
                  <h3 className="mt-2 text-xl font-black">{surface.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#687386]">{surface.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
          <Kicker>Catalogue pipeline</Kicker>
          <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-3xl text-3xl font-black tracking-[-0.045em] sm:text-5xl">Quality before reach.</h2>
            <p className="max-w-md text-sm leading-7 text-white/45">Product onboarding is a governed workflow where seller flexibility and marketplace trust meet.</p>
          </div>

          <div className="mt-12 grid overflow-hidden rounded-[26px] border border-white/10 md:grid-cols-5">
            {catalogueFlow.map(([title, copy], index) => (
              <div key={title} className="relative border-b border-white/10 bg-[#14243c] p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                <div className="flex items-center justify-between"><span className="text-xs font-black text-[#ffc83d]">0{index + 1}</span>{index < 4 && <ChevronRight size={15} className="hidden text-white/20 md:block" />}</div>
                <h3 className="mt-10 text-lg font-bold">{title}</h3><p className="mt-3 text-xs leading-6 text-white/40">{copy}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[[Tags, "Dynamic category fields"], [Boxes, "Variants & inventory"], [Cloud, "Product media"], [PackageCheck, "Status history"]].map(([icon, label]) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 p-4 text-xs text-white/55">{createElement(icon, { size: 16, className: "text-[#ffc83d]" })}{label}</div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#14243c]">
          <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
              <div>
                <Kicker>Trust operations</Kicker>
                <h2 className="mt-5 text-3xl font-black tracking-[-0.045em] sm:text-5xl">The marketplace remembers every decision.</h2>
                <p className="mt-5 text-sm leading-7 text-white/45">Trust is implemented through access boundaries, review queues, human support, seller verification, and detailed history records—not a single moderation flag.</p>
              </div>
              <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                {trustLayers.map(([icon, title, description]) => (
                  <div key={title} className="border-t border-white/12 pt-5">
                    <div className="flex items-center gap-3">{createElement(icon, { size: 17, className: "text-[#ffc83d]" })}<h3 className="text-sm font-bold">{title}</h3></div>
                    <p className="mt-3 text-sm leading-7 text-white/42">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#ff6542] text-white">
          <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20 lg:px-10 lg:py-28">
            <div><p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#3d1422]/65">Order lifecycle</p><h2 className="mt-5 text-3xl font-black tracking-[-0.045em] sm:text-5xl">From buyer intent to seller action.</h2><p className="mt-5 text-sm leading-7 text-white/70">Order and item histories preserve state at the right level while payment and logistics integrations move the transaction forward.</p></div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                [ShoppingBag, "Buyer checkout", "Cart, address, wallet, coupon, and transaction state"],
                [CircleDollarSign, "Payment confirmation", "PhonePe integration and order transaction handling"],
                [Store, "Seller fulfilment", "Seller order queue, status changes, and analytics"],
                [Truck, "Shipment execution", "Shiprocket utilities and delivery status movement"],
              ].map(([icon, title, copy]) => (
                <div key={title} className="rounded-[22px] border border-white/20 bg-[#db4c31]/35 p-5 sm:p-6">{createElement(icon, { size: 20 })}<h3 className="mt-6 text-lg font-bold">{title}</h3><p className="mt-3 text-xs leading-6 text-white/70">{copy}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div><Kicker>System architecture</Kicker><h2 className="mt-5 text-3xl font-black tracking-[-0.045em] sm:text-5xl">Role boundaries around one domain model.</h2><p className="mt-5 text-sm leading-7 text-white/45">Express routers and dedicated authentication middleware keep each product surface focused while Sequelize associations connect the marketplace underneath.</p></div>
            <div className="rounded-[28px] border border-white/10 bg-[#14243c] p-4 sm:p-7">
              {[
                [Smartphone, "Client experiences", "Buyer app · Seller app · Admin · Agent · Affiliate"],
                [ShieldCheck, "Access boundary", "Role router · JWT middleware · OTP verification"],
                [Sparkles, "Marketplace services", "Catalogue · Orders · Deals · Reviews · Tickets · Analytics"],
                [WalletCards, "Commerce integrations", "Payments · Logistics · Email · Realtime messages"],
                [Boxes, "Data foundation", "PostgreSQL · Sequelize models · History records · Cloud media"],
              ].map(([icon, title, detail], index) => (
                <div key={title} className="relative grid gap-3 rounded-2xl border border-white/8 bg-white/[0.035] p-4 sm:grid-cols-[44px_155px_minmax(0,1fr)] sm:items-center">
                  {index < 4 && <span className="absolute -bottom-3 left-9 z-10 h-4 w-px bg-[#ffc83d]/30" />}
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ffc83d]/10 text-[#ffc83d]">{createElement(icon, { size: 17 })}</span><p className="text-sm font-bold">{title}</p><p className="text-xs leading-5 text-white/38">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fff8e9] text-[#142239]">
          <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
              <div><Kicker light>Technology</Kicker><h2 className="mt-5 text-3xl font-black tracking-[-0.045em] sm:text-5xl">A practical marketplace stack.</h2><p className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#142239]/5 px-4 py-2 text-xs text-[#657083]"><Sparkles size={15} className="text-[#ff6542]" />{caseData.role}</p></div>
              <div className="grid gap-px overflow-hidden rounded-[24px] border border-[#142239]/10 bg-[#142239]/10 sm:grid-cols-2">
                {stack.map(([label, value]) => <div key={label} className="bg-white/75 p-5 sm:p-6"><p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ff6542]">{label}</p><p className="mt-3 text-sm font-semibold text-[#4f5b70]">{value}</p></div>)}
              </div>
            </div>

            <div className="mt-20 overflow-hidden rounded-[30px] bg-[#142239] p-7 text-white sm:p-10 lg:flex lg:items-end lg:justify-between lg:gap-12 lg:p-14">
              <div><Kicker>Outcome</Kicker><h2 className="mt-5 max-w-3xl text-3xl font-black tracking-[-0.045em] sm:text-5xl">One marketplace, with the controls to keep it moving.</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/48 sm:text-base sm:leading-8">Dukkandaar combines consumer commerce with seller operations, quality governance, growth attribution, and human support—so each role can act without losing the shared context.</p></div>
              <a href="#projects" className="mt-8 inline-flex shrink-0 items-center gap-2 rounded-full bg-[#ffc83d] px-5 py-3 text-sm font-bold text-[#142239] transition hover:bg-white lg:mt-0">Explore more work <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default DukkandaarCaseStudy;
