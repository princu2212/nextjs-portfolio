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
                src="/images/laravel.png"
                alt=""
                width={500}
                height={500}
              />
              <Image src="/images/react.png" alt="" width={500} height={500} />
              <Image src="/images/django.png" alt="" width={500} height={500} />
              <Image
                src="/images/python.jpeg"
                alt=""
                width={500}
                height={500}
              />
              <Image src="/images/ajax.png" alt="" width={500} height={500} />
              <Image src="/images/gitlab.png" alt="" width={500} height={500} />
            </div>
            <div className="col-md-12 col-6 text-center skill-column">
              <Image src="/images/github.png" alt="" width={500} height={500} />
              <Image src="/images/mysql.png" alt="" width={500} height={500} />
              <Image src="/images/xampp.png" alt="" width={500} height={500} />
              <Image src="/images/php.jpg" alt="" width={500} height={500} />
              <Image src="/images/json.png" alt="" width={500} height={500} />
              <Image src="/images/jquery.png" alt="" width={500} height={500} />
            </div>
            <div className="col-md-12 col-12 text-center skill-column">
              <Image
                src="/images/javascript.png"
                alt=""
                width={500}
                height={500}
              />
              <Image
                src="/images/bootstrap.png"
                alt=""
                width={500}
                height={500}
              />
              <Image src="/images/css.png" alt="" width={500} height={500} />
              <Image src="/images/html.png" alt="" width={500} height={500} />
              <Image src="/images/vscode.png" alt="" width={500} height={500} />
              <Image
                src="/images/sublime.png"
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
