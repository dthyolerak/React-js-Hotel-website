import React, { Component } from 'react';
import Loading from '../components/loading'
import Bounce from 'react-reveal/Zoom';
import {Link} from 'react-router-dom'
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

export default class Header extends Component {
    
    
    render() {
        return (
            <>
            
            <div className="headerMain" onClick={closeMenu}>
           
                <div className='heroTexts'>

                    <div className="headerMain-F">
                      
                <Bounce top duration={10000} cascade>
                      <h1> ERROR: PAGE NO FOUND...</h1>
                      </Bounce>
                      <Loading />
                    </div>
                    
                    <div className="headerMain-S">
                    <Bounce bottom duration={13000} >
              
              
                   <h1>   <Link to="/" title="Go back Home main page" >Go Back Home</Link></h1> </Bounce>
                    </div>
                </div>
           </div>
           </>
        )
    }
}
