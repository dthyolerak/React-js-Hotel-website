import React from 'react'
import Room from '../Room'
import './room.css'
export default function RoomsList({rooms}) {

if (rooms.length === 0){
    return(
        <div className="empty-search">
        <h2>Unfortunately No Rooms matched Your Searching Parameters</h2>
    </div>
    )
}
    return<section className="roomslist">
         <div  className="single-room-images">
              {
                  rooms.map(item=> {
                      return<Room key={item.id} room={item}/>
                  })
              }
          </div>
       </section>;
}
    

