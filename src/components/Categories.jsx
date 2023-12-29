import { Box, Container, Grid, Typography } from "@mui/material";
import { BASE_URL } from "../utils";
import { useState, useEffect } from "react";
const Categories = ({ loading }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      const categoryAPI = await fetch(`${BASE_URL}/products/categories`);
      const response = await categoryAPI.json();
      setCategories(response);
      console.log(response);
    };
    getCategory();
  }, []);
  return (
    <>
      <Box sx={{ padding: "40px 0", backgroundColor: "#f1f1f1" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              textAlign="center"
              style={{ marginBottom: "10px" }}
            >
              <Typography variant="h2">Top Categories</Typography>
            </Grid>
            {categories &&
              categories.map((category) => (
                <Grid item xl={3} lg={3} md={6} sm={6} xs={12} key={category}>
                  <Box className="category-box">
                    <Typography variant="h3">
                      {category.toUpperCase()}
                    </Typography>
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Categories;
