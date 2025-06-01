import React from "react";
import ContactBanner from "../assets/Images/ContactBanner.png";

function Contact() {
  return (
    <section className="flex flex-col lg:flex-row h-full">
      <div
        data-aos="fade-right"
        data-aos-duration="1200"
        className="w-full lg:w-1/2 bg-[#007BFF] flex items-center justify-center p-6"
      >
        <div className="flex flex-col items-start max-w-[500px] lg:ml-[10%]">
          <h4
            data-aos="fade-down"
            data-aos-duration="1000"
            className="text-[#dfe3e8] uppercase sm:text-[16px] text-[14px] font-bold border-b-[3px] border-[#dfe3e8]"
          >
            Qabulga yoziling
          </h4>
          <h2
            data-aos="fade-up-right"
            data-aos-duration="1200"
            className="text-white font-bold text-[25px] sm:text-[32px] lg:text-[35px] mt-[10px]"
          >
            Tibbiy jamoamiz sizga yordam berishga tayyor.
          </h2>
          <p
            data-aos="fade-up-right"
            data-aos-duration="1500"
            className="text-[#dfe3e8] text-[16px] mt-2"
          >
            Bizning mutaxassislarimiz sizning sog‘lig‘ingizni himoya qilish
            uchun har doim yoningizda.
          </p>
          <div
            data-aos="fade-up-right"
            data-aos-duration="1600"
            className="mt-[20px]"
          >
            <a
              href="tel:+998901234567"
              className="bg-white sm:py-[10px] py-[8px] sm:px-[18px] px-[14px] sm:text-[16px] text-[14px] font-bold text-[#007BFF] rounded-[6px] hover:brightness-90 transition-all duration-300"
            >
              +998-(90)-123-45-67
            </a>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1400"
        className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto"
      >
        <img
          src={ContactBanner}
          alt="ContactBanner"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default Contact;
