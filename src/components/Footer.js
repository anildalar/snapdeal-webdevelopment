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
                                <li className=""><a href="#">Mobile: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">4G Mobiles</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Smartphones</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Samsung Mobiles</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Micromax Mobiles</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Lenavo Mobiles</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">iphones</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Vivo Mobiles</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Oppo Mobiles</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Intex Mobiles</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Asus Mobiles</a></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Mobile Accessories: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Mobile covers</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Leather Mobile Covers</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Printed Back Covers</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">10000mAh Power Banks</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Ambrane Power Banks</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Intex Power Banks</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">VR Headsets</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Smart Watches</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Smart Bands</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Fitness Bands</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Wall Chargers</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Feature Phones</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Bluetooth Devices</a></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">TV.Audio &amp; Video: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Televisions</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">LED TVs</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Smart Televisions</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Ultra HD TV</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">FHD TV</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">3D TV</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">HD Ready TV</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Speakers</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Headphones</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Earphones</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Samsung Televisions</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Micromax Televisions</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">LG Televisions</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Home Threater Systems</a></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Memory Cards: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">8GB Memory Cards</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">16GB Memory Cards</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">32GB Memory Cards</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">64GB Memory Cards</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Sandisk Memory Cards</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Samsung Memory Cards</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Strontium Memory Cards</a></li>
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
                                <li className=""><a href="#">Computers: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Lenavo Laptops</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Acer Laptops</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Apple Macbooks</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Notebook Laptops</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">External Hard Disk</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Dell Laptops</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">HP Laptops</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Pen Drives</a></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Camera: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">DSLR cameras</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Canon cameras</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Nikon Coolpix</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Nikon DSLR Cameras</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Sony Cameras</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Digital Cameras</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Panasonic Cameras</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Samsung Cameras</a></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Watches: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Men Watches</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Women Watches</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Casio Watches</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Titan Watches</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Fastrack Watches</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Fossil Watches</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Casio Edifice</a></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Fashion Accessories: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Bags</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Wildcraft</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Skybags</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Fastrack Bags</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Shoes</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Floaters &amp; Sandles</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Kurta</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Raymond</a></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Men's Clothing: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Shirts</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Casual Shirts</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Formal Shirts</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Party Wear Shirts</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">T Shirts</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Polo T Shirts</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Low Rise Jeans</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Slim Jeans</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Reversible Jackets</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">V Neck T Shirts</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Henley T Shirts</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Printed T Shirts</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Round Neck T Shirts</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Chinos</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Hooded Sweatshirts</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Kurta Payjama Sets</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Dhoti Kurta Sets</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Cotton Shirts</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Full Sleeves Causual Shirts</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Full Sleeves Formal Shirts</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Regular Fit Formal Shirts</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Silk Party Shirts</a></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Women's Clothing: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Saree</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Designer Saree</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Cotton Saree</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Georgette Saree</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Chiffon Sarees</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Net Sarees</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Anarkali Suits</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Kurtis</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Leggings &amp; Churidars</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Embroidered Lehengas</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Bridal Lehengas</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Black Dresses</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Jegging</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Jeans</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">A Line Skirts</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Women's Gowns</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Women's Dresses</a></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                             <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Home &amp; Kitchens : </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Home Decor</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Paintings</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#"></a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Flasks &amp; Thermos</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Photo Frames</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Tupperware Kitchenware</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Hawkins Kitchenware</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Milton Kitchenware</a></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Books: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Fiction</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Non Fiction</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Children &amp; Young Adults</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Competitive Exams</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">School Books</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Academic Texts</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Reference</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Self Help</a></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">FMCG Offer-Top Brands: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Revlon</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Street Wear</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">St.lves</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Accu-Chek Health Monitoring Devices</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Nutraj - California Walnuts</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">JSB Massagers</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Park Avenue</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Gillette</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Airwick</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Veet</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Livon</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Mortein</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Wispher</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">KamaSutra</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Durex</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Bio Oil</a></li>
                            </ol> 
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Appliances: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Air Conditioners</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Air Coolers</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Refrigerators</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Fans</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Washing Machines</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Microwaves</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Irons</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Trimmers</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Hair Dryers</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Shavers</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Vacuum Cleaners</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Air Purifiers</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">CCTV Cameras</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Ceiling Fans</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Table Fans</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Exhaust Fans</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Pedestal Fans</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Ceiling Fans With 4 Blades</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Ceiling Fans With 6 Blades</a></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Home Furnishing: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Bed Linen</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Bed Sheets</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Bath Linen</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Mattresses</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Curtains</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Cushion Covers</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Pillows</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Carpets</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Kids Bedding</a></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Furniture Online: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Sofa Set</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Sofa Cum Beds</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Chairs</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Dining Sets</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Beans Bags</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Shoe Storage</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Dining Chairs</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Storage Cabinets</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Tables and Desks</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Bedroom Furniture</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Living Room Furniture</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">XXXL Bean Bags</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Chair Shape Bean Bags</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Lounger Shape Bean Bags</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Muddha Shape Bean Bags</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Black Color Bean Bags</a></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Toys &amp; Games: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Soft Toys</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Dolls</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Musical Toys</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Kids Skates</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Kids Skate Scooters</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Barbie Games</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Action Figures</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Electronic Toys</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Action Figures</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Toodler Toys</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Die Cast Vechile</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Ride Ons &amp; Scooters</a></li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                             <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Todays Deals: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Bestsellers</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Most Searched Products</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Home Utility Offers</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Laptop &amp; Accessories Offers</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Men's Fashion</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Women's Fashion</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Price Point Store</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#"></a>Laptop &amp; Accessories Offers</li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className=""><a href="#">Online Shopping: </a></li>
                                <li className="ms-2 breadcrumb-item"><a href="#">Everything below 299</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Mens Footwear</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Lehengas</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Dresses</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Mobile Phones</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Women's Watches</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Kurtis</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Smartphones</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Womens Footwear</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Sarees</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Casual Shoes</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Laptops</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Mens Watches</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Women Casual Shoes</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">4G Mobiles</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Frocks</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Women Suits</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Tops &amp; Tunics</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Gowns</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Watches</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Sports &amp; Bicycles</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Water Geysers</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Men's Sportswear</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Multi Speed Bi-cycles</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Mobile Batteries</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Kids T-Shirts</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Girls Frocks &amp; jumpsuits</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Kids Watches</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Stationery Supplies</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Baby Care Products</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="#">Copper Water Bottles</a></li>
                            </ol>
                        </nav>                       
                        <h4 className="text-dark mt-4">ABOUT SNAPDEAL</h4>
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