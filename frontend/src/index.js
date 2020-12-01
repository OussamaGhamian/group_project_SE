import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import LoggedInPage from './Pages/LoggedInPage';
import Footer from './components/Footer';
import ProjectPage from './Pages/ProjectPage';
import LogInPage from './Pages/LogInPage';
import SignUpPage from './Pages/SignUpPage';
import contactus from './Pages/ContactUsPage';


ReactDOM.render(
  <div className="page-container" >
    <div className="content-wrap">
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LogInPage} />
        <Route exact path="/LoggedIn" component={LoggedInPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/ProjectPage" component={ProjectPage} />
        <Route exact path="/contactus" component={contactus} />

      </BrowserRouter>
    </div>
    <Footer />
  </div>,
  document.getElementById('root')
);