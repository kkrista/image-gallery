import React from "react";

import "./FavoritePhotos.css";
import "./responsive1.css";

export default function FavoritePhotos(props) {
  const FavoriteComponent = props.favoriteComponent;
  if (props.photos) {
    return (
      <section className="FavoritePhotos">
        <div className="container">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
            {props.photos.map(function (photo, index) {
              return (
                <div
                  className="image-container d-flex justify-content-center col "
                  key={index}
                >
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    {" "}
                    <img
                      src={photo.src.portrait}
                      className="img-fluid"
                      alt="pictures"
                    />
                  </a>
                  <div
                    onClick={() => props.handleFavoritesClick(photo)}
                    className="overlay d-flex align-items-center "
                  >
                    <FavoriteComponent />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
}