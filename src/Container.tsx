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
        setAge(age + 1);
    }

    const decreaseAge = () => {
        setAge(age - 1);
    }

    const ToggleEmployment = () => {
        setEmployed(!isEmployed)
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