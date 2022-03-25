// import Components Searchbar
import Searchbar from "../../components/Searchbar";
// import Components Gif
import Gif from "../../components/Gif";
// import array object data
import data from "../../data";

function Home() {
  // <> </> short syntax React Fragment for wrap multiple elements
  // object GifList contains array Component Gif
  const GifList = data.map((item) => (
    <>
      {item.rating === "g" && (
        <Gif key={item.id} title={item.title} url={item.url} />
      )}
    </>
  ));

  return (
    <div className="container">
      <h1>Exercise Module 2 Session 1</h1>
      <Searchbar />
      <div className="gif-list">{GifList}</div>
    </div>
  );
}

export default Home;
