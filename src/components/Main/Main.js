import "./Main.css";
import photo1 from "./photos/photo1.png";
import photo2 from "./photos/photo2.png";

export default function Main() {
  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div
          id="carouselExampleAutoplaying"
          className="col carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={photo1}
                className="d-block"
                alt="photo1"
                width={800}
                height={507}
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src={photo2}
                className="d-block"
                alt="photo2"
                width={881}
                height={507}
              ></img>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Попереднє</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Наступне</span>
          </button>
        </div>
      </div>
    </div>
  );
}
