import React from 'react'
import Profe from './Profe';

const TutorFede = (props) => {
  const {sueldo,handleAumentarSueldo,calificacion=5} = props;
  return (
    <div>
        <h1>Tutor Fede</h1>
        <h4>Sueldo del tutor Fede {sueldo}</h4>
        <h5>Calificacion {calificacion}</h5>
        <button onClick={handleAumentarSueldo}>Aumentar el sueldo </button>
    </div>
  )
}

export default Profe(TutorFede) 