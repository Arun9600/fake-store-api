import { Box, Drawer, Typography } from "@mui/material";
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
                {item.title} - ${item.price}
                <Box>Quantity: {item.quantity}</Box>
              </Box>
            ))
          )}
        </Box>
      </Drawer>
    </Box>
  );
};

export default Cart;
