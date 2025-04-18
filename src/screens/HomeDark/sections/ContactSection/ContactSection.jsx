import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { Separator } from "../../../../components/ui/separator";

export const ContactSection = ({ isDarkMode }) => {
  const socialLinks = [
    {
      icon: <LinkedinIcon className={`w-8 h-8 ${isDarkMode ? 'text-white' : 'text-black'}`} />,
      href: "https://www.linkedin.com/in/abdulhakeem-raji-097619279",
      alt: "LinkedIn"
    },
    {
      icon: <GithubIcon className={`w-8 h-8 ${isDarkMode ? 'text-white' : 'text-black'}`} />,
      href: "https://github.com/Akashii0",
      alt: "GitHub"
    },
    {
      icon: <InstagramIcon className={`w-8 h-8 ${isDarkMode ? 'text-white' : 'text-black'}`} />,
      href: "https://www.instagram.com/akeem_rajii",
      alt: "Instagram"
    },
    // {
    //   icon: (
    //     <img
    //       className="w-7 h-[23px] mt-[5px] mx-0.5"
    //       alt="Group"
    //       src="/group.png"
    //     />
    //   ),
    //   alt: "Other Platform",
    // },
  ];

  const formFields = [
    { id: "name", label: "Name", placeholder: "John Doe", type: "input" },
    { id: "email", label: "Email", placeholder: "", type: "input" },
    { id: "subject", label: "Subject", placeholder: "", type: "input" },
    { id: "message", label: "Message", placeholder: "", type: "textarea" },
  ];

  return (
    <section id="contact" className="flex flex-col lg:flex-row lg:w-full w-[90%]  lg:max-w-[1224px] items-start gap-6 py-20 mx-auto">
      <div className="flex  lg:flex-col items-start justify-between flex-1 self-stretch">
        <div className="flex flex-col items-start gap-10 w-full">
          <div className="flex flex-col items-start gap-4 w-full">
            <h2 className={`font-heading-two font-[number:var(--heading-two-font-weight)] ${isDarkMode ? 'text-neutralwhite' : 'text-neutralblack'} text-[length:var(--heading-two-font-size)] tracking-[var(--heading-two-letter-spacing)] leading-[var(--heading-two-line-height)] [font-style:var(--heading-two-font-style)]`}>
              Let&apos;s connect
            </h2>

            <div className="flex flex-col items-start gap-2">
              <div className="flex items-start gap-[3px]">
                <span className={`font-body-medium font-[number:var(--body-medium-font-weight)] ${isDarkMode ? 'text-neutraloffwhite' : 'text-neutraldark-gray'} text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]`}>
                  Say hello at
                </span>

                <div className="flex flex-col items-start">
                  <span className={`font-body-medium font-[number:var(--body-medium-font-weight)] ${isDarkMode ? 'text-neutralwhite' : 'text-neutralblack'} text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]`}>
                    abdulkid151@gmail.com
                    <Separator className="w-full h-0.5 bg-brand-red" />
                  </span>
                  {/* <img
                    className="w-full h-px object-cover"
                    alt="Underline"
                    src="/underline.svg"
                  /> */}
                </div>
              </div>

              <div className="flex items-start gap-[3px]">
                <span className={`font-body-medium font-[number:var(--body-medium-font-weight)] ${isDarkMode ? 'text-neutraloffwhite' : 'text-neutraldark-gray'} text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]`}>
                  For more info, here&apos;s my
                </span>

                <div className="flex flex-col items-start">
                  <a
                    href="/resume.pdf" // Link to your resume file in the public directory
                    download="akashi_resume.pdf" // Specify the download filename
                    className="flex items-center"
                  >
                    <span className={`font-body-medium font-[number:var(--body-medium-font-weight)] ${isDarkMode ? 'text-neutralwhite' : 'text-neutralblack'} text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]`}>
                      resume
                      <Separator className="w-full h-0.5 bg-brand-red" />
                    </span>
                  </a>
                  {/* <img
                    className="w-full h-px object-cover"
                    alt="Line"
                    src="/line-7.svg"
                  /> */}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-6">
            {socialLinks.map((link, index) => (
              <div key={index} className="w-8 h-8">
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.alt}
                  className="hover:opacity-75 transition-opacity"
                >
                  {link.icon}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-auto pt-10 font-body-small font-[number:var(--body-small-font-weight)] ${isDarkMode ? 'text-neutraloffwhite' : 'text-neutraldark-gray'} text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]`}>
          © 2025 Raji Abdulhakeem
        </div>
      </div>

      <form
        action="https://formspree.io/f/mzzbzgvq"
        method="POST"
        className="contents" // 👈 This preserves layout!
      >
        <div className="flex flex-col items-start gap-12 flex-1  w-full">
          <div className="flex flex-col items-start gap-10 w-full">
            <div className="flex flex-col items-start gap-6 w-full">
              {formFields.map((field) => (
                <div
                  key={field.id}
                  className="flex flex-col items-start gap-2 w-full"
                >
                  <label
                    htmlFor={field.id}
                    className={`font-body-small font-[number:var(--body-small-font-weight)] ${isDarkMode ? 'text-neutraloffwhite' : 'text-neutraldark-gray'} text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]`}
                  >
                    {field.label}
                  </label>

                  {field.type === "input" ? (
                    <Card className={`w-full ${isDarkMode ? 'bg-[#1a1a1a]' : 'bg-[#F5F5F5]'} border-none rounded`}>
                      <CardContent className="p-0">
                        <Input
                          id={field.id}
                          name={field.id}
                          type={field.id === 'email' ? 'email' : 'text'}
                          required
                          className={`border-none bg-transparent font-body-medium font-[number:var(--body-medium-font-weight)] ${isDarkMode ? 'text-[#ffffff]' : 'text-neutralblack'} text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)] px-4 py-3 h-auto`}
                          placeholder={field.placeholder}
                        />
                      </CardContent>
                    </Card>
                  ) : (
                    <Card className={`w-full ${isDarkMode ? 'bg-[#1a1a1a]' : 'bg-[#F5F5F5]'} border-none rounded`}>
                      <CardContent className="p-0">
                        <Textarea
                          id={field.id}
                          name={field.id}
                          required
                          className={`border-none bg-transparent font-body-medium font-[number:var(--body-medium-font-weight)] ${isDarkMode ? 'text-[#ffffff]' : 'text-neutralblack'} text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)] px-4 py-3 min-h-[100px] resize-none`}
                          placeholder={field.placeholder}
                        />
                      </CardContent>
                    </Card>
                  )}
                </div>
              ))}
            </div>

            <Button type="submit" className="h-[54px] px-10 py-5 bg-brand-red rounded-[100px] hover:bg-app-primary/90">
              <span className="font-misc-button font-[number:var(--misc-button-font-weight)] text-neutralblack text-[length:var(--misc-button-font-size)] tracking-[var(--misc-button-letter-spacing)] leading-[var(--misc-button-line-height)] [font-style:var(--misc-button-font-style)]">
                SUBMIT
              </span>
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};