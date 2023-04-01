import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "grey" }}>
      <h2>Контакти</h2>
      <div className="container">
        <div className="row my-5">
          <div className="col">
            <FontAwesomeIcon icon={faPhone} />{" "}
            <a href="tel:+380-067-432-02-72" className="ms-1">
              067 432-02-72
            </a>
          </div>
          <div className="col">
            <FontAwesomeIcon icon={faPhone} />{" "}
            <a href="tel:+380-097-282-46-33" className="ms-1">
              097 282-46-33
            </a>
          </div>
          <div className="col">
            <FontAwesomeIcon icon={faPhone} />{" "}
            <a href="tel:+380-068-839-02-91" className="ms-1">
              068 839-02-91
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col mt-5 mb-2">
            <FontAwesomeIcon icon={faAt} />{" "}
            <a href="mailto:b.garant2015@gmail.com" className="ms-1">
              b.garant2015@gmail.com
            </a>
          </div>
          <div className="col mt-5 mb-2">
            <FontAwesomeIcon icon={faLocationDot} />{" "}
            <span className="company-address ms-1">
              м.Вінниця, вул.Магістратська, 158
            </span>
          </div>
          <div className="col mb-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1302.5677804120187!2d28.4499396128284!3d49.23591900330402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5c8479dad871%3A0x73f214be698efb52!2z0LLRg9C70LjRhtGPINCc0LDQs9GW0YHRgtGA0LDRgtGB0YzQutCwLCAxNTgsINCS0ZbQvdC90LjRhtGPLCDQktGW0L3QvdC40YbRjNC60LAg0L7QsdC70LDRgdGC0YwsIDIxMDAw!5e0!3m2!1suk!2sua!4v1680199799491!5m2!1suk!2sua"
              width="280"
              height="115"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      {/*SMALL LOGO AT THE BOTTOM
      <img
        src="logo1.png"
        alt="small logo"
        width="30"
        height="30"
        className="mt-3 mb-4"
  ></img>*/}
    </footer>
  );
}
