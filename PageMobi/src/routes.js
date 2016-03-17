import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import FuelSavingsPage from './containers/FuelSavingsPage';
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';
import HomePage from './containers/HomePage.js';
import HotelPage from './containers/HotelPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="hotels" component={HotelPage}>
      <IndexRoute component={HotelPage.List} />
      <Route path=":id" component={HotelPage.Detail}/>
    </Route>
    <Route path="flights" component={NotFoundPage} />
  </Route>
);
