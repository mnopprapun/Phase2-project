import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';



class LiveCard extends Component {

	render() {
		return (
			<MDBCard style={{ maxWidth: '22rem' }}>
				<MDBCardBody>
					<MDBCardTitle>{this.props.weather.name}</MDBCardTitle>
					<MDBCardText>
						Current:{this.props.weather.main.temp}&deg;F
                    </MDBCardText>

                    <MDBCardText>
						Highs {this.props.weather.main.temp_max}&deg;F
                    </MDBCardText>

                    <MDBCardText>
						Lows {this.props.weather.main.temp_min}&deg;F
                    </MDBCardText>        				 
					<MDBBtn>Save</MDBBtn>
				</MDBCardBody>
			</MDBCard>
		);
	}
}


export default LiveCard;