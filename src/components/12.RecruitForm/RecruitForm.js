import React, { useState, useEffect } from "react";
import "./RecruitForm.css"; // ✅ Make sure this is at the top
import emailjs from "emailjs-com";

const RecruitForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    furigana: "",
    email: "",
    confirmEmail: "",
    employmentType: [],
    jobDescription: "",
    postalCode: "",
    address: "",
    nearestStation: "",
    walkingTime: "",
    drivingTime: "",
    phoneNumber: "",
    workingHours: "",
    overtime: "",
    earlyShift: "",
    holiday: "",
    ageRequirement: "",
    gender: "",
    benefits: [],
    japaneseLevel: "",
    qualifications: "",
    additionalRequests: "",
  });

  useEffect(() => {
    // Load AjaxZip3 for automatic address fill
    const script = document.createElement("script");
    script.src = "https://ajaxzip3.github.io/ajaxzip3.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle checkbox selections
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked
        ? [...prevData[name], value]
        : prevData[name].filter((item) => item !== value),
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email !== formData.confirmEmail) {
      alert("メールアドレスが一致しません。");
      return;
    }

    // Send the form data via EmailJS
    emailjs
      .send(
        "homies-recruit", // ✅ Your Service ID
        "template_vv4hawc", // ✅ Your Template ID
        formData,
        "iUH1GfbdM86bMgz1F" // ✅ Your Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("応募を送信しました。ありがとうございます！");
          setFormData({}); // Reset form
        },
        (err) => {
          console.error("FAILED...", err);
          alert("送信に失敗しました。もう一度お試しください。");
        }
      );
  };

  return (
    <section className="recruit-form">
      <form onSubmit={handleSubmit}>
        <label>
          会社名 (Company Name) <span>*</span>
        </label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />

        <label>
          ふりがな (Furigana) <span>*</span>
        </label>
        <input
          type="text"
          name="furigana"
          value={formData.furigana}
          onChange={handleChange}
          required
        />

        <label>
          メールアドレス (Email) <span>*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>
          メールアドレス (確認用) <span>*</span>
        </label>
        <input
          type="email"
          name="confirmEmail"
          value={formData.confirmEmail}
          onChange={handleChange}
          required
        />

        <label>
          雇用形態 (Employment Type) <span>*</span>
        </label>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="employmentType"
              value="正社員"
              onChange={handleCheckboxChange}
            />{" "}
            正社員
          </label>
          <label>
            <input
              type="checkbox"
              name="employmentType"
              value="契約社員"
              onChange={handleCheckboxChange}
            />{" "}
            契約社員
          </label>
          <label>
            <input
              type="checkbox"
              name="employmentType"
              value="アルバイト"
              onChange={handleCheckboxChange}
            />{" "}
            アルバイト
          </label>
        </div>

        <label>
          業務内容 (Job Description) <span>*</span>
        </label>
        <input
          type="text"
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleChange}
          required
        />

        <label>
          郵便番号 (Postal Code) <span>*</span>
        </label>
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          onBlur={() =>
            window.AjaxZip3.zip2addr("postalCode", "", "address", "address")
          } // ✅ Use window.AjaxZip3 instead of import
          required
        />

        <label>
          勤務地住所 (Work Address) <span>*</span>
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label>
          勤務地最寄駅 (Nearest Station) <span>*</span>
        </label>
        <input
          type="text"
          name="nearestStation"
          value={formData.nearestStation}
          onChange={handleChange}
          required
        />

        <label>
          勤務地電話番号 (Work Phone Number) <span>*</span>
        </label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <label>
          募集年齢 (Age Requirement) <span>*</span>
        </label>
        <input
          type="text"
          name="ageRequirement"
          value={formData.ageRequirement}
          onChange={handleChange}
          required
        />

        <label>
          性別 (Gender) <span>*</span>
        </label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">選択してください</option>
          <option value="どちらでも">どちらでも</option>
          <option value="男性">男性</option>
          <option value="女性">女性</option>
        </select>

        <label>
          待遇 (Benefits) <span>*</span>
        </label>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="benefits"
              value="交通費支給"
              onChange={handleCheckboxChange}
            />{" "}
            交通費支給
          </label>
          <label>
            <input
              type="checkbox"
              name="benefits"
              value="制服貸与"
              onChange={handleCheckboxChange}
            />{" "}
            制服貸与
          </label>
          <label>
            <input
              type="checkbox"
              name="benefits"
              value="お弁当"
              onChange={handleCheckboxChange}
            />{" "}
            お弁当
          </label>
        </div>

        <label>
          日本語能力 (Japanese Level) <span>*</span>
        </label>
        <select
          name="japaneseLevel"
          value={formData.japaneseLevel}
          onChange={handleChange}
          required
        >
          <option value="">選択してください</option>
          <option value="N1">N1</option>
          <option value="N2">N2</option>
          <option value="N3">N3</option>
          <option value="N4">N4</option>
          <option value="N5">N5</option>
        </select>

        <label>その他要望 (Additional Requests)</label>
        <textarea
          name="additionalRequests"
          value={formData.additionalRequests}
          onChange={handleChange}
        ></textarea>

        <button type="submit">送信する</button>
      </form>
    </section>
  );
};

export default RecruitForm;
