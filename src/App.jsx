import { useState } from "react";
import "./App.css";

function App() {
  // Estado para el contador
  const [count, setCount] = useState(0);

  // Función para incrementar
  const increment = () => setCount(count + 1);

  // Función para decrementar
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      <h1>Contador</h1>
      <p>El valor actual es: {count}</p>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
