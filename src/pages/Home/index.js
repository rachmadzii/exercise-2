/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import Gif from "../../components/Gif";
import SearchBar from "../../components/SearchBar";

export default function SearchGif() {
  const [images, setImages] = useState([]);

  const onSuccess = (images) => {
    setImages(images);
  };

  return (
    <div className="container">
      <h1>Exercise Module 2 Session 1</h1>
      <SearchBar onSuccess={onSuccess} />
      {images.map((image) => (
        <Gif
          url={image.images.fixed_width.url}
          title={image.title}
          key={image.id}
        />
      ))}
    </div>
  );
}
