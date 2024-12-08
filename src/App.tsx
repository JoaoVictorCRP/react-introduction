import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

function App() {
  return(
    /*This is a fragment, we can use it to return multiple element in one component, in this case "App"*/ 
    <>  
      <p>Abaixo temos um componente Header.</p>
      <Header/>
        
      <Footer/>
    </>
  );
}

export default App
