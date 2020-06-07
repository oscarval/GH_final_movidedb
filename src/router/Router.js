import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
// Components
import Home from "../components/Home/Home";
import Header from "../components/Header/Header";
import SearchMovies from "../components/Search/Movies/Search-movies";
import SearchSeries from "../components/Search/Series/Search-series";

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/movies' component={SearchMovies} exact />
          <Route path='/series' component={SearchSeries} exact />
          {/* TODO: Path to Error 404 */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
