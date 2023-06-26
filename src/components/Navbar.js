import { useState, useEffect, useCallback } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo1 from "./logo/logo1.png";

export default function Navbar() {
  // CHANGE NAV-LOGO ON SCROLL
  const [changeLogo, setChangeLogo] = useState(false);

  const changeLogoSize = useCallback(() => {
    const threshold = 10;
    if (window.scrollY >= threshold && changeLogo !== true) {
      setChangeLogo(true);
    }
    if (window.scrollY < threshold && changeLogo !== false) {
      setChangeLogo(false);
    }
  }, [window.scrollY]);

  useEffect(() => {
    window.addEventListener("scroll", changeLogoSize);
    return () => {
      window.removeEventListener("scroll", changeLogoSize);
    };
  }, [changeLogoSize]);

  // FUNCTION FOR A SPYSCROLL
  function openBar() {
    const bar = document.querySelector(".navbar-nav");

    bar.classList.toggle("opened");
  }

  return (
    <nav className="navbar sticky-top navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand  ms-3" href="#">
          <img
            src={logo1}
            className={
              changeLogo ? "navbar-company-logo" : "navbar-company-logo-big"
            }
            alt="Company Logo"
          ></img>
        </a>

        {/*HAMBURGER MENU ICON*/}
        <button
          className="navbar-toggler hamburger-menu"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <FontAwesomeIcon
              icon={faBars}
              size="xl"
              className="hamburger-menu-icon"
            />
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav navbar-menu-list me-auto ms-5 mt-4 mb-3">
            <li className="nav-item ms-2 me-2">
              <Link
                className="nav-link"
                aria-current="page"
                onClick={openBar}
                activeClass="active"
                to="aboutCompany"
                spy={true}
                smooth={true}
                duration={50}
                offset={-170}
              >
                Про компанію
              </Link>
            </li>
            <li className="nav-item ms-2 me-2">
              <Link
                className="nav-link"
                aria-current="page"
                onClick={openBar}
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={50}
                offset={-140}
              >
                Послуги
              </Link>
            </li>
            <li className="nav-item ms-2 me-2">
              <Link
                className="nav-link"
                aria-current="page"
                onClick={openBar}
                activeClass="active"
                to="prices"
                spy={true}
                smooth={true}
                duration={50}
                offset={-160}
              >
                Ціни
              </Link>
            </li>
            <li className="nav-item ms-2 me-2">
              <Link
                className="nav-link"
                aria-current="page"
                onClick={openBar}
                activeClass="active"
                to="securitySystems"
                spy={true}
                smooth={true}
                duration={10}
                offset={-150}
              >
                Системи безпеки
              </Link>
            </li>
            <li className="nav-item ms-2 me-2">
              <Link
                className="nav-link"
                aria-current="page"
                onClick={openBar}
                activeClass="active"
                to="footer"
                spy={true}
                smooth={true}
                duration={50}
                offset={-400}
              >
                Контакти
              </Link>
            </li>
          </ul>
          <span className="tel-number me-4 mt-2">
            тел.: <a href="tel:+380-067-433-09-00">067 433-09-00</a>,{" "}
            <a href="tel:+380-067-432-18-00">067 432-18-00</a>
          </span>
        </div>
      </div>
    </nav>
  );
}
