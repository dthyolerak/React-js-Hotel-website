import React from 'react'
import BiographyBc from '../components/bio/BiographyBc'
const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open")
}
export default function Biography() {
    return (
        <div onClick={closeMenu} className="Biography">
            <BiographyBc />
        
        </div>
         
    )
}