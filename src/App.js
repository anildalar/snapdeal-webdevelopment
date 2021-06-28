import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faShoppingCart, faUser, faSearch, faChartLine, faShieldAlt, faBars, faHeart } from '@fortawesome/free-solid-svg-icons'

import { BrowserRouter as Router,Route  } from "react-router-dom";

/**
* @author
* @function App
**/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Home from './pages/Home';
import Detail from './pages/Detail';
import Search from './pages/Search';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

/**
* @author
* @class App
**/
//We have to create a class component

class App extends Component {
  
  render() {

    return (
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/detail" component={Detail}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/checkout" component={Checkout}></Route>
      </Router>
    )
  }
}


App.propTypes = {}
export default App
