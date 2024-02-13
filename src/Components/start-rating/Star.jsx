import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

function Star({ noOfstars }) {
  const [rating, setrating] = useState(0);
  const [hover, sethover] = useState(0);

  function handleClick(getCurrentIndex) {
    setrating(getCurrentIndex);
  }
  function handleMouseEnter(getCurrentIndex) {
    sethover(getCurrentIndex);
  }
  function handleMouseLeave(getCurrentIndex) {
    sethover(rating);
  }
  return (
    <div className="star-rating">
      {[...Array(noOfstars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
}

export default Star;
