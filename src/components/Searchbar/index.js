import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../searchSlice";
import { getImages } from "../../utils/fetchApi";

export default function SearchBar({ onSuccess }) {
  const query = useSelector((state) => state.search.query);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const images = await getImages(query, 12);
    onSuccess(images.data);
  };

  const handleChange = async (e) => {
    dispatch(setQuery(e.target.value));

    const images = await getImages(query, 12);
    onSuccess(images.data);
  };

  const clearSearch = () => {
    dispatch(setQuery(""));
    onSuccess([]);
  };

  return (
    <div className="search-wrapper">
      <form onSubmit={handleSubmit} className="form-search">
        <div className="form-group">
          <input
            onChange={handleChange}
            type="text"
            value={query}
            placeholder="Search gif..."
            required
          />
          <button type="submit" className="btn-primary">
            Search
          </button>
        </div>
      </form>
      <button className="btn btn-text" onClick={clearSearch}>
        Clear Search
      </button>
    </div>
  );
}
