import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import "./Movie.scss";
import ApiRequest from "../../services/moviedb/Api-request";
import Config from "../../services/config/config";
import StarRatings from "react-star-ratings";
import Image from "react-bootstrap/Image";
import defaultImage from "../../assets/img/default.jpg";

const Movie = (props) => {
  const imageUrl = Config.ApiRequest.request.backgroundBaseUrl;
  const movie = props.state.Movie;
  const { idMovie } = useParams();

  useEffect(() => {
    props.getMovie(idMovie);
  }, []);

  return (
    <div className='Movie'>
      {movie && (
        <div className='movie-container'>
          <div
            className='movie-background'
            style={{
              backgroundImage: `url(${imageUrl}/${movie.backdrop_path})`,
            }}>
            <div className='movie-info'>
              <div className='movie-item'>
                <Image
                width={150}
                  src={
                    movie.poster_path
                      ? `${imageUrl}/${movie.backdrop_path}`
                      : defaultImage
                  }
                  thumbnail
                />
              </div>
              <div className='movie-item'>
                <div className='movie-label'>Title</div>
                <div className='movie-text'>{movie.title}</div>
              </div>
              <div className='movie-item'>
                <div className='movie-label'>Original title</div>
                <div className='movie-text'>{movie.original_title}</div>
              </div>
              <div className='movie-item'>
                <div className='movie-label'>Overview</div>
                <div className='movie-text'>{movie.overview.slice(0,500)}</div>
              </div>
              <div className='movie-item'>
                <div className='movie-label'>Release date</div>
                <div className='movie-text'>{movie.release_date}</div>
              </div>
              <div className='movie-item'>
                <div className='movie-label'>Votes</div>
                <div className='movie-text'>
                  <StarRatings
                    rating={movie.vote_average / 2}
                    starRatedColor='#E50E14'
                    starDimension='20px'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({ state: state });
const mapDispacthToProps = (dispatch) => ({
  getMovie: (idMovie) => {
    ApiRequest.Movies.getMovie(idMovie)(dispatch);
  },
});

const connectedMovie = connect(mapStateToProps, mapDispacthToProps)(Movie);

export default connectedMovie;
