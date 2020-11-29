import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import LoggedInPage from './Pages/LoggedInPage';
import Footer from './components/Footer';

ReactDOM.render(
  <div className="page-container" >
      <div className="content-wrap">
        <BrowserRouter>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/LoggedIn" component={LoggedInPage} />
          </BrowserRouter>
      </div>
    <Footer/>
  </div>,
  document.getElementById('root')
);