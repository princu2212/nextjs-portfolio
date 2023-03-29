import Link from "next/link";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <h1 className="text-center py-5">Get in touch</h1>
          <div className="row">
            <div className="col-md-6 col-12 contact-details">
              <h1>
                <font color="#17d1ac">Prince Yadav</font>
              </h1>
              <h6>Email: princu2212@gmail.com</h6>
              <h6>Mobile: 9977965713, 8770151549</h6>
              <p>Raipur, Chhattisgarh.</p>
              <h5>Connect with me:</h5>
              <div className="icons d-flex px-0">
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
            <div className="col-md-6 col-12 contact-form">
              <form action="">
                <div className="form-floating">
                  <input
                    type="name"
                    className="form-control"
                    id="name"
                    placeholder="Enter Name"
                  /> 
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating my-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email"
                  />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: "100px" }}
                  ></textarea>
                  <label htmlFor="floatingTextarea2">Comment</label>
                </div>
                <button className="btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
