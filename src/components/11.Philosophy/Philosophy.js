import React from "react";
import "./Philosophy.css";

const Philosophy = () => {
  return (
    <div className="philosophy-container">
      {/* CEO Message Section */}
      <div className="content message">
        <h2>代表者挨拶 (CEO Message)</h2>
        <div className="ceo-profile">
          <img
            src={`${process.env.PUBLIC_URL}/assets/ceo.jpg`}
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
            <p>株式会社HOMIES 代表取締役社長 プルダッシュ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
