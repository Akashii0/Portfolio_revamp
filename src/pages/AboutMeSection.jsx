import React from "react";
// import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

export const AboutMeSection = ({ isDarkMode }) => {
  return (
    <section id="aboutme" className="relative w-full py-16">
      <Separator className={`absolute bottom-0 w-full ${isDarkMode ? 'bg-[#484848]' : 'bg-[#E5E5E5]'}`} />

      <div className=" mx-auto w-[90%] ">
        <div className="flex flex-col lg:flex-row gap-8 ">
          <div className="lg:w-1/3">
            <h2 className={`font-heading-one font-[number:var(--heading-one-font-weight)] ${isDarkMode ? 'text-neutralwhite' : 'text-neutralblack'} text-[length:var(--heading-one-font-size)] tracking-[var(--heading-one-letter-spacing)] leading-[var(--heading-one-line-height)] whitespace-nowrap [font-style:var(--heading-one-font-style)]`}>
              About me
            </h2>
          </div>

          <div className="lg:w-2/3">
                <div className="flex flex-col gap-4">
                  <h3 className={`font-heading-three font-[number:var(--heading-three-font-weight)] ${isDarkMode ? 'text-[#ffffff]' : 'text-neutralblack'} text-[length:var(--heading-three-font-size)] tracking-[var(--heading-three-letter-spacing)] leading-[var(--heading-three-line-height)] [font-style:var(--heading-three-font-style)]`}>
                  I am a passionate backend developer and AI/ML enthusiast with strong experience
                  in building scalable web services and developing intelligent systems.
                  </h3>

                  <p className={`font-body-medium font-[number:var(--body-medium-font-weight)] ${isDarkMode ? 'text-neutraloffwhite' : 'text-neutraldark-gray'} text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]`}>
                    My technical expertise lies in Python programming, FastAPI backend development, and implementing machine learning models to solve complex problems.
                    I enjoy designing efficient, high-performance APIs and integrating machine learning pipelines to drive innovation and automation. Whether it's creating data-driven solutions, optimizing backend systems, or deploying AI models into production, I thrive on tackling challenging projects
                     and continuously learning the latest technologies.
                  </p>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};