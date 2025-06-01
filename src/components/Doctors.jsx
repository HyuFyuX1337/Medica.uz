import React from "react";
import doctor1 from "../assets/Images/doctor1.jpeg";
import doctor2 from "../assets/Images/doctor2.jpeg";
import doctor3 from "../assets/Images/doctor3.jpg";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

function Doctors() {
  return (
    <>
      <section id="doctors">
        <div className="container">
          <div className="flex flex-col items-center mb-[60px] mt-[] text-center">
            <h2 className="text-[30px] text-[#007BFF] font-bold uppercase">
              Shifokorlar
            </h2>
            <p className="text-[#757575] max-w-[400px]">
              Bizning shifokorlarimiz yuqori malakali, tajribali va
              bemorlarning sog‘lig‘ini tiklashda mehr bilan xizmat
              ko‘rsatadigan mutaxassislardir.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] justify-items-center">
            {[
              {
                name: "Dr. Aliyev",
                role: "Pediatr",
                description:
                  "Dr. Aliyev — malakali pediatr, bolalar salomatligi, parvarishi va rivojlanishi yo‘lida fidokorona xizmat qiladigan shifokordir.",
                img: doctor1,
              },
              {
                name: "Dr. Karimova",
                role: "Kardiolog",
                description:
                  "Dr. Karimova yurak xastaliklarini aniqlash, davolash va bemorlarga sog‘lom turmush tarzini tavsiya etishda tajribali kardiolog.",
                img: doctor2,
              },
              {
                name: "Dr. Rahmonov",
                role: "Gastroenterolog",
                description:
                  "Dr. Rahmonov — tajribali gastroenterolog. U hazm tizimi muammolarini aniqlash va davolashda yordam beradi.",
                img: doctor3,
              },
            ].map((doc, index) => (
              <div
                key={index}
                className="w-full max-w-[320px] shadow-[0px_0px_15px_#dfe3e8] rounded-[6px] overflow-hidden"
              >
                <div>
                  <img
                    src={doc.img}
                    alt="DoctorImg"
                    className="w-full h-auto hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="py-[20px] px-[20px]">
                  <h3 className="text-[18px] font-bold">{doc.name}</h3>
                  <span className="uppercase text-[#007BFF] font-bold">
                    {doc.role}
                  </span>
                  <p className="mt-[5px] text-[#757575]">{doc.description}</p>
                  <div className="flex gap-[10px] mt-[5px]">
                    <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#007BFF] hover:brightness-90 transition-all duration-300">
                      <a href="tel:+998901234567">
                        <BsTelephone className="text-white" />
                      </a>
                    </div>
                    <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#007BFF] hover:brightness-90 transition-all duration-300">
                      <a href="mailto:info@medica.com">
                        <CiMail className="text-[20px] text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Doctors;
