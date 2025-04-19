import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../components/ui/button";

export const NavigationSection = ({ isDarkMode, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { title: "Projects", href: "#work" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    setMenuOpen(false); // Close mobile menu on nav click

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
      } else if (window.location.pathname !== "/about") {
        window.location.href = "/about";
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
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-[60px] py-6 backdrop-blur-md transition-colors duration-300 ${
        isDarkMode ? "bg-[rgba(18,18,18,0.7)]" : "bg-[rgba(255,255,255,0.7)]"
      }`}
    >
      {/* Logo */}
      <a href="/">
        <h1 className={`font-['Bebas_Neue',Helvetica] font-normal ${isDarkMode ? 'text-neutraloffwhite' : 'text-neutralblack'} text-[32px] tracking-[-0.32px] leading-[48px]`}>
          Akashi
        </h1>
      </a>

      {/* Center Nav Links (desktop only) */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-8 items-center">
        {navLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link.href);
            }}
            className={`font-['Inter',Helvetica] font-medium ${isDarkMode ? 'text-neutraloffwhite hover:text-white' : 'text-neutralblack hover:text-black'} text-base tracking-[-0.48px] leading-6 transition-colors`}
          >
            {link.title}
          </a>
        ))}
      </div>

      {/* Theme + Mobile Menu Toggle (right) */}
      <div className="flex items-center gap-4 md:gap-0">
        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="w-[44px] h-[44px]"
          onClick={onToggleTheme}
          aria-label={isDarkMode ? "Toggle light mode" : "Toggle dark mode"}
        >
          {isDarkMode ? (
            <SunIcon className="h-6 w-6 text-neutraloffwhite" />
          ) : (
            <MoonIcon className="h-6 w-6 text-neutralblack" />
          )}
        </Button>

        {/* Mobile Menu Button (hamburger) */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="w-[44px] h-[44px] flex items-center justify-center"
          >
            {menuOpen ? (
              <XIcon className={`w-6 h-6 ${isDarkMode ? "text-neutraloffwhite" : "text-neutralblack"}`} />
            ) : (
              <MenuIcon className={`w-6 h-6 ${isDarkMode ? "text-neutraloffwhite" : "text-neutralblack"}`} />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div
          className={`absolute top-full left-0 w-full py-6 z-40 transition-all backdrop-blur-md ${
            isDarkMode ? "bg-[rgba(0,0,0,0.9)]" : "bg-[rgba(255,255,255,0.7)]"
          }`}
        >
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`text-lg font-semibold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
