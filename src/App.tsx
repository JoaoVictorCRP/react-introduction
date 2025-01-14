// useState() => Re-renders the component when the state value changes.

// useRef() => "use Reference" DOES NOT CAUSE THE RE-RENDER WHEN THE VALUE CHANGES.
//              It is used When you want a component to "remember" some information,
//              BUT you don't want that information to trigger new renders.

//              1.  Accessing/Interacting with DOM elements.
//              2.  Handling Focus, Animations and Transitions.
//              3.  Managing Timers and Intervals

import ComponentA from "./assets/ComponentA.tsx";

function App() {
  return(<ComponentA/>);
}

export default App
