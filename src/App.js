import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import { useState } from "react";
import TopArea from "./components/TopArea";
import Categories from "./components/Categories";
import Products from "./components/Products";
import { useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [cartArea, setCartArea] = useState(false);
  const [arun, setArun] = useState([]);
  const theme = createTheme({
    typography: {
      fontFamily: ["Roboto", "Carattere, cursive", "Poppins"].join(","),
      h1: {
        fontFamily: "Poppins",
        fontSize: "28px",
        fontWeight: "bold",
      },
      h2: {
        fontFamily: "Carattere, cursive",
      },
      h3: {
        fontFamily: "Poppins",
      },
      h4: {
        fontFamily: "Poppins",
      },
      h5: {
        fontFamily: "Poppins",
      },
      h6: {
        fontFamily: "Poppins",
      },
      p: {
        fontFamily: "Poppins",
      },
    },
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("cart"));
    if (localData) {
      setCart(localData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Arun", "Arun");
  }, [arun]);

  useEffect(() => {
    const getItems = localStorage.getItem("Arun");
    if (getItems) {
      setArun(getItems);
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App">
          <TopArea
            cartArea={cartArea}
            setCartArea={setCartArea}
            cart={cart}
            setCart={setCart}
          />
          <Categories loading={loading} />
          <Products
            loading={loading}
            setLoading={setLoading}
            cartArea={cartArea}
            setCartArea={setCartArea}
            cart={cart}
            setCart={setCart}
          />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
