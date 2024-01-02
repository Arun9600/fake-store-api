import { Box, Drawer, Typography, Grid } from "@mui/material";
const Cart = ({ cartArea, setCartArea, cart }) => {
  const subTotal =
    cart && cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  return (
    <Box>
      <Drawer
        open={cartArea}
        anchor="right"
        onClose={() => setCartArea(false)}
        PaperProps={{ sx: { width: "500px" } }}
      >
        <Box sx={{ padding: "30px 0px" }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
              textIndent: "25px",
              marginBottom: "20px",
            }}
          >
            Your Cart
          </Typography>
          {cart && cart.length === 0 ? (
            <Typography
              paragraph={true}
              sx={{ marginTop: "30px", fontSize: "18px", textIndent: "25px" }}
            >
              No Products in the cart
            </Typography>
          ) : (
            cart &&
            cart.map((item) => (
              <Box
                key={item.id}
                sx={{
                  padding: "25px 0",
                  borderBottom: "1px solid #ccc",
                  backgroundColor: "#f1f1f1",
                }}
              >
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid item xl={5}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "130px",
                        height: "auto",
                        display: "block",
                        margin: "0 auto",
                      }}
                    />
                  </Grid>
                  <Grid item xl={7}>
                    <Box sx={{ marginBottom: "10px" }}>
                      <span
                        style={{
                          fontWeight: "bold",
                          fontSize: "18px",
                        }}
                      >
                        {item.quantity} x {item.title}
                      </span>
                    </Box>
                    <Box>
                      <span
                        style={{
                          fontWeight: "bold",
                          fontSize: "16px",
                          color: "#334862",
                        }}
                      >
                        ${item.quantity * item.price}
                      </span>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ))
          )}
          {cart && cart.length === 0 ? (
            ""
          ) : (
            <Box
              sx={{
                textIndent: "25px",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Grid container>
                <Grid item xl={6}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      textAlign: "right",
                    }}
                  >
                    Total:
                  </Typography>
                </Grid>
                <Grid item xl={6}>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: "20px", fontWeight: "bold" }}
                  >
                    ${subTotal && subTotal.toFixed(2)}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Drawer>
    </Box>
  );
};

export default Cart;
