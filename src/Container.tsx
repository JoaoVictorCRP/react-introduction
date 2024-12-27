// update function = A function passed as an argument to setState() usually
//                   ex: setYear(arrow fucntion)
//                   Allow for safe updates BASED ON THE PREVIOUS UPDATE
//                   Used with multiple state updates and asynchronous functions
//                   TIP: It is a good practice to use update functions whenever possible


// Let's update or previous component with an update function

import {useState} from "react";
function Container() {
    const [name, setName] = useState<string>("Anônimo");
    const [age, setAge] = useState<number>(18);
    const [isEmployed, setEmployed] = useState<boolean>(true);
    const updateName = () => {
        const newName = prompt('Insira seu nome:') || name;
        setName(newName);
    }
    const increaseAge = () => {
        

        setAge(prevAge => prevAge+1); // React documentation recommends to use " prevName " for the previous state, or...
        setAge(prevAge => prevAge+1);
        setAge(prevAge => prevAge+1);

        // Update functions are passed as queues to the React library, so it will execute each one of the functions above
        // in a FIFO scheme. Finally, we will have incremented +3 on the original value.
    }
    const decreaseAge = () => {
        setAge(a => a-1);  // The variable's first letter, in our case, "a". 
    }
    const ToggleEmployment = () => {
        setEmployed(!isEmployed);
    }
    return (
        <div>
            <p>Nome: {name}</p>
            <button onClick={updateName}>Alterar nome</button>
        
            <p>Age: {age}</p>
            <button onClick={decreaseAge}>Rejuvenescer -</button>
            <button onClick={increaseAge}>Envelhecer +</button>
            
            <p>Empregado: {isEmployed ? "Sim" : "Não"}</p>
            <button onClick={ToggleEmployment}>Alterar vínculo</button>
        </div>
    );
}
export default Container;