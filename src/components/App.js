import React from 'react';
import '../style/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './landing/Landing';
import CardCreator from './card-creator/CardCreator';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/card-creator" component={CardCreator} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
