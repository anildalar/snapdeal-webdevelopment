import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faShoppingCart, faUser, faSearch, faChartLine,faShieldAlt } from '@fortawesome/free-solid-svg-icons'

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
    x: ''
  }
  //2. Constructor

  //3. Method
  handleScroll = () => {
    console.log('ok ' + window.scrollY);
    if (window.scrollY >= 50) {
      //Add
      //position-fixed top-0 start-0 
      this.setState({ x: 'position-fixed top-0 start-0' });
    } else {
      //Remove
      this.setState({ x: '' });
    }
  }
  componentDidMount() {
    //THis method method will be called when page/component is loaded
    //object.method();
    window.addEventListener('scroll', this.handleScroll);
  }
  render() {
    return (
      <div>
        <div className="modal cartModel" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl" style={{ 'top':76+'px' }}>
            <div className="modal-content">
              <div className="text-center position-relative">
                <h5 className="modal-title p-3 mt-3 text-secondary" id="exampleModalLabel">Shopping Cart is empty!</h5>
                <h5 className="modal-title p-3 text-secondary" id="exampleModalLabel22">BROWSE CATEGORIES</h5>
                <button type="button" className="btn-close position-absolute" style={{'right':30+'px','top':30+'px'}} data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <ul class="list-unstyled">
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                  <li><a href="#">Appliances</a></li>
                </ul>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button type="button" className="btn btn-danger btn-lg ps-5 pe-5">Start Shopping Now</button>
                
              </div>
              <p className="text-center">
                  <span className="me-3"><FontAwesomeIcon icon={faShieldAlt}  /> Safe and Secure Payments </span>
                  <span><FontAwesomeIcon icon={faShieldAlt}  /> 100% Payment Protection, Easy Returns Policy</span>
                </p>
            </div>
          </div>
        </div>
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
          <div className={'a_header_bottom w-100 ' + this.state.x}>
            <div className="container">
              <div className="row">
                <div className="col-2">
                  <a href="#" className="btn mt-3 p-0 ">
                    <img src="./logo.png" />
                  </a>
                </div>
                <div className="col-7">
                  <form className="mt-3 a_hform">
                    <div className="row m-0">
                      <div className="col-md-10 p-0 position-relative">
                        <input placeholder="Search products &amp; brands" className="ps-5 h-100 rounded-0 form-control" />
                        <div className="bg-white inputBox w-100 position-absolute">
                          <h6 className="ps-3 mt-3"><FontAwesomeIcon icon={faChartLine} /> Trending Searches</h6>
                          <ul className="list-unstyled">
                            <li className="nav-item">
                              <a className="nav-link" href="#">Shoes For Girls</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Baby Girls Froks</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Boy Shoes</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Saree below 1000</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Plazzo pant</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Silk Saree</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">One Piece Dress</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">Full TShirt Men</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-2 p-0">
                        <div class="d-grid">
                          <button class="btn btn-dark rounded-0" type="submit"><FontAwesomeIcon icon={faSearch} /> Search</button>
                        </div>

                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-3">
                  <ul className="nav a_hbot_nav float-end">
                    <li className="nav-item border-start border-end">
                      <a href="#" className="nav-link text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">Cart <FontAwesomeIcon className="fs-5" icon={faShoppingCart} /></a>
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
