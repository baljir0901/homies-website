import React from "react";
import RecruitForm from "../components/12.RecruitForm/RecruitForm";

const RecruitmentPage = () => {
  return (
    <div>
      <main className="recruitment-container">
        <h2 className="page-title">人材募集シート登録</h2>
        <p className="sub-title">Recruitment sheet registration</p>
        <p>
          下記フォームに必要事項をご入力の上送信してください。後日担当よりご連絡いたします。
        </p>
        <RecruitForm />
      </main>
    </div>
  );
};

export default RecruitmentPage;
