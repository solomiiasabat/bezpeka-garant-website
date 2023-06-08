import Ajax from "../images/ajax-logo.jpg";
import Tiras from "../images/tiras-logo.svg";
import device1 from "./device-images/device1.png";
import device2 from "./device-images/device2.png";

export default function SecuritySystems() {
  return (
    <section className="securitySystems">
      <div className="container">
        {" "}
        <div className="row">
          <div className="col">
            <h1 className="securitySystems-chapter-title pb-4">
              Системи безпеки
            </h1>

            <p className="security-system-description">
              ТОВ "Безпека-Гарант" є{" "}
              <span className="important-text">
                авторизованим інсталятором{" "}
              </span>
            </p>
            <div className="row">
              <div className="col security-system-logo">
                <img src={Ajax} alt="Ajax-logo" width={200} height={40}></img>
              </div>

              <div className="col security-system-logo">
                <img src={Tiras} alt="Tiras-logo" width={200} height={40}></img>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item device-photos active">
                  <img
                    src={device1}
                    className="d-block"
                    alt="ajax devices"
                    width={360}
                    height={250}
                  ></img>
                </div>

                <div className="carousel-item device-photos">
                  <img
                    src={device2}
                    className="d-block"
                    alt="tiras devices"
                    width={550}
                    height={250}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
