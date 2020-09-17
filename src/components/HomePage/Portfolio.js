import React from 'react';
import Title from '../Title';
import {Link} from 'react-router-dom';
import{ProductConsumer} from '../context/Context';
import Bounce from 'react-reveal/Zoom'


  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
export default function Portfolio() {
    return (
        <ProductConsumer>
            {value =>{
             
                return(
                    <section className="Portfolio" onClick={closeMenu}>

                        <div className="Portfolio-in">
                            
                                <Title   title="ROOMS AND SURROUND " color="" />
                                <div className="service-line"></div>
                            
                            <div className="Portfolio-center">
                            {
                value.portfolio.map(portfolio=>
                  {
                    return(
                     
                          <div className="single-portfolio"
                                 key={portfolio.id}>
                      <Link to={'/Rooms/' + portfolio.id }  ><img  className="portfolio-image" src={portfolio.img} alt="portfolio"></img></Link>
                       <Bounce bottom duration={1000}>  
                       <Link to={'/Rooms/' + portfolio.id }  >   <p>{portfolio.text}</p></Link>
                       </Bounce> 
                      </div>
                      
                    )
                  })
              }
                            </div>
                            </div>
                    </section>
                )
            }}
        </ProductConsumer>
    )
}
