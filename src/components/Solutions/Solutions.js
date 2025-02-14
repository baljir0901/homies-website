import React, { useState } from "react";
import "./Solutions.css"; // Import the CSS file
import { FaBuilding, FaLeaf, FaDigitalTachograph } from "react-icons/fa"; // Import icons

const solutionData = [
  {
    id: 1,
    title: "スマートビルディング",
    icon: <FaBuilding />,
    description: "最新のIoT技術を活用したスマートビルディングの導入。",
    details:
      "エネルギー管理、セキュリティ、設備管理を最適化し、快適な環境を提供します。",
  },
  {
    id: 2,
    title: "サステナブルデザイン",
    icon: <FaLeaf />,
    description: "環境に配慮した設計と持続可能な建設技術の活用。",
    details:
      "リサイクル可能な材料の使用、省エネルギー設計、カーボンニュートラルの実現。",
  },
  {
    id: 3,
    title: "デジタル建設",
    icon: <FaDigitalTachograph />,
    description:
      "BIM（ビルディング・インフォメーション・モデリング）を活用した最適設計。",
    details:
      "3Dモデリングとシミュレーションを駆使して、設計精度と施工効率を向上。",
  },
];

const Solutions = () => {
  const [expandedSolution, setExpandedSolution] = useState(null);

  const toggleSolution = (id) => {
    setExpandedSolution(expandedSolution === id ? null : id);
  };

  return (
    <section id="solutions" className="solutions">
      <div className="solutions-container">
        <h2 className="solutions-title">ソリューション</h2>
        <p className="solutions-description">
          当社が提供する最先端のソリューションをご紹介します。
        </p>

        <div className="solutions-grid">
          {solutionData.map((solution) => (
            <div key={solution.id} className="solution-card">
              <div className="solution-icon">{solution.icon}</div>
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-summary">{solution.description}</p>
              <button
                className="solution-button"
                onClick={() => toggleSolution(solution.id)}
              >
                {expandedSolution === solution.id ? "閉じる" : "詳細を見る"}
              </button>
              {expandedSolution === solution.id && (
                <p className="solution-details">{solution.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
