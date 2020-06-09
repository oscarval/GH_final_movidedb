import React, { useState } from "react";
import { connect } from "react-redux";
import ApiRequest from "../../../services/moviedb/Api-request";
import "./Search-series.scss";
import Config from "../../../services/config/config";
// Bootstrap
import Form from "react-bootstrap/Form";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import defaultImage from "../../../assets/img/default.jpg";

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
        <CardColumns>
          {props.state.Series &&
            props.state.Series.results.map((serie, index) => (
              <Card key={index} className='Serie-card'>
                <Card.Img
                  variant='top'
                  src={
                    serie.backdrop_path
                      ? `${imageUrl}/${serie.backdrop_path}`
                      : defaultImage
                  }
                />
                <Card.Body>
                  <Card.Title>{serie.original_name}</Card.Title>
                  <Card.Text>{serie.overview.slice(0, 150)}...</Card.Text>
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
  searchSerie: (stringSearch) => {
    ApiRequest.Series.Search(stringSearch)(dispatch);
  },
});

const connectedSearchSeries = connect(
  mapStateToProps,
  mapDispacthToProps
)(SearchSeries);

export default connectedSearchSeries;
