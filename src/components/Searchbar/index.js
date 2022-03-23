// function Components named Searchbar, has no props
const Searchbar = () => {
  return (
    <form id="form" className="formSearch">
      <div className="form-group">
        <input type="text" required />
        <button id="btnSearch" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default Searchbar;
