import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingLock } from "@fortawesome/free-solid-svg-icons";
import { faLandMineOn } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faHouseFire } from "@fortawesome/free-solid-svg-icons";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <div className="container services">
      <div className="row">
        <div className="col">
          <FontAwesomeIcon
            icon={faBuildingLock}
            size="xl"
            className="service-icon"
          />{" "}
          <p className="service-description">Технічна та фізична охорона</p>
        </div>
        <div className="col">
          <FontAwesomeIcon
            icon={faLandMineOn}
            size="xl"
            className="service-icon"
          />{" "}
          <p className="service-description">Монтаж та обслуговування систем</p>
        </div>
        <div className="col">
          <FontAwesomeIcon
            icon={faShieldHalved}
            size="xl"
            className="service-icon"
          />{" "}
          <p className="service-description">
            Охоронна та пожежна сигналізація
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <FontAwesomeIcon icon={faEye} size="xl" className="service-icon" />{" "}
          <p className="service-description">Відеонагляд</p>
        </div>
        <div className="col">
          <FontAwesomeIcon
            icon={faHouseFire}
            size="xl"
            className="service-icon"
          />
          <p className="service-description">Пожежне спостереження</p>
        </div>
        <div className="col">
          <FontAwesomeIcon
            icon={faUserShield}
            size="xl"
            className="service-icon"
          />{" "}
          <p className="service-description">Охорона публічних заходів</p>
        </div>
      </div>
    </div>
  );
}
