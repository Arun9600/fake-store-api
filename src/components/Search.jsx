const Search = ({ search, setSearch }) => {
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by Product Name, Category and Price"
        className="search"
      />
    </>
  );
};

export default Search;
