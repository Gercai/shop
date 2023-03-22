import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export const ProductDetails = () => {
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
      <Container
        id="itemPageImageBox"
        align="center"
        sx={{ mb: 3 }}
        maxWidth="sm"
        style={{
          backgroundImage: `url("https://picsum.photos/seed/picsum/200/300")`,
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
          <h1>{}</h1>
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
          <p>description</p>
          <p>price</p>
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
