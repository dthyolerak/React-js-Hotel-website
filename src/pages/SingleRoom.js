import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Title from './../components/Title'
import DefaultImage from '../images/room-11.jpeg'
import Gear from '../images/gif/loading-gear.gif'
import {RoomContext} from "../Context"
import Hedding from "../components/Hedding"
import StyleHero from "../components/StyledHero"
import Bounce from 'react-reveal/Bounce'
export default class SingleRoom extends Component {
   constructor(props){
       super(props);
    //console.log(this.props);
    this.state ={
        slug: this.props.match.params.slug, DefaultImage
    }
   }
   //componentDidMount() {}
   static contextType = RoomContext;
    render() {
        const { getRoom  } = this.context;
        const room = getRoom(this.state.slug);
       if(!room)
       {return( <div className="error">
           <h3 className="s-room" >
           <Bounce top duration={10000} cascade> Erro:No such room could be found...<br></br></Bounce>
           Loading data...<br></br>
           < img src={Gear} alt ="loading room details" /><br></br>
           </h3><br></br><br></br>
           <Bounce left duration={10000} cascade><br></br><br></br><br></br>
           <Link to ="/Rooms" className="btn-primary">
               Back to rooms</Link> <br></br>
          <br></br>
           <Link to ="/" className="btn-primary">Back Home</Link>
           </Bounce>
       </div>
        
        );
    }
    const {name,
    description,
capacity,
size,
pets,images,
breakfast, price, extras} = room
const [, ...LestImage] =images;
return (<>
<StyleHero image={images[0] || this.state.DefaultImage}>
    <Hedding title={`${name} room`} >
        
        </Hedding>
        
   
    </StyleHero>
    
    <section className="single-room">
    <Title title=" Details In Side---Bath, Sitting Room And Toilet" />
    <div className="service-line"></div>
        <div className="single-room-images">
        {LestImage.map((item,index) =>{
            return <a href={item}> <img key={index} src={item} alt={name} /></a>
           
        }   )}
         </div>
         <div className="single-room-info">
             <article className="desc">
                 <h2> Room Details </h2>
                 <p>{description}</p>
             </article>
            <article className="info">
             <h2>Infor:</h2>
             <h4>price   : ${price}</h4>
             <h4>size   : {size} sqft</h4>
             <h4>max capacity   : {""}
             { capacity > 1 ? `${capacity}  people` : `${capacity} one person`}
                 </h4>
                 <h4>breakfast :{breakfast && "Free breakfast included "}</h4>
                 <h4>Pets   : {pets ? " pets allowed" : "no pets allowed"}</h4>
             </article>
             <section className="roo-extras">
                 <h3>FREE--extras</h3>
                 <ul className="extras">
                     {extras.map((item,index) => {
                         return <li key={index}>#- {item}</li>;
                     })}
                 </ul>
             </section>
         </div>
    </section>
    </>
    );
    
    }
}
