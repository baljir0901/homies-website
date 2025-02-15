import React from "react";
import "./News.css"; // Import the CSS file

const newsData = [
  {
    id: 1,
    date: "2025.02.07",
    category: "プレスリリース",
    title: "株式会社HOMIESが正式に設立されました",
    summary:
      "建設業界における新たな挑戦として、HOMIESが正式に法人登録されました。",
  },
  {
    id: 2,
    date: "2025.02.03",
    category: "お知らせ・イベント",
    title: "公式ホームページを公開",
    summary:
      "当社のサービスや施工実績を紹介する公式ウェブサイトを公開しました。",
  },
  {
    id: 3,
    date: "2025.01.24",
    category: "プレスリリース",
    title: "最初の建設プロジェクトがスタート",
    summary: "千葉市内で初の施工プロジェクトが開始されました。",
  },
  {
    id: 4,
    date: "2025.01.22",
    category: "プレスリリース",
    title: "人材募集を開始 - 新たな仲間を募集",
    summary: "鍛冶工・溶接・機械メンテナンスの職人を募集しています。",
  },
  {
    id: 5,
    date: "2025.01.16",
    category: "お知らせ・イベント",
    title: "業務提携に向けたパートナー企業との協議開始",
    summary: "建設業界の信頼できるパートナーと協力体制を構築中。",
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
