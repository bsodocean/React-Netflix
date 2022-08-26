import React from "react";
import "./MovieContainerSpecial.css";
import axios from "axios";

import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper";
import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MovieContainer = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  React.useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);

  const imageUrl = "https://image.tmdb.org/t/p/w500/";

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

  return (
    <div className="movie-row-special">
      <h2>{title}</h2>
      <div className="movie-row-posters">
        <Swiper
          slidesPerView={5.93}
          pagination={true}
          loop={true}
          keyboard={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.45,
            },
            1024: {
              slidesPerView: 5.85,
            },
          }}
          modules={[Keyboard, Navigation]}
          navigation
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
