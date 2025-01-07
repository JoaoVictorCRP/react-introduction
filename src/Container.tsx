// useEffect() = React Hook that tells React DO SOME CODE WHEN (chose one)...
//               - This component re-renders
//               - This component mounts (component is added to the DOM)
//               - The state of a value changes.


// useEffect(function, [dependencies])

// 1. useEffect ( () => {} )            // Runs after every re-render
// 2. useEffect ( () => {}, [] )        // Runs only on mount (run & done)
// 3. useEffect ( () => {}, [value])    // Runs on mount + when value changes


// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts (component is removed from the DOM)

// PS: Understand "useEffect" in React as "useSideCode".


import { useEffect, useState } from "react";

function Container() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
   
    
    // Capturing window size
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    
    //window.addEventListener("resize", handleResize);
    //console.log("EVENT LISTENER ADDED"); // ATTENTION: the event listener above will be placed each time the page re-renders...
    // To fix this, lets add the 2 lines above into a useEffect hook:
    
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener("resize", handleResize); // Removing the event listener (cleaning up)
            console.log("EVENT LISTENER REMOVED")
        }
    }, [])



    useEffect(() => { // UseEffect is pretty interesting if you want to keep your code organized and more clear, since this block of code will be explicit written to be run based on one or more values or components.
        document.title = `Você clicou ${count} vezes | Cor: ${color}`;

        // return () => {
            // You can use the return statement inside useEffect to do a Clean UP on a DOM element.
        // }
    })

    function addCount(){
        setCount(c => c+1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "yellow" : "green");
    }

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <>
            <p style={{color: color}}>Contagem de Cliques: {count}</p>
            <button onClick={addCount}>Clique aqui!</button>
            <button onClick={changeColor}>Mudar cor</button>

            <p>Largura da janela: {width}px</p>
            <p>Tamanho da janela: {height}px</p>
        </>
    );
}
export default Container;