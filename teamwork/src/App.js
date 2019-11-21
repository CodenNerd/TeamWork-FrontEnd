import React from 'react';
import './App.css';
import Index from './components/pages/index';
import { Switch, Route } from 'react-router-dom';
import SignIn from './components/pages/signIn';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/signin" component={SignIn} />
      
    </Switch>
  );
}

export default App;
