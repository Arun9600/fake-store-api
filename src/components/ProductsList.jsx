import {
  Container,
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
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
        product.category.toLowerCase().includes(search.toLowerCase()))
  );
  return (
    <>
      <Box sx={{ padding: "40px 0" }} className="products-list">
        <Container maxWidth="true">
          <Grid container>
            <Grid item xl={8} lg={8} md={8} xs={12}>
              <Typography variant="h1">Products List</Typography>
            </Grid>
            <Grid item xl={4} lg={4} md={4} xs={12}>
              <Search search={search} setSearch={setSearch} />
            </Grid>
            {loading
              ? "fetching data. . ."
              : filteredSearch.map((products) => (
                  <Grid
                    item
                    xl={3}
                    lg={3}
                    md={4}
                    sm={6}
                    xs={12}
                    key={products.id}
                  >
                    <Card className="product-box" variant="outlined">
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
                        <Typography variant="h4">{products.title}</Typography>
                        <Typography variant="h5">
                          Rs. {products.price}
                        </Typography>
                        <Typography variant="h6">
                          Category: {products.category}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProductsList;
