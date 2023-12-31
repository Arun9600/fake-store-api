import { Container, Grid, Box, Typography } from "@mui/material";
import Greetings from "./Greetings";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Cart from "./Cart";
const TopArea = ({ cartArea, setCartArea, cart }) => {
  return (
    <>
      <Box sx={{ backgroundColor: "#000", padding: "10px 0" }}>
        <Container maxWidth="true">
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "16px",
                  margin: "0",
                  color: "#fff",
                  fontWeight: "normal",
                }}
              >
                Hello User, <Greetings />
              </Typography>
            </Grid>
            <Grid
              item
              xl={6}
              lg={6}
              md={6}
              sm={6}
              xs={6}
              sx={{ textAlign: "right" }}
            >
              <IconButton
                color="primary"
                aria-label="add to shopping cart"
                onClick={() => {
                  setCartArea(true);
                }}
              >
                <AddShoppingCartIcon sx={{ color: "#fff" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Cart cartArea={cartArea} setCartArea={setCartArea} />
    </>
  );
};

export default TopArea;
