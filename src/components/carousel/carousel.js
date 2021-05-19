import React, { Component } from 'react';
import { Redirect, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export class Carousel extends Component {
   constructor(props) {
      super(props);
      this.state = {

      }
   }

   componentDidMount(){

   }

   render(){
      return(
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{cursor:'pointer'}}>
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://cf.shopee.co.id/file/8059ccea76ec8403e202a5bc5e1eaf45_tn" className="d-block w-100" alt="..." 
                style={{width: 'auto',
                        minHeight: 450,
                        maxHeight: 500,
                        height: '100%',
                        background: '#000',
                        objectFit:'contain'
                        }}
                />
                <div class="carousel-caption d-none d-md-block" style={{color:'#7c7d7c'}}>
                    <h5>Riverdale - South Side Serpents</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="https://cf.shopee.co.id/file/a362df6a8832f6d8b05c690fd6ed51a8_tn" className="d-block w-100" alt="..." style= {{width: 'auto',
                        minHeight: 450,
                        maxHeight: 500,
                        height: '100%',
                        background: '#000',
                        objectFit:'contain'
                        }}/>
                        <div class="carousel-caption d-none d-md-block" style={{color:'#7c7d7c'}}>
                    <h5>The Big Bang Theory - Engineering Oompa Loompas of Science</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src=" https://cf.shopee.co.id/file/9af1c0de7611b53ac23584e5a32b7523_tn" className="d-block w-100" alt="..." 
                style= {{width: '100%',
                minHeight: 450,
                maxHeight: 500,
                height: '100%',
                background: '#000',
                objectFit:'contain'
                }}
                />
                <div class="carousel-caption d-none d-md-block" style={{color:'#7c7d7c'}}>
                    <h5>The Big Bang Theory -  The Flash</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
      </div>
      )
   }

}

export default Carousel;