import React from "react";
import Logo from "../assets/Images/logo.svg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="mt-[30px] py-[20px] border-t-[2px] border-[#e0e0e0]">
        <div className="container">
          <div className="flex justify-between">
            <a href="/">
              <img
                src={Logo}
                alt="Logo"
                className="max-sm:w-[120px] hover:scale-95 transition-transform duration-300"
                draggable="false"
              />
            </a>
            <div className="flex items-center gap-[20px] text-[25px] text-[#007BFF]">
              <a href="https://www.facebook.com/">
                <FaFacebookF className="hover:brightness-140 hover:scale-90 transition-all duration-300" />
              </a>
              <a href="https://www.instagram.com/nevrolog_shoxyusupov/">
                <FaInstagram className="hover:brightness-140 hover:scale-90 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
