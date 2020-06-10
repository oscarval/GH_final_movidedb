import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import "./Serie.scss";
import ApiRequest from "../../services/moviedb/Api-request";
import Config from "../../services/config/config";
import StarRatings from "react-star-ratings";
import Button from "react-bootstrap/Button";
import loadingImage from "../../assets/img/loading.gif";

const Serie = (props) => {
  const imageUrl = Config.ApiRequest.request.backgroundBaseUrl;
  const serie = props.state.Serie;
  const { idSerie } = useParams();

  const backButton = () => {
    props.history.goBack();
  };

  useEffect(() => {
    props.getSerie(idSerie);
  }, []);

  return (
    <div className='Serie'>
      {!serie && (
        <div className='loading'>
          <div>
            <img src={loadingImage} alt='loading' />
          </div>
        </div>
      )}
      {serie && (
        <div className='serie-container animated fast fadeIn'>
          <div
            className='serie-background'
            style={{
              backgroundImage: `url(${imageUrl}/${serie.backdrop_path})`,
            }}>
            <div className='serie-info'>
              <div className='back-button'>
                <Button variant='danger' size='sm' onClick={backButton}>
                  {"< Back"}
                </Button>
              </div>
              <div className='serie-item'>
                <div className='serie-label'>Name</div>
                <div className='serie-text'>{serie.name}</div>
              </div>
              <div className='serie-item'>
                <div className='serie-label'>Original title</div>
                <div className='serie-text'>{serie.original_name}</div>
              </div>
              <div className='serie-item'>
                <div className='serie-label'>Overview</div>
                <div className='serie-text'>{serie.overview.slice(0, 500)}</div>
              </div>
              <div className='serie-item'>
                <div className='serie-label'>First air date</div>
                <div className='serie-text'>{serie.first_air_date}</div>
              </div>
              <div className='serie-item'>
                <div className='serie-label'>Votes</div>
                <div className='serie-text'>
                  <StarRatings
                    rating={serie.vote_average / 2}
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
  getSerie: (idSerie) => {
    ApiRequest.Series.getSerie(idSerie)(dispatch);
  },
});

const connectedSerie = connect(mapStateToProps, mapDispacthToProps)(Serie);

export default connectedSerie;
