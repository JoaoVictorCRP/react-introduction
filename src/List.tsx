function List(){
    const fruits = [
        {
            "id":1,
            "name":"Maçã",
            "calories":100
        }, 
        {
            "id":2,
            "name":"Laranja",
            "calories":50
        }, 
        {
            "id":3,
            "name":"Banana",
            "calories":90
        }, 
        {
            "id":4,   
            "name":"Coco",
            "calories":75
        }, 
        {   
            "id":5,
            "name":"Abacaxi",
            "calories":120
        }
    ];

    const listItems = fruits.map(fruit =>
        <>
            <tr key={fruit.id}> { /* When rendering lists, react demands that each element must have its own unique prop named "key", so it can manage the items being rendered. */ }
                <td>{fruit.name}</td>
                <td>{fruit.calories}</td>
            </tr>

        </>
    );

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Fruta</th>
                        <th scope="col">Calorias</th>
                    </tr>
                </thead>

                <tbody>
                    {listItems}
                </tbody>
            </table>
        </>
    );
};

export default List;