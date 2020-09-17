import React, { Component } from 'react';
import  {RoomContext} from  "../Context";
import Title from "../components/Title"
import Room from "./Room";
import Loading from "./loading"
export default class FeaturedRooms extends Component {
    
    static  contextType = RoomContext;
    render() {
        let {loading, featuredRooms : rooms} =this.context;
      
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />
        })
     
        return (
            <section className="featured-rooms">
              <Title title="Featured Rooms"  color="rgb(70, 56, 56)"/>
              <div className="service-line"></div>
              <div className="single-room-images">
                {
                    loading? <Loading /> : rooms
                }
            </div>
            
            </section>
        )
    }
}



