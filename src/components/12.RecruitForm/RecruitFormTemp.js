import React, { useState } from "react";
import "./RecruitForm.css"; // ✅ Ensure styles match new layout
import emailjs from "emailjs-com";

const RecruitForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    furigana: "",
    email: "",
    address: "",
    phoneNumber: "",
    age: "",
    experience: "",
    qualifications: "",
    gender: "",
    japaneseLevel: "",
    additionalRequests: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data via EmailJS
    emailjs
      .send(
        "homies-recruit", // ✅ Your Service ID
        "template_vv4hawc", // ✅ Your Template ID
        formData,
        "iUH1GfbdM86bMgz1F" // ✅ Your Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("応募を送信しました。ありがとうございます！");
          setFormData({
            name: "",
            furigana: "",
            email: "",
            address: "",
            phoneNumber: "",
            age: "",
            experience: "",
            qualifications: "",
            gender: "",
            japaneseLevel: "",
            additionalRequests: "",
          }); // Reset form after submission
        },
        (err) => {
          console.error("FAILED...", err);
          alert("送信に失敗しました。もう一度お試しください。");
        }
      );
  };

  return (
    <section className="recruit-form">
      <form onSubmit={handleSubmit}>
        <label>
          氏名 (Name) <span>*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>
          ふりがな (Furigana) <span>*</span>
        </label>
        <input
          type="text"
          name="furigana"
          value={formData.furigana}
          onChange={handleChange}
          required
        />

        <label>
          メールアドレス (Email) <span>*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>
          住所 (Address) <span>*</span>
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label>
          電話番号 (Phone Number) <span>*</span>
        </label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <label>
          年齢 (Age) <span>*</span>
        </label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label>
          経験 (Experience) <span>*</span>
        </label>
        <textarea
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
        ></textarea>

        <label>資格 (持ってる場合) (Qualifications) </label>
        <input
          type="text"
          name="qualifications"
          value={formData.qualifications}
          onChange={handleChange}
        />

        <label>
          性別 (Gender) <span>*</span>
        </label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">選択してください</option>
          <option value="男性">男性</option>
          <option value="女性">女性</option>
          <option value="その他">その他</option>
        </select>

        <label>
          外国人の場合日本語能力 (Japanese Level, if foreigner) <span>*</span>
        </label>
        <select
          name="japaneseLevel"
          value={formData.japaneseLevel}
          onChange={handleChange}
          required
        >
          <option value="">選択してください</option>
          <option value="N1">N1</option>
          <option value="N2">N2</option>
          <option value="N3">N3</option>
          <option value="N4">N4</option>
          <option value="N5">N5</option>
          <option value="日常会話レベル">日常会話レベル</option>
        </select>

        <label>その他 (Additional Requests)</label>
        <textarea
          name="additionalRequests"
          value={formData.additionalRequests}
          onChange={handleChange}
        ></textarea>

        <button type="submit">送信する</button>
      </form>
    </section>
  );
};

export default RecruitForm;
