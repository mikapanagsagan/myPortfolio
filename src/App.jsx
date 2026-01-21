import "./App.css";
import WaveBackground from "./WaveBackground";

export default function App() {
  return (
    <>
      <WaveBackground />

      <main className="page">
        <h1>hi! i'm mika</h1>
        <p>
          i'm a 4th year Computer Science student at UBC w/ a minor in Data
          Science.
        </p>

        <nav className="nav">
          <button>About</button>
          <button>Projects</button>
          <button>FAQ</button>
          <button>Contact</button>
        </nav>
      </main>
    </>
  );
}