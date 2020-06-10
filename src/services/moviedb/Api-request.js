import axios from "axios";
import Config from "../config/config";
import moment from "moment";

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
          const moviesResponse = await axios
            .get(`${Config.ApiRequest.request.baseURL}/search/movie`, {
              params: {
                ...Config.ApiRequest.request.defaultParameters,
                query: paramSearch,
              },
            })
            .then((res) => res.data);
          console.log(moviesResponse);

          dispatch({
            type: Config.ApiRequest.actionsTypes.SEARCH_MOVIES,
            payload: {
              response: moviesResponse,
              textSearch: paramSearch,
            },
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
    getPopularity: () => {
      return async (dispatch) => {
        console.log("entra dispatch. Loading");
        try {
          const moviesResponse = await axios
            .get(`${Config.ApiRequest.request.baseURL}/discover/movie`, {
              params: {
                ...Config.ApiRequest.request.defaultParameters,
              },
            })
            .then((res) => res.data);
          console.log(moviesResponse);
          dispatch({
            type: Config.ApiRequest.actionsTypes.GET_POPULARITY,
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
    getBillboard: () => {
      return async (dispatch) => {
        const date1 = moment().subtract(10, "days");
        const date2 = moment().subtract(1, "days");
        let dateIni = date1.format("YYYY-MM-DD");
        let dateFin = date2.format("YYYY-MM-DD");
        try {
          const moviesResponse = await axios
            .get(`${Config.ApiRequest.request.baseURL}/discover/movie`, {
              params: {
                ...Config.ApiRequest.request.defaultParameters,
                "primary_release_date.gte": dateIni,
                "primary_release_date.lte": dateFin,
              },
            })
            .then((res) => res.data);
          console.log(moviesResponse);
          dispatch({
            type: Config.ApiRequest.actionsTypes.GET_BILLBOARD,
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
    getMovie: (idMovie) => {
      return async (dispatch) => {
        try {
          const movieResponse = await axios
            .get(`${Config.ApiRequest.request.baseURL}/movie/${idMovie}`, {
              params: {
                ...Config.ApiRequest.request.defaultParameters,
              },
            })
            .then((res) => res.data);
          console.log(movieResponse);
          dispatch({
            type: Config.ApiRequest.actionsTypes.GET_MOVIE,
            payload: movieResponse,
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
          const seriesResponse = await axios
            .get(`${Config.ApiRequest.request.baseURL}/search/tv`, {
              params: {
                ...Config.ApiRequest.request.defaultParameters,
                query: paramSearch,
              },
            })
            .then((res) => res.data);
          dispatch({
            type: Config.ApiRequest.actionsTypes.SEARCH_SERIES,
            payload: {
              response: seriesResponse,
              textSearch: paramSearch,
            },
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
