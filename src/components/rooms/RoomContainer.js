import React from 'react'
import RoomFilter from './RoomsFilter'
import RoomList from './RoomsList'
import {withRoomConsumer} from '../../Context'
import Loading from '../loading'
function RoomContainer({context}){

    const {loading, sortedRooms, rooms} = context;
    
    if (loading) {
        return<Loading />
    }

    return(
        <>
       
        <RoomFilter rooms={rooms} className="wildth"  />
        <RoomList rooms={sortedRooms} className="wildth" />
    </>
    )
}

export default withRoomConsumer(RoomContainer)







//import RoomFilter from './RoomsFilter'
//import RoomList from './RoomsList'
/*import {RoomConsumer} from '../../Context'
import Loading from '../loading'
export default function RoomContainer() {
    return (
        <RoomConsumer>
            {
                (value)=> {
                    const {loading, sortedRooms, rooms} = value
                    if (loading){
                        return <Loading />
                    }
                    
                    return(
                        <div>
                        hello fromm RoomContainer
                        <RoomFilter rooms={rooms}  />
                        <RoomList rooms={sortedRooms} />
                    </div>
                    )
                }
            }
        </RoomConsumer>
     
    );
}*/

