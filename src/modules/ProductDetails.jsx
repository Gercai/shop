import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  function clickgoBack() {
    navigate(-1);
  }

  useEffect(() => {
    axios
      .get(`https://store-mockup-backend.onrender.com/api/items/${id}`)
      .then((response) => {
        console.log(response);
        setProduct(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a
              style={{
                color: "grey",
                textWeight: 700,
                cursor: "pointer",
              }}
              onClick={clickgoBack}
            >
              Products
            </a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {product.title}
          </li>
        </ol>
      </nav>
      <Container
        id="itemPageImageBox"
        align="center"
        sx={{ mb: 3 }}
        maxWidth="sm"
        style={{
          backgroundImage: `url(${product.imageurl})`,
          backgroundSize: "cover",
          height: "70vh",
          width: "70vh",
          color: "#f5f5f5",
          borderRadius: "10px",
        }}
      ></Container>
      <Container maxWidth="sm" align="center">
        <Typography
          gutterBottom
          variant="h1"
          component="div"
          color="textPrimary"
          align="center"
        >
          <h1>
            {product.title} {product.size}
          </h1>
        </Typography>
      </Container>
      <Container maxWidth="sm" align="center">
        <Typography
          gutterBottom
          variant="paragraph"
          component="div"
          color="textSecondary"
          align="center"
          sx={{ mb: 4 }}
        >
          <p>{product.description}</p>
          <p>{product.price}</p>
          <Button
            size="small"
            sx={{
              color: "white",
              padding: "8px",
              fontSize: "bold",
              backgroundColor: "#e89637",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: "#e89637",
              },
            }}
          >
            Add
          </Button>
        </Typography>
      </Container>
    </div>
  );
};
