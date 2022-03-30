const API_KEY = '63e02ea91a0ba2b67d4f233c70b47544';

const requests = {
  fetchGetlatest: `/movie/latest?api_key=${API_KEY}&language=en-US`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=2`, 
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchRecommended: `/movie/popular?api_key=${API_KEY}&language=en-US&page=5`,
}

export default requests;