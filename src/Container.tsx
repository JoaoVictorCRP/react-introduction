import{useState} from "react";

// Updating ARRAY of OBJECTS in State

function Container() {
    const [games, setGames] = useState<Array<object>>([]);
    const [gameName, setGameName] = useState<string>("");
    const [gameProducer, setGameProducer] = useState<string>("");
    const [gameYear, setGameYear] = useState<string>("");

    function handleAddGame(){
        const newGame = {
            name: gameName,
            producer: gameProducer,
            year: gameYear
        };
        setGames(games => [...games, newGame]);

        // Setting input boxes to be null
        setGameName("");
        setGameProducer("");
        setGameYear("");
    }

    function handleRemoveGame(index:number) {
        setGames(games.filter((_element, i) => i!==index));
    }

    function handleNameChange(event:React.ChangeEvent<HTMLInputElement>){
        setGameName(event.target.value);
    };
    
    function handleProducerChange(event:React.ChangeEvent<HTMLInputElement>){
        setGameProducer(event.target.value);
    };

    function handleYearChange(event:React.ChangeEvent<HTMLInputElement>){
        setGameYear(event.target.value);
    };

    return(
        <>
            <h1>Lista de Jogos</h1>

            <ul>
                {games.map((element, index) => <li key={index} onClick={() => handleRemoveGame(index)}> Nome: {element.name} - Produtora: {element.producer} - Ano: {element.year}</li>)}
            </ul>

            <input type="text" id="gameNameInput" placeholder="Digite o nome do jogo" value={gameName} onChange={handleNameChange}/> <br/>
            <input type="text" id="gameProducerInput" placeholder="Digite o nome da produtora" value={gameProducer} onChange={handleProducerChange}/> <br/>
            <input type="number" id="gameYearInput" placeholder="Digite o ano de lançamento" value={gameYear} onChange={handleYearChange}/> <br/>    
            <button onClick={handleAddGame}>Adicionar jogo</button>
        </>
    );
}
export default Container;