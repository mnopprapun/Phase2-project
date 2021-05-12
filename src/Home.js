import React from 'react';
import { render } from 'react-dom';
import CardContainer from './CardContainer/CardContainer';
import CitySearch from './CitySearch/CitySearch';



const cityUrl = 'http://localhost:3000/cities'

class Home extends React.Component {



  render() {
    return (
      <div>
          <h1>Welcome Home:</h1>
          <CitySearch/>
      </div>
    );
  }
}
export default Home