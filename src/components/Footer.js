import React from 'react'
import {Link} from 'react-router-dom';
import{ProductConsumer} from './context/Context';

export default function Footer() {
  
      const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open")
      }
    return (
        <ProductConsumer>
          {value=>{
            return(
              <footer className="footer" onClick={closeMenu}>
        

        <div className="footer-links" >
              {value.links.map(links=>{
                return(
                <li  key={links.id}><Link to={links.path}>{links.link}</Link></li>
                )
              }
             )}

                     
                    
        </div>


        <div><p >&copy;Thyolera Web Developers 2020:All rights Reserved</p></div>
        
            
    </footer>
            )
          }
            
          }
        </ProductConsumer>
    )
}