import React from "react";
import MovieBg from "../Components/MovieBg/MoviesBg";
import TopRow from "../Components/MovieContainer/MovieContainerSpecial";
import Row from "../Components/MovieContainer/MovieContainer";
import Footer from "../Components/Footer/Footer";
import requests from "../requests";

const Home = () => {
  return (
    <>
      <MovieBg />
      <TopRow title="Popular Now" fetchUrl={requests.fetchPopular} />
      <Row title="Top Rated" fetchUrl={requests.topRated} />
      <Row title="Upcoming" fetchUrl={requests.upcoming} />
      <Row title="Animated" fetchUrl={requests.animated} />
      <Row title="Horror" fetchUrl={requests.horror} />
      <Row title="Fantasy" fetchUrl={requests.fiction} />
      <Row title="Western" fetchUrl={requests.western} />
      <Row title="History" fetchUrl={requests.history} />
      <Row title="Drama" fetchUrl={requests.drama} />
      <Footer />
    </>
  );
};

export default Home;
