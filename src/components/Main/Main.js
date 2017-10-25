import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home.js';
import About from '../About/About.js';
import Photography from '../Photography/Photography.js'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/photos' component={Photography} />
    </Switch>
  </main>
)

export default Main;
