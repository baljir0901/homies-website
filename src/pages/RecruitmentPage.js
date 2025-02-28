import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import RecruitForm from "../components/12.RecruitForm/RecruitFormTemp";
import "./RecuitmentPage.css"; // Ensure CSS is imported

const RecruitmentPage = () => {
  const navigate = useNavigate();

  // ✅ Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Centered Introduction */}
      <div className="recruitment-intro">
        <h2>Recruitment sheet registration</h2>
        <p>
          下記フォームに必要事項をご入力の上送信してください。後日担当よりご連絡いたします。
        </p>
      </div>

      {/* Recruitment Form Section */}
      <section className="recruit-form">
        <h2>人材募集シート登録</h2>
        <p>以下のフォームに入力し、送信してください。</p>
        <RecruitForm />
      </section>

      {/* ✅ Back Button to CEO Message */}
      <div className="content-wrapper">
        <button className="back-button" onClick={() => navigate("/#careers")}>
          ホームへ戻る
        </button>
      </div>
    </div>
  );
};

export default RecruitmentPage;
