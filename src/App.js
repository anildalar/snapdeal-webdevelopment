import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

/**
* @author
* @function App
**/

import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class App
**/
//We have to create a class component

class App extends Component {
  //1. Properties
  state = {
    x:''
  }
  //2. Constructor

  //3. Method
  handleScroll = ()=>{
    console.log('ok '+window.scrollY);
      if(window.scrollY >= 50 ){
        //Add
        //position-fixed top-0 start-0 
        this.setState({x:'position-fixed top-0 start-0'});
      }else{
        //Remove
        this.setState({x:''});
      }
  }
  componentDidMount(){
    //THis method method will be called when page/component is loaded
    //object.method();
    window.addEventListener('scroll',this.handleScroll);
  }
  render() {
    return (
      <div>
        <header>
          <div className="a_header_top">
            <div className="container p-0">
              <span className="text-white">India's Fastest Online Shopping Destination</span>
              <ul className="nav float-end">
                <li className="nav-item">
                  <a className="nav-link p-1 ps-3 active text-white" aria-current="page" href="#">Gift Cards</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-1 ps-3 text-white" href="#">Help Center</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-1 ps-3 text-white" href="#">Sell On Snapdeal</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-1 ps-3 text-white" href="#" ><FontAwesomeIcon icon={faMobileAlt} /> Download App</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={'a_header_bottom w-100 ' +this.state.x}>
            <div className="container">
              <div className="row">
                <div className="col-2">
                  <a href="#" className="btn mt-3 p-0 ">
                    <img src="./logo.png" />
                  </a>
                </div>
                <div className="col-7">
                  <form className="mt-3 a_hform bg-white">B</form>
                </div>
                <div className="col-3">
                  <ul className="nav a_hbot_nav float-end">
                    <li className="nav-item border-start border-end">
                      <a className="nav-link text-white" aria-current="page" href="#">Cart <FontAwesomeIcon className="fs-5" icon={faShoppingCart} /></a>
                    </li>
                    <li className="nav-item">
                      <a className="pt-3 pb-3 text-white a_bl rounded-top" href="#">Sign in
                        <span className="fauserbox"><FontAwesomeIcon className="fs-5" icon={faUser} /></span>
                      </a>
                      <ul className="nav rounded-bottom">
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="a_main pb-5">
          <div className="container p-0 a_main1 mt-3">
            <div className="row m-0 a_main1_b1 ">
              <div className="col-2 ">A</div>
              <div className="col-10">
                <div className="a_slider row">
                  <div className="col-10">
                    <div id="carouselExampleIndicators" className="carousel slide h-100" data-bs-ride="carousel">
                      <div className="bg-white carousel-indicators m-0 justify-content-center">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active m-0" aria-current="true" aria-label="Slide 1">Boy's Tees</button>
                        <button className="m-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">Women's Tees</button>
                        <button className="m-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">Polo T-Shirts</button>
                        <button className="m-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3">Sports Wear</button>
                        <button className="m-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3">Men's Sports Wear</button>
                      </div>
                      <div className="carousel-inner h-100 bg-danger">
                        <div className="carousel-item active">
                          <img src="./images/slider/1.jpg" className="h-100 w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src="./images/slider/2.jpg" className="h-100 w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src="./images/slider/3.jpg" className="h-100 w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src="./images/slider/4.jpg" className="h-100 w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src="./images/slider/5.jpg" className="h-100 w-100" alt="..." />
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
                  </div>
                  <div className="col-2">

                  </div>
                </div>
                <div className="a_trending_products"></div>
              </div>
            </div>
          </div>
          <div className="container-fluid a_main2"></div>
        </div>
        <footer>
          <div className="container a_foot1"></div>
          <div className="container a_foot2"></div>
          <div className="container a_foot3"></div>
        </footer>
      </div>
    )
  }
}


App.propTypes = {}
export default App
