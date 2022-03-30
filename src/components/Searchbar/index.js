// function Components named Searchbar, has no props
const Search = () => {
  return (
    <form id="form-search">
      <div className="form-group">
        <input type="text" name="query" placeholder="Search gif..." required />
        <input type="submit" className="btn-primary" value="Search" />
      </div>
    </form>
  );
};

export default Search;
