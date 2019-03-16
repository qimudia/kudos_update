import React, { Component } from 'react';
import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Landing from './components/pages/Landing';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import Results from './components/pages/Results';
import Drug from './components/pages/Drug';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/results' component={Results} />
      <Route exact path='/drug' component={Drug} />
    </Switch>
  </BrowserRouter>
);

export default App;
