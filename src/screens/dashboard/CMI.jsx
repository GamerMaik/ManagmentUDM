import { useState } from 'react';
import { AreaTop, AreaCardsCMI, Tabla } from '../../components';

const CMI = () => {
  const [perspectiva, setPerspectiva] = useState('');

  const handleButtonClick = (perspectiva) => {
    console.log(perspectiva);
    setPerspectiva(perspectiva);
  };

  return (
    <div className="content-area">
      <AreaTop nombre={"CUADRO DE MANDO INTEGRAL"}/>
      <AreaCardsCMI onButtonClick={handleButtonClick} />
      <section className="content-area-table">
        {perspectiva && <Tabla perspectiva={perspectiva} />}
      </section>
    </div>
  );
};

export default CMI;
