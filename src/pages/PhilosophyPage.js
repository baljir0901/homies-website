import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Philosophy from "../components/11.Philosophy/Philosophy"; // Corrected Path
import Header from "../components/1.Header/Header"; // Corrected Path
import Footer from "../components/10.Footer/Footer"; // Corrected Path

const PhilosophyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <Philosophy />
        <button className="back-button" onClick={() => navigate("/")}>
          ホームへ戻る
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default PhilosophyPage;
