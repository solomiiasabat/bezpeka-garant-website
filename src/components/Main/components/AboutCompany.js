import aboutCompany from "./images/aboutCompany.png";

export default function AboutCompany() {
  return (
    <section className="aboutCompany">
      <div className="container ">
        <div className="row">
          <div className="info-aboutCompany col-xxl-6 col-xl-6 col-lg-7 col-md-7">
            <h1 className="aboutCompany-chapter-title pb-4">Про компанію</h1>
            <p className="aboutCompany-description">
              <span className="important-text">ТОВ «Безпека-Гарант»</span> — це
              згуртована команда професіоналів, які з 2001 року надають комплекс
              охоронних послуг у м.Вінниця. Звернувшись до нас, ви зможете
              замовити фізичну та пультову охорону, пожежне спостереження,
              охорону публічних заходів та багато іншого.
            </p>
            <p className="aboutCompany-description">
              В охоронній компанії працюють фахівці, які встановлять повний
              комплекс необхідного обладнання протягом мінімального терміну, не
              порушуючи інтер'єру вашого приміщення. А також дадуть відповідь на
              всі ваші запитання по умовах експлуатації та обслуговування
              встановленої у будинку, квартирі або офісі охоронної та пожежної
              сигналізації.
            </p>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-5 col-md-5">
            <img
              src={aboutCompany}
              alt="Охорона Вінниця | Фото команди"
              className="ps-3 company-staff-photo"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}
