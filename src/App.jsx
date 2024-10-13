import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="app">
    {login ? (
        <Login setLogin={setLogin} />
    ) : (
        <Register setLogin={setLogin} />
    )}
</div>
  );
}

export default App;
