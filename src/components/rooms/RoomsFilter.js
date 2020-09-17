import React from 'react'
import {useContext} from "react";
import {RoomContext } from "../../Context";
import Title from "../Title";
//get all unique values
const getUnique =(items, value) =>{
    return[...new Set(items.map(item=> item[value]))]
}

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange, type,capacity,
        price,minPrice,
        maxPrice, minSize,
        maxSize,breakfast,pets
    }= context;
    //get uniqu
    let types = getUnique(rooms,"type");

    types =['all', ...types];

    types =types.map ((item, index) =>{
        return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique (rooms, 'capacity');

    people =people.map((item,index) => {
        return(
           < option value= {item} key={index}>{item}</option>
        )
    })
    return (
        <section className="filter-container">
            <Title title= "Search Rooms" color="rgb(70, 56, 56)"/>
              <div className="service-line"></div>
           <form className="filter-form">
               {/*select type */}

               <div className="form-group">

                    <label htmlFor="type">Room Type</label>
                    <select name="type" id="type" value={type}
                    onChange={handleChange}
                    className="form-control">{types}</select>
               </div>
                {/* end select type */}


                 {/*GUESTS */}

               <div className="form-group">

<label htmlFor="capacity">Guests</label>
<select name="capacity" id="capacity" value={capacity}
onChange={handleChange}
className="form-control">{people}</select>
</div>
{/* end guests */}

{/**rooms price */}
<div className="form-group">

    <label htmlFor="price">Room Price ${price}</label>

<input type="range" name="price"  min={minPrice} max={maxPrice}

id="price"  onChange={handleChange} value={price} className="form-control"   />
</div>

{/** end rooms price */}


{/** end rooms size */}
<div className="form-group">
    
<label htmlFor="size"  > Room size 

</label>
<div className="size-inputs">
<input type="number" name="minSize" id="size"  value={minSize}
  onChange={handleChange} className="size-input"
  />

<input type="number" name="maxSize" id="size"  value={maxSize}
  onChange={handleChange} className="size-input"
  />
</div>

</div>

{/** end rooms size */}


{/**extras */}
<div className="form-group">
    <div className="single-extra">
        <input type="checkbox" name="breakfast" id="breakfast" 
        checked={breakfast} onChange={handleChange}  />

        
<label htmlFor="breakfast">Breakfast: Tick in box above for Breakfast included Room</label>
    </div>

    <div className="single-extra">
        <input type="checkbox" name="pets" id="pets" 
        checked={pets} onChange={handleChange}  /><br></br>

        
<label htmlFor="pets">Pets: Tick in box above for Pets allowed Room</label>
    </div>
</div>

{/** end extras */}
           </form>
        
        </section>
    )
}

