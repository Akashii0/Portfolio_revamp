import React from "react";
import { Separator } from "../components/ui/separator";
import { SkillList } from "../components/SkillList"; // Make sure this import path is correct

export const Capabilities = ({ isDarkMode }) => {
  const skills = [
    { skills: 'Python' },
    { skills: 'Javascript' },
    { skills: 'FastAPI' },
    { skills: 'PostgreSQL' },
    { skills: 'git' },
    { skills: 'SQLalchemy' },
    { skills: 'AI/ML' },
    { skills: 'sqlite3' },
    { skills: 'Linux' },
    { skills: 'react' },
    { skills: 'tailwindcss' },
    { skills: 'Problem Solving' },
  ];

  return (
    <section className="relative w-full py-16">
      <Separator
        className={`absolute bottom-0 w-full ${isDarkMode ? "bg-[#484848]" : "bg-[#E5E5E5]"
          }`}
      />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <h2
              className={`font-heading-one font-[number:var(--heading-one-font-weight)] ${isDarkMode ? "text-neutralwhite" : "text-neutralblack"
                } text-[length:var(--heading-one-font-size)] tracking-[var(--heading-one-letter-spacing)] leading-[var(--heading-one-line-height)] whitespace-nowrap [font-style:var(--heading-one-font-style)]`}
            >
            Capabilities
            </h2>
          </div>

          <div className="md:w-2/3 space-y-5">
            <p
              className={`font-body-medium font-[number:var(--body-medium-font-weight)] ${isDarkMode ? 'text-neutraloffwhite' : 'text-neutraldark-gray'} text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]`}
            >
              I am always eager to learn and grow, continuously expanding my
              expertise to stay at the forefront of Backend development.
            </p>

            <div className="flex flex-row gap-3 flex-wrap">
              {skills.map((skill, index) => (
                <SkillList key={index} skills={skill.skills} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
