import { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

const services = ["Terapevt", "Stomatolog", "Kardiolog", "Nevrolog"];
const doctors = {
  Terapevt: ["Dr. Aliyev", "Dr. Karimova"],
  Stomatolog: ["Dr. Sobirov", "Dr. Murodova"],
  Kardiolog: ["Dr. Rahmonov", "Dr. Zokirova"],
  Nevrolog: ["Dr. Tursunova", "Dr. Qodirov"],
};
const days = [
  "Dushanba",
  "Seshanba",
  "Chorshanba",
  "Payshanba",
  "Juma",
  "Shanba",
  "Yakshanba",
];
const times = Array.from(
  { length: 10 },
  (_, i) => `${(8 + i).toString().padStart(2, "0")}:00`
);

export default function Turn() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [service, setService] = useState("");
  const [doctor, setDoctor] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [ticketNumber, setTicketNumber] = useState(null);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [cancelConfirm, setCancelConfirm] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Ismni kiriting";
    if (!surname.trim()) newErrors.surname = "Familyani kiriting";
    if (!service) newErrors.service = "Xizmatni tanlang";
    if (!doctor) newErrors.doctor = "Shifokorni tanlang";
    if (!day) newErrors.day = "Kunni tanlang";
    if (!time) newErrors.time = "Soatni tanlang";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const random = Math.floor(1000 + Math.random() * 9000);
    setTicketNumber(random);
    setShowModal(true);
  };

  const resetForm = () => {
    setName("");
    setSurname("");
    setService("");
    setDoctor("");
    setDay("");
    setTime("");
    setTicketNumber(null);
    setCancelConfirm(false);
  };

  return (
    <section id="help" className="mt-[-20px] px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* Form */}
        <div
          className="w-full"
          data-aos="fade-up-right"
          data-aos-duration="1500"
        >
          <div className="bg-white p-6 rounded-[6px] shadow-[0px_0px_15px_#dfe3e8]">
            <h2 className="text-2xl font-bold text-center text-[#007BFF] mb-[25px]">
              Navbat olish
            </h2>

            {ticketNumber ? (
              <div className="text-center space-y-4">
                <p className="text-[20px] font-semibold text-green-700">
                  Siz allaqachon navbat olgansiz!
                </p>
                <button
                  className="text-[14px] font-bold text-red-600 underline"
                  onClick={() => setCancelConfirm(true)}
                >
                  Navbatni bekor qilish
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Ismingiz"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-4 py-2 border rounded-lg border-[#e0e0e0] placeholder-[#ccc] focus:outline-none ${
                    errors.name
                      ? "border-red-500"
                      : "focus:ring-2 focus:ring-blue-400"
                  }`}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}

                <input
                  type="text"
                  placeholder="Familyangiz"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  className={`w-full px-4 py-2 border rounded-lg border-[#e0e0e0] placeholder-[#ccc] focus:outline-none ${
                    errors.surname
                      ? "border-red-500"
                      : "focus:ring-2 focus:ring-blue-400"
                  }`}
                />
                {errors.surname && (
                  <p className="text-sm text-red-500">{errors.surname}</p>
                )}

                <select
                  value={service}
                  onChange={(e) => {
                    setService(e.target.value);
                    setDoctor("");
                  }}
                  className={`w-full px-4 py-2 border rounded-lg bg-white text-[#ccc] ${
                    service ? "text-black" : ""
                  } ${
                    errors.service
                      ? "border-red-500"
                      : "focus:ring-2 focus:ring-blue-400"
                  }`}
                >
                  <option value="">Xizmat turini tanlang</option>
                  {services.map((s, i) => (
                    <option key={i} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-sm text-red-500">{errors.service}</p>
                )}

                {service && (
                  <select
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg bg-white text-[#ccc] ${
                      doctor ? "text-black" : ""
                    } ${
                      errors.doctor
                        ? "border-red-500"
                        : "focus:ring-2 focus:ring-blue-400"
                    }`}
                  >
                    <option value="">Shifokorni tanlang</option>
                    {doctors[service].map((d, i) => (
                      <option key={i} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                )}
                {errors.doctor && (
                  <p className="text-sm text-red-500">{errors.doctor}</p>
                )}

                <select
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className={`w-full px-4 py-2 border rounded-lg bg-white text-[#ccc] ${
                    day ? "text-black" : ""
                  } ${
                    errors.day
                      ? "border-red-500"
                      : "focus:ring-2 focus:ring-blue-400"
                  }`}
                >
                  <option value="">Kunni tanlang</option>
                  {days.map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                {errors.day && (
                  <p className="text-sm text-red-500">{errors.day}</p>
                )}

                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className={`w-full px-4 py-2 border rounded-lg bg-white text-[#ccc] ${
                    time ? "text-black" : ""
                  } ${
                    errors.time
                      ? "border-red-500"
                      : "focus:ring-2 focus:ring-blue-400"
                  }`}
                >
                  <option value="">Soatni tanlang</option>
                  {times.map((t, i) => (
                    <option key={i} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.time && (
                  <p className="text-sm text-red-500">{errors.time}</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Navbat olish
                </button>
              </form>
            )}

            {/* Modal */}
            {showModal && (
              <div className="fixed inset-0 bg-[rgba(0,0,0,0.2)] backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center w-80">
                  <h3 className="text-xl font-semibold mb-2 text-green-700">
                    Sizning tartib raqamingiz:
                  </h3>
                  <p className="text-4xl font-bold mb-4">#{ticketNumber}</p>
                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  >
                    Yopish
                  </button>
                </div>
              </div>
            )}

            {/* Cancel confirmation */}
            {cancelConfirm && (
              <div className="fixed inset-0 bg-[rgba(0,0,0,0.2)] backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-xl shadow-xl text-center w-[400px]">
                  <p className="text-[18px] font-bold mb-4">
                    Navbatingizni bekor qilmoqchimisiz?
                  </p>
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={resetForm}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      Bekor qilish
                    </button>
                    <button
                      onClick={() => setCancelConfirm(false)}
                      className="border px-4 py-2 rounded-lg hover:bg-gray-100"
                    >
                      Yo‘q
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Panel */}
        <div
          data-aos="fade-up-left"
          data-aos-duration="1500"
          className="shadow-[0px_0px_15px_#dfe3e8] bg-[#1A263A] text-white rounded-[6px] p-6 flex flex-col gap-6"
        >
          <div className="border-b border-[#e0e0e0] pb-6">
            <h3 className="text-[20px] font-semibold mb-3">Yordam kerakmi?</h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+998901234567"
                className="inline-flex w-max items-center gap-2 bg-[#007BFF] text-white py-2 px-4 rounded hover:brightness-90 transition"
              >
                <BsTelephone className="text-[18px]" />
                <span>Bugunoq qo'ng'iroq qiling</span>
              </a>
              <a
                href="mailto:info@medica.com"
                className="inline-flex w-max items-center gap-2 border border-white text-white py-2 px-4 rounded hover:brightness-90 transition"
              >
                <CiMail className="text-[20px]" />
                <span>Emailingizni jo'nating</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[20px] font-semibold mb-3">Tashrif buyuring</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div>
                <span className="block font-semibold uppercase text-[#A5B8DB]">
                  Toshkent
                </span>
                <a
                  href="tel:+998977777777"
                  className="block mt-2 font-bold hover:text-[#007BFF]"
                >
                  +998-(97)-777-77-77
                </a>
                <span className="text-sm mt-1 block">
                  Chilonzor tumani, Qoratosh ko‘chasi, 15-uy
                </span>
              </div>
              <div>
                <span className="block font-semibold uppercase text-[#A5B8DB]">
                  Jizzax
                </span>
                <a
                  href="tel:+998933333333"
                  className="block mt-2 font-bold hover:text-[#007BFF]"
                >
                  +998-(93)-333-33-33
                </a>
                <span className="text-sm mt-1 block">
                  Zarbdor tumani, Bobur ko‘chasi, 22-uy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
