import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import LoggedInPage from './Pages/LoggedInPage';

ReactDOM.render(

  <BrowserRouter>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/LoggedIn" component={LoggedInPage} />
  </BrowserRouter>,
  document.getElementById('root')
);