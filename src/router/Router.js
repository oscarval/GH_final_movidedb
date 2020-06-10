import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
// Components
import Home from "../components/Home/Home";
import Header from "../components/Header/Header";
import SearchMovies from "../components/Search/Movies/Search-movies";
import SearchSeries from "../components/Search/Series/Search-series";
import Movie from "../components/Movie/Movie";
import Serie from "../components/Serie/Serie";

/**
 * Raoutes of App
 */
const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className='Main'>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/movies' component={SearchMovies} exact />
            <Route path='/movie/:idMovie' component={Movie} exact />
            <Route path='/series' component={SearchSeries} exact />
            <Route path='/serie/:idSerie' component={Serie} exact />
            <Route component={Home} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
