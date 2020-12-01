import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import LoggedInPage from './Pages/LoggedInPage';
import Footer from './components/Footer';
import ProjectPage from './Pages/ProjectPage';
import Login from './component/login/login';
import Signup from './component/signup/signup';


ReactDOM.render(
  <div className="page-container" >
      <div className="content-wrap">
        <BrowserRouter>
          <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/LoggedIn" component={LoggedInPage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/ProjectPage" component={ProjectPage} />
          </BrowserRouter>
      </div>
    <Footer/>
  </div>,
  document.getElementById('root')
);