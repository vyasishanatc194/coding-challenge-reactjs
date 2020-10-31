import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './Pages/Main/Main';

import './App.css';

class App extends React.Component {
  render(){
    return (
      <Router>
          <Switch>
            <Route path="/" component={MainPage} />
          </Switch>
      </Router>
    );
  }
  
}

export default App;
