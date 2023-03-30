export default function Navbar() {
  return (
    <nav className="navbar sticky-top bg-body-tertiary navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand  ms-4" href="#">
          <img src="logo1.png" alt="Logo" width="50" height="50"></img>
        </a>
        <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
          <li className="nav-item me-3">
            <a className="nav-link" aria-current="page" href="#">
              Про компанію
            </a>
          </li>
          <li className="nav-item ms-3 me-3">
            <a className="nav-link" href="#">
              Послуги
            </a>
          </li>
          <li className="nav-item ms-3 me-3">
            <a className="nav-link" href="#">
              Ціни
            </a>
          </li>
          <li className="nav-item ms-3 me-3">
            <a className="nav-link" href="#">
              Контакти
            </a>
          </li>
        </ul>
        <span className="tel-number me-4">
          тел.: <a href="tel:+380-067-432-02-72">067 432-02-72</a>,{" "}
          <a href="tel:+380-097-282-46-33">097 282-46-33</a>
        </span>
      </div>
    </nav>
  );
}
