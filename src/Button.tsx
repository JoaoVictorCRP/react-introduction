function Button (){
    // const handleClick = () => {
    //     console.log('Ouch, that hurt!')
    // }
    
    // const handleClick2 = (name:string) => {console.log(`${name}, stop clicking me!`)}

    let count = 0;
    let msg = '';
    const handleClick3 =  (name:string) => {
        count++;
        msg = count===1 ? `${name}, you clicked me ${count} time` : msg = `${name}, you cliked me ${count} times`;
        console.log(msg)
    }


    return (
        <button onClick={() => handleClick3('Joao')}>Clique aqui :)</button> // Arrow function is used to prevent a callback function to execute imeadiatelly due to its parentesis  
    );
}

export default Button;