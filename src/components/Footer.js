import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  function openBar() {
    const bar = document.querySelector(".footer-pagecontent-list");

    bar.classList.toggle("opened");
  }

  return (
    <footer>
      <div className="footer container">
        <div className="row">
          <div className="col-1 mt-4 footer-logo">
            {" "}
            <img src="logo1.png" alt="small logo" width="80" height="80"></img>
          </div>

          <div className="col-3 mt-4">
            <ul className="footer-pagecontent-list">
              <li>
                <Link
                  className="nav-link"
                  aria-current="page"
                  onClick={openBar}
                  activeClass="active"
                  to="aboutCompany"
                  spy={true}
                  smooth={true}
                  duration={50}
                  offset={-80}
                >
                  Про компанію
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  aria-current="page"
                  onClick={openBar}
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={50}
                  offset={-110}
                >
                  Послуги
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  aria-current="page"
                  onClick={openBar}
                  activeClass="active"
                  to="prices"
                  spy={true}
                  smooth={true}
                  duration={50}
                  offset={-120}
                >
                  Ціни
                </Link>
              </li>
              <li>Інструкція з використання</li>
              <li>Контакти</li>
            </ul>
          </div>

          <div className="col-3 mt-4">
            <ul className="footer-contacts">
              <li>
                {" "}
                <FontAwesomeIcon icon={faPhone} color={"#ffcc00"} />{" "}
                <a href="tel:+380-067-432-02-72" className="ms-1">
                  067 432-02-72
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faAt} color={"#ffcc00"} />{" "}
                <a href="mailto:b.garant2015@gmail.com" className="ms-1">
                  b.garant2015@gmail.com
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} color={"#ffcc00"} />{" "}
                <span className="company-address ms-1">
                  м.Вінниця, вул.Магістратська, 158
                </span>
              </li>
            </ul>
          </div>

          <div className="col-5 mt-4 mb-2 location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5210.274222369511!2d28.446605412460453!3d49.2358896082366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b7b3f65d3cb%3A0x691af8f9ff1dd84b!2z0JHQtdC30L_QtdC60LAt0JPQsNGA0LDQvdGC!5e0!3m2!1suk!2sua!4v1684843047658!5m2!1suk!2sua"
              width="480"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="location"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}
