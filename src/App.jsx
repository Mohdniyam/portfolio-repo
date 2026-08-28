import ContactForm from "./sections/Contact/Contact";
import React, { Suspense, useEffect, useState } from "react";
import EngineeringPrinciples from "./sections/EngineeringPrinciples/EngineeringPrinciples";
import Experience from "./sections/Experience/Experience";
import FlagshipProject from "./sections/FlagshipProject/FlagshipProject";
const GithubContributions = React.lazy(() => import("./sections/GitHubGraph/GithubContributions"));
import Hero from "./sections/Hero/Hero";
import Nav from "./sections/Nav/Nav";
import Project from "./sections/Projects/Project";
import Services from "./sections/ServiceSection/Services";
const SkillsSection = React.lazy(() => import("./sections/Skills/SkillsSection"));
import Team from "./sections/Team/Team";
import WhatIBuild from "./sections/WhatIBuild/WhatIBuild";
import CaseStudy from "./pages/CaseStudy/CaseStudy";

export default function App() {
  const [hash, setHash] = useState(() =>
    typeof window !== "undefined" ? window.location.hash : ""
  );

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isCaseStudy = hash.startsWith("#/case-studies/");

  useEffect(() => {
    if (isCaseStudy || !hash.startsWith("#")) return;

    const sectionId = hash.slice(1);
    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView();
    });
  }, [hash, isCaseStudy]);

  if (isCaseStudy) {
    return (
      <div className="min-h-screen bg-fgm-black text-white">
        <CaseStudy key={hash} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-fgm-black text-white">
      <Nav />
      <main className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-5 px-4 pb-8 pt-24 sm:gap-8 sm:px-6 lg:grid-cols-[minmax(280px,360px)_minmax(0,1fr)] lg:px-8">
        <div className="w-full self-start lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-auto">
          <div className="flex justify-start">
            <Hero />
          </div>
        </div>

        <div
          className="min-w-0 w-full"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingTop: 'env(safe-area-inset-top, 0px)'
          }}
        >
          <div className="space-y-5 sm:space-y-8">
            <Services />
            <WhatIBuild />
            <FlagshipProject />
            <Experience />
            <Project />
            <EngineeringPrinciples />
            <Suspense fallback={<div className="py-6 text-center text-gray-400">Loading contributions...</div>}>
              <GithubContributions />
            </Suspense>
            <Suspense fallback={<div className="py-6 text-center text-gray-400">Loading skills...</div>}>
              <SkillsSection />
            </Suspense>
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}
