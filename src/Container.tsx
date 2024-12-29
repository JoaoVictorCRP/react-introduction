import{useState} from "react";

// Updating ARRAYS in state

function Container() {
    const [foods, setFoods] = useState<Array<string>>(["Maçã", "Laranja", "Banana"]);

    function handleAddFood (){
        const newFood:string = (document.getElementById("foodInput") as HTMLInputElement).value; // Casting variable type
        (document.getElementById("foodInput") as HTMLInputElement).value = '';
        setFoods(prevFoods => [...prevFoods, newFood])
    }

    function handleRemoveFood (index:number){
        setFoods(prevFoods => prevFoods.filter((_element, i) => i !== index)) // Argument with underscore means "ignore it". In this case, we shall only use the index to filter the deleted item.
    }

    return(
        <>
            <h1>Lista de Frutas</h1>
            <ul>
                {foods.map((food, index) => 
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>)
                }
            </ul>
            <input type="text" id="foodInput" placeholder="Digite o nome da fruta"/>
            <button onClick={handleAddFood}>Adicionar fruta</button>
        </>
    );
}
export default Container;