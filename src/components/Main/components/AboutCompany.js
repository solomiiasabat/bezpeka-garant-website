import aboutCompany from "./images/aboutCompany.png";

export default function AboutCompany() {
  return (
    <section className="aboutCompany">
      <div className="container ">
        <div className="row">
          <div className="info-aboutCompany col-6">
            <h1 className="aboutCompany-chapter-title pb-4">Про компанію</h1>
            <p>
              <span className="important-text">ТОВ «Безпека-Гарант»</span> — це
              згуртована команда професіоналів, які з 2002 року надають комплекс
              охоронних послуг. Звернувшись до нас, ви зможете замовити фізичну
              та пультову охорону, пожежне спостереження, охорону публічних
              заходів та багато іншого.
            </p>
            <p>
              В охоронній компанії працюють фахівці, які встановлять повний
              комплекс необхідного обладнання протягом мінімального терміну, не
              порушуючи інтер'єру вашого приміщення. А також дадуть відповідь на
              всі ваші запитання по умовах експлуатації та обслуговування
              встановленої у будинку, квартирі або офісі охоронної та пожежної
              сигналізації.
            </p>
          </div>
          <div className="col-6">
            <img
              src={aboutCompany}
              alt="companyPhoto"
              width={700}
              height={440}
              className="ps-3 mt-4"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}
