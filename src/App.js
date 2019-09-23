import React from 'react';
import {Route,Switch} from 'react-router-dom';
import main from './components/main';
import './App.css';
import quiz from './containers/quiz';
import results from './containers/results';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/start-quiz" component={quiz}/>
        <Route path="/results" component={results}/>
        <Route path="/" component={main}/>
      </Switch>
    </div>
  );
}

export default App;

