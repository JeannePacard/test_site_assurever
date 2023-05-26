import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function Card({
  title,
  title2,
  title3,
  description,
  description2,
  description3,
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
            <h2>{title2}</h2> <br />
            <p>{description2}</p>
            <h2>{title3}</h2> <br />
            <p>{description3}</p>
            <h3>{slogan}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
