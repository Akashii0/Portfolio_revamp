import { MoonIcon, SunIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const NavigationSection = ({ isDarkMode, onToggleTheme }) => {
  const navLinks = [
    { title: "Work", href: "#work" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <nav className="flex w-full items-center justify-between px-[60px] py-6">
      <h1 className={`font-['Bebas_Neue',Helvetica] font-normal ${isDarkMode ? 'text-neutraloffwhite' : 'text-neutralblack'} text-[32px] tracking-[-0.32px] leading-[48px]`}>
        RAJI ABDULHAKEEM
      </h1>

      <div className="flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className={`font-['Inter',Helvetica] font-medium ${isDarkMode ? 'text-neutraloffwhite hover:text-white' : 'text-neutralblack hover:text-black'} text-base tracking-[-0.48px] leading-6 transition-colors`}
          >
            {link.title}
          </a>
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="w-10 h-10 rounded-full"
        onClick={onToggleTheme}
        aria-label={isDarkMode ? "Toggle light mode" : "Toggle dark mode"}
      >
        {isDarkMode ? (
          <SunIcon className="h-6 w-6 text-neutraloffwhite" />
        ) : (
          <MoonIcon className="h-6 w-6 text-neutralblack" />
        )}
      </Button>
    </nav>
  );
};