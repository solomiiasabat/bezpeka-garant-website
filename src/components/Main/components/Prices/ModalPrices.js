import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ModalPrices(props) {
  const [enterNumber, setEnterNumber] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.replace(/[^+,0-9]/g, "");
    setEnterNumber(value);
  };

  if (!props.open) return null;

  return (
    <section className="modal-prices">
      <button className="close-btn exit" onClick={props.close}>
        <FontAwesomeIcon icon={faXmark} size="2xl" />
      </button>
      <div className="question-and-form">
        <h3 className="mt-5">
          Залиште ваш номер телефону для подальшого зв'язку
        </h3>
        <form className="mt-5">
          <input
            type="phone"
            placeholder="+380 ..."
            className="number-bar me-2 p-2"
            value={enterNumber}
            onChange={handleChange}
          ></input>

          <input
            type="submit"
            className="callMe-button"
            value="Зателефонуйте мені"
          ></input>
        </form>
        <p className="mt-4 text-under-form">
          Наші оператори зв'яжуться з вами в найближчий час,{" "}
          <span className="important-text">
            щоб розрахувати індивідуальну вартість послуг
          </span>
        </p>
      </div>
    </section>
  );
}
