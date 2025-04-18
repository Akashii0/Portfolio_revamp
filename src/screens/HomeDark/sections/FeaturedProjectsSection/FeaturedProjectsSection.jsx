import { ArrowRightIcon, GithubIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const projects = [
  {
    id: 1,
    title: "Otaku Torrent",
    description: "A modern and responsive FastAPI powered webapp that Bulk Downloads Animes",
    image: "/otakutorrent.png",
    year: "2025",
    role: "Full-Stack Developer",
    githubLink: "https://github.com/Akashii0/OtakuTorrent",
    liveDemoLink: ""
  },
  {
    id: 2,
    title: "Thought Chronicles",
    description: "A modern responsive and dynamic Blog webapp",
    image: "/thoughtchronicles.png",
    year: "2024",
    role: "Backend Developer",
    githubLink: "https://github.com/Akashii0/Thought_Chronicles",
    liveDemoLink: "https://thought-chronicles.vercel.app"
  },
  {
    id: 3,
    title: "Bookmark Manager Landing Page",
    description: "A modern and clean landing page design...",
    image: "/desktop-active-states.png",
    year: "2023",
    role: "Front-end Developer",
    githubLink: "",
    liveDemoLink: ""
  },
];


export const FeaturedProjectsSection = ({ isDarkMode }) => {
  return (
    <section id="work" className="w-full max-w-[1224px] mx-auto py-16 space-y-16">
      <div className="flex flex-col w-full items-start gap-2">
        <h2 className={`font-heading-two font-[number:var(--heading-two-font-weight)] ${isDarkMode ? 'text-neutralwhite' : 'text-neutralblack'} text-[length:var(--heading-two-font-size)] tracking-[var(--heading-two-letter-spacing)] leading-[var(--heading-two-line-height)] whitespace-nowrap [font-style:var(--heading-two-font-style)]`}>
          Featured Projects
        </h2>
        <p className={`font-body-medium font-[number:var(--body-medium-font-weight)] ${isDarkMode ? 'text-neutraloffwhite' : 'text-neutraldark-gray'} text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]`}>
          Here are some of the selected projects that showcase my passion for
          Backend development.
        </p>
      </div>

      <div className="space-y-16">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-row items-center gap-12">
            <Card className={`relative w-[600px] h-[600px] ${isDarkMode ? 'bg-[#1a1a1a]' : 'bg-[#F5F5F5]'} rounded-xl overflow-hidden border-[#000000]`}>
              <CardContent className="p-0 h-full">
                <Badge className={`absolute top-4 left-4 ${isDarkMode ? 'bg-neutral-950' : 'bg-white'} rounded-[100px] px-4 py-2 font-misc-tag font-[number:var(--misc-tag-font-weight)] ${isDarkMode ? 'text-neutralwhite' : 'text-neutralblack'} text-[length:var(--misc-tag-font-size)] tracking-[var(--misc-tag-letter-spacing)] leading-[var(--misc-tag-line-height)] [font-style:var(--misc-tag-font-style)]`}>
                  project
                </Badge>
                <img
                  className="absolute w-[490px] h-[351px] top-[124px] left-[55px] object-cover"
                  alt={project.title}
                  src={project.image}
                />
              </CardContent>
            </Card>

            <div className="flex flex-col items-start gap-8 flex-1">
              <div className="flex flex-col items-start gap-8 w-full">
                <div className="flex flex-col gap-4 w-full">
                  <h3 className={`font-[number:var(--heading-three-font-weight)] ${isDarkMode ? 'text-[#ffffff]' : 'text-neutralblack'} text-[length:var(--heading-three-font-size)] leading-[var(--heading-three-line-height)] font-heading-three tracking-[var(--heading-three-letter-spacing)] [font-style:var(--heading-three-font-style)]`}>
                    {project.title}
                  </h3>
                  <p className={`font-[number:var(--body-medium-font-weight)] ${isDarkMode ? 'text-neutraloffwhite' : 'text-neutraldark-gray'} text-[length:var(--body-medium-font-size)] leading-[var(--body-medium-line-height)] font-body-medium tracking-[var(--body-medium-letter-spacing)] [font-style:var(--body-medium-font-style)]`}>
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 w-full">
                <h5 className={`font-[number:var(--heading-five-font-weight)] ${isDarkMode ? 'text-neutralwhite' : 'text-neutralblack'} text-[length:var(--heading-five-font-size)] leading-[var(--heading-five-line-height)] whitespace-nowrap font-heading-five tracking-[var(--heading-five-letter-spacing)] [font-style:var(--heading-five-font-style)]`}>
                  PROJECT INFO
                </h5>
                <div className={`flex flex-col w-full border-b ${isDarkMode ? 'border-[#484848]' : 'border-[#E5E5E5]'}`}>
                  <div className={`flex items-center justify-between py-4 border-t ${isDarkMode ? 'border-[#484848]' : 'border-[#E5E5E5]'}`}>
                    <span className={`font-body-small font-[number:var(--body-small-font-weight)] ${isDarkMode ? 'text-neutralwhite' : 'text-neutralblack'} text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]`}>
                      Year
                    </span>
                    <span className={`font-body-small font-[number:var(--body-small-font-weight)] ${isDarkMode ? 'text-neutraloffwhite' : 'text-neutraldark-gray'} text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]`}>
                      {project.year}
                    </span>
                  </div>
                  <div className={`flex items-center justify-between py-4 border-t ${isDarkMode ? 'border-[#484848]' : 'border-[#E5E5E5]'}`}>
                    <span className={`font-body-small font-[number:var(--body-small-font-weight)] ${isDarkMode ? 'text-neutralwhite' : 'text-neutralblack'} text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]`}>
                      Role
                    </span>
                    <span className={`font-body-small font-[number:var(--body-small-font-weight)] ${isDarkMode ? 'text-neutraloffwhite' : 'text-neutraldark-gray'} text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]`}>
                      {project.role}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-start gap-1"
              >
                <div className="flex gap-1 items-center">
                  <span className="font-[number:var(--misc-link-font-weight)] text-brand-red text-[length:var(--misc-link-font-size)] leading-[var(--misc-link-line-height)] whitespace-nowrap font-misc-link tracking-[var(--misc-link-letter-spacing)] [font-style:var(--misc-link-font-style)]">
                    SEE ON GITHUB
                  </span>
                  <GithubIcon className="w-[26px] h-[26px] text-brand-red" />
                </div>
                <Separator className="w-full h-0.5 bg-brand-red" />
              </a>

              <a
                href={project.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-start gap-1"
              >
                <div className="flex gap-1 items-center">
                  <span className="font-[number:var(--misc-link-font-weight)] text-brand-red text-[length:var(--misc-link-font-size)] leading-[var(--misc-link-line-height)] whitespace-nowrap font-misc-link tracking-[var(--misc-link-letter-spacing)] [font-style:var(--misc-link-font-style)]">
                    LIVE DEMO
                  </span>
                  <ArrowRightIcon className="w-6 h-6 text-brand-red" />
                </div>
                <Separator className="w-full h-0.5 bg-brand-red" />
              </a>

            </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};