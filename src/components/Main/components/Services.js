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
      <h1 className="service-chapter-title pb-4">Послуги</h1>
      <div className="row">
        {/*SERVICE 1 */}
        <div className="col me-5 service-unit">
          <FontAwesomeIcon
            icon={faBuildingLock}
            size="2xl"
            className="service-icon mt-4 ms-3 me-2"
          />{" "}
          <h5 className="service-name ms-3 me-2">
            Технічна та фізична охорона
          </h5>
          <p className="service-description ms-3 me-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a mi
            sed eros venenatis accumsan ut sed risus. Vivamus ut placerat sem.
            Vivamus et nulla quis urna mollis rutrum non sit amet ligula. Ut
            fermentum, ligula in dapibus rutrum, dolor lacus cursus lectus, quis
            cursus neque purus quis tortor. Aliquam dignissim lacus odio, non
            dapibus dolor molestie non.
          </p>
        </div>

        {/*SERVICE 2 */}
        <div className="col ms-3 me-3 service-unit">
          <FontAwesomeIcon
            icon={faLandMineOn}
            size="2xl"
            className="service-icon mt-4 ms-3 me-2"
          />{" "}
          <h5 className="service-name ms-3 me-2">
            Монтаж та обслуговування систем
          </h5>
          <p className="service-description ms-3 me-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a mi
            sed eros venenatis accumsan ut sed risus. Vivamus ut placerat sem.
            Vivamus et nulla quis urna mollis rutrum non sit amet ligula. Ut
            fermentum, ligula in dapibus rutrum, dolor lacus cursus lectus, quis
            cursus neque purus quis tortor. Aliquam dignissim lacus odio, non
            dapibus dolor molestie non.
          </p>
        </div>

        {/*SERVICE 3 */}
        <div className="col ms-5 service-unit">
          <FontAwesomeIcon
            icon={faShieldHalved}
            size="2xl"
            className="service-icon mt-4 ms-3 me-2"
          />{" "}
          <h5 className="service-name ms-3 me-2">
            Охоронна та пожежна сигналізація
          </h5>
          <p className="service-description ms-3 me-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a mi
            sed eros venenatis accumsan ut sed risus. Vivamus ut placerat sem.
            Vivamus et nulla quis urna mollis rutrum non sit amet ligula. Ut
            fermentum, ligula in dapibus rutrum, dolor lacus cursus lectus, quis
            cursus neque purus quis tortor. Aliquam dignissim lacus odio, non
            dapibus dolor molestie non.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        {/*SERVICE 4 */}
        <div className="col me-5 service-unit">
          <FontAwesomeIcon
            icon={faEye}
            size="2xl"
            className="service-icon mt-4 ms-3 me-2"
          />{" "}
          <h5 className="service-name ms-3 me-2">Відеонагляд</h5>
          <p className="service-description ms-3 me-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a mi
            sed eros venenatis accumsan ut sed risus. Vivamus ut placerat sem.
            Vivamus et nulla quis urna mollis rutrum non sit amet ligula. Ut
            fermentum, ligula in dapibus rutrum, dolor lacus cursus lectus, quis
            cursus neque purus quis tortor. Aliquam dignissim lacus odio, non
            dapibus dolor molestie non.
          </p>
        </div>

        {/*SERVICE 5 */}
        <div className="col ms-3 me-3 service-unit">
          <FontAwesomeIcon
            icon={faHouseFire}
            size="2xl"
            className="service-icon mt-4 ms-3 me-2"
          />
          <h5 className="service-name ms-3 me-2">Пожежне спостереження</h5>
          <p className="service-description ms-3 me-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a mi
            sed eros venenatis accumsan ut sed risus. Vivamus ut placerat sem.
            Vivamus et nulla quis urna mollis rutrum non sit amet ligula. Ut
            fermentum, ligula in dapibus rutrum, dolor lacus cursus lectus, quis
            cursus neque purus quis tortor. Aliquam dignissim lacus odio, non
            dapibus dolor molestie non.
          </p>
        </div>

        {/*SERVICE 6 */}
        <div className="col ms-5 service-unit">
          <FontAwesomeIcon
            icon={faUserShield}
            size="2xl"
            className="service-icon mt-4 ms-3 me-2"
          />{" "}
          <h5 className="service-name ms-3 me-2">Охорона публічних заходів</h5>
          <p className="service-description ms-3 me-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a mi
            sed eros venenatis accumsan ut sed risus. Vivamus ut placerat sem.
            Vivamus et nulla quis urna mollis rutrum non sit amet ligula. Ut
            fermentum, ligula in dapibus rutrum, dolor lacus cursus lectus, quis
            cursus neque purus quis tortor. Aliquam dignissim lacus odio, non
            dapibus dolor molestie non.
          </p>
        </div>
      </div>
    </div>
  );
}
