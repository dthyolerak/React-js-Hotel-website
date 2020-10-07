import React from 'react'
import {Link} from 'react-router-dom';
import Bounce from 'react-reveal/Rotate'

import{ProductConsumer} from './context/Context';
export default function Navbar() {

  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
    return (
        <ProductConsumer>
          {value=>{
            return(
              <>
              

        <header className="header">
         <div className="brand">
        <Link to="/"> <img className="logo" src="../images/logo.PNG" alt="product" /></Link>
        
         <Link to ="/" className="cbc" onClick={closeMenu} ><span className="thyo" >THYO</span><span className="business">LERA</span></Link>
        
            
         </div>

         <div className="header-links" >

              {
                value.links.map(links=>
                  {
                    return(
                      <li key={links.id}><Link to={links.path}>{links.link}</Link></li>
                    )
                  })
              }

                       
                     
         </div>
         <div>
         <button onClick={openMenu}>
                 &#9776;
             </button>
         </div>
         
             
     </header>

<div className="sidebar" >
<Bounce left duration={3000}>
<div className="sidebar-closeMenu-btn" onClick={closeMenu}>X</div>
</Bounce>
<ul>
            {
                value.links.map(links=>
                  {
                    return(
                      
                      <li  key={links.id}><Link to={links.path}>{links.link}</Link></li>
                     
                    )
                  })
              }
            </ul>
               
</div>
      
           
</>   
            )
          }}
        </ProductConsumer>
    )
}





