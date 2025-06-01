import React from "react";
import AboutBanner from "../assets/Images/AboutBanner.png";

function About() {
  return (
    <>
      <section id="about" className="relative overflow-hidden pt-[200px] mb-[100px]">
        <div className="container mx-auto hidden lg:block">
          <div>
            <div className="xl:max-w-[550px] max-w-[490px]">
              <span
                data-aos="fade-down"
                data-aos-duration="1000"
                className="uppercase text-[#007BFF] xl:text-[18px] lg:text-[16px] text-[15px] font-bold border-b-[3px] border-[#007BFF]"
              >
                Biz haqimizda
              </span>
              <h1
                data-aos="fade-right"
                data-aos-duration="1000"
                className="xl:text-[40px] text-[40px] font-bold mt-4 leading-tight"
              >
                Malakali jamoamiz sizga yordam berishga tayyor!
              </h1>
              <p
                data-aos="fade-right"
                data-aos-duration="1800"
                className="xl:text-[16px] text-[15px] text-[#555555] font-medium mt-4"
              >
                Biz mijozlarimizga sifatli xizmat ko‘rsatishni ustuvor vazifa
                deb bilamiz. Har bir loyiha ustida jonkuyarlik bilan ishlaymiz
                va zamonaviy yondashuvni qo‘llaymiz. Jamoamiz har doim sizga
                yordam berishga tayyor.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-[-100px]">
          <img
            src={AboutBanner}
            alt="AboutBanner"
            data-aos="fade-left"
            data-aos-duration="1600"
            className="lg:block hidden xl:max-w-[800px] max-w-[600px] h-full relative z-10"
            draggable="false"
          />
        </div>

        <div className="lg:hidden block container mx-auto">
          <div className="flex lg:flex-row flex-col items-center justify-between">
            <div>
              <div className="xl:max-w-[550px] text-center max-w-[510px] lg:max-w-[490px] mt-[-100px]">
                <span
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  className="uppercase text-[#007BFF] xl:text-[18px] lg:text-[16px] text-[15px] font-bold border-b-[3px] border-[#007BFF]"
                >
                  Biz haqimizda
                </span>
                <h1
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="xl:text-[40px] sm:text-[40px] text-[24px] font-bold mt-4 leading-tight"
                >
                  Malakali jamoamiz sizga yordam berishga tayyor!
                </h1>
                <p
                  data-aos="fade-right"
                  data-aos-duration="1800"
                  className="xl:text-[16px] sm:text-[15px] text-[12px] text-[#555555] font-medium mt-[10px] sm:mt-4"
                >
                  Biz mijozlarimizga sifatli xizmat ko‘rsatishni ustuvor vazifa
                  deb bilamiz. Har bir loyiha ustida jonkuyarlik bilan ishlaymiz
                  va zamonaviy yondashuvni qo‘llaymiz. Jamoamiz har doim sizga
                  yordam berishga tayyor.
                </p>
              </div>
            </div>
            <img
              src={AboutBanner}
              alt="AboutBanner"
              data-aos="fade-left"
              data-aos-duration="1600"
              className="xl:max-w-[800px] max-w-[600px] h-full mt-[30px] relative z-10"
              draggable="false"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
