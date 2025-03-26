'use client'
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaChevronDown } from "react-icons/fa";

const menuItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  {
    label: "SERVICES",
    subItems: [
      { label: "Solar Services", href: "/services/" },
      { label: "Agriculture Services/Supplies", href: "/services/agriculture-services" },
    ],
  },
  { label: "CLIENTS", href: "/partners" },
  { label: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (label: string) => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }
    setHoveredItem(label);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setHoveredItem(null);
    }, 200); // Adjust the delay as needed
  };

  return (
    <nav className="border-b">
      <div className="container mx-auto h-20 flex items-center justify-between px-2">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="Nomad Energy Logo" width={120} height={40} className="h-auto w-[120px]" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center flex-1 justify-center space-x-8">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative flex items-center group"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={item.href ?? "#"} className="text-sm font-medium">
                {item.label}
              </Link>
              {item.subItems && (
                <>
                  <FaChevronDown className="ml-1 h-4 w-4" />
                  <div className={`absolute top-full mt-2 ${hoveredItem === item.label ? 'flex' : 'hidden'} bg-blue-400 w-40 text-white shadow-lg rounded-md flex-col`}>
                    {item.subItems.map((subItem) => (
                      <Link key={subItem.label} href={subItem.href} className="block px-4 py-2 text-sm text-white hover:bg-gray-700">
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* "Connect with Us" Button */}
        <div className="flex items-center">
          <Link href="/contact">
            <Button className="bg-[#1e3a8a] px-6 py-2">
              CONNECT WITH US!!
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center justify-between p-4">
        <button onClick={toggleMenu} className="text-gray-500 focus:outline-none focus:text-gray-600">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 mt-4">
          {menuItems.map((item) => (
            <div key={item.label} className="flex flex-col items-center space-y-4">
              <Link href={item.href ?? "#"} className="text-sm font-medium">
                {item.label}
              </Link>
              {item.subItems && (
                <>
                  <button className="text-sm font-medium focus:outline-none flex items-center">
                    <FaChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="flex flex-col items-center mt-2">
                    {item.subItems.map((subItem) => (
                      <Link key={subItem.label} href={subItem.href} className="text-sm font-medium">
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
