import axios from "axios";
import LocationInfo from "./LocationInfo.js";
import React, { useEffect, useState } from "react";

const LocationContainer = (url) => {
  const [Location, setLocation] = useState({});


  // Aquí declaramos una promesa para hacer llamado con axios datos de dimension y población
  // que llamamos del componente LocationInfo 

  useEffect(() => {
    axios(url)
      .then(res => {
        setLocation({
          name: res.data.name,
          type: res.data.type,
          dimension: res.data.dimension,
          population: res.data.residents.length
        })
          .catch(error => console.log(error))

      })


  }, [url])



  //aquí devolvemos los resultados
  return (
    <LocationInfo
      population={Location.population}
      name={Location.name}
      type={Location.type}
      dimension={Location.dimension}

    />
  );
};

export default LocationContainer;
