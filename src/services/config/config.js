/**
 * Config Object to ApiRequest
 * Configurations by request of api
 * Actions types
 * Credentials
 */
const Config = {
  ApiRequest: {
    credentials: {
      baseURL: "https://api.themoviedb.org/3",
      defaultParameters: {
        api_key: "a8d05c5d1d55dc8d596947f775d106f9",
        sort_by: "popularity.desc",
        language: "es",
      },
    },
    actionsTypes: {
      SEARCH_MOVIES: "SEARCH_MOVIES",
      SEARCH_SERIES: "SEARCH_SERIES",
      ERROR_SEARCH: "ERROR_SEARCH",
    },
  },
};

export default Config;
