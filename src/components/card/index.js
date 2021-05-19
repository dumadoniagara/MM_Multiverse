import React, { Component } from 'react';

export class CardProduct extends Component {
   constructor(props) {
      super(props);
      this.state = {

      }
   }

   componentDidMount(){

   }

   render(){
      return(
        <div className="card" style={{width: '18rem', margin: '20px 15px'}}>
            <img src={this.props.image} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">FRIENDS - Chandler - Sarcastic Comment</h5>
                <h6 class="card-title" style={{fontSize: 15}}>Rp 80.000 - Rp 85.000</h6>
            </div>
        </div>
      )
   }

}

export default CardProduct;