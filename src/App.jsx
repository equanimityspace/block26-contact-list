import { useState } from "react";
import FetchUsers from "./components/FetchUsers";
import DisplayUser from "./components/DisplayUser";

import "./App.css";

function App() {
  const [userId, setId] = useState(null);

  return (
    <>
      {userId ? (
        <DisplayUser userId={userId} setId={setId} />
      ) : (
        <FetchUsers setId={setId} />
      )}
      ;
    </>
  );
}

export default App;
