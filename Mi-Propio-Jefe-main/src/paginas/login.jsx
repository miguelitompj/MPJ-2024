import React from 'react';
import Menu from '../componentes/menu';
import Init from '../componentes/init';  
import Pie_de_pagina from '../componentes/pie_de_pagina';

function Log() {  
  return (
    <div className='Inicio'> 
      <Menu />  
      <Init />
      <Pie_de_pagina/>
    </div>
  );
}

export default Log;