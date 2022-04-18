import "../../css/Pagination.css";

const Pagination = ({ residentsPage, totalResidents, paginate }) => {
  const pageNumberInRealTime = [];


  // Aquí hacemos un recorrido que no sea mayor al total de residentes (divido por las paginas totales)
  // Esto lo vamos a indexar a nuestro array pageNumberInRealTime
  for (let i = 1; i <= Math.ceil(totalResidents / residentsPage); i++) {
    pageNumberInRealTime.push(i);
  }

  return (
    <div className="text-center">
      <div className="paginate">
        {pageNumberInRealTime.map((numbers) => (
          /*Aquí declaramos el botón de nuestro paginador el cual establece 
          /*con un onClick el resultado de la paginacion en numbers, es decir, loq ue iteramos con un mapo desde
          /*pageNumberInRealTime */
          <button
            onClick={() => paginate(numbers)}
            key={numbers}
          >
            {numbers}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
