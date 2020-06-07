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
        Response: payload,
      };
    default:
      return state;
  }
};

export default reducer;
