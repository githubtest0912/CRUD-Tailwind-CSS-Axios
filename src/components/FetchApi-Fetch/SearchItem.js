const SearchItem = ({ search, setSearch }) => {
    return (
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            role="searchbox"
            placeholder="search items"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    );
  };
  
  export default SearchItem;
  