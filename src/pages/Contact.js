import React from 'react';
import Contact from '../components/Contact/ContactCc'
const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
export default function(){
    return (
        <div onClick={closeMenu}>
           <Contact /> 
        </div>
    )
}
