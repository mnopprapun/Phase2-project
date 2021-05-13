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

    
    

    <App />

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
