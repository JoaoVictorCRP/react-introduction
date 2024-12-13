// Props

// * Read-only properties that are shared between components.
// * A parent component can send data to a child component.
// * It works as sending paramethers, but with key and value

// <Component key=value />

import Student from "./Student/StudentCard.tsx";

function App() {
  return(
    <>
      <Student name="Bob Esponja" age={25}/>
      <Student name="Patrick" age={30}/>
      <Student name="Lula Molusco" age={40}/>
      <Student name="Sandy Bochechas" age={28}/>
      <Student/>
    </>
  );
}

export default App
