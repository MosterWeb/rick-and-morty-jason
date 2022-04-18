import ResidentItem from "./ResidentInfo.js";
import Pagination from "./Pagination.js";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ResidentContainer = ({ url }) => {
  const [residents, setResidents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const residentPage = 10;


  useEffect(() => {
   axios.get(url)
   .then(res=>{
    setResidents(res.data.residents);
    setCurrentPage(1);

   })
   .catch(err=>console.error(err));
  }, [url])
  
  

  
  const indexOfLastResident = currentPage * residentPage;
  const indexOfFirstResident = indexOfLastResident - residentPage;
  const currentResidentsShowed = residents.slice(
    indexOfFirstResident,
    indexOfLastResident
  );

  //Aquí cambiamos la página
  const paginate = (numberOfPage) => setCurrentPage(numberOfPage);

  return (
    <>
      <h3>Residents</h3>
      <div className="row">
        {currentResidentsShowed.map((url) => (
          <ResidentItem key={url.substring(42)} url={url} />
        ))}
      </div>
      <Pagination        
        totalResidents={residents.length}
        paginate={paginate}
        selected={currentPage}
        residentsPage={residentPage}
      />
    </>
  );
};

export default ResidentContainer;
