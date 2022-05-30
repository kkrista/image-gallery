import React from "react";
import AddFavorites from "./AddFavorites";

import "./Photos.css";
import "./responsive1.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Pictures">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div
                className="image-container d-flex justify-content-start col-4 col-lg-2"
                key={index}
              >
                <img
                  src={photo.src.portrait}
                  className="img-fluid"
                  alt="pictures"
                />
                <div
                  onClick={() => props.handleFavoritesClick(photo)}
                  className="overlay d-flex align-items-center "
                >
                  <AddFavorites />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}