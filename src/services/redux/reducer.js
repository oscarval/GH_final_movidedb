import Config from "../config/config";
const initialErrorsState = [];

/**
 * Reducer Services
 * @param {*} state
 * @param {*} param1
 */
const reducer = (state = initialErrorsState, { type, payload }) => {
  switch (type) {
    case Config.ApiRequest.actionsTypes.ERROR_SEARCH:
      return payload.map((error) => {
        return {
          code: error.code,
          message: error.message,
        };
      });
    case Config.ApiRequest.actionsTypes.SEARCH_MOVIES:
      return {
        ...state,
        Movies: payload.response,
        textSearchMovie: payload.textSearch,
        loading: payload.response ? false : true,
      };
    case Config.ApiRequest.actionsTypes.SEARCH_SERIES:
      return {
        ...state,
        Series: payload.response,
        textSearchSerie: payload.textSearch,
        loading: payload.response ? false : true,
      };
    case Config.ApiRequest.actionsTypes.GET_BILLBOARD:
      return {
        ...state,
        Billaboard: payload.response,
      };
    case Config.ApiRequest.actionsTypes.GET_POPULARITY:
      return {
        ...state,
        Popularity: payload.response,
      };
    case Config.ApiRequest.actionsTypes.GET_MOVIE:
      return {
        ...state,
        Movie: payload.response,
      };
    case Config.ApiRequest.actionsTypes.GET_SERIE:
      return {
        ...state,
        Serie: payload.response,
      };
    default:
      return state;
  }
};

export default reducer;
