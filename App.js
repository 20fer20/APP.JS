import "./styles.css";
import charactersInfo from "./data/marvel/characters.json";
import DetalleDeHeroe from "./components/DetalleDeHeroe";

export default function App() {
  console.log(charactersInfo.data.results[0]);
  return (
    <div className="App">
      <h1>Caracteres de Marvel</h1>
      <DetalleDeHeroe heroe={charactersInfo.data.results[2]} />
    </div>
  );
}
