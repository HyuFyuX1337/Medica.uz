import React from "react";
import news1 from "../assets/Images/news1.jpg";
import news2 from "../assets/Images/news2.jpg";
import news3 from "../assets/Images/news3.jpg";

function News() {
  const newsData = [
    {
      img: news1,
      date: "19-MART, 2025",
      titles: [
        "Umurtqani barqarorlashtirish jarrohligi:",
        "Bu nimani o‘z ichiga oladi?",
      ],
      text: "Umurtqa barqarorlashtirish jarrohligi orqa miya disklari va suyaklarini himoya qilish uchun amalga oshiriladi.",
    },
    {
      img: news2,
      date: "2-APREL, 2025",
      titles: ["Endoskopik, minimal chandiqli", "usul ishlab chiquvchisi"],
      text: "Endoskopik usullar chandiqlarni kamaytiradi va bemorlarning tiklanishini tezlashtiradi, jarrohlar uchun qulaylik yaratadi.",
    },
    {
      img: news3,
      date: "21-MAY, 2025",
      titles: ["Medicare kiprik qopqog‘i jarrohligini", "qoplaydimi?"],
      text: "Medicare kiprik qopqog‘i jarrohligi uchun ba'zi shartlar asosida to‘lovlarni amalga oshiradi.",
    },
  ];

  return (
    <section id="news" className="py-[100px]">
      <div className="container">
        <div className="flex items-center flex-col text-center">
          <h4
            data-aos="fade-down"
            data-aos-duration="1000"
            className="uppercase text-[16px] text-[#007BFF] font-bold border-b-[3px] border-[#007BFF]"
          >
            So‘nggi yangiliklar
          </h4>
          <h2
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="sm:text-[30px] text-[22px] font-black mt-2"
          >
            Bizning so‘nggi hikoyalarimiz
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="max-w-[600px] text-[#757575] font-bold sm:text-[16px] text-[14px] mt-[10px] sm:mt-4"
          >
            Bizning eng so‘nggi yangiliklarimiz va ilhomlantiruvchi
            hikoyalarimiz bilan tanishing. Sizni qiziqarli voqealar va foydali
            ma'lumotlar kutmoqda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[50px]">
          {newsData.map((item, index) => (
            <div
              key={item.date}
              data-aos="fade-up-right"
              data-aos-duration={1200 + index * 300}
            >
              <div className="overflow-hidden w-full h-full max-w-[370px] mx-auto shadow-[0_0_25px_#dfe3e8] rounded-[6px] hover:-translate-y-[5px] transition-all duration-300">
                <img
                  src={item.img}
                  alt={`News ${index + 1}`}
                  className="w-full h-[200px] object-cover"
                />
                <div className="py-[25px] px-[20px]">
                  <span className="text-[14px] text-[#757575] font-bold">
                    {item.date}
                  </span>
                  <h3 className="mt-[6px] text-[16px] font-bold">
                    {item.titles[0]}
                  </h3>
                  <h3 className="text-[16px] font-bold">{item.titles[1]}</h3>
                  <p className="mt-[6px] text-[14px] text-[#757575]">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
