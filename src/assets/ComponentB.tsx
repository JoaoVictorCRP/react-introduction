import ComponentC from "./ComponentC";

function ComponentB() {
    const style = {
        "background-color":"blue"
    }

    return(
        <div className="box" style={style}>
            <h1>Componente B</h1>
            <ComponentC/>
        </div>
    )
}

export default ComponentB;