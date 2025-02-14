import React from "react";
import "./Services.css"; // Import the updated CSS file
import { FaTools, FaUserTie } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="services-title">事業内容</h2>
        <p className="services-description">
          株式会社HOMIESは、建築工事と人材紹介サービスを提供し、お客様のニーズに応じた最適なソリューションを提供します。
        </p>

        <div className="services-grid">
          {/* Construction Service */}
          <div className="service-card">
            <FaTools className="service-icon" />
            <section id="Building-work" className="Building-work"></section>
            <h3>建築工事全般</h3>
            <p>
              高品質な建設工事を提供し、安全で持続可能なプロジェクトを実現します。
            </p>
          </div>

          {/* Human Resource Service */}
          <div className="service-card">
            <FaUserTie className="service-icon" />
            <section id="Human-resource" className="Human-resource"></section>
            <h3>人材紹介</h3>
            <p>優秀な人材を適切な企業に紹介し、企業の成長をサポートします。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
