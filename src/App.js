import "./App.css";
import Comp1 from "./Components.js/Comp1";
import Comp2 from "./Components.js/Comp2";
import Comp3 from "./Components.js/Comp3";

function App() {
  return (
    <div>
      <Comp1 surname="Smith" />
      <Comp2 lastname="Reddy" />
      <Comp3>Janifar</Comp3>
    </div>
  );
}

export default App;
