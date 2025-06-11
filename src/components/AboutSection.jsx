import AboutImg from "../assets/img/aboutImg.jpg";
import ContactUs from "./ContactUs";
// import ViewMyWorkBtn from "./ViewMyWorkBtn";

function AboutSection() {
  return (
    <div className="bg-dark text-light py-5" id="about">
      <div className="container">
        <div className="flex-column-reverse flex-md-row row">
          <div className="col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center">
            <img
              className="img-fluid w-75 shadow"
              src={AboutImg}
              alt="about img"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="mb-4" style={{ color: "#7fff00" }}>
              About me
            </h2>
            <p className="text-start">
              I hold a Bachelor of Technology degree in{" "}
              <strong style={{ color: "#7fff00" }}>Computer Science</strong>,
              with a strong emphasis on full-stack development. As a trained
              fresher, I have gained hands-on experience by working on both
              personal and real-world projects.
            </p>
            <p className="text-start">
              During my internship at Blackbuck Engineers, I developed projects
              utilizing modern frameworks and emerging AI technologies such as
              Gemini.
            </p>
            <p className="text-start">
              I am a highly motivated and adaptable individual, eager to
              contribute to impactful technological solutions and continue my
              professional growth.
            </p>

            <p>
              <span style={{ color: "#7fff00" }}>Present Address : </span>
              Hafeezpet, Hyderabad - 500049
            </p>
            <p className="mb-4">
              <span style={{ color: "#7fff00" }}>Native Address : </span>Vuyyuru
              Town, Krishna(Dist) - 521165
            </p>
            {/* <ViewMyWorkBtn /> */}
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
