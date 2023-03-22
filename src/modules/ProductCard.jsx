import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";
import { addToShopCart } from "../functions/shopcartFunctions";

export const ProductCard = ({setCartItems,cartItems}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://store-mockup-backend.onrender.com/api/items")
      .then((response) => {
        console.log(response);
        setItems(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10 d-flex justify-content-center flex-wrap">
        {items.map((item) => (
          <Card
            sx={{
              maxWidth: 300,
              margin: "0.75rem",
              "&:hover": { boxShadow: "8px 8px 2px 1px #d3d3d3" },
            }}
            className="itemCard"
          >
            <Link
              className="link"
              to={`/products/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={item.imageurl}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ color: "black" }}
                  >
                    {item.title} {item.color} {item.size}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
            <CardActions className="d-flex justify-content-between">
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ padding: "8px" }}
              >
                {item.price}€
              </Typography>
              <div>
                <Link
                  className="link"
                  to={`/products/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    size="small"
                    sx={{
                      color: "white",
                      padding: "8px",
                      marginRight: "0.25rem",
                      fontSize: "bold",
                      backgroundColor: "black",
                      "&:hover": {
                        transform: "scale(1.05)",
                        backgroundColor: "black",
                      },
                    }}
                  >
                    <BsEyeFill />
                  </Button>
                </Link>
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
                  <AiOutlineShoppingCart />
                </Button>
              </div>
                  },
                }}
                onClick={() => addToShopCart(item,cartItems,setCartItems)}
              >
                Add
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};
