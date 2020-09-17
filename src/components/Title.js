import React from 'react';
import Roll from 'react-reveal/Roll';


export default function Title(props) {
    return (
      <div className="title" style={{color:props.color}}>
          <Roll>
          <h2 className="titleH2">{props.title}</h2>
          </Roll>
      </div>
    )
}






