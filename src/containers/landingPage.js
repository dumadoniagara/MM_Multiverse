import React, { Component } from 'react';
import { Redirect, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Toolbar from '../components/navigation/toolbar/toolbar'

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
            Landing Page
         </div>
      )
   }

}

export default LandingPage;