import { Container, Box, Grid, Typography } from "@mui/material";

const ProductsList = ({ productsList, loading }) => {
  return (
    <>
      <Box sx={{ padding: "40px 0" }} className="products-list">
        <Container maxWidth="true">
          <Grid container>
            <Grid item xl={12} lg={12} md={12} xs={12}>
              <Typography variant="h1" align="center">
                Products List
              </Typography>
            </Grid>
            {loading
              ? "fetching data. . ."
              : productsList.map((products) => (
                  <Grid
                    item
                    xl={3}
                    lg={3}
                    md={4}
                    sm={6}
                    xs={12}
                    key={products.id}
                  >
                    <div>
                      <div className="product-box">
                        <div className="product-image">
                          <img
                            src={products.images[0]}
                            alt={products.title}
                            className="img-fluid"
                          />
                        </div>
                        <div className="product-content-area">
                          <Typography variant="h4">{products.title}</Typography>
                          <Typography variant="h5">
                            Price: Rs.{products.price}
                          </Typography>
                          <Typography variant="h6">
                            Category: {products.category?.name}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </Grid>
                ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProductsList;
