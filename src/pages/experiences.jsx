import React from "react";
import { Separator } from "../components/ui/separator";

const experienceData = [
    {
        role: "Backend Developer",
        company: "GrandGale Tech",
        period: "Feb 2025 – Present",
        description:
            "I'm currently a backend developer at Grandgale Tech, where I build scalable APIs and server-side logic for modern web applications. I work closely with cross-functional teams to deliver efficient, secure, and high-performing backend solutions.",
    },
    {
        role: "Backend Development Lead",
        company: "Google Developer Groups",
        period: "Oct 2024 – Present",
        description:
            "As the Backend Lead, I am responsible for overseeing the backend development efforts within the club, guiding team members through the architecture, design, and implementation of server-side solutions. Designing scalable, efficient APIs and databases to support front-end applications.",
    },
    {
        role: "AI/ML Developer",
        company: "DalensAI",
        period: "May 2024 – Sep 2024",
        description:
            "During my time, i developed a computer vision system aimed at detecting animals in real-time using image processing and machine learning techniques. The objective was to create an automated solution that could accurately identify and track various species in different environments.",
    },
    {
        role: "Freelance Web Developer",
        company: "Upwork",
        period: "2023 – Present",
        description:
            "Built responsive websites for startups and personal brands. Delivered performance-focused Business logics and clean reusable code.",
    },
];

export const Experiences = ({ isDarkMode }) => {
    return (
        <section className="relative w-full py-20">
            <Separator
                className={`absolute bottom-0 w-full ${isDarkMode ? "bg-[#484848]" : "bg-[#E5E5E5]"
                    }`}
            />

            <div className=" mx-auto w-[90%]">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/3">
                        <h2
                            className={`font-heading-one font-[number:var(--heading-one-font-weight)] ${isDarkMode ? "text-neutralwhite" : "text-neutralblack"
                                } text-[length:var(--heading-one-font-size)] tracking-[var(--heading-one-letter-spacing)] leading-[var(--heading-one-line-height)] whitespace-nowrap [font-style:var(--heading-one-font-style)]`}
                        >
                            Experiences
                        </h2>
                    </div>

                    <div className="lg:w-2/3 flex flex-col gap-12">
                        {experienceData.map((exp, index) => (
                            <div
                                key={index}
                                className={`flex flex-col ${index !== experienceData.length - 1
                                    ? "border-b border-neutral-800 pb-6"
                                    : ""
                                    }`}
                            >
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3
                                            className={`text-xl sm:text-2xl font-semibold ${isDarkMode ? "text-neutralwhite" : "text-neutralblack"
                                                }`}
                                        >
                                            {exp.role}
                                        </h3>
                                        <p
                                            className={`text-sm sm:text-base font-medium mt-1 ${isDarkMode
                                                ? "text-neutraloffwhite"
                                                : "text-neutralgray"
                                                }`}
                                        >
                                            {exp.company}
                                        </p>
                                    </div>

                                    <p
                                        className={`text-xs sm:text-sm font-medium ${isDarkMode
                                            ? "text-neutraloffwhite"
                                            : "text-neutraldark-gray"
                                            }`}
                                    >
                                        {exp.period}
                                    </p>
                                </div>

                                <p
                                    className={`mt-4 text-sm sm:text-base ${isDarkMode
                                        ? "text-neutraloffwhite"
                                        : "text-neutraldark-gray"
                                        }`}
                                >
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};