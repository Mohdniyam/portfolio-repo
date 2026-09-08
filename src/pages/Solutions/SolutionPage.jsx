import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { solutions } from "../../data/solutions";
import { preserveCampaignParams, trackEvent } from "../../utils/analytics";
import SolutionNav from "../../components/solutions/SolutionNav";
import SolutionHero from "../../components/solutions/SolutionHero";
import { AudienceProblems, AudienceSolutions, FitStrip, RelevantServices, WhySolutionPartner, WorkflowExample } from "../../components/solutions/AudienceSections";
import SolutionProof from "../../components/solutions/SolutionProof";
import SolutionProcess from "../../components/solutions/SolutionProcess";
import AudienceFAQ from "../../components/solutions/AudienceFAQ";
import ContactForm from "../../sections/Contact/Contact";
import Footer from "../../sections/Footer/Footer";

function updateMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector);
  if (!element) { element = document.createElement("meta"); Object.entries(attribute).forEach(([key, val]) => element.setAttribute(key, val)); document.head.appendChild(element); }
  element.setAttribute("content", value);
}

export default function SolutionPage({ slug }) {
  const solution = solutions[slug];
  useEffect(() => {
    if (!solution) return;
    preserveCampaignParams();
    document.title = solution.meta.title;
    updateMeta('meta[name="description"]', { name: "description" }, solution.meta.description);
    updateMeta('meta[property="og:title"]', { property: "og:title" }, solution.meta.title);
    updateMeta('meta[property="og:description"]', { property: "og:description" }, solution.meta.description);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = `${window.location.origin}/solutions/${slug}`;
    trackEvent("solution_page_view", { audience: slug, landing_page: window.location.pathname });
    window.scrollTo(0, 0);
  }, [slug, solution]);

  if (!solution) return <main className="grid min-h-screen place-items-center bg-ink px-5 text-center text-white"><div><p className="eyebrow justify-center">Solution not found</p><h1 className="mt-5 text-4xl font-medium">This audience page does not exist.</h1><p className="mt-4 text-white/45">Explore the main website to find the right service or project.</p><a href="/" className="button button-primary mt-8"><ArrowLeft size={16} />Back to homepage</a></div></main>;

  return <div className="min-h-screen overflow-hidden bg-ink text-white">
    <SolutionNav audience={solution.audience} />
    <main>
      <SolutionHero solution={solution} slug={slug} />
      <FitStrip items={solution.fit} />
      <AudienceProblems problems={solution.problems} />
      <AudienceSolutions items={solution.builds} />
      <WorkflowExample items={solution.workflow} />
      <RelevantServices items={solution.services} />
      <SolutionProof proof={solution.proof} slug={slug} />
      <SolutionProcess stages={solution.process} />
      <WhySolutionPartner />
      <AudienceFAQ items={solution.faq} />
      <ContactForm sourcePage={`/solutions/${slug}`} audience={slug} defaultProjectType={solution.projectType} />
    </main>
    <Footer />
  </div>;
}
