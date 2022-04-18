import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../css/ResidentInfo.css";

const ResidentInfo = ({ url }) => {
  const [resident, setResident] = useState({});
  const [color, setColor] = useState("green");
  // con este useEffect usamos axios y  conseguimos los datos de nuestro residents y declaramos con if los colores 
  // que representa si está vivo, muerto o en status desconocido en color gris 
  useEffect(() => {
    if (url) {
      axios.get(url)
        .then((res) => {
          setResident({
            image: res.data.image,
            name: res.data.name,
            status: res.data.status,
            species: res.data.species,
            origin: res.data.origin.name,
            episodes: res.data.episode.length
          });
          if (resident.status === "Alive") {
            setColor("green");
          } else if (resident.status === "Dead") {
            setColor("red");
          } else {
            setColor("gray");
          }
        });
    }
  }, [url, resident.status]);

  return (
    <div className="col-md-6">
      <div className="card">
        <img src={resident.image} alt={resident.name} />
        <div className="information">
          <p>
            <b>{resident.name}</b>
          </p>
          <p>
            <span className={"circle " + color}></span>
            {resident.status} - {resident.species}
          </p>
          <p className="description-morty">origin</p>
          <p>{resident.origin}</p>
          <p className="description-morty">episodes</p>
          <p>{resident.episodes}</p>
        </div>
      </div>
    </div>
  );
};

export default ResidentInfo;
