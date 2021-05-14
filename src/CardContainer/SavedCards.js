import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
// import picture from '../pictures/cloudy.png'
// import picture from 'http://openweathermap.org/img/wn/10d@2x.png'

// const picture=`http://openweathermap.org/img/wn/${icon}@2x.png`



class SavedCard extends Component {
   
  

  render() {
    return (
      
      <div className="d-inline-flex p-2">

      <MDBCard style={{ maxWidth: '22rem' }}>
        <MDBCardBody>
          <MDBCardTitle>{this.props.name}</MDBCardTitle>
         <img src= {'http://openweathermap.org/img/wn/'+this.props.icon+'@2x.png'}/>
        <MDBCardText>
        Current:{this.props.current}
        </MDBCardText>
        <MDBCardText>
        Highs:{this.props.highs}
        </MDBCardText>   
         <MDBCardText>
        Lows:{this.props.lows}
        </MDBCardText>

       
          <MDBBtn onClick={()=>{this.props.deleteHandle(this.props.card)}}>Delete</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </div>
    );
  }
}


export default SavedCard;