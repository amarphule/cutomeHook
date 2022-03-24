import { useEffect, useState } from "react";
import "./styles.css";

const useDocumentTitle = (counter) => {
  useEffect(() => {
    document.title = counter;
  }, [counter]);
};

export default function App() {
  const [counter, setCounter] = useState(0);
  useDocumentTitle(counter);
  return (
    <div className="App">
      <button onClick={() => setCounter((counter) => counter + 1)}>
        {counter}
      </button>
    </div>
  );
}
