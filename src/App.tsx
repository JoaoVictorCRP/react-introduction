// useContext() => React Hook that allows you to share values 
//                 between multiple levels of components
//                 without passing props through each level.
//                 Very cool, basically, one component can USE the CONTEXT of its another fellow component


// PROVIDER COMPONENT
// 1. import { createContext } from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//        <Child/>
//    <MyContext.Provider>

// CONSUMER COMPONENT
// 1. import { useContext } from 'react';
//    import { MyContext } from './ComponentA';
// 2. const value = useContext(MyContext);s

import ComponentA from "./assets/ComponentA";

function App() {
  return(<ComponentA/>);
}

export default App
