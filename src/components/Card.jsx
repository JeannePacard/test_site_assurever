import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function Card({
  title,
  subtitle,
  secondsubtitle,
  content,
  content2,
  content3,
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

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className="card"
        onClick={handleCardClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-container">
          <img src={image1} alt={alt} />
          {isHovered && <p className="text-overlay">Voir plus</p>}
        </div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>

      {isPopupOpen && (
        <div className="popup" onClick={handleClosePopup}>
          <div
            className="popup-resume-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cross" onClick={handleClosePopup}>
              <RxCross2 />
            </div>
            <h1>{title}</h1>
            <img src={image2} alt={alt2} />
            <h2>{subtitle}</h2> <br />
            <p>{content2}</p>
            <h2>{secondsubtitle}</h2> <br />
            <p>{content3}</p>
            <h3>{slogan}</h3>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
