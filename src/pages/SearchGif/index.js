import React from "react"
import Gif from "../../components/Gif"

const SearchGif = () => {
  const [images, setImages] = React.useState([])
  const [text, setText] = React.useState("")
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

  const getImages = async query => {
    const LIMIT = 12
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${LIMIT}`
    const images = await fetch(endpoint).then(res => res.json())
    setImages(images.data)    
  }

  const handleSubmit = e => {
    e.preventDefault()
    const query = e.target.query.value
    getImages(query)
  }

  const handleChange = e => {
    e.preventDefault()
    setText(prevState => (prevState = e.target.value))
    getImages(text)
  }

  return (
    <div className="container">
      <h1>Exercise Module 2 Session 1</h1>
      <form onSubmit={handleSubmit} className="formSearch">
        <div className="form-group">
          <input onChange={(e) => handleChange(e)} type="text" value={text} name="text" placeholder="Search gif..." required />
          <input type="submit" id="btnSearch" value="Search" />
        </div>
      </form>
      {images.map(image => (
        <Gif
          url={image.images.fixed_width.url}
          title={image.title}
          key={image.id}
        />
      ))}
    </div>
  )
}

export default SearchGif