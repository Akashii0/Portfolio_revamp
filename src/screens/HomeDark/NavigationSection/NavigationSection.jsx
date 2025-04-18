import { MoonIcon, SunIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../components/ui/button";

export const NavigationSection = ({ isDarkMode, onToggleTheme }) => {
  const navLinks = [
    { title: "Projects", href: "#work" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "#contact" },
  ];

  // These are for smooth scrolling from the navbar to the Work/Contact Section
  const handleNavClick = (href) => {
    if (href === "#work") {
      if (window.location.pathname !== "/") {
        window.location.href = "/";
      } else {
        const section = document.getElementById("work");
        if (section) {
          const navbarHeight = document.querySelector("nav").offsetHeight;
          const offset = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          window.scrollTo({ top: offset, behavior: "smooth" });
        }
      }
    } else if (href === "#contact") {
      const section = document.getElementById("contact");
      if (section) {
        const navbarHeight = document.querySelector("nav").offsetHeight;
        const offset = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: offset, behavior: "smooth" });
      } else {
        // If the section doesn't exist, navigate to the about page (if needed)
        if (window.location.pathname !== "/about") {
          window.location.href = "/about";
        }
      }
    } else if (href === "/about") {
      if (window.location.pathname === "/about") {
        const section = document.getElementById("aboutme");
        if (section) {
          const navbarHeight = document.querySelector("nav").offsetHeight;
          const offset = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          window.scrollTo({ top: offset, behavior: "smooth" });
        }
      } else {
        window.location.href = "/about";
      }
    } else {
      window.location.href = href;
    }
  };


  return (
    // <nav className="flex w-full items-center justify-between px-[60px] py-6">
    // <nav className={`fixed top-0 left-0 w-full z-50 shadow-md flex items-center justify-between px-[60px] py-6 transition-colors duration-300 ${isDarkMode ? 'bg-neutralblack' : 'bg-white'
    //   }`}>
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-[60px] py-6 backdrop-blur-md transition-colors duration-300 ${
        isDarkMode
          ? 'bg-[rgba(18,18,18,0.7)]'
          : 'bg-[rgba(255,255,255,0.7)]'
      }`}
    >
      <a href="/"
      >
      <h1 className={`font-['Bebas_Neue',Helvetica] font-normal ${isDarkMode ? 'text-neutraloffwhite' : 'text-neutralblack'} text-[32px] tracking-[-0.32px] leading-[48px]`}>
        Akashi
      </h1>
      </a>

      <div className="flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            onClick={(e) => {
              e.preventDefault(); // Prevent default link behavior
              handleNavClick(link.href); // Call the navigation function
            }}
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