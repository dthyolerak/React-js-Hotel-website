import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import '../components/HomePage/Home.css'
import defaultImage from '../images/room-12.jpeg'
export default function Room({room}) {
    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open")
      }
    const{name,slug, images, price} =room;
    return (
        <>

        
       
       <article className="room" onClick={closeMenu}>
   <div className="Portfolio-in">
           <div className="img-container">
                <img className="room-image" src={images[0] || defaultImage} alt="single room" />
            <div className="price-top">
                <h6>${price}</h6>
                <p>per 24 hours</p>
            </div>
            <Link to= {'/SingleRoom/' + slug} className="btn-primary room-link">Features</Link>
            </div>
            <p>{name}</p>
           
            </div>
     </article>
     </>
    )
}
Room.propTypes ={
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    })
}