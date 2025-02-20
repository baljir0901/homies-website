import React from "react";
import RecruitForm from "../components/12.RecruitForm/RecruitForm";
import "./RecuitmentPage.css"; // Ensure CSS is imported

const RecruitmentPage = () => {
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
    </div>
  );
};

export default RecruitmentPage;
