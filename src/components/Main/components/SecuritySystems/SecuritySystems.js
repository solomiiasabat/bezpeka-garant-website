import Ajax from "../images/ajax-logo.jpg";
import Tiras from "../images/tiras-logo.png";
import device1 from "./device-images/device1.png";
import device2 from "./device-images/device2.png";

export default function SecuritySystems() {
  return (
    <section className="securitySystems">
      <div className="container">
        {" "}
        <div className="row">
          <div className="col security-systems-description">
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
                <img src={Ajax} className="ajax-logo" alt="Ajax-logo"></img>
              </div>

              <div className="col security-system-logo">
                <img src={Tiras} className="tiras-logo" alt="Tiras-logo"></img>
              </div>
            </div>
          </div>
          <div className="col col-device-photos">
            <div
              id="carouselExampleAutoplaying2"
              className="carousel slide carousel-dark"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item device-photos active">
                  <img
                    src={device1}
                    className="d-block ajax-devices"
                    alt="ajax devices"
                  ></img>
                </div>

                <div className="carousel-item device-photos">
                  <img
                    src={device2}
                    className="d-block tiras-devices"
                    alt="tiras devices"
                  ></img>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying2"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying2"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
