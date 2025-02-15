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
          <h2 className="ceo-title">会社情報</h2>
          <p className="ceo-message">
            HOMEISは、価値を創造し提供する会社です。
            <br />
            HOMEISは、互いに価値を高め合う会社です。
            <br />
            HOMEISは、「皆の大切」を大切にする会社です。
            <br />
            建設会社の理念は、企業の目指す方向性や価値観を明確にし、社員一人一人の行動指針となります。建設業は社会基盤を築く重要な役割を担っているため、理念には社会貢献や持続可能な成長、技術革新、安全・品質への責任感が重要な要素として含まれます。」
            {/* Navigation Buttons */}
            <button
              onClick={() => navigate("/philosophy")}
              className="ceo-link"
            >
              もっと見る →
            </button>
          </p>

          {/* Company Info Links */}
          <div className="company-links">
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
          </div>

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
