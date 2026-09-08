import { useEffect, useState } from "react";
import Nav from "./sections/Nav/Nav";
import Hero from "./sections/Hero/Hero";
import Services from "./sections/ServiceSection/Services";
import FlagshipProject from "./sections/FlagshipProject/FlagshipProject";
import Project from "./sections/Projects/Project";
import EngineeringPrinciples from "./sections/EngineeringPrinciples/EngineeringPrinciples";
import ContactForm from "./sections/Contact/Contact";
import TrustBar from "./sections/TrustBar/TrustBar";
import Problems from "./sections/Problems/Problems";
import Capabilities from "./sections/Capabilities/Capabilities";
import Process from "./sections/Process/Process";
import WhyWorkWithMe from "./sections/WhyWorkWithMe/WhyWorkWithMe";
import About from "./sections/About/About";
import Technology from "./sections/Technology/Technology";
import FAQ from "./sections/FAQ/FAQ";
import Footer from "./sections/Footer/Footer";
import CaseStudy from "./pages/CaseStudy/CaseStudy";

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const isCaseStudy = hash.startsWith("#/case-studies/");

  useEffect(() => {
    if (isCaseStudy) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.replace(/^#/, "");
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
  }, [hash, isCaseStudy]);

  if (isCaseStudy) return <CaseStudy key={hash} />;

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-white">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Problems />
        <Services />
        <FlagshipProject />
        <Project />
        <Capabilities />
        <Process />
        <WhyWorkWithMe />
        <About />
        <EngineeringPrinciples />
        <Technology />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
