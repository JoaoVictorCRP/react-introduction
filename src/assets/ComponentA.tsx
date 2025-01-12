import { useState, createContext, CSSProperties } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext("Anônimo");

function ComponentA() {
    const [user, setUser] = useState("JoaoVictorCRP")

    const style = {
        "background-color":"red"
    }

    return(
        <div className="box" style={style}>
            <h1>Componente A</h1>
            <h2>{`Olá, ${user}!`}</h2> 
            {/*What if i want to use the "user" variable in component D? Well, i would need to use props
            All the way down to component D (props drilling), IF it wasn't for UseContext, that helps us
            to share variables state between components semaleslly. Lets see it in action with "UserContext". */}
            
            <UserContext.Provider value={user}>
                <ComponentB/> {/* ComponentB will be a consumer component, check the code to see how 
                to set up a Context consumer component*/}
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA;