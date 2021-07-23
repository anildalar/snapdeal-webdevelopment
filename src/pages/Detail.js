import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import ReactImageMagnify from 'react-image-magnify';

import watchImg1200 from '../assets/img/watch1200.jpg';
import watchImg300 from '../assets/img/watch300.jpg';
/**
* @author
* @class Detail
**/

class Detail extends Component {
    state = {}
    render() {
        return (
            <Layout>
                <div className="a_dtl_main container p-0 tbdr ">
                    <div className="a_dtl_top_brdcrmb tbdr">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Watches </a></li>
                                <li className="breadcrumb-item"><a href="#">Men's Watches </a></li>
                                <li className="breadcrumb-item"><a href="#">LimeStone LS2820 Day&Date Metal Analog Men's Watch</a></li>
                            </ol>
                        </nav>
                    </div>
                    <div className="a_dtl_prodCont bg-white tbdr ">
                        <div className="row m-0 h-100">
                            <div className="col-5 tbdr">
                                <div style={{width:'345px',height:'490px'}}>
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src: watchImg300
                                        },
                                        largeImage: {
                                            src: watchImg1200,
                                            width: 1200,
                                            height: 1800
                                        },
                                        shouldUsePositiveSpaceLens: true
                                    }} />
                                </div>

                            </div>
                            <div className="col-7 tbdr"></div>
                        </div>
                    </div>
                    <div className="row m-0 a_dtl_prodDetBox">
                        <div className="col-10 tbdr">
                            <div className="a_dtl_googLeaddSenseBox tbdr">Google</div>
                            <div className="a_dtl_prodDetBoxBottom bg-white">
                                <nav className="nav nav-pills nav-fill">
                                    <a className="nav-link active" aria-current="page" href="#">Active</a>
                                    <a className="nav-link" href="#">Much longer nav link</a>
                                    <a className="nav-link" href="#">Link</a>
                                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                </nav>
                            </div>
                        </div>
                        <div className="col-2 tbdr">B</div>
                    </div>
                </div>
            </Layout>
        )
    }
}


Detail.propTypes = {}
export default Detail