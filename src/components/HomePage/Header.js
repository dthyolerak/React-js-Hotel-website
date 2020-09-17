import React, { Component } from 'react';
import Bounce from 'react-reveal/Zoom';
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

export default class Header extends Component {
    
    
    render() {
        return (
            <>
           
            <div className="headerMain" onClick={closeMenu}>
            
                <div className='heroTexts'>
               
                <Bounce top duration={2000}>
                    <div className="headerMain-F">
                   
                        <h1>WELCOME EVERYTHNG GREEN</h1>
                        
                    </div>
                    </Bounce>
                    <div className="headerMain-S">
                    <Bounce bottom duration={3000}>
                      
         <h1 className="cbc" onClick={closeMenu} ><span className="green" >LIVE SIMPLE!, LIVE MODERN!, </span><span className="green1">DEAL WITH </span>PROFESSIONAL <span className="green" >PEOPLE</span></h1>
                      
                   </Bounce>
                    </div>
                </div>
           </div>
           </>
        )
    }
}
