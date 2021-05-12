import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';



class SavedCard extends Component {

  render() {
    return (
      <MDBCard style={{ maxWidth: '22rem' }}>
        <MDBCardBody>
          <MDBCardTitle>{this.props.country}</MDBCardTitle>
          <MDBCardText>
          Gasoline:{this.props.gasoline}
        </MDBCardText>

        <MDBCardText>
          Disel:{this.props.diesel}
        </MDBCardText>

        <MDBCardText>
          Currency:{this.props.currency}
        </MDBCardText>
          <MDBBtn>Delete</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    );
  }
}


export default SavedCard;