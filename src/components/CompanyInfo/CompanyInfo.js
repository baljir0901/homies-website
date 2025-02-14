import React from "react";
import "./CompanyInfo.css"; // Import the CSS file
import { FaBuilding, FaBullseye, FaChartLine } from "react-icons/fa"; // Import icons

const CompanyInfo = () => {
  return (
    <section id="company" className="company">
      <div className="company-container">
        <h2 className="company-title">会社情報</h2>
        <p className="company-description">
          株式会社HOMIESは、高品質な建設技術と革新的な設計で未来の都市を創造します。
        </p>

        <div className="company-grid">
          {/* Company Mission */}
          <div className="company-card">
            <FaBuilding className="company-icon" />
            <h3 className="company-heading">企業理念</h3>
            <p className="company-text">
              お客様のニーズに応じた最高の建設サービスを提供し、社会に貢献します。
            </p>
          </div>

          {/* Growth Strategy */}
          <div className="company-card">
            <FaBullseye className="company-icon" />
            <h3 className="company-heading">成長戦略</h3>
            <p className="company-text">
              最新技術を活用し、持続可能な建設業界のリーダーを目指します。
            </p>
          </div>

          {/* Corporate Vision */}
          <div className="company-card">
            <FaChartLine className="company-icon" />
            <h3 className="company-heading">企業ビジョン</h3>
            <p className="company-text">
              環境に配慮し、未来の都市を支える建築を実現します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
