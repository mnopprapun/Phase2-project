import React from 'react';
import SavedCard from "./SavedCards";
import { render } from 'react-dom';

const cityUrl = 'http://localhost:3000/cities'


class CardContainer extends React.Component {
	state={
        allCards:[]
    }


  componentDidMount = () => {
    fetch(cityUrl)
      .then(res => res.json())
      .then(data => this.setState({allCards:data}))
  }

  	render(){

		  return (
			  <div>
			{this.state.allCards.map(card=> <SavedCard
			card={card}
			key={card.id}
			city={card.city}
			current={card.current}
			highs={card.highs}
			lows={card.lows}

			
			
			
			
			/>)}
		</div>
	);
}
}


export default CardContainer;