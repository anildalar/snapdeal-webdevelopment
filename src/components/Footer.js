//Import Area
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp, faArrowUp, faHeart } from '@fortawesome/free-solid-svg-icons'

/**
* @author
* @class Footer
**/

//Class/Function Area
class Footer extends Component {
    //1. Property
    state = {
        a_faArrowCircleUp_prpty:'d-none'
    }

    //2. Constructor


    //3. Method
    //Life Cycle Method
    componentDidMount(){
        window.addEventListener('scroll',this.scroll_cbfn); /** this.member */
    }
    scroll_cbfn = ()=>{
        console.log('Amount '+window.scrollY);
        if(window.scrollY > 5000 ){
            //d-block
            this.setState({ a_faArrowCircleUp_prpty:'d-block'});
        }else{
            //d-none
            this.setState({ a_faArrowCircleUp_prpty:'d-none'});
        }
    }

    render() {
        return (
            <>
                <footer>
                    <div className="container-fluid bg-white a_foot1">
                        <div className="row ps-5 pe-5 border-top border-bottom" style={{ 'height': 200 + 'px' }}>
                            <div className="col-3 p-0 border-start border-end ">
                                <a href="#" target="_blank" className="btn w-100 h-100 rounded-0">
                                    <div className="a_fspritebox mx-auto mt-3"></div>
                                    <h5 className="text-dark mt-3 mb-3">100% SECURE PAYMENTS</h5>
                                    <p>Moving your card details to a much more secured place</p>
                                </a>
                            </div>
                            <div className="col-3 p-0 border-start border-end">
                                <a href="#" target="_blank" className="btn w-100 h-100 rounded-0">
                                    <div className="a_fspritebox a_trustpay mx-auto mt-3"></div>
                                    <h5 className="text-dark mt-3 mb-3">TrustPay</h5>
                                    <p>100% Payment Protection. Easy Return Policy </p>
                                </a>
                            </div>
                            <div className="col-3 p-0 border-start border-end">
                                <a href="#" target="_blank" className="btn w-100 h-100 rounded-0">
                                    <div className="a_fspritebox a_helpCenter mx-auto mt-3"></div>
                                    <h5 className="text-dark mt-3 mb-3">Help Center</h5>
                                    <p>Got a question? Look no further.Browse our FAQs or submit your query here.</p>
                                </a>
                            </div>
                            <div className="col-3 p-0 border-start border-end">
                                <a href="#" target="_blank"  className="btn w-100 h-100 rounded-0">
                                    <div className="a_fspritebox a_shopOnGo  mx-auto mt-3"></div>
                                    <h5 className="text-dark mt-3 mb-3">Shop on the Go</h5>
                                    <p>Download the app and get exciting app only offers at your fingertips</p>
                                </a>
                            </div>
                        </div>
                        <div className="container a_foot1_cont2">
                            <div className="row" style={{ height: '230px' }}>
                                <div className="col-2 tbdr pt-5">
                                    <h6 className="text-dark">POLICY INFO</h6>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Privacy Policy</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Terms of Sale</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Terms of Use</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Report Abuse &amp; Takedown Policy</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-2 tbdr pt-5">
                                    <h6 className="text-dark">POLICY INFO</h6>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Privacy Policy</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Terms of Sale</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Terms of Use</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Report Abuse &amp; Takedown Policy</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-2 tbdr pt-5">
                                    <h6 className="text-dark">POLICY INFO</h6>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Privacy Policy</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Terms of Sale</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Terms of Use</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Report Abuse &amp; Takedown Policy</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-2 tbdr pt-5">
                                    <h6 className="text-dark">POLICY INFO</h6>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Privacy Policy</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Terms of Sale</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Terms of Use</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Report Abuse &amp; Takedown Policy</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-4 tbdr pt-5">
                                    <h6 className="text-dark">POLICY INFO</h6>
                                    <form>
                                        <div className="row g-3">
                                            <div className="col p-0">
                                                <input type="text" className="form-control rounded-0" placeholder="Your email address" aria-label="First name" />
                                            </div>
                                            <div className="col p-0">
                                                <input type="button" className="btn btn-dark rounded-0" value="SUBSCRIBE" />
                                            </div>
                                        </div>
                                    </form>
                                    <p>Register now to get updates on promotions andcoupons. <a href="#" className="btn btn-link btn-sm">Or Download App</a></p>
                                </div>
                            </div>
                            <div className="row" style={{ height: '120px' }}>
                                <div className="col-6 tbdr">
                                    <p className="mb-2">PAYMENT</p>
                                    <ul className="nav footer_socialicon">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 tbdr">
                                    <p className="mb-2">CONNECT</p>
                                    <ul className="nav footer_socialicon">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container a_foot2 pt-4">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Mobile Accessories: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Mobile Accessories: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Mobile Accessories: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Mobile Accessories: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Mobile Accessories: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Mobile Accessories: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Mobile Accessories: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Mobile Accessories: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Mobile Accessories: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Mobile Accessories: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                            </ol>
                        </nav>
                        <h4 className="text-dark">ABOUT SNAPDEAL</h4>
                        <p>About Snapdeal – India’s Ultimate Online Shopping Site Snapdeal’s vision is to create India’s most reliable and frictionless commerce ecosystem that creates life-changing experiences for buyers and sellers. In February 2010, Kunal Bahl along with Rohit Bansal, started Snapdeal.com - India’s largest online shopping marketplace, with the widest assortment of 35 million plus products across 800 plus diverse categories from over 125,000 regional, national, and international brands and retailers. With millions of users and more than 300,000 sellers, Snapdeal is the online shopping site for Internet users across the country, delivering to 6000+ cities and towns in India. In its journey till now, Snapdeal has partnered with several global marquee investors and individuals such as SoftBank, BlackRock, Temasek, Foxconn, Alibaba, eBay Inc., Premji Invest, Intel Capital, Bessemer Venture Partners, Mr. Ratan Tata, among others. Online Shopping – A Boon The trend of online shopping is becoming a household name and so is Snapdeal. Snapdeal is the preferred choice of hundreds of thousands of online shoppers given its mammoth assortment of 15 million+ products, quick delivery even to the remotest corners of the country, and daily deals, discounts & offers to make products available at slashed down prices to our valuable customers. Get Started! Shop Online Today at Snapdeal If you have been missing out on all the fun of online shopping thinking it requires one to be a technology aficionado then we have good news for you. Shopping online particularly at Snapdeal is a child’s play; all you need is a mobile phone or laptop or tablet with Internet connection to get started. Simply log into Snapdeal.com and browse through the wide assortment of products across categories. Once you have zeroed in on your favorite products, simply place the order by filling in the details; the products will be delivered right at your doorstep. Fulfill Your Entrepreneurial Dreams! Sell Today at Snapdeal Thanks to easy-to-understand, flexible policies and SD Advisors to help sellers at each step, anyone from a manufacturer to wholesaler to retailer can sell on Snapdeal. Begin your entrepreneurial journey with Snapdeal as a seller by filling a simple registration form here. Once the registration process is done, you can start selling your products to the entire country by sitting at your home or office. Doesn't it sound thrilling? Of course, it is and the excitement will build up with every order you receive! Start selling at Snapdeal today and see your business reach staggering heights. Shop on the Go – Install Snapdeal App Today! You can shop for your favourite products at Snapdeal even on the go using Snapdeal App. Available for both Android and Apple users, the app can be downloaded from Google Play Store and Apple App Store respectively. The app is quick, user-friendly, and enables shoppers buy products with a breeze. What's more, get timely notifications on your phone or tablet so that you don't miss amazing deals and offers. Download the app right now and experience how fun it is to shop on your mobile!</p>
                    </div>
                    <div className="container-fluid bg-white p-0 a_foot3">
                        <div className="row m-0 h-100">
                            <div className="col-10 p-0 pt-2 tbdr">
                                <span>Copyright © 2020, Snapdeal Private Limited (formerly Jasper Infotech Private Limited). All Rights Reserved</span>
                            </div>
                            <div className="col-2 p-0 pt-2  text-end tbdr ">Made with <FontAwesomeIcon className="text-danger a_heart" icon={faHeart} /> in india</div>
                        </div>
                    </div>
                </footer>
                <a href="#" className={'btn btn-dark a_faArrowCircleUp position-fixed '+this.state.a_faArrowCircleUp_prpty}>
                    <FontAwesomeIcon className="a_arrowUp" icon={faArrowUp} />
                </a>
                
            </>
        )
    }
}


Footer.propTypes = {}
export default Footer