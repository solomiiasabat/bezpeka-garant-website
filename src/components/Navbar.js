import { Link } from "react-scroll";

export default function Navbar() {
  function openBar() {
    const bar = document.querySelector(".navbar-nav");

    bar.classList.toggle("opened");
  }

  return (
    <nav className="navbar sticky-top navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand  ms-3" href="/Navbar">
          <img src="logo1.png" alt="Company Logo" width="70" height="70"></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto ms-5 mt-4 mb-3">
            <li className="nav-item me-2">
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
                offset={-200}
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
                offset={-240}
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
        </div>
        <span className="tel-number me-4 mt-2">
          тел.: <a href="tel:+380-067-433-09-00">067 433-09-00</a>,{" "}
          <a href="tel:+380-067-432-18-00">067 432-18-00</a>
        </span>
      </div>
    </nav>
  );
}
