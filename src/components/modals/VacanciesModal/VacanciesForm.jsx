"use client";

import React, { useState } from "react";
import styles from "./VacanciesForm.module.css";

const VacanciesForm = ({ handleFeedbackResultOpenModal }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-zА-Яа-я\s]+$/.test(value) || value === "") {
      setName(value);
      setNameError("");
    } else {
      setNameError("Введіть тільки літери");
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^[\d\s+]+$/.test(value) || value === "") {
      setPhone(value);
      setPhoneError("");
    } else {
      setPhoneError("Введіть тільки цифри");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone) {
      alert("Будь ласка, заповніть всі поля форми");
      return;
    }

    // const formData = { name, phone };
    // console.log("Дані, які будуть відправлені:", formData);
    handleFeedbackResultOpenModal();
  };

  return (
    <div className={styles.vacanciesModalFormContainer}>
      <form onSubmit={handleSubmit} className={styles.vacanciesModalForm}>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Ім'я"
            className={styles.vacModalInput}
          />
          <span className={styles.errorMsg}>{nameError}</span>
        </div>
        <div>
          <label htmlFor="phone"></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Телефон"
            className={styles.vacModalInput}
          />
          <span className={styles.errorMsg}>{phoneError}</span>
        </div>
        <button className={styles.vacModalBtnSend} type="submit">
          Відправити
        </button>
        <p className={styles.vacModalFormText}>
          Натискаючи кнопку відправити, ви даєте згоду на обробку ваших
          персональних даних.
        </p>
      </form>
    </div>
  );
};

export default VacanciesForm;
