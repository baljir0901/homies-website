import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const form = useRef(); // ✅ Added useRef
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "homies-website", // ✅ Your Service ID
        "template_c718le1", // ✅ Your Template ID
        form.current, // ✅ Correctly referencing the form
        "iUH1GfbdM86bMgz1F" // ✅ Your Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setStatus("お問い合わせを送信しました。ありがとうございます！");
          form.current.reset(); // ✅ Clear form after success
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("送信に失敗しました。もう一度お試しください。");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Left - Contact Form */}
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <h2 className="contact-title">お問い合わせ</h2>
          <p className="contact-description">
            ご質問やご相談がございましたら、以下のフォームよりお気軽にお問い合わせください。
          </p>
          <input
            type="text"
            name="from_name" // ✅ Match EmailJS template (from_name)
            placeholder="お名前"
            required
          />
          <input
            type="email"
            name="from_email" // ✅ Match EmailJS template (from_email)
            placeholder="メールアドレス"
            required
          />
          <textarea
            name="message" // ✅ Match EmailJS template (message)
            placeholder="メッセージ"
            required
          ></textarea>
          <button type="submit" className="submit-button">
            送信する
          </button>
          <p>{status}</p>
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
