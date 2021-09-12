import { useState } from 'react';

import pc from './style.module.css';

import cardBackSide from './assets/card-back-side.jpg';

const PokemonCard = ({ name, img, id, type, values }) => {
  const [isActive, setActive] = useState(false);
  console.log('####: isActive', isActive);

  const toggleCard = () => {setActive(!isActive)}

  return (
    <>
      <div className={pc.root} onClick={toggleCard}>
        <div className={`${pc.pokemonCard} ${isActive ? pc.active : ''}`}>
          <div className={pc.cardFront}>
            <div className={`${pc.wrap} ${pc.front}`}>
              <div className={`${pc.pokemon} ${pc[type]}`}>
                <div className={pc.values}>
                  <div className={`${pc.count} ${pc.top}`}>{values.top}</div>
                  <div className={`${pc.count} ${pc.right}`}>{values.right}</div>
                  <div className={`${pc.count} ${pc.bottom}`}>{values.bottom}</div>
                  <div className={`${pc.count} ${pc.left}`}>{values.left}</div>
                </div>
                <div className={pc.imgContainer}>
                  <img src={img} alt={name} />
                </div>
                <div className={pc.info}>
                  <span className={pc.number}>#{id}</span>
                  <h3 className={pc.name}>
                    {name}
                  </h3>
                  <small className={pc.type}>Type: <span>{type}</span></small>
                </div>
              </div>
            </div>
          </div>

          <div className={pc.cardBack}>
            <div className={`${pc.wrap} ${pc.back}`}>
              <img src={cardBackSide} alt="Сard Backed" />
            </div>
          </div>

          </div>
      </div>
    </>
  );
};

export default PokemonCard;