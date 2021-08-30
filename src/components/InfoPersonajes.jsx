import React from 'react';
import '../assets/styles/components/PersonajesItem.scss';

const InfoPersonajes = ({ name, status, species, type, gender, origin, location, image, url, created }) => (

  <div className='carousel-item-character'>
    <img className='carousel-item-character__img' src={image} alt={name} />
    <div className='carousel-item-character__details'>
      <p className='carousel-item-character__details--title'>{ name }</p>
      <p className='carousel-item-character__details--subtitle'>
        {`${name} ${status} ${type}`}
      </p>
    </div>
  </div>
);

export default InfoPersonajes;
