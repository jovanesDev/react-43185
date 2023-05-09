import React  from "react";
import Profe from "./Profe";

const TutorEze = (props) => {
  const { sueldo, handleAumentarSueldo,calificacion } = props;
  return (
    <div>
      <h1>Tutor Eze</h1>
      <h4>Sueldo del tutor Eze {sueldo}</h4>
      <h5>Calificacion {calificacion}</h5>
      <button onClick={handleAumentarSueldo}>Aumentar el sueldo </button>
    </div>
  );
};

export default Profe(TutorEze);
