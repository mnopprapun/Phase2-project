import { render } from 'react-dom';
import CardContainer from './CardContainer/CardContainer';
import CitySearch from './CitySearch/CitySearch'
import Home from './Home'
// import React from "react";
import React, { useState } from 'react';

import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownLink
} from 'mdb-react-ui-kit';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const cityUrl = 'http://localhost:3000/cities'

export default function App() {

  const [showNavLeft, setShowNavLeft] = useState(false);




  return (
    




    <Router>
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <ul>
          <li>

              <Link  className="links" to="/">Home</Link>
            
          </li>
            
          <li> 
              <Link  className="links" to="/saved-cards">Saved</Link>
            </li>  
            
          <li>

              {/* <Link  className="links" to="/users">Users</Link> */}
          </li>
            
          </ul>






     


    </nav>
 
  </div>


   {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/saved-cards">
            <CardContainer />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>




    </Router>
  );

}





function Users() {
  return <h2>Users</h2>;
}
