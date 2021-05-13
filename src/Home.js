import React from 'react';
import { render } from 'react-dom';
import CardContainer from './CardContainer/CardContainer';
import CitySearch from './CitySearch/CitySearch';



const url = "http://localhost:3000/cities/"

class Home extends React.Component {

  state = {
    weather: {
      name: '',
      main: {
        temp: '',
        temp_max: '',
        temp_min: ''
      }
    },
    city: [],
    allCities: []
  }


  componentDidMount = () => {
    fetch(url)
      .then(res => res.json())
      .then(newCity => this.setState({ allCities: newCity }))
  }


  searchHandle = (event) => {
    event.preventDefault();
    let city = this.state.city
    const cityUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=51e464ca4cdfb256e268caccccef8edf`

    fetch(cityUrl)
      .then(response => response.json())
      .then(data => this.setState({ weather: data }))
  }


  handleChange = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  addCity = (city) => {
    let postOptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'

      },
      body: JSON.stringify(city)
    }
    fetch(url, postOptions)
      .then(res => res.json())
      .then(newCity => this.setState({ allCities: [...this.state.allCities, newCity] }))
    // console.log ('saved');
  }


  render() {
    return (
      <div>
        <h1>Welcome Home:</h1>
        <CitySearch searchHandle={this.searchHandle}
          handleChange={this.handleChange}
          weather={this.state.weather}
          addCity={this.addCity}
        />

      </div>
    );
  }
}
export default Home