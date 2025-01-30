import React from "react";
import "../css/Card.css"
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "./store";

export const Card = ({imgSrc,title,description,link,id}) => {

  const dispatch = useDispatch();
  const favorites = useSelector((state)=>state.favorites);

  //check if this card is aleady in favorites
  const isFavorite = favorites.some((item)=> item.id===id )

  const handleFavoriteToggle = () => {
    if(isFavorite){
      dispatch(removeFavorite(id))
    }
    else{
      dispatch(addFavorite({id,imgSrc,title,description,link}));
    }
  }
  return (
    <div className="card-container">
      <img className="card-image" src={imgSrc} alt={title}></img>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <a href={link} className="card-btn">
        Learn More
      </a>

      {/* favorite button */}
      <button className="favorite-btn" onClick={handleFavoriteToggle}>
        {isFavorite ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
      </button>
    </div>
  );
};
