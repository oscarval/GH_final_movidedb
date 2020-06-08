import React, { useEffect } from "react";
import { connect } from "react-redux";
import ApiRequest from "../../services/moviedb/Api-request";
import "./Popularity.scss";
import Config from "../../services/config/config";
// Bootstrap
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import defaultImage from "../../assets/img/default.jpg";

/**
 * Popularity
 * Show 10 most popularity
 * @param {*} props
 */
const Popularity = (props) => {
  const imageUrl = Config.ApiRequest.request.imageBaseUrl;
  const popularityList = props.state.Popularity
    ? props.state.Popularity.results.slice(0, 10)
    : [];

  useEffect(() => {
    props.getPopularity();
  }, []);

  return (
    <div className='Popularity'>
      <h1>10 most popularity</h1>
      <CardColumns>
        {popularityList.map((movie, index) => (
          <Card key={index}>
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
  );
};

const mapStateToProps = (state) => ({ state: state });
const mapDispacthToProps = (dispatch) => ({
  getPopularity: () => {
    ApiRequest.Movies.getPopularity()(dispatch);
  },
});

const connectedPopularity = connect(
  mapStateToProps,
  mapDispacthToProps
)(Popularity);

export default connectedPopularity;
