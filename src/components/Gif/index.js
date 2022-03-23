// function Components named Gif, have 2 props: title and url
// use {} to declare props
const Gif = ({ title, url }) => {
  return (
    <div className="gif">
      <h3>{title}</h3>
      <img src={url} alt={title} />
    </div>
  );
};

export default Gif;
