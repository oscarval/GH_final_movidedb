import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ApiRequest from "../../services/moviedb/Api-request";
import "./Popularity.scss";
import Config from "../../services/config/config";
// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import defaultImage from "../../assets/img/default.jpg";
import StarRatings from "react-star-ratings";

/**
 * Popularity
 * Show 10 most popularity
 * @param {*} props
 */
const Popularity = (props) => {
  const imageUrl = Config.ApiRequest.request.imageBaseUrl;
  const popularityList = props.state.Popularity
    ? props.state.Popularity.results.slice(0, 12)
    : [];

  useEffect(() => {
    props.getPopularity();
  }, []);

  return (
    <div className='Popularity'>
      <h1>10 most popularity</h1>
      <Container fluid>
        <Row>
          {popularityList.map((movie, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={2}
              className='popularity-col'>
              <Link to='/about'>
                <div className='popularity-title'>{movie.title}</div>
                <Image
                  src={
                    movie.poster_path
                      ? `${imageUrl}/${movie.poster_path}`
                      : defaultImage
                  }
                  thumbnail
                />
              </Link>
              <div>
                <StarRatings
                  rating={movie.vote_average / 2}
                  starDimension='20px'
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
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
