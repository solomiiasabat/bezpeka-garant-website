import Ajax from "./images/ajax-logo.png";
import Tiras from "./images/tiras-logo.svg";

export default function SecuritySystems() {
  return (
    <section className="securitySystems">
      <div className="container">
        <h1 className="securitySystems-chapter-title pb-4">Системи безпеки</h1>
        <p>ТОВ "Безпека-Гарант" є офіційним інсталятором систем безпеки</p>
        <div className="row">
          <div className="col-6">
            <img
              src={Ajax}
              alt="Ajax-logo"
              width={280}
              height={50}
              className="mt-4"
            ></img>
          </div>
          <div className="col-6">
            <img
              src={Tiras}
              alt="Tiras-logo"
              width={280}
              height={50}
              className="mt-4"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}
