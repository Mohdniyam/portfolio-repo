import { motion as Motion } from "framer-motion";

// Import all icon packs you want to support
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb"; // optional, if you plan to use Tabler icons later
import data from "../../../data.json";

// Combine all icons dynamically into one object
const iconMap = {
  ...FaIcons,
  ...SiIcons,
  ...TbIcons,
};

const SkillsSection = () => {
  const skills = data.Skills || [];

  return (
    <section id="skills" className="section-card rounded-[24px] border border-white/10 bg-[#121212] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 text-white">
      {/* Heading */}
      <div className="flex flex-col justify-start mb-10 md:text-start xxs:text-center md:my-3 xxs:my-6">
        <h1 className="text-4xl font-bold uppercase leading-none text-white sm:text-5xl xl:text-7xl">
          Work
        </h1>
        <h1 className="mt-1 text-4xl font-bold uppercase leading-none text-[#B6B4BD] sm:text-5xl xl:text-7xl">
          Expertise
        </h1>
      </div>

      {/* Skill Grid */}
      <div className="grid w-full grid-cols-1 gap-4 xxs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:gap-6">
        {skills.map((skill, index) => {
          const IconComponent = iconMap[skill.icon]; // Automatically resolves
          return (
            <Motion.div
              key={index}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex min-h-32 w-full flex-col items-center justify-center rounded-2xl bg-[#1a1a1a] p-4 shadow-md transition-all duration-300 group-hover:bg-[#222] sm:p-6">
                {IconComponent ? (
                  <IconComponent className={`text-5xl ${skill.color}`} />
                ) : (
                  <div className="text-gray-500 text-sm">Icon Not Found</div>
                )}
                <p className="mt-3 text-[#B6B4BD] font-medium text-sm uppercase tracking-wide">
                  {skill.name}
                </p>
              </div>
            </Motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
