
function Food(){

    const food1:string = "Laranja";
    const food2:string = "Banana";

    return(
        <>
        <h3>Frutinhas</h3>
        <ul>
            <li>Maçã</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
        </>
    );
};

export default Food;