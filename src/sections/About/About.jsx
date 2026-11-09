import { ArrowUpRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import img from "../../assets/images/emoji-profile.webp";
import resume from "../../assets/resume/mohd_niya_mul_haque.pdf";
import data from "../../../data.json";
import SectionHeading from "../../components/SectionHeading";

const careerHighlights = [
  { label: "Current", value: "Tech Lead & Full Stack Engineer" },
  { label: "Previously", value: "QuadB Technology · Embifi" },
  { label: "Focus", value: "SaaS · Commerce · Automation" },
];

export default function About() {
  const hero = data.Hero[0];

  const socialLinks = [
    { label: "LinkedIn", href: hero.linkedIn, Icon: Linkedin },
    { label: "GitHub", href: hero.gitHub, Icon: Github },
  ];

  return (
    <section id="about" className="section-pad">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20">
          <div className="relative max-w-md overflow-hidden rounded-[2rem] bg-[#161818]">
            <img
              src={img}
              alt="Mohd Niya Mul Haque"
              loading="lazy"
              className="aspect-[4/4.5] w-full object-cover object-top opacity-90 grayscale-[20%]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-24">
              <p className="flex items-center gap-2 text-xs text-white/60">
                <MapPin size={14} aria-hidden="true" />
                New Delhi, India · Available remotely
              </p>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="About" title="Product thinking meets engineering depth." />
            <p className="mt-8 max-w-2xl text-lg leading-9 text-white/60">
              I’m Mohd Niya Mul Haque, a software engineer and development partner with 3.5+ years of
              experience designing and building production software across SaaS, e-commerce and
              operational platforms.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/40">
              My work connects product thinking, system architecture and implementation. I can step
              into an early idea, an existing codebase or a complex integration challenge—and carry
              it toward dependable production software.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-secondary"
                >
                  <link.Icon size={16} aria-hidden="true" />
                  {link.label}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              ))}
              <a href={resume} download className="button button-secondary">
                <Download size={16} aria-hidden="true" />
                Résumé
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-5 border-t border-white/10 pt-10 md:grid-cols-3">
          {careerHighlights.map(({ label, value }) => (
            <div key={label}>
              <p className="eyebrow">{label}</p>
              <p className="mt-3 text-lg">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
