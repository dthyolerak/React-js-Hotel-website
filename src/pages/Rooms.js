import React from 'react';
import RoomsBc from '../components/rooms/RoomsBc'
const closeMenu = () => {
  document.querySelector(".sidebar").classList.remove("open")
}
export default function Rooms() {
    return (
        <div className="Rooms" onClick={closeMenu}>
          <RoomsBc className="wildth" /> 
        </div>
    )
}