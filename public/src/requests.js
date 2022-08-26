const KEY = '87c385f8eabd32ca2d8188e09604a822'; // API key to access API else inaccessible

const requests = { // Different requests to access API from Genre to Popular/Trending/Top Rated
    fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=1`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US&page=1`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=en-US&page=1`,
    trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`,
    animated: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=16`,
    horror: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=27`,
    fiction: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=878`,
    western: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=37`,
    history: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=36`,
    drama: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=18`,
}


export default requests;