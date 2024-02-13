import { useState } from "react";

function ImageSlider({ slides }) {
  const [currentIdx, setcurrentIdx] = useState(0);

  const slideStyles = {
    height: "100%",
    width: "100%",
    background: `url(${slides[currentIdx].url})`,
    backgroundPosition: "center",
    borderRadius: "10px",
    backgroundSize: "cover",
  };

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };
  return (
    <div style={sliderStyles}>
      <div style={slideStyles}></div>
    </div>
  );
}

export default ImageSlider;
