import React, { useEffect } from "react";
import "./CEOMessage.css"; // Import the CSS file
import { useLocation, useNavigate } from "react-router-dom";

const CEOMessage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section id="ceo-message" className="ceo-section">
      <div className="ceo-container">
        {/* Left: CEO Image */}
        <div className="ceo-image-container">
          <img
            src={`${process.env.PUBLIC_URL}/assets/ceo.jpg`}
            alt="代表取締役社長"
            className="ceo-image"
          />
          <p className="ceo-name">代表取締役社長</p>
          <p className="ceo-signature">プルダッシュ</p>
        </div>

        {/* Right: CEO Message & Company Info */}
        <div className="ceo-info">
          <h2 className="ceo-title">代表者挨拶</h2>
          <p className="ceo-message">
            皆さま、はじめまして。株式会社HOMIESの代表を務めておりますプルダッシュです。
            私たちは、「信頼できる仲間とともに、お客様の理想をカタチにする」をモットーに、建設業を通じて地域社会に貢献していきます。建物はただの構造物ではなく、人が集まり、暮らし、未来を築く大切な空間です。だからこそ、お客様一人ひとりの想いを大切にし、「安心・高品質・誠実なものづくり」にこだわります。
            {/* Navigation Buttons */}
            <button
              onClick={() => navigate("/philosophy")}
              className="ceo-link"
            >
              <p className="mottomiru">もっと見る →</p>
            </button>
          </p>

          {/* Company Info Links */}
          {/* <div className="company-links">
            <button
              onClick={() => navigate("/philosophy#philosophy")}
              className="company-link"
              aria-label="Navigate to Company Philosophy"
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/about.jpg`}
                alt="Philosophy"
                className="company-link-img"
              />
              <span>Company Philosophy→</span>
            </button>

            <button
              onClick={() => navigate("/philosophy#message")}
              className="company-link"
              aria-label="Navigate to CEO Message"
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/vision.jpg`}
                alt="代表者挨拶"
                className="company-link-img"
              />
              <span>代表者挨拶→</span>
            </button>
          </div> */}

          {/* Contact Button */}
          <button onClick={() => navigate("/contact")} className="ceo-button">
            お問い合わせ
          </button>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
