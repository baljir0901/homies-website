import React from "react";
import "./About.css"; // Import the CSS file

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Left Side - Company Info */}
        <div className="about-text">
          <h2 className="about-title">会社概要</h2>
          <p className="about-description">
            株式会社HOMIESは、革新的な建設技術を活用し、高品質なサービスを提供する建設会社です。
            お客様のニーズに応じた最適なソリューションを提供し、安全かつ持続可能な建設プロジェクトを実現します。
            また、鍛冶工・溶接・機械メンテナンスを中心に、確かな技術と経験を活かし、社会の発展に貢献してまいります。
          </p>

          <div className="about-info">
            <p>
              <strong>📍 所在地:</strong> 〒260-0013
              千葉県千葉市中央区中央3-13-7 コスモ千葉中央ビル706号
            </p>
            <p>
              <strong>📞 電話番号:</strong> 043-445-8420
            </p>
            <p>
              <strong>✉ メール:</strong> puru@amara-k.com
            </p>
          </div>
        </div>

        {/* Right Side - Google Maps */}
        <div className="about-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.2875606502246!2d140.1234567!3d35.6077778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60187a123456789b%3A0xabcdefabcdefabcd!2sYour%20Company%20Location!5e0!3m2!1sen!2sjp!4v1234567890123"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default About;
