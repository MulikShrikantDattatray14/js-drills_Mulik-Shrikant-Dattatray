import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

let html = "/images/html.png";
let js = "/images/js.png";
let react = "/images/react.png";
let nodejs = "/images/nodejs.png";

let images = [html, js, react, nodejs];

function Imagelist({ onImageClick }) {
  return (
    <div className="imagelist">
      
      {images.map((each, index) => {
        return (
          <img
            key={index}
            src={each}
            alt={`image-${index}`}
            style={{
              height: "150px",
              width: "150px",
              border: "1px solid black",
              margin: "20px",
              borderRadius: "10px",
              boxShadow: "2px",
            }}
            onClick={() => onImageClick(each)}
          />
        );
      })}
    </div>
  );
}

function SingleImage({ each }) {
  return (
    <img
      src={each}
      alt="Selected"
      style={{
        height: "300px",
        width: "300px",
        border: "1px solid black",
        boxShadow: "6px 6px 15px rgba(0, 0, 0, 0.3)",
        borderRadius: "10px",
      }}
    />
  );
}
function Imagegallery() {
  return (
    <>
      <h2 style={{ textDecoration: "underline" }}> Image Gallery </h2>
     
    </>
  );
}
function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <div className="app-container">
        <div className="content">
          <Imagegallery />
          <h5>Click on an Image !</h5>
          <Imagelist onImageClick={handleImageClick} />
          <h5>Selected Image</h5>
          {selectedImage && <SingleImage each={selectedImage} />}
        </div>
      </div>
    </>
  );
}

export default App;
