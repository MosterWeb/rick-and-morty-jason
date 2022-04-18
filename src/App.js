import './App.css';
import SearchBox from "./Components/Search/SearchBox.js";

function App() {
  return (
    <>
      <div className="banner-morty"></div>
      <div className="container">
        <h1>Rick and Morty Location</h1>
        <SearchBox />
      </div>
    </>
  );
}

export default App;
