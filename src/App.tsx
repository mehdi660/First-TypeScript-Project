/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

function App() {
  const [prix, setPrix] = useState(1);

  return (
    <div>
      <input
        type="text"
        value={prix}
        onChange={(e) => setPrix(e.target.value)}
      />
      <h1>{prix * 2} euros</h1>
    </div>
  );
}

export default App;

// Typage explicite

// Typage Implicite ( à privilégier)
