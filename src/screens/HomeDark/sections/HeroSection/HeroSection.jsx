import { GithubIcon, LinkedinIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = ({ isDarkMode }) => {
  return (
    <section className="container flex flex-col lg:flex-row items-center justify-between py-32 gap-8">
      <div className="flex flex-col w-full lg:w-1/2 items-start gap-10">
        <div className="flex flex-col items-start gap-2 w-full">
          <h1 className={`font-heading-one font-[number:var(--heading-one-font-weight)] ${isDarkMode ? 'text-neutralwhite' : 'text-neutralblack'} text-[length:var(--heading-one-font-size)] tracking-[var(--heading-one-letter-spacing)] leading-[var(--heading-one-line-height)] [font-style:var(--heading-one-font-style)]`}>
            hi, i am <br />
            Raji Abdulhakeem.
          </h1>

          <p className={`font-body-medium font-[number:var(--body-medium-font-weight)] ${isDarkMode ? 'text-neutraloffwhite' : 'text-neutraldark-gray'} text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]`}>
            A passionate Backend-end developer transforming ideas into
            sleek, functional, and user-friendly websites.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button className="h-[54px] pl-6 pr-1.5 py-5 bg-brand-red rounded-[100px] text-neutralblack hover:bg-brand-red/90">
            <a
              href="/resume.pdf" // Link to your resume file in the public directory
              download="akashi_resume.pdf" // Specify the download filename
              className="flex items-center"
            >
              <span className="font-misc-button font-[number:var(--misc-button-font-weight)] text-[length:var(--misc-button-font-size)] tracking-[var(--misc-button-letter-spacing)] leading-[var(--misc-button-line-height)] [font-style:var(--misc-button-font-style)]">
                RESUME
              </span>
              <div className="relative w-[42px] h-[42px] ml-3 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-neutralblack rounded-[5px]" />
              </div>
            </a>
          </Button>

          <Button 
            onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
            }}
          className="h-[54px] pl-6 pr-1.5 py-5 bg-brand-red rounded-[100px] text-neutralblack hover:bg-brand-red/90">
            <span className="font-misc-button font-[number:var(--misc-button-font-weight)] text-[length:var(--misc-button-font-size)] tracking-[var(--misc-button-letter-spacing)] leading-[var(--misc-button-line-height)] [font-style:var(--misc-button-font-style)]">
              CONTACT ME
            </span>
            <div className="relative w-[42px] h-[42px] ml-3 flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-neutralblack rounded-[5px]" />
            </div>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className={`w-[54px] h-[54px] ${isDarkMode ? 'bg-[#222222] hover:bg-[#333333]' : 'bg-[#f5f5f5] hover:bg-[#e5e5e5]'} rounded-[100px] border-0`}
          >
            <a
              href="https://www.linkedin.com/in/abdulhakeem-raji-097619279"
            >
            <LinkedinIcon className={`w-[26px] h-[26px] ${isDarkMode ? 'text-white' : 'text-black'}`} />
            </a>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className={`w-[54px] h-[54px] ${isDarkMode ? 'bg-[#222222] hover:bg-[#333333]' : 'bg-[#f5f5f5] hover:bg-[#e5e5e5]'} rounded-[100px] border-0`}
          >
            <a
              href="https://github.com/Akashii0"
            >
            <GithubIcon className={`w-[26px] h-[26px] ${isDarkMode ? 'text-white' : 'text-black'}`} />
            </a>
          </Button>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-end">
        <img
          className="w-full lg:max-w-[500px] h-auto object-cover rounded-[20px]"
          alt="Raji Abdulhakeem"
          src="/profile.jpg"
        />
      </div>
    </section>
  );
};