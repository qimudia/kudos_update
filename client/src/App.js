import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import giveKudos from './components/pages/giveKudos';
import homePage from './components/pages/homePage';
import result from './components/pages/result';

// import { Link } from 'react-router-dom'
import axios from 'axios';
import './App.css';
import './index.css';

const App = () => (
  <BrowserRouter>
    <div className="tiny">
      <header>
      <h1 className="Box">Tiny Improvement</h1>
        <nav className="Link">
          <Link to={`/`} >Home</Link> |
          <Link to={`/giveKudos`} >Give Kudos</Link> |
          <Link to={`/result`} >View Kudos</Link>
        </nav>
      </header>
      <Switch>
        <Route exact path='/' component={homePage} />
        <Route exact path='/giveKudos' component={giveKudos} />
        <Route exact path='/result' component={result} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App;
