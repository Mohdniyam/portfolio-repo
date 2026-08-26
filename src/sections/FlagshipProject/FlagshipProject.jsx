import React from "react";
import { ArrowUpRight } from "lucide-react";

const FlagshipProject = () => {
  return (
    <section id="flagship" className="section-card rounded-[24px] border border-white/10 bg-[#121212] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 text-white">
      <div className="mb-8 text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.35em] text-orange-400">Featured Work</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white">
          UNICSI — a multi-tenant commerce platform built for operational scale.
        </h2>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#151515] via-[#191919] to-[#121212] p-6 md:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.35)]">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#b8b2b2]">Flagship Project</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Multi-Tenant Dropshipping & Commerce Platform</h3>
            <p className="mt-4 text-base leading-8 text-[#cfc8c8]">
              A production-grade commerce platform connecting suppliers, dropshippers, Shopify stores and administrators through centralized workflows for products, inventory, orders, shipping, invoicing and payouts.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://unicsi.com" target="_blank" rel="noreferrer" className="rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600">
                View Application
              </a>
              <a href="#contact" className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10">
                Discuss the Work
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0f0f0f] p-6">
            <h4 className="text-lg font-semibold text-white">What the platform handles</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#d8d0d0]">
              <li className="flex items-start gap-2"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />Supplier portal and dropshipper workflows</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />Product, variant and inventory management</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />Shopify synchronization and order lifecycle handling</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />Shipping, invoices, payouts and operational exceptions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlagshipProject;
