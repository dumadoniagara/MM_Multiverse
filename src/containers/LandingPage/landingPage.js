import React, { Component } from 'react';
import { Redirect, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Toolbar from '../../components/navigation/toolbar/toolbar'
import mmLogo from '../../assets/images/mm-logo.jpg';
import Carousel from '../../components/carousel/carousel';
import CardProduct from '../../components/card';

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
                <h3>Essential Favourites</h3>
               </div>
               <div className="container product-container" style={{display:'flex', textAlign:'center'}}>
                  <CardProduct image={`https://cf.shopee.co.id/file/f08c7c8bfeb485172d2f17d4ac1bd075_tn`}/>
                  <CardProduct image={`https://cf.shopee.co.id/file/f40d1ed91ff5334c9a43efab37a72b78_tn`}/>
                  <CardProduct image={`https://cf.shopee.co.id/file/a161e3b6fc9759790d674ed97298a54d_tn`}/>
                  <CardProduct image={`https://cf.shopee.co.id/file/f10c7f22bd92e0f1844163636fde29f8_tn`}/>
                  <CardProduct image={`https://cf.shopee.co.id/file/e15964ebf09184c52d3cfdcbd3f71083_tn`}/>
               </div>
               </div>
            </div>
            <div className="container-fluid">
               <div className="title" style={{textAlign:'center'}}>
                <h3 style={{marginBottom: 20}}>About Multiverse Market</h3>
                <p style={{fontSize: 18}}>Multiverse Market dropshipping from markets all over the multiverse.<br/>
                Satisfy your inner geek and travel through the multiverse with us!</p>
                <div className="button-wrapper" style={{display:'flex', justifyContent:'center', textAlign:'center'}}>
                  <div style={{fontSize: 18, fontWeight: 500, cursor:'pointer'}}>Learn More</div>
                </div>
               </div>
            </div>
            <div className="footer" style={{background: 'black', marginTop: 25, width: '100%', height: 250, color:'#fff'}}>
               <div className="footer-content-container" style={{display:'flex'}}>
                  <div className="left-section">
                  </div>
                  <div className="right-section">
                     
                  </div>
               </div>
            </div>
         </div>
      )
   }

}

export default LandingPage;