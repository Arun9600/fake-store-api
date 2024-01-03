import {
  Container,
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  Button,
  Drawer,
} from "@mui/material";
import { useState } from "react";
import Search from "./Search";
import ProductsDetails from "./ProductsDetails";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Cart from "./Cart";
const ProductsList = ({ productsList, loading, cartArea, setCartArea }) => {
  const [search, setSearch] = useState("");
  const [productsId, setProductsId] = useState("");
  const [cart, setCart] = useState([]);
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const filteredSearch = productsList.filter(
    (product) =>
      (product.title &&
        product.title.toLowerCase().includes(search.toLowerCase())) ||
      (product.category &&
        product.category.toLowerCase().includes(search.toLowerCase())) ||
      (product.price && product.price.toString().includes(search.toString()))
  );

  const addToCart = (products) => {
    const prevCart = cart.find((item) => item.id === products.id);
    if (prevCart) {
      const newCart = cart.map((item) =>
        item.id === products.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(newCart);
    } else {
      setCart([...cart, { ...products, quantity: 1 }]);
    }
  };
  return (
    <>
      <Box sx={{ padding: "40px 0" }} className="products-list">
        <Container>
          <Grid container spacing={4}>
            <Grid item xl={12} lg={12} md={12} xs={12} textAlign="center">
              <Typography variant="h2">Our Products</Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} xs={12}>
              <Search search={search} setSearch={setSearch} />
            </Grid>
            {filteredSearch.length === 0 && search.trim !== "" ? (
              `No products found for your Search`
            ) : (
              <>
                {loading
                  ? "fetching data. . ."
                  : filteredSearch.map((products) => (
                      <Grid
                        item
                        xl={4}
                        lg={4}
                        md={6}
                        sm={6}
                        xs={12}
                        key={products.id}
                        textAlign="left"
                      >
                        <Card sx={{ marginBottom: "40px", boxShadow: "0" }}>
                          <CardMedia
                            component="img"
                            src={products.image}
                            alt={products.title}
                            style={{
                              height: 325,
                              width: "100%",
                              objectFit: "cover",
                              paddingTop: "5px",
                            }}
                          ></CardMedia>
                          <Box
                            sx={{
                              padding: "15px",
                              minHeight: "150px",
                              backgroundColor: "#fff",
                            }}
                          >
                            <Typography
                              variant="h5"
                              sx={{
                                fontSize: "14px",
                                color: "#777",
                                marginBottom: "5px",
                              }}
                            >
                              {products.category.toUpperCase()}
                            </Typography>
                            <Typography
                              variant="h4"
                              sx={{
                                fontSize: "16px",
                                marginBottom: "8px",
                                fontWeight: "normal",
                                color: "#334862",
                              }}
                            >
                              {products.title}
                            </Typography>
                            <Typography
                              paragraph={true}
                              sx={{
                                fontWeight: "bold",
                                marginBottom: "10px",
                                color: "#111",
                              }}
                            >
                              ${products.price}
                            </Typography>
                            <Box sx={{ marginTop: "20px" }}>
                              <Grid container>
                                <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                                  <Button
                                    variant="outlined"
                                    color="success"
                                    onClick={() => {
                                      setSideBarOpen(true);
                                      setProductsId(products.id);
                                    }}
                                  >
                                    Quick View
                                  </Button>
                                </Grid>
                                <Grid
                                  item
                                  xl={6}
                                  lg={6}
                                  md={6}
                                  sm={6}
                                  xs={6}
                                  textAlign="right"
                                >
                                  <IconButton
                                    color="primary"
                                    aria-label="add to shopping cart"
                                    onClick={() => {
                                      setCartArea(true);
                                      addToCart(products);
                                    }}
                                  >
                                    <AddShoppingCartIcon
                                      sx={{ color: "#2e7d32" }}
                                    />
                                  </IconButton>
                                </Grid>
                              </Grid>
                            </Box>
                          </Box>
                        </Card>
                      </Grid>
                    ))}
              </>
            )}
          </Grid>
        </Container>
      </Box>
      <Box>
        <Drawer
          open={sidebarOpen}
          anchor="right"
          onClose={() => setSideBarOpen(false)}
          PaperProps={{ sx: { width: "500px" } }}
        >
          <Box>
            <ProductsDetails productsId={productsId} />
          </Box>
        </Drawer>
      </Box>
      <Cart
        cartArea={cartArea}
        setCartArea={setCartArea}
        cart={cart}
        setCart={setCart}
      />
    </>
  );
};

export default ProductsList;
