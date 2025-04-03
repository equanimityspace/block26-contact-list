import { useState } from "react";
import FetchUsers from "./components/Users";
import DisplayUser from "./components/User";

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
