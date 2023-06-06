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
          <div className="col mt-4 footer-logo">
            {" "}
            <img
              src="logo1.png"
              alt="small logo"
              width="100"
              height="100"
            ></img>
          </div>

          <div className="col mt-4">
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
                  offset={-190}
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
                  offset={-200}
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
                  offset={-210}
                >
                  Ціни
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  aria-current="page"
                  onClick={openBar}
                  activeClass="active"
                  to="securitySystems"
                  spy={true}
                  smooth={true}
                  duration={50}
                  offset={-215}
                >
                  Системи безпеки
                </Link>
              </li>
              <li>Інструкція з використання</li>
              <li>Контакти</li>
            </ul>
          </div>

          <div className="col mt-4">
            <ul className="footer-contacts">
              <li>
                {" "}
                <FontAwesomeIcon icon={faPhone} color={"#ffcc00"} />{" "}
                <a href="tel:+380-067-433-09-00" className="ms-1">
                  067 433-09-00
                </a>
                , <a href="tel:+380-067-432-18-00">067 432-18-00</a>
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

          <div className="col mt-4 mb-2 location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4962.333416197972!2d28.448239431452294!3d49.23724151580856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b7b3f65d3cb%3A0x691af8f9ff1dd84b!2z0JHQtdC30L_QtdC60LAt0JPQsNGA0LDQvdGC!5e0!3m2!1suk!2sua!4v1685084807907!5m2!1suk!2sua"
              width="600"
              height="380"
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
