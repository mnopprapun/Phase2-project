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
        <nav>
          <ul>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/saved-cards">Saved</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

     
      </div>





      <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarLeftAlignExample'
          aria-controls='navbarLeftAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavLeft(!showNavLeft)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavLeft}>
          <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink  active aria-current='page' href='#' to="/" >
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#' to="/saved-cards">Saved</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>




   {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/saved-cards">
            <CardContainer />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
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
