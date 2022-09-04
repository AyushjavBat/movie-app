import React from "react";
import Container from "./components/container";

function App() {
  let globalState = {
    id: 1,
    text: "Movie",
    movies: [],
  };

  return (
    <div className='App container'>
      <Container globalState={globalState} />
    </div>
  );
}

export default App;
