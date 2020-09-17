import React from 'react'
import Hero from '../Hero'
import Hedding from '../Hedding'
import RoomContainer from './RoomContainer'
 const RoomsBc = () => {
    return (

        <>
        <Hero hero="roomsHero">
            <Hedding title="Available Rooms" subtitle="Single, Family, Economical, "
            />
        </Hero>
 <RoomContainer />
     </>
    );
};
export default RoomsBc;