import React, { useState } from "react";
import { connect } from "react-redux";
import ApiRequest from "../../../services/moviedb/Api-request";
import "./Search-series.scss";
import Config from "../../../services/config/config";
// Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Media from "react-bootstrap/Media";
import Badge from "react-bootstrap/Badge";
import defaultImage from "../../../assets/img/default_poster.jpg";

/**
 * SearchSerires Component
 * Form to search series by title, original title
 * @param {*} props
 */
const SearchSeries = (props) => {
  // input search
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const [values, setValues] = useState({
    textSearch: props.state.textSearchSerie ? props.state.textSearchSerie : "",
  });

  const imageUrl = Config.ApiRequest.request.imageBaseUrl;

  const searchSerie = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (values.textSearch.length > 3) {
      props.searchSerie(values.textSearch);
    }
  };

  return (
    <div className='SearchSeries'>
      <h1>Search series</h1>
      <div className='search-form'>
        <Form validated={false} onSubmit={searchSerie}>
          <Form.Group controlId='searchSerie'>
            <Form.Control
              type='search'
              name='textSearch'
              value={values.textSearch}
              onChange={handleChange}
              placeholder='Search a serie'
            />
            <Form.Text className='text-muted'>
              Type min 4 characters to search a serie
            </Form.Text>
          </Form.Group>
        </Form>
      </div>
      <div className='search-result'>
        <ul className='list-unstyled'>
          {props.state.Series &&
            props.state.Series.results.map((serie, index) => {
              if (serie.overview && serie.overview.length > 0) {
                return (
                  <Media key={index} as='li' className='serie-li'>
                    <img
                      width={200}
                      height={250}
                      className='mr-3'
                      src={
                        serie.poster_path
                          ? `${imageUrl}/${serie.poster_path}`
                          : defaultImage
                      }
                      alt={serie.title}
                    />
                    <Media.Body>
                      <h5>{serie.original_name}</h5>
                      <p>{serie.overview.slice(0, 350)}...</p>
                      <div className='serie-badges'>
                        <Badge variant='secondary'>
                          Vote: {serie.vote_average}
                        </Badge>
                        <Badge variant='warning'>
                          Populatity:
                          {parseFloat(serie.popularity / 10).toFixed(2)}
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
  searchSerie: (stringSearch) => {
    ApiRequest.Series.Search(stringSearch)(dispatch);
  },
});

const connectedSearchSeries = connect(
  mapStateToProps,
  mapDispacthToProps
)(SearchSeries);

export default connectedSearchSeries;
