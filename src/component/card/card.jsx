import React from 'react';
import './card.css'
export const Card = props=>(
  <div className=" p-0 col-sm-3 monsterCard">
    <img src={`https://robohash.org/${props.monster.id}?set=set2&size=100x100`} alt=""/>
    <h1>{props.monster.name}</h1>
    <p>{props.monster.email}</p>
  </div>
)
