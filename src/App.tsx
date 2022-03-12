import { useState } from "react";
import { Nav_Bar } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav_Bar />
    </>
  );
}

export default App;
