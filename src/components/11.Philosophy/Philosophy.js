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
              <img src="/ceo.jpg" alt="CEO" className="ceo-image" />

              <div className="ceo-text">
                <p>
                  拝啓、平素より格別のお引き立てを賜り、誠にありがとうございます。
                  私たちの会社は、創業以来、建設業を通じて社会基盤の整備や地域発展に貢献することを
                  使命としてまいりました。
                </p>
                <p>
                  お客様からの信頼を第一に、常に品質と安全を最優先にし、
                  持続可能な建設を目指して事業活動を展開しています。
                </p>
                <p>
                  私たちの仕事は、単に建物を建てることにとどまらず、
                  それが人々の生活を支え、地域の未来を創造することに繋がる
                  大きな責任を伴います。
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
