import React, { useRef, useEffect, useState, useMemo } from "react";
import "./Header.css";
import Modal from "./Modal/Modal";
import photo1 from "./photos/photo1.png";
import photo2 from "./photos/photo2.png";
import photo3 from "./photos/photo3.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  //FUNCTIONS FOR CHANGING THE BUTTON FORM AFTER SCROLLING
  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "22px",
      threshold: 1.0,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const variable = containerRef.current;
    if (variable) observer.observe(variable);

    return () => {
      if (variable) observer.unobserve(variable);
    };
  }, [containerRef, options]);

  // FUNCTIONS FOR OPENING AND CLOSING A MODAL WINDOW
  function handleOpen() {
    setOpenModal(true);
  }

  function handleClose() {
    setOpenModal(false);
  }

  return (
    <header>
      <div className="header container">
        <div className="row">
          <div
            id="carouselExampleAutoplaying"
            className="col-8 carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item  active">
                <img
                  src={photo1}
                  className="d-block"
                  alt="photo1"
                  width={900}
                  height={620}
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src={photo2}
                  className="d-block"
                  alt="photo2"
                  width={900}
                  height={620}
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src={photo3}
                  className="d-block"
                  alt="photo2"
                  width={900}
                  height={620}
                ></img>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Попереднє</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Наступне</span>
            </button>
          </div>

          <div className="col-4 company-slogan-button">
            <div className="row mt-5 company-name" ref={containerRef}>
              Охоронні послуги ТОВ "Безпека-Гарант"
            </div>
            <div className="row mt-3 slogan">З нами безпечно!</div>
            {isVisible ? (
              <div>
                <button className="connect-button mt-4" onClick={handleOpen}>
                  Підключити
                </button>
                <Modal
                  open={openModal}
                  close={handleClose}
                  className="main-modal"
                />
              </div>
            ) : (
              <div>
                <button className="phone-icon-button" onClick={handleOpen}>
                  <FontAwesomeIcon icon={faPhone} shake size="xl" />
                </button>
                <Modal
                  open={openModal}
                  close={handleClose}
                  className="main-modal"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
