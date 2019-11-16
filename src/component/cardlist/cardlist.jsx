import React from 'react';
import { Card } from '../card/card.jsx'
export const Cardlist = props => (
  <div className="row p-0 m-0">
    {
      props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))
    }
  </div>
);