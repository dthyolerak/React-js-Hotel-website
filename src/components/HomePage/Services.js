import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaBeer, FaDocker} from 'react-icons/fa'
import Title from '../Title';
import Roll from 'react-reveal/Roll';
const closeMenu = () => {
  document.querySelector(".sidebar").classList.remove("open")
}
export default class Services extends Component {

  state={
    services:[
      {
        edith:1,
        icon:<FaDocker />,
        column:'Local & Internation Food',
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magni a pariatur nisi delectus libero maxime, nostrum consequatur eligendi, voluptatum praesentium. Quidem quis ea dignissimos tempore, nisi id fuga provident!",
   
      },

      {
        edith:2,
        icon:<FaBeer />,
        column:'Free Beer',
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magni a pariatur nisi delectus libero maxime, nostrum consequatur eligendi, voluptatum praesentium. Quidem quis ea dignissimos tempore, nisi id fuga provident!",
   
      },

      

      {
        edith:3,
        icon:<FaCocktail />,
        column:'Unlimited  Cocktail',
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magni a pariatur nisi delectus libero maxime, nostrum consequatur eligendi, voluptatum praesentium. Quidem quis ea dignissimos tempore, nisi id fuga provident!",
   
      },  

      {
        edith:4,
        icon:<FaHiking />,
        column:'Endless Hiking',
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magni a pariatur nisi delectus libero maxime, nostrum consequatur eligendi, voluptatum praesentium. Quidem quis ea dignissimos tempore, nisi id fuga provident!",
   
      }
    ]
  }
  render() {
    
    return (
      <section className="services" onClick={closeMenu}>
<div className="services-in">
                    <Title title="Services" color="#222" />
                    <div className="service-line"></div>
                    <div className="service-center">
      
        {this.state.services.map((Donnex, edith) =>{
          return <article className="single-service"
          key={edith}>
            
              <span>{Donnex.icon}</span>
                    <Roll cascade>   
                        <div className="texts">
                                 
                            <h2>{Donnex.column}</h2>
                          
                            <p>{Donnex.text}</p>
                            
                        </div>
                        </Roll>
                        
          </article>
        })}
        </div>
        </div>
        </section>

    )
 
  }
}
