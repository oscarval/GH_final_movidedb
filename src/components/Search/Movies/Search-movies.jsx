import React from "react";
import { connect } from "react-redux";
import ApiRequest from "../../../services/moviedb/Api-request";
import "./Search-movies.scss";

function SearchMovies(props) {
  const searchMovie = () => {
    props.searchMovie("batman");
  };

  return (
    <div className='SearchMovies'>
      <button onClick={searchMovie}>click me</button>
    </div>
  );
}

const mapStateToProps = (state) => ({ state: state });

const mapDispacthToProps = (dispatch) => ({
  searchMovie: (stringSearch) => {
    ApiRequest.Movies.Search(stringSearch)(dispatch);
  },
});

const connectedSearchMovies = connect(
  mapStateToProps,
  mapDispacthToProps
)(SearchMovies);

export default connectedSearchMovies;
