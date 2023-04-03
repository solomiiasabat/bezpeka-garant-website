import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-1 mt-4 footer-logo">
            {" "}
            <img src="logo1.png" alt="small logo" width="80" height="80"></img>
          </div>

          <div className="col-3 mt-4">
            <ul className="footer-pagecontent-list">
              <li>
                <a>Про компанію</a>
              </li>
              <li>
                <a>Послуги</a>
              </li>
              <li>
                <a>Ціни</a>
              </li>
              <li>
                <a>Інструкція з використання</a>
              </li>
              <li>
                <a>Контакти</a>
              </li>
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

          <div className="col-5 mt-4 mb-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5210.20724417679!2d28.450615677938686!3d49.236524563540385!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5c8479dad871%3A0x73f214be698efb52!2z0LLRg9C70LjRhtGPINCc0LDQs9GW0YHRgtGA0LDRgtGB0YzQutCwLCAxNTgsINCS0ZbQvdC90LjRhtGPLCDQktGW0L3QvdC40YbRjNC60LAg0L7QsdC70LDRgdGC0YwsIDIxMDAw!5e0!3m2!1suk!2sua!4v1680539788635!5m2!1suk!2sua"
              width="480"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}
