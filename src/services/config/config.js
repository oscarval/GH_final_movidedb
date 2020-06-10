/**
 * Config Object to ApiRequest
 * Configurations by request of api
 * Actions types
 * Request
 */
const Config = {
  ApiRequest: {
    request: {
      baseURL: "https://api.themoviedb.org/3",
      imageBaseUrl: "https://image.tmdb.org/t/p/w154",
      backgroundBaseUrl: "https://image.tmdb.org/t/p/w1280",
      defaultParameters: {
        api_key: "a8d05c5d1d55dc8d596947f775d106f9",
        sort_by: "popularity.desc",
        language: "es",
      },
    },
    actionsTypes: {
      SEARCH_MOVIES: "SEARCH_MOVIES",
      SEARCH_SERIES: "SEARCH_SERIES",
      GET_POPULARITY: "GET_POPULARITY",
      GET_BILLBOARD: "GET_BILLBOARD",
      GET_MOVIE: "GET_MOVIE",
      GET_SERIE: "GET_SERIE",
      ERROR_SEARCH: "ERROR_SEARCH",
    },
  },
};

export default Config;
