import React, { useState } from "react";
import { AboutMeSection } from "./sections/AboutMeSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { FeaturedProjectsSection } from "./sections/FeaturedProjectsSection/FeaturedProjectsSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { NavigationSection } from "./NavigationSection/NavigationSection";

export const HomeDark = ({ isDarkMode }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-[1440px] relative">
        <HeroSection isDarkMode={isDarkMode} />
        <FeaturedProjectsSection isDarkMode={isDarkMode} />
        <AboutMeSection isDarkMode={isDarkMode} />
        <ContactSection isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};
