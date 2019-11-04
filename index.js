import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Register from './register.js';
import Rice from './rice.js';
import Wheat from './wheat.js';
import Saunf from './saunf.js';
import Cowghee from './cowghee.js';
import Cauliflower from './cauliflower.js';
import Greenpeas from './greenpeas.js';
import Vis1 from './visualization1.js';
import Appr from './App.js';
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
import { Switch, Route } from "react-router-dom";


render(<React.Fragment>
  <Router>
    <Switch>
      <Route exact path="/" component={Register} />
      <Route exact path="/visualization1" component={Vis1} />
      <Route exact path="/rice" component={Rice} />
      <Route exact path="/wheat" component={Wheat} />
      <Route exact path="/saunf" component={Saunf} />
      <Route exact path="/cowghee" component={Cowghee} />
      <Route exact path="/cauliflower" component={Cauliflower} />
      <Route exact path="/greenpeas" component={Greenpeas} />
    </Switch>
  </Router>
</React.Fragment>, document.getElementById('root'));