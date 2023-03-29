const Experience = () => {
  return (
    <>
      <section className="experience">
        <h1 className="text-center pt-3">Experience</h1>
        <hr className="w-25 mx-auto" />
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 mb-3">
              <div className="card  shadow">
                <h4>Online Web Development Course</h4>
                <p>3 month</p>
                <p>
                  I did online web development course on Laravel framework
                  between May 2021 to August 2021. In this course, I learned how
                  to manage the code dynamically, how to interact with databases
                  and learned about how projects are implemented in real time.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3">
              <div className="card shadow">
                <h4>Minor and Major Project</h4>
                <p>2019 and 2020</p>
                <p>
                  I did Minor and Major project in my college. The Minor project
                  name was "eBooks" which was built on HTML, CSS, JavaScript,
                  Bootstrap and PHP MySQL. And the Major project name was "CG
                  Dictionary" which was built on the Django framework.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3">
              <div className="card shadow">
                <h4>Vocational Training</h4>
                <p>45 days</p>
                <p>
                  I did vocational training in Django framework and the Python
                  programming language between May 2019 to June 2019 from TAC
                  (Thought Applied Creations) Raipur Chhattisgarh. I learned
                  about Django framework and the Python programming language.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12 mb-3">
              <div className="card shadow">
                <h4>Vocational Training</h4>
                <p>45 days</p>
                <p>
                  I did vocational training in the Java programming language
                  between May 2018 to June 2018 from Innolat Technologies Raipur
                  Chhattisgarh. I learned Java programming language.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="education">
          <div className="container">
            <div className="card shadow rounded">
              <h3 className="text-center pt-3">Education</h3>
              <hr className="w-25 mx-auto mt-0" />
              <div className="row mx-auto">
                <div className="col-md-6 col-12">
                  <h6>BE (2016-2020):</h6>
                </div>
                <div className="col-md-6 col-12">
                  <p>MM College of Technology, Raipur Chhattisgarh</p>
                </div>
              </div>
              <div className="row mx-auto">
                <div className="col-md-6 col-12 ">
                  <h6>10th and 12th(2014-2016):</h6>
                </div>
                <div className="col-md-6 col-12">
                  <p>
                    Govt. Higher Secondary School Godhi, Raipur Chhattisgarh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Experience;
