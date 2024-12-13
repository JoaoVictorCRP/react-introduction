function Button(){
    const styles = {
        "background-color": "hsl(50, 100%, 60%)",
        "color": "#fff",
        "padding": "10px 20px",
        "border-radius": "5px",
        "border": "2px solid black",
        "cursor": "pointer",
        "margin": "2px"
    }

    return(
        <button style={styles}>
            Clique Aqui
        </button>
    );
}

export default Button