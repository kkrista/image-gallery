import React, { useEffect, useState } from "react";
import axios from "axios";
import Photos from "./Photos";
import RemoveFavorites from "./RemoveFavorites";
import FavoritePhotos from "./FavoritePhotos";

import "./PictureBrowse.css";
import "./responsive.css";

export default function PictureBrowse(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyWord);
  let [favorites, setFavorites] = useState([]);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let pexelsApiKey =
      "563492ad6f917000010000015173b67705d1468ba14865c565149cc2";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=66`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  useEffect(() => {
    const pictureFavorites = JSON.parse(
      localStorage.getItem("picture-browse-favorites")
    );
    if (pictureFavorites) {
      setFavorites(pictureFavorites);
    }
  }, []);

  function saveToLocalStorage(items) {
    localStorage.setItem("picture-browse-favorites", JSON.stringify(items));
  }

  function addFavoritePicture(picture) {
    const newFavoriteList = [...favorites, picture];
    const favoriteExists = favorites.filter(
      (favorite) => favorite.id === picture.id
    );
    if (favoriteExists.length === 0) {
      setFavorites(newFavoriteList);
      saveToLocalStorage(newFavoriteList);
    }
  }

  const removeFavoritePicture = (picture) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.id !== picture.id
    );
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  if (loaded) {
    return (
      <div className="Photos">
        <section>
          <div className="Forms">
            <form onSubmit={handleSubmit}>
              <div className="Searching">
                <div className="row">
                  <div className="col-6">
                    <input
                      className="search"
                      type="search"
                      autoFocus="on"
                      autoComplete="off"
                      placeholder="What picture would you like to look up?"
                      onChange={handleKeywordChange}
                    />
                  </div>
                  <div className="col-2">
                    <input
                      type="submit"
                      className="SubmitButton"
                      value="Search"
                      size="10"
                    />
                  </div>
                  <div className="col-3">
                    <button
                      className="favorites btn btn-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseWidthExample"
                      aria-expanded="false"
                      aria-controls="collapseWidthExample"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-bookmark-heart-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                      </svg>
                      <span className="fav">Favorites</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
        <h6>( for example: night sky, travel, coding )</h6>
        <div
          className="row d-flex align-content-center mt-4 mb-4"
          style={{ minHeight: "90vh" }}
        >
          <div className="collapse collapse-vertical" id="collapseWidthExample">
            <div className="row">
              <FavoritePhotos
                photos={favorites}
                handleFavoritesClick={removeFavoritePicture}
                favoriteComponent={RemoveFavorites}
              />
            </div>
          </div>
          <Photos photos={photos} handleFavoritesClick={addFavoritePicture} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}