import React from 'react';
import SavedCard from "./SavedCards";
import { render } from 'react-dom';

const url = 'http://localhost:3000/cities/'


class CardContainer extends React.Component {
	state={
        allCards:[]
    }


  componentDidMount = () => {
	fetch(url)
    .then(res=>res.json())
    .then(newCity=> this.setState({allCards:newCity}))

  }


  deleteHandle=(cards)=>{

	let newCardArr= this.state.allCards.filter( card=> card !=cards)

    this.setState({
      allCards:newCardArr
    })

    fetch(url+cards.id,{


      method: "DELETE",
      headers:{
        'Content-Type': 'application/json'
      
      }

    })
    .then(res=>res.json())
    .then((newCard)=>this.setState({allCards:newCardArr}))


  }

  	render(){

		  return (
			  <div>
			{this.state.allCards.map(card=> <SavedCard
			card={card}
			key={card.id}
			name={card.name}
			current={card.main.temp}
			highs={card.main.temp_max}
			lows={card.main.temp_min}
			deleteHandle={this.deleteHandle}

			
			
			
			
			/>)}
		</div>
	);
}
}


export default CardContainer;