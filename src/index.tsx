import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/css/index.css';
import reportWebVitals from './reportWebVitals';
import { routes } from './router';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {
          routes.map((route)=> {
            return <Route exact={true} path={route.path} component={route.component} key={route.path}/>
          })
        }
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
