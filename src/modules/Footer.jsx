import { AiOutlineInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

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
      </div>
    </footer>
  );
};
