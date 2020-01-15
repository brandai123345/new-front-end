import React from 'react';
import logo from '../../assets/images/profile.png';




class Navbar extends React.Component {

    render() {
        return (

            <nav className="BrandAI-navbar">
                <div className="container">
                  <a href="/">
                      <img src={logo} className="logo" alt="BrandAI"/>
                  </a>
                   
                
                 
                  <div className="Namegen">
                      <a href="/namegenerator">
                        <button className="Namegentor">Generate Name</button>
                      </a>
                  </div>
                 




                  <div className="right">
                      <a href="/">
                        <button className="start-over">Start Over</button>
                      </a>
                  </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;