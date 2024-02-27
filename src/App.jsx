import "./App.css";
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";

function App() {
  return (
    <div>
      <Heading color="olive" text="Welcom!" fontSize="50px" />
      <DoubleDice />
      <ListPicker values={[1, 2, 3]} />
      <ListPicker values={["a", "b", "c"]} />
      <Greeter person="Ted" from="Colt" />
      <Die numSides={20} />
    </div>
  );
}

export default App;
