import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Jugador from "./Jugador";

const jugadores = [
  {
    nombre: "Leo",
    apellido: "Messi",
  },
  {
    nombre: "Enzo",
    apellido: "Fernandez",
  },
  {
    nombre: "Angel",
    apellido: "Dimaria",
  },
];

const Promises = () => {
  const [loading, setLoading] = useState(false);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setLoading(true);
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(jugadores);
      }, 5000);

      // setTimeout(() => {
      //     reject('Hubo un error en el intento ')
      // }, 2000);
      // array de jugadores
    });

    tarea
      .then((res) => {
        setPlayers(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert('algo salio mal ')
      })
    //   .finally(() => console.log("la promesa se acabo !!!! "));
  }, []);

  return (
    <div>
      {loading && <Spinner />}
      {!loading &&
        players.length > 0 &&
        players.map(({ nombre, apellido }, index) => (
          <Jugador nombre={nombre} apellido={apellido} key={index} />
        ))}
    </div>
  );
};

export default Promises;
