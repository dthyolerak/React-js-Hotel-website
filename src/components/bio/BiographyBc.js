import React from 'react'
import Bounce from 'react-reveal/Bounce'
import Title from '../Title';
import Zoom from 'react-reveal/Zoom'

import Image from '../../images/logo1.PNG';


export default function BiographyBc() {
    return (
        <section className="Bio"  >
        <Zoom  duration={1000}>
            <div className="bio-one">
                <h3><span className="thyolera">Thyolera</span><span className="web"> Web</span> Developers</h3>
                <Bounce right duration={2000}>
                <div className="bio-links">
                    <li>
                        <a href="www.mvakamalawi.com" title="Some of our work Mvaka Malawi" >
                            <p>MVAKA MALAWI</p>
                        </a>
                        <a href="https://web.facebook.com/messages/t/donnex.kamsonga " title="find us on fecebook"  >
                            <p>FACEBOOK PAGE</p>
                        </a>
                        </li>
                        <li>
                        <a href="https://wa.me/c/265884268837" title="Find us on Whatsapp" >
                            <p>WHATSAPP US</p>
                        </a>
                        <a href="https://twitter.com/messages/DonnexKamsonga" title="Find Us on twitter">
                            <p>TITTER</p>
                        </a>
                       
                    </li>
                </div>
                </Bounce>
               
                    <div className="person-img">
                        <div >
                        <Bounce top duration={3000}>
                            <img className="images-bio" src={Image} alt="Donnex" />
                            </Bounce>
                        </div>
                    <div className="text-one">
                        <div  className="text">
                        <Title  title="D Thyolera K Service" />
                        </div >
                        <Bounce top duration={4000} cascade>
                        <p className="tex-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magni a pariatur nisi delectus libero maxime, nostrum consequatur eligendi, voluptatum praesentium. Quidem quis ea dignissimos
                        ipsum dolor sit amet consectetur adipisicing elit. Fugit magni a pariatur nisi delectus libero maxime, nostrum consequatur eligendi, voluptatum praesentium. Quidem quis ea dignissimos tempore, nisi id fuga provident! ipsum dolor sit amet consectetur adipisicing elit. Fugit magni a pariatur nisi delectus libero maxime, nostrum consequatur eligendi, voluptatum praesentium. Quidem quis ea dignissimos tempore, nisi id fuga provident! ipsum dolor sit amet consectetur adipisicing elit. Fugit magni a pariatur nisi delectus libero maxime, nostrum consequatur eligendi, voluptatum praesentium. Quidem quis ea dignissimos tempore, nisi id fuga provident! 
                        ipsum dolor sit amet consectetur adipisicing elit. Fugit magni a pariatur nisi delectus libero maxime, nostrum consequatur eligendi, voluptatum praesentium. Quidem quis ea dignissimos tempore, nisi id fuga provident!
                        ipsum dolor sit amet consectetur adipisicing elit. Fugit magni a pariatur nisi delectus libero maxime, nostrum consequatur eligendi, voluptatum praesentium. Quidem quis ea dignissimos tempore, nisi id fuga provident!
                        ipsum dolor sit amet consectetur adipisicing elit. Fugit magni a pariatur nisi delectus libero maxime, nostrum consequatur eligendi, voluptatum praesentium. Quidem quis ea dignissimos tempore, nisi id fuga provident! tempore, nisi id fuga provident!",
                             </p>
                             </Bounce>
                    </div>
                   
                </div>
               
            </div>
            </Zoom>
        </section>
    )
}
