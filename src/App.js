import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Main from './Main';
import Art from './details';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  
 

  return (
    <div>
      <Router>
      <Switch>
      <Route path="/main">
      <Main/> 
          </Route>
          <Route path="/details">
          <Art/>
          </Route>

</Switch>
</Router>

    </div>
  );
}

export default App;