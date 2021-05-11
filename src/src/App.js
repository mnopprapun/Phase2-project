import React from 'react';
import { render } from 'react-dom';
import CardContainer from './CardContainer/CardContainer';
import CitySearch from './CitySearch/CitySearch';



const cityUrl = 'http://localhost:3000/cities'

class App extends React.Component {


  componentDidMount = () => {
    fetch(cityUrl)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <div>
        <div>
          <CitySearch />
        </div>
        <div>
          <CardContainer />
        </div>
      </div>
    );
  }
}
export default App
