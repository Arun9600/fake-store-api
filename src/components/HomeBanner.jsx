import { Box } from "@mui/material";
import bgImage from "../images/shop33_slide1.jpg";
const HomeBanner = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          height: "70vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          width: "100%",
        }}
      ></Box>
    </>
  );
};

export default HomeBanner;
