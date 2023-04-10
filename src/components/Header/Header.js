import React, { useRef, useEffect, useState } from "react";
import "./Header.css";
import photo1 from "./photos/photo1.png";
import photo2 from "./photos/photo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  const options = {
    root: null,
    rootMargin: "-5px",
    threshold: 1.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col mt-5 company-slogan-button">
            <div className="row mt-5 company-name" ref={containerRef}>
              Охоронні послуги ТОВ "Безпека-Гарант"
            </div>
            <div className="row mt-3 slogan">З нами безпечно!</div>
            {isVisible ? (
              <button className="connect-button mt-4">Підключити</button>
            ) : (
              <button className="phone-icon-button mt-4">
                <FontAwesomeIcon icon={faPhone} shake size="xl" />
              </button>
            )}
          </div>

          <div
            id="carouselExampleAutoplaying"
            className="col carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={photo1}
                  className="d-block"
                  alt="photo1"
                  width={730}
                  height={450}
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src={photo2}
                  className="d-block"
                  alt="photo2"
                  width={730}
                  height={450}
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
        </div>
      </div>
    </header>
  );
}
