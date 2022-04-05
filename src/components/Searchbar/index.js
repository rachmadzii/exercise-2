import React, { useState } from "react";

export default function SearchBar({ onSuccess }) {
  const [text, setText] = useState("");

  const getImages = async (query) => {
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    const LIMIT = 12;
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${LIMIT}`;
    const images = await fetch(endpoint).then((res) => res.json());
    return images.data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const images = await getImages(text);
    onSuccess(images);
  };

  const handleChange = async (e) => {
    setText((prevState) => (prevState = e.target.value));

    const images = await getImages(text);
    onSuccess(images);
  };

  return (
    <form onSubmit={handleSubmit} id="form-search">
      <div className="form-group">
        <input
          onChange={handleChange}
          type="text"
          value={text}
          name="text"
          placeholder="Search gif..."
          required
        />
        <button type="submit" className="btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}
