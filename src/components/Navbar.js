import { Link } from "react-scroll";

export default function Navbar() {
  function openBar() {
    const bar = document.querySelector(".navbar-nav");

    bar.classList.toggle("opened");
  }

  return (
    <nav className="navbar sticky-top  navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand  ms-5" href="/Navbar">
          <img src="logo1.png" alt="Logo" width="80" height="80"></img>
        </a>
        <ul className="navbar-nav me-auto ms-5 mt-4 mb-3">
          <li className="nav-item me-3">
            <Link
              className="nav-link"
              aria-current="page"
              onClick={openBar}
              activeClass="active"
              to="aboutCompany"
              spy={true}
              smooth={true}
              duration={50}
              offset={-230}
            >
              Про компанію
            </Link>
          </li>
          <li className="nav-item ms-3 me-3">
            <Link
              className="nav-link"
              aria-current="page"
              onClick={openBar}
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={50}
              offset={-250}
            >
              Послуги
            </Link>
          </li>
          <li className="nav-item ms-3 me-3">
            <Link
              className="nav-link"
              aria-current="page"
              onClick={openBar}
              activeClass="active"
              to="prices"
              spy={true}
              smooth={true}
              duration={50}
              offset={-240}
            >
              Ціни
            </Link>
          </li>
          <li className="nav-item ms-3 me-3">
            <Link
              className="nav-link"
              aria-current="page"
              onClick={openBar}
              activeClass="active"
              to="securitySystems"
              spy={true}
              smooth={true}
              duration={50}
              offset={-240}
            >
              Системи безпеки
            </Link>
          </li>
          <li className="nav-item ms-3 me-3">
            <Link
              className="nav-link"
              aria-current="page"
              onClick={openBar}
              activeClass="active"
              to="footer"
              spy={true}
              smooth={true}
              duration={50}
              offset={-550}
            >
              Контакти
            </Link>
          </li>
        </ul>
        <span className="tel-number me-4">
          тел.: <a href="tel:+380-067-433-09-00">067 433-09-00</a>,{" "}
          <a href="tel:+380-067-432-18-00">067 432-18-00</a>
        </span>
      </div>
    </nav>
  );
}
