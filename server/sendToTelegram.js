const axios = require("axios");

const TOKEN = "7293725653:AAEsq3Zay9KB2NeUMMwlhjb31UWow0Ed220";
const CHAT_ID = "6825145013";

module.exports = async function sendToTelegram(data) {
  const message = `
🧾 Yangi navbat so'rovi:

👤 F.I.SH: ${data.name} ${data.surname}
🩺 Xizmat: ${data.service}
👨‍⚕️ Shifokor: ${data.doctor}
📅 Sana: ${data.day}, ${data.time}
🎫 Navbat raqami: ${data.ticketNumber}
  `;

  try {
    await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: message,
    });
    console.log("✅ Telegramga yuborildi");
  } catch (err) {
    console.error("❌ Telegramga yuborishda xatolik:", err.response?.data || err.message);
  }
};
