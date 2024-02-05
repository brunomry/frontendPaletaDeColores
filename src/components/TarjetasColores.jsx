import React from 'react';
import TarjetaColor from './TarjetaColor';

const TarjetasColores = ({colores, borrarColor}) => {
  return (
    <article className='d-flex containerCards justify-content-center flex-wrap gap-3 mx-auto mt-5'>
      {colores.map((elementoColor, posicion) => (
          <TarjetaColor
            key={posicion}
            nombreColor={elementoColor}
            borrarColor={borrarColor}
          />
        ))}
    </article>
  );
};

export default TarjetasColores;