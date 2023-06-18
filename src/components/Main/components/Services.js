import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandMineOn } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faHouseFire } from "@fortawesome/free-solid-svg-icons";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <div className="container services">
      <h1 className="service-chapter-title pb-4">Послуги</h1>
      <div className="row">
        {/*SERVICE 1 */}
        <div className="col-12 col-sm col-xxl col-xl col-md service-unit with-description1">
          <FontAwesomeIcon
            icon={faUserShield}
            size="2xl"
            className="service-icon mt-4 ms-3 me-2"
          />{" "}
          <h5 className="service-name ms-3 me-2">Фізична охорона об'єктів </h5>
          <p className="service-description ms-3">
            з оптимальною кількістю добре підготовлених і перевірених
            позаштатними ситуаціями працівників охорони
          </p>
        </div>

        {/*SERVICE 2 */}
        <div className="col-12 col-xxl col-xl col-md service-unit with-description2">
          <FontAwesomeIcon
            icon={faShieldHalved}
            size="2xl"
            className="service-icon mt-4 ms-3 me-2"
          />{" "}
          <h5 className="service-name ms-3 me-2">
            Проектування, монтаж та наладка{" "}
          </h5>
          <p className="service-description ms-3">
            систем відеоспостереження, охоронної, пожежної сигналізації та
            систем контролю доступу
          </p>
        </div>
      </div>

      <div className="row mt-5">
        {/*SERVICE 3 */}
        <div className="col-12 col-sm-5 col-xxl col-xl col-md service-unit without-description1">
          <FontAwesomeIcon
            icon={faHouseFire}
            size="2xl"
            className="service-icon mt-4 ms-3 me-2"
          />
          <h5 className="service-name ms-3 me-2">
            Пожежне спостереження та обслуговування
          </h5>
        </div>

        {/*SERVICE 4 */}
        <div className="col-12 col-sm-5 col-xxl col-xl col-md service-unit without-description2">
          <FontAwesomeIcon
            icon={faEye}
            size="2xl"
            className="service-icon mt-4 ms-3 me-2"
          />{" "}
          <h5 className="service-name ms-3 me-2">Охорона публічних заходів</h5>
        </div>

        {/*SERVICE 5 */}
        <div className="col-12 col-sm-12 col-xxl col-xl col-md service-unit without-description3">
          <FontAwesomeIcon
            icon={faLandMineOn}
            size="2xl"
            className="service-icon mt-4 ms-3 me-2"
          />{" "}
          <h5 className="service-name ms-3 me-2">
            Охорона квартир, будинків, об'єктів всіх форм власності
          </h5>{" "}
        </div>
      </div>
    </div>
  );
}
