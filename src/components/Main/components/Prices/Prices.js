import React, { useState } from "react";
import ModalPrices from "./ModalPrices";
export default function Prices() {
  const [openModal, setOpenModal] = useState(false);
  // FUNCTIONS FOR OPENING AND CLOSING A MODAL WINDOW
  function handleOpen() {
    setOpenModal(true);
  }

  function handleClose() {
    setOpenModal(false);
  }
  return (
    <section className="prices">
      <div className="container">
        <h1 className="prices-chapter-title pb-4">Ціни</h1>
        <h4>Ми практикуємо індивідуальний підхід до кожного клієнта</h4>
        <p className="mt-4">
          Звертаєтеся до нас і ми допоможемо розрахувати вартість послуг.
        </p>
        <div>
          <button className="connect-prices-button mt-3" onClick={handleOpen}>
            Розрахувати вартість
          </button>
          <ModalPrices
            open={openModal}
            close={handleClose}
            className="main-modal"
          />
        </div>
      </div>
    </section>
  );
}
