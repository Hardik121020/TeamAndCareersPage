import React from 'react';
// import logo from '../component';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Text.css';
import * as ReactNavbar from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Tabbar from './Tabbar';


const Teambar = () => {
    return (
        <>
        <div className="row crow">
                    <div className="col-md-10 cobox">
                        <h1 className="text2">Meet Our Team</h1>
                    </div>

                </div>
        <Tabbar />
        
        </>
    );
};

export default Teambar;