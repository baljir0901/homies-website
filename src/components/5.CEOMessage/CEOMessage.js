import React from "react";
import "./CEOMessage.css"; // Import the CSS file

const CEOMessage = () => {
  return (
    <section id="ceo-message" className="ceo-section">
      <div className="ceo-container">
        {/* Left: CEO Image */}
        <div className="ceo-image-container">
          <img
            src="/assets/ceo.jpg"
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
            「HOMIESは、鍛冶工・溶接・機械メンテナンスのプロフェッショナル集団として、安全で高品質な施工を提供し、社会に貢献してまいります。
            私たちは、長年の経験と最新の技術を融合させ、未来の建設業界を支える企業を目指しています。また、当社の業務内容や取り組みについて紹介いたしますので、ぜひご覧ください。」
          </p>
          <a href="#ceo-message-full" className="ceo-link">
            トップメッセージ →
          </a>

          {/* Company Info Links */}
          <div className="company-links">
            <a href="#about" className="company-link">
              <img
                src="/assets/about.jpg"
                alt="会社概要"
                className="company-link-img"
              />
              <span>会社概要 →</span>
            </a>
            <a href="#services" className="company-link">
              <img
                src="/assets/vision.jpg"
                alt="services"
                className="company-link-img"
              />
              <span>事業内容 →</span>
            </a>
            <a href="#careers" className="company-link">
              <img
                src="/assets/growth.jpg"
                alt="careers"
                className="company-link-img"
              />
              <span>採用情報→</span>
            </a>
          </div>

          {/* View More Button */}
          <a href="#contact" className="ceo-button">
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
