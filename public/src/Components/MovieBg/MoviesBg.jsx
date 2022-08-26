import React from "react";
import "./MoviesBg.css";

import Trailer from "./Trailers/Trailer1.mp4";
import Trailer2 from "./Trailers/Trailer2.mp4";
import Trailer3 from "./Trailers/Trailer3.mp4";
import Trailer4 from "./Trailers/Trailer4.mp4";
import Trailer5 from "./Trailers/Trailer5.mp4";
import Trailer6 from "./Trailers/Trailer6.mp4";
import Trailer7 from "./Trailers/Trailer7.mp4";

import Logo from "./Logo/blade.png";
import Logo2 from "./Logo/taxi.png";
import Logo3 from "./Logo/Joker.png";
import Logo4 from "./Logo/Psycho.png";
import Logo5 from "./Logo/Prisoners.png";
import Logo6 from "./Logo/Drive.svg";
import Logo7 from "./Logo/Black.png";

import { FaEye } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

import useOnScreen from "./ObserverApi.js";

const Movies = () => {
  const videoBg = [
    // array of videos
    {
      logo: Logo,
      title: "Blade Runner 2049",
      src: Trailer,
      description:
        "A new blade runner for the Los Angeles Police Department, unearths a long-buried secret that has the potential to plunge what's left of society into chaos.",
    },
    {
      logo: Logo2,
      id: 2,
      title: "Taxi Driver",
      src: Trailer2,
      description:
        "Travis, an ex-marine and Vietnam veteran, works as a taxi driver in New York City. One day, he decides to save an underage prostitute from her pimp in an effort to clean the city of its corruption.",
    },
    {
      logo: Logo3,
      id: 3,
      title: "Joker",
      src: Trailer3,
      description:
        "Arthur Fleck, a party clown, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of crime and chaos.",
    },
    {
      logo: Logo4,
      id: 4,
      title: "American Psycho",
      src: Trailer4,
      description:
        "Patrick Bateman, a wealthy investment banker, hides his psychopathic ego from his friends. Later, his illogical fantasies escalate and he submits to an uncontrollable bloodlust.",
    },
    {
      logo: Logo5,
      id: 5,
      title: "Prisoners",
      src: Trailer5,
      description:
        "When the police take time to find Keller Dover's daughter and her friend, he decides to go on a search himself. His desperation leads him closer to finding the truth and also jeopardises his own life.",
    },
    {
      logo: Logo6,
      id: 6,
      title: "Drive",
      src: Trailer6,
      description:
        "A stuntman and getaway driver falls in love with Irene who is married to a criminal. In a bid to protect her from her husband and some gangsters, he decides to cross over to the other side of the law.",
    },
    {
      logo: Logo7,
      id: 7,
      title: "Black Mirror",
      src: Trailer7,
      description:
        "In an abstrusely dystopian future, several individuals grapple with the manipulative effects of cutting edge technology in their personal lives and behaviours",
    },
  ];

  const [movie, setMovie] = React.useState({}); // Movie from the videoBg array setMovie is for setting the movie state

  const ref = React.useRef();
  const isVisible = useOnScreen(ref); // useOnScreen is a hook that checks if the element is in the viewport using intersectionObserver API

  const randomizeBg = () => {
    // Randomize the background video
    const random = Math.floor(Math.random() * videoBg.length);
    setMovie(videoBg[random]);
  };

  React.useEffect(() => {
    // Run the randomizeBg function when the component is mounted
    randomizeBg();
  }, []);

  if (ref.current) {
    // if videoBg is in 30% height of viewport, play the video else pause it
    console.log(isVisible.scrollHeight);
    if (isVisible) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  return (
    <div className="video-bg">
      <div className="video-bg-container">
        <div className="video-bg-content">
          <img className="movie-logo-img" src={movie.logo} alt="" />
          <p className="movie-desc">{movie.description}</p>
          <div className="btn-container">
            <button className="play-btn dummy-btn">
              <FaPlay className="icon" />
              Play
            </button>
            <button className="myList-btn dummy-btn">
              <FaEye className="icon" />
              My List
            </button>
          </div>
        </div>
        <div className="bg-overlay">
          <video ref={ref} src={movie.src} muted>
            {isVisible}
          </video>
        </div>
      </div>
    </div>
  );
};

export default Movies;
