import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about mb-3" id="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-12 text-center">
              <Image
                src="/../public/images/header-image.png"
                alt="model"
                width={500}
                height={500}
              />
            </div>
            <div className="col-md-5 col-12">
              <div className="about-text">
                <h1>About Me</h1>
                <h2>Hello!!</h2>
                <p>
                  I am Prince Yadav, a Full Stack developer focused on crafting
                  great web experiences. Designing and Coding have been my
                  passion since the days I started working with computers but I
                  found myself into web design/development since 2017. I enjoy
                  creating beautifully designed, functional websites.
                </p>
                <Link href="#contact" className="btn mt-4">
                  Hire Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
