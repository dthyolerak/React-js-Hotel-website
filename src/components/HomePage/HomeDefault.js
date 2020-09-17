import React from 'react'
import Title from '../Title'
import VideoPlayer from 'react-video-js-player'
import Video from '../../images/video/Video Of Hotel Lounge.mp4'
const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
export default function HomeDefault() {
    return (
        <div  className="homeDefault"  onClick={closeMenu}>
            <div className="homeDefautt">
                <div className="Portfolio-in">
            <Title  title="Video Of Hotel Lounge" color="white"></Title>
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
    )
}
