import axios from "axios";
import Config from "../config/config";

/**
 * ApiRequest Services
 * Movies functionality
 * Series funtionality
 */
const ApiRequest = {
  Movies: {
    Search: (paramSearch) => {
      return async (dispatch) => {
        console.log("entra dispatch. Loading");
        try {
          const moviesResponse = await get("movie", paramSearch).then(
            (res) => res.data
          );
          dispatch({
            type: Config.ApiRequest.actionsTypes.SEARCH_MOVIES,
            payload: moviesResponse,
          });
        } catch (err) {
          dispatch({
            type: Config.ApiRequest.actionsTypes.ERROR_SEARCH,
            payload: [
              {
                code: -1,
                message: err.message,
              },
            ],
          });
        } finally {
          console.log("hide loading");
        }
      };
    },
  },
  Series: {
    Search: (paramSearch) => {
      return async (dispatch) => {
        console.log("entra dispatch. Loading");
        try {
          const seriesResponse = await get("tv", paramSearch).then(
            (res) => res.data
          );
          dispatch({
            type: Config.ApiRequest.actionsTypes.SEARCH_SERIES,
            payload: seriesResponse,
          });
        } catch (err) {
          dispatch({
            type: Config.ApiRequest.actionsTypes.ERROR_SEARCH,
            payload: [
              {
                code: -1,
                message: err.message,
              },
            ],
          });
        } finally {
          console.log("hide loading");
        }
      };
    },
  },
};

const get = async (searchCategory, paramSearch) => {
  const response = await axios
    .get(`${Config.ApiRequest.credentials.baseURL}/search/${searchCategory}`, {
      params: {
        ...Config.ApiRequest.credentials.defaultParameters,
        query: paramSearch,
      },
    })
    .then((res) => res.data);
  return response;
};

export default ApiRequest;
