import React from "react";
import MadeWithLove from "../components/MadeWithLove";
import { RiInstagramLine, RiFacebookBoxLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer p-4 relative max-h-[400px] w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full h-auto">
        <MadeWithLove />
        <p className="text-xs text-gray-400 font-light">
          Designing and building beautiful spaces since 1997
        </p>
        <p className="text-xs text-gray-400 font-light">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>

        <nav>
          <div className="grid grid-flow-col gap-8 m-2">
            <a
              href="https://www.instagram.com/drrockit/?hl=en"
              target="_blank"
              className="text-gray-600 hover:text-teal-600 transition-colors duration-300 ease-in-out"
            >
              <RiInstagramLine size={24} />
            </a>
            <a
              href="https://www.facebook.com/ifears"
              target="_blank"
              className="text-gray-600 hover:text-teal-600 transition-colors duration-300 ease-in-out"
            >
              <RiFacebookBoxLine size={24} />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
