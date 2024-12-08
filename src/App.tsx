import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Food from "./Food.tsx";

function App() {
  return(
    /*This is a fragment, we can use it to return multiple element in one component, in this case "App"*/ 
    <>  
      <Header/>
      <Food/>
      <Footer/>
    </>
  );
}

export default App
