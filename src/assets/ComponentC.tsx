import ComponentD from "./ComponentD";

import { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentC() {
    const user = useContext(UserContext);
    
    const style = {
        "background-color":"green"
    }

    return(
        <div className="box" style={style}>
            <h1>Componente C</h1>
            <h2>{`Olá novamente, ${user}`}</h2>
            <ComponentD/>
        </div>
    )
}

export default ComponentC;