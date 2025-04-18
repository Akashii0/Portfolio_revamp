import React from "react";
import { AboutMeSection } from "./AboutMeSection";
import { Capabilities } from "./capabilities";
import { Experiences } from "./experiences";
import { ContactSection } from "../screens/HomeDark/sections/ContactSection/ContactSection"

export const AboutMe = ({ isDarkMode }) => {
  return (
    <div className="pt-[96px]"> {/* This adds space below the fixed navbar */}
      <AboutMeSection isDarkMode={isDarkMode} />
      <Capabilities isDarkMode={isDarkMode} />
      <Experiences isDarkMode={isDarkMode} />
      <ContactSection isDarkMode={isDarkMode} />
    </div>
  );
};