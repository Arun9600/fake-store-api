import { useState, useEffect } from "react";
import { BASE_URL } from "../utils";
import { Box, Typography, Rating } from "@mui/material";
const ProductsDetails = ({ productsId }) => {
  const [singleProduct, setSingleProduct] = useState({});
  useEffect(() => {
    const getProductsAPI = async () => {
      const apiURL = await fetch(`${BASE_URL}/products/${productsId}`);
      const response = await apiURL.json();
      setSingleProduct(response);
      console.log(response);
    };
    getProductsAPI();
  }, [productsId]);
  return (
    <>
      {
        <Box key={singleProduct.id}>
          <Box className="single-product-container">
            <img src={singleProduct.image} alt={singleProduct.title} />
            <Typography variant="h3">{singleProduct.title}</Typography>
            <Typography paragraph={true}>
              <span>Price</span>: ${singleProduct.price}
            </Typography>
            <Typography paragraph={true}>
              <span>Category:</span> {singleProduct.category}
            </Typography>
            <Typography paragraph={true}>
              <span>Description:</span> {singleProduct.description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
                fontWeight: "bold",
              }}
            >
              <Rating
                value={singleProduct.rating?.rate}
                readOnly
                precision={0.5}
              />
              <Typography variant="span">
                ({singleProduct.rating?.count} Reviews)
              </Typography>
            </Box>
          </Box>
        </Box>
      }
    </>
  );
};

export default ProductsDetails;
