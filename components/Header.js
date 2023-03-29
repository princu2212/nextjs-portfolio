import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <section className="header">
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">
              Prince Yadav
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto nav-items">
                <li className="nav-item">
                  <Link className="nav-link active" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#project">
                    Project
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="hero">
          <div className="container">
            <div className="row mx-auto">
              <div className="col-md-7 col-12">
                <div className="name">
                  <p>Hello</p>
                  <h1>
                    I'm <font color="#17d1ac">Prince</font> Yadav
                  </h1>
                  <p className="details">
                    Full Stack Developer | React Developer | Web Designer
                  </p>
                  <Link href="file/Resume.pdf" className="btn">
                    Download CV
                  </Link>
                </div>
                <div className="icons d-flex my-3">
                  <Link
                    className="nav-link"
                    href="https://www.linkedin.com/in/prince-yadav-aa8a51168/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin"></i>
                  </Link>
                  <Link
                    className="nav-link"
                    href="https://github.com/princu2212"
                    target="_blank"
                  >
                    <i className="fab fa-github"></i>
                  </Link>
                  <Link
                    className="nav-link"
                    href="https://gitlab.com/princu2212"
                    target="_blank"
                  >
                    <i className="fab fa-gitlab"></i>
                  </Link>
                  <Link
                    className="nav-link"
                    href="https://www.facebook.com/piyushyadav97"
                    target="_blank"
                  >
                    <i className="fab fa-facebook"></i>
                  </Link>
                  <Link
                    className="nav-link"
                    href="https://www.instagram.com/princu2212/"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 col-12">
                <Image
                  src="/../public/images/header-image.png"
                  alt="header-image"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          <div className="black-line"></div>
        </section>
      </section>
    </>
  );
};

export default Header;
