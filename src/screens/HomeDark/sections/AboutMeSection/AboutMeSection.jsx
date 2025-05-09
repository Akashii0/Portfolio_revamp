import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const AboutMeSection = ({ isDarkMode }) => {
  return (
    <section className="relative w-full py-16">
      <Separator className={`absolute bottom-0 w-full ${isDarkMode ? 'bg-[#484848]' : 'bg-[#E5E5E5]'}`} />

      <div className="mx-auto w-[90%]">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="md:w-1/3">
            <h2 className={`font-heading-one font-[number:var(--heading-one-font-weight)] ${isDarkMode ? 'text-neutralwhite' : 'text-neutralblack'} text-[86px] md:text-[length:var(--heading-one-font-size)] tracking-[var(--heading-one-letter-spacing)] leading-[var(--heading-one-line-height)] whitespace-nowrap [font-style:var(--heading-one-font-style)]`}>
              About me
            </h2>
          </div>

          <div className="lg:w-2/3">
            <Card className="border-0 bg-transparent">
              <CardContent className="p-0 space-y-12">
                <div className="flex flex-col gap-4 w-full">
                  <h3 className={`font-heading-three font-[number:var(--heading-three-font-weight)] ${isDarkMode ? 'text-[#ffffff]' : 'text-neutralblack'} text-2xl md:text-[length:var(--heading-three-font-size)] tracking-[var(--heading-three-letter-spacing)] leading-[var(--heading-three-line-height)] [font-style:var(--heading-three-font-style)]`}>
                  Backend developer focused on building fast, reliable, and scalable systems.
                  </h3>

                  <p className={`font-body-medium font-[number:var(--body-medium-font-weight)] ${isDarkMode ? 'text-neutraloffwhite' : 'text-neutraldark-gray'} text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]`}>
                  I’m a backend developer who thrives on building clean, scalable, and efficient systems. 
                  I enjoy turning complex problems into elegant backend solutions whether it’s designing APIs, managing databases, or optimizing server performance. 
                  With a strong focus on reliability and maintainability,
                  I love working behind the scenes to make sure everything just works.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <a
                    href="/about"
                    className="w-fit font-misc-link font-[number:var(--misc-link-font-weight)] text-brand-red text-[length:var(--misc-link-font-size)] tracking-[var(--misc-link-letter-spacing)] leading-[var(--misc-link-line-height)] whitespace-nowrap [font-style:var(--misc-link-font-style)]"
                  >
                    MORE ABOUT ME
                    <Separator className="w-full h-0.5 bg-brand-red" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};