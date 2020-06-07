import axios from "axios";
import Config from "../config/config";

const ApiRequest = {
  Movies: {
    Search: (paramSearch) => {
      return async (dispatch) => {
        console.log("entra dispatch. Loading");
        try {
          const moviesResponse = await axios
            .get(`${Config.ApiRequest.credentials.baseURL}/search/movie`, {
              params: {
                ...Config.ApiRequest.credentials.defaultParameters,
                query: paramSearch,
              },
            })
            .then((res) => res.data);
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
};

export default ApiRequest;
