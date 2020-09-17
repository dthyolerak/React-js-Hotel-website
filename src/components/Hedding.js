import React from 'react'
import Zoom from 'react-reveal/Zoom'
import {Link} from 'react-router-dom'
export default function Hedding({children, title, subtitle}) {
    return (
        <Zoom top duration={2000}>
        <div className="Hedding"> 
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            <p><Link to='/Rooms' className="btn-primary">Rooms</Link></p>
        </div>
        </Zoom>
    )
}
