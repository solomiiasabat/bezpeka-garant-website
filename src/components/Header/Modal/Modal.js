import React, { useState, useRef } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ModalMain(props) {
  const [enterNumber, setEnterNumber] = useState("");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value.replace(/[^+,0-9]/g, "");
    setEnterNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputRef.current.value.length < 9) {
      inputRef.current.value = "";
      setEnterNumber(null);
      return alert(
        "У вашому номері не вистарчає цифр, перевірте його, будь-ласка"
      );
    } else {
      axios
        .post(
          `https://api.telegram.org/bot6273049555:AAFihIbql9HVT6SNNe9d8TJr2YkrvdjbnbM/sendMessage?chat_id=397037025&text=${enterNumber}`
        )
        .then((response) => {
          console.log(response.status, response.data.token);
          alert(
            "Дякуємо, що обрали Безпеку Гарант! Наш менеджер зв'яжеться з вами в найближчий час."
          );
        });
    }

    inputRef.current.value = "";
    setEnterNumber("");
  };

  if (!props.open) return null;

  return (
    <section>
      <div className="main-modal">
        <button className="close-btn exit" onClick={props.close}>
          <FontAwesomeIcon icon={faXmark} size="2xl" />
        </button>
        <div className="question-and-form">
          <h3 className="modal-main-text">
            Залиште ваш номер телефону для подальшого зв'язку
          </h3>
          <form className="input-form">
            <input
              type="phone"
              placeholder="  +380 ..."
              maxLength="13"
              className="number-bar me-2 p-2"
              value={enterNumber}
              onChange={handleChange}
              ref={inputRef}
            ></input>

            <input
              type="submit"
              className="callMe-button"
              value="Зателефонуйте мені"
              onClick={handleSubmit}
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
