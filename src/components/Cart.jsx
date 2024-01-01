import { Box, Drawer, Typography, Grid } from "@mui/material";
const Cart = ({ cartArea, setCartArea, cart }) => {
  return (
    <Box>
      <Drawer
        open={cartArea}
        anchor="right"
        onClose={() => setCartArea(false)}
        PaperProps={{ sx: { width: "500px" } }}
      >
        <Box sx={{ padding: "30px" }}>
          <Typography
            variant="h3"
            sx={{ fontSize: "18px", fontWeight: "bold" }}
          >
            Your Cart
          </Typography>
          {cart && cart.length === 0 ? (
            <Typography
              paragraph={true}
              sx={{ marginTop: "30px", fontSize: "18px" }}
            >
              No Products in the cart
            </Typography>
          ) : (
            cart &&
            cart.map((item) => (
              <Box key={item.id}>
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xl={4}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "150px", height: "auto" }}
                    />
                  </Grid>
                  <Grid item xl={8}>
                    <Box>
                      <span style={{ fontWeight: "bold" }}>Product Name:</span>{" "}
                      {item.title}
                    </Box>
                    <Box>
                      <span style={{ fontWeight: "bold" }}>Product Price:</span>{" "}
                      ${item.price}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ))
          )}
        </Box>
      </Drawer>
    </Box>
  );
};

export default Cart;
