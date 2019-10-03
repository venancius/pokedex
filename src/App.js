import React from 'react';
import { Switch,  BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home'
import Detail from './pages/detail'
import NavBar from './components/navbar'
import './css/index.css';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route
          path="/"
          exact
          component={Home} />
        <Route path="/:name" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}
