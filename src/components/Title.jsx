import React from 'react';
import '../assets/styles/components/Title.scss';

const Title = ({ title }) => (
  <section className='main'>
    <h2 className='main__title'>{title}</h2>
  </section>
);

export default Title;
