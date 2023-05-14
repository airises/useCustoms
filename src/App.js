import "./App.css";
import Counter from "./components/counter/Counter";
import Input from "./components/input/Input";
import Timer from "./components/timer/Timer";

function App() {
  return (
    <div className="App">
      <Counter />
      <Input />
      <Timer />
    </div>
  );
}

export default App;
