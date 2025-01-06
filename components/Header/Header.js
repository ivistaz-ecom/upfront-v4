"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaSearch, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleBodyScroll = () => {
      const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
      if (isMenuOpen && isMobile) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    handleBodyScroll();

    // Reapply scroll behavior on window resize
    window.addEventListener("resize", handleBodyScroll);

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
      window.removeEventListener("resize", handleBodyScroll);
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/our-story" },
    { name: "Our Team", href: "/our-team" },
    { name: "Why Workforce Wellbeing", href: "/why-workforce-wellbeing" },
    { name: "Impact Stories", href: "/impact-stories" },
    { name: "Blogs", href: "/blogs" },
    { name: "News and Publications", href: "/news-and-publications" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <div className="bg-white shadow-md p-3 lg:px-0 px-4 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center container mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/HomePage/logo-upfront.png"
              width={70}
              height={70}
              alt="Logo"
              priority
            />
          </Link>
        </div>

        {/* Search and Menu */}
        <div className="flex items-center space-x-8">
          {/* Search */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <SearchBar />
          </div>

          {/* Animated Menu Icon */}
          <div
            className="flex flex-col items-end space-y-1 cursor-pointer"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <div
              className={`w-8 h-1 bg-gray-400 transform transition-transform duration-300 ${
                isMenuOpen ? "translate-y-2 rotate-[-45deg]" : ""
              }`}
            ></div>
            <div
              className={`w-8 h-1 bg-gray-400 transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`w-8 h-1 bg-gray-400 transform transition-transform duration-300 ${
                isMenuOpen ? "-translate-y-2 rotate-45" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="absolute left-0 w-full bg-gray-50 shadow-lg z-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 container mx-auto">
            {navItems.map((item, index) => (
              <div key={index} className="border-b pb-2">
                <Link
                  href={item.href}
                  className={`hover:text-[#E82B52] ${
                    pathName === item.href
                      ? "font-bold text-[#E82B52]"
                      : "text-[#262626]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <p className="flex justify-between items-end group text-xl">
                    <span className="lg:group-hover:translate-x-7 transition-all duration-500 flex items-center gap-3">
                      <p className="bg-red-600 h-1 w-7 lg:mx-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden lg:block"></p>
                      {item.name}
                    </span>
                    <FaChevronRight className="group-hover:translate-x-1 transition-all duration-500 lg:group-hover:scale-125" />
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
