import axios from "axios";
import Config from "../config/config";
import moment from "moment";

const TIMEOUT = 500;
/**
 * ApiRequest Services
 * Movies functionality
 * Series funtionality
 */
const ApiRequest = {
  Movies: {
    Search: (paramSearch) => {
      return async (dispatch) => {
        setLoading(Config.ApiRequest.actionsTypes.SEARCH_MOVIES, dispatch);
        try {
          const moviesResponse = await axios
            .get(`${Config.ApiRequest.request.baseURL}/search/movie`, {
              params: {
                ...Config.ApiRequest.request.defaultParameters,
                query: paramSearch,
              },
            })
            .then((res) => res.data);
          setTimeout(() => {
            dispatch({
              type: Config.ApiRequest.actionsTypes.SEARCH_MOVIES,
              payload: {
                response: moviesResponse,
                textSearch: paramSearch,
              },
            });
          }, TIMEOUT);
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
        }
      };
    },
    getPopularity: () => {
      return async (dispatch) => {
        setLoading(Config.ApiRequest.actionsTypes.GET_POPULARITY, dispatch);
        try {
          const moviesResponse = await axios
            .get(`${Config.ApiRequest.request.baseURL}/discover/movie`, {
              params: {
                ...Config.ApiRequest.request.defaultParameters,
              },
            })
            .then((res) => res.data);
          setTimeout(() => {
            dispatch({
              type: Config.ApiRequest.actionsTypes.GET_POPULARITY,
              payload: {
                response: moviesResponse,
              },
            });
          }, TIMEOUT);
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
        }
      };
    },
    getBillboard: () => {
      return async (dispatch) => {
        setLoading(Config.ApiRequest.actionsTypes.GET_BILLBOARD, dispatch);
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
          setTimeout(() => {
            dispatch({
              type: Config.ApiRequest.actionsTypes.GET_BILLBOARD,
              payload: {
                response: moviesResponse,
              },
            });
          }, TIMEOUT);
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
        }
      };
    },
    getMovie: (idMovie) => {
      return async (dispatch) => {
        setLoading(Config.ApiRequest.actionsTypes.GET_MOVIE, dispatch);
        try {
          const movieResponse = await axios
            .get(`${Config.ApiRequest.request.baseURL}/movie/${idMovie}`, {
              params: {
                ...Config.ApiRequest.request.defaultParameters,
              },
            })
            .then((res) => res.data);
          setTimeout(() => {
            dispatch({
              type: Config.ApiRequest.actionsTypes.GET_MOVIE,
              payload: {
                response: movieResponse,
              },
            });
          }, TIMEOUT);
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
        }
      };
    },
  },
  Series: {
    Search: (paramSearch) => {
      return async (dispatch) => {
        setLoading(Config.ApiRequest.actionsTypes.SEARCH_SERIES, dispatch);
        try {
          const seriesResponse = await axios
            .get(`${Config.ApiRequest.request.baseURL}/search/tv`, {
              params: {
                ...Config.ApiRequest.request.defaultParameters,
                query: paramSearch,
              },
            })
            .then((res) => res.data);
          setTimeout(() => {
            dispatch({
              type: Config.ApiRequest.actionsTypes.SEARCH_SERIES,
              payload: {
                response: seriesResponse,
                textSearch: paramSearch,
              },
            });
          }, TIMEOUT);
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
        }
      };
    },
    getSerie: (idSerie) => {
      return async (dispatch) => {
        setLoading(Config.ApiRequest.actionsTypes.GET_SERIE, dispatch);
        try {
          const movieResponse = await axios
            .get(`${Config.ApiRequest.request.baseURL}/tv/${idSerie}`, {
              params: {
                ...Config.ApiRequest.request.defaultParameters,
              },
            })
            .then((res) => res.data);
          setTimeout(() => {
            dispatch({
              type: Config.ApiRequest.actionsTypes.GET_SERIE,
              payload: {
                response: movieResponse,
              },
            });
          }, TIMEOUT);
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
        }
      };
    },
  },
};

const setLoading = (action, dispatch) => {
  dispatch({
    type: action,
    payload: {
      response: null,
      textSearch: "",
    },
  });
};

export default ApiRequest;
