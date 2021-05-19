import React, { Component } from 'react';
import { Redirect, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import mmLogo from '../../../assets/images/mm-logo.jpg';
import { ShoppingCartOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons'; 
import {Input} from 'antd';
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
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
         <img src={mmLogo} style={{width: 45, borderRadius:20}}/>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:100}}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
               <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item dropdown">
               <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
               </a>
               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">T-Shirt</a></li>
                  <li><a className="dropdown-item" href="#">Hoodie</a></li>
                  <li><a className="dropdown-item" href="#">Jacket</a></li>
               </ul>
            </li>
            <li className="nav-item">
               <a className="nav-link active" aria-current="page" href="#">Payment Confirmation</a>
            </li>
            <li className="nav-item sale">
               <a className="nav-link active" aria-current="page" href="#">Sale!</a>
            </li>
            </ul>
            <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search products..." aria-label="Search"/>
            <button className="btn" type="submit" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
               <SearchOutlined />
            </button>
            <button className="btn" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
               <ShoppingCartOutlined style={{fontSize: 20}}/>
            </button>
            <button className="btn" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
               <UserOutlined style={{fontSize: 20}}/>
            </button>
            </form>
         </div>
      </div>
   </nav>
      )
   }

}

export default Toolbar;