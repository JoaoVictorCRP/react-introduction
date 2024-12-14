interface loginInformation {
    username: string,
    isLoggedIn: boolean
};

function UserGreeting(props:loginInformation){
    if(props.isLoggedIn){
        return (
            <h2>Oi, {props.username}! Seja muito bem vindo.</h2>
        );
    } 

    return (
        <>
        <h2>Por favor, faça login para continuar </h2> 
        <input type="text"></input>
        </>
    );
};

export default UserGreeting;