import React from "react";
import "../css/Card.css"

export const Card = ({imgSrc,title,description,link}) => {
  return (
    <div className="card-container">
        <img
            className="card-image"
            src={imgSrc}
            alt={title}
        ></img>
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
        <a href={link} className="card-btn">
            Learn More
        </a>
    </div>
  );
};
