import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './Components/Navibar';
import Footer from './Components/Footer';

import {Home} from './Home';
import {Works} from './Works';
import {Contacts} from './Contacts';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navibar/>
        <Switch>
          <Route exact path="/portfolio-frontend" component={Home}/>
          <Route path="/portfolio-frontend/works" component={Works}/>
          <Route path="/portfolio-frontend/сontacts" component={Contacts}/>
        </Switch>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
