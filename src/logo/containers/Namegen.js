import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
//import { connect } from 'react-redux';

import Navbar from '../../components/common/Navbar';
import CompanyKeywords from '../components/CompanyKeywords';
import ChatComponent from '../../components/common/NameGenChat';




const genCompanyName = withRouter(({ onClick, history }) => {
    return (
    <div>
        <Navbar />
        <div className="BrandAI-base">
            <div className="container">
                <ChatComponent
                    text={<h1><span>Hi, I’m Nagena.</span> Your personal Name generation assistant.<br /> Let’s me generate for you the perfect and catchy name - it only takes a few minutes.</h1>}
                   
                />
                   <CompanyKeywords onClick={onClick} history={history}/>
            </div>
        </div>
    </div>
    )
});

const Namegen = connect(
    null,
    
)(genCompanyName);

export default Namegen;