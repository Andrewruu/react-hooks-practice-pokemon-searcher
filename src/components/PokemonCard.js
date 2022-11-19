import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  console.log(pokemon)
  const [isFront, setFront] = useState(true)
  const {name, hp, sprites }= pokemon
  const {front, back} = sprites
  
  function handleClick(){
    setFront((isFront)=>!isFront)
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={isFront ? front: back}alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
