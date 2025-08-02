import Image from "react-bootstrap/Image";

import ViewMyWorkBtn from "./ViewMyWorkBtn";
import HeroPic from "../assets/img/heropic.webp";

function Header() {
  return (
    <header className="pt-5" id="header">
      <div className="container py-5">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center text-center text-md-start custom-gap">
          {/* Text Column */}
          <div className="mb-4 mb-md-0">
            <h3 className="text-secondary fw-mono lh-1">Shaik Afreed</h3>
            <h1 className="text-capitalize text-black lh-1 mb-3">
              Full Stack <br />
              Developer
            </h1>
            <ViewMyWorkBtn />
          </div>

          {/* Image Column */}
          <div>
            <Image
              src={HeroPic}
              alt="header img"
              rounded
              className="shadow"
              style={{
                width: "350px",
                height: "400px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
