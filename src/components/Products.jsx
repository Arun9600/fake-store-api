import ProductsList from "./ProductsList";
import { BASE_URL } from "../utils";
import { useState, useEffect } from "react";
import Search from "./Search";
const Products = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      const productAPI = await fetch(`${BASE_URL}/products`);
      const response = await productAPI.json();
      setProductsList(response);
      console.log(response);
      setLoading(false);
    };
    getProducts();
  }, []);
  return (
    <>
      <ProductsList productsList={productsList} loading={loading} />
    </>
  );
};

export default Products;
