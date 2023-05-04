import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Jugador from "./Jugador";
import axios from "axios";

const jugadores = [
  {
    id: "1",
    nombre: "zapatilla nike",
    img: "link del zapatilla del nike",
    stock: 10,
    precio: 2000,
  },
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
  const [harry, setHarry] = useState([]);

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
        alert("algo salio mal ");
      });
    //   .finally(() => console.log("la promesa se acabo !!!! "));
  }, []);

  // useEffect(() => {

  //   fetch("https://harry-potter-api.onrender.com/db")
  //   .then((res) => res.json())
  //     .then((res) => setHarry([...harry,res.info]))
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    const getHarryPotter = async () => {
      try {
        const res = await axios.get("https://harry-potter-api.onrender.com/db");
        console.log(res.data);
        setHarry([...harry,res.data.info])
      } catch (error) {
        console.log(error)
      }
    };
    getHarryPotter();
  }, []);

  return (
    <div>
      {loading && <Spinner />}
      {!loading &&
        players.length > 0 &&
        players.map(({ nombre, apellido }, index) => (
          <Jugador nombre={nombre} apellido={apellido} key={index} />
        ))}
      {harry.length > 0 && harry[0]?.map((info,index) => <h1 key={index}>{info.contenido}</h1>)}
    </div>
  );
};

export default Promises;
