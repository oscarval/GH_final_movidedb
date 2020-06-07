import React from "react";
import { connect } from "react-redux";
import ApiRequest from "./services/moviedb/Api-request";
import "./App.scss";

function App(props) {
  const searchMovie = () => {
    props.searchMovie("batman");
  };

  return (
    <div className='App'>
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

const connectedApp = connect(mapStateToProps, mapDispacthToProps)(App);

export default connectedApp;
