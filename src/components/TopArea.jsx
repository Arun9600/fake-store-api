import { Container, Grid, Box, Typography } from "@mui/material";
import Greetings from "./Greetings";
import Clock from "./Clock";
const TopArea = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#000", padding: "10px 0" }}>
        <Container maxWidth="true">
          <Grid container className="top-area">
            <Grid item xl={6} lg={6} md={6} sm={12}>
              <Typography variant="h6">
                Hello User, <Greetings />
              </Typography>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} className="timer-area">
              <Typography variant="h6">
                <Clock />
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TopArea;
