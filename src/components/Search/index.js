import "./index.css";

function Search({ handleSearch }) {
  const handleChange = (e) => {
    const { value } = e.target;
    if (e.key === "Enter") {
      handleSearch(value);
    }
  };
  return (
    <div className="search">
      <input
        className="search-input"
        placeholder="Search by title"
        onKeyUp={handleChange}
      />
    </div>
  );
}

export default Search;
