import logo from "./logo.svg";
import "./App.css";
import Comp1 from "./Components.js/Comp1";
import Comp2 from "./Components.js/Comp2";

function App() {
  return (
    <div>
      <Comp1 surname="Smith" />
      <Comp2 />
    </div>
  );
}

export default App;
