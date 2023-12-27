import { Container, Grid, Box } from "@mui/material";
import Greetings from "./Greetings";
import Clock from "./Clock";
const TopArea = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#000", padding: "15px 0" }}>
        <Container maxWidth="true">
          <Grid container className="top-area">
            <Grid item xl={6} lg={6} md={12}>
              <h6>
                Test, <Greetings />
              </h6>
            </Grid>
            <Grid item xl={6} lg={6} md={12} className="timer-area">
              <h6>
                <Clock />
              </h6>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TopArea;
