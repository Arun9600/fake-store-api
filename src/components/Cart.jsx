import {
  Box,
  Drawer,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const Cart = ({
  cartArea,
  setCartArea,
  cart,
  setCart,
  IncreaseQty,
  DecreaseQty,
}) => {
  const subTotal =
    cart && cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const deleteProductInCart = (item) => {
    setCart(cart.filter((items) => items !== item));
  };
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("sm"));
  const sideBarWidth = isLarge ? "500px" : "320px";
  return (
    <Box>
      <Drawer
        open={cartArea}
        anchor="right"
        onClose={() => setCartArea(false)}
        PaperProps={{ sx: { width: `${sideBarWidth}` } }}
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
              No Products in your cart
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
                  <Grid item xl={5} lg={5} md={4} sm={4} xs={12}>
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
                  <Grid item xl={6} lg={6} md={7} sm={7} xs={12}>
                    <Box sx={{ marginBottom: "5px" }}>
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
                      <IconButton
                        color="primary"
                        aria-label="add"
                        onClick={() => IncreaseQty(item)}
                      >
                        <AddIcon
                          sx={{
                            color: "#000",
                            padding: "2px",
                            border: "1px solid #000",
                            borderRadius: "50%",
                            fontSize: "14px",
                          }}
                        />
                      </IconButton>
                      <IconButton
                        color="primary"
                        aria-label="remove"
                        onClick={() => DecreaseQty(item)}
                      >
                        <RemoveIcon
                          sx={{
                            color: "#000",
                            padding: "2px",
                            border: "1px solid #000",
                            borderRadius: "50%",
                            fontSize: "14px",
                          }}
                        />
                      </IconButton>
                    </Box>
                    <Box>
                      <span
                        style={{
                          fontWeight: "bold",
                          fontSize: "18px",
                          color: "#334862",
                        }}
                      >
                        Price: {item.quantity} x ${item.price} = $
                        {item.quantity * item.price}
                      </span>
                    </Box>
                  </Grid>
                  <Grid item xl={1} lg={1} md={1} sm={1} xs={12}>
                    <IconButton
                      color="primary"
                      aria-label="delete"
                      onClick={() => deleteProductInCart(item)}
                    >
                      <DeleteIcon sx={{ color: "#000" }} />
                    </IconButton>
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
                marginTop: "30px",
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
                    ${subTotal && Math.round(subTotal)}
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
