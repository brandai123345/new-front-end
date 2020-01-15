import React from 'react';
import Navbar from '../../components/common/Navbar';
import ChatComponent from '../../components/common/ChatComponent';

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


const genNamelist = withRouter(({ onClick, history }) => {
    return (
    <div>
        <Navbar />
        <div className="BrandAI-base">
            <div className="container">
                <ChatComponent
                    text={<h1><span>Hi, I’m Arida.</span> Your personal logo design assistant.<br /> Let’s start designing you the perfect logo - it only takes a few minutes.</h1>}
                />
               
            </div>
        </div>
    </div>
    )
});



const Namelist = connect(
    
    
)(genNamelist);

export default Namelist;