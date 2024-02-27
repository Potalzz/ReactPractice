import "./App.css";
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from "./ColorList";
import Slots from "./Slots";
import ShoppingList from "./ShoppingList";

const data = [
  { item: "eggs", quantity: 12, completed: false },
  { item: "milk", quantity: 1, completed: true },
  { item: "chicken breasts", quantity: 4, completed: false },
  { item: "carrots", quantity: 6, completed: true },
];

function App() {
  return (
    <div>
      <ShoppingList items={data} />
      {/* <Heading color="olive" text="Welcom!" fontSize="50px" /> */}
      {/* <Slots /> */}
      {/*
      <DoubleDice />
      <ListPicker values={[1, 2, 3]} />
      <ListPicker values={["a", "b", "c"]} />

      <Greeter person="Ted" from="Colt" />

      <Die numSides={20} />

      <ColorList colors={["red", "pink", "purple", "teal"]} />
      <ColorList colors={["orange", "aqua", "blue", "tomato"]} /> */}
    </div>
  );
}

export default App;
