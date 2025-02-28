import React from "react";
import "./Projects.css"; // Import the CSS file

const projectData = [
  {
    id: "project3",
    title: "機械メンテナンスのプロ",
    image: `${process.env.PUBLIC_URL}/assets/hero3.jpg`,
    description: "設備の安定稼働を支える確かな技術",
    details: "産業機器のメンテナンス（関東地域 施工事例）",
  },
  {
    id: "project1",
    title: "精密な鍛冶工技術",
    image: `${process.env.PUBLIC_URL}/assets/hero1.jpg`, // ✅ Fixed
    description: "研磨・切断・組立の確かな技術。",
    details: "金属加工と鉄骨工事（千葉県 施工事例）",
  },
  {
    id: "project2",
    title: "プロフェッショナルな溶接技術",
    image: `${process.env.PUBLIC_URL}/assets/hero2.jpg`,
    description: "強度と安全性を確保する精密溶接",
    details: "建築鉄骨の溶接作業（東京都 施工事例）",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">施工実績</h2>

        {projectData.map((project, index) => (
          <div
            key={project.id}
            id={project.id} // Set ID for scrolling
            className={`project-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="project-image-container">
              <img
                src={project.image} // ✅ Works because we fixed the paths in projectData
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={`#${project.id}`} className="project-button">
                詳細を見る
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
