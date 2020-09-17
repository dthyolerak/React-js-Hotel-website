import React, { Component } from 'react';
import Title from '../components/Title'
import Img1 from '../images/logo1.PNG'
import Img2 from '../images/face.jpg'
import Bounce from "react-reveal/Bounce"
import {  FaMailBulk,  FaPhoneAlt, } from 'react-icons/fa'

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

export default class Help extends Component {
    
    
    render() {
        return (
            <>
           
            <div className="headerMain" onClick={closeMenu}>
            <div className="aboutContact">
        
            <div className="contact-form">
                <Title title="FIND HELP FROM ....... ALWAYS THERE FOR YOU" color= " bisque" />
                <div className="service-line"></div>
            </div>
            <div className="contact-us">

        
           <div className="help-image">
               
       <Bounce right duration={3000} cascade>
        <div >
            <img src={Img1} alt="help-porter one" className="help-img"/>
        </div>
        </Bounce>
        <Bounce  left duration={3000} cascade>
        <div className="help-text">
        <p title="call porter one "><span className="contact-simble-one"><FaPhoneAlt /></span>+265 993 585 213</p>
        <a href="mailto:dthyolerak1.com@gmail.com" title="email Thyolera Web Developers "><p><span className="contact-simble-one"><FaMailBulk /></span> Thyolera Hotel </p></a>
        <p>porter one</p>
        </div>
        </Bounce>
        </div>
        
       
            </div>

            <div className="contact-us">

        
<div className="help-image">
    
<Bounce right duration={3000} cascade>
<div >
 <img src={Img2} alt="help-porter two" className="help-img"/>
</div>
</Bounce>
<Bounce  left duration={3000} cascade>
<div className="help-text">
<p title="call  porter two"><span className="contact-simble-one"><FaPhoneAlt /></span> +265 884 268 837</p>
<a href="mailto:dthyolerak1.com@gmail.com" title="email Thyolera Web Developers "><p><span className="contact-simble-one"><FaMailBulk /></span> Thyolera Hotel </p></a>
<p>porter two</p>
</div>
</Bounce>
</div>


 </div>

 <div className="contact-us">

        
<div className="help-image">
    
<Bounce right duration={3000} cascade>
<div >
 <img src={Img1} alt="help-porter three" className="help-img"/>
</div>
</Bounce>
<Bounce  left duration={3000} cascade>
<div className="help-text">
<p title="call porter three "><span className="contact-simble-one"><FaPhoneAlt /></span> +265 993 585 211</p>
<a href="mailto:dthyolerak1.com@gmail.com" title="email Thyolera Web Developers "><p><span className="contact-simble-one"><FaMailBulk /></span> Thyolera Hotel </p></a>
<p>porter three</p>
</div>
</Bounce>
</div>


 </div>

           
            
        </div>
           </div>
           </>
        )
    }
}
