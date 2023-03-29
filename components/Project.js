import Image from "next/image";
import Link from "next/link";

const Project = () => {
  return (
    <>
      <section className="project py-5" id="project">
        <div className="container">
          <h1 className="text-center">My Works</h1>
          <hr className="w-25 mx-auto" />
          <div className="row py-3">
            <div className="col-md-4 col-12 mb-3">
              <div className="card">
                <div
                  id="carouselExampleFade"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <Image
                        src="/images/es1.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/images/es2.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/images/es3.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/images/es9.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/images/es10.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/images/es4.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/images/es5.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/images/es6.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/images/es7.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/images/es8.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Easy Shop</h4>
                  <p className="card-text">
                    It is a E-Commerce project where to buy goods and services.
                  </p>
                </div>
                <div className="d-flex mx-auto mx-auto project-card-button">
                  <Link
                    target="_blank"
                    href="https://princeyadav.net/easyshop/"
                    className="btn"
                  >
                    View Site
                  </Link>
                  <Link
                    target="_blank"
                    href="https://gitlab.com/princu2212/easyshop"
                    className="btn"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mb-3">
              <div className="card">
                <div
                  id="carouselExampleFade"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <Image
                        src="/images/ebooks1.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/images/ebooks2.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/images/ebooks3.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/images/ebooks4.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="card-title">eBooks</h4>
                  <p className="card-text">
                    It is a eBooks website where the Engineering books are
                    available.
                  </p>
                </div>
                <div className="d-flex mx-auto project-card-button">
                  <Link
                    target="_blank"
                    href="https://princeyadav.net/ebooks/"
                    className="btn"
                  >
                    View Site
                  </Link>
                  <Link
                    target="_blank"
                    href="https://github.com/princu2212/ebooks"
                    className="btn"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mb-3">
              <div className="card">
                <div
                  id="carouselExampleFade"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <Image
                        src="/images/dmc1.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/images/dmc2.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/images/dmc3.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/images/dmc4.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Dark Magic Comics</h4>
                  <p className="card-text">
                    It is a Dark Magic Comics website where you can download and
                    read comics.
                  </p>
                </div>
                <div className="d-flex mx-auto project-card-button">
                  <Link
                    target="_blank"
                    href="https://princeyadav.net/darkmagiccomics/"
                    className="btn"
                  >
                    View Site
                  </Link>
                  <Link
                    target="_blank"
                    href="https://github.com/princu2212/darkmagiccomics"
                    className="btn"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mb-3">
              <div className="card">
                <div
                  id="carouselExampleFade"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <Image
                        src="/images/todolist.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Todo List</h4>
                  <p className="card-text">
                    It is a Todo List application builded in React JS.
                  </p>
                </div>
                <div className="d-flex mx-auto project-card-button">
                  <Link
                    target="_blank"
                    href="https://princeyadav.net/todolist/"
                    className="btn"
                  >
                    View Site
                  </Link>
                  <Link
                    target="_blank"
                    href="https://github.com/princu2212/todolist"
                    className="btn"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mb-3">
              <div className="card">
                <div
                  id="carouselExampleFade"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <Image
                        src="/images/weather.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Weather App</h4>
                  <p className="card-text">
                    It is a Weather check application builded in React JS.
                  </p>
                </div>
                <div className="d-flex mx-auto project-card-button">
                  <Link
                    target="_blank"
                    href="https://princeyadav.net/weather/"
                    className="btn"
                  >
                    View Site
                  </Link>
                  <Link
                    target="_blank"
                    href="https://github.com/princu2212/weather-app"
                    className="btn"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mb-3">
              <div className="card">
                <div
                  id="carouselExampleFade"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <Image
                        src="/images/chat1.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/images/chat2.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Chat App</h4>
                  <p className="card-text">
                    It is a Chat application builded in React JS.
                  </p>
                </div>
                <div className="d-flex mx-auto project-card-button">
                  <Link
                    target="_blank"
                    href="https://github.com/princu2212/chat-app"
                    className="btn"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mb-3">
              <div className="card">
                <div
                  id="carouselExampleFade"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <Image
                        src="/images/translator1.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/images/translator2.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/images/translator3.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="carousel-item">
                      <Image
                        src="/images/translator4.PNG"
                        className="d-block w-100 h-75"
                        alt="..."
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Chhattisgarhi Dictionary</h4>
                  <p className="card-text">
                    It is a Chhattisgarhi Dictionary website where you can know
                    the Chhattisgarhi meaning of Hindi and English Language.
                  </p>
                </div>
                <div className="d-flex mx-auto project-card-button">
                  <Link
                    target="_blank"
                    href="https://github.com/princu2212/chhattisgarhi-dictionary"
                    className="btn"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
