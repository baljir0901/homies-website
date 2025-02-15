import React, { useState } from "react";
import "./Contact.css"; // Import CSS file
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Import icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://homies-backend.onrender.com/send-email",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();

    if (response.ok) {
      alert("お問い合わせを送信しました。ありがとうございます！");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("送信に失敗しました。もう一度お試しください。");
      console.error(result);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Left - Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 className="contact-title">お問い合わせ</h2>
          <p className="contact-description">
            ご質問やご相談がございましたら、以下のフォームよりお気軽にお問い合わせください。
          </p>
          <input
            type="text"
            name="name"
            placeholder="お名前"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="メールアドレス"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="メッセージ"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="submit-button">
            送信する
          </button>
        </form>

        {/* Right - Contact Info */}
        <div className="contact-info">
          <h3>会社情報</h3>
          <p>
            <FaMapMarkerAlt /> <strong>住所:</strong> 〒260-0013
            千葉県千葉市中央区中央3-13-7
          </p>
          <p>
            <FaPhoneAlt /> <strong>電話:</strong> 043-445-8420
          </p>
          <p>
            <FaEnvelope /> <strong>メール:</strong> puru@amara-k.com
          </p>
          <p>
            <strong>営業時間:</strong> 平日 9:00 AM - 6:00 PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
