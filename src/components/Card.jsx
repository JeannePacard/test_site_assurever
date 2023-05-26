import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function Card({
  title,
  subtitle,
  title3,
  description,
  text_part1,
  text_part2,
  image1,
  image2,
  alt,
  alt2,
  slogan,
}) {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleCardClick = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = (event) => {
    event.stopPropagation();
    setPopupOpen(false);
  };

  return (
    <div>
      <div className="card" onClick={handleCardClick}>
        <img src={image1} alt={alt} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-resume-container">
            <div className="cross" onClick={handleClosePopup}>
              <RxCross2 />
            </div>
            <h1>{title}</h1>
            <img src={image2} alt={alt2} />
            <h2>{subtitle}</h2> <br />
            <p>{text_part1}</p>
            <h2>{title3}</h2> <br />
            <p>{text_part2}</p>
            <h3>{slogan}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
