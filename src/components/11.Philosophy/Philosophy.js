import React, { useState } from "react";
import "./Philosophy.css";

const Philosophy = () => {
  const [activeTab, setActiveTab] = useState("philosophy");

  return (
    <div className="philosophy-container">
      {/* Tabs Navigation */}
      <div className="tabs">
        <button
          className={activeTab === "message" ? "tab active" : "tab"}
          onClick={() => setActiveTab("message")}
        >
          代表者挨拶 (CEO Message)
        </button>
        <button
          className={activeTab === "philosophy" ? "tab active" : "tab"}
          onClick={() => setActiveTab("philosophy")}
        >
          理念 (Philosophy)
        </button>
      </div>

      {/* Content Section */}
      <div className="tab-content">
        {/* CEO Message Section */}
        {activeTab === "message" && (
          <div className="content message">
            <h2>代表者挨拶</h2>
            <div className="ceo-profile">
              <img
                src="/homies-website/assets/ceo.jpg"
                alt="CEO"
                className="ceo-image"
              />

              <div className="ceo-text">
                <p>
                  皆さま、はじめまして。株式会社HOMIESの代表を務めておりますプルダッシュです。
                </p>
                <p>
                  私たちは、「信頼できる仲間とともに、お客様の理想をカタチにする」をモットーに、建設業を通じて地域社会に貢献していきます。建物はただの構造物ではなく、人が集まり、暮らし、未来を築く大切な空間です。だからこそ、お客様一人ひとりの想いを大切にし、「安心・高品質・誠実なものづくり」にこだわります。
                </p>
                <p>
                  HOMIESという社名には、「仲間」「信頼」「つながり」という意味が込められています。お客様、協力会社の皆さまと強い絆を築き、共に成長し続ける企業でありたいと考えています。
                </p>
                <p>
                  これからも、地域の皆さまに愛され、頼りにされる会社を目指し、挑戦を続けてまいります。
                  どうぞ、株式会社HOMIESをよろしくお願いいたします。
                </p>
                <p>株式会社HOMEIS 代表取締役社長 プルダッシュ</p>
              </div>
            </div>
          </div>
        )}

        {/* Philosophy Section */}
        {activeTab === "philosophy" && (
          <div className="content philosophy">
            <h2>株式会社HOMEISの理念</h2>
            <ul className="philosophy-list">
              <li>■ HOMEISは、価値を創造し提供する会社です。</li>
              <li>■ HOMEISは、互いに価値を高め合う会社です。</li>
              <li>■ HOMEISは、「皆の大切」を大切にする会社です。</li>
            </ul>
            <p>
              建設会社の理念は、企業の目指す方向性や価値観を明確にし、社員一人一人の行動指針となります。
              建設業は社会基盤を築く重要な役割を担っているため、理念には社会貢献や持続可能な成長、
              技術革新、安全・品質への責任感が重要な要素として含まれます。
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Philosophy;
