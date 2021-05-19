import React, { Component } from 'react';
import { Redirect, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Toolbar from '../../components/navigation/toolbar/toolbar'
import mmLogo from '../../assets/images/mm-logo.jpg';
import Carousel from '../../components/carousel/carousel';

export class LandingPage extends Component {
   constructor(props) {
      super(props);
      this.state = {

      }
   }

   componentDidMount(){

   }

   render(){
      return(
         <div>
            <Toolbar />
            <Carousel />
            <div className="landing-page-content" style={{paddingTop: 105, paddingLeft: 30, paddingRight: 30, paddingBottom: 50}}>
            <div className="container-fluid">
              <div className="title" style={{textAlign:'center'}}>
                <h3>Essential Favorites</h3>
              </div>
            </div>
            </div>
         </div>
      )
   }

}

export default LandingPage;