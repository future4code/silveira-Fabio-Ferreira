import React, { useState } from "react";
import { Router } from "./routes/Routes";

function App() {
  const token = localStorage.getItem('token')
  const [nameButton, setNameButton] = useState(token ? 'logout' : 'login')
  return (
    <div>
      <Router nameButton={nameButton} setNameButton={setNameButton} />
    </div>
  );
}

export default App;
