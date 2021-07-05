import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

/**
* @author
* @class Home
**/

class Home extends Component {
    state = {}
    render() {
        return (
            <Layout>
                <div className="a_main pb-5">
                    <div className="container p-0 a_main1 mt-3">
                        <div className="row m-0 a_main1_b1 ">
                            <div className={'bg-white col-2 pe-0 pt-3 pb-3 ' + this.state.y}>
                                <h6 className="fs-6 fw-light">TOP CATEGORIES</h6>
                                <ul className=" nav flex-column asidenav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><img className="me-1" width="25" src="https://n3.sdlcdn.com/imgs/d/h/3/Discount_Right_icon-f5105.png" />All Offers</a>
                                        <div className="position-absolute top-0 asidenav_righbox">
                                            <div className="row m-0 h-100">
                                                <div className="col-3 tbdr">
                                                    <ul className="nav flex-column">
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
                                                </div>
                                                <div className="col-3 tbdr">B</div>
                                                <div className="col-3 tbdr">C</div>
                                                <div className="col-3 tbdr">Banner</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><img className="me-1" width="25" src="https://n3.sdlcdn.com/imgs/d/h/3/Discount_Right_icon-f5105.png" />Modile &amp; Tables</a>
                                        <div className="position-absolute top-0 asidenav_righbox">B</div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><img className="me-1" width="25" src="https://n3.sdlcdn.com/imgs/d/h/3/Discount_Right_icon-f5105.png" />Electronics</a>
                                        <div className="position-absolute top-0 asidenav_righbox">C</div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><img className="me-1" width="25" src="https://n3.sdlcdn.com/imgs/d/h/3/Discount_Right_icon-f5105.png" />Computer &amp; Gaming</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><img className="me-1" width="25" src="https://n3.sdlcdn.com/imgs/d/h/3/Discount_Right_icon-f5105.png" />Home &amp; Kitchen</a>
                                    </li>
                                </ul>
                                <h6 className="fs-6">MORE CATEGORIES</h6>
                                <ul className=" nav flex-column asidenav asidenav2">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Men's Fasion</a>
                                        <div className="position-absolute top-0 asidenav_righbox">A</div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Men's Fasion</a>
                                        <div className="position-absolute top-0 asidenav_righbox">B</div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Men's Fasion</a>
                                        <div className="position-absolute top-0 asidenav_righbox">C</div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Men's Fasion</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Men's Fasion</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-10">
                                <div className="a_slider row">
                                    <div className="col-9 p-0">
                                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
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
                                    <div className="col-3 p-0 position-relative">
                                        <div className="a_sliderrbox a position-absolute top-0 end-0 pincodeBox bg-white border rounded" >
                                            <div className="text-center">
                                                <div className="a_pinimg a_pinimg2  mx-auto mt-2"></div>
                                            </div>
                                            <div className="p-2 text-center">
                                                <p className="text-center w-75 mx-auto">Login to your Snapdeal account</p>
                                                <button className="btn btn-sm btn-dark w-50 mb-3">LOG IN</button>
                                                <form>
                                                    <button className="p-0 btn btn-sm btn-link btn-sm w-50"> New user?Register</button>
                                                    <button className="btn btn-sm btn-secondary float-end" onClick={this.a_sliderrbox}>NEXT2</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className={'a_sliderrbox b position-absolute top-0 end-0 loginBox bg-white border rounded'}>
                                            <div className="text-center">
                                                <div className="a_pinimg mx-auto mt-2"></div>
                                                <span>Your Delivery Pincode</span>
                                            </div>
                                            <div className="p-2">
                                                <p className="text-center w-75 mx-auto">Enter your pincode to check availablity and fast delivery options</p>
                                                <form>
                                                    <input placeholder="Enter pincode" className="form-control form-control-sm rounded-1 mb-2" />
                                                    <button type="button" className="btn btn-dark btn-sm w-50">Submit</button>
                                                    <button className="btn btn-sm btn-secondary float-end" onClick={this.a_sliderrbox}>NEXT1</button>
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="a_trending_products"></div>
                                
                            </div>
                            
                        </div>
                       
                    </div>
                    <div className="text-center p-3">
                        <button className="btn btn-dark w-25">Load More</button>
                    </div>
                    
                    <div className="container-fluid a_main2">
                        <div className="row m-0 h-100 bg-white">
                            <div className="col-6 p-0 dld_banner"></div>
                            <div className="col-4 pt-5">
                                <h1 className="mt-5">Download Snapdeal App Now</h1>
                                <p className="text-secondary fs-4">Fast, Simple &amp; Delightful.All it takes is 30 seconds to Download.</p>
                                <button className="btn dwnlodBtn apple me-3" style={{width:'125px',height:'42px'}}>A</button>
                                <button className="btn dwnlodBtn google" style={{width:'125px',height:'42px'}}>B</button>
                            </div>
                            <div className="col-2 dld_banner_right">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}


Home.propTypes = {}
export default Home