import React from "react";

function Article({
  title,
  content,
  content2,
  content3,
  subtitle,
  image,
  alt,
  link_article,
}) {
  return (
    <>
      <div className="article">
        <div className="article__leftpart">
          <h2>{title}</h2>
          <p>{content}</p> <br />
          <p>{content2}</p> <br />
          <p>{content3}</p> <br />
          <a href={link_article} target="_blank" rel="noopener noreferrer">
            LIRE UN ARTICLE A PROPOS
          </a>
        </div>
        <div className="article__rightpart">
          <h3>{subtitle}</h3>
          <img src={image} alt={alt} />
        </div>
      </div>
    </>
  );
}

export default Article;
