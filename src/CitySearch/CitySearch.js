

import React from 'react';
import LiveCard from "./LiveCard";

const CitySearch = (props) => {
 
	
let styling = {
	alignItems:'center'
}

	
	return (

		<div>
			<form onSubmit={props.searchHandle}>
                <label>City:
                <input type="text"  name="city" onChange={props.handleChange} placeholder="Enter a City" />
                </label>
                <input type="submit"  value="Go" />
            </form>
			<LiveCard weather={props.weather} 
			addCity={props.addCity}
			style={{styling}}/>
		</div>
	);
}


export default CitySearch;