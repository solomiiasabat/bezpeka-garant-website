import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ModalMain(props) {
  const [enterNumber, setEnterNumber] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.replace(/[^+,0-9]/g, "");
    setEnterNumber(value);
  };

  if (!props.open) return null;

  return (
    <section>
      <div className="main-modal">
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
              placeholder="  +380 ..."
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
            Наші оператори зв'яжуться з вами в найближчий час
          </p>
        </div>
      </div>
    </section>
  );
}
