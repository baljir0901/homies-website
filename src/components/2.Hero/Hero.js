import React, { useState, useEffect } from "react";
import "./Hero.css"; // Import the CSS file

const images = [
  {
    src: `${process.env.PUBLIC_URL}/assets/hero1.jpg`,
    title: "精密な鍛冶工技術",
    subtitle: "研磨・切断・組立の確かな技術",
    description: "金属加工と鉄骨工事（千葉県 施工事例）",
    link: "#project1",
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/hero2.jpg`,
    title: "プロフェッショナルな溶接技術",
    subtitle: "強度と安全性を確保する精密溶接",
    description: "建築鉄骨の溶接作業（東京都 施工事例）",
    link: "#project2",
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/hero3.jpg`,
    title: "機械メンテナンスのプロ",
    subtitle: "設備の安定稼働を支える確かな技術",
    description: "産業機器のメンテナンス（関東地域 施工事例）",
    link: "#project3",
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/hero4.jpg`,
    title: "未来を築く仲間を募集",
    subtitle: "建設のプロフェッショナルとして共に成長",
    description: "採用情報はこちら（株式会社HOMIES）",
    link: "#careers",
  },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      {/* Background Slideshow */}
      <div className="hero-slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentImage ? "active" : ""}`}
            style={{
              backgroundImage: `url(${image.src})`,
            }} // ✅ Corrected
          >
            {/* Description + "詳細を見る" Button - Bottom Left */}
            <div className="hero-description">
              <p>{image.description}</p>
              <a href={image.link} className="details-button">
                詳細を見る
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Centered Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">{images[currentImage].title}</h1>
        <p className="hero-subtitle">{images[currentImage].subtitle}</p>
        <a href="#contact" className="cta-button">
          お問い合わせ
        </a>
      </div>

      {/* Navigation Dots */}
      <div className="hero-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImage ? "active" : ""}`}
            onClick={() => setCurrentImage(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
