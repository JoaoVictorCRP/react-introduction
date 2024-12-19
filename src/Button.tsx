function Button (){
    
    const handleClick = (e:MouseEvent<HTMLButtonElement>) => {
        console.log(e);
        e.target.textContent = 'Outch! :('; // Modifying button based on the property of the event
    }

    return (
        <button onClick={(e) => handleClick(e)}>Clique aqui :)</button> // Arrow function is used to prevent a callback function to execute imeadiatelly due to its parentesis  
    );
}

export default Button;