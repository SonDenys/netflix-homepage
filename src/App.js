import "./App.css";
import MoviesList from "./assets/data/movies.json";
import Section from "./components/Section";
import logo from "./assets/img/logo-netflix.png";

console.log(MoviesList);

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" />
      {MoviesList.map((elem, index) => {
        return (
          <Section key={index} category={elem.category} images={elem.images} />
        );
      })}
    </div>
  );
}

export default App;
