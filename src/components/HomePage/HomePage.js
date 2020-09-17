import React from 'react'
import './Home.css';
import Header from './Header';
import Services from './Services';
import Portfolio from './Portfolio';
import Whowme from './Whowme';
import FeaturedRooms from '../FeaturedRooms';
import HomeDefault from './HomeDefault';
export default function HomePage() {
    return (
        
        <React.Fragment>
            <Header />
            <Services />
            <Portfolio />
            <FeaturedRooms/>
            <HomeDefault />
            <Whowme />
        </React.Fragment>
    )
}
