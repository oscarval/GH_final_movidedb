import React, { useEffect } from "react";
import { connect } from "react-redux";
import ApiRequest from "../../services/moviedb/Api-request";
import "./Billboard.scss";
import Config from "../../services/config/config";
// Bootstrap
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import defaultImage from "../../assets/img/default.jpg";

/**
 * Billaboard
 * Show billaboard and most popularity
 * @param {*} props
 */
const Billboard = (props) => {
  const imageUrl = Config.ApiRequest.request.imageBaseUrl;
  const billboardList = props.state.Billaboard
    ? props.state.Billaboard.results.slice(0, 10)
    : [];

  useEffect(() => {
    props.getBillboard();
  }, []);

  return (
    <div className='Billaboard'>
      <h1>Billboard</h1>
      <CardColumns>
        {billboardList.map((movie, index) => (
          <Card key={index} className='Billaboard-card'>
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
  getBillboard: () => {
    ApiRequest.Movies.getBillboard()(dispatch);
  },
});

const connectedBillboard = connect(
  mapStateToProps,
  mapDispacthToProps
)(Billboard);

export default connectedBillboard;
