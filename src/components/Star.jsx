import { useState } from 'react'
import './App.css';
const Star = () => {
    const [rating, setRating] = useState(null);

    const handleStarClick = (clickedRating) => {
      setRating(clickedRating);
    };
  
    return (
      <div className="App">
        <div className="stars">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={`star ${rating !== null && index < rating ? 'blue' : ''} ${rating === index + 1 ? 'red' : ''} ${rating !== null && index > rating - 1 ? 'black' : ''}`}
              onClick={() => handleStarClick(index + 1)}
            >
              *
            </span>
          ))}
        </div>
      </div>
    );
}

export default Star
