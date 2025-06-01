import React, { useEffect, useState, useRef } from "react";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Logo from "../assets/Images/logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();

    const handleScroll = () => {
      const sections = ["home", "about", "doctors", "services", "help", "news"];
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let current = "home";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop) {
          current = section;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const linkClass =
    "relative inline-block lg:text-[18px] md:text-[16px] text-[14px] font-medium transition-all duration-300 hover:text-[#007BFF] hover:brightness-125 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#007BFF] after:transition-all after:duration-300 after:w-0 hover:after:w-full";

  const activeClass = " text-[#007BFF] after:w-full";

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobil menyu (o‘ngdan chiqadigan modal) */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-1/2 sm:w-1/2 h-full bg-white z-50 shadow-2xl rounded-t-[10px] rounded-b-[10px] px-6 py-6 flex flex-col gap-6 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="self-end text-[28px] text-[#007BFF]"
          onClick={() => setMenuOpen(false)}
          aria-label="Menu yopish"
        >
          <HiOutlineX />
        </button>
        <nav className="flex flex-col gap-4 mt-4">
          {["home", "about", "doctors", "services", "news", "help"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className="text-[16px] font-medium relative pb-[4px]"
              style={{
                borderBottom: activeSection === id ? "2px solid #007BFF" : "2px solid transparent",
                width: "fit-content",
                transition: "border-color 0.3s",
                color: activeSection === id ? "#007BFF" : "#757575",
              }}
            >
              {id === "home"
                ? "Bosh sahifa"
                : id === "about"
                ? "Biz haqimizda"
                : id === "doctors"
                ? "Shifokorlar"
                : id === "services"
                ? "Xizmatlar"
                : id === "news"
                ? "Yangiliklar"
                : "Tashrif buyurish"}
            </a>
          ))}
        </nav>
      </div>

      <header
        className="sticky top-0 z-40 bg-white shadow-md w-full"
        style={{ WebkitBackdropFilter: "saturate(180%) blur(10px)", backdropFilter: "saturate(180%) blur(10px)" }}
      >
        <div className="container">
          {/* Yuqori kontakt qismi */}
          <div data-aos="fade-down" className="py-[10px] sm:py-[20px]">
            <div className="flex justify-between items-center border-b border-[#dfe3e8] pb-[10px]">
              <div className="flex gap-[5px] sm:gap-[30px]">
                <a href="tel:+998901234567" className="flex items-center gap-[6px]">
                  <BsTelephone className="xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#007BFF]" />
                  <span className="whitespace-nowrap xl:text-[18px] lg:text-[16px] sm:text-[14px] text-[12px] text-[#555555] font-medium hover:text-[#007BFF] transition-all duration-300">
                    +998-(90)-123-45-67
                  </span>
                </a>
                <a href="mailto:info@medica.com" className="flex items-center gap-[6px]">
                  <CiMail className="xl:text-[28px] lg:text-[26px] md:text-[24px] sm:text-[20px] text-[16px] text-[#007BFF]" />
                  <span className="xl:text-[18px] lg:text-[16px] sm:text-[14px] text-[12px] text-[#555555] font-medium hover:text-[#007BFF] transition-all duration-300">
                    info@medica.com
                  </span>
                </a>
              </div>
              <div className="flex items-center gap-[10px] sm:gap-[20px] sm:text-[22px] text-[18px] text-[#007BFF]">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebookF className="hover:brightness-125 hover:scale-90 transition-all duration-300" />
                </a>
                <a href="https://www.instagram.com/nevrolog_shoxyusupov/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="hover:brightness-125 hover:scale-90 transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Pastki nav qismi */}
          <div className="flex justify-between items-center py-[15px]">
            {/* Logo chapda */}
            <a href="/" data-aos="zoom-in" className="flex-shrink-0">
              <img
                src={Logo}
                alt="Logo"
                className="max-sm:w-[120px] hover:scale-95 transition-transform duration-300"
                draggable="false"
              />
            </a>

            {/* Nav va Button o'ng tomonda */}
            <div className="hidden md:flex items-center gap-[30px] ml-auto">
              <nav>
                <ul className="flex gap-[20px] xl:gap-[30px] items-center">
                  {["home", "about", "doctors", "services", "news"].map((id, index) => (
                    <li key={id} data-aos="fade-up-right" data-aos-duration={800 + index * 200}>
                      <a
                        href={`#${id}`}
                        onClick={(e) => handleClick(e, id)}
                        className={`whitespace-nowrap ${linkClass} ${
                          activeSection === id ? activeClass : "text-[#757575]"
                        }`}
                      >
                        {id === "home"
                          ? "Bosh sahifa"
                          : id === "about"
                          ? "Biz haqimizda"
                          : id === "doctors"
                          ? "Shifokorlar"
                          : id === "services"
                          ? "Xizmatlar"
                          : "Yangiliklar"}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#help"
                      onClick={(e) => handleClick(e, "help")}
                      className="py-[10px] px-[18px] bg-[#007BFF] text-white rounded-[6px] text-[14px] font-semibold hover:brightness-90 transition-all duration-300 whitespace-nowrap"
                    >
                      Tashrif buyurish
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Mobil: Button + Menu */}
            <div className="md:hidden flex items-center gap-[10px]">
              <a
                href="#help"
                onClick={(e) => handleClick(e, "help")}
                className="py-[6px] px-[12px] bg-[#007BFF] text-white rounded-[6px] sm:text-[14px] text-[12px] font-bold hover:brightness-90 transition-all duration-300"
              >
                Tashrif buyurish
              </a>
              <button onClick={() => setMenuOpen(true)} className="text-[32px] text-[#007BFF]" aria-label="Menu ochish">
                <HiOutlineMenu />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
