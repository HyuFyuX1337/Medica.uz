import React from "react";
import service1 from "../assets/Images/service1.svg";
import service2 from "../assets/Images/service2.svg";
import service3 from "../assets/Images/service3.svg";

function Services() {
  const services = [
    {
      title: "Pediatr",
      description:
        "Pediatrlarimiz farzandingiz salomatligi uchun zarur barcha tekshiruv va davolash jarayonlarini professional darajada olib boradi. Sog‘lom kelajak – bizning ustuvor maqsadimiz.",
      img: service1,
      aos: "fade-up-right",
      duration: "1200",
    },
    {
      title: "Ko‘z shifokorlari",
      description:
        "Oftalmologlarimiz ko‘z sog‘lig‘ini saqlash va tiklashda zamonaviy usullarni qo‘llab, ko‘rish qobiliyatingizni himoya qiladi.",
      img: service3,
      aos: "fade-up-right",
      duration: "1400",
    },
    {
      title: "Plastik jarrohlar",
      description:
        "Plastik jarrohlarimiz zamonaviy texnologiyalar va yuqori malakaga ega bo‘lib, har bir bemorning tabiiy go‘zalligini tiklash va oshirishga xizmat qiladi.",
      img: service2,
      aos: "fade-up-right",
      duration: "1800",
    },
  ];

  return (
    <section id="services" className="py-[100px]">
      <div className="container">
        <div className="flex items-center flex-col text-center">
          <h4
            data-aos="fade-down"
            data-aos-duration="1000"
            className="uppercase text-[16px] text-[#007BFF] font-bold border-b-[3px] border-[#007BFF]"
          >
            Xizmatlarimiz
          </h4>
          <h2
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="text-[30px] font-black"
          >
            Asosiy yo‘nalishlar
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="max-w-[600px] text-[#757575] font-bold text-[16px]"
          >
            Biz mijozlarimizga eng muhim va talabgir yo‘nalishlar bo‘yicha
            sifatli xizmatlar ko‘rsatamiz. Har bir yo‘nalish bo‘yicha tajribali
            mutaxassislar xizmatingizga tayyor.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-[30px] gap-[50px] mt-[50px]">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos={service.aos}
              data-aos-duration={service.duration}
              className="relative w-full h-auto py-[30px] px-[22px] shadow-[0_0_15px_#dfe3e8] rounded-[6px] bg-white"
            >
              <img
                draggable="false"
                src={service.img}
                alt="ServiceImg"
                className="absolute top-[-40px] w-[70px]"
              />
              <div className="border-l-[3px] pl-[10px] border-l-[#007BFF] mt-[30px]">
                <h3 className="font-black text-[18px]">{service.title}</h3>
                <p className="text-[16px] text-[#757575]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
