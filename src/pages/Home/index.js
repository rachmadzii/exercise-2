import "./index.css";

function Home() {
  return (
    <div className="home">
      <h1>Exercise Module 2 Session 1</h1>
      <form id="form" className="formSearch">
        <div className="form-group">
          <input type="text" name="title" required />
          <button id="btnSearch" type="submit">
            Search
          </button>
        </div>
      </form>
      <img
        src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif"
        className="image"
        alt="GIF"
      />
    </div>
  );
}

export default Home;
