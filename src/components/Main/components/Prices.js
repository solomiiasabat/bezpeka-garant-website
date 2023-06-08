import React, { useState } from "react";
import Modal from "../../Header/Modal/Modal.js";
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
        <div className="row">
          <div className="col-8">
            <h1 className="prices-chapter-title pb-4">Ціни</h1>
            <h5>Ми практикуємо індивідуальний підхід до кожного клієнта</h5>
            <p>
              Доступні ціни та гнучка система знижок на встановлення охоронної
              сигналізації і послуги з цілодобового моніторингу та охорони
              об'єкта вас приємно здивують.
            </p>

            <p className="mt-4 call-to-action">
              Звертайтеся до нас і ми допоможемо розрахувати вам вартість
              послуг!
            </p>

            <div className="row">
              <div className="col">
                <button
                  className="connect-prices-button mt-3"
                  onClick={handleOpen}
                >
                  Розрахувати вартість
                </button>
              </div>
              <div className="col price-modal-window">
                <Modal
                  open={openModal}
                  close={handleClose}
                  className="main-modal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
