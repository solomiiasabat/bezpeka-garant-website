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
                <img
                  src={Ajax}
                  alt="Ajax-logo"
                  width={250}
                  height={50}
                  className="mt-4"
                ></img>
              </div>

              <div className="col security-system-logo">
                <img
                  src={Tiras}
                  alt="Tiras-logo"
                  width={250}
                  height={50}
                  className="mt-4"
                ></img>
              </div>
            </div>
          </div>
          <div className="col device-photos">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item  active">
                  <img
                    src={device1}
                    className="d-block"
                    alt="device1"
                    width={480}
                    height={310}
                  ></img>
                </div>

                <div className="carousel-item">
                  <img
                    src={device2}
                    className="d-block"
                    alt="photo2"
                    width={705}
                    height={310}
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
