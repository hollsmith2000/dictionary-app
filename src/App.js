import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="Sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This Project was coded by Holly and is{" "}
            <a
              href="https://github.com/hollsmith2000/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github{" "}
            </a>
            and{" "}
            <a
              href="https://resplendent-cactus-5382f2.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
