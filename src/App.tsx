// Props

// * Read-only properties that are shared between components.
// * A parent component can send data to a child component.
// * It works as sending paramethers, but with key and value

// <Component key=value />

import UserGreeting from "./UserGreeting/UserGreeting";

function App() {
  return(
    <>
      <UserGreeting isLoggedIn={true} username="JoaoVictor"/>
      {/* <UserGreeting/> */}
    </>
  );
}

export default App
