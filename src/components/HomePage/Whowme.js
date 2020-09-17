import React from 'react';
import Title from '../Title';
import {FaFacebookF, FaWhatsapp, FaTwitter} from 'react-icons/fa'
import Rotate from 'react-reveal/Rotate'
export default function Whowme() {
    return (
        <div className="about-us">
            <div className="about-use-one">
                <Title title= "ABOUT THYOLERA HOTEL" color="rgb(70, 56, 56)"></Title>
                <div className="service-line"></div>
                    <div className="about-us-sub">
                    <Rotate>
                        <div className="texts">
                           
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magni a pariatur nisi delectus libero maxime, nostrum consequatur eligendi, voluptatum praesentium. Quidem quis ea dignissimos tempore, nisi id fuga provident!",
                             </p>

                              </div>  
                            <div className="about-us-icon">
                                <p>find us on socia media below Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magni a pariatur nisi delectus libero maxime, </p>
                                <div className="media-icons">
                                <a href="https://web.facebook.com/messages/t/donnex.kamsonga " ><span>< FaFacebookF /></span></a>
                                <a href="https://wa.me/c/265884268837" className="so-image"><span><FaWhatsapp /></span></a>
                                <a href="https://twitter.com/messages/DonnexKamsonga" className="so-image"><span><FaTwitter /></span></a>
                                                                    
              
              
                                
                                </div>
                               
                            </div>
                            </Rotate>          
                    </div>
            </div>
            
        </div>
    )
}
