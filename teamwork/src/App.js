import React from 'react';
import './App.css';
import Index from './components/pages/index';
import { Switch, Route } from 'react-router-dom';
import SignIn from './components/pages/signIn';
// import PageNotFound from './components/pages/PageNotFound'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/signin" component={SignIn} />
      {/* <Route component={PageNotFound} /> */}
      
    </Switch>
  );
}

export default App;
