import React from "react";
import "./MovieContainerSpecial.css";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MovieContainer = ({ title, fetchUrl }) => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);

  const imageUrl = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="movie-row-special">
      <h2>{title}</h2>
      <div className="movie-row-posters">
        <Swiper
          slidesPerView={5.9}
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
              slidesPerView: 5.9,
            }
          }}
          modules={[Keyboard, Navigation]}
          navigation
          className="mySwiper"
          >
          {movies.map((movie) => (
            <SwiperSlide className="movie-row-slide" key={movie.id}>
              <img
                className="movie-img"
                src={imageUrl + movie.backdrop_path}
                alt={movie.original_title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hover-test-container"></div>
      </div>
    </div>
  );
};
export default MovieContainer;
