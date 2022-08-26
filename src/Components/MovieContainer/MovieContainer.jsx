import React from "react";
import "./MovieContainer.css";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import { useState } from "react";

const MovieContainer = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  React.useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);

  const clickHandler = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(null, { tmdbId: movie.id })
        .then((url) => {
          console.log("url is " + url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log("urlParamsn" + urlParams);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    width: "1900px",
    height: "500px",
    autoplay: true,
  };

  const imageUrl = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="movie-row-posters">
        <Swiper
          slidesPerView={5.9}
          pagination={true}
          loop={true}
          keyboard={true}
          modules={[Keyboard, Navigation]}
          navigation
          breakpoints={{
            768: {
              slidesPerView: 2.45,
            },
            1024: {
              slidesPerView: 5.85,
            },
          }}
          className="movie-row-posters-swiper"
        >
          {movies.map((movie) => (
            <SwiperSlide
              className="movie-row-slide"
              key={movie.id}
              onClick={() => clickHandler(movie)}
            >
              <img
                className="movie-img"
                src={imageUrl + movie.backdrop_path}
                alt={movie.original_title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {trailerUrl && (
          <YouTube
            className="video-row-trailer"
            videoId={trailerUrl}
            opts={opts}
          />
        )}
      </div>
    </div>
  );
};
export default MovieContainer;
