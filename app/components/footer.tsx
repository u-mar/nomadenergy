'use client'
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

export default function Footer() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <footer className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-300">
      
      {/* Left Section - Centered Tagline & Logo */}
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-xl md:text-2xl font-normal text-gray-800 text-center">
          Lighting Up Your Life
        </h2>
        <Image
          src="/images/logo2.png"
          alt="Nomad Energy Logo"
          width={500}
          height={300}
          className="h-auto"
        />
      </div>

      {/* Middle Section - Navigation (Added slight spacing) */}
      <div className="flex flex-col space-y-6 md:ml-4">
        <h3 className="text-md font-semibold text-gray-800">Company</h3>
        <nav className="flex flex-col space-y-3 text-gray-600">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <Link href="/about" className="hover:text-gray-900">About Us & Partners</Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center hover:text-gray-900"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              Services <FaChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isServicesOpen && (
              <div
                className="absolute left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg py-2 min-w-[200px] flex flex-col"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link href="/services/solar" className="block px-4 py-2 hover:bg-gray-200">Solar Services</Link>
                <Link href="/services/agriculture" className="block px-4 py-2 hover:bg-gray-200">Agriculture Services</Link>
              </div>
            )}
          </div>

          <Link href="/clients" className="hover:text-gray-900">Clients</Link>
          <Link href="/contact" className="hover:text-gray-900">Contact Us</Link>
        </nav>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="col-span-1 md:col-span-3 text-center text-sm text-gray-600 pt-6 border-t border-gray-300">
        © Copyright 2024. All rights reserved.
      </div>

    </footer>
  );
}