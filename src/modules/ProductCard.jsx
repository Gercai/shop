import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const ProductCard = () => {
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
    <div>
      {items.map((item) => (
        <Card
          sx={{
            maxWidth: 300,
            margin: "0.75rem",
            "&:hover": { boxShadow: "10px 10px 2px 1px #f7e5cb" },
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
                <Typography gutterBottom variant="h5" component="div">
                  {item.title} {item.size}
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
          </CardActions>
        </Card>
      ))}
    </div>
  );
};
