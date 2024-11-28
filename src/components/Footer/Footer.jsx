import React from "react";
import { BsDiscord, BsInstagram, BsTwitter } from "react-icons/bs";
import "../Css/Footer.css"

function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center ">
        {/* Logo and Social Media Icons */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          {/* Logo */}
          <div className="text-3xl font-bold">unine</div>
          {/* Social Icons */}
          <div className="flex space-x-4 md:mt-3 lg:mt-1 sm:mt-3">
            <a href="#" aria-label="Twitter">
             <BsTwitter/>
            </a>
            <a href="#" aria-label="Instagram">
              <BsInstagram/>
            </a>
            <a href="#" aria-label="Discord">
              <BsDiscord/>
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="text-center md:text-left space-y-2 footer ">
          <p>Technology Park 8-14</p>
          <p>Marie Curie Street</p>
          <p>08042 Barcelona</p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-10 space-y-4 md:space-y-0 md:space-x-10 text-center md:text-left pb-5 pt-8">
          <div className="space-y-2 flex flex-col footer">
            <a href="#" className="hover:underline">
              Learn
            </a>
            <a href="#" className="hover:underline">
              Apps
            </a>
            <a href="#" className="hover:underline">
              Community
            </a>
          </div>
          <div className="space-y-2 flex flex-col">
            <a href="#" className="hover:underline">
              Legal Mentions
            </a>
            <a href="#" className="hover:underline">
              Terms of Services
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-900 text-center py-4 text-sm ">
        © 2022 COPYRIGHT BY UNINE
      </div>
    </footer>
  );
}

export default Footer;
