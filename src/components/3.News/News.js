import React from "react";
import "./News.css"; // Import the CSS file

const newsData = [
  {
    id: 1,
    date: "2025.02.07",
    category: "プレスリリース",
    title: "CDP気候変動のAリスト（最高評価）に認定",
    summary: "気候変動への対応が総合的に評価される。",
  },
  {
    id: 2,
    date: "2025.02.03",
    category: "お知らせ・イベント",
    title: "シンガポール国際空港の増改修工事が受賞",
    summary: "「OCAJプロジェクト賞」を受賞。",
  },
  {
    id: 3,
    date: "2025.01.24",
    category: "プレスリリース",
    title: "当社オフィスに再エネ電力を導入",
    summary: "営業所等から排出されるCO2排出量を約75%削減。",
  },
  {
    id: 4,
    date: "2025.01.22",
    category: "プレスリリース",
    title: "緑地の樹木配置を最適化する技術を開発",
    summary: "建築デザインの持続可能性を向上。",
  },
  {
    id: 5,
    date: "2025.01.16",
    category: "お知らせ・イベント",
    title: "「グリーンインフラ産業展2025」に出展",
    summary: "人と自然をつなぐ新たな建築ソリューション。",
  },
];

const News = () => {
  return (
    <section id="news" className="news">
      <div className="news-container">
        <h2 className="news-title">最新ニュース</h2>

        <div className="news-list">
          {newsData.map((news) => (
            <div key={news.id} className="news-item">
              <span className="news-date">{news.date}</span>
              <span className={`news-category ${news.category}`}>
                {news.category}
              </span>
              <div className="news-details">
                <h3 className="news-item-title">{news.title}</h3>
                <p className="news-summary">{news.summary}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="news-more">
          <a href="#news-list" className="news-more-link">
            もっと見る
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;
