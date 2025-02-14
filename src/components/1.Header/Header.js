import React, { useState, useEffect, useCallback } from "react";
import "./Header.css"; // Import CSS file
import { FaBars } from "react-icons/fa"; // Import icons

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolling(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header className={`header ${scrolling ? "scrolled" : ""}`}>
      {/* Left: Logo */}
      <div className="header-left">
        <a href="/" className="logo">
          <img src="/assets/logo2.png" alt="HOMIES Logo" />
        </a>
      </div>

      {/* Hamburger Menu Icon for Mobile */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <FaBars />
      </div>

      {/* Center: Navigation */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <div className="nav-item dropdown">
          <a href="#services">事業内容 ▼</a>
          <div className="dropdown-menu">
            <a href="#services">建築工事全般</a>
            <br />
            <a href="#services">人材紹介</a>
          </div>
        </div>
        <div className="nav-item dropdown">
          <a href="#projects">建築工事 ▼</a>
          <div className="dropdown-menu">
            <a href="#project1">鍛冶工</a>
            <br />
            <a href="#project2">グループでの溶接</a>
            <br />
            <a href="#project2">機械メンテナンス</a>
          </div>
        </div>
        <a href="#ceo-message">会社情報</a>
        <a href="#careers">採用情報</a>
        <a href="#contact">お問い合わせ</a>
      </nav>
    </header>
  );
};

export default Header;
