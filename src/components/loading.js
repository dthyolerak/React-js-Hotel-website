import React from 'react'
import Roading  from '../images/gif/loading-arrow.gif'
export default function loading() {
    return (
        <div className="loading">
           loading......... 
           <div>
           <img src={Roading} alt="loading" className="loading" />
       
           </div>
        </div>
    )
}
