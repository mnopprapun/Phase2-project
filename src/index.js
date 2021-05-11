import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './Routes/About'
import MyCities from './Routes/MyCities'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <nav>
        <Link to="/MyCity">My City</Link>
      </nav>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <Switch>
        <Route path="/">
        </Route>
        <Route path="/MyCity">
          <MyCities />
        </Route>
        <Route path="/about">
          <About />
        </Route >
      </Switch>

    </Router>

    <App />

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
