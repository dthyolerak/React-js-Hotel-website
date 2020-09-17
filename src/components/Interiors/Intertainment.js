import React from 'react'

import Title from '../Title'
import Hedding from  '../Hedding'
import VideoPlayer from 'react-video-js-player'
import Video from '../../images/video/Video Of Hotel Lounge.mp4'
import Poster from '../../images/inter-10.PNG'
import Video1 from '../../images/video/video1.mp4';

import Hero from '../Hero'

export default function Intertainment() {
    return (
        <>
        <Hero hero="inter-10Hero">
        <Hedding title="take excursion" subtitle="unlimited entertainments ever! "
        />
    </Hero>

    <div  className="homeDefault"  >
            <div className="homeDefautt">
                <div className="Portfolio-in">
            <Title  title="Videos  " color="white"></Title>
            </div>

            <div className="single-homeDefautt" >
                
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magni a pariatur nisi delectus libero maxime, nostrum consequatur eligendi, voluptatum praesentium. Quidem quis ea dignissimos tempore, nisi id fuga provident ipsum dolor sit amet consectetur adipisicing elit. Fugit magni a pariatur nisi delectus libero maxime, nostrum consequatur eligendi, voluptatum praesentium. Quidem quis ea dignissimos tempore, nisi id fuga provident!",
    </p>
            </div >
            <div  className="VideoPlayer">
              <VideoPlayer src={Video1}  width="520" height="250"   poster={Poster} 
              playbackRates={[-2, -1, .5, 1, 3, 8, 16, 32]}
              />
            </div>
            </div>
            <div className="single-homeDefautt" >
                
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magni a pariatur nisi delectus libero maxime, nostrum consequatur eligendi, voluptatum praesentium. Quidem quis ea dignissimos tempore, nisi id fuga provident ipsum dolor sit amet consectetur adipisicing elit. Fugit magni a pariatur nisi delectus libero maxime, nostrum consequatur eligendi, voluptatum praesentium. Quidem quis ea dignissimos tempore, nisi id fuga provident!",
    </p>
            </div >
            <div  className="VideoPlayer">
              <VideoPlayer src={Video}  width="520" height="250"  
              playbackRates={[-2, -1, .5, 1, 3, 8, 16, 32]}
              />
            </div>
            </div>
            </div>
            </div>

   


 </>
    )
}
