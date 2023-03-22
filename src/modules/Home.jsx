import headImg from "../shophead.avif";
import { Link } from "react-router-dom";
import "../css/homestyle.scss";

export const Home = () => {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10 d-flex justify-content-center flex-column">
        <img src={headImg} alt="img" />
        <h1 className="text-center" style={{ marginTop: "1rem" }}>
          WELCOME TO CLOTHING
        </h1>
        <p className="text-center">
          Show who you are every day! pick the latest trends and shop until you
          drop dead. We are the styling shop for all yuppies dinks and hippsters
        </p>
        <Link
          className="d-flex align-self-center"
          to={`/products/`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <button className="btn-12">CHECK PRODUCTS</button>
        </Link>
      </div>
    </div>
  );
};
