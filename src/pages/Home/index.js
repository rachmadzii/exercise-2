// import Components Searchbar
import Searchbar from "../../components/Searchbar";
// import Components Gif
import Gif from "../../components/Gif";
// import array object data
import data from "../../data";

function Home() {
  /* object GifList contains array Component Gif
   * use map() to loop array data
   * use filter() to filter out rating g in data
   */
  const GifList = data
    .filter((item) => item.rating !== "g")
    .map((item) => <Gif key={item.id} title={item.title} url={item.url} />);

  return (
    <div className="container">
      <h1>Exercise Module 2 Session 1</h1>
      <Searchbar />
      <div className="gif-list">{GifList}</div>
    </div>
  );
}

export default Home;
