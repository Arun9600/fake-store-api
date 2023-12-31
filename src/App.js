import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import { useState } from "react";
import TopArea from "./components/TopArea";
import Categories from "./components/Categories";
import HomeBanner from "./components/HomeBanner";
import Products from "./components/Products";
function App() {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [cartArea, setCartArea] = useState(false);
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
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App">
          <TopArea cartArea={cartArea} setCartArea={setCartArea} cart={cart} />
          <HomeBanner />
          <Categories loading={loading} />
          <Products
            loading={loading}
            setLoading={setLoading}
            cart={cart}
            setCart={setCart}
            cartArea={cartArea}
            setCartArea={setCartArea}
          />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
