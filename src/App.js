import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Home from './pages/home'
import Detail from './pages/detail'
import './css/index.css';

export default function App() {
  return (
    <Switch>
      <Route
        path="/"
        exact
        component={Home} />
      <Route path="/:name" component={Detail} />
    </Switch>
  );
}
