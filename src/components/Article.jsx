import React from "react";

function Article({
  title,
  contenu,
  contenu2,
  contenu3,
  subtitle,
  image,
  alt,
  link_article,
}) {
  return (
    <div>
      <div className="article">
        <div className="article__leftpart">
          <h2>{title}</h2>
          <p>{contenu}</p> <br />
          <p>{contenu2}</p> <br />
          <p>{contenu3}</p> <br />
          <a href={link_article} target="_blank" rel="noopener noreferrer">
            LIRE UN ARTICLE A PROPOS
          </a>
        </div>
        <div className="article__rightpart">
          <h3>{subtitle}</h3>
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
}

export default Article;
