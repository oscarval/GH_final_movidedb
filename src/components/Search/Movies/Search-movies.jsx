import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import ApiRequest from "../../../services/moviedb/Api-request";
import "./Search-movies.scss";
import Config from "../../../services/config/config";
// Bootstrap
import Form from "react-bootstrap/Form";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import defaultImage from "../../../assets/img/default.jpg";

/**
 * SearchMovies Component
 * Form to search movie by title, original title, overview
 * @param {*} props
 */
const SearchMovies = (props) => {
  // input search
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const [values, setValues] = useState({
    textSearch: props.state.textSearch ? props.state.textSearch : "",
  });

  const imageUrl = Config.ApiRequest.request.imageBaseUrl;

  const searchMovie = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if(values.textSearch.length > 3){
    props.searchMovie(values.textSearch);
    }
  };

  return (
    <div className='SearchMovies'>
      <h1>Search movies</h1>
      <div className='search-form'>
        <Form validated={false} onSubmit={searchMovie}>
          <Form.Group controlId='searchMovie'>
            <Form.Control
              type='search'
              name='textSearch'
              value={values.textSearch}
              onChange={handleChange}
              placeholder='Search a movie'
            />
            <Form.Text className='text-muted'>
              Type min 4 characters to search a movie
            </Form.Text>
          </Form.Group>
        </Form>
      </div>
      <div className='search-result'>
        <CardColumns>
          {props.state.Movies &&
            props.state.Movies.results.map((movie, index) => (
              <Card key={index} className='Movie-card'>
                <Card.Img
                  variant='top'
                  src={
                    movie.backdrop_path
                      ? `${imageUrl}/${movie.backdrop_path}`
                      : defaultImage
                  }
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.overview.slice(0, 150)}...</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant='primary' block>
                    Show more info
                  </Button>
                </Card.Footer>
              </Card>
            ))}
        </CardColumns>
      </div>
    </div>
  );
};

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
