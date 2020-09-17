import React from 'react'

import Intertainment from '../components/Interiors/Intertainment'
const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
export default function() {
    return (
        <> <div onClick={closeMenu}>
             <Intertainment />
             </div>
           
        </>
    )
}
