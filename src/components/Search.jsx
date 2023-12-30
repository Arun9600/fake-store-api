import { Box, TextField } from "@mui/material";
const Search = ({ search, setSearch }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        sx={{
          height: "40px",
          outline: "none",
          boxShadow: "none",
          color: "#000",
          width: "100%",
          fontSize: "16px",
          marginBottom: "20px",
        }}
        label="Search by Product Name, Category and Price"
        variant="standard"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></TextField>
    </Box>
  );
};

export default Search;
