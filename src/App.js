import Mobile from "../src/mobile/components/Home/Mobile";
import Desktop from "./desktop/components/Home/Desktop";

function App() {

  const x = window.matchMedia("(max-width: 768px)");

  return (
    <div className="App">
    {x.matches ? <Mobile /> : <Desktop />}
    </div>
  );
}

export default App;
