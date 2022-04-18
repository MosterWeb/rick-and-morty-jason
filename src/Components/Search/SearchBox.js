import React, { useState } from "react";
import SearchResult from "./SearchResult.js";
import ResidentContainer from "../Residents/ResidentContainer.js";
import LocationContainer from "../Location/LocationContainer.js";


//Aquí declarmos nuestro random. Lo llevamos hasta 126 ubicaciones
const query = Math.floor(Math.random() * 126) + 1;

const SearchBox = () => {
  //aquí damos inicio a la url con la url de la api en modo random
  const [url, setUrl] = useState(
    `https://rickandmortyapi.com/api/location/${query}`
  );

  //Aquí declaramos nuestra búsqueda con el useState
  const [search, setSearch] = useState("");


  const handleSearch = (url) => {
    setSearch("");
    setUrl(url);
  };
  return (
    // Aquí declaramos nuestro input con un evento que registra lo que escribimos
    <>
      <input type="text" value={search}  onChange={(e) => setSearch(e.target.value)} placeholder="Escribe una ubicación"
      />

      {/* Si search es distinto a un elemento vacío, entonces ejecutamos nuestro componente SearchResult */}
      {search !== "" && (
        <SearchResult
          url={`https://rickandmortyapi.com/api/location/?name=${search}`}
          handle={handleSearch}
        />
      )}
      <LocationContainer url={url} />
      <ResidentContainer url={url} />
    </>
  );
};

export default SearchBox;
