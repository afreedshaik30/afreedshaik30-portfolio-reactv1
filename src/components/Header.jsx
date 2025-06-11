import Image from "react-bootstrap/Image";

import ViewMyWorkBtn from "./ViewMyWorkBtn";
import HeroPic from "../assets/img/heropic.webp";

function Header() {
  return (
    <header className="pt-5" id="header">
      <div className="container py-md-5">
        <div className="row m-2">
          <div className="col-md-6 d-flex flex-column align-items-start justify-content-center mt-5 mt-md-0">
            <h3 className="text-secondary fw-bold lh-1">Shaik Afreed</h3>
            <h1 className="text-capitalize text-start text-black lh-1 mb-1">
              Full Stack <br /> Developer
            </h1>
            <ViewMyWorkBtn />
          </div>
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
            <Image
              src={HeroPic}
              alt="header img"
              rounded
              className="shadow"
              style={{
                margin: "25px",
                width: "350px", // Set explicit width
                height: "400px", // Set explicit height (same as width)
                objectFit: "cover", // Ensures image covers the circle nicely
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
