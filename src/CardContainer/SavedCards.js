import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';



class SavedCard extends Component {

  render() {
    return (
      <MDBCard style={{ maxWidth: '22rem' }}>
        <MDBCardBody>
          <MDBCardTitle>{this.props.city}</MDBCardTitle>
         
        <MDBCardText>
          Current:{this.props.current}
        </MDBCardText>
        <MDBCardText>
          Highs:{this.props.highs}
        </MDBCardText>   
         <MDBCardText>
          Lows:{this.props.lows}
        </MDBCardText>

       
          <MDBBtn>Delete</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    );
  }
}


export default SavedCard;