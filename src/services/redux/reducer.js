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
        textSearch: payload.textSearch,
      };
    case Config.ApiRequest.actionsTypes.GET_BILLBOARD:
      return {
        ...state,
        Billaboard: payload,
      };
    case Config.ApiRequest.actionsTypes.GET_POPULARITY:
      return {
        ...state,
        Popularity: payload,
      };
    default:
      return state;
  }
};

export default reducer;
