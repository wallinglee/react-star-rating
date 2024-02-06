import { useState } from 'react';
import { FaStar } from "react-icons/fa";
import './styles.css';

const StarRating = ({ numberOfStars = 10 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleMouseEnter(currentIndex) {
    setHover(currentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  function handleClick(currentIndex) {
    setRating(currentIndex);
  }

  return (
    <div className="star-rating">
      <div>Current rating: {rating}</div>

      {[...Array(numberOfStars)].map((star, index) => {
        index += 1;
        return (
          <FaStar
            size={50}
            className={"star " + (index <= (hover || rating) ? "active" : "")}
            title={`Click this to set the rating to ${index}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handleClick(index)}
          />
        );
      })}
    </div>
  );
}

export default StarRating