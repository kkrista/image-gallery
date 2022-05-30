import PictureBrowse from "./components/PictureBrowse";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <PictureBrowse defaultKeyWord="Pictures" />
      </main>
      <footer>
        <a href="https://github.com/kkrista/image-gallery">
          Open-source code
        </a>{" "}
        by Krista-Mari Katajisto
      </footer>
    </div>
  );
}

export default App;
