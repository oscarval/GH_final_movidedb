import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ApiRequest from "../../services/moviedb/Api-request";
import "./Billboard.scss";
import Config from "../../services/config/config";
// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import defaultImage from "../../assets/img/default.jpg";
import StarRatings from "react-star-ratings";

/**
 * Billaboard
 * Show billaboard and most popularity
 * @param {*} props
 */
const Billboard = (props) => {
  const imageUrl = Config.ApiRequest.request.imageBaseUrl;
  const billboardList = props.state.Billaboard
    ? props.state.Billaboard.results.slice(0, 12)
    : [];

  useEffect(() => {
    props.getBillboard();
  }, []);

  return (
    <div className='Billaboard'>
      <h1>Billboard</h1>
      <Container fluid>
        <Row>
          {billboardList.map((movie, index) => (
            <Col xs={12} sm={6} md={4} lg={3} className='billboard-col'>
              <Link to='/about'>
                <div className='billboard-title'>{movie.title}</div>
                <Image
                  src={
                    movie.backdrop_path
                      ? `${imageUrl}/${movie.backdrop_path}`
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
  getBillboard: () => {
    ApiRequest.Movies.getBillboard()(dispatch);
  },
});

const connectedBillboard = connect(
  mapStateToProps,
  mapDispacthToProps
)(Billboard);

export default connectedBillboard;
