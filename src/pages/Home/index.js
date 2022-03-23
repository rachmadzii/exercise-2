// import Components Searchbar
import Searchbar from "../../../src/components/Searchbar";
// import Components Gif
import Gif from "../../../src/components/Gif";
// import object data
import data from "../../data";

function Home() {
  /*  there's 2 element before, split into 2 components named Searchbar and Gif
   *  and then render them into the Home page
   *  Gift component have 2 props: title and url
   */
  return (
    <div className="home">
      <h1>Exercise Module 2 Session 1</h1>
      <Searchbar />
      <Gif title={data.title} url={data.url} />
    </div>
  );
}

export default Home;
