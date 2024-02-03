import React from 'react';
import TarjetaColor from './TarjetaColor';

const TarjetasColores = () => {
  return (
    <section className='d-flex containerCards justify-content-center flex-wrap gap-3 mx-auto'>
      <TarjetaColor/>
    </section>
  );
};

export default TarjetasColores;