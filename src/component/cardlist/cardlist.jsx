import React from 'react';
import { Card } from '../card/card.jsx'
export const Cardlist = props => (
  <div className="row p-0 m-0">
    {
      props.monsters.length ?
        props.monsters.map(monster => (
          <Card key={monster.id} monster={monster} />
        ))
        :
        <h1 className="text-center text-white mt-5 col-12">No Monster Found</h1>
    }
  </div>
);