import { AiOutlineInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="d-flex justify-content-center flex-column">
        <p style={{ margin: "1rem" }}>Wiebke Gerald Vitali David Bao</p>
        <div className="d-flex justify-content-center">
          <AiOutlineInstagram style={{ fontSize: "1.7em", margin: "0.2em" }} />
          <FaFacebookSquare style={{ fontSize: "1.5em", margin: "0.2em" }} />
          <BsGithub style={{ fontSize: "1.5em", margin: "0.2em" }} />
          <BsLinkedin style={{ fontSize: "1.4em", margin: "0.2em" }} />
        </div>
        <Link
          className="d-flex align-self-center"
          style={{ color: "white", paddingBottom: "1rem" }}
          to="/admin/"
        >
          ADMIN
        </Link>
      </div>
    </footer>
  );
};
