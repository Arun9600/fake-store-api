import {
  Container,
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  Rating,
} from "@mui/material";
import { useState } from "react";
import Search from "./Search";
const ProductsList = ({ productsList, loading }) => {
  const [search, setSearch] = useState("");
  const filteredSearch = productsList.filter(
    (product) =>
      (product.title &&
        product.title.toLowerCase().includes(search.toLowerCase())) ||
      (product.category &&
        product.category.toLowerCase().includes(search.toLowerCase())) ||
      (product.price && product.price.toString().includes(search.toString()))
  );
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
                        textAlign="center"
                      >
                        <Card className="product-box">
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
                          <Box className="product-content-area">
                            <Typography variant="h4">
                              {products.title}
                            </Typography>
                            <Typography paragraph={true}>
                              ${products.price}
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: "bold",
                              }}
                            >
                              <Rating
                                value={products.rating.rate}
                                readOnly
                                precision={0.5}
                              />
                              <Typography variant="span">
                                ({products.rating.count} Reviews)
                              </Typography>
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
    </>
  );
};

export default ProductsList;
