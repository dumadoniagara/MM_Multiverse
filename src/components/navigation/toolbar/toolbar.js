import React, { Component } from 'react';
import { Redirect, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import mmLogo from '../../../assets/images/mm-logo.jpg';
import './style.css';

export class Toolbar extends Component {
   constructor(props) {
      super(props);
      this.state = {

      }
   }

   componentDidMount(){

   }

   render(){
      return(
         <div className="toolbar">
            <div className="logo-wrapper">
               <img src={mmLogo} className="toolbar-logo"/>
            </div>
            <div className="toolbar-menu">
               <div className="toolbar-submenu">Home</div>
               <div className="toolbar-submenu">Category</div>
               <div className="toolbar-submenu">Multiverse Market</div>
               <div className="toolbar-submenu">Payment Confirmation</div>
            </div>
         </div>
      )
   }

}

export default Toolbar;