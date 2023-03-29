import Image from "next/image";
const Skill = () => {
  return (
    <>
      <section className="skill">
        <h1 className="text-center">Skills</h1>
        <hr className="w-25 mx-auto" />
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-6 text-center skill-column">
              <Image
                src="/../public/images/laravel.png"
                alt=""
                width={500}
                height={500}
              />
              <Image
                src="/../public/images/react.png"
                alt=""
                width={500}
                height={500}
              />
              <Image
                src="/../public/images/django.png"
                alt=""
                width={500}
                height={500}
              />
              <Image
                src="/../public/images/python.jpeg"
                alt=""
                width={500}
                height={500}
              />
              <Image
                src="/../public/images/ajax.png"
                alt=""
                width={500}
                height={500}
              />
              <Image
                src="/../public/images/gitlab.png"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="col-md-12 col-6 text-center skill-column">
              <Image
                src="/../public/images/github.png"
                alt=""
                width={500}
                height={500}
              />
              <Image
                src="/../public/images/mysql.png"
                alt=""
                width={500}
                height={500}
              />
              <Image
                src="/../public/images/xampp.png"
                alt=""
                width={500}
                height={500}
              />
              <Image
                src="/../public/images/php.jpg"
                alt=""
                width={500}
                height={500}
              />
              <Image
                src="/../public/images/json.png"
                alt=""
                width={500}
                height={500}
              />
              <Image
                src="/../public/images/jquery.png"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="col-md-12 col-12 text-center skill-column">
              <Image
                src="/../public/images/javascript.png"
                alt=""
                width={500}
                height={500}
              />
              <Image
                src="/../public/images/bootstrap.png"
                alt=""
                width={500}
                height={500}
              />
              <Image
                src="/../public/images/css.png"
                alt=""
                width={500}
                height={500}
              />
              <Image
                src="/../public/images/html.png"
                alt=""
                width={500}
                height={500}
              />
              <Image
                src="/../public/images/vscode.png"
                alt=""
                width={500}
                height={500}
              />
              <Image
                src="/../public/images/sublime.png"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
