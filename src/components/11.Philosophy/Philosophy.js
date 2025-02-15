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

            <h3>社会の発展に貢献する</h3>
            <p>
              私たちは、建設を通じて社会の発展に貢献します。
              人々の暮らしや地域社会の発展を支えるため、常に品質と安全を最優先に考え、
              未来に残る価値ある建物を提供します。
            </p>

            <h3>お客様の信頼に応える</h3>
            <p>
              私たちは、お客様のニーズに応え、期待を超える結果を提供することを誇りとします。
              すべてのプロジェクトにおいて、誠実な対応と高品質な施工を通じて、信頼関係を築きます。
            </p>

            <h3>安全と品質の徹底</h3>
            <p>
              私たちは、すべての業務において「安全第一」「品質第一」を徹底します。
              安全な作業環境の確保はもちろん、最高の品質を追求し、納期や予算を守ることで、
              全ての関係者に満足と安心を提供します。
            </p>

            <h3>持続可能な未来を築く</h3>
            <p>
              私たちは、環境への配慮を大切にし、持続可能な社会の実現に貢献することを使命とします。
              環境に優しい建材の使用やエネルギー効率の良い施工方法を積極的に取り入れ、
              地球環境を守りながら、社会に長期的な価値を提供します。
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Philosophy;
