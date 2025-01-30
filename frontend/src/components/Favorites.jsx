import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { removeFavorite } from "./store";

export const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  console.log("Favorites:", favorites); // Debugging to check if Redux is updating

  return (
    <>
      <h1>Favorites ❤️</h1>

      {favorites.length === 0 ? (
        <p>No favorites added</p>
      ) : (
        //grid
        <div className="favorites-grid">
          {favorites.map((item) => (
            //card
            <div key={item.id} className="favorite-card">
              <img
                className="favorite-image"
                src={item.imgSrc}
                alt={item.titte}
              ></img>
              <h2 className="favorite-title">{item.title}</h2>
              <p className="favorite-description">{item.description}</p>

              <a href={item.link} className="favorite-btn">
                Learn More
              </a>

              {/* Remove from Favorites Button */}
              <button
                className="remove-btn"
                onClick={() => dispatch(removeFavorite(item.id))}
              >
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
