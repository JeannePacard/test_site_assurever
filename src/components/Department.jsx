import React from "react";

function Department({
  title,
  icone,
  alt,
  alt_picto,
  alt_picto_letter,
  mail,
  subject,
  adress,
  tel,
  picto,
  picto_letter,
}) {
  return (
    <>
      <div className="department">
        <img src={icone} alt={alt} className="icone" />
        <h2>{title}</h2>
        <div className="department--contact">
          <img src={picto} alt={alt_picto} className="picto" />
          <a href={`mailto:${mail}?Subject=${subject}`}>{mail}</a>
          <a href="tel:+33173034101">{tel}</a>
        </div>
        <p>
          <img src={picto_letter} alt={alt_picto_letter} className="picto" />
          {adress}
        </p>
      </div>
    </>
  );
}

export default Department;
