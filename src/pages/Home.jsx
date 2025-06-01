import React, { useEffect } from "react";
import { BsTelephone } from "react-icons/bs";
import { SlClock } from "react-icons/sl";
import { MdOutlineMedicalServices } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import HomeBanner from "../assets/Images/HomeBanner.webp";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <section id="home" className="relative overflow-hidden xl:py-[64px]">
        <div className="container mx-auto">
          <div className="flex lg:flex-row flex-col items-center justify-between gap-8 relative">
            <div className="max-w-[490px] xl:max-w-[540px] text-center lg:text-left mt-[50px] lg:mt-0 z-10">
              <span
                data-aos="fade-down"
                data-aos-duration="1000"
                className="uppercase text-[#007BFF] xl:text-[18px] lg:text-[16px] text-[15px] font-bold border-b-[3px] border-[#007BFF]"
              >
                Tibbiyot markazi
              </span>
              <h1
                data-aos="fade-right"
                data-aos-duration="1000"
                className="sm:text-[40px] text-[25px] font-bold mt-[10px] leading-tight"
              >
                Oilangiz salomatligi uchun tibbiy xizmatlar
              </h1>
              <p
                data-aos="fade-right"
                data-aos-duration="1800"
                className="max-w-[450px] xl:text-[16px] sm:text-[15px] text-[12px] text-[#555555] font-medium mt-[5px] mx-auto lg:mx-0"
              >
                Biz siz va oilangiz uchun zamonaviy, ishonchli va sifatli tibbiy
                xizmatlarni taqdim etamiz. Har bir bemor biz uchun alohida
                e’tibor va g‘amxo‘rlikka loyiq.
              </p>
              <div
                data-aos="fade-up-right"
                data-aos-duration="2000"
                className="mt-[20px]"
              >
                <a
                  href="#help"
                  className="sm:py-[10px] py-[8px] xl:px-[18px] sm:px-[16px] px-[12px] text-[14px] sm:text-[16px] xl:text-[18px] text-white font-semibold tracking-wider bg-[#007BFF] rounded-[6px] border hover:brightness-90 transition-all duration-300"
                >
                  Navbat olish
                </a>
              </div>
            </div>

            {/* Rasm bo‘limi — har doim container ichida */}
            <div className="w-full max-w-[600px] xl:max-w-[800px] mt-[20px] lg:mt-0">
              <img
                src={HomeBanner}
                alt="HomeBanner"
                data-aos="fade-left"
                data-aos-duration="1600"
                className="w-full"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info block */}
      <div
        data-aos="fade-right"
        data-aos-duration="1200"
        className="xl:w-[1400px] lg:w-[970px] w-[900px] xl:h-[250px] h-[220px] shadow-[5px_5px_15px_#dfe3e8] xl:py-[50px] lg:py-[40px] py-[30px] xl:px-[150px] lg:px-[80px] px-[60px] rounded-r-[10px] mt-[2px] relative max-md:hidden"
      >
        <div className="container">
          <div className="flex gap-[20px] justify-between">
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              className="flex items-start gap-[20px]"
            >
              <span className="flex justify-center items-center w-[45px] h-[45px] rounded-[50px] bg-[#007BFF]">
                <BsTelephone className="text-white text-[24px]" />
              </span>
              <div>
                <h2 className="xl:text-[24px] text-[22px] font-bold">
                  Bog'lanish
                </h2>
                <div className="flex flex-col mt-[15px]">
                  <a
                    href="tel:+998901234567"
                    className="xl:text-[18px] text-[16px] text-[#555555] hover:text-[#007BFF] hover:brightness-125 transition-all duration-300"
                  >
                    +998-(90)-123-45-67
                  </a>
                  <a
                    href="mailto:info@medica.com"
                    className="xl:text-[18px] text-[16px] text-[#555555] hover:text-[#007BFF] hover:brightness-125 transition-all duration-300"
                  >
                    info@medica.com
                  </a>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              className="flex items-start gap-[20px]"
            >
              <span className="flex justify-center items-center w-[45px] h-[45px] rounded-[50px] bg-[#007BFF]">
                <SlClock className="text-white text-[24px]" />
              </span>
              <div>
                <h2 className="xl:text-[24px] text-[22px] font-bold">
                  Ish vaqti
                </h2>
                <div className="flex flex-col mt-[15px]">
                  <span className="xl:text-[18px] text-[16px] text-[#555555]">
                    Du–Ju: 8:00–17:00
                  </span>
                  <span className="xl:text-[18px] text-[16px] text-[#555555]">
                    Shanba: 9:00–15:30
                  </span>
                  <span className="xl:text-[18px] text-[16px] text-[#555555]">
                    Yakshanba: 9:00–15:30
                  </span>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              className="flex items-start gap-[20px]"
            >
              <span className="flex justify-center items-center w-[45px] h-[45px] rounded-[50px] bg-[#007BFF]">
                <MdOutlineMedicalServices className="text-white text-[24px]" />
              </span>
              <div>
                <h2 className="xl:text-[24px] text-[22px] font-bold">
                  Xizmatlar
                </h2>
                <div className="flex flex-col mt-[15px]">
                  <span className="xl:text-[18px] text-[16px] text-[#555555]">
                    Kardiologiya
                  </span>
                  <span className="xl:text-[18px] text-[16px] text-[#555555]">
                    Gastroenterolog
                  </span>
                  <span className="xl:text-[18px] text-[16px] text-[#555555]">
                    Ortopediya
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#about"
          data-aos="zoom-in"
          data-aos-duration="1600"
          className="flex justify-center items-center absolute w-[50px] h-[50px] rounded-[50px] text-[20px] bg-[#007BFF] text-white right-[-28px] top-[40%]"
        >
          <FaChevronDown />
        </a>
      </div>
      <div className="flex justify-center">
        <div className="container">
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="md:hidden w-full max-w-[600px] min-h-[600px] shadow-[5px_5px_15px_#dfe3e8] py-10 px-8 rounded-[6px] relative flex flex-col justify-between mt-12 mx-auto"
            style={{ boxShadow: "0 0 15px 5px #dfe3e8" }}
          >
            <div className="container flex flex-col gap-10">
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                className="flex flex-col items-center gap-4"
              >
                <span className="flex justify-center items-center sm:w-[56px] sm:h-[56px] w-[48px] h-[48px] rounded-full bg-[#007BFF]">
                  <BsTelephone className="text-white text-[20px] sm:text-[24px]" />
                </span>
                <h2 className="sm:text-[24px] text-[20px] font-bold text-center">
                  Bog'lanish
                </h2>
                <div className="flex flex-col gap-2 text-center">
                  <a
                    href="tel:+998901234567"
                    className="sm:text-[18px] text-[16px] text-[#555555] hover:text-[#007BFF] hover:brightness-125 transition duration-300"
                  >
                    +998-(90)-123-45-67
                  </a>
                  <a
                    href="mailto:info@medica.com"
                    className="sm:text-[18px] text-[16px] text-[#555555] hover:text-[#007BFF] hover:brightness-125 transition duration-300"
                  >
                    info@medica.com
                  </a>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1200"
                className="flex flex-col items-center gap-4"
              >
                <span className="flex justify-center items-center sm:w-[56px] sm:h-[56px] w-[48px] h-[48px] rounded-full bg-[#007BFF]">
                  <SlClock className="text-white text-[20px] sm:text-[24px]" />
                </span>
                <h2 className="sm:text-[24px] text-[20px] font-bold text-center">
                  Ish vaqti
                </h2>
                <div className="flex flex-col gap-2 text-center sm:text-[18px] text-[16px] text-[#555555]">
                  <span>Du–Ju: 8:00–17:00</span>
                  <span>Shanba: 9:00–15:30</span>
                  <span>Yakshanba: 9:00–15:30</span>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1800"
                className="flex flex-col items-center gap-4"
              >
                <span className="flex justify-center items-center w-14 h-14 rounded-full bg-[#007BFF]">
                  <MdOutlineMedicalServices className="text-white text-2xl" />
                </span>
                <h2 className="sm:text-[22px] text-[20px] font-bold text-center">
                  Xizmatlar
                </h2>
                <div className="flex flex-col gap-2 text-center sm:text-[18px] text-[16px] text-[#555555]">
                  <span>Kardiologiya</span>
                  <span>Gastroenterolog</span>
                  <span>Ortopediya</span>
                </div>
              </div>
            </div>
            <a
              href="#about"
              data-aos="zoom-in"
              data-aos-duration="1600"
              className="flex justify-center items-center absolute w-[48px] h-[48px] rounded-full text-xl bg-[#007BFF] text-white right-[-20px] top-[40%]"
            >
              <FaChevronDown />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
