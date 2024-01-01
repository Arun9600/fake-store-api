import ProductsList from "./ProductsList";
import { BASE_URL } from "../utils";
import { useState, useEffect } from "react";
const Products = ({ loading, setLoading, cartArea, setCartArea }) => {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const productAPI = await fetch(`${BASE_URL}/products`);
      const response = await productAPI.json();
      setProductsList(response);
      console.log(response);
      setLoading(false);
    };
    getProducts();
  }, [setLoading]);
  return (
    <>
      <ProductsList
        productsList={productsList}
        loading={loading}
        cartArea={cartArea}
        setCartArea={setCartArea}
      />
    </>
  );
};

export default Products;
