import React from "react";
import "./Footer.css"; // Import the CSS file
import { FaPhone, FaEnvelope } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Company Info */}
        <div className="footer-left">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo2.png`}
            alt="HOMIES Logo"
            className="footer-logo"
          />
          <p className="footer-company-name">株式会社HOMIES</p>
        </div>

        {/* Center Section - Navigation */}
        <div className="footer-nav">
          <a href="#home">ホーム</a>
          <a href="#about">会社概要</a>
          <a href="#services">事業内容</a>
          <a href="#projects">施工実績</a>
          <a href="#careers">採用情報</a>
          <a href="#contact">お問い合わせ</a>
        </div>

        {/* Right Section - Contact Info */}
        <div className="footer-contact">
          <p>〒260-0013 千葉県千葉市中央区中央3-13-7</p>
          <p>
            <FaPhone /> 043-445-8420
          </p>
          <p>
            <FaEnvelope /> puru@amara-k.com
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} 株式会社HOMIES. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
