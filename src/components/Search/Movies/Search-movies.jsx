import React, { useState } from "react";
import { connect } from "react-redux";
import ApiRequest from "../../../services/moviedb/Api-request";
import "./Search-movies.scss";
import Config from "../../../services/config/config";
// Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Media from "react-bootstrap/Media";
import Badge from "react-bootstrap/Badge";
import defaultImage from "../../../assets/img/default_poster.jpg";

/**
 * SearchMovies Component
 * Form to search movie by title, original title
 * @param {*} props
 */
const SearchMovies = (props) => {
  // input search
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const [values, setValues] = useState({
    textSearch: props.state.textSearchMovie ? props.state.textSearchMovie : "",
  });

  const imageUrl = Config.ApiRequest.request.imageBaseUrl;

  const searchMovie = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (values.textSearch.length > 3) {
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
              autoComplete='off'
            />
            <Form.Text className='text-muted'>
              Type min 4 characters to search a movie
            </Form.Text>
          </Form.Group>
        </Form>
      </div>
      <div className='search-result'>
        <ul className='list-unstyled'>
          {props.state.Movies &&
            props.state.Movies.results.map((movie, index) => {
              if (movie.overview && movie.overview.length > 0) {
                return (
                  <Media key={index} as='li' className='movie-li'>
                    <img
                      width={200}
                      height={250}
                      className='mr-3'
                      src={
                        movie.poster_path
                          ? `${imageUrl}/${movie.poster_path}`
                          : defaultImage
                      }
                      alt={movie.title}
                    />
                    <Media.Body>
                      <h5>{movie.original_title}</h5>
                      <p>{movie.overview.slice(0, 350)}...</p>
                      <div className='movie-badges'>
                        <Badge variant='secondary'>
                          Vote: {movie.vote_average}
                        </Badge>
                        <Badge variant='warning'>
                          Populatity:
                          {parseFloat(movie.popularity / 10).toFixed(2)}
                        </Badge>
                      </div>
                      <Button variant='outline-info' size='sm'>
                        Show more info
                      </Button>
                    </Media.Body>
                  </Media>
                );
              } else {
                return "";
              }
            })}
        </ul>
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
