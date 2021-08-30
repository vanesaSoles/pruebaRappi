import React from 'react';
import '../assets/styles/components/EpisodeItem.scss';
import { Link } from 'react-router-dom';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const EpisodesItem = (props) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src='https://www.freeiconspng.com/uploads/video-play-icon-14.png' alt={props.name} />
    <div className='carousel-item__details'>
      <div>
        <Link to='/home'>
          <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' onClick={() => props.showCharac(props.characters, props)} />
        </Link>
        <img className='carousel-item__details--img' src={plusIcon} alt='Plus Icon' onClick={() => props.addPlayList(props)} />
      </div>
      <p className='carousel-item__details--title'>{ props.name }</p>
      <p className='carousel-item__details--subtitle'>
        {`Episodio ${props.episode}`}
      </p>
      <p className='carousel-item__details--subtitle'>
        {`Fecha al aire ${props.air_date}`}
      </p>
    </div>
  </div>
);

export default EpisodesItem;