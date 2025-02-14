import React from "react";
import "./Careers.css";
import {
  FaMapMarkerAlt,
  FaClock,
  FaUserTie,
  FaYenSign,
  FaCheckCircle,
} from "react-icons/fa";

const Careers = () => {
  return (
    <section id="careers" className="careers">
      <div className="careers-container">
        {/* Left Section: Job Details */}
        <div className="careers-info">
          <h2 className="careers-title">採用情報</h2>
          <p className="careers-description">
            株式会社HOMIESでは、建設業務に携わる正社員を募集しています。
          </p>

          <div className="job-details">
            <p>
              <FaUserTie className="icon" /> <strong>職種:</strong> 正社員
              (Full-Time Employee)
            </p>
            <p>
              <FaMapMarkerAlt className="icon" /> <strong>勤務地:</strong>{" "}
              千葉県千葉市中央区
            </p>
            <p>
              <FaCheckCircle className="icon" /> <strong>仕事内容:</strong>{" "}
              鍛冶工業務 & メンテナンス
            </p>
            <p>
              <FaYenSign className="icon" /> <strong>給与:</strong>{" "}
              月給280,800円〜345,600円
            </p>
            <p>
              <FaClock className="icon" /> <strong>勤務時間:</strong> 8:00 AM -
              5:00 PM
            </p>
            <p>
              <FaCheckCircle className="icon" /> <strong>必要な資格:</strong>{" "}
              普通自動車運転免許 (AT限定可)
            </p>
          </div>

          <a href="#contact" className="apply-button">
            応募する
          </a>
        </div>

        {/* Right Section: Image */}
        <div className="careers-image">
          <img src="/assets/careers.jpg" alt="Join Us at HOMIES" />
        </div>
      </div>
    </section>
  );
};

export default Careers;
