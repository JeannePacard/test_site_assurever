import React from "react";

function Post({
  title,
  image,
  alt,
  description,
  link,
  title_link,
  mail,
  subject,
  title_mail,
}) {
  return (
    <>
      <div className="post">
        <h2>{title}</h2>
        <img src={image} alt={alt} className="image" />
        <p>{description}</p>
        <br />
        <br />
        <a href={link} target="_blank" className="button">
          {title_link}
        </a>
        <br />
        <br />
        <br />
        <a href={`mailto:${mail}?Subject=${subject}`} className="mail">
          {title_mail}
        </a>
      </div>
    </>
  );
}

export default Post;
