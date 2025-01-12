import { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {

    const user = useContext(UserContext);

    const style = {
        "background-color":"gold"
    }

    return(
        <div className="box" style={style}>
            <h1>Componente D</h1>
            <h2>{`Tchauzinho, ${user}.`}</h2>
        </div>
    )
}

export default ComponentD;