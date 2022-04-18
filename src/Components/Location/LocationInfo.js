const LocationInfo = ({ name, type, dimension, population }) => {
//  Aqui se crea el componente que llevaremos hasta el LocationContainer
    return (
      <div>
        <h2 className="text-center">{name}</h2>
        <div className="row">
          <div className="text-center col-sm-4 ">
            <b>type: </b>
            {type}
          </div>
          <div className="text-center col-sm-4 ">
            <b>population: </b>
            {population}
          </div>
          <div className="col-sm-4 text-center">
            <b>dimension: </b>
            {dimension}
          </div>
          
        </div>
      </div>
    );
  };
  
  export default LocationInfo;